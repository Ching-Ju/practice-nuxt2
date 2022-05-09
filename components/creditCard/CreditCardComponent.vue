<template>
  <BlockViewer header="Card" :code="code">
    <div class="card-wrapper" />

    <form id="myForm">
      <div class="p-fluid">
        <div class="field">
          <label>Number</label>
          <InputText type="text" name="number" />
        </div>

        <div class="field">
          <label>Name</label>
          <InputText type="text" name="name" />
        </div>

        <div class="field">
          <label>Expiry</label>
          <InputText type="text" name="expiry" />
        </div>

        <div class="field">
          <label>CVC</label>
          <InputText type="text" name="cvc" />
        </div>
      </div>
    </form>
  </BlockViewer>
</template>

<script setup>
import Card from 'card'
import { onMounted } from '@nuxtjs/composition-api'

onMounted(() => {
  // eslint-disable-next-line no-new
  new Card({
    form: 'form#myForm',
    container: '.card-wrapper',
    formatting: true,
    placeholders: {
      number: '•••• •••• •••• ••••',
      name: 'Your name',
      expiry: '••/••',
      cvc: '•••'
    },
    masks: {
      cardNumber: '•'
    }
  })
})

const code = `import Card from 'card'
import { onMounted } from '@nuxtjs/composition-api'

onMounted(() => {
  // eslint-disable-next-line no-new
  new Card({
    form: 'form#myForm',
    container: '.card-wrapper',
    formatting: true,
    placeholders: {
      number: '•••• •••• •••• ••••',
      name: 'Your name',
      expiry: '••/••',
      cvc: '•••'
    },
    masks: {
      cardNumber: '•'
    }
  })
})

<div class="card-wrapper" />

<form id="myForm">
  <div class="p-fluid">
    <div class="field">
      <label>Number</label>
      <InputText type="text" name="number" />
    </div>

    <div class="field">
      <label>Name</label>
      <InputText type="text" name="name" />
    </div>

    <div class="field">
      <label>Expiry</label>
      <InputText type="text" name="expiry" />
    </div>

    <div class="field">
      <label>CVC</label>
      <InputText type="text" name="cvc" />
    </div>
  </div>
</form>`
</script>
