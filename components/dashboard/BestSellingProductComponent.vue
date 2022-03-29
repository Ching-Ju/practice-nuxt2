<template>
  <card-style2-component
    card-title="Best Selling Products"
  >
    <template #cardButton>
      <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu.toggle($event)" />
      <Menu ref="menu" :popup="true" :model="items" />
    </template>

    <template #cardBody>
      <ul class="list-none p-0 m-0">
        <li
          v-for="(product, index) in products"
          :key="index"
          class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
        >
          <div>
            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">{{ product.title }}</span>
            <div class="mt-1 text-600">
              {{ product.subtitle }}
            </div>
          </div>

          <div class="mt-2 md:mt-0 flex align-items-center">
            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
              <div :class="`bg-${product.color}-500 h-full`" :style="`width:${product.rate}%`" />
            </div>
            <span :class="`text-${product.color}-500 ml-3 font-medium`">%{{ product.rate }}</span>
          </div>
        </li>
      </ul>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const items = ref([
  { label: 'Add New', icon: 'pi pi-fw pi-plus' },
  { label: 'Remove', icon: 'pi pi-fw pi-minus' }
])

const products = ref([
  {
    title: 'Space T-Shirt',
    subtitle: 'Clothing',
    color: 'orange',
    rate: 50
  },
  {
    title: 'Portal Sticker',
    subtitle: 'Accessories',
    color: 'cyan',
    rate: 16
  }
])
</script>
