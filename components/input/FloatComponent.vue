<template>
  <card-style2-component card-title="Float Label">
    <template #cardBody>
      <span class="p-float-label p-fluid">
        <InputText id="username" v-model="floatValue" type="text" />
        <label for="username">Username</label>
      </span>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const floatValue = ref(null)
</script>
