<script lang="ts" setup>
const route = useRoute()

const {data: post} = await useAsyncData('post', () => queryContent('/posts')
    .where({_path: route.path})
    .findOne())

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


