<template>
  <BlockViewer header="TabView" :code="code">
    Active: {{ active }}
    <div v-for="(i, index1) in 5" :key="index1">
      <TabViewComponent :active-index="active" @tab-click="active = $event.index">
        <div v-for="(j, index) in 3" :key="index">
          <TabPanel :header="`Header ${index}`">
            <p class="line-height-3 m-0 h-12rem">
              Active index {{ index }}
            </p>
          </TabPanel>
        </div>
      </TabViewComponent>
    </div>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'
const active = ref(1)

const code = `import { ref } from '@nuxtjs/composition-api'
const active = ref(1)

Active: {{ active }}
<div v-for="(i, index1) in 5" :key="index1">
  <TabViewComponent :active-index="active" @tab-click="active = $event.index">
    <div v-for="(j, index) in 3" :key="index">
      <TabPanel :header="\`Header \${index}\`">
        <p class="line-height-3 m-0 h-12rem">
          Active index {{ index }}
        </p>
      </TabPanel>
    </div>
  </TabViewComponent>
</div>`
</script>
