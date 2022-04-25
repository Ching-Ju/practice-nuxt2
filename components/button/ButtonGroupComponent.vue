<template>
  <BlockViewer header="Button Group [p-buttonset]" :code="code">
    <span class="p-buttonset">
      <Button label="Save" icon="pi pi-check" />
      <Button label="Delete" icon="pi pi-trash" />
      <Button label="Cancel" icon="pi pi-times" />
    </span>
  </BlockViewer>
</template>

<script setup>
const code = `<span class="p-buttonset">
  <Button label="Save" icon="pi pi-check" />
  <Button label="Delete" icon="pi pi-trash" />
  <Button label="Cancel" icon="pi pi-times" />
</span>`
</script>
