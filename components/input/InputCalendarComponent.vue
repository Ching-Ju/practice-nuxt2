<template>
  <BlockViewer :header="`Calendar[${calendarValue}]`" :code="code">
    <div class="p-fluid">
      <Calendar v-model="calendarValue" :show-icon="true" :show-button-bar="true" date-format="yy/mm/dd" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const calendarValue = ref(null)
const code = `<div class="p-fluid">
  <Calendar v-model="calendarValue" :show-icon="true" :show-button-bar="true" date-format="yy/mm/dd" />
</div>`
</script>
