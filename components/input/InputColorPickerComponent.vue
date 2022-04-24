<template>
  <BlockViewer :header="`ColorPicker [${colorValue}]`" :code="code">
    <div class="p-fluid">
      <ColorPicker v-model="colorValue" style="width: 2rem" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const colorValue = ref('000000')
const code = `<div class="p-fluid">
  <ColorPicker v-model="colorValue" style="width: 2rem" />
</div>`
</script>
