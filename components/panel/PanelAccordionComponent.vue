<template>
  <BlockViewer header="AccordionPanel" :code="code">
    <Accordion :active-index="1">
      <AccordionTab v-for="(i, index) in 3" :key="index" :header="`Header ${index}`">
        <p class="line-height-3 m-0">
          Active index {{ index }}
        </p>
      </AccordionTab>
    </Accordion>
  </BlockViewer>
</template>

<script setup>
const code = `<Accordion :active-index="1">
  <AccordionTab v-for="(i, index) in 3" :key="index" :header="\`Header \${index}\`">
    <p class="line-height-3 m-0">
      Active index {{ index }}
    </p>
  </AccordionTab>
</Accordion>`
</script>
