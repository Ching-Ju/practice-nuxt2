<template>
  <BlockViewer header="Textarea" :code="code">
    <div class="p-fluid">
      <Textarea placeholder="Your Message" :auto-resize="true" rows="3" cols="30" />
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="p-fluid">
  <Textarea placeholder="Your Message" :auto-resize="true" rows="3" cols="30" />
</div>`
</script>
