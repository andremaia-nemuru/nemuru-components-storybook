import {EVENT_TYPES} from "../config";

export const pushEventToGTMDataLayer = (
    {
        name,
        type,
        idParams,
        payload,
        createdAt,
    }
) => {
    const dataLayer = window.dataLayer || [];
    const commonData = {
        event: type,
        created_at: createdAt,
        ...idParams,
    };

    const dataByType = () => {
        switch (type) {
            case EVENT_TYPES.milestone:
                if (payload?.requestPayload) {
                    return {
                        milestone: name,
                        detail: payload?.detail,
                        requestPayload: JSON.stringify(payload.requestPayload),
                    };
                } else {
                    return {
                        milestone: name,
                        detail: payload?.detail,
                    };
                }

            case EVENT_TYPES.progress:
                return {
                    module: payload.module,
                    screen_path: payload.screenPath,
                    status: payload.status,
                };
            case EVENT_TYPES.error:
                return {
                    action: payload,
                };
        }
    };
    dataLayer.push({
        ...commonData,
        ...dataByType(),
    });
};
