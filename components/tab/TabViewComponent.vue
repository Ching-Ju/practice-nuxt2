<template>
  <div :class="contentClasses">
    <div class="p-tabview-nav-container">
      <button
        v-if="scrollable && !backwardIsDisabled"
        ref="prevBtn"
        v-ripple
        :class="prevButtonClasses"
        :disabled="backwardIsDisabled"
        type="button"
        @click="navBackward"
      >
        <span class="pi pi-chevron-left" />
      </button>
      <div ref="content" class="p-tabview-nav-content" @scroll="onScroll">
        <ul ref="nav" class="p-tabview-nav" role="tablist">
          <li
            v-for="(tab, i) of tabs"
            :key="getKey(tab, i)"
            role="presentation"
            :class="[{ 'p-highlight': (d_activeIndex === i), 'p-disabled': isTabDisabled(tab) }]"
          >
            <a
              v-ripple
              role="tab"
              class="p-tabview-nav-link"
              :tabindex="isTabDisabled(tab) ? null : '0'"
              :aria-selected="d_activeIndex"
              @click="onTabClick($event, i)"
              @keydown="onTabKeydown($event, i)"
            >
              <span v-if="tab.header" class="p-tabview-title">{{ tab.header }}</span>
              <TabPanelHeaderSlot v-if="tab.$scopedSlots.header" :tab="tab" />
            </a>
          </li>
          <li ref="inkbar" class="p-tabview-ink-bar" />
        </ul>
      </div>
      <button
        v-if="scrollable && !forwardIsDisabled"
        ref="nextBtn"
        v-ripple
        :class="nextButtonClasses"
        :disabled="forwardIsDisabled"
        type="button"
        @click="navForward"
      >
        <span class="pi pi-chevron-right" />
      </button>
    </div>
    <div class="p-tabview-panels">
      <slot />
    </div>
  </div>
</template>

<script>
import DomHandler from 'primevue/utils/DomHandler'
import ObjectUtils from 'primevue/utils/ObjectUtils'

const TabPanelHeaderSlot = {
  functional: true,
  props: {
    tab: {
      type: null,
      default: null
    }
  },
  render (createElement, context) {
    return [context.props.tab.$scopedSlots.header()]
  }
}

export default {
  components: {
    TabPanelHeaderSlot
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      allChildren: [],
      d_activeIndex: this.activeIndex,
      backwardIsDisabled: true,
      forwardIsDisabled: false
    }
  },
  computed: {
    contentClasses () {
      return ['p-tabview p-component', { 'p-tabview-scrollable': this.scrollable }]
    },
    prevButtonClasses () {
      return ['p-tabview-nav-prev p-tabview-nav-btn p-link', { 'p-disabled': this.backwardIsDisabled }]
    },
    nextButtonClasses () {
      return ['p-tabview-nav-next p-tabview-nav-btn p-link', { 'p-disabled': this.forwardIsDisabled }]
    },
    tabs () {
      let tabs = []

      if (this.allChildren) {
        tabs = this.allChildren.filter(child => child.$vnode.tag.includes('tabpanel'))
      }

      return tabs
    }
  },
  watch: {
    activeIndex (newValue) {
      this.d_activeIndex = newValue

      this.updateScrollBar(newValue)
    }
  },
  mounted () {
    this.allChildren = this.$children
    this.updateInkBar()
  },
  updated () {
    this.updateInkBar()
  },
  methods: {
    onTabClick (event, i) {
      if (!this.isTabDisabled(this.tabs[i]) && i !== this.d_activeIndex) {
        this.d_activeIndex = i
        this.$emit('update:activeIndex', this.d_activeIndex)

        this.$emit('tab-change', {
          originalEvent: event,
          index: i
        })

        this.updateScrollBar(i)
      }

      this.$emit('tab-click', {
        originalEvent: event,
        index: i
      })
    },
    onTabKeydown (event, i) {
      if (event.which === 13) {
        this.onTabClick(event, i)
      }
    },
    updateInkBar () {
      if (this.$refs.nav.children.length > 1) {
        const tabHeader = this.$refs.nav.children[this.d_activeIndex]
        this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px'
        this.$refs.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px'
      }
    },
    updateScrollBar (index) {
      // const tabHeader = this.$refs.nav.children[index]
      // tabHeader.scrollIntoView({ block: 'nearest' })
    },
    updateButtonState () {
      const content = this.$refs.content
      const { scrollLeft, scrollWidth } = content
      const width = DomHandler.getWidth(content)
      this.backwardIsDisabled = scrollLeft === 0
      this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width
    },
    getKey (tab, index) {
      return tab.header ? ObjectUtils.resolveFieldData(tab, tab.header) : index
    },
    isTabDisabled (tab) {
      return tab.disabled
    },
    onScroll (event) {
      this.scrollable && this.updateButtonState()
      event.preventDefault()
    },
    getVisibleButtonWidths () {
      const { prevBtn, nextBtn } = this.$refs
      return [prevBtn, nextBtn].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0)
    },
    navBackward () {
      const content = this.$refs.content
      const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths()
      const pos = content.scrollLeft - width
      content.scrollLeft = pos <= 0 ? 0 : pos
    },
    navForward () {
      const content = this.$refs.content
      const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths()
      const pos = content.scrollLeft + width
      const lastPos = content.scrollWidth - width
      content.scrollLeft = pos >= lastPos ? lastPos : pos
    }
  }
}
</script>

<style>
.p-tabview-nav-container {
  position: relative;
}

.p-tabview-scrollable .p-tabview-nav-container {
  overflow: hidden;
}

.p-tabview-nav-content {
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overscroll-behavior: contain auto;
}

.p-tabview-nav {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex: 1 1 auto;
}

.p-tabview-nav-link {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  overflow: hidden;
}

.p-tabview-ink-bar {
  display: none;
  z-index: 1;
}

.p-tabview-nav-link:focus {
  z-index: 1;
}

.p-tabview-title {
  line-height: 1;
  white-space: nowrap;
}

.p-tabview-nav-btn {
  position: absolute;
  top: 0;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-tabview-nav-prev {
  left: 0;
}

.p-tabview-nav-next {
  right: 0;
}

.p-tabview-nav-content::-webkit-scrollbar {
  display: none;
}
</style>
