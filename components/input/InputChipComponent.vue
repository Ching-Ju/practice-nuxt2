<template>
  <BlockViewer :header="`Chips [${chipsValue}]`" :code="code">
    <div class="p-fluid">
      <Chips v-model="chipsValue" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const chipsValue = ref([1, 2])
const code = `<div class="p-fluid">
  <Chips v-model="chipsValue" />
</div>`
</script>
