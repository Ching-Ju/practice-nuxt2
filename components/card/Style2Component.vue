<template>
  <div class="card">
    <div class="flex justify-content-between align-items-center mb-5">
      <h5>{{ cardTitle }}</h5>

      <div>
        <slot name="cardButton" />
      </div>
    </div>

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
