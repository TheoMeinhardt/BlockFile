<template>
  <form @submit.prevent class="py-10 px-80 bg-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center min-h-screen max-w-6xl font-poppins">
    <h1 class="text-2xl font-bold">Set up your account</h1>
    <p class="mt-2 text-gray-500">For the purpose of industry regulation, your details are required</p>

    <input v-model="firstname" required type="text" placeholder="First Name" class="mt-2 hover:drop-shadow-md placeholder:text-gray-400 border-2 h-10 border-gray-300 rounded-md px-2" />
    <p v-if="valErrs.fnerr !== ''">{{ valErrs.fnerr }}</p>
    <input v-model="lastname" required type="text" placeholder="Last Name" class="mt-2 hover:drop-shadow-md placeholder:text-gray-400 border-2 h-10 border-gray-300 rounded-md px-2" />
    <p v-if="valErrs.lnerr !== ''">{{ valErrs.lnerr }}</p>
    <input v-model="email" required type="email" placeholder="Email Address" class="mt-2 hover:drop-shadow-md placeholder:text-gray-400 border-2 h-10 border-gray-300 rounded-md px-2" />
    <p v-if="valErrs.emerr !== ''">{{ valErrs.emerr }}</p>
    <input v-model="password" required type="password" placeholder="Password" class="mt-2 hover:drop-shadow-md placeholder:text-gray-400 border-2 h-10 border-gray-300 rounded-md px-2" />
    <p v-if="valErrs.pwerr !== ''">{{ valErrs.pwerr }}</p>
    <input v-model="confirmPassword" required type="password" placeholder="Confirm Password" class="mt-2 hover:drop-shadow-md placeholder:text-gray-400 border-2 h-10 border-gray-300 rounded-md px-2" />
    <p v-if="valErrs.cpwerr !== ''">{{ valErrs.cpwerr }}</p>
    <p class="mt-2 text-gray-400"><input v-model="terms" type="checkbox" class="mr-2" value="true" /> I agree to the Terms and Conditions</p>
    <p v-if="valErrs.tcerr !== ''">{{ valErrs.tcerr }}</p>

    <button @click="submitRegistration()" class="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-md text-center mt-4 text-white">Continue</button>
    <p v-if="valErrs.submiterr">{{ valErrs.submiterr }}</p>
    <div class="border-b-2 mt-4 border-gray-500"></div>

    <p class="mt-4">
      Already have an account?
      <a
        ><router-link to="/login" class="text-blue-600 hover:text-blue-500">Sign in <i class="fa-solid fa-arrow-right-long"></i></router-link
      ></a>
    </p>
  </form>
</template>

<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const terms = ref();
const valErrs = ref({ fnerr: '', lnerr: '', emerr: '', pwerr: '', cpwerr: '', tcerr: '', submiterr: '' });

watch(email, (val) => {
  const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (!val.match(re)) valErrs.value.emerr = 'Invalid Email!';
  else valErrs.value.emerr = '';
});

watch(confirmPassword, (val) => {
  if (val !== password.value && password.value !== '') valErrs.value.cpwerr = 'Passwords do not match!';
  else valErrs.value.cpwerr = '';
});

watch(terms, (val) => {
  if (val === true) valErrs.value.tcerr = '';
  else valErrs.value.tcerr = 'You must agree to the Terms and Conditions!';
});

async function submitRegistration() {
  let valid = false;

  if (valErrs.value.fnerr === '' && valErrs.value.lnerr === '' && valErrs.value.emerr === '' && valErrs.value.pwerr === '' && valErrs.value.cpwerr === '' && valErrs.value.tcerr === '' && valErrs.value.submiterr === '') valid = true;

  if (valid) {
    const res = await axios.post('http://localhost:3000/user', {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    });

    if (res.status === 200) {
      router.push('/login');
    } else {
      valErrs.value.submiterr = res.data;
    }
  }
}
</script>
