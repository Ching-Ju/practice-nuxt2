<template>
  <div class="layout-menu-container">
    <AppSubmenuComponent :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" @keydown="onKeyDown" />
    <a href="https://www.primefaces.org/primeblocks-vue" class="block mt-3">
      <img alt="primeblocks" :src="$_r($store.getters['appState/bannerImage'])" class="w-full">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    onMenuItemClick (event) {
      this.$emit('menuitem-click', event)
    },
    onKeyDown (event) {
      const nodeElement = event.target
      if (event.code === 'Enter' || event.code === 'Space') {
        nodeElement.click()
        event.preventDefault()
      }
    }
  }
}
</script>
