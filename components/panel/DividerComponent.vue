<template>
  <card-style2-component card-title="Divider">
    <template #cardBody>
      <div class="grid">
        <div class="col-5 flex align-items-center justify-content-center">
          Left
        </div>

        <div class="col-2">
          <Divider layout="vertical">
            <b>OR</b>
          </Divider>
        </div>

        <div class="col-5 align-items-center justify-content-center">
          Right Top

          <Divider layout="horizontal" align="center">
            <span class="p-tag">Badge</span>
          </Divider>

          Right Middle

          <Divider align="right">
            <Button label="Button" icon="pi pi-search" class="p-button-outlined" />
          </Divider>

          Right Bottom
        </div>
      </div>
    </template>
  </card-style2-component>
</template>
