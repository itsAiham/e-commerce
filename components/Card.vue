<script setup>
const { addToCard } = useUtilities();
const nInCard = useCounter();

const props = defineProps({
  product: Object,
});

// )

const onCardCliecked = async (id) => {
  // console.log(id);
  // const { data, pending } = await useFetch(`/api/product/${id}`);

  // console.log(data.value.id);
  navigateTo(`/product/${data?.value?.id}`);
};
</script>

<template>
  <div>
    <div
      class="flex flex-col relative justify-center items-center border-2 border-gray-50 cursor-default shadow-2xl rounded-lg w-300px h-[600px] md:h-[550px]"
    >
      <nuxt-img
        :src="product.image"
        class="object-contain h-[55%] scale-100 hover:scale-100 md:hover:h-[65%] duration-1000 cursor-pointer"
        :alt="product.title.split(' ')[0] + ' image'"
        @click="navigateTo(`/product/${product?.id}`)"
      />
      <p
        class="font-medium text-2xl text-3xl tracking-wide text-xl sm:text-2xl p-2 pt-10 md:pt-2 h-[25%]"
      >
        {{ product.title.split("(")[0] }}
      </p>
      <div
        class="flex flex-row justify-center items-center self-center m-auto h-[10%] w-[80%] sm:w-[70%] md:w-[80%]"
      >
        <button
          class="font-semibold w-[50%] h-[100%] text-2xl rounded-2xl bg-amber-500 text-slate-100"
          @click="
            nInCard++;
            addToCard(product);
          "
        >
          ADD
        </button>
        <div class="w-[50%] h-[100%] flex items-center justify-center">
          <p class="font-zenAntique text-3xl font-light">
            ${{ product.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
