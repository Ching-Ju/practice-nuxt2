<template>
  <BlockViewer header="Messages" :code="code">
    <Message v-for="(msg, index) of messages" :key="index" :severity="msg.severity">
      {{ msg.content }}
    </Message>
  </BlockViewer>
</template>

<script setup>
const messages = [
  { severity: 'success', detail: 'Success Message', content: 'Message sent' },
  { severity: 'info', detail: 'Info Message', content: 'PrimeVue rocks' },
  { severity: 'warn', detail: 'Warn Message', content: 'There are unsaved changes' },
  { severity: 'error', detail: 'Error Message', content: 'Validation failed' }
]

const code = `<Message v-for="(msg, index) of messages" :key="index" :severity="msg.severity">
  {{ msg.content }}
</Message>

const messages = [
  { severity: 'success', detail: 'Success Message', content: 'Message sent' },
  { severity: 'info', detail: 'Info Message', content: 'PrimeVue rocks' },
  { severity: 'warn', detail: 'Warn Message', content: 'There are unsaved changes' },
  { severity: 'error', detail: 'Error Message', content: 'Validation failed' }
]`
</script>
