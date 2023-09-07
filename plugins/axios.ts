import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl: string = "http://51.250.30.125/";

    let api = axios.create({
        baseURL: defaultUrl,
        headers: {

        },
        withCredentials: false
    });

    return {
        provide: {
            api: api,
        },
    };
});