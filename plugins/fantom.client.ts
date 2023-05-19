import { defineNuxtPlugin } from "#app";
import VueFathom from "@ubclaunchpad/vue-fathom";
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

        nuxtApp.vueApp.use(VueFathom, {
            siteID:  "KSPWZULP",
            settings: {
                url: "geekiam.blog",
                spa: "history",
            },
        });

});