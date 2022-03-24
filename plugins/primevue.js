import Vue from 'vue'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import BadgeDirective from 'primevue/badgedirective'
import StyleClass from 'primevue/styleclass'

Vue.directive('tooltip', Tooltip)
Vue.directive('ripple', Ripple)
Vue.directive('badge', BadgeDirective)
Vue.directive('styleclass', StyleClass)
