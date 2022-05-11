<template>
  <div class="grid">
    <div class="col-12">
      <div v-animate:animate__fadeInLeft="100" class="grid">
        <div
          v-for="(option, index) in options"
          :key="index"
          :class="{ 'col-6': true, 'md:col-3': true, 'text-center': true, 'p-3': true, 'cursor-pointer': true, 'active': index == selected, 'in-active': index != selected }"
          @click="selected = index"
        >
          <span class="text-xl font-semibold">{{ option.name }}</span>
        </div>
      </div>
    </div>

    <div
      v-for="(option, index) in options"
      v-show="index == selected"
      :key="index"
      v-animate:animate__fadeInLeft="100"
      class="col-12 px-4"
    >
      <div class="col-4 p-0">
        <div class="trapezoid pl-3 text-2xl border-round-top">
          Option
        </div>
      </div>

      <Card
        style="border-top-left-radius: 0;"
      >
        <div slot="title">
          {{ option.name }}
        </div>

        <div slot="content">
          <div class="flex justify-content-between flex-wrap card-container green-container">
            <div class="flex align-items-center justify-content-center">
              1
            </div>
            <div class="flex align-items-center justify-content-center">
              <button class="copy-button border-0 p-2" @click="copy">
                Copy
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <Dialog :visible.sync="copyModal" :modal="true" :show-header="false">
      <div class="w-full m-0">
        <div>
          <i class="pi pi-check" style="font-size: 3rem" />
        </div>
        <div>
          Copied!
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const selected = ref(0)
const copyModal = ref(false)

const options = [
  { name: 'Option1' },
  { name: 'Option2' },
  { name: 'Option3' },
  { name: 'Option4' }
]

function copy () {
  copyModal.value = true

  setTimeout(() => {
    copyModal.value = false
  }, 1000)
}
</script>

<style scoped>
.active {
  color: #e1b85d;
  background-color: #ab6d06;
}

.in-active {
  color: #7a663e;
  background-color:#222122;
}

.p-card {
  background-color: #1a1a1a;
}

.copy-button {
  background: linear-gradient(180deg, #a86800, #efca72);
  border-radius: 0.7rem;
}

.trapezoid {
  border-bottom: 40px solid #1a1a1a;
  border-left: 0px solid transparent;
  border-right: 25px solid transparent;
  height: 0px;
  line-height: 40px;
  vertical-align: middle;
}
</style>

<style lang="scss" scoped>
::v-deep {
  .p-dialog {
    border: 0;
  }

  .p-dialog .p-dialog-content {
    background-color: rgba(0,0,0,0.6);
    border-radius: 10px;
    padding: 20px;
    color: white;
  }
}
</style>
