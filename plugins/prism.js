import Vue from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Prism', {
  props: {
    lang: {
      type: String,
      default: 'language-markup'
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  // eslint-disable-next-line no-template-curly-in-string
  template: '<div class="prism"><pre class="line-numbers" :class="`language-${lang}`"><code><slot></slot></code></pre></div>'
})
