/* eslint-disable vue/multi-word-component-names */
import Vue from 'vue'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import BadgeDirective from 'primevue/badgedirective'
import StyleClass from 'primevue/styleclass'

import AutoComplete from 'primevue/autocomplete'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Chart from 'primevue/chart'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Toast from 'primevue/toast'

Vue.component('AutoComplete', AutoComplete)
Vue.component('Badge', Badge)
Vue.component('Button', Button)
Vue.component('Calendar', Calendar)
Vue.component('Chart', Chart)
Vue.component('Checkbox', Checkbox)
Vue.component('Column', Column)
Vue.component('DataTable', DataTable)
Vue.component('InputSwitch', InputSwitch)
Vue.component('InputText', InputText)
Vue.component('Menu', Menu)
Vue.component('Password', Password)
Vue.component('RadioButton', RadioButton)
Vue.component('Toast', Toast)

Vue.directive('tooltip', Tooltip)
Vue.directive('ripple', Ripple)
Vue.directive('badge', BadgeDirective)
Vue.directive('styleclass', StyleClass)
