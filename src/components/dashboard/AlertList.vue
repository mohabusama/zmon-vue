<template>
  <md-layout md-gutter md-flex="100">
  <md-whiteframe class="md-flex-100 scrollable">
    <md-input-container>
      <md-icon class="md-accent">filter_list</md-icon>
      <label class="md-accent">Filter alerts ...</label>
      <md-input></md-input>
    </md-input-container>
    <div>
      <md-list class="md-flex-100 md-triple-line absolute">
        <alert-item v-for="alert in alerts" :alert="alert" :selected="alert.id === selected.id" v-on:selectAlert="raise"></alert-item>
      <md-list>
    </div>
  </md-whiteframe>
  </md-layout>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  import AlertCard from './AlertCard.vue'
  import AlertItem from './AlertItem.vue'

  export default {
    name: 'alert-list',
    data() {
      return {}
    },
    props: {
      alerts: {type: Array, required: true},
      selected: {type: Object, required: true},
    },
    computed: {},
    components: {
      AlertCard,
      AlertItem
    },
    methods: {
      raise: function(alert) {
        this.$emit('selectAlert', alert)
      }
    },
    created: function() {
      console.log(this.selected)
      console.log(this.selected.id)
    }
  }
</script>

<style type="text/css" scoped>
  .absolute {
    position: absolute;
  }
  .scrollable {
    overflow: auto;
  }
</style>
