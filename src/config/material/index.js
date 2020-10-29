import {createMuiTheme} from '@material-ui/core/styles';
import {mergeDeep} from "../../utils";

const setThemeWithCustomizableValues = (newCustomizableValues) => {
    const mainDefaultReusableValues = {
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
            },
            info: {
                main: '#36a3f7',
                contrastText: '#ffffff',
            },
            success: {
                main: '#4dd970',
                contrastText: '#ffffff',
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
            }

        },
        background: null,
        logo: null,
        customBorderRadius: {
            button: 25,
            paper: 15,
            chip: 6,
        },
        spacing: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    };
    const targetThemeValues = mergeDeep(mainDefaultReusableValues, newCustomizableValues)
    const baseThemeConstruction = {
        palette: {
            status: {
                active: (
                    targetThemeValues.palette && targetThemeValues.palette.status && targetThemeValues.palette.status.active
                ) || targetThemeValues.palette.success.main,
                denied: (
                    targetThemeValues.palette && targetThemeValues.palette.status && targetThemeValues.palette.status.denied
                ) || targetThemeValues.palette.danger.main,
                ...targetThemeValues.status
            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1328,
                xl: 1920,
            },
        },
        typography: {
            fontFamily: [
                'Raleway',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(',')
        },
        overrides: {
            MuiButton: {
                root: {
                    borderRadius: targetThemeValues.customBorderRadius.button,
                    border: 0,
                    textTransform: 'none',
                    fontSize: '16px',
                },
                contained: {
                    backgroundColor: targetThemeValues.palette.light.main,
                    color: targetThemeValues.palette.light.contrastText,
                },
                sizeLarge: {
                    height: '40px',
                    fontSize: '18px',
                },
                sizeSmall: {
                    height: '30px',
                },
                label: {
                    fontWeight: 600,
                }
            },
            MuiFormControl: {
                root: {
                    margin: targetThemeValues.spacing[1]
                }
            },
            MuiInputBase: {
                input: {
                    padding: '10px 0 11px'
                }
            },
            MuiAppBar: {
                root: {
                    background: '#fff !important'
                }
            },
            MuiTextField: {
                root: {
                    color: targetThemeValues.palette.text.primary,
                    '&.dark-variant': {
                        color: `${targetThemeValues.palette.dark.contrastText} !important`
                    }
                },
            },
            MuiInput: {
                root: {
                    color: 'inherit',
                    position: 'relative',
                    transition: 'border-bottom 0.2s ease',

                    fontSize: '18px',

                },
                underline: {
                    '&:before': {
                        borderBottomWidth: '2px',
                        borderBottomColor: `inherit !important`
                    },
                    '&:hover:before': {
                        borderBottomWidth: '2px',
                        borderBottomColor: `inherit !important`
                    },
                    '&$focused:after': {
                        transform: 'none',
                        borderBottomColor: `${targetThemeValues.palette.primary.main} !important`
                    }
                },
            },
            MuiChip: {
                root: {
                    borderRadius: targetThemeValues.customBorderRadius.chip
                }
            },
            MuiPaper: {
                rounded: {
                    borderRadius: targetThemeValues.customBorderRadius.paper,
                },
                root: {
                    '&.dark-variant': {
                        background: targetThemeValues.palette.dark.main,
                        color: targetThemeValues.palette.dark.contrastText
                    }
                }
            },
            MuiDialog: {
                paper: {
                    padding: '10px'
                }
            },
            MuiFormControlLabel: {
                labelPlacementStart: {
                    "width": '100%',
                    "marginLeft": "0px",
                    "marginRight": "-11px",
                    "flexDirection": "row-reverse",
                    "justifyContent": "space-between"
                }
            },
            MuiInputLabel: {
                root: {
                    color: 'inherit',
                    fontSize: '16px',
                },
                shrink: {
                    transform: 'translate(0, 1.5px) scale(0.875)',
                },
            },
            MuiFormLabel: {
                root: {
                    '&$focused': {
                        color: 'inherit',
                    },
                },
                focused: {},
            },
            MuiBackdrop: {
                root: {
                    backgroundColor: 'rgba(240, 240, 240, 0.7)'
                }
            },
            MuiSelect: {
                select: {
                    "&:focus": {
                        backgroundColor: 'inherit',
                    }
                }
            }
        },
        shadows: [
            "none",
            "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.05),0px 1px 3px 0px rgba(0,0,0,0.08)",
            "0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.05),0px 1px 5px 0px rgba(0,0,0,0.08)",
            "0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.05),0px 1px 8px 0px rgba(0,0,0,0.08)",
            "0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.05),0px 1px 10px 0px rgba(0,0,0,0.08)",
            "0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.05),0px 1px 14px 0px rgba(0,0,0,0.08)",
            "0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.05),0px 1px 18px 0px rgba(0,0,0,0.08)",
            "0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.05),0px 2px 16px 1px rgba(0,0,0,0.08)",
            "0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.05),0px 3px 14px 2px rgba(0,0,0,0.08)",
            "0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.05),0px 3px 16px 2px rgba(0,0,0,0.08)",
            "0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.05),0px 4px 18px 3px rgba(0,0,0,0.08)",
            "0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.05),0px 4px 20px 3px rgba(0,0,0,0.08)",
            "0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.05),0px 5px 22px 4px rgba(0,0,0,0.08)",
            "0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.05),0px 5px 24px 4px rgba(0,0,0,0.08)",
            "0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.05),0px 5px 26px 4px rgba(0,0,0,0.08)",
            "0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.05),0px 6px 28px 5px rgba(0,0,0,0.08)",
            "0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.05),0px 6px 30px 5px rgba(0,0,0,0.08)",
            "0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.05),0px 6px 32px 5px rgba(0,0,0,0.08)",
            "0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.05),0px 7px 34px 6px rgba(0,0,0,0.08)",
            "0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.05),0px 7px 36px 6px rgba(0,0,0,0.08)",
            "0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.05),0px 8px 38px 7px rgba(0,0,0,0.08)",
            "0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.05),0px 8px 40px 7px rgba(0,0,0,0.08)",
            "0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.05),0px 8px 42px 7px rgba(0,0,0,0.08)",
            "0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.05),0px 9px 44px 8px rgba(0,0,0,0.08)",
            "0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.05),0px 9px 46px 8px rgba(0,0,0,0.08)"
        ]
    };
    return mergeDeep(baseThemeConstruction, targetThemeValues);
}

export const createCustomTheme = newCustomizableValues => {
    return (createMuiTheme(setThemeWithCustomizableValues(newCustomizableValues)))
};

