<template>
  <BlockViewer header="HelpText" :code="code">
    <div class="field p-fluid">
      <label>Username</label>
      <InputText class="p-error" />
      <small class="p-error">Enter your username to reset your password.</small>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="field p-fluid">
  <label>Username</label>
  <InputText class="p-error" />
  <small class="p-error">Enter your username to reset your password.</small>
</div>`
</script>
