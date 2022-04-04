<template>
  <card-style2-component card-title="Steps">
    <template #cardBody>
      <Steps :model="nestedRouteItems" :readonly="false" />
    </template>
  </card-style2-component>
</template>

<script setup>
const nestedRouteItems = [
  {
    label: 'Dashboard',
    to: '/'
  },
  {
    label: 'Menu',
    to: '/menu'
  }
]
</script>
