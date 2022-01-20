const areLastCharactersOfStringEqualTo = (string, stringToCompare) => {
    const lastCharacters = string.substr(
        string.length - stringToCompare.length,
        string.length
    );
    return lastCharacters === stringToCompare;
};

const typeVariations = {
    FULFILLED: "_FULFILLED",
    REJECTED: "_REJECTED",
};
const MAX_LAST_ACTIONS_REFERENCE_LENGTH = 40;

const getActionTypeRequestSuffix = (type) => {
    if (areLastCharactersOfStringEqualTo(type, typeVariations.FULFILLED)) {
        return typeVariations.FULFILLED;
    }
    if (areLastCharactersOfStringEqualTo(type, typeVariations.REJECTED)) {
        return typeVariations.REJECTED;
    }
    return undefined;
};

const updatedPendingRequestsReference = (
    state,
    action
) => {

    const actionType = action.type;
    const requestAction = {...action, createdAt: Date.now()}
    if (!state.pendingRequestsReference) {
        state.pendingRequestsReference = []
    }
    const addActionTypeToPendingRequests = () => {
        state.pendingRequestsReference.push(requestAction);
    };
    const removeActionTypeFromPendingRequests = (requestTypeSuffix) => {
        const indexToRemove = state.pendingRequestsReference.findIndex(
            (el) => el.type === requestTypeSuffix
        );
        state.pendingRequestsReference.splice(indexToRemove, 1);
    };

    switch (action.requestResolved) {
        case true:
            removeActionTypeFromPendingRequests(
                actionType.replace(typeVariations.FULFILLED, "")
            );
            break;
        case false:
            removeActionTypeFromPendingRequests(
                actionType.replace(typeVariations.REJECTED, "")
            );
            break;
        default:
            addActionTypeToPendingRequests();
    }
};

export function enrichContextState(actionDefinition, state, action) {
    const actionHasResponse = action.requestStatus;
    const actionHasRequest = actionDefinition.operation || actionDefinition.request;
    const isActionARequest = actionHasRequest || actionHasResponse;
    const dateNow = Date.now();
    if (isActionARequest) {
        updatedPendingRequestsReference(
            state,
            action
        )
    }


    const requestRelatedProps = isActionARequest && {
        lastRequest: {
            ...action,
            createdAt: dateNow,
            requestResolved: action.requestResolved,
        },
    };
    const lastAction = {
        ...action,
        createdAt: dateNow,
        hasRequest: isActionARequest || false,
        // requestResult: actionRequestSuffix,
    };
    const lastActionsReferenceLastChange = {
        lastChangeDate: dateNow,
        id: Math.random(),
    };
    if (state) {
        const removeOldestAction = () => {
            state.lastActionsReference.shift()
        }
        if (!state.lastActionsReference || !state.lastActionsReference.length) {
            state.lastActionsReference = [lastAction]
        } else {
            const isLastActionsMaxed = state.lastActionsReference.length > MAX_LAST_ACTIONS_REFERENCE_LENGTH
            state.lastActionsReference.push(lastAction);
            if (isLastActionsMaxed)
                removeOldestAction()
        }

    }

    return {
        ...state,
        lastAction, // TODO elimiar despues de remplazar sus usos en front
        lastActionsReferenceLastChange,
        ...requestRelatedProps,
    };
}
