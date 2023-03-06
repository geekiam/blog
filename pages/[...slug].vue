<script lang="ts" setup>
const route = useRoute()

const {data: post} = await useAsyncData('post', () => queryContent('/blog')
    .where({_path: route.path})
    .findOne())

</script>

<template>
  <nuxt-layout name="post">
    <template #mainContent >
     <content-renderer :value="post" />
    </template>

    <template #rightColumn>
      <p class="text-red-600">This is the content for the right column</p>
    </template>
  </nuxt-layout>
</template>

<style scoped></style>
