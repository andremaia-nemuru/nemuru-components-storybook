import { assetPackIds } from '../../utils';

export const THEME_NAMES = {
    neutral: 'neutral',
    nemuru: 'nemuru',
    testuru: 'testuru',
    real_turf: 'real_turf',
    caixabank: 'caixabank',
    citiservi: 'citiservi',
    finanpay: 'finanpay',
    uponor: 'uponor',
    cochesnet: 'cochesnet',
    nemuru_sdk: 'nemuru_sdk',
    proinso: 'proinso',
};

export const defaultTheme = THEME_NAMES.neutral;

export const themedUrls = [
    ['localhost:', THEME_NAMES.neutral],
    ['nemuru.io', THEME_NAMES.neutral],
    ['nemuru.com', THEME_NAMES.neutral],
    ['0.0.0.0', THEME_NAMES.nemuru],
];
export const createSDKTheme = (accentColor = '#8e8e8e') => {
    return {
        themeName: THEME_NAMES.nemuru_sdk,
        palette: {
            primary: {
                main: accentColor,
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#b3b3b3',
                contrastText: '#353535',
            },
            dark: {
                main: '#eaeaea',
                contrastText: '#525252',
                accent: '#525252',
            },
            text: {
                primary: '#1b1b19',
                secondary: '#3c3b39',
            },
        },
        background: '#fff',
        customBorderRadius: {
            button: 5,
            paper: 10,
        },
        typography: {
            fontFamily: 'poppins, Raleway, monospace',
        },
        shadows: [
            'none',
            'none',
            'none', // 2 buttons
            'none', // 3 papers soft
        ],
    };
};

