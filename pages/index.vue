<script lang="ts" setup>


const {data: posts } = await useAsyncData('posts', () => queryContent('/blog').find());
</script>

<template>
  <nuxt-layout name="list">
    <template #leftColumn>
      <p>Left Column</p>
    </template>
    <template #middleColumn>
     <ul>
       <li v-for="post in posts" :key="post._id">
         <nuxt-link :to="post._path">
           {{post.title}}
         </nuxt-link>
       </li>
     </ul>
    </template>

    <template #rightColumn>
      <p>Right Column</p>
    </template>
  </nuxt-layout>
</template>

<style scoped></style>
