<template>
  <BlockViewer :header="`SelectButton - Multiple [${selectButtonValue}]`" :code="code">
    <div class="p-fluid">
      <SelectButton v-model="selectButtonValue" :options="$store.state.product.products" option-label="name" option-value="id" :multiple="true" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const selectButtonValue = ref(null)
const code = `<div class="p-fluid">
  <SelectButton v-model="selectButtonValue" :options="$store.state.product.products" option-label="name" option-value="id" :multiple="true" />
</div>`
</script>
