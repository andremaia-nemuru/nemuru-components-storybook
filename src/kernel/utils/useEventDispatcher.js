import {sendEventForEachChannelOfTypeActive} from "./sendEventForEachChannelOfTypeActive";

export const useEventDispatcher = (config, commonIdParams) => {
    const createdAt = Date.now();
    const dispatchEvent = ({name, type, payload, idParams}) => {
        sendEventForEachChannelOfTypeActive({
            name,
            type,
            idParams: idParams || commonIdParams,
            payload,
            createdAt,
            config,
        });
    };
    return {dispatchEvent};
};
