<template>
  <BlockViewer header="Tooltip [v-tooltip]" :code="code">
    <div class="formgroup-inline">
      <div class="field">
        <InputText v-tooltip="'Your username'" type="text" placeholder="Username" />
      </div>

      <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="formgroup-inline">
  <div class="field">
    <InputText v-tooltip="'Your username'" type="text" placeholder="Username" />
  </div>

  <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
</div>`
</script>
