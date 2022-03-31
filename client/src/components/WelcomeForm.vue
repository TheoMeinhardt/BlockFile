<template>
  <!-- TODO
  alignment -->
  <div
    class="py-10 px-24 bg-white rounded-3xl w-4/12 flex flex-col max-h-fit mt-6 mb-5 font-coolvetica"
  >
    <a href="http://localhost:8080/#/home" class="place-items-start"
      ><img src="../assets/logo.svg" alt="Logo" height="300" width="300"
    /></a>
    <h3 class="text-2xl font-bold mt-16">Welcome to BlockFile</h3>
    <p class="my-3 font-light">You need a account to access our services</p>
    <router-link to="/login" class="text-center mt-12"
      ><a class="px-10 py-3 bg-blue-500 rounded-md text-center">Login</a></router-link
    >
    <p class="my-3 text-center mt-10">Dont have an account?</p>
    <router-link to="/register" class="text-center mt-12"
      ><a class="px-10 py-3 shadow-md rounded-md text-center">Register</a></router-link
    >
  </div>
</template>
