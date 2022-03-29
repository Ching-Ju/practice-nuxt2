<template>
  <div class="grid">
    <card-style2-component class="col-12" card-title="Invalid State">
      <template #cardBody>
        <div class="grid p-fluid">
          <div class="col-12 md:col-6">
            <div class="field">
              <label for="inputtext">InputText</label>
              <InputText id="inputtext" v-model="value1" type="text" class="p-invalid" />
            </div>

            <div class="field">
              <label for="calendar">Calendar</label>
              <Calendar id="calendar" v-model="value3" class="p-invalid" :show-icon="true" />
            </div>
          </div>
        </div>
      </template>
    </card-style2-component>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const value1 = ref(null)
const value3 = ref(null)
</script>
