<template>
  <div class="grid">
    <div class="col-12">
      <BlockViewer header="Float Label [p-float-label]" :code="code">
        <div class="grid p-fluid">
          <div v-for="(component, index) in ['InputText','AutoComplete','Calendar','Chips','InputNumber','Dropdown','MultiSelect','Textarea']" :key="index" class="field col-12 md:col-4">
            <span class="p-float-label">
              <component :is="component" />
              <label>{{ component }}</label>
            </span>
          </div>

          <div class="field col-12 md:col-4">
            <span class="p-float-label">
              <InputMask mask="99/99/9999" />
              <label>InputMask</label>
            </span>
          </div>

          <div class="field col-12 md:col-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-user" />
              </span>

              <span class="p-float-label">
                <InputText />
                <label>InputGroup</label>
              </span>
            </div>
          </div>
        </div>
      </BlockViewer>
    </div>
  </div>
</template>

<script setup>
const code = `<div class="grid p-fluid">
  <div v-for="(component, index) in ['InputText','AutoComplete','Calendar','Chips','InputNumber','Dropdown','MultiSelect','Textarea']" :key="index" class="field col-12 md:col-4">
    <span class="p-float-label">
      <component :is="component" />
      <label>{{ component }}</label>
    </span>
  </div>

  <div class="field col-12 md:col-4">
    <span class="p-float-label">
      <InputMask mask="99/99/9999" />
      <label>InputMask</label>
    </span>
  </div>

  <div class="field col-12 md:col-4">
    <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user" />
      </span>

      <span class="p-float-label">
        <InputText />
        <label>InputGroup</label>
      </span>
    </div>
  </div>
</div>`
</script>
