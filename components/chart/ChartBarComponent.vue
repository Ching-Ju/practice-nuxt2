<template>
  <BlockViewer header="Bar Chart [type='bar']" :code="code">
    <Chart type="bar" :data="barData" :options="$store.getters['appState/barOptions']" />
  </BlockViewer>
</template>

<script setup>
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#2f4860',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: '#00bb7e',
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
}

const code = '<Chart type="bar" :data="barData" :options="$store.getters[\'appState/barOptions\']" />'
</script>
