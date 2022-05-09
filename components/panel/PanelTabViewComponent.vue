<template>
  <BlockViewer header="TabView" :code="code">
    Active: {{ active }}
    <TabView :active-index="active" @tab-click="active = $event.index">
      <div v-for="(i, index) in 3" :key="index">
        <TabPanel :header="`Header ${index}`">
          <p class="line-height-3 m-0">
            Active index {{ index }}
          </p>
        </TabPanel>
      </div>
    </TabView>
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'
const active = ref(1)

const code = `import { ref } from '@nuxtjs/composition-api'
const active = ref(1)

Active: {{ active }}
<TabView :active-index="active" @tab-click="active = $event.index">
  <div v-for="(i, index) in 3" :key="index">
    <TabPanel :header="\`Header \${index}\`">
      <p class="line-height-3 m-0">
        Active index {{ index }}
      </p>
    </TabPanel>
  </div>
</TabView>`
</script>
