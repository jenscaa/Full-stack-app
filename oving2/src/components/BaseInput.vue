<template>
  <div id="container">
    <div>
      <label v-if="label">{{ label }}</label>
    </div>

    <div >
      <input v-if="label!='Melding'"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
      class="field"/>

      <textarea v-else
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
      class="field"/>
    </div>

    <div>
      <p
      aria-live="assertive"
      class="errorMessage"
      v-if="error">
      {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import SetupFormComponent from '@/features/SetupFormComponent'
import UniqueID from '@/features/UniqueID'

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
      type: [String, Number],
      default: ''
    }
  },
  setup (props, context) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid = UniqueID().getID()

    return {
      updateValue,
      uuid
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