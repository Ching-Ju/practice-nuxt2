<template>
  <BlockViewer :header="`MultiSelect [${multiselectValue}]`" :code="code">
    <div class="p-fluid">
      <MultiSelect v-model="multiselectValue" :options="$store.state.product.products" option-label="name" option-value="id" :filter="true" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const multiselectValue = ref(null)
const code = `<div class="p-fluid">
  <MultiSelect v-model="multiselectValue" :options="$store.state.product.products" option-label="name" option-value="id" :filter="true" />
</div>`
</script>
