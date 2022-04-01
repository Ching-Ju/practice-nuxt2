<template>
  <card-style2-component card-title="REST">
    <template #cardBody>
      <DataTable :value="$store.state.product.products" responsive-layout="scroll">
        <Column field="code" header="Code" export-header="Product Code" />
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column field="quantity" header="Quantity" />
      </DataTable>
    </template>
  </card-style2-component>
</template>

<script setup>
</script>
