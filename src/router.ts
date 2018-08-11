import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // treat all other paths as unknown and redirect
		{
      path: '*',
      redirect: '/'
    }
  ]
});

/*const user = store.getters.user;*/

//Auth guard for restricted access
/*router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
	  // this route requires auth, check if logged in
	  // if not, redirect to login page.
	  if (!user || isEmpty(user)) {
			const payload = {
				text:'You must be logged in!',
				type:'error'
			}
			store.dispatch('setAlert', payload);
			next({
			  path: '/login',
			  query: { redirect: to.fullPath } //not sure how we could access this redirect value but would be nice
			})
	  } else {
			next()
	  }
	} else {
	  next() // make sure to always call next()!
	}
});*/

export default router
