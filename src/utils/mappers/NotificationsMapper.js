export const NotificationsMapper = {
    hydrate(data) {
        return data
            .sort((a, b) => {
                if (b.updated_at < a.updated_at) return -1;
            })
            .map((notification) => ({
                ...notification,
                created_at: new Date(notification.created_at),
                updated_at: new Date(notification.updated_at),
                time_elapsed: timeElapsed(new Date(notification.updated_at)),
            }));
    },
};

const timeElapsed = (datetime) => {
    const timeMinutes = (new Date() - datetime) / 1000 / 60 + 2 * 60;
    if (timeMinutes < 60) {
        if (Math.round(timeMinutes, 0) === 1) {
            return `hace ${Math.round(timeMinutes, 0)} minuto`;
        }
        return `hace ${Math.round(timeMinutes, 0)} minutos`;
    } else if (timeMinutes / 60 < 24) {
        if (Math.round(timeMinutes / 60, 0) === 1) {
            return `hace ${Math.round(timeMinutes / 60, 0)} hora`;
        }
        return `hace ${Math.round(timeMinutes / 60, 0)} horas`;
    } else {
        if (Math.round(timeMinutes / 60 / 24, 0) === 1) {
            return `hace ${Math.round(timeMinutes / 60 / 24, 0)} día`;
        } else if (Math.round(timeMinutes / 60 / 24, 0) < 7) {
            return `hace ${Math.round(timeMinutes / 60 / 24, 0)} días`;
        } else {
            return datetime.toLocaleDateString('es-ES');
        }
    }
};
