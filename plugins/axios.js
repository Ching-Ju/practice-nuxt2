export default function ({ $axios, $auth, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 401 || error.response.status === 419) {
      if ($auth.user || $auth.loggedIn) {
        $auth.logout()
      }

      redirect('/login')
    }
  })
}
