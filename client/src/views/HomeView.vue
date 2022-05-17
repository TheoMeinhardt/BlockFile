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
      <div class="flex flex-col justify-center">
        <div
          @change="captureFile()"
          class="bg-gray-200 border-black flex flex-col text-center border w-80 border-dashed rounded-md h-32 content-center mb-32 justify-center"
        >
          <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
          <h1 class="font-coolvetica text-4xl">drag & drop here</h1>
        </div>
      </div>
    </section>

    <div class="waveTwo w-full h-[55rem] py-32 font-bold text-white">
      <section id="uploaded">
        <span class="text-3xl font-poppins ml-32">Your uploaded Files</span>
        <UploadedFiles class="mx-32" />
      </section>
    </div>

    <section id="aboutUs">
      <div class="waveThree w-full h-[55rem] py-20 font-bold text-white">
        <span class="text-3xl font-poppins ml-32">About us</span>
        <AboutUs class="m-10" />
      </div>
    </section>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import AboutUs from '../components/AboutUs.vue';
import UploadedFiles from '../components/UploadedFiles.vue';
import useUserStore from '../stores/users.js';

import { onMounted } from 'vue';
import Web3 from 'web3';
import SimpleStorage from '../../../server/src/ipfs/src/abis/SimpleStorage.json';
import ipfsClient from 'ipfs-http-client';

const userStore = useUserStore();

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const startServer = async () => {
  await loadBlockchainData();
  await loadWeb3();

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
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = SimpleStorage.networks[networkId];
    if (networkData) {
      const contract = web3.eth.Contract(SimpleStorage.abi, networkData.address);
      this.setState({ contract });
      const ipfsHash = await this.state.contract.methods.get().call();
      this.setState({ ipfsHash });
    } else {
      window.alert('Smart contract not deployed to detected network.');
    }
  }

  constructor();
  {
    this.state = {
      ipfsHash: '',
      contract: null,
      web3: null,
      buffer: null,
      account: null,
      ipfsHashes: [],
    };
  }

  const captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer.from(reader.result) });
      console.log('buffer', this.state.buffer);
    };
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting file to ipfs...');
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result);
      if (error) {
        console.error(error);
        return;
      }
      // this.state.hashes.push(result[0].hash);

      console.log(this.state.hashes);
      this.state.contract.methods
        .set(result[0].hash)
        .send({ from: this.state.account })
        .then(() => {
          return this.setState({ ipfsHash: result[0].hash });
        });
    });
  };
};
onMounted(async () => startServer());
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
