<template>
  <div>
    <div class="waveOne w-full h-[487px]">
      <NavBar></NavBar>
      <span class="text-3xl font-poppins ml-32 mt-32">Welcome to BlockFile Matthias!</span>
    </div>
    <h1 class="bg-white text-3xl font-poppins ml-32 mt-32">Upload your Files</h1>
    <div
      class="bg-gray-200 border-black flex flex-col text-center border w-80 border-dashed rounded-md h-32 content-center mb-32"
    >
      <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
      <h1 class="font-coolvetica text-4xl">drag & drop here</h1>
    </div>
    <div class="waveTwo w-full h-[55rem]">
      <span class="text-3xl font-poppins mt-32">Your uploaded Files</span>
    </div>
    <div class="waveThree w-full h-[55rem]">
      <span class="text-3xl font-poppins ml-32">About us</span>
      <AboutUs />
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import AboutUs from '../components/AboutUs.vue';
</script>

<style scoped>
.waveOne {
  background-image: url('@/assets/welle1.png');
}

.waveTwo {
  background-image: url('@/assets/Welle2.png');
}

.waveThree {
  background-image: url('@/assets/Welle3.png');
}
</style>
