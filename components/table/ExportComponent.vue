<template>
  <card-style2-component card-title="Export CSV [$refs.ref.exportCSV()]">
    <template #cardBody>
      <DataTable ref="datatable" :value="$store.state.product.products" responsive-layout="scroll">
        <template #header>
          <div style="text-align: left">
            <Button icon="pi pi-external-link" label="Export" @click="$refs.datatable.exportCSV()" />
          </div>
        </template>
        <Column field="id" header="id" export-header="ID" />
        <Column field="name" header="Name" />
      </DataTable>
    </template>
  </card-style2-component>
</template>
