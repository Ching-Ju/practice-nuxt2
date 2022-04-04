<template>
  <card-style2-component card-title="TabMenu">
    <template #cardBody>
      <TabMenu :model="nestedRouteItems" />
    </template>
  </card-style2-component>
</template>

<script setup>
const nestedRouteItems = [
  {
    label: 'Dashboard'
  },
  {
    label: 'Menu'
  }
]
</script>
