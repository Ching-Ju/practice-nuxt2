<template>
  <CardStyle2Component card-title="Pricing">
    <template #cardBody>
      <div class="grid">
        <component
          :is="component"
          v-for="(component, index) in components"
          :key="index"
          class="col-12 lg:col-6 xl:col-3 md:col-3"
        />
      </div>
    </template>
  </CardStyle2Component>
</template>

<script setup>
const components = [
  'DashboardOrderComponent',
  'DashboardRevenueComponent',
  'DashboardCustomerComponent',
  'DashboardCustomerComponent'
]
</script>
