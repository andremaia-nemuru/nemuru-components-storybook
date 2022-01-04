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

const getUpdatedPendingRequestsBySuffix = (
    actionRequestSuffix,
    state,
    action
) => {
    const actionType = action.type;
    let newPendingRequests = state.pendingRequests || [];
    const addActionTypeToPendingRequests = () => {
        newPendingRequests.push({...action, createdAt: Date.now()});
    };
    const removeActionTypeFromPendingRequests = (requestTypeSuffix) => {
        const indexToRemove = newPendingRequests.findIndex(
            (el) => el.type === requestTypeSuffix
        );
        newPendingRequests.splice(indexToRemove, 1);
    };

    switch (actionRequestSuffix) {
        case typeVariations.FULFILLED:
            removeActionTypeFromPendingRequests(
                actionType.replace(typeVariations.FULFILLED, "")
            );
            break;
        case typeVariations.REJECTED:
            removeActionTypeFromPendingRequests(
                actionType.replace(typeVariations.REJECTED, "")
            );
            break;
        default:
            addActionTypeToPendingRequests();
    }
    return newPendingRequests;
};

export function enrichContextState(actionDefinition, state, action) {
    const actionRequestSuffix = getActionTypeRequestSuffix(action.type);
    const isActionARequest = actionRequestSuffix || actionDefinition.operation;
    const dateNow = Date.now();
    const requestRelatedProps = isActionARequest && {
        pendingRequests: getUpdatedPendingRequestsBySuffix(
            actionRequestSuffix,
            state,
            action
        ),
        lastRequest: {
            ...action,
            createdAt: dateNow,
            result: actionRequestSuffix,
        },
    };
    const lastAction = {
        ...action,
        createdAt: dateNow,
        hasRequest: isActionARequest,
        requestResult: actionRequestSuffix,
    };
    const lastActionsReferenceChanged = {
        lastChangeDate: dateNow,
        id: Math.random(),
    };
    if (state) {
        const removeOldestAction = () => {
            state.lastActionsReference.shift()
        }

        if (!state.lastActionsReference) {
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
        lastAction, // TODO elimiar al cerciorase que no se usa
        lastActionsReferenceChanged,
        ...requestRelatedProps,
    };
}
