<template>
  <card-style2-component card-title="Filter">
    <template #cardBody>
      <DataTable
        :value="$store.state.product.products"
        :paginator="true"
        class="p-datatable-customers"
        :rows="5"
        data-key="id"
        :filters.sync="filters"
        filter-display="row"
        responsive-layout="scroll"
        :global-filter-fields="['id', 'name']"
      >
        <template #header>
          <div class="flex justify-content-end">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </span>
          </div>
        </template>

        <template #empty>
          No customers found.
        </template>

        <template #loading>
          Loading customers data. Please wait.
        </template>

        <Column field="id" header="id">
          <template #filter="{filterModel}">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by Id" />
          </template>
        </Column>

        <Column field="name" header="name">
          <template #body="{data}">
            {{ data.name }}
          </template>
          <template #filter="{filterModel}">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
          </template>
        </Column>
      </DataTable>
    </template>
  </card-style2-component>
</template>

<script setup>
import { reactive } from '@nuxtjs/composition-api'
import { FilterMatchMode, FilterOperator } from 'primevue/api'

const filters = reactive({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: { value: null, matchMode: FilterMatchMode.EQUALS },
  name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }
})
</script>
