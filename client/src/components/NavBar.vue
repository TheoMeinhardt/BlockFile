<template>
  <header class="flex justify-between py-4 px-8 font-poppins">
    <span class="grow"></span>
    <ul
      class="text-center gap-4 flex flex-row items-center align-middle divide-x-2 divide-white text-white"
    >
      <li><a href="">Home</a></li>
      <li><a href="#upload" v-smooth-scroll>Upload</a></li>
      <li><a href="#uploaded" v-smooth-scroll>Uploaded</a></li>
      <li><a href="#aboutUs" v-smooth-scroll>About us</a></li>
    </ul>
    <span class="grow"></span>
    <a class="align-self text-white">{{ userStore.user.firstname }}</a>
  </header>
</template>

<script setup>
import useUserStore from '../stores/users.js';

const userStore = useUserStore();
</script>
