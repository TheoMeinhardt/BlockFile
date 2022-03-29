<template>
  <!-- Muss noch aligned und designed werden -->
  <div
    class="py-10 px-24 bg-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center min-h-screen max-w-6xl"
  >
    <h3 class="text-xl font-bold">Login</h3>
    <input type="text" placeholder="Email Address" class="mt-4 border-2 max-h-md hover:drop-shadow-md border-solid" />
    <input type="text" placeholder="Password" class="mt-4 border-2 hover:drop-shadow-md border-solid" />
    <a class="px-10 py-3 bg-blue-500 rounded-md text-center mt-8"> Continue</a>
    <div class="border-t-4 mt-10 border-gray-500"></div>
    <p class="mt-4">
      Dont have an account?
      <a><router-link to="/register" class="text-blue-600">Register -></router-link></a>
    </p>
  </div>
</template>
