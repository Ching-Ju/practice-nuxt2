<template>
  <div class="card">
    <h5>{{ cardTitle }}</h5>

    <slot name="cardBody" />
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
