<template>
  <BlockViewer header="Inline" :code="code">
    <div class="field grid">
      <label class="col-fixed w-9rem">Username</label>
      <div class="col">
        <InputText class="p-invalid mr-2" />
        <InlineMessage>Username is required</InlineMessage>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="field grid">
  <label class="col-fixed w-9rem">Username</label>
  <div class="col">
    <InputText class="p-invalid mr-2" />
    <InlineMessage>Username is required</InlineMessage>
  </div>
</div>`
</script>
