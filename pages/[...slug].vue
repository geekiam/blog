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

    </template>
  </nuxt-layout>
</template>


