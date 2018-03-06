import Vue from 'vue';
import VueRouter from 'vue-router';
import Lander from '@/components/Lander';
import Survey from '@/components/Survey';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Lander',
      component: Lander,
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.authorized) {
      next();
    } else {
      next({
        path: '/',
      });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
