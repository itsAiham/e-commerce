<script setup>
import products from "@/data/data.json";

const categorySet = new Set();
products.forEach((product) => {
  categorySet.add(product.category);
});

const capitarize = (word) => {
  const arr = word.split(" ");
  let str = "";
  arr.forEach((w) => {
    str += w.charAt(0).toUpperCase() + w.slice(1) + " ";
  });
  return str;
};

const filterProducts = (category) => {
  console.log("Changes");
  console.log(category);
};
</script>

<template>
  <div class="md:mb-20">
    <div
      class="grid grid-rows-5 sm:grid-rows-1 gap-3 sm:grid-cols-7 md:grid-cols-5 border-2 bg-white font-biryani sm:text-1xl md:text-2xl p-10 text-gray-900"
    >
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-span-3 lg:col-span-1"
      >
        >
        <option selected>Choose category</option>
        <option
          v-for="category in categorySet"
          @change="filterProducts(category)"
        >
          {{ capitarize(category) }}
        </option>
      </select>
      <input
        type="number"
        placeholder="Minimum Price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-start-4 sm:col-span-2 lg:row-start-1 lg:col-start-2 lg:col-span-1"
      />
      <input
        type="number"
        placeholder="Maximum Price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-start-6 sm:col-span-2 lg:row-start-1 lg:col-start-3 lg:col-span-1"
      />
      <input
        type="text"
        placeholder="Search..."
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:row-start-2 sm:col-span-6 lg:row-start-1 lg:col-start-4 lg:col-span-2"
      />
      <button
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-start-7"
      >
        Search
      </button>
    </div>
  </div>
</template>
