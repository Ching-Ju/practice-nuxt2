<template>
  <span class="block mt-2 md:mt-0 p-input-icon-right">
    <i class="pi pi-search" />
    <InputText :value="value" placeholder="Press enter to search..." @keyup.enter="value = $event.target.value" />
  </span>
</template>

<script setup>
import { computed, defineEmits, defineProps } from '@nuxtjs/composition-api'

const emit = defineEmits()
const props = defineProps({
  filter: {
    default: null,
    required: true,
    type: String
  }
})

const value = computed({
  get () {
    return props.filter
  },
  set (value) {
    emit('update:filter', value)
  }
})
</script>
