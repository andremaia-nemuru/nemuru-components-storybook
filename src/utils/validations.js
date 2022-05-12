export const DNI_REGEX = /^(\d{8})([A-Za-z])$/;
export const NIE_REGEX = /^[XYZxyz]\d{7,8}[A-Za-z]$/;
export const IBAN_REGEX =
    /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/g;
export const CUPS_REGEX = /^ES.{18,20}$/;
export const SPANISH_LICENSE_PLATE_REGEX =
    /^(\d{4})([B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z]{3})$/;
export const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phonePattern = /^\d{9}$/;

export const spainIdType = (str) => {
    if (str) {
        if (str.match(DNI_REGEX)) {
            return 'dni';
        }
        if (str.match(NIE_REGEX)) {
            return 'nie';
        }
    }
    return false;
};

export const validDNI = (dni) => {
    const dniLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letter = dniLetters.charAt(parseInt(dni, 10) % 23);

    return letter === dni.charAt(8);
};

export const validNIE = (nie) => {
    // Change the initial letter for the corresponding number and validate as DNI
    let niePrefix = nie.charAt(0);

    switch (niePrefix) {
        case 'X':
            niePrefix = 0;
            break;
        case 'Y':
            niePrefix = 1;
            break;
        case 'Z':
            niePrefix = 2;
            break;
        default:
        // no default
    }

    return validDNI(niePrefix + nie.substr(1));
};

export const validateDNIorNIE = (document) => {
    let valid = false;
    if (document) {
        // Ensure upcase and remove whitespace
        const documentUp = document.toUpperCase().replace(/\s/, '');
        const type = spainIdType(documentUp);
        switch (type) {
            case 'dni':
                valid = validDNI(documentUp);
                break;
            case 'nie':
                valid = validNIE(documentUp);
                break;
            default:
            // no default
        }
    }
    return valid;
};

export const validatePhoneWithPrefix = (num) => {
    if (!num) {
        return false;
    }
    let validatedNum = num;
    if (
        validatedNum.substring(0, 2) === '00' ||
        validatedNum.substring(0, 1) === '+' ||
        validatedNum.length === 9
    ) {
        if (validatedNum.substring(0, 2) === '00') {
            validatedNum = '+'.concat(num.substring(2));
        }
        if (validatedNum.length === 9) {
            validatedNum = '+34'.concat(num);
        }
        if (validatedNum.length < 9) {
            return false;
        }
    } else return false;
    return validatedNum;
};
