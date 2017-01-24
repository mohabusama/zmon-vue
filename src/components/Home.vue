<template>
  <md-layout md-gutter id="home">
    <md-layout md-flex-offset="33" md-flex="33">

      <md-layout md-flex-offset="25"  md-flex="100">
        <span class="md-headline">ZMON Vue.js Prototype</span>
      </md-layout>

      <md-layout md-flex-offset="33">
        <md-button md-flex-offset="33" class="md-primary md-raised" v-on:click="goToDashboard">Start Here!</md-button>
      </md-layout>

    </md-layout>
  </md-layout>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {}
    },
    methods: {
      goToDashboard () {
        this.$router.push({name: 'dashboard'})
      }
    }
  }
</script>

<style scoped>
  #home {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 180px;
  }

</style>
