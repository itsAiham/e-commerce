<script setup>
const { capitalizeSentence } = useUtilities();
const emit = defineEmits(["searching"]);

const props = defineProps({
  categories: Array,
  model: Object,
});

const searchClicked = (event) => {
  emit("searching", {});
};
</script>

<template>
  <div class="md:mb-20">
    <div
      class="grid grid-rows-5 sm:grid-rows-1 gap-3 sm:grid-cols-7 md:grid-cols-5 border-2 bg-white font-biryani sm:text-1xl md:text-2xl p-10 text-gray-900"
    >
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-span-3 lg:col-span-1"
        @change="model['category'] = $event.target.value"
      >
        >
        <option selected value="">Choose category</option>
        <option v-for="category in categories" :value="category">
          {{ capitalizeSentence(category) }}
        </option>
      </select>
      <input
        type="number"
        placeholder="Minimum Price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-start-4 sm:col-span-2 lg:row-start-1 lg:col-start-2 lg:col-span-1"
        @change="model['minPrice'] = $event.target.value"
      />
      <input
        type="number"
        placeholder="Maximum Price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-start-6 sm:col-span-2 lg:row-start-1 lg:col-start-3 lg:col-span-1"
        @change="model['maxPrice'] = $event.target.value"
      />
      <input
        type="text"
        placeholder="Search..."
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:row-start-2 sm:col-span-6 lg:row-start-1 lg:col-start-4 lg:col-span-2"
        @change="model['search'] = $event.target.value.trim()"
      />
      <button
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:col-start-7"
        @click="searchClicked()"
      >
        Search
      </button>
    </div>
  </div>
</template>
