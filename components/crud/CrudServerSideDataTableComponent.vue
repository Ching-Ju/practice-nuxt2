<template>
  <BlockViewer header="Crud Server Side Data Table" :code="code">
    <Toolbar class="mb-4">
      <template #start>
        <div class="my-2">
          <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" />
          <Button label="Delete" icon="pi pi-trash" class="p-button-danger" />
        </div>
      </template>

      <template #end>
        <CrudDataTableImportButtonComponent />

        <CrudDataTableExportButtonComponent />
      </template>
    </Toolbar>

    <DataTable
      responsive-layout="scroll"
      :value="$store.state.product.products"
      :loading="loading"
      :paginator="true"
      :rows="rows"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <template #header>
        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
          <h5 class="m-0">
            Products
          </h5>
          <span class="block mt-2 md:mt-0 p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filter" placeholder="Search..." />
          </span>
        </div>
      </template>

      <Column field="code" header="Code" export-header="Product Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />

      <Column header-style="min-width:10rem;">
        <template #body="slotProps">
          <CrudDataTableEditButtonComponent @click="editItem(slotProps.data)" />
          <CrudDataTableDeleteButtonComponent @click="deleteItem(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </BlockViewer>
</template>

<script setup>
import useDataTableServerSideComposable from '~/composables/useDataTableServerSideComposable'

const code = ''
const { filter, loading, rows, rowsPerPageOptions, editItem, deleteItem } = useDataTableServerSideComposable()
</script>
