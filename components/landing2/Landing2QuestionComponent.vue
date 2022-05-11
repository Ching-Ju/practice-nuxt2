<template>
  <div class="grid">
    <div class="col-12 text-center">
      <h1 v-animate:animate__rubberBand="100" class="title-style">
        Questions
      </h1>
    </div>

    <div class="col-12">
      <Card v-for="(i, index) in 5" :key="index" class="mx-4 mb-3">
        <div slot="title" v-animate:animate__rotateInDownLeft="100">
          Q{{ i }}: Question
        </div>

        <div slot="content" v-animate:animate__rotateInDownLeft="100">
          Answer...
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.p-card {
  background-color: #1a1a1a;
}

.title-style {
  background: -webkit-linear-gradient(#a86800, #efca72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
