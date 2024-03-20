import { defineStore } from 'pinia'

export const formStore = defineStore('counter', {
  state: () => ({
    formData: {
      name: '',
      message: '',
      email: '',
    },

    activeUser: null,
    token: null

  }),
  actions: {
    setActiveUser(newValue) {
      this.activeUser = newValue;
    },
    setToken(newToken) {
      this.token = newToken
    },
    resetAll() {
      this.activeUser = null;
      this.token = null
    }
  },
  getters: {
    getActiveUser: (state) => state.activeUser,

    getToken: (state) => state.token
  },
  
  persist: {
    storage: sessionStorage
  }
})