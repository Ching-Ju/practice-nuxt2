<template>
  <card-style2-component card-title="Inline">
    <template #cardBody>
      <div class="field grid">
        <label class="col-fixed w-9rem">Username</label>
        <div class="col">
          <InputText class="p-invalid mr-2" />
          <InlineMessage>Username is required</InlineMessage>
        </div>
      </div>
    </template>
  </card-style2-component>
</template>
