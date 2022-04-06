<template>
  <card-style2-component card-title="Frozen Columns [frozen='true', width:'?px']">
    <template #cardBody>
      <DataTable
        :value="$store.state.product.products"
        :scrollable="true"
        scroll-height="400px"
        scroll-direction="both"
      >
        <template #header>
          <div style="text-align: left">
            v2 => styles, v3 => style
          </div>
        </template>
        <Column field="id" header="Id" :styles="{width:'200px'}" :frozen="true" />
        <Column field="code" header="code" :styles="{width:'200px'}" :frozen="true" />
        <Column field="name" header="name" :styles="{width:'200px'}" />
        <Column field="description" header="description" :styles="{width:'200px'}" />
        <Column field="image" header="image" :styles="{width:'200px'}" />
        <Column field="price" header="price" :styles="{width:'200px'}" />
        <Column field="category" header="category" :styles="{width:'200px'}" />
        <Column field="quantity" header="quantity" :styles="{width:'200px'}" />
        <Column field="inventoryStatus" header="inventoryStatus" :styles="{width:'200px'}" />
        <Column field="rating" header="rating" :styles="{width:'200px'}" />
      </DataTable>
    </template>
  </card-style2-component>
</template>
