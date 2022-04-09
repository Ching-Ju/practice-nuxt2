<template>
  <card-style2-component card-title="OrderList">
    <template #cardBody>
      <OrderList v-model="orderlistValue" list-style="height:250px" data-key="code" :rows="10">
        <template #header>
          Cities
        </template>

        <template #item="slotProps">
          <div>{{ slotProps.item.name }}</div>
        </template>
      </OrderList>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const orderlistValue = ref([
  { name: 'San Francisco', code: 'SF' },
  { name: 'London', code: 'LDN' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Berlin', code: 'BRL' },
  { name: 'Barcelona', code: 'BRC' },
  { name: 'Rome', code: 'RM' }
])
</script>
