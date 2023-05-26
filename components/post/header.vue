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
  <div class="w-full mx-auto shadow-lg px-5 pt-5 pb-10 text-gray-100 mt-3 mb-5">
    <h1 class="text-orange-500 text-center text-6xl">{{post.title}}</h1>
    <p class="dark:text-gray-200 text-gray-800 text-center text-2xl mt-2 mb-2 p-2">{{post.subtitle}}</p>
    <p class="text-md font-semibold italic text-xl dark:text-gray-200 text-gray-800 text-justify p-5">
      {{post.summary}}
    </p>
    <div class="overflow-hidden">
       <div class="p-6">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="sm:flex sm:space-x-5">
            <div class="flex-shrink-0">
              <img class="mx-auto h-10 w-10 rounded-full" :src="post?.author?.imageUrl" alt="" />
            </div>
            <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p class="text-orange-500 text-lg font-bold sm:text-xl">{{ post.author.name }}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
