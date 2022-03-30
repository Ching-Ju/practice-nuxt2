export default {
  state () {
    return {
      darkTheme: true,
      theme: 'bootstrap4-dark-blue'
    }
  },

  getters: {
    bannerImage (state) {
      return state.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png'
    },

    footerImage (state) {
      return state.darkTheme ? '/images/logo-white.svg' : '/images/logo-dark.svg'
    },

    logoColor (state) {
      return state.darkTheme ? 'white' : 'dark'
    },

    topbarImage (state) {
      return state.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg'
    }
  },

  mutations: {
    setDarkTheme (state, payload) {
      state.darkTheme = payload
    },

    setTheme (state, payload) {
      state.theme = payload
    }
  }
}
