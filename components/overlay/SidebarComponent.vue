<template>
  <card-style2-component card-title="Sidebar">
    <template #cardBody>
      <Sidebar :visible.sync="visibleLeft" :base-z-index="1000">
        <h1 style="font-weight:normal">
          Left Sidebar
        </h1>
      </Sidebar>

      <Sidebar :visible.sync="visibleRight" :base-z-index="1000" position="right">
        <h1 style="font-weight:normal">
          Right Sidebar
        </h1>
      </Sidebar>

      <Sidebar :visible.sync="visibleTop" :base-z-index="1000" position="top">
        <h1 style="font-weight:normal">
          Top Sidebar
        </h1>
      </Sidebar>

      <Sidebar :visible.sync="visibleBottom" :base-z-index="1000" position="bottom">
        <h1 style="font-weight:normal">
          Bottom Sidebar
        </h1>
      </Sidebar>

      <Sidebar :visible.sync="visibleFull" :base-z-index="1000" position="full">
        <h1 style="font-weight:normal">
          Full Screen
        </h1>
      </Sidebar>

      <Button icon="pi pi-arrow-right" class="p-button-warning" style="margin-right:.25em" @click="visibleLeft = true" />
      <Button icon="pi pi-arrow-left" class="p-button-warning" style="margin-right:.25em" @click="visibleRight = true" />
      <Button icon="pi pi-arrow-down" class="p-button-warning" style="margin-right:.25em" @click="visibleTop = true" />
      <Button icon="pi pi-arrow-up" class="p-button-warning" style="margin-right:.25em" @click="visibleBottom = true" />
      <Button icon="pi pi-external-link" class="p-button-warning" @click="visibleFull = true" />
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const visibleLeft = ref(false)
const visibleRight = ref(false)
const visibleTop = ref(false)
const visibleBottom = ref(false)
const visibleFull = ref(false)
</script>
