<template>
  <BlockViewer header="Basic" :code="code">
    <FileUpload
      mode="basic"
      name="demo[]"
      url="./upload.php"
      accept="image/*"
      :max-file-size="1000000"
    />
  </BlockViewer>
</template>

<script setup>
const code = `<FileUpload
  mode="basic"
  name="demo[]"
  url="./upload.php"
  accept="image/*"
  :max-file-size="1000000"
/>`
</script>
