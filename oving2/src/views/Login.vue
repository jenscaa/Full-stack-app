<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="container">
        <div id="skjema">
            <h2>Login</h2>
            <div><baseInput 
                label="Username" 
                id="username"
                class="baseInput"
                v-model="username"
                />
            </div>
            <div><baseInput 
                label="Password" 
                id="password"
                class="baseInput"
                v-model="password"
                />
            </div>
            <button 
            id="login" 
            type="login"
            class="button"
            @click="logIn"
            >
            Login
            </button>
            <button 
            id="register" 
            type="register"
            class="button"
            @click="navigateToRegister"
            >
            Register
            </button>
        </div>
    </div>
</template>

<script setup lang="js">
import BaseInput from '../components/BaseInput.vue'
import { useField, useForm } from 'vee-validate';
import axios from 'axios';
import { formStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const store = formStore();
const router = useRouter();
const username = ref('')
const password = ref('')
  
  const navigateToCalculator = () => {
    router.push('/kalkulator');
  };
  
  const navigateToRegister = () => {
    router.push('/register');
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const logIn = async() => {
    try {
      const response = await axios.post(
        'http://localhost:8080/token/login',
        { username: username.value, password: password.value }, config)
        console.log(response);
        if (response.status==201) {
            store.setActiveUser(username.value)
            console.log(store.activeUser);
            const token = response.data
            console.log(token);
            store.setToken(token);

            router.push('/kalkulator');
        }
      }
      catch (error) {
        alert("User does not exist or is already active")
        console.error('Error while logging in:', error);
    }
  }

  const createToken =  async() => {
    try {
      const response = await axios.post('http://localhost:8080/token/login',
        { username: username.value, password: password.value }, config)
        const token = response.data
        console.log(token);
        store.setToken(token);
    }
    catch (error) {
      console.error('Error when creating token', error)
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