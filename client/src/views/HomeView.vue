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

// import { onMounted } from 'vue';
// import Web3 from 'web3';
// import SimpleStorage from '../../../server/src/ipfs/src/contracts/SimpleStorage.sol';
// import ipfsClient from 'ipfs-http-client';

const userStore = useUserStore();

// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// const startServer = async () => {
//   await loadBlockchainData();
//   await loadWeb3();

//   async function loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     } else if (window.web3) {
//       window.web3 = new Web3(window.ethereum);
//     } else {
//       window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
//     }
//   }

//   async function loadBlockchainData() {
//     const web3 = window.web3;
//     const accounts = await web3.eth.getAccounts();
//     this.setState({ account: accounts[0] });
//     const networkId = await web3.eth.net.getId();
//     const networkData = SimpleStorage.networks[networkId];
//     if (networkData) {
//       const contract = web3.eth.Contract(SimpleStorage.abi, networkData.address);
//       this.setState({ contract });
//       const ipfsHash = await this.state.contract.methods.get().call();
//       this.setState({ ipfsHash });
//     } else {
//       window.alert('Smart contract not deployed to detected network.');
//     }
//   }

//   constructor();
//   {
//     this.state = {
//       ipfsHash: '',
//       contract: null,
//       web3: null,
//       buffer: null,
//       account: null,
//       ipfsHashes: [],
//     };
//   }

//   const captureFile = (event) => {
//     event.preventDefault();
//     const file = event.target.files[0];
//     const reader = new window.FileReader();
//     reader.readAsArrayBuffer(file);
//     reader.onloadend = () => {
//       this.setState({ buffer: Buffer.from(reader.result) });
//       console.log('buffer', this.state.buffer);
//     };
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitting file to ipfs...');
//     ipfs.add(this.state.buffer, (error, result) => {
//       console.log('Ipfs result', result);
//       if (error) {
//         console.error(error);
//         return;
//       }
//       // this.state.hashes.push(result[0].hash);

//       console.log(this.state.hashes);
//       this.state.contract.methods
//         .set(result[0].hash)
//         .send({ from: this.state.account })
//         .then(() => {
//           return this.setState({ ipfsHash: result[0].hash });
//         });
//     });
//   };
// };
// onMounted(async () => startServer());
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
