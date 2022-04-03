<template>
  <card-style2-component :card-title="`InputNumber [${inputNumberValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <InputNumber v-model="inputNumberValue" show-buttons mode="decimal" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const inputNumberValue = ref(0)
</script>
