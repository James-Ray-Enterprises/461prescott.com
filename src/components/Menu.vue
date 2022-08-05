<script setup>
import ZillowLink from '../components/ZillowLink.vue'
</script>

<template>
  <nav class="bg-gradient-to-b from-amber-50 via-amber-50 to-transparent h-40 lg:h-52">
    <div class="p-4 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-auto pt-2 pb-4">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center mt-1 2xl:ml-10 sm:ml-1 lg:mt-4">
            <a href="/" class="text-2xl lg:text-4xl font-extrabold">
              461 Prescott St
            </a>
          </div>
        </div>
        <div class="hidden lg:inline-flex lg:space-x-8">
          <!-- Navigation -->
        </div>
        <div class="flex items-center">
          <zillow-link/>
        </div>
      </div>
    </div>
  </nav>
</template>
