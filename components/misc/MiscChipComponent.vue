<template>
  <BlockViewer header="Chip" :code="code">
    <h5>Basic [Chip label='Action']</h5>
    <div class="flex align-items-center flex-column sm:flex-row">
      <Chip label="Action" class="mr-2 mb-2" />
      <Chip label="Comedy" class="mr-2 mb-2" />
      <Chip label="Mystery" class="mr-2 mb-2" />
      <Chip label="Thriller" :removable="true" class="mb-2" />
    </div>

    <h5>Icon [Chip icon='pi pi-apple']</h5>
    <div class="flex align-items-center flex-column sm:flex-row">
      <Chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2" />
      <Chip label="Facebook" icon="pi pi-facebook" class="mr-2 mb-2" />
      <Chip label="Google" icon="pi pi-google" class="mr-2 mb-2" />
      <Chip label="Microsoft" icon="pi pi-microsoft" :removable="true" class="mb-2" />
    </div>

    <h5>Image [Chip image='xx.png']</h5>
    <div class="flex align-items-center flex-column sm:flex-row">
      <Chip label="Amy Elsner" image="images/avatar/amyelsner.png" class="mr-2 mb-2" />
      <Chip label="Asiya Javayant" image="images/avatar/asiyajavayant.png" class="mr-2 mb-2" />
      <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" class="mr-2 mb-2" />
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<h5>Basic [Chip label='Action']</h5>
<div class="flex align-items-center flex-column sm:flex-row">
  <Chip label="Action" class="mr-2 mb-2" />
  <Chip label="Comedy" class="mr-2 mb-2" />
  <Chip label="Mystery" class="mr-2 mb-2" />
  <Chip label="Thriller" :removable="true" class="mb-2" />
</div>

<h5>Icon [Chip icon='pi pi-apple']</h5>
<div class="flex align-items-center flex-column sm:flex-row">
  <Chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2" />
  <Chip label="Facebook" icon="pi pi-facebook" class="mr-2 mb-2" />
  <Chip label="Google" icon="pi pi-google" class="mr-2 mb-2" />
  <Chip label="Microsoft" icon="pi pi-microsoft" :removable="true" class="mb-2" />
</div>

<h5>Image [Chip image='xx.png']</h5>
<div class="flex align-items-center flex-column sm:flex-row">
  <Chip label="Amy Elsner" image="images/avatar/amyelsner.png" class="mr-2 mb-2" />
  <Chip label="Asiya Javayant" image="images/avatar/asiyajavayant.png" class="mr-2 mb-2" />
  <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" class="mr-2 mb-2" />
</div>`
</script>
