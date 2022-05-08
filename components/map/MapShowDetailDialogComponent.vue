<template>
  <Dialog
    :visible.sync="showDetailDialog"
    header="Detail"
    :style="{ width: `${(windowWidth * 7) / 8}px`, 'max-width': '700px' }"
    :modal="true"
    :dismissable-mask="true"
  >
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span>{{ detail }}</span>
    </div>

    <template #footer>
      <Button
        label="Close"
        icon="pi pi-times"
        class="p-button-text"
        autofocus
        @click="showDetailDialog = false"
      />
    </template>
  </Dialog>
</template>

<script setup>
import { ref, defineExpose } from '@nuxtjs/composition-api'
import useWindow from '@/composables/useWindow'

const showDetailDialog = ref(false)
const detail = ref(null)
const { windowWidth } = useWindow()

function showDetail (marker) {
  showDetailDialog.value = true
  detail.value = marker.name
}

defineExpose({
  showDetail
})
</script>
