<template>
  <card-style2-component :card-title="`Dropdown [${dropdownValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <Dropdown v-model="dropdownValue" :options="$store.state.product.products" option-label="name" option-value="id" placeholder="Select" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const dropdownValue = ref(null)
</script>
