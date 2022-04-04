<template>
  <card-style2-component card-title="TabView">
    <template #cardBody>
      <TabView>
        <div v-for="(i, index) in 3" :key="index">
          <TabPanel :header="`Header ${index}`">
            <p class="line-height-3 m-0">
              Active index {{ index }}
            </p>
          </TabPanel>
        </div>
      </TabView>
    </template>
  </card-style2-component>
</template>
