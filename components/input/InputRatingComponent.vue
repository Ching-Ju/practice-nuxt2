<template>
  <BlockViewer :header="`Rating [${ratingValue}]`" :code="code">
    <div class="p-fluid">
      <Rating v-model="ratingValue" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const ratingValue = ref(3)
const code = `<div class="p-fluid">
  <Rating v-model="ratingValue" />
</div>`
</script>
