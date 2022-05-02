<template>
  <BlockViewer header="TabView" :code="code">
    <TabView :active-index="1">
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
const code = `<TabView>
  <div v-for="(i, index) in 3" :key="index">
    <TabPanel :header="\`Header \${index}\`">
      <p class="line-height-3 m-0">
        Active index {{ index }}
      </p>
    </TabPanel>
  </div>
</TabView>`
</script>
