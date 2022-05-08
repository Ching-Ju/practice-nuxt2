import { ref } from '@nuxtjs/composition-api'

export default function () {
  const windowHeight = ref(window.innerHeight)
  const windowWidth = ref(window.innerWidth)

  window.addEventListener('resize', onResize)

  function onResize () {
    windowHeight.value = window.innerHeight
    windowWidth.value = window.innerWidth
  }

  return {
    windowHeight,
    windowWidth
  }
}
