<template>
  <card-style2-component card-title="Polar Area Chart">
    <template #cardBody>
      <div class="flex flex-column align-items-center">
        <Chart type="polarArea" :data="polarData" :options="$store.getters['appState/polarOptions']" style="width: 50%" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
const polarData = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset'
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
}
</script>
