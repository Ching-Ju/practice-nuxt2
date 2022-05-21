<template>
  <BlockViewer header="Crud Server Side Data Table" :code="code">
    <div v-if="error">
      <CrudDataTableErrorComponent :error="error" />
    </div>
    <div v-else>
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
        :value="items"
        :loading="loading"
        :lazy="true"
        :paginator="true"
        :rows="dataTableParameter.rows"
        :rows-per-page-options="rowsPerPageOptions"
        :total-records="totalRecords"
        @page="onPage($event)"
        @sort="onSort($event)"
      >
        <template #empty>
          <CrudDataTableErrorComponent />
        </template>

        <template #header>
          <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 class="m-0">
              Users
            </h5>
            <span class="block mt-2 md:mt-0 p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filter" placeholder="Search..." />
            </span>
          </div>
        </template>

        <Column :sortable="true" field="id" header="Id" />
        <Column :sortable="true" field="name" header="Name" />
        <Column :sortable="true" field="email" header="Email" />
        <Column :sortable="true" field="created_at" header="Created At" />
        <Column :sortable="true" field="updated_at" header="Updated At" />

        <Column header-style="min-width:10rem;">
          <template #body="slotProps">
            <CrudDataTableEditButtonComponent @button-click="editItem(slotProps.data.id);" />
            <CrudDataTableDeleteButtonComponent @button-click="onDelete(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <CrudDeleteConfirmationDialogComponent :dialog-delete="dialogDelete" @update:display="dialogDelete = $event" @delete-confirm="deleteConfirm" />
    </div>
  </BlockViewer>
</template>

<script setup>
import useDataTableServerSideComposable from '~/composables/useDataTableServerSideComposable'

const code = ''

const {
  dataTableParameter,
  dialogDelete,
  error,
  filter,
  items,
  loading,
  rowsPerPageOptions,
  totalRecords,
  deleteConfirm,
  editItem,
  getItems,
  onDelete,
  onPage,
  onSort,
  setApiUrl
} = useDataTableServerSideComposable()

setApiUrl('/api/users')
getItems()
</script>
