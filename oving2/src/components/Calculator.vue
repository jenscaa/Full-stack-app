<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="container">
    <div id="calculator">
      <div id="screen">
        <p id="content">{{ screen }}</p>
      </div>
      <div id="button_field">
        <button v-on:click="clear()">C</button>
        <button v-on:click="keyStroke('ANS')">ANS</button>
        <button v-on:click="del()">DEL</button>
        <button v-on:click="keyStroke('+')">+</button>
        <button v-on:click="keyStroke('1')">1</button>
        <button v-on:click="keyStroke('2')">2</button>
        <button v-on:click="keyStroke('3')">3</button>
        <button v-on:click="keyStroke('-')">-</button>
        <button v-on:click="keyStroke('4')">4</button>
        <button v-on:click="keyStroke('5')">5</button>
        <button v-on:click="keyStroke('6')">6</button>
        <button v-on:click="keyStroke('*')">*</button>
        <button v-on:click="keyStroke('7')">7</button>
        <button v-on:click="keyStroke('8')">8</button>
        <button v-on:click="keyStroke('9')">9</button>
        <button v-on:click="keyStroke('/')">/</button>
        <button disabled></button>
        <button v-on:click="keyStroke('0')">0</button>
        <button v-on:click="keyStroke('.')">.</button>
        <button v-on:click="equals()">=</button>
      </div>
    </div>
    <div id="logg">
      <ul id="ulist">
        <!--eslint-disable-next-line vue/require-v-for-key-->
        <li id="list" v-for="ex in listOfExpressions">{{ ex }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expression: '',
      screen: '',
      ans: 0,
      listOfExpressions: [],
      equalPressed: false
    }
  },

  methods: {
    keyStroke(input) {
      if (this.equalPressed == true) {
        this.screen = ''
        this.equalPressed = false
      }
      this.screen += input
    },

    equals() {
      try {
        const correctAnswer = eval(this.screen.replace('ANS', this.ans))
        this.expression = this.screen.replace('ANS', this.ans) + '=' + correctAnswer
        this.screen = correctAnswer
        this.ans = this.screen
        this.listOfExpressions.push(this.expression)
        this.equalPressed = true
      } catch (error) {
        this.screen = 'Error'
      }
    },

    del() {
      if (this.screen.length != 0) {
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
  grid-template-rows: 1fr 0.5fr;
  gap: 10px;
  padding: 30px;
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
}

#content {
  margin-top: 50px;
  text-align: right;
  font-size: 30px;
}
</style>
