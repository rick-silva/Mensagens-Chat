import axios from "axios";

export const api = axios.create({
    baseURL: 'https://chatserver-sooty.vercel.app/'
})