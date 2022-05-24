<template>
  <BlockViewer header="Crud Server Side Data Table" :code="code">
    <div v-if="error">
      <CrudDataTableErrorComponent :error="error" />
    </div>
    <div v-else>
      <Toolbar class="mb-4">
        <template #start>
          <div class="my-2">
            <CrudDataTableCreateButtonComponent @button-click="onCreate();" />
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
        :filters.sync="filters"
        filter-display="row"
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
            <CrudDataTableInputSearchComponent :filter="filters.global.value" @update:filter="filters.global.value = $event" />
          </div>
        </template>

        <Column :sortable="true" field="id" header="Id" style="min-width:12rem">
          <template #filter="{filterModel, filterCallback}">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by id" @keyup.enter="filterCallback()" />
          </template>
        </Column>
        <Column :sortable="true" field="name" header="Name" style="min-width:12rem">
          <template #filter="{filterModel, filterCallback}">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" @keyup.enter="filterCallback()" />
          </template>
        </Column>
        <Column :sortable="true" field="email" header="Email" style="min-width:12rem">
          <template #filter="{filterModel, filterCallback}">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by email" @keyup.enter="filterCallback()" />
          </template>
        </Column>
        <Column :sortable="true" field="created_at" header="Created At" style="min-width:12rem">
          <template #filter="{filterModel}">
            <Calendar v-model="filterModel.value" date-format="yy/mm/dd" placeholder="yyyy/mm/dd" />
          </template>
        </Column>
        <Column :sortable="true" field="updated_at" header="Updated At" style="min-width:12rem">
          <template #filter="{filterModel}">
            <Calendar v-model="filterModel.value" date-format="yy/mm/dd" placeholder="yyyy/mm/dd" />
          </template>
        </Column>

        <Column style="min-width:12rem">
          <template #body="slotProps">
            <CrudDataTableEditButtonComponent @button-click="onEdit(slotProps.data);" />
            <CrudDataTableDeleteButtonComponent @button-click="onDelete(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <CrudFormDialogComponent :dialog.sync="dialog" :errors="errors" :item.sync="item" @save="onSave" />
      <CrudDeleteConfirmationDialogComponent :dialog-delete.sync="dialogDelete" @delete-confirm="deleteConfirm" />
    </div>
  </BlockViewer>
</template>

<script setup>
import { FilterMatchMode } from 'primevue/api'
import useDataTableServerSideComposable from '~/composables/useDataTableServerSideComposable'

const code = ''

const {
  dataTableParameter,
  dialog,
  dialogDelete,
  error,
  errors,
  filters,
  item,
  items,
  loading,
  rowsPerPageOptions,
  totalRecords,
  deleteConfirm,
  getItems,
  onCreate,
  onDelete,
  onEdit,
  onPage,
  onSave,
  onSort,
  setApiUrl
} = useDataTableServerSideComposable()

setApiUrl('/api/users')
filters.value = Object.assign({}, filters.value, {
  id: { value: null, matchMode: FilterMatchMode.EQUALS },
  name: { value: null, matchMode: FilterMatchMode.EQUALS },
  email: { value: null, matchMode: FilterMatchMode.EQUALS }
})
getItems()
</script>
