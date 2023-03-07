<script setup>
const props = defineProps({
  purchases: Object,
});

const showPurches = (orderId) => {
  navigateTo(`/order/${orderId}`);
};
</script>

<template>
  <div class="flex flex-col md:m-6 lg:m-10">
    <label class="m-3 p-3">Click on order to view</label>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">Shopment Id</th>
                <th scope="col" class="px-6 py-4">Date</th>
                <th scope="col" class="px-6 py-4">Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b dark:border-neutral-500 hover:cursor-pointer hover:border-2 hover:border-amber-500"
                v-for="purchase in purchases"
                @click="showPurches(purchase.id)"
              >
                <td class="whitespace-nowrap px-6 py-4">{{ purchase?.id }}</td>
                <td class="whitespace-nowrap px-6 py-4">
                  {{ purchase?.createdAt.split("T")[0] }}
                </td>
                <td class="whitespace-nowrap px-6 py-4">
                  $ {{ purchase?.total }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
