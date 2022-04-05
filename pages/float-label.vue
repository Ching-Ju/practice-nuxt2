<template>
  <div class="grid">
    <div class="col-12">
      <card-style2-component card-title="Float Label [p-float-label]">
        <template #cardBody>
          <div class="grid p-fluid">
            <div v-for="(component, index) in components" :key="index" class="field col-12 md:col-4">
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
        </template>
      </card-style2-component>
    </div>
  </div>
</template>

<script setup>
const components = [
  'InputText',
  'AutoComplete',
  'Calendar',
  'Chips',
  'InputNumber',
  'Dropdown',
  'MultiSelect',
  'Textarea'
]
</script>
