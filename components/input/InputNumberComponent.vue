<template>
  <BlockViewer :header="`InputNumber [${inputNumberValue}]`" :code="code">
    <div class="p-fluid">
      <InputNumber v-model="inputNumberValue" show-buttons mode="decimal" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const inputNumberValue = ref(0)
const code = `<div class="p-fluid">
  <InputNumber v-model="inputNumberValue" show-buttons mode="decimal" />
</div>`
</script>
