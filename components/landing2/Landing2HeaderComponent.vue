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
        :options="$store.state.product.products"
        option-label="name"
        option-value="code"
        placeholder="Select a City"
        class="round-dropdown"
      />
    </div>
  </div>
</template>

<style scoped>
.round-dropdown {
  border-radius: 20px;
}
</style>
