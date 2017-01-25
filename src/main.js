import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import App from './App.vue'
import Routes from './routes'
import Zmon from './plugins/zmon'


Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(Zmon, {url: 'http://localhost:3003/rest'})

Vue.material.registerTheme('default', {
  primary: 'orange',
})


const router = new VueRouter({routes: Routes})

const app = new Vue({
    router,
    render: h => h(App)
})

app.$mount('#app')
