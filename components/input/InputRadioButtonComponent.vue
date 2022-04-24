<template>
  <BlockViewer :header="`RadioButton [${radioValue}]`" :code="code">
    <div class="grid">
      <div v-for="(option, index) in ['Chicago', 'Los Angeles', 'New York']" :key="index" class="col-12 md:col-4">
        <div class="field-radiobutton mb-0">
          <RadioButton :id="`option${index}`" v-model="radioValue" name="option" :value="option" />
          <label :for="`option${index}`">{{ option }}</label>
        </div>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const radioValue = ref('Los Angeles')
const code = `<div class="grid">
  <div v-for="(option, index) in ['Chicago', 'Los Angeles', 'New York']" :key="index" class="col-12 md:col-4">
    <div class="field-radiobutton mb-0">
      <RadioButton :id="\`option\${index}\`" v-model="radioValue" name="option" :value="option" />
      <label :for="\`option\${index}\`">{{ option }}</label>
    </div>
  </div>
</div>`
</script>
