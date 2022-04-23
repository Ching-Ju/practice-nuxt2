<template>
  <BlockViewer header="Vertical Grid [formgrid grid]" :code="code">
    <div class="formgrid grid p-fluid">
      <div class="field col">
        <label for="name2">Name</label>
        <InputText id="name2" type="text" />
      </div>

      <div class="field col">
        <label for="email2">Email</label>
        <InputText id="email2" type="text" />
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="formgrid grid p-fluid">
  <div class="field col">
    <label for="name2">Name</label>
    <InputText id="name2" type="text" />
  </div>

  <div class="field col">
    <label for="email2">Email</label>
    <InputText id="email2" type="text" />
  </div>
</div>`
</script>
