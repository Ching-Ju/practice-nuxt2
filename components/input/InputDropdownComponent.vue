<template>
  <BlockViewer :header="`Dropdown [${dropdownValue}]`" :code="code">
    <div class="p-fluid">
      <Dropdown v-model="dropdownValue" :options="$store.state.product.products" option-label="name" option-value="id" placeholder="Select" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const dropdownValue = ref(null)
const code = `<div class="p-fluid">
  <Dropdown v-model="dropdownValue" :options="$store.state.product.products" option-label="name" option-value="id" placeholder="Select" />
</div>`
</script>
