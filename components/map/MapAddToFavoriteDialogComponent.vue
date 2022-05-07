<template>
  <Dialog
    :visible.sync="addToFavoriteDialog"
    header="Add to favorites"
    :style="{ width: '350px' }"
    :modal="true"
    :dismissable-mask="true"
  >
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span>{{ detail }}</span>
    </div>

    <template #footer>
      <Button label="No" icon="pi pi-times" class="p-button-text" @click="addToFavoriteDialog = false" />
      <Button label="Yes" icon="pi pi-check" class="p-button-text" autofocus @click="addToFavoriteDialog = false" />
    </template>
  </Dialog>
</template>

<script setup>
import { ref, defineExpose } from '@nuxtjs/composition-api'

const addToFavoriteDialog = ref(false)
const detail = ref(null)

function showAddToFavorite (marker) {
  addToFavoriteDialog.value = true
  detail.value = marker.name
}

defineExpose({
  showAddToFavorite
})
</script>
