<template>
  <div
    class="py-10 px-80 bg-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center min-h-screen max-w-6xl font-coolvetica"
  >
    <h1 class="text-2xl font-bold">Set up your account</h1>
    <p class="mt-2 text-gray-500">
      For the purpose of industry regulation, your details are required
    </p>
    <input
      type="text"
      placeholder="First Name"
      class="mt-2 hover:drop-shadow-md border-2 h-10 border-gray-300 rounded-md"
    />
    <input
      type="text"
      placeholder="Last Name"
      class="mt-2 hover:drop-shadow-md border-2 h-10 border-gray-300 rounded-md"
    />
    <input
      type="text"
      placeholder="Email"
      class="mt-2 hover:drop-shadow-md border-2 h-10 border-gray-300 rounded-md"
    />
    <input
      type="text"
      placeholder="Password"
      class="mt-2 hover:drop-shadow-md border-2 h-10 border-gray-300 rounded-md"
    />
    <input
      type="text"
      placeholder="Confirm Password"
      class="mt-2 hover:drop-shadow-md border-2 h-10 border-gray-300 rounded-md"
    />
    <p class="mt-2"><input type="checkbox" /> I agree to the <a href="">Terms and Conditions</a></p>
    <a href="" class="px-10 py-3 bg-blue-500 rounded-md text-center mt-4"> Continue</a>
    <div class="border-b-2 mt-4 border-gray-500"></div>
    <p class="mt-4">
      Already have an account?
      <a><router-link to="/login" class="text-blue-600">Sign in -></router-link></a>
    </p>
  </div>
</template>
