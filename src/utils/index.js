import config from '../config';

export function getIconName(str) {
    return config.ICONS[str] || '';
}

export function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

export function formatDeleteSpacesInStringAndUpperCase(str) {
    if (str) {
        return str.replace(/\s/g, '').toUpperCase();
    }
}

export function formatSnakecaseToSpaces(text) {
    return text && text.replace(/_/g, ' ');
}

export function normalizeText(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function formatNumber(num) {
    return new Intl.NumberFormat('ca-CA', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);
}

export function formatMoney(num, forcedDec) {
    const numIsInteger = Number((num % 1).toFixed(2)) === 0;
    const defaultDec = numIsInteger ? 0 : 2;
    const dec = forcedDec === undefined ? defaultDec : forcedDec;
    return new Intl.NumberFormat('ca-CA', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: dec,
        maximumFractionDigits: dec,
    }).format(num);
}

export function formatMoneyNum(num, forcedDec) {
    const money = formatMoney(num, forcedDec);
    return money.replace('€', '').trim();
}

export function formatPercent(num) {
    return new Intl.NumberFormat('es-ES', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);
}

export function parseStringAmountWithUnitToNumber(str) {
    return str
        ? Number(str.replace(/\./g, '').replace(/,/g, '.').slice(0, -2))
        : null;
}

export function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}

export const formatAmountForDisplay = (amt, digits = 1) => {
    const Ks = amt / 1000;
    if (Ks >= 1000) {
        return `${(Ks / 1000).toFixed(digits)}M`;
    }
    return `${Ks.toFixed(digits)}K`;
};

export const capitalizeEachWord = (text) =>
    text
        .split(' ')
        .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(' ');
