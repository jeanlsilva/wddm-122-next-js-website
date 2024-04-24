import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://worldtrip-backend.vercel.app/',
});