<script lang="ts" setup>
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <!-- 3 column wrapper -->
    <div class="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
      <!-- Left sidebar & main wrapper -->
      <div class="min-w-0 flex-1 xl:flex">
        <div class="xl:w-64 xl:flex-shrink-0 ">
          <div class="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
            <div class="relative h-full" style="min-height: 12rem">
              <div class="absolute inset-0">
               <slot name="leftColumn" />
              </div>
            </div>

          </div>
        </div>
        <div class="lg:min-w-0 lg:flex-1">
          <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
            <div class="relative h-full" style="min-height: 36rem">
              <div class="absolute inset-0" >
                <slot name="middleColumn"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pr-4 sm:pr-6 lg:flex-shrink-0 lg:pr-8 xl:pr-0">
        <div class="h-full py-6 pl-6 lg:w-80">
          <div class="relative h-full" style="min-height: 16rem">
            <div class="absolute inset-0 ">
              <slot name="rightColumn" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clear-both" aria-hidden="true" />
  </div>
</template>

<style scoped></style>
