<template>
  <BlockViewer header="ConfirmPopup" :code="code">
    <Toast />
    <ConfirmPopup />
    <Button ref="popup" icon="pi pi-check" label="Confirm" class="mr-2" @click="confirm($event)" />
  </BlockViewer>
</template>

<script setup>
function confirm (event) {
  this.$confirm.require({
    target: event.currentTarget,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.$toast.add({ severity: 'success', summary: 'Accept', detail: 'Message Content', life: 3000 })
    },
    reject: () => {
      this.$toast.add({ severity: 'error', summary: 'Reject', detail: 'Message Content', life: 3000 })
    }
  })
}

const code = `<Toast />
<ConfirmPopup />
<Button ref="popup" icon="pi pi-check" label="Confirm" class="mr-2" @click="confirm($event)" />

function confirm (event) {
  this.$confirm.require({
    target: event.currentTarget,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.$toast.add({ severity: 'success', summary: 'Accept', detail: 'Message Content', life: 3000 })
    },
    reject: () => {
      this.$toast.add({ severity: 'error', summary: 'Reject', detail: 'Message Content', life: 3000 })
    }
  })
}`
</script>
