import axios from "axios";
import {LoginMapper} from "./loginMapper";
import {ENV_API_URL, ENV_COOKIE_LOGIN_NAME} from "./envVars";


const apiUrl = ENV_API_URL

const refreshPath = 'auth/refresh/';
const apiBase = ENV_API_URL;
const apiTokenRefresh = `${apiBase}/${refreshPath}`;

const getAuthorizationConfig = () => {
    let apiToken = localStorage.getItem(ENV_COOKIE_LOGIN_NAME);
    if (apiToken) {
        apiToken = JSON.parse(apiToken);
        return {
            "Access-Control-Allow-Origin": "*",
            Authorization: apiToken.access_token,
        };
    }
    return {};
};

const requestRefreshAuthorization = ({service}) => {
    let apiToken = localStorage.getItem(ENV_COOKIE_LOGIN_NAME);
    apiToken = JSON.parse(apiToken);
    const configRequest = {
        method: "post",
        credentials: "same-origin",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        name: "account:refreshToken",
        url: apiTokenRefresh,
        data: LoginMapper.refresh(apiToken.refresh_token),
    };
    return axios(configRequest.url, configRequest)
        .then((res) => {
            const token = LoginMapper.hydrate(res.data);
            localStorage.removeItem(ENV_COOKIE_LOGIN_NAME);
            localStorage.setItem(ENV_COOKIE_LOGIN_NAME, JSON.stringify(token));
            return requestApi(service);
        })
        .catch((error) => {
            if (error.response.status === 401) {
                localStorage.removeItem(ENV_COOKIE_LOGIN_NAME);
                window.location = "/application/unauthorized";
            } else {
                throw error;
            }
        });
};

const request = (url, isJSON, service) => {
    const configRequest = {
        method: service.method,
        credentials: "same-origin",
        "Access-Control-Allow-Origin": "*",
        headers: Object.assign(
            isJSON && !service.formData
                ? {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
                : {},
            getAuthorizationConfig(),
            service.headers
        ),
        name: service.name,
        url: service.extern
            ? `${service.route}`
            : service.public
                ? `${apiBase}${service.route}`
                : `${apiUrl}${service.route}`,
    };

    if (
        service.method === "post" ||
        service.method === "put" ||
        service.method === "patch"
    ) {
        configRequest.data =
            isJSON && !service.formData ? JSON.stringify(service.body) : service.body;
    }
    return axios(configRequest.url, configRequest)
        .then((response) => response)
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                return Promise.resolve(
                    requestRefreshAuthorization({
                        service,
                    })
                ).then((response) => {
                    return response;
                })
            }
            throw error;
        });
};

export const requestApi = (...requestProps) =>
    request(apiUrl, true, ...requestProps);
