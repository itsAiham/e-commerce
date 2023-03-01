<template>
  <div>
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x1 border-b bg-white p-4 shadow-md font-biryani sm:text-1xl md:text-2xl mr-5"
    >
      <NuxtLink
        class="text-4xl sm:text-6xl p-2 ml-1 sm:ml-10 font-mynerve tracking-tighter"
        to="/"
      >
        <h1>Ecom.</h1>
      </NuxtLink>
      <div class="flex sm:w-[150px] justify-between">
        <NuxtLink to="/login" class="mr-6">Login</NuxtLink>
        <CartIcon />
      </div>
    </header>
  </div>
</template>
