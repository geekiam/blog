// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    head: {
        script: [
            {
                hid: 'fathom', // unique identifier
                src: 'KSPWZULP',
                site: 'https://cdn.usefathom.com/script.js',
                spa: 'auto', // set by fathom
                defer: 'defer',
                once: true, // only load once on SSR


            }
        ]
    },
    content: {
        highlight: {

            theme: {
                // Default theme (same as single string)
                default: 'monokai',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
        },
    },
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
    runtimeConfig: {
        public: {
            fathom_analytics_id: `KSPWZULP`
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
    },

});

