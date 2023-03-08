// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'  ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
    },
    content: {
        highlight: {

            theme: {
                // Default theme (same as single string)
                default: 'github-dark',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
        }
    }
})
