<script setup lang="js">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Calculator from './views/Calculator.vue' 
import BaseInput from './components/BaseInput.vue'
import kontaktskjema from './views/KontaktSkjema.vue'

/* Alternativt
const router = useRouter();
const navigateToContactScheme = () => {
  router.push('/kontaktskjema');
};
*/
</script>

<template>

  <!--
  <div id="ContactSchemeDiv">
  <button v-on:click="navigateToContactScheme" to="/kontaktskjema" id="ContactSchemeButton">Contact Scheme</button>
  </div>
  -->
  <div id="meny">
    <h1>Øving 3</h1>
    <div><RouterLink to="/">Calculator</RouterLink></div>
    <div><RouterLink to="/kontaktskjema">Contact Scheme</RouterLink></div>
  </div>
  <RouterView/>
</template>

<style scoped>

</style>