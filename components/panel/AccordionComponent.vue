<template>
  <card-style2-component card-title="AccordionPanel">
    <template #cardBody>
      <Accordion :active-index="1">
        <AccordionTab v-for="(i, index) in 3" :key="index" :header="`Header ${index}`">
          <p class="line-height-3 m-0">
            Active index {{ index }}
          </p>
        </AccordionTab>
      </Accordion>
    </template>
  </card-style2-component>
</template>
