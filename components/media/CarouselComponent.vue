<template>
  <card-style2-component card-title="Carousel">
    <template #cardBody>
      <Carousel :value="$store.state.product.products" :num-visible="3" :num-scroll="3" :circular="true" :responsive-options="carouselResponsiveOptions">
        <template #item="product">
          <div class="product-item">
            <div class="product-item-content">
              <div class="mb-3">
                <img :src="'images/product/' + product.data.image" :alt="product.data.name" class="product-image">
              </div>
              <div>
                <h4 class="mb-1">
                  {{ product.data.name }}
                </h4>
                <h6 class="mt-0 mb-3">
                  ${{ product.data.price }}
                </h6>
                <span :class="'product-badge status-' + product.data.inventoryStatus.toLowerCase()">{{ product.data.inventoryStatus }}</span>
                <div class="car-buttons mt-5">
                  <Button type="button" class="p-button p-button-rounded mr-2" icon="pi pi-search" />
                  <Button type="button" class="p-button-success p-button-rounded mr-2" icon="pi pi-star-fill" />
                  <Button type="button" class="p-button-help p-button-rounded" icon="pi pi-cog" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </card-style2-component>
</template>

<script setup>
const carouselResponsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
]
</script>

<style lang="scss" scoped>
@import '~/assets/demo/badges.scss';
@import '~/assets/demo/items.scss';
</style>
