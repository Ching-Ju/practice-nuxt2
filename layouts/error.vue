<template>
  <component :is="errorPage" :error="error" />
</template>

<script>
export default {
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    errorPage () {
      if (this.error.statusCode === 404) {
        return 'Error404'
      }

      return 'Error500'
    }
  }
}
</script>
