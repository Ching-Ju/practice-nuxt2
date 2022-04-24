<template>
  <BlockViewer :header="`Input Switch [${switchValue}]`" :code="code">
    <InputSwitch v-model="switchValue" />
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const switchValue = ref(true)
const code = '<InputSwitch v-model="switchValue" />'
</script>
