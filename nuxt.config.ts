import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    modules: [
        "@nuxtjs/google-fonts",
        "nuxt-icon",
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) =>
                // @ts-ignore
                config.plugins.push(vuetify())
            );
        },
    ],
    css: ["@/assets/main.scss"],
    typescript: { shim: false },
    build: { transpile: ["vuetify"] },
    devtools: { enabled: true }
})
