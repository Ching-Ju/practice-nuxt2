<template>
  <BlockViewer header="ProgressBar" :code="code">
    <div class="grid">
      <div class="col">
        <ProgressBar :value="50" />
      </div>

      <div class="col">
        <ProgressBar :value="50" :show-value="false" />
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="grid">
  <div class="col">
    <ProgressBar :value="50" />
  </div>

  <div class="col">
    <ProgressBar :value="50" :show-value="false" />
  </div>
</div>`
</script>
