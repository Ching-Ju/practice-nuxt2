export default {
  state () {
    return {
      darkTheme: true,
      theme: 'bootstrap4-dark-blue'
    }
  },

  getters: {
    logoColor (state) {
      return state.darkTheme ? 'white' : 'dark'
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
