<template>
  <card-style2-component card-title="Sales Overview">
    <template #cardBody>
      <Chart type="line" :data="lineData" :options="lineOptions" />
    </template>
  </card-style2-component>
</template>

<script setup>
import { computed, reactive, useStore } from '@nuxtjs/composition-api'

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

const lineOptions = computed(() => {
  return useStore('state.appState.darkTheme')
    ? {
        plugins: {
          legend: {
            labels: {
              color: '#ebedef'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#ebedef'
            },
            grid: {
              color: 'rgba(160, 167, 181, .3)'
            }
          },
          y: {
            ticks: {
              color: '#ebedef'
            },
            grid: {
              color: 'rgba(160, 167, 181, .3)'
            }
          }
        }
      }
    : {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      }
})
</script>
