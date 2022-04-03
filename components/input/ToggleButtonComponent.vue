<template>
  <card-style2-component :card-title="`ToggleButton [${toggleValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <ToggleButton v-model="toggleValue" on-label="Yes" off-label="No" :style="{width: '10em'}" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const toggleValue = ref(true)
</script>
