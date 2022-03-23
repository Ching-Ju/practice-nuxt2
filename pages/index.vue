<template>
  <div>
    <div v-for="office in offices" :key="office.id">
      {{ office.name }}
    </div>

    <button @click="fetch">
      click
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      offices: []
    }
  },

  methods: {
    async fetch () {
      const response = await this.$axios.$post('/api/test')
      this.offices = response
    }
  }
}
</script>
