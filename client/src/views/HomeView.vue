<template>
  <div>
    <div class="waveOne w-full h-[487px]">
      <NavBar></NavBar>
      <div class="py-32">
        <span class="text-3xl font-poppins ml-32 font-bold text-white"
          >Welcome to BlockFile {{ userStore.user.firstname }}!</span
        >
      </div>
    </div>
    <section id="upload">
      <h1 class="bg-white text-3xl font-poppins ml-32 mt-32 font-bold">Upload your Files</h1>
      <div class="flex justify-center">
        <div
          @change="captureFile()"
          class="bg-gray-200 border-black flex flex-col text-center border border-dashed rounded-md content-center mt-8 justify-center h-64 w-96"
        >
          <i class="fa-solid fa-cloud-arrow-up text-6xl"></i>
          <h1 class="font-coolvetica text-3xl">drag & drop here</h1>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          @click="onSubmit()"
          class="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-md text-center mt-8 text-white text-1xl font-poppins"
        >
          Submit
        </button>
      </div>
    </section>

    <div class="waveTwo w-full h-[55rem] py-32 font-bold text-white">
      <section id="uploaded">
        <span class="text-3xl font-poppins ml-32">Your uploaded Files</span>
        <UploadedFiles class="mx-32 mt-2" />
      </section>
    </div>

    <div class="waveThree w-full h-[55rem] py-20 font-bold text-white">
      <section id="aboutUs">
        <span class="text-3xl font-poppins ml-32">Our Team</span>
        <AboutUs class="m-10" />
      </section>
    </div>
    <FooterBar class="mb-2"></FooterBar>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import AboutUs from '../components/AboutUs.vue';
import UploadedFiles from '../components/UploadedFiles.vue';
import FooterBar from '../components/FooterBar.vue';
import useUserStore from '../stores/users.js';
import { onMounted, ref } from 'vue';
import Web3 from 'web3';
import SimpleStorage from '../../../server/src/ipfs/src/abis/SimpleStorage.json';

import IPFS from 'ipfs-mini';
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// import ipfsClient from 'ipfs-http-client';
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// const props = defineProps({
//   ipfsHash: String,
//   contract: null,
//   web3: null,
//   buffer: null,
//   account: null,
//   ipfsHashes: Array,
// });

const ipfsHash = ref('');
const contract = ref();
const web3 = ref();
const buffer = ref();
const account = ref();
// const ipfsHashes = ref([]);

// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// const IPFS = require('ipfs-mini');
const userStore = useUserStore();

onMounted(async () => {
  // navigator.serviceWorker.ready.then((registration) => {
  //   registration.active.postMessage(
  //     JSON.stringify({
  //       type: 'disconnect',
  //       payload: 'disconnectPayload',
  //     }),
  //   );
  // });
  await loadBlockchainData();
  await loadWeb3();
});

async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.ethereum);
  } else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
}

async function loadBlockchainData() {
  web3.value = window.web3;
  const accounts = await web3.value.eth.getAccounts();
  // this.setState({ account: accounts[0] });
  account.value = accounts[0];
  const networkId = await web3.value.eth.net.getId();
  const networkData = SimpleStorage.networks[networkId];
  if (networkData) {
    contract.value = web3.value.eth.Contract(SimpleStorage.abi, networkData.address);
    // this.setState({ contract });
    ipfsHash.value = await this.state.contract.methods.get().call();
    this.setState({ ipfsHash });
  } else {
    window.alert('Smart contract not deployed to detected network.');
  }
}

const captureFile = (event) => {
  event.preventDefault();
  const file = event.target.files[0];
  const reader = new window.FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    buffer.value = Buffer.from(reader.result);
    console.log('buffer', this.state.buffer);
  };
};

const onSubmit = (event) => {
  event.preventDefault();
  console.log('Submitting file to ipfs...');
  ipfs.add(buffer.value, (error, result) => {
    console.log('Ipfs result', result);
    if (error) {
      console.error(error);
      return;
    }
    // this.state.hashes.push(result[0].hash);

    console.log(this.state.hashes);
    contract.value.methods
      .set(result[0].hash)
      .send(account.value)
      .then(() => {
        return (ipfsHash.value = result[0].hash);
      });
  });
};
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
