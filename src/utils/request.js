import axios from 'axios';
import { LoginMapper } from './loginMapper';
import { ENV_API_URL, ENV_COOKIE_LOGIN_NAME } from './envVars';

const apiUrl = ENV_API_URL;

const refreshPath = 'auth/refresh/';
const apiBase = ENV_API_URL;
const apiTokenRefreshUrl = `${apiBase}${refreshPath}`;

const getAuthorizationConfig = () => {
    let apiToken = localStorage.getItem(ENV_COOKIE_LOGIN_NAME);
    if (apiToken) {
        apiToken = JSON.parse(apiToken);
        return {
            'Access-Control-Allow-Origin': '*',
            Authorization: apiToken.access_token,
        };
    }
    return {};
};

const requestRefreshAuthorization = ({ service }) => {
    let loginCookie = localStorage.getItem(ENV_COOKIE_LOGIN_NAME);
    loginCookie = JSON.parse(loginCookie);
    const configRequest = {
        method: 'post',
        credentials: 'same-origin',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        name: 'account:refreshToken',
        url: apiTokenRefreshUrl,
        data: LoginMapper.refresh(loginCookie),
    };

    return axios(configRequest.url, configRequest)
        .then((res) => {
            const token = LoginMapper.hydrate(res.data);
            localStorage.removeItem(ENV_COOKIE_LOGIN_NAME);
            localStorage.setItem(
                ENV_COOKIE_LOGIN_NAME,
                JSON.stringify({ ...token, username: loginCookie.username })
            );
            return requestApi(service);
        })
        .catch((error) => {
            localStorage.removeItem(ENV_COOKIE_LOGIN_NAME);
        });
};

const request = (url, isJSON, service) => {
    const configRequest = {
        method: service.method,
        credentials: 'same-origin',
        'Access-Control-Allow-Origin': '*',
        headers: Object.assign(
            isJSON && !service.formData
                ? {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
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
        service.method === 'post' ||
        service.method === 'put' ||
        service.method === 'patch'
    ) {
        configRequest.data =
            isJSON && !service.formData
                ? JSON.stringify(service.body)
                : service.body;
    }
    return axios(configRequest.url, configRequest)
        .then((response) => {
            if (service.type === 'login') {
                localStorage.setItem(
                    ENV_COOKIE_LOGIN_NAME,
                    JSON.stringify({
                        ...response.data,
                        username: service.body.username,
                    })
                );
            }
            return response;
        })
        .catch((error) => {
            if (error?.response && error?.response?.status === 401) {
                return Promise.resolve(
                    requestRefreshAuthorization({
                        service,
                    })
                ).then((response) => {
                    return response;
                });
            }
            throw error;
        });
};

export const requestApi = (...requestProps) =>
    request(apiUrl, true, ...requestProps);

//esperar al request login y guardar el username en