export const customThemes = {
    [THEME_NAMES.nemuru]: {
        themeName: THEME_NAMES.nemuru,
        palette: {
            primary: {
                main: '#4dd970',
                contrastText: '#08404d',
            },
            secondary: {
                main: '#08404d',
                contrastText: '#fff',
            },
            danger: {
                main: '#ef5957',
                contrastText: '#ffffff',
            },
            warning: {
                main: '#ffca28',
                contrastText: '#ffffff',
                light: 'rgba(255, 202, 40, 0.15)',
            },
            info: {
                main: '#36a3f7',
                contrastText: '#ffffff',
                light: '#E1F1FD',
            },
            success: {
                main: '#4dd970',
                contrastText: '#ffffff',
                light: 'rgba(73,217,106,0.15)',
            },
            error: {
                main: '#ef5957',
                contrastText: '#ffffff',
                light: 'rgba(239,87,87,0.15)',
            },
            text: {
                accent: '#4dd970',
                active: '#08404d',
                title: '#08404d',
                primary: '#4b5354',
                secondary: '#77787b',
            },
            // additional colors
            dark: {
                main: '#08404d',
                accent: '#4dd970',
                contrastText: '#ffffff',
                imageBackgroundOpacity: 0.9,
            },
            light: {
                main: '#f3f2ef',
                accent: '#4dd970',
                contrastText: '#08404d',
            },
            status: {
                active: '#4dd970',
                approved: '#43b46f',
                analysing: '#36a3f7',
                sent: '#08404d',
                cancelled: '#d8d8d8',
                denied: '#ef5957',
            },
            grey: {
                50: '#fafafa',
                100: '#f5f5f2',
                200: '#eae9e6',
                300: '#dad9d6',
                400: '#b6b5b2',
                500: '#969593',
                600: '#6e6d6b',
                700: '#5a5a57',
                800: '#3c3b39',
                900: '#1b1b19',
            },
        },
        background: null,
        logo: null,
        customBorderRadius: {
            button: 25,
            paper: 8,
            chip: 16,
        },
    },
    [THEME_NAMES.real_turf]: {
        themeName: THEME_NAMES.real_turf,
        logoUrl:
            'https://mcusercontent.com/9fe5713c5d971de550dce4ea7/images/2fab7ff3-7251-9ef0-d9ae-9a8370d74845.png',
        palette: {
            primary: {
                main: '#434343',
                contrastText: '#ffffff',
                accent: '#ee2737',
            },
            secondary: {
                main: '#ee2737',
                contrastText: '#ffffff',
            },
            dark: {
                main: '#eeeeee',
                contrastText: '#525252',
                accent: '#ff0000',
                imageBackgroundOpacity: 0.85,
            },
            light: {
                main: '#f6f6f6',
                accent: '#ee2737',
                contrastText: '#525252',
            },
            text: {
                title: '#3c3c3c',
                primary: '#525252',
                secondary: '#77787b',
            },
            extra: {
                statusSent: '#525252',
            },
            status: {
                sent: '#525252',
                denied: '#ee2737',
            },
        },
        background: '#f6f6f6',
        shadows: [
            'none',
            'none',
            'none', // 2 buttons
            'none', // 3 papers soft
            '0px 0px 20px 0px rgba(0 0 0 .5)', // 4 buttons hover
            'none', // 5
            '0px 2px 0px 0px rgb(239 61 69)', // 6 papers header
        ],
        customBorderRadius: {
            button: 2,
            paper: 0,
        },
        typography: {
            fontFamily: 'proxima_nova, Helvetica',
        },
    },
    [THEME_NAMES.caixabank]: {
        zendeskCustomerSupport: false,
        themeName: THEME_NAMES.caixabank,
        logoUrl: 'https://cdn.nemuru.com/assets/logos/caixabank-merchant.svg',
        palette: {
            primary: {
                main: '#007EAE',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#1A1A1A',
                contrastText: '#ffffff',
            },
            dark: {
                main: '#eeeeee',
                contrastText: '#1A1A1A',
                // main: "#1A1A1A",
                // contrastText: "#eeeeee",
                accent: '#007EAE',
                imageBackgroundOpacity: 0.85,
            },
            text: {
                title: '#1A1A1A',
                primary: '#555555',
                secondary: '#77787b',
            },
            status: {
                sent: '#525252',
                denied: '#ef5957',
            },
            info: {
                main: '#007EAE',
                contrastText: '#ffffff',
                light: '#d6dbdf',
            },
            warning: {
                main: '#f4c53d',
                contrastText: '#ffffff',
                light: '#fff6e7',
            },
            success: {
                main: '#007EAE',
                contrastText: '#ffffff',
                light: 'rgba(0,125,174,0.15)',
            },
        },
        background: '#f6f6f6',
        customBorderRadius: {
            button: 2,
            paper: 0,
        },
        typography: {
            fontFamily: 'Arial, Helvetica, sans-serif',
        },
    },
    [THEME_NAMES.cochesnet]: {
        zendeskCustomerSupport: true,
        themeName: THEME_NAMES.cochesnet,
        logoUrl: 'https://cdn.nemuru.com/assets/logos/cochesnet.svg',
        palette: {
            primary: {
                main: '#00031c',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#ed2134',
                contrastText: '#ffffff',
            },
            dark: {
                main: '#b2bec8',
                contrastText: '#000',
                accent: '#ed2134',
                imageBackgroundOpacity: 0.85,
            },
            text: {
                title: '#00031c',
                primary: '#00031c',
                secondary: '#3d4a5b',
            },
            status: {
                sent: '#525252',
                denied: '#ed2134',
            },
            info: {
                main: '#242F44',
                contrastText: '#ffffff',
                light: '#d6dbdf',
            },
            warning: {
                main: '#d87b26',
                contrastText: '#ffffff',
                light: '#fff6e7',
            },
            success: {
                main: '#057e4b',
                contrastText: '#ffffff',
                light: 'rgba(0,125,174,0.15)',
            },
            grey: {
                50: '#fafafa',
                100: '#eef0f5',
                200: '#dce0e3',
                300: '#d4dbe1',
                400: '#bcc8d2',
                500: '#98a4b7',
                600: '#778598',
                700: '#424e5e',
                800: '#3b4356',
                900: '#00031c',
            },
        },
        assetPackDefsId: assetPackIds.OUTLINED,
        background: '#e6ebf1',
        customBorderRadius: {
            button: 40,
            paper: 4,
        },
        typography: {
            // fontFamily: "'Montserrat', sans-serif",
            fontFamily: "'Open Sans', sans-serif",
        },
    },
    [THEME_NAMES.citiservi]: {
        themeName: THEME_NAMES.citiservi,
        logoUrl:
            'https://mcusercontent.com/9fe5713c5d971de550dce4ea7/images/5968ce68-87ee-c755-a361-3d698ad116f0.png',
        palette: {
            primary: {
                main: '#37D0A0',
                contrastText: '#ffffff',
                accent: '#F0AB5C',
            },
            secondary: {
                main: '#212529',
                contrastText: '#ffffff',
            },
            dark: {
                main: '#eeeeee',
                contrastText: '#212529',
                accent: '#F0AB5C',
                imageBackgroundOpacity: 0.85,
            },
            light: {
                main: '#f6f6f6',
                accent: '#F0AB5C',
                contrastText: '#212529',
            },
            info: {
                main: '#F0AB5C',
            },
            success: {
                main: '#37D0A0',
            },
            text: {
                accent: '#37D0A0',
                active: '#F0AB5C',
                title: '#212529',
                primary: '#4b5354',
                secondary: '#77787b',
            },
            extra: {
                statusSent: '#525252',
            },
            status: {
                active: '#37d0a0',
                approved: '#189e74',
                analysing: '#36a3f7',
                sent: '#08404d',
                cancelled: '#d8d8d8',
                denied: '#ef5957',
            },
        },
        background: '#f6f6f6',
        shadows: [
            'none',
            'none',
            'none', // 2 buttons
            'none', // 3 papers soft
        ],
        customBorderRadius: {
            button: 6,
            paper: 6,
            chip: 10,
        },
        typography: {
            fontFamily: "'Montserrat', sans-serif",
        },
    },
    [THEME_NAMES.finanpay]: {
        themeName: THEME_NAMES.finanpay,
        logoUrl: 'https://cdn.nemuru.com/assets/logos/finanpay.svg',
        palette: {
            primary: {
                main: '#0084d5',
                contrastText: '#ffffff',
                accent: '#aadb1e',
            },
            secondary: {
                main: '#212529',
                contrastText: '#ffffff',
            },
            dark: {
                main: '#eeeeee',
                contrastText: '#212529',
                accent: '#41b6e6',
                imageBackgroundOpacity: 0.85,
            },
            light: {
                main: '#f6f6f6',
                accent: '#aadb1e',
                contrastText: '#212529',
            },
            info: {
                main: '#aadb1e',
            },
            success: {
                main: '#0084d5',
            },
            text: {
                accent: '#0084d5',
                active: '#aadb1e',
                title: '#212529',
                primary: '#4b5354',
                secondary: '#77787b',
            },
            extra: {
                statusSent: '#525252',
            },
            status: {
                active: '#aadb1e',
                approved: '#41b6e6',
                analysing: '#0084d5',
                sent: '#1961ae',
                cancelled: '#d8d8d8',
                denied: '#ef5957',
            },
        },
        background: '#f6f6f6',
        customBorderRadius: {
            button: 10,
            paper: 10,
            chip: 10,
        },
        typography: {
            fontFamily: 'proxima_nova, Helvetica',
        },
    },
    [THEME_NAMES.uponor]: {
        themeName: THEME_NAMES.uponor,
        logoUrl:
            'https://mcusercontent.com/9fe5713c5d971de550dce4ea7/images/e5b226d8-c0b1-32d0-35e4-482edfd3b5c7.png',
        background: '#ffffff',
        palette: {
            primary: {
                main: '#f08122',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#0072bc',
                contrastText: '#ffffff',
            },
            success: {
                main: '#0cab66',
            },
            warning: {
                main: '#f08122',
            },
            dark: {
                main: '#0072bc',
                contrastText: '#d8e0e7',
                accent: '#fff',
                imageBackgroundOpacity: 0.84,
            },
            light: {
                main: '#ebf0f4',
                accent: '#f08122',
                contrastText: '#3c3c3b',
            },
            text: {
                title: '#0072bc',
                primary: '#3c3c3b',
                secondary: '#77787b',
            },
            status: {
                active: '#11ca89',
                approved: '#06b097',
                analysing: '#0072bc',
                sent: '#005084',
            },
        },
        shadows: [
            'none',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
            '0px 2px 5px 0px #0000001a, 0 20px 40px -5px #0a202d1c',
        ],
        customBorderRadius: {
            button: 0,
            paper: 0,
        },
        typography: {
            fontFamily: 'Arial, Helvetica',
        },
    },
    [THEME_NAMES.testuru]: {
        themeName: THEME_NAMES.testuru,
        zendeskCustomerSupport: true,
        logoUrl:
            'https://images3.septimaentrada.com/L7F6aHNDlgPwi_sdGr2VBjm9NK4=/0x0/uploads/media/2019/06/17/logo-de-los-tigres-de-1.jpg',
        palette: {
            primary: {
                main: '#a5479a',
                contrastText: '#faccf2',
            },
            secondary: {
                main: '#19afd0',
                contrastText: '#e2edf1',
            },
            warning: {
                main: '#ffca28',
                contrastText: '#ffffff',
                light: 'rgba(255, 202, 40, 0.15)',
            },
            info: {
                main: '#36a3f7',
                contrastText: '#ffffff',
                light: '#E1F1FD',
            },
            success: {
                main: '#a8e81d',
                contrastText: '#ffffff',
                light: '#e8f6b5',
            },
            error: {
                main: '#ef5957',
                contrastText: '#ffffff',
                light: 'rgba(239,87,87,0.15)',
            },
            text: {
                title: '#197f56',
                primary: '#000000',
                secondary: '#9b9ba1',
            },
            // additional colors
            dark: {
                main: '#1f0703',
                accent: '#bf4a42',
                contrastText: '#ac8e8c',
                imageBackgroundOpacity: 0.8,
            },
            status: {
                active: '#4dd970',
                approved: '#43b46f',
                analysing: '#36a3f7',
                sent: '#08404d',
                cancelled: '#d8d8d8',
                denied: '#ef5957',
            },
            grey: {
                50: '#fffce9',
                100: '#fff6c7',
                200: '#fff1a3',
                300: '#ffeb80',
                400: '#ffe666',
                500: '#ffe04c',
                600: '#f0cf48',
                700: '#dbba41',
                800: '#c6a33c',
                900: '#a27e32',
            },
        },
        assetPackDefsId: assetPackIds.FILLED,
        background:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAMAAADfDTFxAAABAlBMVEXu7u7x8fEAAADv7+////8QEBCenp4jIyPk5OQ9PT2RkZEeBwPDw8O14euih4S/SkJjY2P6vu3Ozs5RUVG3t7c1ovf//OkYrtCkR5oWfVzvWVf+ySiboJ2n6B3z69Pn9rXh8f3w2dqrq6vZ2dl0dHSDg4MGBgb/8aP54mkJCQn29vYfHx8xmOnY5qnfU1HtvCWc2Rvj28UWosKZQpAVdVbgy8sXFxfS4eyXfnuyRT7/++Tpsd2p0tuBgYHo02JwcHDu69n+756Znpt5eXnX5/La6fXo0tPr5Mzg7q/5vu3w2dmn5x3Xyb9ra2vRvb4Vl7WPPobZxVsTbVDe7vrapc6exM0JB9DXAAAnv0lEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWEPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdirYxwAQSAIgITCaGJh9Aei//+iFwEtbS1mCvaAXL0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/VHK1zCkNbZ72+Ig8U5oitrgdOTwL4z3l5ixrnEe81AQAvpTclSjgbn8LuPbtxZ6969YJRFEY3lqS54KmQECRmkvl0nWUV8j7P01Ge8BTOJLtHJPC+r8CFnPof6ETrwD7S8GXLtkPi9koxWQAAOAjAQ42SRo8o/UkSnsPcLWcmbbKU5x9tRIPkibLqoerpxsAAHwswB7a4wywjdLYA+y/L1KUrFqlaukBLpKKX0OWRgMAAB8NsPfzDPAUpaMHWLN2GzTXZa3OdY09wIekrd18AQCA9206xc2CTnnrAdagaLOGFuBJUjlDq0uoDym3BQAAPhHgY7LXAO/JeoC1SFPU0gJ8SKPVefQAx8WsWiTNBgAAPvEfsAuS7JC09ABLW1SQkgc4RWm1QYrJ3whTfM0uH8AAAPx7gFNsee0B3hU11yV/4xRacf0kEGAAAB4M8JXUHuAgaWgBzrrkVtyz1wQYAIDHAnwltQd4krR4gIsvs1VS8eKevSbAAAA8FuArqT3AFqXkAd7Pr90kaffiXr0mwAAAAAAAAAAAAAAAAAAAAAD+l5/PT2/9MgAAcKfn3y9vPRkAALiTfvyFDAAA3OnphQADAPAeAgwAwHdAgAEAeMAtAY7Kfp+kyar1fF60WNLse1AyAADwlQHOKlaF3AI8zio9wBoIMAAAdwR4j8GqPHiAN6356AGOmggwAAB3BPjI9Vby4q0N2o7YAxziTIABALgjwKs2s+FoAZ5HK1p7gFcFAgwAwA0BthjMcvEAT1rr3nuAbYyJAAMAcEOAx9FKNg/wEJNfeoC3OBJgAABuCHCI6RhagLNc6AG2oJUAAwDw9QHetOZiNcBe3SrP1gNscz4IMAAAXx7gmthsHuC93qtQZw9wUSTAAIA/7N27btswFIDhgwOYN2igRT+BKHXJ2DEoOmfr0Pd/ltqHFgzfpAxJ2tr/NxgUbXr9QVsXfHyAnaYWYO9srmqSU4AlKQEGAODjA9xrZwEetIrJ8RTgvUiAAQDgYQwAAPwPeCA/AAB/wcuv79c2AgAAPtOPl821nwIAAAAAAAAAAAAAAAAAAAAA/6ifG72WBQAAfKbN63b7tr3AjTgAAPhc3w71JcAAAHwl2wGfvL0RYAAAbiDAAAA8AgvwJZXZkFW9E+OiarRx0kH2gibxerTbqZk/PekkZpdVdarS6+w0CkmbItVnOSgxnL5TAAB4TMsBHr0T2UVLY46DyGDjpD4cA7zXq7PQtl66diS++Jbww3HIvrY3ezHzKGkQMy902s3fCQDA41oK8FzDnTqRKVoqq59EktfxXoAlx9bdTgc7zLZM3VqApfgqnSYhwACAx7cY4JjFuJ0V1DgfJPmku3sBHn3L8HF1LNKsBrj6EmIRAgwAeAILAT5Ft+1oxXQ6SPJS4p0A2zsSvBOn1RKb3WqA57noKwEGADyDpQD3OsjMzaUM6iR56TTdDvBki5xWm7cJ1ZjCvQA3LbdZnRBgAMAzWLgMaTHAMml3GWATbU0p7cW4pLpyEpapXgsBBgA8haUAh7OfoPuzn6AlxHJjB+zmqaY/9XtcD3DxTh0BBgA8g8WTsEoWU50Ef3YSliU5XQV4LnDy4bDMxk0sqwF2OkjWjgADAJ7Aey5DqjGJTLHKXoiTtABL9jcCLOWwJo7zFUmdDm24ugPudBIJvhBgAMATeMeNOIZYLm/E4a3FNwNcfZSuhVuG/VS2rbNb/Q84xNiWJAIMAHh8ywEWV85vRVlsnHybuA6wzU5TlMaPbZmOdfksaO3HY7SzdgQYAPDwNq88jhAAgDUEGACAR6BbAgwAwJd7+f16bSMAgD/swTERAAAEAECLNDI4/VsJYLb9P3zqymsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBl5w5yJQWhMArf/ANEw4CIKwDd/xb7cYVopV46PerR+QZQhSY1PJFSAQAAAAAAAAAA/oNaJJVqZpeG1X6EVVI+rNs3/QjNfkja+mE/LcvlZK5KxbqkIVjw0cYMAAC6TbftM8CxPOtWNaQ7wNqfAA/VujzOsaTp6otLtLhI2QAAQBclNU9v9NGGU1p2Cx7U3TscPaR3gMsrwNnmET9R1wxwMivSYs0XL/8hAAAwS1m9nPs7wG3sF5creJ5Xb7WvqQuvAM8j8xI6PgEOku7xYAMaAIBHVFdCM3sHuHqRh2Vc1hbpNJNr7wDb6mfERVqlMAPs+9irH+5WAwAAQ/jlP+Dgq82GefGaPaLyyuaPABefglTuZUua0tya1m4AAGBKp1z9lwAX/3Ys0voEeE6rFJqk+gS43NXdvPAAAODtuCSdHuC5MgK8bfsvW9DpUPexBX16dNt9MeyfUx3ZHV8NAAAMl1S8rZ8BjpKOu6zb901YyU7p6yasU9M+ipv7SIABAPhSJVVri1TfAfboto/HkOx5DClZW94BvqSlNWm67uL6mAkwAADfitzd0alZnOvh60UcPoUZ4KH6SrS7xnEUN/eJAAMA8C2sktZgHwH+66sovaX5HeArmc03XR2SwihunzIBBgAAAP6wd8cobkNRGEYvF6znJ1QIy5Besip37odZwux/N4nkgAwOpJEIE84p3s9bwVdeAAAAAAAAAAAAAAAAAOAb+Lif3n0GAHCk+9fj3SkAgCPljz/IAACOdHoIMADsYMcAl6zrXjIvy46//9e8xjmHWLR5DgBgzwDX7JZt6jPA/ZDdFuBsBRgAjgjwrTTL1nYN8JRjnbcAl7wIMAAcEeC5RkRXr2trm5zmsgW4KYMAA8ARAR5zimjnZ4CHProctwCP2QgwABwQ4ChNRO3WAF+W+NbbFuDoy1mAAeCAAPd9dDXWALflvD5bgKfSCzAAHBDgppzn9hngmqtmC3A0OQowAOwf4CnH2i0BXqv7Sx1eAhxDnQUYAHYPcAy1xhrgW41Fk5eXAHdZBBgA9g9wk+0zwKWJxZTtS4CjTQEGgP0DfMluDfCYU6z6+hrgqAIMAI4xAMB3IMAA8HcCDAD/Awf5AeAfuH893p0CADjSx/307jMAAAAAAAD4yd7d5DgKAwEULpUUl23RkhVzAgyz6Sv0qE8x97/KDHYQSieB1kg9P+F9i8RAKtsnEkIAAAAAAAAA/KPeT3orCQAA+Eqnt5db3IgDAICv9e2FAAMAsI8zYAAA/n87AR6SqjmpXFANdR11mJ+8RjG96HutlldPOknVJ1Wdipx1sa581CZLsSSzHPz6ngIAwHPaDvA457QPNY0pDCJDXUc1fwnwL2d1NbStl65tiWVrCZ+3fbLSDp6lWlZRvVTLoNNueU8AAJ7X4wCvNeznGk6hprLYJBJNx0cBlhRadzsd6maqY+r2AizZinQahQADAJ7fZoBDksr1taCVMy/RovaPAjxay/BlOmRpdgNcLPuQhQADAA5gI8BrdNsZrVSdDhJNcngQ4HpEvDlxWmpik9sJ8Ho0WCHAAIAj2ArwWYc1jkspvbo5wJ3G+wGe6pDTsuyfVDVE/yjAjZNZUicEGABwBL8bYJm0+xjgKtSZnNtD5aLq9kVYTTHNBBgAcAhbAfZXH0Gfrz6CFh/ynTNgt+xqzmu/x/0AZ3PqCDAA4Ai2Aiw5SVWceLu6CKsmOd4EeClwND+P1XUT8m6AnQ6StCPAAIAD+MzPkEqIIlMo89qHSVqAJdmdAEueZ8IosxSk06Etd8+AO51EvGUCDAA4gE/ciGMI+eONOKy2+G6Ai83V7WQ2aC/J5qNu9ztgH0IbiQQYAPD8tgMsLl/fijLXdbS24ybAbe80BWlsbGM6lu2roPU8XqKdtCPAAICnx58xAACwjwADAPAMCDAAAH+B8of8AAD8ea8/3m6dBAAAfKXvr6db7wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+MnO3aREDANgGA4f2LFDF8XeoHFWnkG8/600kdCF64ADzwMhfwd4IYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNN6JEM9r2W9JUcpZW+bNcNaAIB5AS5LkrNsSZYiwAAwQa/sjzPJNg6Pltt9NHfrVwDA5AC/JTnagQADwDA/wOWe5lEEGACGaQHu9rZ7XZPcqgADwGV+gLc0mwADwGX+E/SaZhVgALhMD/CSpA8BBoBheoBrkvfffzgEGACaeQEeznIkqT3DuwADQDc/wOPx+d5mAQYAAAAAAAAAAAAA/o/Pj5e/vgoA8M3e3es0DkQBGL26kj1JKsRss+3ibJM2LeIdeP+HgSGxQASJ8DOA0TmWbBd2/elqbE1Pu9v9qSEAgJ7y7wsyAICehr0AA8BrBBgAfgMBBoA36R/gKY82scnVmEc1phIHNecHAIBPnIDL1M4twBExl/cxwDUAAAEGgEUQYAA4hwADwPJ9MMB5cBkAgAkYAH42AQaAcwgwACyfAAPAOQQYAJbvfQHOB1PUPCgBANiMAQB+NhvyA8A32N3uTw0BAPR0vRtO3QQAAAAAAAAAC2QNGAC+wS5f4CtoAOgrM/+fHP4DBoC+htbbZwQYADobTMAA8PWGTBMwALxB/wm4ZlPGiFUebKPdb+Iyc4pmzBLNNrfzK83FVYw5RvMvxwAAzl8DrnUuaIvuvT9lmgO8LtFcHK+llievXNV1RC2rluu1PYMB7ti7l12nYSAAw6ORsD1WFlbiJatceA0k3v+h0Ni1EqgIdwT0/6TT057E3f6a1D0Bvm8CXh6RHQGWoNsjwLtOXtqYY4/0pOtlib+adW+j8SwAAODbPwMeNc3xEuD5EeBgh7/ec3w02sq5xI+L5FbhLAAA4Ocm4KzbCPBhfsbaApxi8OH4XFJ19Re2LVyABgDghz4DDrqOAK96yAjwpJNsUTzAHl//k4wls7Vfk5pOAgAAfmAX9LJ6dLsgMgIsPvXukmPP7njQZk/iMhegAQD4sQnY9Qm4xpIuAd4XsdoCPGs39yXbsszSVK0CAAC+YwJ+DrBMWi4BXrVGkdx+PMyb5seSZLYRYAAAfs0ELJI1nAFO0Y4eYNvFFRtLqhYCDADAL5mA3XJ+DUmkaG0BnnQSt2odSw4NBBgAgJsAP7sJ8KTLGeAQpQX4MOniPpYkixsBBgCAuyEBAPAXecf9gAEA+AZMwAAA/Pvev9FnRQAAAAAAAAAAAAAAAAAA32JnExYAAH/em/zhGV9DAgDg93r34e0zAgwAwO/1JhNgAAC+hgADAPA/uA9wLap6bCJJH6qIpKyqZRa3+hk5+bl6yLiFUlZnQZpNdZN2RhODJDNpFksCAMDruQ3wqkEklbhJ0izDHMsmsmsdd+ifi20tr/UMcPLl8RAXLF7vDhw0yKq5P10FAIAXdBvgUvoAGz4JsBVxi3mhJxnRrRrt0wDL2otrx2EjwK6Y93sW2eIuAAC8otsA29MN+eWM7px7i92kVaoGzZcAOzvawdXXnAHeo0iKiz/hAjQA4DXdBjhrCU8BPqK4MRt38ZCq86HzpwHezd8l+vFLgBdrHQ8rF6ABAK/qNsByqKrl5AHuYovqMGuVbtk9wMmWS4BHrO3wRWeAj97dEo3/uAUAeFV3AXYhq143Yd0G2MfapwB7dsdDY6u4FLkADQB4WTcBHoLu1wDnL1+C9rF2GwE+t1s1+6PCYbyTlxoAgBd1F+DBlmuAq07ShE2W6yasvq+5fLYJK8XcZ+HUA+wFJsDAR/buWLVBKArA8OFAryY4iHbspGbqM5S+/1u1xlwITUiH0EKb71scFNefi5wj8OhuBbjLKVb9cm0Mad+0MdXBojG2AEfJ5nwMaYiSw/auUr8Bj9kJMAAP7vYccFPWpl5bxNEuOX1dxDFsea0BjrIefvu+HqNrgOdmJ8AAPLibAY6yy8zlfBXlshb0sK2irMsqm30bUQM8bAFejSVirqNGJYc6hlTyIMAAPDY/YwCA7wkwAPwH+SLAAPDrXg/7S08BAPykt9enS+8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxlz0t+6p8josuTEjFnNQ2ZuUTEdgUA7rc/i26X1eE8wFEys4voM5s2AIC7Tcf0zmNmttFtoR0zm5iPN052mbvjo1PABzt3cNowDAZgVPxgU5ceTBI6gJ3QQjYING1H6P7LtI4r4UPAh9gX895BxtIAHxJCADyuGU+VD03dpRzgOiKmAR4X6iaiTQDA4/rJrjYH+Gkf0ZQAj05x0ycA4EEluX0MuuFvUOZG6c9TE7cgAwCrBXi/S9MADw7DdAIAllAOmtsc4JcuIp7LSmEDDABLX8KaBji1wyjAALCibgzrMUqAb2MrwACwplNku/8Aj1vgPrKTAANAtvBTlMc6X8kaP60AAwAAAAAAAAAAAAAAAAAAAAAAsKaPc5XFHVXxmQCApZx/rtl3cSm+iioBAEuJ9+KteL0jEgCwlOp6J8AXAQaAKQEGgC0QYACYJ8AAsAUCDADzBBgAtkCAAWCeAAPAFggwAMwTYADYAgH+Ze9eUh0FogAMHw4kashAbnoFPkZ3Bw39WkLvfzMdS8vRhUwKGsL3gZaPBfxYpQgArwkwALwDAQaA1wQYAN6BAAPAawIMAO/AD/kB4D/4/Puz+nP6fvp9ugQA0MqPz0uVX7icfgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFfGLMZ7FGvmLTbX3A1TxJyZ14iProwAQIMAH6Z46rvMrt8DXE1HgPtBfwGgXYDH6Meju9ea4nIUMXeZyxHgh/4CQNMAR3/EdcinRw1wvV0CvOgvADQN8F7eNeKe2XWZ9xrgsuy7lgAPpcwAQMsAP8qwZN6e21oCfBjmmPPwEQBAwwCfU833KTPnOAO89BFngMcAANpOQS9bdIe6HLwFONbM/HYEeNyuTAEANH4Jq8tDtwe4fpW0BfhRTwCAVgFeM7t5ytO0B7jsrzHn+VB8CwDgH3t3kCInEAVg+PFgrC7HhbRzAh0Xw+xnF7LIOve/TqJtpGEaslFChu9bKIUH+Cmo8h36I45+O+dcM/tbgLdd7xbgS3EOCwAODfDcxfXPRd926ewa4G0LPG1fGleRAAAAAAAAAAAAAAAAAAAAAPiifny8ffYzAIAzfTw/8BYAwJny+YEMAOBMTwIMAAc4MsAlayyu2xCkcVu/5EtccohFm0YEA8CxAa7ZLe+m3gLcD+t6C3C2AgwAZwT4tTTLu7ZrgKcc6xx7gEteBRgAzgjwXCOiqy9ra5uc5hJ7gJsyCDAAnBHgMaeIdr4FeOijyzH2AI/ZCDAAnBDgKE1E7dYAX5f41tfYAxx9uQgwAJwQ4L6PrsYa4LZcbo89wFPpBRgATghwUy5zewtwzVUTe4CjyVGAAeD4AE851m4J8Frd3+pwF+AY6izAAHB4gGOoNdYAv9ZYNHm9C3CXRYAB4PgAN9neAlyaWEzZ3gU42hRgADg+wNfs1gCPOcWqr3uAF1WAAcAwBgD4HwgwAPydAAPAV2AgPwD8A+/PDzwFAHCmb+9Pn30PAH6xd++6bcNQAIYPDhDeIDSEqCcQJS/dg3Tq0Lnv/zotKSapa0UKCrhGrP8bbEoyvf6grQsAAAAAAAAAAMAnxH/AAADcwNfnFZwFDQDAdemXFVwHDADAdT08E2AAAPYQYAAA7gEBBgDgBnYCPEZVa6QyXtXXcdCxvDkNYrUZBi1ePz3rLNUQVXXO0uuLt5ELukiSbZQieff2nQIAwH3aDvBUcjr4msboR5GxjoNa1wL8W6+mhnbppVm2xCYrxVi2XbR5OdjLoo2COlm0iUa7l+8EAOB+bQa41XAoNZx9TWW2s0iwOq0HuIZ66W6nY92MdZqavQBLslk6DUKAAQD3bzPAPkplhlrQylgnwQYd3gvwZJcMt9k+SbMX4GyT80kIMADgADYC/BrdtqKVqixsg5Xk3wlwPSLOGjGaa2Kj2Q9w2+dtJsAAgCPYCnCv4x9xdFI5NSXAnYb1AM9lUo1v2z+rqg/uvQBXLbdRjRBgAMAR/GuAZdbu7wBXvs5Jqb0UJqhunoTVZKuJAAMADmErwO7sJ+j+7CdocT6trIDNy65F/9bvaT/AyRo1BBgAcARbAZYUpcpGnD07CasmOVwGuBU4WFemlXHj026AjY4StSPAAIAD+MhlSNkHkdnnMnZ+liXAEu1KgCWVOX6SIvq6YC7i7gq401nE2USAAQAH8IEbcYw+nd+IowXYrQY421LdTopRB4m2HDW7/wE775cpgQADAO7fdoDFpPNbUSYjrwEWsxZgMTrPXhZ2WqbplLfPgtZ+atGO2hFgAMDd42EMAADcwIkH8gMA8P89ra2ATwIAAK7px9Pp0k8BAAAAAAAAAAAAAAAAAHzE9we9FAUAAFzTw7fHS1wHDADAdZ0eCTDwi727SZETigIwerkQ31NqIOoKtBz1CjII2f+uglbKdHd1CLSdPzhn8EA38KHw7gX4NV/AAPD/E2AAOO3jA9zmHM+WId0eapeZ/RARY950UXOMTZe1ye/GAADeEeBLjn1s6jhO9wWEQ+mXiGtOEePR2JrZPdvwey0BALwzwGs757IHta23vA4RbR+bsX0Z4JKDAAPARwS4rEs2EbGdm9otMeclNkP3MsBNGQUYAD4gwFNeom8jjuhu1qOtrwI8ZyPAAHA+wNc2oslhO5Z49vIw5s2wBTj6UgUYAM4GuJZuPx4C/PYXcCylF2AAOBvgJnft7V/0XVd+FuBochZgADgT4COvc05RSxO7afoR42Z5HeAY21WAAeBUgIdsYlOuxzWkKafjGlJX6kOAL1kEGABOBbgpsVtLPQZxrPdBHPWaczwEOLoUYAA4FeB2jd1lb2tXjlGUy/p6FGW5BzhaAQYAyxgA4F8kwADwF6SF/ADw5z19fsOnAAB+py9Pnx59DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjGHhwIAAAAAAD5vzaCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwc8esbQNhHIdfjljSCQ3B1hoCll1oTSCTt9AhS8Hf//s055oOORlcKg8tz7No+HPzDyR0AAAAAAAAAPwn2pSjWKe0rsYmp7TZxme7NgCAv9HmNPxqbRXgbrMZP4bUCzAALKzdtU155r4K8C535fExCDAALB3gfY6IIY+fOzulJoqunwQYAJYO8DZNEf2+CvA2DXHmGzAALB/gaJuIPFQBbtIkwABQWSrAj48x5BBgALijOsBN2+37OsCjV9AAUFkuwFPa5qEOcNc2lxKPAgwAiwc4NjlHjPO/IZVBgAFg8QBf7toYr17EsfcKGgDuEOB1GuoAF307fxVlOtsFAAAAAAAAAAAAAAAAAAAAAAAAAAD/iLfDqva9LO/Heji8XTlyfA8A4GaH1xmrshy7qEyHcuRlxjEAgJulp4vT6em3dF4eZqQyPM9IAQDcbPV6LcBfvz1UYlWOvDxXfnwJAOBPA1wIMABcd/8AnwQYgJ/s3TFvm0AYh/FXfynHgRhOwBSpQ4yZrEZd4i3qEKlDVPX7f5ya45yA7SpJJZz29PwGJHNw6yMwHDj1n1wB11tJhTOzjaTazEppsPF3kFQ6G/VOB0MTh5PxIFdI2tbziQAAyMhaAe40ac8CPLyOWFNo0i0D3GrSzScCACAfawW4lTYxvd1JgJ3GkbqQnPlSar1tpcKPw+G13qX5VmoXEwEAkI21AqxY2zGziwDH7dbMquDqONKYeTm3CLCTynrcFrOJuAkNAMjIilfAUuHq0/+Ae81SOoyJTZZXwKOtW0wEAEBG1gpwo0nwywDXkjaWBKmcBTipzbaadIuJAADIxloBtr5SNPxNgG3TKurnEwEAkI013wNunKTCunmAfQpwt+3MqhTg4Hy6BT3jgiQ3nwgAgGysdAW8keRjYQtrJHV2fJCqlarp79/WuumofjxgHuAyHuMlueNEBBgAkJWVAtyn93mP29aPDVV/fCSrluQsRTecvoY0SEUT89wfJ+IWNAAgKysF2CpNyn623IZLdY2CzUbqMcZJaf3LCYuJAADIxloBtk3QgfOvD2SFzuw9S1GWaXc6IU3EQ9AAgJzwNSQAAD6Bvrzgg/wAAFzL7tsFN3aw93am342nfL1gbwAA4N0edzfnvtvB0/58YPf4h1P2TwYAAAAAAAAAAAAAAAAAAAAAAAAgU7yGBADAJ9jdX/DGQhy/Hs78ZCEOAAA+QLcXvLEU5d2p5+c7lqIEAOADbu5vz73xMYaH8wD/4GMMAABcMcAJAQYAgAADAPCPWyvApZLBaiXOzIImobaDpor7eztQMvQGAEDurhlgDTHASW+2UVLPAqzSAADI3YoBDjapp8K2UmEW4v5OkrNGUmU+SIU3i7usktQYAACZu16AnaQU4FTbYbra9eOPtCsdDAC/2buDnjbBMIDjT55EoKYHUvSu1Z5qdls9mR3MLmbZ9/84q4xaF2qqWcoc/H4HQqGc/+EF3hdGbrAAV03mbBfgZWYuo8xcxVaTebsL8CozPQQGYPRO/gx4HvPc70ednbpL7lbdpjl3igCAsRswwM0i9gEu4o8ANy8BLi8CAEZvqCHoZWae/45tXTWZ5U0cGIJelJlNAMDoDRXgqNttG+D2SB2HXsIqDEEDMAmDBbiLbr3b5rz7DClef4ZUle0PABi5vwrw09PxZ8CzLsBddNsAdzXuTcRRhFtgAKbhRHfA/QB30W0D3NW4NxVlEW6BAZgGizEAwPt8vgX5r68tyA8AH7H+csBZbG2q6LlZP1/y82vPj00AAO/2sD7r+xZbj5v+ifXDG5dsHgMAAAAAAAAAAAAAAAAYKZ8hAcA/sL474MhEHIv7PhNxAMAH5OUBR6aivDrAVJQA8AFnd5d9RxZjuL/q+W4xBgAQYAD43AQYAN7hfwlwnTmLKDLLm4jIzGUss7OMV0vxA8AUnTzAeXsgwPv9eQDABJ0+wHmxC/C+t4vMPI+qziyrAIDpGSDAs6oX4FV7NqrMLAIApmeAAOeqF+Dy+eBWk3kbADA9Jw/w7Dm7uwB3PY7MLF7+BQDTc/IA122E3w5wEwAwPacPcDSZhqDhF3v3z9o2EMZx/OEHOv3Bg5C0FTJY8pC6ELI4U+iQQpd26vt/L5Ufnd3E5xCXIrdVvp/hDBY3f7lDdwKAawe4kXgJCwCAawfYKp0/hmQcQwIAvFfXCHBRngSYizgAAO/dNQJsq5MAcxUlAOC942MMAABc5O9/kP8HH+QHAODP7D6dcWujzD4mit1+ysOXxENmAADgYk+729R3Gw1Z+mD39MqUjOO8AAAAAAAAAAAAAAAAAAAAAK7jcZulPk/vR2eJ7eMrU3ZPBgAALra9OyOz0a6wRL/dT/l2n9oZAAC4mD6c8cZNWDdncBMWAAC/Ibv7kHrjLuj7m8RX7oIGAIAAAwDwbyPAAABc4D8JcC6tzYIUzNZSbua/re2t5Pyh1VIb/+vH0edJqsynlzbqBo3qzgAAWIqZAjxIlY+DWeWjp1arGOBoM/0b0gCrOQa4UhQMAICFmCnAQRqsyKX8EGNrvLge4KnErT+tJeV9GuD2EOC1p7dvJRUGAMAyzBTgTirHwUtbSp2ZbbRX/ApwkDQFWEMaYIUY4HJaQHdlWBsAAAsxU4ALSUWlUWWeXV8Ol1I4BrhopTIGWOs0wOo9wL0kygsAWJqZAmyl1LTKc7WNlE+b0q0X1QMcrTzApZR3JwEupTpIZax1LxFiAMCCzBXgQQrSppLW0jAVOcTV7EqTtjEPcPAIvwxwl0slAQYALNVcAQ7ez66T2mdvObdSHbeg15KqGOA+l04CvOo0ilvQwUY1AQYALMdcAW60VxSHneZBB01c1NY+eoAtpAH2GYeXsAgwAGBh5gqwl3eI4S2s19FmCrCPdQywtWmA+1zPjiHZwBY0AGBB5gqwtVM3w/FIr4rpLFJeeIDjxRwxwE0aYJ9T+pyDxgAAWIbZAlxNwex9zWu5VMfzwQoxwL4EjgG2kAbY6hdXUQ5chAUAWA4+xoCf7N0hDoAwEADBM034B7KCYOoIopb/v4eiD5Jakhm/b1gA5hjyA8Df1e1FiaEtkaz1Sa49awEATDtqyc4YeitJPT6S1gMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBmDw4EAAAAAID8XxtBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXYgwMBAAAAACD/10ZQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRX24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWEPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdiDAwEAAAAAIP/XRlBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFfbgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaa+ObQAAYSAGgth/Z0RBnS6RXneVNzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMO89vAKCFAQPAgLUBgHYGDAA1AwaABAYMADUDBoAEBgwANQMGgAQX1xeoB1i+uRoAAAAASUVORK5CYII=)',
        logo: null,
        customBorderRadius: {
            button: 25,
            paper: 15,
            chip: 6,
        },
    },
    [THEME_NAMES.proinso]: {
        themeName: 'proinso',
        logoUrl:
            'https://etiamnamene.com/wp-content/uploads/2020/09/Proinso-solar-logo-1-300x115.png',
        palette: {
            primary: {
                main: '#a6cb38',
                contrastText: '#000000',
            },
            secondary: {
                main: '#1d1d1b',
                contrastText: '#fff',
            },
            danger: {
                main: '#ef5957',
                contrastText: '#ffffff',
            },
            warning: {
                main: '#ffca28',
                contrastText: '#ffffff',
                light: 'rgba(255, 202, 40, 0.15)',
            },
            info: {
                main: '#999',
                contrastText: '#fff',
                light: '#ededed',
            },
            success: {
                main: '#a6cb38',
                contrastText: '#ffffff',
                light: 'rgba(197, 219, 92,0.15)',
            },
            error: {
                main: '#ef5957',
                contrastText: '#ffffff',
                light: 'rgba(239,87,87,0.15)',
            },
            text: {
                accent: '#a6cb38',
                title: '#1d1d1b',
                primary: '#000000',
                secondary: '#afafaf',
            },
            dark: {
                main: '#222222',
                accent: '#c5da5c',
                contrastText: '#fff',
                imageBackgroundOpacity: 0.9,
            },
            status: {
                active: '#c5da5c',
                approved: '#9fb04b',
                analysing: '#4FAFDA',
                sent: '#00677e',
                cancelled: '#d8d8d8',
                denied: '#ef5957',
            },
            grey: {
                50: '#fafafa',
                100: '#f5f5f2',
                200: '#eae9e6',
                300: '#dad9d6',
                400: '#b6b5b2',
                500: '#969593',
                600: '#6e6d6b',
                700: '#5a5a57',
                800: '#3c3b39',
                900: '#1b1b19',
            },
        },
        typography: {
            fontFamily: 'Lato, sans-serif',
        },
        background: '#f6f6f6',
        logo: null,
        customBorderRadius: {
            button: 25,
            paper: 8,
            chip: 16,
        },
    },
    [THEME_NAMES.neutral]: {
        themeName: THEME_NAMES.neutral,
        palette: {
            primary: {
                main: '#7c7c7c',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#b3b3b3',
                contrastText: '#353535',
            },
            dark: {
                main: '#eaeaea',
                contrastText: '#525252',
                accent: '#525252',
            },
            light: {
                main: '#f6f6f6',
                contrastText: '#525252',
                accent: '#525252',
            },
            status: {
                active: '#4dd970',
                approved: '#43b46f',
                analysing: '#36a3f7',
                sent: '#08404d',
                cancelled: '#d8d8d8',
                denied: '#ef5957',
            },
        },
        background: '#eaeaea',
        customBorderRadius: {
            button: 0,
            paper: 0,
        },
    },
};
