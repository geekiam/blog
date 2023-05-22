// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app:{
        head: {
            script: [
                // <script src="https://myawesome-lib.js"></script>
                { src: 'https://cdn.usefathom.com/script.js', defer: true, 'data-site': 'KSPWZULP', 'data-spa': 'auto', 'data-excluded-domains':'localhost' }
            ],
        }
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

