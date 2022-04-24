<template>
  <BlockViewer :header="`Slider [${sliderValue}]`" :code="code">
    <div class="p-fluid">
      <InputNumber v-model="sliderValue" show-buttons mode="decimal" />

      <Slider v-model="sliderValue" class="mt-5" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const sliderValue = ref(50)
const code = ` <div class="p-fluid">
  <InputNumber v-model="sliderValue" show-buttons mode="decimal" />

  <Slider v-model="sliderValue" class="mt-5" />
</div>`
</script>
