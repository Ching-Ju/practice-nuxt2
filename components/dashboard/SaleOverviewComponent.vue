<template>
  <card-style2-component card-title="Sales Overview">
    <template #cardBody>
      <Chart type="line" :data="lineData" :options="$store.getters['appState/lineOptions']" />
    </template>
  </card-style2-component>
</template>

<script setup>
import { reactive } from '@nuxtjs/composition-api'

const lineData = reactive({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: '#2f4860',
      borderColor: '#2f4860',
      tension: 0.4
    },
    {
      label: 'Sales',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: '#00bb7e',
      borderColor: '#00bb7e',
      tension: 0.4
    }
  ]
})
</script>
