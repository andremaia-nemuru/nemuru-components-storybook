import React from 'react';
import InputDate from '../components/InputDate';
import { useForm } from 'react-hook-form';
import esLocale from 'date-fns/locale/es';

export default {
    title: 'Nemuru-components/InputDate',
    component: Template,
    argTypes: {
        disableFuture: {
            control: 'boolean',
        },
        disablePast: {
            control: 'boolean',
        },
        label: {
            control: 'text',
        },
    },
};

const Template = (args) => {
    const { errors, control } = useForm();
    const {
        fullWidth,
        allowKeyboardPicking,
        views,
        openTo,
        disablePast,
        disableFuture,
        label,
        emptyLabel,
        format,
    } = args;
    const validateKeyboardInputDate = ({
        value,
        disablePast,
        disableFuture,
    }) => {
        const time = value.getTime();
        const currentMoment = new Date().getTime();
        if (isNaN(time)) {
            return <Text tId={'INVALID_DATE'} />;
        }
        if (disablePast && currentMoment > time) {
            return <Text tId={'PAST_DATE_NOT_ALLOWED'} />;
        }
        if (disableFuture && currentMoment < time) {
            return <Text tId={'FUTURE_DATE_NOT_ALLOWED'} />;
        }
    };
    return (
        <InputDate
            allowKeyboardPicking={allowKeyboardPicking}
            control={control}
            locale={esLocale}
            emptyLabel={emptyLabel}
            fullWidth={fullWidth}
            variant="inline"
            openTo={openTo}
            autoOk
            views={views}
            format={format}
            label={label}
            id="date"
            name="date"
            error={errors?.date ? true : false}
            helperText={errors?.date?.message}
            disableFuture={disableFuture}
            disablePast={disablePast}
            rules={{
                required: {
                    value: true,
                    message: 'Campo requerido',
                },
                validate: {
                    validate: (value) =>
                        validateKeyboardInputDate({
                            value,
                            disablePast: disablePast,
                            disableFuture: disableFuture,
                        }),
                },
            }}
        />
    );
};
export const InputDateStoryDay = Template.bind({});
InputDateStoryDay.args = {
    allowKeyboardPicking: true,
    emptyLabel: 'Día, Mes, Año',
    label: 'Fecha',
    fullWidth: false,
    views: ['year', 'month', 'date'],
    openTo: 'year',
    disablePast: false,
    disableFuture: false,
    format: 'dd/MM/yyyy',
};
export const InputDateStoryMonth = Template.bind({});
InputDateStoryMonth.args = {
    allowKeyboardPicking: true,
    emptyLabel: 'Mes, Año',
    label: 'Fecha',
    fullWidth: false,
    views: ['year', 'month'],
    openTo: 'year',
    disablePast: false,
    disableFuture: false,
    format: 'MM/yyyy',
};
export const InputDateStoryYear = Template.bind({});
InputDateStoryYear.args = {
    allowKeyboardPicking: true,
    emptyLabel: 'Año',
    label: 'Fecha',
    fullWidth: false,
    views: ['year'],
    openTo: 'year',
    disablePast: false,
    disableFuture: false,
    format: 'yyyy',
};
