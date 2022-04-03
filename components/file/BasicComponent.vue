<template>
  <card-style2-component card-title="Basic">
    <template #cardBody>
      <FileUpload
        mode="basic"
        name="demo[]"
        url="./upload.php"
        accept="image/*"
        :max-file-size="1000000"
      />
    </template>
  </card-style2-component>
</template>
