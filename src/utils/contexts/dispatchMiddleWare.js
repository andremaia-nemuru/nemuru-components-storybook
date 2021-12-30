import {actionTypeExistsOnActionsObject, requestAndDispatch} from "./requestAndDispatch";

export function dispatchMiddleware(dispatch, actionsObject) {
    return (action) => {
        if (actionsObject[action.type]) {
            if (actionsObject[action.type].operation) {
                function oldResult() {
                    actionsObject[action.type].operation(dispatch, action);
                    actionTypeExistsOnActionsObject(action.type, actionsObject) &&
                    dispatch(action);
                }

                return oldResult();
            }

            ///////////
            const launchRequest = () => {
                requestAndDispatch(
                    actionsObject[action.type].request,
                    dispatch,
                    action,
                    actionsObject
                );
            };

            const launchRequestIfNecessary = () =>
                actionsObject[action.type].request && launchRequest();
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
                        actionsObject
                    );
                    middlewareDispatch(chainAction(action));
                    actionTypeExistsOnActionsObject(action.type, actionsObject) &&
                    dispatch(action);
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
