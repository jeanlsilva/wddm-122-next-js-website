import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://worldtrip-server-app.herokuapp.com/',
});