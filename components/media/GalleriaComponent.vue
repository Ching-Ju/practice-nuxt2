<template>
  <card-style2-component card-title="Galleria">
    <template #cardBody>
      <Galleria :value="$store.state.image.images" :responsive-options="galleriaResponsiveOptions" :num-visible="7" :circular="true" container-style="max-width: 800px; margin: auto">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block">
        </template>

        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;">
        </template>
      </Galleria>
    </template>
  </card-style2-component>
</template>

<script setup>
const galleriaResponsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '960px',
    numVisible: 4
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]
</script>
