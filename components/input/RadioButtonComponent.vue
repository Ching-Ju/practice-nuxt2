<template>
  <card-style2-component :card-title="`RadioButton [${radioValue}]`">
    <template #cardBody>
      <div class="grid">
        <div v-for="(option, index) in ['Chicago', 'Los Angeles', 'New York']" :key="index" class="col-12 md:col-4">
          <div class="field-radiobutton mb-0">
            <RadioButton :id="`option${index}`" v-model="radioValue" name="option" :value="option" />
            <label :for="`option${index}`">{{ option }}</label>
          </div>
        </div>
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const radioValue = ref('Los Angeles')
</script>
