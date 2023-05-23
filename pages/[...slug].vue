<script lang="ts" setup>
const route = useRoute()

const {data: post} = await useAsyncData('post', () => queryContent('/posts')
    .where({_path: route.path})
    .findOne())

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.summary,
  ogImage:  () => `https://geekiam.blog${post.value?.featureImage.url}`,
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <nuxt-layout name="post">
    <template #mainContent >
      <post-header :post="post" />
      <content-renderer :value="post" />
    </template>

    <template #rightColumn>

    </template>
  </nuxt-layout>
</template>


