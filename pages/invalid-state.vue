<template>
  <div class="grid">
    <card-style2-component class="col-12" card-title="Invalid State">
      <template #cardBody>
        <div class="grid p-fluid">
          <div class="col-12 md:col-6">
            <div class="field">
              <label for="inputtext">InputText</label>
              <InputText
                v-model="value1"
                type="text"
                class="p-invalid"
              />
            </div>

            <div class="field">
              <label for="autocomplete">AutoComplete</label>
              <AutoComplete
                v-model="value2"
                field="name"
                :suggestions="$store.state.product.products"
                class="p-invalid"
              />
            </div>

            <div class="field">
              <label for="chips">Chips</label>
              <Chips
                id="chips"
                v-model="value4"
                class="p-invalid"
              />
            </div>

            <div class="field">
              <label for="calendar">Calendar</label>
              <Calendar
                v-model="value3"
                class="p-invalid"
                date-format="yy/mm/dd"
                :show-icon="true"
              />
            </div>

            <div class="field">
              <label for="password">Password</label>
              <Password
                v-model="value10"
                class="p-invalid"
              />
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="field">
              <label for="inputmask">InputMask</label>
              <InputMask
                v-model="value5"
                mask="99/99/9999"
                slot-char="mm/dd/yyyy"
                class="p-invalid"
              />
            </div>

            <div class="field">
              <label for="inputnumber">InputNumber</label>
              <InputNumber
                v-model="value6"
                class="p-invalid"
              />
            </div>

            <div class="field">
              <label for="dropdown">Dropdown</label>
              <Dropdown
                v-model="value7"
                :options="$store.state.product.products"
                option-label="name"
                option-value="id"
                class="p-invalid"
              />
            </div>

            <div class="field">
              <label for="multiselect">MultiSelect</label>
              <MultiSelect
                v-model="value8"
                :filter="true"
                :options="$store.state.product.products"
                option-label="name"
                option-value="id"
                class="p-invalid"
                display="chip"
              />
            </div>

            <div class="field">
              <label for="textarea">Textarea</label>
              <Textarea
                v-model="value9"
                rows="3"
                class="p-invalid"
                :auto-resize="true"
              />
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
const value2 = ref(null)
const value3 = ref(null)
const value4 = ref(null)
const value5 = ref(null)
const value6 = ref(null)
const value7 = ref(null)
const value8 = ref(null)
const value9 = ref(null)
const value10 = ref(null)

</script>
