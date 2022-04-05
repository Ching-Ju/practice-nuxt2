<template>
  <component :is="errorPage" />
</template>

<script>
import error404 from '~/components/error/404.vue'

export default {
  layout: 'empty',

  computed: {
    errorPage () {
      return error404
    }
  }
}
</script>
