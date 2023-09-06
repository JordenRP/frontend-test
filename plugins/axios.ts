import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl: string = "http://158.160.10.199";

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