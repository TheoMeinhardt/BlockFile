<template>
  <div
    class="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-xl"
  >
    <div class="waveOne w-full h-[487px]">
      <NavBar></NavBar>
      <div class="py-32">
        <span class="text-3xl font-poppins ml-32 font-bold text-white"
          >Welcome to BlockFile, {{ userStore.user.firstname }}!<br
        /></span>
        <span class="text-3xl font-poppins ml-32 font-bold text-white"
          >Upload a new file or review your already uploaded files!</span
        >
      </div>
    </div>
    <!-- <section id="upload">
      <h1 class="bg-white text-3xl font-poppins ml-32 mt-32 font-bold">
        Upload your Files
      </h1>
      <div class="flex justify-center">
        <DropZone @drop.prevent="captureFile"></DropZone>
      </div>
      <div class="flex justify-center">
        <button
          @click="onSubmit"
          class="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-md text-centFer mt-8 text-white text-1xl font-poppins"
        >
          Submit
        </button>
      </div>
    </section> -->
    <iframe src="http://localhost:3006" class="w-full aspect-video ..."> </iframe>
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

<script>
window.global = window;
</script>

<script setup>
import NavBar from "../components/NavBar.vue";
import AboutUs from "../components/AboutUs.vue";
import UploadedFiles from "../components/UploadedFiles.vue";
import FooterBar from "../components/FooterBar.vue";
import DropZone from "../components/DropZone.vue";
import useUserStore from "../stores/users.js";
import { onMounted, ref } from "vue";
import Web3 from "web3";
// import Web3 from '@metamask/legacy-web3';
import SimpleStorage from "../../../server/src/ipfs/src/abis/SimpleStorage.json";

import process from "process";
import { Buffer } from "buffer";
import EventEmitter from "events";

import IPFS from "ipfs-mini";
const ipfs = new IPFS({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

// import IPFS from 'ipfs-http-client';
// const ipfs = IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// import * as IPFS from 'ipfs-core';

window.Buffer = Buffer;
window.process = process;
window.EventEmitter = EventEmitter;

const ipfsHash = ref("");
const contract = ref();
const web3 = ref();
const buffer = ref();
const account = ref();
const resultHash = ref("");

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
  await connectWallet();
});

async function connectWallet() {
  if (window.ethereum) {
    //check if Metamask is installed
    try {
      const address = await window.ethereum.enable(); //connect Metamask
      const obj = {
        connectedStatus: true,
        status: "",
        address: address,
      };
      return obj;
    } catch (error) {
      return {
        connectedStatus: false,
        status: "🦊 Connect to Metamask using the button on the top right.",
      };
    }
  } else {
    return {
      connectedStatus: false,
      status:
        "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
    };
  }
}

async function loadBlockchainData() {
  web3.value = new Web3(Web3.givenProvider);
  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  // this.setState({ account: accounts[0] });
  console.log(accounts);
  account.value = accounts[0];
  const networkId = 5777;
  console.log(networkId);
  const networkData = SimpleStorage.networks[networkId];
  if (networkData) {
    contract.value = new web3.value.eth.Contract(SimpleStorage.abi, networkData.address);
    // this.setState({ contract });
    ipfsHash.value = contract.value.methods.get().call();
    // this.setState({ ipfsHash });
  } else {
    window.alert("Smart contract not deployed to detected network.");
  }
}

// const captureFile = (event) => {
//   event.preventDefault();
//   const file = event.dataTransfer.files[0];
//   file.value = file;
//   console.log(file);
//   const reader = new window.FileReader();
//   reader.readAsArrayBuffer(file);
//   reader.onloadend = () => {
//     buffer.value = Buffer.from(reader.result);
//     console.log(buffer.value);
//   };
// };

// const onSubmit = async (event) => {
//   event.preventDefault();
//   console.log("Submitting file to ipfs...");

//   ipfs.add(buffer.value, (error, result) => {
//     resultHash.value = result;
//     console.log(resultHash.value);
//     console.log("Ipfs result", result);
//     console.log(contract.value);
//     console.log(account.value);

//     contract.value.methods
//       .set(result)
//       .send({ from: account.value })
//       .then(() => {
//         return (ipfsHash.value = result);
//       });
//     console.log("success");
//     if (error) {
//       console.error(error);
//       return;
//     }
//   });
// };
</script>

<style scoped>
.waveOne {
  background-image: url("@/assets/welle1.png");
}

.waveTwo {
  background-image: url("@/assets/Welle2.png");
}

.waveThree {
  background-image: url("@/assets/Welle3.png");
}
</style>
