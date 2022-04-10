<template>
  <card-style2-component card-title="Confirmation">
    <template #cardBody>
      <Button label="Delete" icon="pi pi-trash" class="p-button-danger" style="width: auto" @click="display = true" />

      <Dialog :visible.sync="display" header="Confirmation" :style="{width: '350px'}" :modal="true">
        <div class="flex align-items-center justify-content-center">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span>Are you sure you want to proceed?</span>
        </div>

        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="display = false" />
          <Button label="Yes" icon="pi pi-check" class="p-button-text" autofocus @click="display = false" />
        </template>
      </Dialog>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const display = ref(false)
</script>
