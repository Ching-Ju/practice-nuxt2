<template>
  <div>
    <div class="col-12 text-center">
      <h1 v-animate:animate__rubberBand="100" class="title-style">
        Cooperates
      </h1>
    </div>

    <div class="flex justify-content-center animate__shakeX">
      <img v-animate:animate__flipInY="100" :src="$_r('/images/cooperate.png')" width="120px">
      <img v-animate:animate__flipInY="100" :src="$_r('/images/cooperate.png')" width="120px">
      <img v-animate:animate__flipInY="100" :src="$_r('/images/cooperate.png')" width="120px">
    </div>
    <div class="flex justify-content-center" style="transform: translateY(-50%)">
      <img v-animate:animate__flipInY="100" :src="$_r('/images/cooperate.png')" width="120px">
      <img v-animate:animate__flipInY="100" :src="$_r('/images/cooperate.png')" width="120px">
    </div>
    <div class="flex justify-content-center" style="transform: translateY(-100%)">
      <img v-animate:animate__flipInY="100" :src="$_r('/images/cooperate.png')" width="120px">
    </div>
  </div>
</template>

<style scoped>
.title-style {
  background: -webkit-linear-gradient(#a86800, #efca72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
