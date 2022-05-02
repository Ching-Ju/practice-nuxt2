<template>
  <BlockViewer header="Panel" :code="code">
    <Panel header="Header" :toggleable="true">
      <p class="line-height-3 m-0">
        Content
      </p>
    </Panel>
  </BlockViewer>
</template>

<script setup>
const code = `<Panel header="Header" :toggleable="true">
  <p class="line-height-3 m-0">
    Content
  </p>
</Panel>`
</script>
