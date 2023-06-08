<script lang="ts" setup>
</script>

<template>
  <div>
    <header class="sticky z-50 top-0">
      <structure-header/>
    </header>
    <main class="mx-auto">
      <slot/>
    </main>
    <footer class="bottom-0">
      <structure-footer/>
    </footer>
  </div>
</template>

<style scoped></style>
