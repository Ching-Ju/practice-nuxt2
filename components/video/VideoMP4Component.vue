<template>
  <BlockViewer header="MP4 [type='video/mp4']" :code="code">
    <video
      id="videoMP4"
      class="video-js vjs-default-skin"
      playsinline="playsinline"
      controls="controls"
      preload="auto"
      data-setup="{}"
      style="width: 100%; height: 100vh; object-fit: fill;"
    >
      <source :src="$_r('/videos/mov_bbb.mp4')" type="video/mp4">
    </video>
  </BlockViewer>
</template>

<script setup>
import videojs from 'video.js'
import { ref, onMounted, onUnmounted } from '@nuxtjs/composition-api'

const player = ref(null)

onMounted(() => {
  player.value = videojs('videoMP4')
})

onUnmounted(() => {
  player.value.dispose()
})

const code = `import videojs from 'video.js'
import { ref, onMounted, onUnmounted } from '@nuxtjs/composition-api'

const player = ref(null)

onMounted(() => {
  player.value = videojs('videoMP4')
})

onUnmounted(() => {
  player.value.dispose()
})

<video
  id="videoMP4"
  class="video-js vjs-default-skin"
  playsinline="playsinline"
  controls="controls"
  preload="auto"
  data-setup="{}"
  style="width: 100%; height: 100vh; object-fit: fill;"
>
  <source src="/videos/mov_bbb.mp4" type="video/mp4">
</video>`
</script>
