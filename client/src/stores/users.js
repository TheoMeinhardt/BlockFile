import { defineStore } from 'pinia';

const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      jwt: String,
      user: {
        uid: Number,
        firstname: String,
        lastname: String,
        email: String,
      },
    };
  },

  persist: {
    enabled: true,
  },
});

export default useUserStore;
