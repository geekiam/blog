<script lang="ts" setup>


import Card from "~/components/blog/card.vue";

const {data: posts } = await useAsyncData('posts', () => queryContent('/blog').find());

</script>

<template>
  <nuxt-layout name="list">
    <template #leftColumn>

    </template>
    <template #middleColumn>
      <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
        <card :post="post" />
      </article>
    </template>

    <template #rightColumn>

    </template>
  </nuxt-layout>
</template>


