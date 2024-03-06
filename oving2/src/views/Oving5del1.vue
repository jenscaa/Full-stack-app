<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form>
        <Login v-if="login"></Login>
        <Register v-if="register"></Register>
    </form>
</template>

<script setup lang="js">
import BaseInput from '../components/BaseInput.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import Calculator from './Calculator.vue'
import { useField, useForm } from 'vee-validate'
import axios from 'axios'
import { formStore } from '@/stores/counter'
import { defineProps } from 'vue';

const props = defineProps({
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    }
})

const login = true;
const register = false

function onLoginButtonClicked() {
    this.register = true;
    this.login = false;
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
    max-width: 40%;
}

div {
    margin-top: 7px;
    margin-bottom: 7px;
}
</style>