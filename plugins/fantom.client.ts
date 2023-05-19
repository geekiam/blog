import { defineNuxtPlugin } from "#app";
import VueFathom from "@ubclaunchpad/vue-fathom";
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    if(config.public.production_mode) {
        nuxtApp.vueApp.use(VueFathom, {
            siteID: "YourSiteID",
            settings: {
                url: "geekiam.io",
                spa: "history",
            },
        });
    }
});