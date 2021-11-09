export const FormatDateMapper = {
    hydrate(date) {
        const dateFormatISO = new Date(date);
        if (Number.isNaN(dateFormatISO.getTime()) || !date) {
            return {
                isoFormat: undefined,
                dateNumberFormat: undefined,
                dayNumberFormat: undefined,
                timeStamp: undefined,
                sortableDate: undefined,
                readableDate: undefined,
            };
        }
        const formattedMonth = dateFormatISO.getMonth() + 1;
        const sortableMonth = String(dateFormatISO.getMonth() + 1).padStart(
            2,
            '0'
        );
        const sortableDay = String(dateFormatISO.getDate()).padStart(2, '0');

        return {
            isoFormat: dateFormatISO,
            dateNumberFormat: dateFormatISO.getDate(),
            dayNumberFormat: dateFormatISO.getDay(),
            timeStamp: dateFormatISO.getTime(),
            sortableDate: `${dateFormatISO.getFullYear()}/${sortableMonth}/${sortableDay}`,
            readableDate: `${dateFormatISO.getDate()}/${formattedMonth}/${dateFormatISO.getFullYear()}`,
        };
    },
    dehydrate(date) {
        if (!date) return undefined;
        const dateFormatISO = new Date(date);
        const formattedMonth = String(dateFormatISO.getMonth() + 1).padStart(
            2,
            '0'
        );
        const formattedDay = String(dateFormatISO.getDate()).padStart(2, '0');
        return `${dateFormatISO.getFullYear()}-${formattedMonth}-${formattedDay}T00:00:00+00:00`;
    },
    dehydrateFromEuropeanShortDate(europeanShortDate) {
        if (!europeanShortDate) return undefined;
        const dateArray = europeanShortDate.split('/');
        const year = dateArray[2].padStart(2, '0');
        const month = dateArray[1].padStart(2, '0');
        const day = dateArray[0].padStart(2, '0');
        return `${year}-${month}-${day}T00:00:00+00:00`;
    },
};
