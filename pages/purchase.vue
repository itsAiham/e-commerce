<script setup>
definePageMeta({
  layout: "purchase",
  middleware: ["auth"],
});

const user = useSupabaseUser();

// not pending or error implemented yet
const { data: purchases, pending } = await useFetch("/api/purchase", {
  query: { userId: user.value.id },
});
</script>

<template>
  <div>
    <PurchasesTable :purchases="purchases" v-if="purchases.length" />
    <EmptyList :msg="'You didn\'t buy anything yet!😳'" v-else />
  </div>
</template>
