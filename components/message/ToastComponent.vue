<template>
  <card-style2-component card-title="Toast">
    <template #cardBody>
      <Toast />
      <Button label="Success" class="p-button-success mr-2" @click="showSuccess()" />
      <Button label="Info" class="p-button-info mr-2" @click="showInfo()" />
      <Button label="Warn" class="p-button-warning mr-2" @click="showWarn()" />
      <Button label="Error" class="p-button-danger mr-2" @click="showError()" />
    </template>
  </card-style2-component>
</template>

<script setup>
function showSuccess () {
  this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 })
}
function showInfo () {
  this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 })
}
function showWarn () {
  this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 })
}
function showError () {
  this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 })
}
</script>
