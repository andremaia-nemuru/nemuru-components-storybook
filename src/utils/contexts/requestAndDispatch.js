import { dispatchMiddleware } from './dispatchMiddleWare';
import { requestApi } from '../request';

export function requestAndDispatch(
    service,
    dispatch,
    action,
    actionsObject,
    fakeResponsesByActionTypeDictionary
) {
    const promise = requestApi(service(action.payload));

    promise
        .then((response) => {
            const type = `${action.type}_FULFILLED`;
            const originalNewAction = {
                ...action,
                type,
                payload: response.data,
                requestPayload: action.payload,
                requestStatus: response.status,
                requestResolved: true,
            };
            // const fakeResponse =
            //   fakeResponsesByActionTypeDictionary?.[action.type]?.onFulfilled; // TODO
            const fakeResponse =
                fakeResponsesByActionTypeDictionary &&
                fakeResponsesByActionTypeDictionary[action.type] &&
                fakeResponsesByActionTypeDictionary[action.type].onFulfilled;
            const fakeNewAction = fakeResponse && {
                ...fakeResponse,
                requestPayload: action.payload,
            };
            const newAction = fakeResponse ? fakeNewAction : originalNewAction;

            const middlewareDispatch = dispatchMiddleware(
                dispatch,
                actionsObject
            );
            actionTypeExistsOnActionsObject(type, actionsObject) &&
                middlewareDispatch(newAction);
        })
        .catch((error) => {
            const type = `${action.type}_REJECTED`;
            const originalNewAction = {
                ...action,
                type,
                payload: error.response,
                requestPayload: action.payload,
                requestStatus: error.response.status,
                requestResolved: false,
            };
            // const fakeResponse =
            //   fakeResponsesByActionTypeDictionary?.[action.type]?.onRejected; // TODO
            const fakeResponse =
                fakeResponsesByActionTypeDictionary &&
                fakeResponsesByActionTypeDictionary[action.type] &&
                fakeResponsesByActionTypeDictionary[action.type].onRejected;
            const fakeNewAction = fakeResponse && {
                ...fakeResponse,
                requestPayload: action.payload,
            };
            const newAction = fakeResponse ? fakeNewAction : originalNewAction;
            const middlewareDispatch = dispatchMiddleware(
                dispatch,
                actionsObject
            );
            actionTypeExistsOnActionsObject(type, actionsObject) &&
                middlewareDispatch(newAction);
        });
}

export function actionTypeExistsOnActionsObject(actionType, actionsObject) {
    if (actionsObject[actionType] && actionsObject[actionType].changeState) {
        return true;
    }
    devConsoleLog(actionType, 'DOES NOT EXIST');
    return false;
}
