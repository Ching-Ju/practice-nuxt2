<template>
  <card-style2-component :card-title="`MultiSelect [${multiselectValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <MultiSelect v-model="multiselectValue" :options="$store.state.product.products" option-label="name" option-value="id" :filter="true" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const multiselectValue = ref(null)
</script>
