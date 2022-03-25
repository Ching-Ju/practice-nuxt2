export default function () {
  function logout () {
    this.$auth.logout()
  }

  return {
    logout
  }
}
