<template>
  <BlockViewer header="Help Text [id= 'username']" :code="code">
    <div class="p-fluid">
      <div class="field">
        <label for="username">Username</label>
        <InputText id="username" type="text" />
        <small>Enter your username to reset your password.</small>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="p-fluid">
  <div class="field">
    <label for="username">Username</label>
    <InputText id="username" type="text" />
    <small>Enter your username to reset your password.</small>
  </div>
</div>`
</script>
