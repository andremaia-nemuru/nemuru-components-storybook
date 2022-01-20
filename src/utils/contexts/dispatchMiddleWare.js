import {actionTypeExistsOnActionsObject, requestAndDispatch} from "./requestAndDispatch";

export function dispatchMiddleware(dispatch, actionsObject, options) {
    return (action) => {
        if (actionsObject[action.type]) {
            const actionDefinition = actionsObject[action.type]
            const oldTypeRequest = actionDefinition.operation;
            const newTypeRequest = actionDefinition.request;

            if (oldTypeRequest) {
                function oldResult() {
                    oldTypeRequest(dispatch, action);
                    actionTypeExistsOnActionsObject(action.type, actionsObject) &&
                    dispatch(action);
                }

                return oldResult();
            }

            ///////////
            const launchRequest = () => {
                requestAndDispatch(
                    newTypeRequest,
                    dispatch,
                    action,
                    actionsObject,
                    options
                );
            };

            const launchRequestIfNecessary = () =>
                newTypeRequest && launchRequest();
            const launchActionIfNecessary = () => {
                actionTypeExistsOnActionsObject(action.type, actionsObject) &&
                dispatch(action);
            };

            const launchChainActionIfNecessary = () => {
                // const chainAction = actionsObject[action.type]?.chainAction; // TODO
                const chainAction = actionsObject[action.type] && actionsObject[action.type].chainAction;
                if (chainAction) {
                    const middlewareDispatch = dispatchMiddleware(
                        dispatch,
                        actionsObject,
                        options
                    );
                    middlewareDispatch(chainAction(action));
                }
            };

            const result = () => {
                launchRequestIfNecessary();
                launchChainActionIfNecessary();
                launchActionIfNecessary();
            };

            return result();
        }
    };
}
