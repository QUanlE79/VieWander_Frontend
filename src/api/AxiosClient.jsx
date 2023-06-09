import axios from 'axios';
export const API = axios.create({ baseURL: 'https://vie-wander-be.herokuapp.com' })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});