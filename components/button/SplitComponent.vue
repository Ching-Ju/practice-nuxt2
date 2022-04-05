<template>
  <card-style2-component card-title="SplitButton">
    <template #cardBody>
      <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-secondary mr-2 mb-2" />
      <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-success mr-2 mb-2" />
      <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-info mr-2 mb-2" />
      <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning mr-2 mb-2" />
      <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-danger mr-2 mb-2" />
    </template>
  </card-style2-component>
</template>

<script setup>
const items = [{
  label: 'Update',
  icon: 'pi pi-refresh'
},
{
  label: 'Delete',
  icon: 'pi pi-times'
},
{
  separator: true
},
{
  label: 'Home',
  icon: 'pi pi-home'
}]
</script>
