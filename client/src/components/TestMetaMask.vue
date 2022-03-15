<template>
  <div>
    <button @click="getA" class="bg-pink-400 text-black px-4 py-2 rounded-md">
      Enable Ethereum
    </button>
    <h2>Account: <span></span></h2>
  </div>
</template>

<script startup>
const getA = () => {
  console.log('asdasd');
};
</script>
