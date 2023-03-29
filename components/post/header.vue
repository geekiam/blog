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
  <div class="p-4">
    <h1>{{post.title}}</h1>
  </div>
</template>

<style scoped></style>
