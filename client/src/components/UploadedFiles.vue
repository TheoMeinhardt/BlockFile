<template>
  <div
    class="upload scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-xl"
  >
    <div class="flex justify-center flex-wrap overflow-auto h-auto">
      <div
        v-for="(i, img) in images"
        :key="img"
        class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m-4 w-80 h-1/2"
      >
        <a href="">
          <img class="rounded-t-lg h-1/2" :src="`http://ipfs.infura.io/ipfs/${i.hash}`" alt="" />
        </a>
        <div class="p-5">
          <p class="mb-3 font-poppins text-gray-700">{{ i.hash.slice(0, 28) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'flowbite';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import useUserStore from '../stores/users.js';

const userStore = useUserStore();

const images = ref([]);

onMounted(async () => {
  const id = userStore.user.uid;
  let { data } = await axios.get(`http://localhost:3000/image/${id}`);
  images.value = data;
  console.log(data);
});
</script>

<style scoped>
.upload {
  height: 35rem;
  overflow: auto;
}
</style>
