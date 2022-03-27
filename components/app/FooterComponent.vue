<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage()" height="20" class="mr-2">
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>

<script>
export default {
  methods: {
    footerImage () {
      return this.$store.state.appState.darkTheme ? '/images/logo-white.svg' : '/images/logo-dark.svg'
    }
  }
}
</script>
