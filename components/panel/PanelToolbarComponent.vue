<template>
  <BlockViewer header="Toolbar" :code="code">
    <Toolbar>
      <template #start>
        <Button label="New" icon="pi pi-plus" class="mr-2" />
      </template>

      <template #end>
        <Button icon="pi pi-print" class="p-button-danger" />
      </template>
    </Toolbar>
  </BlockViewer>
</template>

<script>
export default {
  data () {
    return {
      code: `<Toolbar>
  <template #start>
    <Button label="New" icon="pi pi-plus" class="mr-2" />
  </template>

  <template #end>
    <Button icon="pi pi-print" class="p-button-danger" />
  </template>
</Toolbar>`
    }
  }
}
</script>
