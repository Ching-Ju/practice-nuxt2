<template>
  <div class="grid">
    <div class="col-12">
      <BlockViewer header="Invalid State [p-invalid]" :code="code">
        <div class="grid p-fluid">
          <div v-for="(component, index) in ['InputText', 'Password','AutoComplete','Calendar','Chips','InputNumber','Dropdown','MultiSelect','Textarea']" :key="index" class="field col-12 md:col-6">
            <label>{{ component }}</label>
            <component
              :is="component"
              v-model="value[index]"
              class="p-invalid"
            />
          </div>

          <div class="field col-12 md:col-6">
            <label for="inputmask">InputMask</label>
            <InputMask
              v-model="valueInputMask"
              mask="99/99/9999"
              slot-char="mm/dd/yyyy"
              class="p-invalid"
            />
          </div>
        </div>
      </BlockViewer>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const value = ref([])
const valueInputMask = ref(null)

const code = `const value = ref([])
const valueInputMask = ref(null)

<div class="grid p-fluid">
  <div v-for="(component, index) in ['InputText', 'Password','AutoComplete','Calendar','Chips','InputNumber','Dropdown','MultiSelect','Textarea']" :key="index" class="field col-12 md:col-6">
    <label>{{ component }}</label>
    <component
      :is="component"
      v-model="value[index]"
      class="p-invalid"
    />
  </div>

  <div class="field col-12 md:col-6">
    <label for="inputmask">InputMask</label>
    <InputMask
      v-model="valueInputMask"
      mask="99/99/9999"
      slot-char="mm/dd/yyyy"
      class="p-invalid"
    />
  </div>
</div>`

</script>
