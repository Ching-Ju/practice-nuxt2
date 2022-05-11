<template>
  <div class="grid">
    <div class="col-12 text-center">
      <h1 v-animate:animate__rubberBand="100" class="title-style">
        Steps
      </h1>
    </div>

    <div class="col-12">
      <div class="flex justify-content-between mx-8">
        <div v-for="(i, index) in 4" :key="index" class="flex align-items-center justify-content-center" @click="selected = index">
          <div v-animate:animate__fadeInUp="100 * i" class="text-center cursor-pointer">
            <Badge :value="i" size="xlarge" :class="{'active': selected == index, 'active-background': selected == index, 'in-active': selected != index, 'in-active-background': selected != index}" />
            <p :class="{'active': selected == index, 'in-active': selected != index}">
              Step{{ i }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <Card v-for="(i, index) in 4" v-show="selected == index" :key="index" v-animate:animate__fadeInLeft="100" class="mx-4">
        <template #title>
          Step{{ i }}
        </template>

        <template #content>
          Content
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const selected = ref(0)
</script>

<style scoped>
.active {
  color: #e1b85d;
}

.active-background {
  background-color: #ab6d06;
}

.in-active {
  color: #7a663e;
}

.in-active-background {
  background-color:#222122;
}

.p-card {
  background-color: #1a1a1a;
}

.title-style {
  background: -webkit-linear-gradient(#a86800, #efca72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
