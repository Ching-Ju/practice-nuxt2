<template>
  <card-style2-component card-title="Advance">
    <template #cardBody>
      <FileUpload
        name="demo[]"
        url="./upload.php"
        :multiple="true"
        accept="image/*"
        :max-file-size="1000000"
      />
    </template>
  </card-style2-component>
</template>
