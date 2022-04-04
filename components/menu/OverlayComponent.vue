<template>
  <card-style2-component card-title="Overlay Menu">
    <template #cardBody>
      <Menu ref="menu" :model="overlayMenuItems" :popup="true" />
      <Button type="button" label="Options" icon="pi pi-angle-down" style="width: auto" @click="$refs.menu.toggle($event)" />
    </template>
  </card-style2-component>
</template>

<script setup>
const overlayMenuItems = [
  {
    label: 'Save',
    icon: 'pi pi-save'
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash'
  }
]
</script>
