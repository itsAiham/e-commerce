<script setup>
useHead({
  title: "Ecom.",
});

const categorySet = new Set();
const model = ref({
  category: "",
  minPrice: 0,
  maxPrice: 0,
  search: "",
});

let { data: products } = await useFetch(`/api/products`, {
  query: model,
});

for (let i of await products?.value) {
  categorySet.add(i.category);
}

// the props of button is only to change focus to search-btn
const onSearchClicked = async (model) => {
  // no validating if minPrice > maxPrice
  if (!isNaN(model.minPrice) || !isNaN(model.maxPrice)) return;
};
</script>

<template>
  <div>
    <NavBar />
    <HeroImg />
    <SearchBar
      @searching="onSearchClicked"
      :model="model"
      :categories="[...categorySet].sort()"
    />
    <Cards :products="products" v-if="products.length" />
    <EmptyList v-else :msg="'Obs😕 Nothing found! '" />
    <Footer />
  </div>
</template>
