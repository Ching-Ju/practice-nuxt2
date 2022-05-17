<template>
  <div>
    <nuxt-content :document="page" />

    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }}[{{ user.age }}]
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('markdown').fetch()
    const users = await $content('users').only(['name', 'age']).sortBy('age', 'asc').fetch()

    return { page, users }
  }
}
</script>
