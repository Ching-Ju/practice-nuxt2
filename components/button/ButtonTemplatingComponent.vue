<template>
  <BlockViewer header="Templating" :code="code">
    <Button type="button" class="mr-2 mb-2 px-3">
      <img alt="logo" src="/images/primevue-logo.svg" style="width: 1.5rem">
    </Button>

    <Button type="button" class="p-button-outlined p-button-success mr-2 mb-2">
      <img alt="logo" src="/images/primevue-logo.svg" style="width: 1.5rem">
      <span class="ml-2 text-bold">PrimeVue</span>
    </Button>
  </BlockViewer>
</template>

<script setup>
const code = `<Button type="button" class="mr-2 mb-2 px-3">
  <img alt="logo" src="/images/primevue-logo.svg" style="width: 1.5rem">
</Button>

<Button type="button" class="p-button-outlined p-button-success mr-2 mb-2">
  <img alt="logo" src="/images/primevue-logo.svg" style="width: 1.5rem">
  <span class="ml-2 text-bold">PrimeVue</span>
</Button>`
</script>
