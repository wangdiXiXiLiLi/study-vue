import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Hero from '@/components/Hero'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/List',
            name: 'List',
            component: List
        },
        {
            path: '/Hero/:Heroname',
            name: 'Hero',
            component: Hero
        },
        {
            path: '/Setting',
            name : 'Setting',
            component: Setting
        }
    ]
})
