<script setup>
const user = await useSupabaseUser();
const supabase = useSupabaseAuthClient();
const isLoggedIn = !user?.value ? "Login" : "Logout";

const handleClicked = async () => {
  if (user?.value) {
    return supabase.auth.signOut();
  }

  supabase.auth.signInWithOAuth({
    provider: "google",
  });
};
</script>

<template>
  <div>
    <div v-if="user" class="flex gap-4 sm:gap-10 pt-1">
      <button
        @click="
          supabase.auth.signOut();
          navigateTo('/');
        "
      >
        Logout
      </button>
      <NuxtLink to="/purchase"> My Purchase </NuxtLink>
    </div>
    <div v-else>
      <button @click="handleClicked">Login</button>
    </div>
  </div>
</template>
