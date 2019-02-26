import VueRouter from 'vue-router'
import Home from  './page/Home.vue'
import AboutUs from  './page/AboutUs.vue'
import Services from  './page/Services.vue'
import Portfolio from  './page/Portfolio.vue'
import Team from  './page/Team.vue'
import Contacts from  './page/Сontacts.vue'
import Blog from  './page/Blog.vue'
import Article from  './page/Article.vue'
import Menu from  './page/Menu.vue'

export default new VueRouter ({
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/aboutUs',
                component: AboutUs
            },
            {
                path: '/services',
                component: Services
            },
            {
                path: '/portfolio',
                component: Portfolio
            },
            {
                path: '/team',
                component: Team
            },
            {
                path: '/contacts',
                component: Contacts
            },
            {
                path: '/blog',
                component: Blog
            }
            ],
        mode: 'history',
})