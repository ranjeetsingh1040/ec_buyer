export default function ({ app, redirect, route }) {
  // console.log("app.$auth.loggedIn", app.$auth.$state.user.usergroup_id);
  if (app.$auth.loggedIn) {
    if (app.$auth.$state.user.usergroup_id==3) {
      // console.log("app.$auth.loggedIn", app.$auth.$state.user);
      // store.dispatch('auth/logout')
      // .then(() => {
      //   redirect('auth-logout')
      // })
      // .catch(() => {})

      return redirect({
        name: 'auth-logout',
        query: {
          redirect: route.fullPath
        }
      })
    }
  }
}
