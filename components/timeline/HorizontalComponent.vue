<template>
  <card-style2-component card-title="Horizontal - Alternate Align">
    <template #cardBody>
      <Timeline :value="horizontalEvents" layout="horizontal" align="alternate">
        <template #content="slotProps">
          {{ slotProps.item }}
        </template>

        <template #opposite>
          &nbsp;
        </template>
      </Timeline>
    </template>
  </card-style2-component>
</template>

<script setup>
const horizontalEvents = [
  '2020', '2021', '2022', '2023'
]
</script>
