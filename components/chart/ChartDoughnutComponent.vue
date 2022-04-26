<template>
  <BlockViewer header="Doughnut Chart [type='doughnut']" :code="code">
    <div class="flex flex-column align-items-center">
      <Chart type="doughnut" :data="pieData" :options="$store.getters['appState/pieOptions']" style="width: 50%" />
    </div>
  </BlockViewer>
</template>

<script setup>
const pieData = {
  labels: ['A', 'B', 'C'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }
  ]
}

const code = `<div class="flex flex-column align-items-center">
  <Chart type="doughnut" :data="pieData" :options="$store.getters['appState/pieOptions']" style="width: 50%" />
</div>`
</script>
