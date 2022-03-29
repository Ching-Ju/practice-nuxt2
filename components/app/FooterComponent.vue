<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage" height="20" class="mr-2">
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>

<script setup>
import { computed, useStore } from '@nuxtjs/composition-api'

const footerImage = computed(() => {
  return useStore('state.appState.darkTheme') ? '/images/logo-white.svg' : '/images/logo-dark.svg'
})
</script>
