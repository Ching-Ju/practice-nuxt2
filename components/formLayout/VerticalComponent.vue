<template>
  <BlockViewer header="Vertical [p-fluid]" :code="code">
    <div class="p-fluid">
      <div class="field">
        <label for="name1">Name</label>
        <InputText id="name1" type="text" />
      </div>

      <div class="field">
        <label for="email1">Email</label>
        <InputText id="email1" type="text" />
      </div>

      <div class="field">
        <label for="age1">Age</label>
        <InputText id="age1" type="text" />
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="p-fluid">
  <div class="field">
    <label for="name1">Name</label>
    <InputText id="name1" type="text" />
  </div>

  <div class="field">
    <label for="email1">Email</label>
    <InputText id="email1" type="text" />
  </div>

  <div class="field">
    <label for="age1">Age</label>
    <InputText id="age1" type="text" />
  </div>
</div>`
</script>
