<template>
  <card-style2-component :card-title="`ColorPicker [${colorValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <ColorPicker v-model="colorValue" style="width: 2rem" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const colorValue = ref('000000')
</script>
