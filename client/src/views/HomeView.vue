<template>
  <div>
    <div class="waveOne w-full h-[487px]">
      <NavBar></NavBar>
      <div class="py-32">
        <span class="text-3xl font-poppins ml-32 font-bold text-white"
          >Welcome to BlockFile {{userStore.user.firstname}}!</span
        >
      </div>
    </div>
    <section id="upload">
      <h1 class="bg-white text-3xl font-poppins ml-32 mt-32 font-bold">Upload your Files</h1>
      <div class="flex flex-col justify-center">
        <div
          class="bg-gray-200 border-black flex flex-col text-center border w-80 border-dashed rounded-md h-32 content-center mb-32 justify-center"
        >
          <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
          <h1 class="font-coolvetica text-4xl">drag & drop here</h1>
        </div>
      </div>
    </section>

    <div class="waveTwo w-full h-[55rem] py-32 font-bold text-white">
      <section id="uploaded">
        <span class="text-3xl font-poppins ml-32">Your uploaded Files</span>
        <UploadedFiles />
      </section>
    </div>

    <section id="aboutUs">
      <div class="waveThree w-full h-[55rem] py-20 font-bold text-white">
        <span class="text-3xl font-poppins ml-32">About us</span>
        <AboutUs class="m-10" />
      </div>
    </section>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import AboutUs from '../components/AboutUs.vue';
import UploadedFiles from '../components/UploadedFiles.vue';
import useUserStore from '../stores/users.js'

const userStore = useUserStore();

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
