<template>
  <BlockViewer header="Icons" :code="code">
    <div class="mb-4">
      <Button icon="pi pi-star-fill" class="mr-2 mb-2" />
      <Button label="icon='pi pi-bookmark'" icon="pi pi-bookmark" class="mr-2 mb-2" />
      <Button label="icon-pos='right'" icon="pi pi-bookmark" icon-pos="right" class="mr-2 mb-2" />
    </div>

    <div v-for="(style, index) in ['', 'p-button-rounded', 'p-button-outlined', 'p-button-rounded p-button-text']" :key="index">
      <h5>
        {{ style === '' ? 'Default' : style }}
      </h5>
      <Button icon="pi pi-star-fill" :class="`${style} mr-2 mb-2`" />
      <Button icon="pi pi-bookmark" :class="`${style} p-button-secondary mr-2 mb-2`" />
      <Button icon="pi pi-check" :class="`${style} p-button-success mr-2 mb-2`" />
      <Button icon="pi pi-search" :class="`${style} p-button-info mr-2 mb-2`" />
      <Button icon="pi pi-user" :class="`${style} p-button-warning mr-2 mb-2`" />
      <Button icon="pi pi-sign-out" :class="`${style} p-button-danger mr-2 mb-2`" />
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="mb-4">
  <Button icon="pi pi-star-fill" class="mr-2 mb-2" />
  <Button label="icon='pi pi-bookmark'" icon="pi pi-bookmark" class="mr-2 mb-2" />
  <Button label="icon-pos='right'" icon="pi pi-bookmark" icon-pos="right" class="mr-2 mb-2" />
</div>

<div v-for="(style, index) in ['', 'p-button-rounded', 'p-button-outlined', 'p-button-rounded p-button-text']" :key="index">
  <h5>
    {{ style === '' ? 'Default' : style }}
  </h5>
  <Button icon="pi pi-star-fill" :class="\`\${style} mr-2 mb-2\`" />
  <Button icon="pi pi-bookmark" :class="\`\${style} p-button-secondary mr-2 mb-2\`" />
  <Button icon="pi pi-check" :class="\`\${style} p-button-success mr-2 mb-2\`" />
  <Button icon="pi pi-search" :class="\`\${style} p-button-info mr-2 mb-2\`" />
  <Button icon="pi pi-user" :class="\`\${style} p-button-warning mr-2 mb-2\`" />
  <Button icon="pi pi-sign-out" :class="\`\${style} p-button-danger mr-2 mb-2\`" />
</div>`
</script>
