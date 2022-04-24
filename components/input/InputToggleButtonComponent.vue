<template>
  <BlockViewer :header="`ToggleButton [${toggleValue}]`" :code="code">
    <div class="p-fluid">
      <ToggleButton v-model="toggleValue" on-label="Yes" off-label="No" :style="{width: '10em'}" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const toggleValue = ref(true)
const code = `<div class="p-fluid">
  <ToggleButton v-model="toggleValue" on-label="Yes" off-label="No" :style="{width: '10em'}" />
</div>`
</script>
