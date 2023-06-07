<script lang="ts" setup>
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <div class="flex min-h-0 flex-1 overflow-hidden">
      <!-- Main area -->
      <main class="min-w-0 flex-1 lg:flex">
        <div class="xl:w-64 xl:flex-shrink-0 ">
          <div class="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
            <!-- Left column area -->
          </div>
        </div>
        <!-- Primary column -->
        <section aria-labelledby="primary-heading" class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last ">
          <div class="prose prose-lg dark:text-gray-100 text-gray-900 px-2 sm:px-1 dark:prose-blockquote:text-orange-500
       prose-blockquote:text-xl prose-headings:text-orange-500 prose-a:no-underline prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly">
            <slot name="middleColumn" />
          </div>
        </section>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden lg:order-last lg:block lg:flex-shrink-0">
          <div class="relative flex h-full w-96 flex-col overflow-y-auto ">
            <slot name="rightColumn" />
          </div>
        </aside>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
