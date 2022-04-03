<template>
  <card-style2-component :card-title="`Slider [${sliderValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <InputNumber v-model="sliderValue" show-buttons mode="decimal" />

        <Slider v-model="sliderValue" class="mt-5" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const sliderValue = ref(50)
</script>
