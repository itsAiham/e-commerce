<template>
  <div class="relative">
    <header
      class="top-0 z-10 flex justify-between items-center space-x1 border-b bg-white p-4 shadow-md font-ubuntu sm:text-md md:text-xl mr-0"
    >
      <NuxtLink
        class="text-3xl sm:text-6xl p-2 ml-1 sm:ml-10 font-mynerve tracking-tighter"
        to="/"
      >
        <h1>Ecom.</h1>
      </NuxtLink>
      <div class="flex gap-4 sm:gap-10 w-[100%] justify-end sm:mr-5">
        <AuthButtons class="mr-1 sm:mr-6" />

        <NuxtLink to="/cart">
          <CartIcon />
        </NuxtLink>
      </div>
    </header>
  </div>
</template>
