import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import functions from './../functions/functions'
import Login from '@/components/Login'
import Registro from '@/components/Registro'
import FormaRegistro from '@/components/FormaRegistro'
import Verificacion from '@/components/Verificacion'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/FormaRegistro',
      name: 'FormaRegistro',
      component: FormaRegistro,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Verificacion',
      name: 'Verificacion',
      component: Verificacion,
      meta: {
        requiresAuth: true,
        requiresRegistro: true
      }
    },
    {
      path: '*',
      name: '404',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = functions.checkForUser();
  let emailVerified = functions.checkEmailVerified();
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let requiresEmail = to.matched.some(record => record.meta.requiresEmail);
  let requiresRegistro = to.matched.some(record => record.meta.requiresRegistro);
  
  if(requiresAuth && !currentUser) next({name: 'Login'})
  else if (requiresAuth && requiresRegistro && !emailVerified) next({name: 'FormaRegistro'})
  else next()
})

export default router