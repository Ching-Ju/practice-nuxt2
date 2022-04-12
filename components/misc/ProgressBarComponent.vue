<template>
  <card-style2-component card-title="ProgressBar">
    <template #cardBody>
      <div class="grid">
        <div class="col">
          <ProgressBar :value="50" />
        </div>

        <div class="col">
          <ProgressBar :value="50" :show-value="false" />
        </div>
      </div>
    </template>
  </card-style2-component>
</template>
