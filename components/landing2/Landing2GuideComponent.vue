<template>
  <div class="grid">
    <div class="col-12 md:col-8 md:col-offset-2 pb-0">
      <Carousel
        :value="$store.state.product.products"
        :num-visible="1"
        :num-scroll="1"
        :circular="true"
        :autoplay-interval="2000"
        indicators-content-class="hidden"
      >
        <template #item="product">
          <img :src="`/images/product/${product.data.image}`" :alt="product.data.name" class="w-full">
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
::v-deep {
  .p-carousel-next {
    display:none;
  }

  .p-carousel-prev {
    display:none;
  }
}
</style>
