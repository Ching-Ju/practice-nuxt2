<template>
  <BlockViewer header="Default" :code="code">
    <div class="grid">
      <Splitter style="height: 300px; width: 100%" class="mb-5">
        <SplitterPanel :size="40" :min-size="10" style="overflow: scroll; width: 50%">
          <p class="col m-3">
            Left
          </p>
        </SplitterPanel>

        <SplitterPanel :size="60" style="overflow: scroll; width: 50%">
          <Splitter layout="vertical">
            <SplitterPanel :size="15">
              <p class="col m-3">
                Right Top
              </p>
            </SplitterPanel>

            <SplitterPanel :size="85">
              <p class="col m-3">
                Right Bottom
              </p>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
  </BlockViewer>
</template>

<script setup>
const code = `<div class="grid">
  <Splitter style="height: 300px; width: 100%" class="mb-5">
    <SplitterPanel :size="40" :min-size="10" style="overflow: scroll; width: 50%">
      <p class="col m-3">
        Left
      </p>
    </SplitterPanel>

    <SplitterPanel :size="60" style="overflow: scroll; width: 50%">
      <Splitter layout="vertical">
        <SplitterPanel :size="15">
          <p class="col m-3">
            Right Top
          </p>
        </SplitterPanel>

        <SplitterPanel :size="85">
          <p class="col m-3">
            Right Bottom
          </p>
        </SplitterPanel>
      </Splitter>
    </SplitterPanel>
  </Splitter>
</div>`
</script>
