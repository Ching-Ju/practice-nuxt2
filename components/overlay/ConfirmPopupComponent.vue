<template>
  <card-style2-component card-title="ConfirmPopup">
    <template #cardBody>
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
      console.log('accept')
    },
    reject: () => {
      console.log('reject')
    }
  })
}
</script>
