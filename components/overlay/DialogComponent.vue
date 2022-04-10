<template>
  <card-style2-component card-title="Dialog">
    <template #cardBody>
      <Dialog :visible.sync="display" header="Dialog" :breakpoints="{'960px': '75vw'}" :style="{width: '30vw'}" :modal="true">
        <p class="line-height-3 m-0">
          Content
        </p>

        <template #footer>
          <Button label="Ok" icon="pi pi-check" class="p-button-outlined" @click="display = false" />
        </template>
      </Dialog>

      <Button label="Show" icon="pi pi-external-link" style="width: auto" @click="display = true" />
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const display = ref(false)
</script>
