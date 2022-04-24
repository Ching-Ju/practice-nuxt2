<template>
  <BlockViewer header="Icons" :code="code">
    <div class="grid p-fluid">
      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <span class="p-input-icon-left">
          <i class="pi pi-user" />
          <InputText type="text" placeholder="Username" />
        </span>
      </div>

      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <span class="p-input-icon-right">
          <InputText type="text" placeholder="Search" />
          <i class="pi pi-search" />
        </span>
      </div>

      <div class="col-12 mb-2 lg:col-4 lg:mb-0">
        <span class="p-input-icon-left p-input-icon-right">
          <i class="pi pi-user" />
          <InputText type="text" placeholder="Search" />
          <i class="pi pi-search" />
        </span>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="grid p-fluid">
  <div class="col-12 mb-2 lg:col-4 lg:mb-0">
    <span class="p-input-icon-left">
      <i class="pi pi-user" />
      <InputText type="text" placeholder="Username" />
    </span>
  </div>

  <div class="col-12 mb-2 lg:col-4 lg:mb-0">
    <span class="p-input-icon-right">
      <InputText type="text" placeholder="Search" />
      <i class="pi pi-search" />
    </span>
  </div>

  <div class="col-12 mb-2 lg:col-4 lg:mb-0">
    <span class="p-input-icon-left p-input-icon-right">
      <i class="pi pi-user" />
      <InputText type="text" placeholder="Search" />
      <i class="pi pi-search" />
    </span>
  </div>
</div>`
</script>
