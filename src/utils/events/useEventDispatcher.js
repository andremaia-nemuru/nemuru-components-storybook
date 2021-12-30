// import { useContext, useState } from "react";
import {sendEventForEachChannelOfTypeActive} from "./sendEventForEachChannelOfTypeActive";
// import { ProcessContext } from "../../contexts/ProcessContext";

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
    };sendEventForEachChannelOfTypeActive
    return {dispatchEvent};
};
