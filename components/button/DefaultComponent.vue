<template>
  <card-style2-component card-title="Default">
    <template #cardBody>
      <div class="mb-4">
        <Button label="Submit" class="mr-2" />
        <Button label="disabled='true'" class="mr-2" :disabled="true" />
        <Button label="p-button-link" class="p-button-link mr-2" />
      </div>

      <div v-for="(style, index) in ['', 'p-button-rounded', 'p-button-outlined']" :key="index">
        <h5 v-if="style !== ''">
          {{ style }}
        </h5>
        <Button label="Primary" :class="`${style} mr-2 mb-2`" />
        <Button label="p-button-secondary" :class="`${style} p-button-secondary mr-2 mb-2`" />
        <Button label="p-button-success" :class="`${style} p-button-success mr-2 mb-2`" />
        <Button label="p-button-info" :class="`${style} p-button-info mr-2 mb-2`" />
        <Button label="p-button-warning" :class="`${style} p-button-warning mr-2 mb-2`" />
        <Button label="p-button-danger" :class="`${style} p-button-danger mr-2 mb-2`" />
      </div>
    </template>
  </card-style2-component>
</template>
