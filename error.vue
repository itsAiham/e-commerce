<script setup>
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-7xl sm:text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-2xl sm:text-4xl">😱{{ error.message }}</p>
    <NuxtLink
      to="/"
      class="rounded mt-7 border-2 border-amber-500 sm:text-2xl px-7 py-4 hover:bg-amber-500 hover:text-white"
      @click="handleError"
    >
      Go home
    </NuxtLink>
  </div>
</template>
