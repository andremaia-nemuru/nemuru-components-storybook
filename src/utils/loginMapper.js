export const LoginMapper = {
    dehydrate(data) {
        const getFormData = (object) =>
            Object.keys(object).reduce((formData, key) => {
                formData.append(key, object[key]);
                return formData;
            }, new FormData());
        return getFormData(data);
    },
    hydrate(data) {
        return {
            access_token: `${data.token_type} ${data.access_token}`,
            expires: data.expires_in,
            refresh_token: data.refresh_token,
        };
    },
    refresh(apiToken) {
        return {
            username: apiToken?.username,
            refresh_token: apiToken?.refresh_token,
        };
    },
};
