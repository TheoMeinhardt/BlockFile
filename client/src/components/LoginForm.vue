<template>
  <div
    class="py-10 px-80 bg-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center min-h-screen max-w-6xl font-poppins"
  >
    <h3 class="text-xl font-bold">Login</h3>
    <div class="border-t-2 mt-5 border-gray-500"></div>
    <input
      type="email"
      placeholder="Email Address"
      class="mt-4 border-2 h-10 hover:drop-shadow-md placeholder:text-gray-400 border-gray-300 rounded-md px-2"
    />
    <input
      type="password"
      placeholder="Password"
      class="mt-4 border-2 h-10 hover:drop-shadow-md placeholder:text-gray-400 border-gray-300 rounded-md px-2"
    />
    <router-link
      to="/home"
      class="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-md text-center mt-8 text-white"
    >
      <a class=""> Continue</a>
    </router-link>
    <div class="border-t-2 mt-10 border-gray-500"></div>
    <p class="mt-4">
      Dont have an account?
      <a
        ><router-link to="/register" class="text-blue-600 hover:text-blue-500"
          >Register <i class="fa-solid fa-arrow-right-long"></i></router-link
      ></a>
    </p>
  </div>
</template>
