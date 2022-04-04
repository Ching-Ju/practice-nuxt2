<template>
  <card-style2-component card-title="Toolbar">
    <template #cardBody>
      <Toolbar>
        <template #start>
          <Button label="New" icon="pi pi-plus" class="mr-2" />
        </template>

        <template #end>
          <Button icon="pi pi-print" class="p-button-danger" />
        </template>
      </Toolbar>
    </template>
  </card-style2-component>
</template>
