<template>
  <card-style2-component :card-title="`Listbox [${listboxValue}]`">
    <template #cardBody>
      <div class="p-fluid">
        <Listbox v-model="listboxValue" :options="$store.state.product.products" option-label="name" option-value="id" :filter="true" />
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const listboxValue = ref(null)
</script>
