<template>
  <card-style2-component card-title="Custom Timeline">
    <template #cardBody>
      <Timeline :value="customEvents" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
          <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2" :style="{backgroundColor: slotProps.item.color}">
            <i :class="slotProps.item.icon" />
          </span>
        </template>

        <template #content="slotProps">
          <Card>
            <template #title>
              {{ slotProps.item.status }}
            </template>

            <template #subtitle>
              {{ slotProps.item.date }}
            </template>

            <template #content>
              <img v-if="slotProps.item.image" :src="'images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2 mb-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
              <Button label="Read more" class="p-button-text" />
            </template>
          </Card>
        </template>
      </Timeline>
    </template>
  </card-style2-component>
</template>

<script setup>
const customEvents = [
  {
    status: 'Ordered',
    date: '15/10/2020 10:30',
    icon: 'pi pi-shopping-cart',
    color: '#9C27B0',
    image: 'game-controller.jpg'
  },
  {
    status: 'Processing',
    date: '15/10/2020 14:00',
    icon: 'pi pi-cog',
    color: '#673AB7'
  },
  {
    status: 'Shipped',
    date: '15/10/2020 16:15',
    icon: 'pi pi-envelope',
    color: '#FF9800'
  },
  {
    status: 'Delivered',
    date: '16/10/2020 10:00',
    icon: 'pi pi-check',
    color: '#607D8B'
  }
]
</script>
