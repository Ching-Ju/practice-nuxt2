<template>
  <card-style2-component card-title="DataView">
    <template #cardBody>
      <DataView
        :value="$store.state.product.products"
        :paginator="true"
        :rows="9"
        :layout="layout"
        :sort-order="sortOrder"
        :sort-field="sortField"
      >
        <template #header>
          <div class="grid grid-nogutter">
            <div class="col-6 text-left">
              <Dropdown v-model="sortKey" :options="sortOptions" option-label="label" placeholder="Sort By Price" @change="onSortChange($event)" />
              <h6>sortOrder: {{ sortOrder }}</h6>
              <h6>sortField: {{ sortField }}</h6>
            </div>
            <div class="col-6 text-right">
              <DataViewLayoutOptions v-model="layout" />
              <h6>DataViewLayoutOptions: {{ layout }}</h6>
            </div>
          </div>
        </template>

        <template #list="slotProps">
          <div class="col-12">
            <div class="flex flex-column md:flex-row align-items-center p-3 w-full">
              <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5">
              <div class="flex-1 text-center md:text-left">
                <div class="font-bold text-2xl">
                  {{ slotProps.data.name }}
                </div>

                <div class="mb-3">
                  {{ slotProps.data.description }}
                </div>

                <Rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false" class="mb-2" />

                <div class="flex align-items-center">
                  <i class="pi pi-tag mr-2" />
                  <span class="font-semibold">{{ slotProps.data.category }}</span>
                </div>
              </div>

              <div class="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                <span class="text-2xl font-semibold mb-2 align-self-center md:align-self-end">${{ slotProps.data.price }}</span>
                <Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" class="mb-2" />
                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
              </div>
            </div>
          </div>
        </template>

        <template #grid="slotProps">
          <div class="col-12 md:col-4">
            <div class="card m-3 border-1 surface-border">
              <div class="flex align-items-center justify-content-between">
                <div class="flex align-items-center">
                  <i class="pi pi-tag mr-2" />
                  <span class="font-semibold">{{ slotProps.data.category }}</span>
                </div>

                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
              </div>

              <div class="text-center">
                <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-9 shadow-2 my-3 mx-0">

                <div class="text-2xl font-bold">
                  {{ slotProps.data.name }}
                </div>

                <div class="mb-3">
                  {{ slotProps.data.description }}
                </div>

                <Rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false" />
              </div>

              <div class="flex align-items-center justify-content-between">
                <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" />
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const layout = ref('grid')
const sortKey = ref(null)
const sortField = ref('price')
const sortOrder = ref(1)
const sortOptions = ref([
  { label: 'Price High to Low', value: '!price' },
  { label: 'Price Low to High', value: 'price' }
])

function onSortChange (event) {
  const value = event.value.value
  const sortValue = event.value

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1
    sortField.value = value.substring(1, value.length)
    sortKey.value = sortValue
  } else {
    sortOrder.value = 1
    sortField.value = value
    sortKey.value = sortValue
  }
}
</script>
