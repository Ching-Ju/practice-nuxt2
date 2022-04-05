<template>
  <card-style2-component card-title="Loading [Not working]">
    <template #cardBody>
      <Button
        type="button"
        class="mr-2 mb-2"
        label="Search"
        icon="pi pi-search"
        :loading="loading[0]"
        @click="load(0)"
      />
      <Button
        type="button"
        class="mr-2 mb-2"
        label="Search"
        icon="pi pi-search"
        icon-pos="right"
        :loading="loading[1]"
        @click="load(1)"
      />
      <Button type="button" class="mr-2 mb-2" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
      <Button type="button" class="mr-2 mb-2" label="Search" :loading="loading[3]" @click="load(3)" />
    </template>
  </card-style2-component>
</template>

<script>
export default {
  data () {
    return {
      loading: [false, false, false, false]
    }
  },
  methods: {
    load (index) {
      this.loading[index] = true
      setTimeout(() => { this.loading[index] = false }, 1000)
    }
  }
}
</script>
