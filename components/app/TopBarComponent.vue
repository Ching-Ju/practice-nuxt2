<template>
  <div class="layout-topbar">
    <nuxt-link to="/" class="layout-topbar-logo">
      <!-- <img alt="Logo" :src="topbarImage()"> -->
      <span>SAKAI</span>
    </nuxt-link>

    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars" />
    </button>

    <button
      v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein',
                      leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}"
      class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </button>

    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-calendar" />
          <span>Events</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-cog" />
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user" />
          <span>Profile</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button" @click.prevent="logout">
          <i class="pi pi-sign-out" />
          <span>Logout</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>

function onMenuToggle (event) {
  this.$emit('menu-toggle', event)
}

function logout () {
  this.$auth.logout()
}
</script>
