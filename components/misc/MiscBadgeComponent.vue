<template>
  <BlockViewer header="Badge" :code="code">
    <h5>Numbers [Badge value='2']</h5>
    <div class="badges">
      <Badge :value="2" class="mr-2" />
      <Badge :value="8" severity="success" class="mr-2" />
      <Badge :value="4" severity="info" class="mr-2" />
      <Badge :value="12" severity="warning" class="mr-2" />
      <Badge :value="3" severity="danger" />
    </div>

    <h5>Positioned Badge [i v-badge='2']</h5>
    <i v-badge="2" class="pi pi-bell mr-4 p-text-secondary" style="font-size: 2rem" />
    <i v-badge.danger="'10+'" class="pi pi-calendar mr-4 p-text-secondary" style="font-size: 2rem" />
    <i v-badge.danger class="pi pi-envelope p-text-secondary" style="font-size: 2rem" />

    <h5>Inline Button Badge [Button badge='8']</h5>
    <Button label="Emails" badge="8" class="mr-2" />
    <Button label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badge-class="p-badge-danger" />

    <h5>Sizes [Badge size='large']</h5>
    <div class="badges">
      <Badge :value="2" class="mr-2" />
      <Badge :value="4" size="large" severity="warning" class="mr-2" />
      <Badge :value="6" size="xlarge" severity="success" />
    </div>

    <h5>Image</h5>
    <ImagePreview v-badge="5" src="/images/galleria/galleria11.jpg" alt="Image" width="250" preview />
  </BlockViewer>
</template>

<script setup>
const code = `<h5>Numbers [Badge value='2']</h5>
<div class="badges">
  <Badge :value="2" class="mr-2" />
  <Badge :value="8" severity="success" class="mr-2" />
  <Badge :value="4" severity="info" class="mr-2" />
  <Badge :value="12" severity="warning" class="mr-2" />
  <Badge :value="3" severity="danger" />
</div>

<h5>Positioned Badge [i v-badge='2']</h5>
<i v-badge="2" class="pi pi-bell mr-4 p-text-secondary" style="font-size: 2rem" />
<i v-badge.danger="'10+'" class="pi pi-calendar mr-4 p-text-secondary" style="font-size: 2rem" />
<i v-badge.danger class="pi pi-envelope p-text-secondary" style="font-size: 2rem" />

<h5>Inline Button Badge [Button badge='8']</h5>
<Button label="Emails" badge="8" class="mr-2" />
<Button label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badge-class="p-badge-danger" />

<h5>Sizes [Badge size='large']</h5>
<div class="badges">
  <Badge :value="2" class="mr-2" />
  <Badge :value="4" size="large" severity="warning" class="mr-2" />
  <Badge :value="6" size="xlarge" severity="success" />
</div>

<h5>Image</h5>
<ImagePreview v-badge="5" src="/images/galleria/galleria11.jpg" alt="Image" width="250" preview />`
</script>
