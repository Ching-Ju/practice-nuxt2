<template>
  <card-style2-component card-title="InputText">
    <template #cardBody>
      <div class="grid p-fluid">
        <div class="col-12 mb-2 lg:col-4 lg:mb-0">
          <InputText type="text" placeholder="Default" />
        </div>

        <div class="col-12 mb-2 lg:col-4 lg:mb-0">
          <InputText type="text" placeholder="Disabled" :disabled="true" />
        </div>

        <div class="col-12 mb-2 lg:col-4 lg:mb-0">
          <InputText type="text" placeholder="Invalid" class="p-invalid" />
        </div>
      </div>
    </template>
  </card-style2-component>
</template>
