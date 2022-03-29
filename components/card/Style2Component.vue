<template>
  <div class="card">
    <div class="flex justify-content-between align-items-center mb-2">
      <h5>{{ cardTitle }}</h5>

      <div>
        <slot name="cardButton" />
      </div>
    </div>

    <slot name="cardBody" />
  </div>
</template>

<script setup>
import { defineProps } from '@nuxtjs/composition-api'

defineProps({
  cardTitle: {
    type: String,
    default: ''
  }
})
</script>
