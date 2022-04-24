<template>
  <BlockViewer header="InputText" :code="code">
    <div class="grid p-fluid">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <InputText type="text" placeholder="Default" />
      </div>

      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <InputText type="text" placeholder="disabled='true'" :disabled="true" />
      </div>

      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <InputText type="text" placeholder="class='p-invalid'" class="p-invalid" />
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="grid p-fluid">
  <div class="col-12 mb-2 lg:col-4 lg:mb-0">
    <InputText type="text" placeholder="Default" />
  </div>

  <div class="col-12 mb-2 lg:col-4 lg:mb-0">
    <InputText type="text" placeholder="disabled='true'" :disabled="true" />
  </div>

  <div class="col-12 mb-2 lg:col-4 lg:mb-0">
    <InputText type="text" placeholder="class='p-invalid'" class="p-invalid" />
  </div>
</div>`
</script>
