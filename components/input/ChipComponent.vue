<template>
  <card-style2-component :card-title="`Chips [${chipsValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <Chips v-model="chipsValue" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const chipsValue = ref([1, 2])
</script>
