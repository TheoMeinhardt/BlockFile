<template>
  <header class="flex justify-between py-4 px-8 font-poppins bg-[#2C5CAB]">
    <span class="grow"></span>
    <ul class="text-center gap-4 flex flex-row items-center align-middle text-white">
      <li><a href="">Home</a></li>
      <li>|</li>
      <li><a href="#upload" v-smooth-scroll>Upload</a></li>
      <li>|</li>
      <li><a href="#uploaded" v-smooth-scroll>Uploaded</a></li>
      <li>|</li>
      <li><a href="#aboutUs" v-smooth-scroll>Our Team</a></li>
    </ul>
    <span class="grow"></span>
    <span class="align-self text-white mt-2">
      {{ userStore.user.firstname }}
    </span>
    <span class="mx-4 text-white mt-2">|</span>
    <button
      @click="logout"
      class="text-white bg-red-600 p-2 rounded-md align-self hover:bg-red-500"
    >
      Logout
    </button>
  </header>
</template>

<script setup>
import 'flowbite';
import useUserStore from '../stores/users.js';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.user = {};
  userStore.token = '';
  router.push('/');
};
</script>
