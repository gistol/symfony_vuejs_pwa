import Vue from 'vue'
import Router from 'vue-router'
import startseite from '../components/startseite'
import reservierung from '../components/reservierung'

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'startseite',
            component: startseite
        },
        {
            path: '/reservierung',
            name: 'reservierung',
            component: reservierung
        },
        {
            path: '*',
            redirect: '/home'
        }]
})
