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
      <div class="flex">
        <NuxtLink to="/login" class="mr-6">Login</NuxtLink>
        <!-- <p class="cursor-pointer">Logout</p> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 hover:cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
      <!-- <NuxtLink to="/login">Login</NuxtLink> -->
    </header>
  </div>
</template>
