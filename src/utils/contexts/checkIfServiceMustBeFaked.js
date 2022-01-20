export const checkIfServiceMustBeFaked = (service, actionType, options) => {
    if (!options?.USE_FAKE_SERVICES_ON_POST_OR_PATCH)
        return false
    const isServiceGet =
        service().method === "get" ||
        service().headers?.["X-HTTP-Method-Override"] === "GET"; // todo revisar tema mayusculas
    const isServiceAnException =
        options?.ACTION_TYPES_NOT_TO_BE_FAKED.includes(actionType);
    return !isServiceGet && !isServiceAnException
}
