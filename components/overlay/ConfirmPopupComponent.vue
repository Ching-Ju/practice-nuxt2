<template>
  <card-style2-component card-title="ConfirmPopup">
    <template #cardBody>
      <Toast />
      <ConfirmPopup />
      <Button ref="popup" icon="pi pi-check" label="Confirm" class="mr-2" @click="confirm($event)" />
    </template>
  </card-style2-component>
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
</script>
