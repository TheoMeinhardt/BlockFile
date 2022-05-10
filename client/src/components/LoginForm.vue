<template>
  <form @submit.prevent class="py-10 px-80 bg-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center min-h-screen max-w-6xl font-poppins">
    <h3 class="text-xl font-bold">Login</h3>
    <div class="border-t-2 mt-5 border-gray-500"></div>

    <input v-model="email" type="email" placeholder="Email Address" class="mt-4 border-2 h-10 hover:drop-shadow-md placeholder:text-gray-400 border-gray-300 rounded-md px-2" />
    <p v-if="valErr.email">{{ valErr.email }}</p>
    <input v-model="password" type="password" placeholder="Password" class="mt-4 border-2 h-10 hover:drop-shadow-md placeholder:text-gray-400 border-gray-300 rounded-md px-2" />
    <p v-if="valErr.password">{{ valErr.password }}</p>

    <!-- <router-link to="/home" class="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-md text-center mt-8 text-white"> </router-link> -->
    <button @click="submitLogin()" class="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-md text-center mt-8 text-white">Continue</button>
    <p v-if="valErr.status">{{ valErr.status }}</p>

    <div class="border-t-2 mt-10 border-gray-500"></div>

    <p class="mt-4">
      Dont have an account?
      <a
        ><router-link to="/register" class="text-blue-600 hover:text-blue-500">Register <i class="fa-solid fa-arrow-right-long"></i></router-link
      ></a>
    </p>
  </form>
</template>

<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import useUserStore from '@/stores/users';

const userStore = useUserStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const valErr = { email: '', password: '', status: '' };

watch(email, (val) => {
  const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (val === '') valErr.email = 'An Email must be specified!';
  else if (!val.match(re)) valErr.email = 'Invalid Email!';
  else valErr.email = '';
});

watch(password, (val) => {
  if (val === '') valErr.password = 'A Password must be specified!';
  else valErr.password = '';
});

async function submitLogin() {
  if (valErr.email === '' && valErr.password === '') {
    const res = await axios.post('http://localhost:3000/user/login', {
      email: email.value,
      password: password.value,
    });

    console.log(res.data);

    if (res.status === 200) {
      userStore.jwt = res.data;
      router.push('/home');
    } else if (res.status === 401) {
      valErr.status = res.data;
    } else {
      valErr.status = 'An Error Occurred!';
    }
  }
}
</script>
