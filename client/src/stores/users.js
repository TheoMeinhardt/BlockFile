import { defineStore } from 'pinia';

const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      jwt: String,
    };
  },
});

export default useUserStore;
