<template>
  <BlockViewer header="Advanced [formgrid grid]" :code="code">
    <div class="p-fluid formgrid grid">
      <div class="field col-12 md:col-6">
        <label for="firstname2">Firstname</label>
        <InputText id="firstname2" type="text" placeholder="field col-12 md:col-6" />
      </div>

      <div class="field col-12 md:col-6">
        <label for="lastname2">Lastname</label>
        <InputText id="lastname2" type="text" placeholder="field col-12 md:col-6" />
      </div>

      <div class="field col-12">
        <label for="address">Address</label>
        <Textarea id="address" rows="4" placeholder="field col-12" />
      </div>

      <div class="field col-12 md:col-6">
        <label for="city">City</label>
        <InputText id="city" type="text" placeholder="field col-12 md:col-6" />
      </div>

      <div class="field col-12 md:col-3">
        <label for="state">State</label>
        <InputText id="state" type="text" placeholder="field col-12 md:col-3" />
      </div>

      <div class="field col-12 md:col-3">
        <label for="zip">Zip</label>
        <InputText id="zip" type="text" placeholder="field col-12 md:col-3" />
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="p-fluid formgrid grid">
  <div class="field col-12 md:col-6">
    <label for="firstname2">Firstname</label>
    <InputText id="firstname2" type="text" placeholder="field col-12 md:col-6" />
  </div>

  <div class="field col-12 md:col-6">
    <label for="lastname2">Lastname</label>
    <InputText id="lastname2" type="text" placeholder="field col-12 md:col-6" />
  </div>

  <div class="field col-12">
    <label for="address">Address</label>
    <Textarea id="address" rows="4" placeholder="field col-12" />
  </div>

  <div class="field col-12 md:col-6">
    <label for="city">City</label>
    <InputText id="city" type="text" placeholder="field col-12 md:col-6" />
  </div>

  <div class="field col-12 md:col-3">
    <label for="state">State</label>
    <InputText id="state" type="text" placeholder="field col-12 md:col-3" />
  </div>

  <div class="field col-12 md:col-3">
    <label for="zip">Zip</label>
    <InputText id="zip" type="text" placeholder="field col-12 md:col-3" />
  </div>
</div>`
</script>
