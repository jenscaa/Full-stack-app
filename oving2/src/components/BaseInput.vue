<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      v-model="inputValue"
      v-bind="$attrs"
      :placeholder="label"
      class="field"
    />
    <p aria-live="assertive" class="errorMessage" v-if="error">{{ error }}</p>
  </div>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: ''
    }
  }

}
</script>

<style scoped>
label {
  margin-top: 15px;
  margin-bottom: 5px;
}

input {
  width: 90%;
  min-height: 50px;
  border-radius: 7px;
  margin-top: 5px;
  margin-bottom: 5px;
}

textarea {
  width: 90%;
  min-height: 100px;
  border-radius: 7px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#container {
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  padding: 10px;
  margin-top: 3px;
  margin-bottom: 3px;
}

p {
  color: rgb(248, 0, 0);
}

</style>