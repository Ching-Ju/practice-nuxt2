<template>
  <BlockViewer :header="`Listbox [${listboxValue}]`" :code="code">
    <div class="p-fluid">
      <Listbox v-model="listboxValue" :options="$store.state.product.products" option-label="name" option-value="id" :filter="true" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const listboxValue = ref(null)
const code = `<div class="p-fluid">
  <Listbox v-model="listboxValue" :options="$store.state.product.products" option-label="name" option-value="id" :filter="true" />
</div>`
</script>
