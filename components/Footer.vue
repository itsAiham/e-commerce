<script setup>
let currentYeat = new Date().getFullYear();
</script>

<template>
  <div
    class="flex justify-center items-center h-[150px] bg-slate-500 border-2 border-t-neutral-50 mt-40"
  >
    <footer class="text-2xl text-slate-200">
      © {{ currentYeat }}
      <a target="_blank" href="https://github.com/itsAiham">itsAiham </a>
    </footer>
  </div>
</template>
