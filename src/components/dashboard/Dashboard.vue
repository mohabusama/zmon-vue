<template>
  <layout class="md-flex-100">
    <md-layout md-flex="25">
      <alert-list :alerts="alerts" :selected="selectedAlert" v-on:selectAlert="showAlert"></alert-list>
    </md-layout>
    <md-layout>
      <alert-detail :alert="selectedAlert"></alert-detail>
    </md-layout>
  </layout>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Layout from '../layout/Layout.vue'
  import AlertList from './AlertList.vue'
  import AlertDetail from './AlertDetail.vue'

  export default {
    name: 'dashboard',
    // DATA
    data () {
        return {
          alerts: [],
          selectedAlert: {},
        }
    },
    // COMPONENTS
    components: {
      Layout,
      AlertList,
      AlertDetail,
    },
    // METHODS
    methods: {
      getAlerts: function() {
        let vm = this

        this.$zmon
          .getAllAlerts()
          .then(function(resp) {
            let alerts = resp.data

            let calls = []
            alerts.forEach(function(alert, idx) {
              calls.push(
                vm.getEntities()
                .then(function(resp){
                  alert.entities_count = resp.data.length
                })
              )
            })

            vm.$zmon
              .all(calls)
              .then(function(){
                vm.alerts = alerts
                vm.showAlert(alerts[0])
              })
          })
      },
      getEntities: function(callback) {
        return this.$zmon.getEntities()
      },
      showAlert: function(alert) {
        console.log(alert)
        this.selectedAlert = alert
      }
    },
    // VUE EVENTS
    created: function() {
      this.getAlerts()
      // this.poll = setInterval(this.getAlerts, 5000)
    },
    destroyed: function() {
      clearInterval(this.poll)
    }
  }
</script>
