<template>
  <BlockViewer header="Horizontal [field grid]" :code="code">
    <div class="p-fluid">
      <div class="field grid">
        <label for="name3" class="col-12 mb-2 md:col-2 md:mb-0">Name</label>
        <div class="col-12 md:col-10">
          <InputText id="name3" type="text" />
        </div>
      </div>

      <div class="field grid">
        <label for="email3" class="col-12 mb-2 md:col-2 md:mb-0">Email</label>
        <div class="col-12 md:col-10">
          <InputText id="email3" type="text" />
        </div>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="p-fluid">
  <div class="field grid">
    <label for="name3" class="col-12 mb-2 md:col-2 md:mb-0">Name</label>
    <div class="col-12 md:col-10">
      <InputText id="name3" type="text" />
    </div>
  </div>

  <div class="field grid">
    <label for="email3" class="col-12 mb-2 md:col-2 md:mb-0">Email</label>
    <div class="col-12 md:col-10">
      <InputText id="email3" type="text" />
    </div>
  </div>
</div>`
</script>
