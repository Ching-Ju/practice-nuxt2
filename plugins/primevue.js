/* eslint-disable vue/multi-word-component-names */
import Vue from 'vue'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import BadgeDirective from 'primevue/badgedirective'
import StyleClass from 'primevue/styleclass'

import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import AutoComplete from 'primevue/autocomplete'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Badge from 'primevue/badge'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import Chart from 'primevue/chart'
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip'
import Chips from 'primevue/chips'
import ColorPicker from 'primevue/colorpicker'
import Column from 'primevue/column'
import ConfirmPopup from 'primevue/confirmpopup'
import ConfirmationService from 'primevue/confirmationservice'
import ContextMenu from 'primevue/contextmenu'
import DataTable from 'primevue/datatable'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Dropdown from 'primevue/dropdown'
import Fieldset from 'primevue/fieldset'
import FileUpload from 'primevue/fileupload'
import Galleria from 'primevue/galleria'
import ImagePreview from 'primevue/imagepreview'
import InlineMessage from 'primevue/inlinemessage'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Knob from 'primevue/knob'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import MegaMenu from 'primevue/megamenu'
import Message from 'primevue/message'
import Menubar from 'primevue/menubar'
import MultiSelect from 'primevue/multiselect'
import OrderList from 'primevue/orderlist'
import OverlayPanel from 'primevue/overlaypanel'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Password from 'primevue/password'
import PickList from 'primevue/picklist'
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Rating from 'primevue/rating'
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop'
import SelectButton from 'primevue/selectbutton'
import Skeleton from 'primevue/skeleton'
import Sidebar from 'primevue/sidebar'
import Slider from 'primevue/slider'
import SplitButton from 'primevue/splitbutton'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Steps from 'primevue/steps'
import TabMenu from 'primevue/tabmenu'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import Timeline from 'primevue/timeline'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ToggleButton from 'primevue/togglebutton'
import Toolbar from 'primevue/toolbar'
import Tree from 'primevue/tree'
import TreeTable from 'primevue/treetable'

Vue.component('Accordion', Accordion)
Vue.component('AccordionTab', AccordionTab)
Vue.component('AutoComplete', AutoComplete)
Vue.component('Avatar', Avatar)
Vue.component('AvatarGroup', AvatarGroup)
Vue.component('Badge', Badge)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('Button', Button)
Vue.component('Calendar', Calendar)
Vue.component('Card', Card)
Vue.component('Carousel', Carousel)
Vue.component('Chart', Chart)
Vue.component('Checkbox', Checkbox)
Vue.component('Chip', Chip)
Vue.component('Chips', Chips)
Vue.component('ColorPicker', ColorPicker)
Vue.component('Column', Column)
Vue.component('ConfirmPopup', ConfirmPopup)
Vue.component('ConfirmationService', ConfirmationService)
Vue.component('ContextMenu', ContextMenu)
Vue.component('DataTable', DataTable)
Vue.component('DataView', DataView)
Vue.component('DataViewLayoutOptions', DataViewLayoutOptions)
Vue.component('Dialog', Dialog)
Vue.component('Divider', Divider)
Vue.component('Dropdown', Dropdown)
Vue.component('Fieldset', Fieldset)
Vue.component('FileUpload', FileUpload)
Vue.component('Galleria', Galleria)
Vue.component('ImagePreview', ImagePreview)
Vue.component('InlineMessage', InlineMessage)
Vue.component('InputMask', InputMask)
Vue.component('InputNumber', InputNumber)
Vue.component('InputSwitch', InputSwitch)
Vue.component('InputText', InputText)
Vue.component('Knob', Knob)
Vue.component('Listbox', Listbox)
Vue.component('MegaMenu', MegaMenu)
Vue.component('Menu', Menu)
Vue.component('Menubar', Menubar)
Vue.component('Message', Message)
Vue.component('MultiSelect', MultiSelect)
Vue.component('OrderList', OrderList)
Vue.component('OverlayPanel', OverlayPanel)
Vue.component('Panel', Panel)
Vue.component('PanelMenu', PanelMenu)
Vue.component('Password', Password)
Vue.component('PickList', PickList)
Vue.component('ProgressBar', ProgressBar)
Vue.component('RadioButton', RadioButton)
Vue.component('Rating', Rating)
Vue.component('ScrollPanel', ScrollPanel)
Vue.component('ScrollTop', ScrollTop)
Vue.component('SelectButton', SelectButton)
Vue.component('Skeleton', Skeleton)
Vue.component('Sidebar', Sidebar)
Vue.component('Slider', Slider)
Vue.component('SplitButton', SplitButton)
Vue.component('Splitter', Splitter)
Vue.component('SplitterPanel', SplitterPanel)
Vue.component('Steps', Steps)
Vue.component('TabMenu', TabMenu)
Vue.component('TabPanel', TabPanel)
Vue.component('TabView', TabView)
Vue.component('Tag', Tag)
Vue.component('Textarea', Textarea)
Vue.component('Timeline', Timeline)
Vue.component('Toast', Toast)
Vue.component('ToggleButton', ToggleButton)
Vue.component('Toolbar', Toolbar)
Vue.component('Tree', Tree)
Vue.component('TreeTable', TreeTable)

Vue.directive('tooltip', Tooltip)
Vue.directive('ripple', Ripple)
Vue.directive('badge', BadgeDirective)
Vue.directive('styleclass', StyleClass)

Vue.use(ConfirmationService)
Vue.use(ToastService)
