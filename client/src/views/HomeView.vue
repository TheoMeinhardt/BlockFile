<template>
  <div>
    <div style="background-image: url('@/assets/welle1.svg')">
      <NavBar></NavBar>
      <span class="text-3xl font-poppins ml-32 mt-32">Welcome to BlockFile Matthias!</span>
    </div>
    <h1 class="bg-white text-3xl font-poppins ml-32">Upload your Files</h1>
    <input type="file"/>
    <div class="bg-gray-200 border-black flex flex-col text-center border w-80 border-dashed rounded-md h-32 content-center">
      <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
      <h1 class="font-coolvetica text-4xl">drag & drop here</h1>

    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
