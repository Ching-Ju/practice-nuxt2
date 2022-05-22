<template>
  <Dialog :visible.sync="display" header="Confirmation" :style="{width: '350px'}" :modal="true">
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span>Are you sure you want to delete?</span>
    </div>

    <template #footer>
      <Button label="No" icon="pi pi-times" class="p-button-text" @click="display = false" />
      <Button label="Yes" icon="pi pi-check" class="p-button-text" autofocus @click="display = false; $emit('delete-confirm')" />
    </template>
  </Dialog>
</template>

<script setup>
import { computed, defineEmits, defineProps } from '@nuxtjs/composition-api'

const emit = defineEmits()
const props = defineProps({
  dialogDelete: {
    default: false,
    required: true,
    type: Boolean
  }
})

const display = computed({
  get () {
    return props.dialogDelete
  },
  set (value) {
    emit('update:dialogDelete', value)
  }
})
</script>
