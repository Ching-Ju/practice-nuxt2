<template>
  <card-style2-component card-title="PickList">
    <template #cardBody>
      <PickList v-model="picklistValue" list-style="height:250px" data-key="code">
        <template #sourceheader>
          From
        </template>

        <template #targetheader>
          To
        </template>

        <template #item="slotProps">
          <div>{{ slotProps.item.name }}</div>
        </template>
      </PickList>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const picklistValue = ref([
  [
    { name: 'San Francisco', code: 'SF' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Berlin', code: 'BRL' },
    { name: 'Barcelona', code: 'BRC' }
  ],
  [
    { name: 'Rome', code: 'RM' }
  ]
])
</script>
