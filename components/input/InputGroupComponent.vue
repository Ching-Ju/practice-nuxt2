<template>
  <BlockViewer header="Input Groups" :code="code">
    <div class="grid p-fluid">
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user" />
          </span>
          <InputText placeholder="Username" />
        </div>
      </div>

      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"><i class="pi pi-shopping-cart" /></span>
          <span class="p-inputgroup-addon"><i class="pi pi-globe" /></span>
          <InputText placeholder="Price" />
          <span class="p-inputgroup-addon">$</span>
          <span class="p-inputgroup-addon">.00</span>
        </div>
      </div>

      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <Button label="Search" />
          <InputText placeholder="Keyword" />
        </div>
      </div>

      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon p-inputgroup-addon-checkbox">
            <Checkbox :binary="true" />
          </span>
          <InputText placeholder="Confirm" />
        </div>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = ` <div class="grid p-fluid">
  <div class="col-12 md:col-6">
    <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user" />
      </span>
      <InputText placeholder="Username" />
    </div>
  </div>

  <div class="col-12 md:col-6">
    <div class="p-inputgroup">
      <span class="p-inputgroup-addon"><i class="pi pi-shopping-cart" /></span>
      <span class="p-inputgroup-addon"><i class="pi pi-globe" /></span>
      <InputText placeholder="Price" />
      <span class="p-inputgroup-addon">$</span>
      <span class="p-inputgroup-addon">.00</span>
    </div>
  </div>

  <div class="col-12 md:col-6">
    <div class="p-inputgroup">
      <Button label="Search" />
      <InputText placeholder="Keyword" />
    </div>
  </div>

  <div class="col-12 md:col-6">
    <div class="p-inputgroup">
      <span class="p-inputgroup-addon p-inputgroup-addon-checkbox">
        <Checkbox :binary="true" />
      </span>
      <InputText placeholder="Confirm" />
    </div>
  </div>
</div>`
</script>
