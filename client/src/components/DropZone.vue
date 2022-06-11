<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone"
  >
    <i class="fa-solid fa-cloud-arrow-up text-6xl"></i>
    <span class="font-coolvetica text-3xl">Drag & Drop File</span>
    <span class="font-coolvetica text-3xl">OR</span>
    <label class="font-coolvetica" for="dropzoneFile">Select File</label>
    <input type="file" id="dropzoneFile" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(false);

const toggleActive = () => {
  active.value = !active.value;
};
</script>

<style scoped lang="scss">
.dropzone {
  width: 384px;
  height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #000;
  border-radius: 6px;
  background-color: #e5e7eb;
  transition: 0.3s ease all;

  label {
    padding: 8px 12px;
    color: #fff;
    background-color: #3b82f6;
    transition: 0.3s ease all;
    border-radius: 6px;
  }

  label:hover {
    background-color: #60a5fa;
  }

  input {
    display: none;
  }
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #3b82f6;

  label {
    background-color: #fff;
    color: #000;
  }
}
</style>
