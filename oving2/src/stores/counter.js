import { defineStore } from 'pinia'

export const formStore = defineStore('counter', {
  state: () => ({
    return: {
      name: '',
      message: '',
      email: ''
    }
  })
})