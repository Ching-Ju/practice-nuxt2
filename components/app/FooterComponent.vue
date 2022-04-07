<template>
  <div class="layout-footer">
    <img alt="Logo" :src="$_r($store.getters['appState/footerImage'])" height="20" class="mr-2">
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>
