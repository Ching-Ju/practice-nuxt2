<template>
  <Dialog
    :visible.sync="showDetailDialog"
    header="Detail"
    :style="{ width: '350px' }"
    :modal="true"
    :dismissable-mask="true"
  >
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span>Are you sure you want to proceed?</span>
    </div>

    <template #footer>
      <Button label="Close" icon="pi pi-times" class="p-button-text" autofocus @click="showDetailDialog = false" />
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const showDetailDialog = ref(false)
</script>
