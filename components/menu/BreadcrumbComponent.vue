<template>
  <card-style2-component card-title="Breadcrumb">
    <template #cardBody>
      <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
    </template>
  </card-style2-component>
</template>

<script setup>
const breadcrumbHome = { icon: 'pi pi-home', to: '/' }

const breadcrumbItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Menu' }
]
</script>
