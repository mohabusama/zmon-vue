<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Home,
    Dashboard,
  }
}
</script>
