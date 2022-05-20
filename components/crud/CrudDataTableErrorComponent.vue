<template>
  <Message severity="error" :closable="false">
    {{ errorMsg }}
  </Message>
</template>

<script setup>
import { computed, defineProps } from '@nuxtjs/composition-api'

const props = defineProps({
  error: {
    default: null,
    type: Error
  }
})

const errorMsg = computed(() => props.error ?? 'No records found.')
</script>
