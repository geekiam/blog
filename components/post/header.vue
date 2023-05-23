<script lang="ts" setup>
import {PropType} from "@vue/runtime-core";
import {PostHeading} from "~/types/PostHeading";

const props = defineProps({
  post: {
    type: Object as PropType<PostHeading>
  }

})
</script>

<template>
  <div class="w-full mx-auto shadow-lg px-5 pt-5 pb-10 text-gray-100">
    <h1 class="text-orange-500">{{post.title}}</h1>
    <p class="text-md font-semibold italic dark:text-gray-200 text-gray-800 text-justify">
      {{post.summary}}
    </p>
  </div>
</template>

<style scoped></style>
