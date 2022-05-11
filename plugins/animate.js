import Vue from 'vue'

Vue.directive('animate', function (el, binding) {
  el.classList.add('animate__animated')
  window.addEventListener('scroll', scroll)
  scroll()

  function scroll () {
    const clientHeight = document.documentElement.clientHeight
    const elementHeight = el.getBoundingClientRect().top
    const elementAnimate = binding.arg
    const delay = binding.value
    let elementTimeOut = null

    if (!elementAnimate) {
      return
    }

    if (elementHeight < clientHeight) {
      if (delay) {
        elementTimeOut = setTimeout(() => {
          el.classList.add(elementAnimate)
          el.style.opacity = 1
        }, delay)
      } else {
        el.classList.add(elementAnimate)
        el.style.opacity = 1
      }
    } else {
      if (elementTimeOut) {
        window.clearTimeout(elementTimeOut)
      }
      el.classList.remove(elementAnimate)
      el.style.opacity = 0
    }
  }
})
