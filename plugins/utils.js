export default ({ app }, inject) => {
  inject('_r', (url) => {
    if (url.charAt(0) === '/') {
      return app.router.options.base + url.substr(1)
    }

    return url
  })
}
