<script lang="ts" setup>
useHead({
  title: 'Geekiam',
  meta: [
    { name: 'og:image', content: 'https://geekiam.io/geekiam.png' },
    { name: 'og:url', content: 'https://geekiam.io' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@geekiamio' },
    { name: 'twitter:creator', content: '@geekiamio' },
    { name: 'twitter:title', content: 'Geekiam' },
    {
      name: 'twitter:description',
      content: 'Discover, Organise, Share and Promote learning in communities of interest',
    },
    { name: 'twitter:image', content: 'https://geekiam.io/geekiam.png' },
  ],
  script: [
    { src:'' },
  ]
})

</script>
<template>
  <div class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-800">
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
  </div>
</template>
