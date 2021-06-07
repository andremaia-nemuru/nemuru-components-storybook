import React from "react";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Typography} from "@material-ui/core";
import {Controller} from "react-hook-form";

export default function InputDate(
    {
        name,
        id,
        rules,
        control,
        ...props
    }
) {
    const {error} = {...props};
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                        <Typography color={"textPrimary"}>
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
                        </Typography>
                    </div>
                )}
            />
        </MuiPickersUtilsProvider>
    );
}
