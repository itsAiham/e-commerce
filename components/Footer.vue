<script setup>
let currentYeat = new Date().getFullYear();
</script>

<template>
  <div
    class="flex justify-center items-center h-[150px] bg-slate-500 mt-40 w-[100%] fixed bottom-0 relative"
  >
    <div class="">
      <footer class="sm:text-sm text-slate-200">
        <a target="_blank" href="https://github.com/itsAiham">
          © {{ currentYeat }} itsAiham
        </a>
      </footer>
    </div>
  </div>
</template>
