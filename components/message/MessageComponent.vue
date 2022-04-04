<template>
  <card-style2-component card-title="Messages">
    <template #cardBody>
      <Message v-for="msg of messages" :key="msg.content" :severity="msg.severity">
        {{ msg.content }}
      </Message>
    </template>
  </card-style2-component>
</template>

<script setup>
const messages = [
  { severity: 'success', detail: 'Success Message', content: 'Message sent' },
  { severity: 'info', detail: 'Info Message', content: 'PrimeVue rocks' },
  { severity: 'warn', detail: 'Warn Message', content: 'There are unsaved changes' },
  { severity: 'error', detail: 'Error Message', content: 'Validation failed' }
]
</script>
