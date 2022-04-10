<template>
  <card-style2-component card-title="Tooltip [v-tooltip]">
    <template #cardBody>
      <div class="formgroup-inline">
        <div class="field">
          <InputText v-tooltip="'Your username'" type="text" placeholder="Username" />
        </div>

        <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
      </div>
    </template>
  </card-style2-component>
</template>
