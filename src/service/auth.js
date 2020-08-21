
import Axios from 'axios';
import { clearAccessToken, setAccessToken } from './token';

const BASE_API_URL = 'http://localhost:8080';
const TOKEN_URL = '/auth-service/oauth/token';
const LOGIN_URL = '/login';
const UNAUTHORIZE_API = [TOKEN_URL];

export const apiClient = Axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});


apiClient.interceptors.request.use(config => {
    console.log(config);

    if (config.url.indexOf(TOKEN_URL) !== -1) {
        return config;
    }

    let newConfig = { ...config };

    newConfig.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    return newConfig;
});


apiClient.interceptors.response.use(response => response, function (err) {
    const error = { ...err };
    const originalRequest = error.config;

    if (error.response.status === 401) {
        window.location.href = LOGIN_URL;
    }

})
export const login = (username, password, callbackFunc) => {
    let bodyFormData = new FormData();
    bodyFormData.set('grant_type', "password");
    bodyFormData.set('username', username);
    bodyFormData.set('password', password);
    apiClient.post(TOKEN_URL,
        bodyFormData,
        {
            headers: {
                Authorization: 'Basic Y2xpZW50SWRQYXNzd29yZDpzZWNyZXQ='
            }
        }).then((res) => {
            setAccessToken(res.data);
            return res;
        }).then(callbackFunc);
}

export const logout = () => {
    clearAccessToken();
    window.location.href = LOGIN_URL;
}