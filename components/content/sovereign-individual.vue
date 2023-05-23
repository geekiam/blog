<script lang="ts" setup>
function select(url:string) {
  window.open(url, '_blank')
}

</script>

<template>

    <div
        class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-700">
      <div class="w-full md:w-1/3 grid place-items-center">
        <img src="/images/sovereign-individual.jpg" alt="tailwind logo" class="rounded-xl" />
      </div>
      <div class="w-full md:w-2/3 flex flex-col space-y-2 p-3">
         <a href="https://amzn.to/45EaivZ" class="md:text-3xl text-xl">The Sovereign Individual</a>
        <p class="md:text-lg text-gray-800 dark:text-gray-100 text-base mb-5">An exploration into the greatest economic and political transition in
          centuries—the shift from an industrial to an information-based society. This transition, which they have termed "the fourth stage of human society,"</p>
        <button type='button' v-on:click='select("https://amzn.to/45EaivZ")'
                class='flex break-inside bg-orange-400 text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full mt-5'>
          <div class='m-auto'>
            <div class='flex items-center justify-start flex-1 space-x-4'>

              <span class='font-medium'>Buy Now</span>
            </div>
          </div>
        </button>
      </div>
    </div>

</template>

<style scoped></style>
