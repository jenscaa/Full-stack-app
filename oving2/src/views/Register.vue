<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="container">
      <div id="skjema">
        <h2>Register new user</h2>
        <div>
          <baseInput label="Username" id="username" class="baseInput" v-model="username" />
        </div>
        <div>
          <baseInput label="Password" id="password" class="baseInput" v-model="password" />
        </div>
        <button id="register" type="register" class="button" @click="registerNewUser">
          Create user
        </button>
        <button id="login" type="login" class="button" @click="navigateToLogin">
          Login
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="js">
  import BaseInput from '../components/BaseInput.vue';
  import { useField, useForm } from 'vee-validate';
  import axios from 'axios';
  import { formStore } from '@/stores/counter';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue'
  
  const store = formStore();
  const username = ref('');
  const password = ref('');

  const router = useRouter();
  
  const navigateToCalculator = () => {
    router.push('/kalkulator');
  };
  
  const navigateToLogin = () => {
    router.push('/');
  };
  
  const registerNewUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/token/register',
        { username: username.value, password: password.value },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const token = response.data;
        console.log("Token: " + token);
        if (response.status == 201) {
        alert("You are now registered");
        store.setActiveUser(username.value);
        store.setToken(token);
        router.push('/kalkulator');
        }
        else {
          alert("Invalid usernae or password")
        }
      }
      catch (error) {
        alert("Error regisering new user")
        console.error('Error registering new user:', error);
    }
    
  }
  </script>
  
  <style scoped>
  #container {
    display: grid;
    grid-template-columns: 1.1fr 1fr 1.1fr;
  }
  
  #skjema {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: white;
    border-radius: 5px;
    text-align: left;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 40px;
    padding: 30px;
  }
  
  .button {
    margin: 17px;
    min-height: 50px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  div {
    margin-top: 7px;
    margin-bottom: 7px;
  }
  </style>
  