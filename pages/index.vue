<template>
  <div>
    {{ title }}
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const title = ref('hello')
</script>
