<template>
  <BlockViewer :header="`Knob [${knobValue}]`" :code="code">
    <div class="p-fluid">
      <Knob v-model="knobValue" :step="10" :min="0" :max="100" value-template="{value}%" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const knobValue = ref(50)
const code = `<div class="p-fluid">
  <Knob v-model="knobValue" :step="10" :min="0" :max="100" value-template="{value}%" />
</div>`
</script>
