export default {
  state () {
    return {
      darkTheme: false
    }
  },

  getters: {
    logoColor (state) {
      return state.darkTheme ? 'white' : 'dark'
    }
  }
}
