<template>
  <div class="grid">
    <div class="col-6">
      <BlockViewer header="qrcode.vue" :code="code">
        <QrcodeVue :value="'https://www.google.com/'" :size="300" level="H" />
      </BlockViewer>
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'

const code = `npm i qrcode.vue@1.7

import QrcodeVue from 'qrcode.vue'

<QrcodeVue :value="'https://www.google.com/'" :size="300" level="H" />`
</script>
