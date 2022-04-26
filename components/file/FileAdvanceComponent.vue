<template>
  <BlockViewer header="Advance" :code="code">
    <FileUpload
      name="demo[]"
      url="./upload.php"
      :multiple="true"
      accept="image/*"
      :max-file-size="1000000"
    />
  </BlockViewer>
</template>

<script setup>
const code = `<FileUpload
  name="demo[]"
  url="./upload.php"
  :multiple="true"
  accept="image/*"
  :max-file-size="1000000"
/>`
</script>
