<template>
  <BlockViewer header="Fieldset" :code="code">
    <Fieldset legend="Legend" :toggleable="true">
      <p class="line-height-3 m-0">
        Content
      </p>
    </Fieldset>
  </BlockViewer>
</template>

<script setup>
const code = `<Fieldset legend="Legend" :toggleable="true">
  <p class="line-height-3 m-0">
    Content
  </p>
</Fieldset>`
</script>
