import React from "react";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Controller} from "react-hook-form";
// import {ThemeProvider, useTheme} from "@material-ui/styles";
// import {createCustomTheme} from "../config/material";

export default function InputDate(
    {
        name,
        id,
        rules,
        control,
        ...props
    }
) {
    const {error, locale} = {...props};

    // const inputDateTheme = useTheme();
    //
    // inputDateTheme.palette.primary.main = inputDateTheme.palette.text.title;
    // inputDateTheme.palette.primary.contrastText = '#fff';
    // inputDateTheme.palette.secondary.contrastText = '#fff';
    // inputDateTheme.palette.type = "dark";
    // inputDateTheme.palette.background.default = inputDateTheme.palette.grey[100]
    // inputDateTheme.shadows[24] =
    //     "0px 1px 5px 0px #0000001a, 0 20px 80px 5px #0a202d1c";

    return (
        // <ThemeProvider theme={createCustomTheme(inputDateTheme)}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
                <Controller
                    name={name}
                    id={id}
                    control={control}
                    rules={rules}
                    render={(controllerProps) => (
                        <div style={{position: "relative"}}>
                            <DatePicker
                                {...props}
                                value={controllerProps.value || null}
                                onChange={(e) => controllerProps.onChange(e)}
                            />
                            <i
                                className="material-icons"
                                style={{
                                    position: "absolute",
                                    bottom: error ? "40px" : "17px",
                                    fontSize: "17px",
                                    right: "3px"
                                }}>
                                calendar_today
                            </i>
                        </div>
                    )}
                />
            </MuiPickersUtilsProvider>
        // </ThemeProvider>
    );
}
