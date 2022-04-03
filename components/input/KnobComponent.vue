<template>
  <card-style2-component :card-title="`Knob [${knobValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <Knob v-model="knobValue" :step="10" :min="0" :max="100" value-template="{value}%" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const knobValue = ref(50)
</script>
