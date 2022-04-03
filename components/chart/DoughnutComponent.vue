<template>
  <card-style2-component card-title="Doughnut Chart">
    <template #cardBody>
      <div class="flex flex-column align-items-center">
        <Chart type="doughnut" :data="pieData" :options="$store.getters['appState/pieOptions']" style="width: 50%" />
      </div>
    </template>
  </card-style2-component>
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
</script>
