<template>
  <div class="grid" style="background-color:#222122">
    <div
      v-for="(option, index) in options"
      :key="index"
      :class="{ 'col-6': true, 'text-center': true, 'p-3': true, 'cursor-pointer': true, 'active': index == selected, 'in-active': index != selected }"
      @click="selected = index"
    >
      <span class="text-xl font-semibold">{{ option.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const selected = ref(0)

const options = [
  { name: 'Option1' },
  { name: 'Option2' },
  { name: 'Option3' },
  { name: 'Option4' }
]
</script>

<style scoped>
.active {
  color: #e1b85d;
  background-color: #ab6d06;
}

.in-active {
  color: #7a663e
}
</style>
