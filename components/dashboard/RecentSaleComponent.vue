<template>
  <card-style2-component card-title="Recent Sales">
    <template #cardBody>
      <DataTable :value="$store.state.product.products" :rows="5" :paginator="true" responsive-layout="scroll">
        <Column style="width:15%">
          <template #header>
            Image
          </template>

          <template #body="slotProps">
            <img :src="`images/product/${slotProps.data.image}`" :alt="slotProps.data.image" width="50" class="shadow-2">
          </template>
        </Column>

        <Column field="name" header="Name" :sortable="true" style="width:35%" />

        <Column field="price" header="Price" :sortable="true" style="width:35%">
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
          </template>
        </Column>

        <Column style="width:15%">
          <template #header>
            View
          </template>

          <template #body>
            <Button icon="pi pi-search" type="button" class="p-button-text" />
          </template>
        </Column>
      </DataTable>
    </template>
  </card-style2-component>
</template>

<script setup>
import useCurrency from '~/composables/useCurrency'

const { formatCurrency } = useCurrency()
</script>
