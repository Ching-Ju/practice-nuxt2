<template>
  <BlockViewer header="Float Label [p-float-label]" :code="code">
    <span class="p-float-label p-fluid">
      <InputText id="username" type="text" />
      <label for="username">Username</label>
    </span>
  </BlockViewer>
</template>

<script setup>
const code = `<span class="p-float-label p-fluid">
  <InputText id="username" type="text" />
  <label for="username">Username</label>
</span>`
</script>
