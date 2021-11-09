export const getNumberOfWeek = (d) => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return `${weekNo}/${d.getUTCFullYear()}`;
};

export const getNumberOfPeriodInDate = (date, period) => {
    const MILLI_SECS_IN_A_DAY = 86400000;
    const todayPeriod = Math.ceil(
        new Date().getTime() / MILLI_SECS_IN_A_DAY / period
    );
    const datePeriod = Math.ceil(date.getTime() / MILLI_SECS_IN_A_DAY / period);
    return todayPeriod - datePeriod;
};

export const getCurrentWeekMonday = (date = null) => {
    const currentWeekMonday = (date && new Date(date.valueOf())) || new Date();
    currentWeekMonday.setDate(
        currentWeekMonday.getDate() - ((currentWeekMonday.getDay() + 6) % 7)
    );
    return currentWeekMonday;
};

export const getYearMonthAndDay = (date) => {
    return {
        year: date.getFullYear(),
        month: String(date.getMonth() + 1).padStart(2, '0'),
        day: String(date.getDate()).padStart(2, '0'),
    };
};

export const getMonthYearString = (date) =>
    `${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

export const getDateMonthString = (date) =>
    `${String(date.getDate()).padStart(2, '0')}/${String(
        date.getMonth() + 1
    ).padStart(2, '0')}`;

export const getMonthAbbrName = (date) =>
    `${date
        .toLocaleString('default', { month: 'long' })
        .toUpperCase()
        .replace('.', '')
        .substr(0, 3)} ${date.getFullYear().toString().substr(-2)}`;

export const getDayAbbrName = (date) =>
    ` ${date.getDate().toString()} ${date
        .toLocaleString('default', { month: 'long' })
        .toUpperCase()
        .replace('.', '')
        .substr(0, 3)}`;

export const getPeriodAbbrName = (initDate, endDate) =>
    `${getDayAbbrName(initDate)}-${getDayAbbrName(endDate)}`;

export const addMonthsToDate = (date, months) => {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
        date.setDate(0);
    }
    return date;
};

export const getYearsSinceAutoRegistration = (date) => {
    const currentDate = new Date().getTime();
    const autoRegistrationDate =
        FormatDateMapper.hydrate(date).isoFormat.getTime();
    const timeDiff = currentDate - autoRegistrationDate;
    const differenceInYears = timeDiff / (1000 * 3600 * 24 * 365);
    return Math.ceil(differenceInYears);
};
