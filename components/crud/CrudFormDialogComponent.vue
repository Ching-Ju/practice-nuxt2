<template>
  <Dialog :visible.sync="display" :header="dialogTitle" :style="{width: '350px'}" :modal="true">
    <div class="p-fluid">
      <div v-if="form.id" class="field">
        <label>Id</label>
        <InputText v-model="form.id" type="text" :readonly="true" />
      </div>

      <div class="field">
        <label>Name (*)</label>
        <InputText v-model="form.name" type="text" :readonly="props.readonly" />
      </div>

      <div class="field">
        <label>Email (*)</label>
        <InputText v-model="form.email" type="email" :readonly="props.readonly" />
      </div>

      <div v-if="form.id" class="field">
        <label>Created At</label>
        <InputText v-model="form.created_at" type="text" :readonly="true" />
      </div>

      <div v-if="form.id" class="field">
        <label>Updated At</label>
        <InputText v-model="form.updated_at" type="text" :readonly="true" />
      </div>
    </div>

    <template #footer>
      <Button label="Close" icon="pi pi-times" class="p-button-text" @click="display = false" />
      <Button
        v-if="!props.readonly"
        label="Save"
        icon="pi pi-check"
        class="p-button-text"
        autofocus
        @click="emit('save')"
      />
    </template>
  </Dialog>
</template>

<script setup>
import { computed, defineEmits, defineProps } from '@nuxtjs/composition-api'

const emit = defineEmits()
const props = defineProps({
  dialog: {
    default: false,
    required: true,
    type: Boolean
  },
  item: {
    default: () => {},
    required: true,
    type: Object
  },
  readonly: {
    default: false,
    type: Boolean
  }
})

const dialogTitle = computed(() => {
  if (props.readonly) { return 'Show' }
  if (props.item.id) { return 'Edit' }
  return 'Create'
})

const display = computed({
  get () {
    return props.dialog
  },
  set (value) {
    emit('update:dialog', value)
  }
})

const form = computed({
  get () {
    return props.item
  },
  set (value) {
    emit('update:item', value)
  }
})
</script>
