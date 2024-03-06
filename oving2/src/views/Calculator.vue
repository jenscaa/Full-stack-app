<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
  <div id="container">
    <h2>{{ this.activeUser }}</h2>
    <div id="calculator">
      <div id="screen">
        <p id="content">{{ screen }}</p>
      </div>
      <div id="button_field">
        <button v-on:click="clear()" id="buttonClear">C</button>
        <button v-on:click="keyStroke('ANS')" id="buttonANS">ANS</button>
        <button v-on:click="del()" id="buttonDEL">DEL</button>
        <button v-on:click="keyStroke('+')" id="buttonPlus">+</button>
        <button v-on:click="keyStroke('1')" id="button1">1</button>
        <button v-on:click="keyStroke('2')" id="button2">2</button>
        <button v-on:click="keyStroke('3')" id="button3">3</button>
        <button v-on:click="keyStroke('-')" id="buttonMinus">-</button>
        <button v-on:click="keyStroke('4')" id="button4">4</button>
        <button v-on:click="keyStroke('5')" id="button5">5</button>
        <button v-on:click="keyStroke('6')" id="button6">6</button>
        <button v-on:click="keyStroke('*')" id="buttonMultiplicate">*</button>
        <button v-on:click="keyStroke('7')" id="button7">7</button>
        <button v-on:click="keyStroke('8')" id="button8">8</button>
        <button v-on:click="keyStroke('9')" id="button9">9</button>
        <button v-on:click="keyStroke('/')" id="buttonDivide">/</button>
        <button disabled></button>
        <button v-on:click="keyStroke('0')" id="button0">0</button>
        <button v-on:click="keyStroke('.')" id="button.">.</button>
        <button v-on:click="equals()" id="buttonEquals">=</button>
      </div>
    </div>
    <div id="logg">
      <ul id="ulist">
        <!--eslint-disable-next-line vue/require-v-for-key-->
        <li id="list" v-for="ex in listOfExpressions">{{ ex }}</li>
      </ul>
    </div>
    <button @click="logOut">Log out</button>
  </div>
</template>

<script lang="js">
import axios from 'axios'
import { formStore } from '@/stores/counter';

function replaceDivision(expression) {
    // Define a regular expression for "/n" where "n" is any number
    var regex = /\/(\d+(\.\d+)?)/g;

    // Replace all occurrences of the pattern
    var modifiedExpression = expression.replace(regex, function(match, group1) {
        var divisor = parseFloat(group1);
        return '*' + divisor + '**-1';
    });

    return modifiedExpression;
}

export default {
  data() {
    return {
      expression: '',
      screen: '',
      ans: 0,
      listOfExpressions: [],
      equalPressed: false,
      activeUser: formStore().getActiveUser
    }
  },


  methods: {
    navigateToHome() {
      // Use this.$router.push to navigate
      this.$router.push('/');
    },
    keyStroke(input) {
      if (this.equalPressed == true) {
        this.screen = ''
        this.equalPressed = false
      }
      this.screen += input
    },

    async equals() {
      try {

        const response = await axios.post('http://localhost:8080/oving5del1/calculations', 
          {username: this.activeUser, expression: replaceDivision(this.screen)}, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const response2 = await axios.post('http://localhost:8080/oving5del1/calculations/min10calculations',
          this.activeUser, {
          headers: {
            'Content-Type': 'text/plain',
          }
        }
        )
        console.log(response.data);
        if (response.status==201) {
          console.log(response.data);
        }
        const correctAnswer = response.data;
        if (correctAnswer == "Infinity" || correctAnswer == "NaN") {
          this.screen = 'Error'
        } else {
          this.expression = this.screen.replaceAll('ANS', this.ans) + '=' + correctAnswer
          this.screen = correctAnswer
          this.ans = this.screen
          this.equalPressed = true
        }
        if (response2.status == 200) {
          const calculations = response2.data;
          const temp = []
          calculations.forEach(calculation => {
            temp.push(calculation.answer)
          })
          this.listOfExpressions = temp
        }
      } catch (error) {
        this.screen = 'Error'
        console.log("Some wierd error occured: ", error);
      
      } 
    },

    async logOut() {
      try {
        const response = await axios.post('http://localhost:8080/oving5del1/logOut', this.activeUser, {
          headers: {
            'Content-Type': 'text/plain',
          }
        })  
        console.log(response);
        if (response.status==202) {
          alert("Logging off...")
          this.$router.push('/');
        } 
        } catch (error) {
          alert("An error occured when logging off")
          console.error('Error while logging off:', error);
          this.$router.push('/');
      }
    },

    del() {
      if (this.screen.length != 0) {
        if (this.screen == "Error" || this.screen == "ANS") {
          this.screen = ''
        }
        this.screen = this.screen.substring(0, this.screen.length - 1)
      }
    },

    clear() {
      this.screen = ''
    }
  }
}
</script>

<style scoped>
#container {
  display: grid;
  grid-template-rows: 0.01fr 1fr 0.8fr;
  gap: 10px;
  padding: 10px;
  align-items: center;
  place-items: center;
  text-align: center;
  justify-items: center;
}

#list {
  text-align: start;
}

#calculator {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.9);
  border-color: white;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  gap: 15px;
  min-width: 300px;
  max-width: 300px;
  min-height: 370px;
}

#button_field {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3px;
  max-width: 300px;
}

#screen {
  padding: 10px;
  background: #eef7da;
  border-radius: 5px;
  min-height: 110px;
  max-width: 300;
}

#logg {
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 200px;
  min-width: 320px;
}

button {
  grid-column: span 1;
  max-height: 60px;
  max-width: 140px;
  cursor: pointer;
}

#content {
  margin-top: 50px;
  text-align: right;
  font-size: 30px;
}

#list {
  margin: 10px;
}
</style>
