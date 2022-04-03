<template>
  <card-style2-component :card-title="`Rating [${ratingValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <Rating v-model="ratingValue" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const ratingValue = ref(3)
</script>
