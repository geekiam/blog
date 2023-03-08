<script lang="ts" setup></script>

<template>

  <div class="relative flex min-h-screen flex-col px-10">
  <div class="flex min-h-0 flex-1 overflow-hidden">
   <!-- Main area -->
    <main class="min-w-0 flex-1 lg:flex">
      <!-- Primary column -->
      <section aria-labelledby="primary-heading" class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last ">
       <div class="prose prose-lg dark:text-gray-100 text-gray-900 dark:text-gray-100 dark:prose-blockquote:text-green-500
       prose-blockquote:text-xl prose-headings:text-green-800 prose-a:no-underline prose-a:text-green-500">
        <slot name="mainContent" />
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
