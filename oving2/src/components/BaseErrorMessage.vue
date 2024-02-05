<template>
  <div>
    <p
    aria-live="assertive"
    class="errorMessage"
    :id="id"
    >
  </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
