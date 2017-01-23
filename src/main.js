import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import App from './App.vue'
import Routes from './routes'


Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({routes: Routes})

const app = new Vue({
    router,
    render: h => h(App)
})

app.$mount('#app')
