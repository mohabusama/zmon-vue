<template>
  <md-layout md-flex="100" md-flex-offset="0">
    <md-whiteframe class="md-flex-100" id="detail-container">
      <md-layout md-flex="100">
        <md-layout md-row>
          <span class="md-display-2">{{ alert.name }}</span>
        </md-layout>

        <md-layout md-row md-flex="100" class="detail-row">
          <entity-group v-for="(appEntities, application) in groupedEntities" :entities="appEntities"></entity-group>
        </md-layout>

        <md-layout md-row md-flex="100" class="detail-row"></md-layout>

      </md-layout>

    </md-whiteframe>
  </md-layout>
</template>

<script type="text/javascript">
  import _ from 'lodash'
  import EntityGroup from './EntityGroup.vue'

  export default {
    name: 'alert-detail',
    data() {
      return {
        entities: [],
        groupedEntities: {}
      }
    },
    props: {
      alert: {
        type: Object,
        required: true
      }
    },
    components: {
      EntityGroup
    },
    methods: {
      getEntities: function() {
        let vm = this
        this.$zmon
          .getEntities()
          .then(function (resp) {
            vm.entities = resp.data
            vm.groupedEntities = _.groupBy(vm.entities, 'application_id')
            console.log(vm.groupedEntities)
          })
      }
    },
    created: function() {
      this.getEntities()
      // this.poll = setInterval(this.getEntities, 5000)
    },
    destroyed: function() {
      clearInterval(this.poll)
    }
  }
</script>

<style type="text/css" scoped="">
  #detail-container {
    padding: 20px 0px 0px 20px;
  }

  .detail-row {
    margin-top: 20px;
  }
</style>
