
const MY_STORED = localStorage;
const ACCESS_TOKEN = 'access_token';

export const getAccessToken = () => MY_STORED.getItem(ACCESS_TOKEN);

export const setAccessToken = (data) => {
    Object.keys(data).forEach(key => {
        MY_STORED.setItem(key, data[key]);
    })
}

export const clearAccessToken = () => MY_STORED.clear();
