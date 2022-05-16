<template>
  <div
    class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static"
  >
    <nuxt-link to="/" class="flex align-items-center">
      <img
        :src="$_r(`layout/images/logo-${$store.getters['appState/logoColor']}.svg`)"
        alt="Sakai Logo"
        height="50"
        class="mr-0 lg:mr-2"
      >
      <span class="text-900 font-medium text-2xl line-height-3 mr-8">SAKAI</span>
    </nuxt-link>

    <div>
      <Dropdown
        v-model="locale"
        :options="$i18n.localeCodes"
        placeholder="Select a City"
        class="round-dropdown"
      >
        <template #value>
          <ImagePreview :src="$_r(`/images/country/${locale}.png`)" :alt="locale" />
        </template>

        <template #option="slotProps">
          <ImagePreview :src="$_r(`/images/country/${slotProps.option}.png`)" :alt="slotProps.option" />
          {{ slotProps.option }}
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locale: this.$i18n.defaultLocale
    }
  },

  watch: {
    locale () {
      this.$i18n.setLocale(this.locale)
    }
  }
}
</script>

<style scoped>
.round-dropdown {
  border-radius: 20px;
}
</style>
