// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content',  '@nuxt/image', 'nuxt-icon', 'nuxt-headlessui',],
    runtimeConfig: {
        public: {
            fathom_analytics_id: process.env.fathom_analytics_id,
            siteUrl: 'https://geekiam.blog'
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/rss.xml']
        }
    },
    image: {
        provider: 'cloudinary',
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/geekiam-io/image/upload/'
        }
    }

});

