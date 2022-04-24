<template>
  <BlockViewer :header="`Checkbox [${checkboxValue}]`" :code="code">
    <div class="grid">
      <div v-for="(option, index) in ['Chicago', 'Los Angeles', 'New York']" :key="index" class="col-12 md:col-4">
        <div class="field-checkbox mb-0">
          <Checkbox :id="`checkOption${index}`" v-model="checkboxValue" name="option" :value="option" />
          <label :for="`checkOption${index}`">{{ option }}</label>
        </div>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const checkboxValue = ref(['Chicago', 'Los Angeles'])
const code = `<div class="grid">
  <div v-for="(option, index) in ['Chicago', 'Los Angeles', 'New York']" :key="index" class="col-12 md:col-4">
    <div class="field-checkbox mb-0">
      <Checkbox :id="\`checkOption\${index}\`" v-model="checkboxValue" name="option" :value="option" />
      <label :for="\`checkOption\${index}\`">{{ option }}</label>
    </div>
  </div>
</div>`
</script>
