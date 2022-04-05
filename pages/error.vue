<template>
  <component :is="errorPage" />
</template>

<script>
import error500 from '~/components/error/500.vue'

export default {
  layout: 'empty',

  computed: {
    errorPage () {
      return error500
    }
  }
}
</script>
