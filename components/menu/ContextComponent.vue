<template>
  <card-style2-component card-title="Context Menu">
    <template #cardBody>
      <div @contextmenu="$refs.contextMenu.show($event)">
        Right click to display.
        <ContextMenu ref="contextMenu" :model="contextMenuItems" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
const contextMenuItems = [
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
