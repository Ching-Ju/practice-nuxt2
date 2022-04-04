<template>
  <Card>
    <template #title>
      <div class="flex align-items-center justify-content-between mb-0">
        <h5>Card</h5>
        <Button icon="pi pi-plus" class="p-button-text" @click="$refs.menu.toggle($event)" />
      </div>
      <Menu id="config_menu" ref="menu" :model="cardMenu" :popup="true" />
    </template>

    <template #content>
      <p class="line-height-3 m-0">
        Content
      </p>
    </template>
  </Card>
</template>

<script setup>
const cardMenu = [
  { label: 'Save', icon: 'pi pi-fw pi-check' },
  { label: 'Update', icon: 'pi pi-fw pi-refresh' },
  { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]
</script>
