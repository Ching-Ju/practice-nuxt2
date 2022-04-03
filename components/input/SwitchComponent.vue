<template>
  <card-style2-component :card-title="`Input Switch [${switchValue}]`">
    <template #cardBody>
      <InputSwitch v-model="switchValue" />
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const switchValue = ref(true)
</script>
