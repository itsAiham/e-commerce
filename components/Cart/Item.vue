<script setup>
import { useLocalStorage } from "@vueuse/core";
const { removeFromCart } = useUtilities();
const user = useSupabaseUser();
const supabase = useSupabaseAuthClient();

const card = useLocalStorage("card", {});
const items = computed(() => {
  return card.value;
});

const removeProducts = () => {
  card.value = {};
};

const onPaymentClicked = async () => {
  card.value.userId = user.value.id;
  const { data, error, pending } = await useFetch(`/api/products`, {
    method: "POST",
    body: card.value,
  });

  // no showing error or pening currently
  if (window.confirm("Let's pretend that you paid and got your stuff 😉")) {
    console.log(data);
    removeProducts();
    navigateTo("/");
  }
};

function handleLogin() {
  supabase.auth.signInWithOAuth({
    provider: "google",
  });
}
</script>

<template>
  <div class="m-0 p-0 md:w-[70%] m-auto min-h-screen">
    <EmptyList
      :nOfItem="card?.totalProducts"
      :msg="'Nothing in your cart 😑'"
    />
    <div v-for="(item, id) in items">
      <div
        v-if="!isNaN(id)"
        class="m-4 sm:m-7 p-1 sm:text-md font-zenAntique grid grid-rows-6 grid-cols-8 h-[200px] bg-gray-200 rounded-xl"
      >
        <nuxt-img
          :src="item.image"
          class="col-start-1 col-end-2 row-end-2 row-span-3 col-span-2 m-4 col-span-2 xl:m-4 xl:p-3 xl:m-0"
          :key="id"
          @click="navigateTo(`/product/${id}`)"
        />

        <h1
          class="col-start-3 col-end-8 row-start-2 row-end-3 leading-none truncate"
        >
          {{ item.title }}
        </h1>
        <span
          class="text-md sm:text-xl col-end-4 col-start-3 sm:col-start-3 row-start-4"
          >Price:
        </span>
        <span class="text-md sm:text-xl col-start-5 row-start-4">
          ${{ item.reservingPrice }}</span
        >
        <span
          class="text-md sm:text-xl col-start-7 sm:col-start-6 p-1 sm:p-0 col-end-8 row-start-4 text-sm"
          >X {{ item.amount }}</span
        >

        <span
          class="col-start-1 col-start-3 col-end-8 row-start-5 text-sm sm:text-md"
          v-if="item.amount > 1"
          >Sum for pruduct:
          <span> ${{ item.reservingPrice * item.amount }}</span>
        </span>

        <button
          class="col-start-4 col-span-2 row-start-6 sm:col-span-1 sm:col-start-7 sm:row-start-5 border-2 bg-amber-500 rounded-xl items-center text-white text-sm"
          @click="removeFromCart(id)"
        >
          Remove
        </button>
      </div>
    </div>

    <div v-if="card.totalProducts" class="m-8 h-3">
      <span class="m-5 pt-9 text-xl sm:text-xl md:text-2xl font-semibold"
        >Total Payment: ${{ card.totalPrice }}</span
      >
      <div class="flex flex-row justify-center items-center font-semibold">
        <button
          class="border-2 border-amber-500 m-5 p-4 sm:w-[30%] rounded-xl items-center"
          @click="removeProducts"
        >
          Empty Cart
        </button>
        <button
          v-if="!user"
          class="border-2 border-amber-500 m-5 p-4 sm:w-[30%] rounded-xl"
          @click="handleLogin"
        >
          Login
        </button>
        <button
          v-else
          @click="onPaymentClicked"
          class="border-2 border-amber-500 m-5 p-4 sm:w-[30%] rounded-xl"
        >
          Payment
        </button>
      </div>
    </div>
  </div>
</template>
