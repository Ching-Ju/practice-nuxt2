<template>
  <BlockViewer header="Overlay Panel" :code="code">
    <div class="grid formgrid">
      <div class="col-6">
        <Button type="button" label="Image" class="p-button-success" @click="$refs.op.toggle($event)" />
        <OverlayPanel ref="op" append-to="body" :show-close-icon="true">
          <img :src="$_r('images/nature/nature9.jpg')" alt="Nature 9">
        </OverlayPanel>
      </div>

      <div class="col-6">
        {{ selectedProduct }}
        <Button type="button" label="DataTable" class="p-button-success" @click="$refs.op2.toggle($event)" />
        <OverlayPanel id="overlay_panel" ref="op2" append-to="body" :show-close-icon="true" style="width: 450px">
          <DataTable
            :selection.sync="selectedProduct"
            :value="$store.state.product.products"
            selection-mode="single"
            :paginator="true"
            :rows="5"
            responsive-layout="scroll"
            @row-select="$refs.op.hide()"
          >
            <Column field="name" header="Name" :sortable="true" header-style="min-width:10rem;" />

            <Column header="Image" header-style="min-width:10rem;">
              <template #body="slotProps">
                <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="100" class="shadow-2">
              </template>
            </Column>

            <Column field="price" header="Price" :sortable="true" header-style="min-width:8rem;">
              <template #body="slotProps">
                {{ slotProps.data.price }}
              </template>
            </Column>
          </DataTable>
        </OverlayPanel>
      </div>
    </div>
  </BlockViewer>
</template>

<script>
</script>

<script>
export default {
  data: () => ({
    selectedProduct: null,
    code: `<div class="grid formgrid">
  <div class="col-6">
    <Button type="button" label="Image" class="p-button-success" @click="$refs.op.toggle($event)" />
    <OverlayPanel ref="op" append-to="body" :show-close-icon="true">
      <img :src="$_r('images/nature/nature9.jpg')" alt="Nature 9">
    </OverlayPanel>
  </div>

  <div class="col-6">
    {{ selectedProduct }}
    <Button type="button" label="DataTable" class="p-button-success" @click="$refs.op2.toggle($event)" />
    <OverlayPanel id="overlay_panel" ref="op2" append-to="body" :show-close-icon="true" style="width: 450px">
      <DataTable
        :selection.sync="selectedProduct"
        :value="$store.state.product.products"
        selection-mode="single"
        :paginator="true"
        :rows="5"
        responsive-layout="scroll"
        @row-select="$refs.op.hide()"
      >
        <Column field="name" header="Name" :sortable="true" header-style="min-width:10rem;" />

        <Column header="Image" header-style="min-width:10rem;">
          <template #body="slotProps">
            <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="100" class="shadow-2">
          </template>
        </Column>

        <Column field="price" header="Price" :sortable="true" header-style="min-width:8rem;">
          <template #body="slotProps">
            {{ slotProps.data.price }}
          </template>
        </Column>
      </DataTable>
    </OverlayPanel>
  </div>
</div>`
  })
}
</script>
