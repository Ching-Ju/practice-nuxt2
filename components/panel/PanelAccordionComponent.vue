<template>
  <BlockViewer header="AccordionPanel" :code="code">
    Active: {{ active }}
    <Accordion :active-index="active" @tab-open="active = $event.index">
      <AccordionTab v-for="(i, index) in 3" :key="index" :header="`Header ${index}`">
        <p class="line-height-3 m-0">
          Active index {{ index }}
        </p>
      </AccordionTab>
    </Accordion>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'
const active = ref(1)

const code = `import { ref } from '@nuxtjs/composition-api'
const active = ref(1)

Active: {{ active }}
<Accordion :active-index="active" @tab-open="active = $event.index">
  <AccordionTab v-for="(i, index) in 3" :key="index" :header="\`Header \${index}\`">
    <p class="line-height-3 m-0">
      Active index {{ index }}
    </p>
  </AccordionTab>
</Accordion>`
</script>
