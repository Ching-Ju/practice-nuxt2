<template>
  <div class="grid">
    <div class="col-12 text-center">
      <h1>Questions</h1>
    </div>

    <div class="col-12">
      <Card v-for="(i, index) in 5" :key="index" class="mx-4 mb-3">
        <template #title>
          Q{{ i }}: Question
        </template>

        <template #content>
          Answer...
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.p-card {
  background-color: #1a1a1a;
}
</style>
