<template>
  <div>
    <div class="text-white flex justify-between px-4 py-4">
      <a href="/"><img src="" alt="@/assets/logo.svg" /></a>

      <ul class="hidden md:flex flex-row items-center align-middle gap-4">
        <a href="#" class="bg-pink-400 text-black px-4 py-2 rounded-md"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contact</li></a>
      </ul>

      <button class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup></script>
