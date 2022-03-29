<template>
  <Nuxt />
</template>

<script>
export default {
  name: 'Empty',

  head () {
    return {
      link: [
        {
          id: 'theme-link',
          rel: 'stylesheet',
          href: `/themes/${this.$store.state.appState.theme}/theme.css`
        }
      ]
    }
  }
}
</script>
