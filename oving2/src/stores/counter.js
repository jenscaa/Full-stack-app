import { defineStore } from 'pinia'

export const formStore = defineStore('counter', {
  state: () => ({
    formData: {
      name: '',
      message: '',
      email: '',
    },

    activeUser: ''
  }),
  actions: {
    setActiveUser(newValue) {
      this.activeUser = newValue;
    }
  },
  getters: {
    getActiveUser: (state) => state.activeUser
  }
})