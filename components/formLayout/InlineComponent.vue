<template>
  <card-style2-component
    card-title="Inline [formgroup-inline]"
  >
    <template #cardBody>
      <div class="formgroup-inline">
        <div class="field">
          <label for="firstname1" class="p-sr-only">Firstname</label>
          <InputText id="firstname1" type="text" placeholder="Firstname" />
        </div>

        <div class="field">
          <label for="lastname1" class="p-sr-only">Lastname</label>
          <InputText id="lastname1" type="text" placeholder="Lastname" />
        </div>

        <Button label="Submit" />
      </div>
    </template>
  </card-style2-component>
</template>
