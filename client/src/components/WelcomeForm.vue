<template>
  <div
    class="py-10 px-24 bg-white rounded-3xl w-4/12 flex flex-col max-h-fit mt-6 mb-5 font-poppins"
  >
    <router-link to="/home" class="place-items-start">
      <a><img src="../assets/logo.svg" alt="Logo" height="300" width="300" /></a>
    </router-link>
    <h3 class="text-2xl font-bold mt-16">Welcome to BlockFile</h3>
    <p class="my-3 font-light">You need an account to access our services!</p>
    <router-link to="/login" class="text-center mt-12"
      ><a
        class="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-md text-center text-white shadow-md hover:shadow-lg"
        >Login</a
      ></router-link
    >
    <p class="my-3 text-center mt-10">Don't have an account? Register now!</p>
    <router-link to="/register" class="text-center mt-8"
      ><a class="px-10 py-3 shadow-md rounded-md hover:shadow-lg text-center"
        >Register</a
      ></router-link
    >
  </div>
</template>
