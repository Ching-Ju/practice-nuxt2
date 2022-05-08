<template>
  <BlockViewer header="HLS [type='application/x-mpegURL']" :code="code">
    <video
      id="videoHLS"
      class="video-js vjs-default-skin"
      playsinline="playsinline"
      controls="controls"
      preload="auto"
      data-setup="{}"
      style="width: 100%; height: 100vh; object-fit: fill;"
    >
      <source src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" type="application/x-mpegURL">
    </video>
  </BlockViewer>
</template>

<script setup>
import videojs from 'video.js'
import { ref, onMounted, onUnmounted } from '@nuxtjs/composition-api'

const player = ref(null)

onMounted(() => {
  player.value = videojs('videoHLS')
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
  id="videoHLS"
  class="video-js vjs-default-skin"
  playsinline="playsinline"
  controls="controls"
  preload="auto"
  data-setup="{}"
  style="width: 100%; height: 100vh; object-fit: fill;"
>
  <source src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" type="application/x-mpegURL">
</video>`
</script>
