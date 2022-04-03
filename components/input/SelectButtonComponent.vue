<template>
  <card-style2-component :card-title="`SelectButton [${selectButtonValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <SelectButton v-model="selectButtonValue" :options="$store.state.product.products" option-label="name" option-value="id" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const selectButtonValue = ref(null)
</script>
