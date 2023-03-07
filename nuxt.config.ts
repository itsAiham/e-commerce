// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        '@nuxtjs/supabase'
    ],
    image: {
        dir: 'static/images',
        
    },
    css: [
        '@/assets/css/tailwind.css',
      ],
})
 