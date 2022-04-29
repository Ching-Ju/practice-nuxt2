<template>
  <BlockViewer header="Dialog" :code="code">
    <Dialog :visible.sync="display" header="Dialog" :breakpoints="{'960px': '75vw'}" :style="{width: '30vw'}" :modal="true">
      <p class="line-height-3 m-0">
        Content
      </p>

      <template #footer>
        <Button label="Ok" icon="pi pi-check" class="p-button-outlined" @click="display = false" />
      </template>
    </Dialog>

    <Button label="Show" icon="pi pi-external-link" style="width: auto" @click="display = true" />
  </BlockViewer>
</template>

<script>
export default {
  data: () => ({
    display: false,
    code: `<Dialog :visible.sync="display" header="Dialog" :breakpoints="{'960px': '75vw'}" :style="{width: '30vw'}" :modal="true">
  <p class="line-height-3 m-0">
    Content
  </p>

  <template #footer>
    <Button label="Ok" icon="pi pi-check" class="p-button-outlined" @click="display = false" />
  </template>
</Dialog>

<Button label="Show" icon="pi pi-external-link" style="width: auto" @click="display = true" />`
  })
}
</script>
