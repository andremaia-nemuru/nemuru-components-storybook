import React, {useEffect} from "react";
import {EVENT_TYPES} from "../../utils/events/config";


export function ContextEventCatcher({context, eventsConfig, dispatchEventFunction}) {

    const {
        criticalError,
        lastAction,
        lastActionsReference,
    } = context;

    useEffect(() => {
        const error = criticalError;
        error &&
        dispatchEventFunction({
            name: `${error.type}`,
            type: EVENT_TYPES.error,
            payload: error,
        });
    }, [criticalError]);

    useEffect(() => {
        const catchedActions = lastActionsReference && [...lastActionsReference];
        if (catchedActions)
            catchedActions.forEach((action) => dispatchActionRelatedEvents(action));
        // Se edita directamente la referencia y en ningún caso se pasa por el context a través de un dispatch,
        // evitando así renders innecesarios ya que no se detectan los cambios por el context

        if (lastActionsReference) lastActionsReference.length = 0;
    }, [lastAction]);

    const dispatchActionRelatedEvents = (action) => {
        dispatchActionEvent(action);
        dispatchEventsLinkedToSpecificActions(action);
        dispatchRequestEvent(action);
    };

    const dispatchActionEvent = (action) => {
        dispatchEventFunction({
            name: action.type,
            type: EVENT_TYPES.action,
            payload: action,
        });
    };

    const dispatchRequestEvent = (action) => {
        if (action.hasRequest) {
            let eventType = "";
            switch (action.requestResolved) {
                case true:
                    eventType = EVENT_TYPES.requestFulfilled;
                    break;
                case false:
                    eventType = EVENT_TYPES.requestRejected;
                    break;
                default:
                    eventType = EVENT_TYPES.requestDispatch;
            }
            dispatchEventFunction({
                name: action.type,
                type: eventType,
                payload: action,
            });
        }
    };

    const dispatchEventsLinkedToSpecificActions = (action) => {
        const linkedEvent = eventsConfig.EVENTS_LINKED_BY_ACTION_TYPES(action, context)[action.type];
        linkedEvent && dispatchEventFunction(linkedEvent);
    };

    return <></>;
}

