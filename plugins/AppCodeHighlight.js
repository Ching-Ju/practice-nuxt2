import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'

export default function (el, binding) {
  const modifiers = binding.modifiers
  const value = binding.value

  if (modifiers.script || value === 'script') {
    el.className = 'language-javascript'
  } else if (modifiers.css || value === 'css') {
    el.className = 'language-css'
  } else {
    el.className = 'language-markup'
  }

  Prism.highlightElement(el.children[0])
}
