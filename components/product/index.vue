<script setup>
const { addToCard } = useUtilities();
const nInCard = useCounter();

const props = defineProps({
  product: Object,
});
</script>

<template>
  <div class="sm:grid sm:grid-cols-10 md:grid-rows-2 mt-6">
    <nuxt-img
      :src="product.image"
      class="object-contain col-start-3 col-end-6 h-[100%] w-[50%] sm:w-[100%]"
      :alt="product.title.split(' ')[0] + ' image'"
    />
    <div
      class="flex flex-col items-center mt-6 col-start-7 col-end-10 text-sm sm:text-2xl sm:gap-10 lg:text-4xl font-biryani"
    >
      <h1 class="p-8 sm:p-0 sm:text-xl md:text-2xl">{{ product.title }}</h1>
      <div
        class="flex flex-row items-center mt-5 mb-5 text-right pr-4 w-[100%]"
      >
        <ProductRating
          :rating="product.rating"
          class="w-[50%] text-gray-500 text-xs sm:text-lg text-left"
        />
        <h3 class="w-[50%] font-zenAntique">${{ product.price }}</h3>
      </div>

      <button
        class="font-semibold w-[50%] lg:w-[35%] sm:w-[50%] h-[40px] text-xs sm:text-lg rounded-2xl bg-amber-500 text-slate-100"
        @click="
          nInCard++;
          addToCard(product);
        "
      >
        Add
      </button>
    </div>

    <div
      class="col-start-3 col-end-10 row-start-2 mt-5 p-4 sm:p-2 text-lg sm:text-2xl md-text-3xl"
    >
      <p>
        <span class="underline">Descripting:</span>
        {{ product.description }}
      </p>
    </div>
  </div>
</template>
