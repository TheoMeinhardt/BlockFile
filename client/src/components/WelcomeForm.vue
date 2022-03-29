<template>
  <!-- Muss noch aligned werden -->
  <div
    class="py-10 px-24 bg-white rounded-3xl w-4/12 flex flex-col justify-center max-h-fit mt-6 mb-5"
  >
    <a href="http://localhost:8080/#/home"
      ><img src="../assets/logo.svg" alt="Logo" height="300" width="300"
    /></a>
    <h3 class="text-lg font-bold">Welcome to BlockFile</h3>
    <p class="my-3">You need a account to access our services</p>
    <router-link to="/login"
      ><a class="px-10 py-3 bg-blue-500 rounded-md text-center">Login</a></router-link
    >
    <p class="my-3 text-center">Dont have an account?</p>
    <router-link to="/register"
      ><a class="px-10 py-3 shadow-md rounded-md text-center">Register</a></router-link
    >
  </div>
</template>
