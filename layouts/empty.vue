<template>
  <Nuxt />
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
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
