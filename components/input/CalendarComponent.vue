<template>
  <card-style2-component :card-title="`Calendar [${calendarValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <Calendar v-model="calendarValue" :show-icon="true" :show-button-bar="true" date-format="yy/mm/dd" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const calendarValue = ref(null)
</script>
