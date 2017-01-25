<template>
  <md-layout md-gutter md-flex="100">
  <md-whiteframe class="md-flex-100">
    <md-input-container>
      <md-icon class="md-accent">filter_list</md-icon>
      <label class="md-accent">Filter alerts ...</label>
      <md-input></md-input>
    </md-input-container>
    <md-list class="md-flex-100 md-triple-line">
      <alert-item v-for="alert in alerts" :alert="alert"></alert-item>
    <md-list>
  </md-whiteframe>
  </md-layout>
</template>

<script type="text/javascript">
  import AlertCard from './AlertCard.vue'
  import AlertItem from './AlertItem.vue'

  export default {
    name: 'alert-list',
    data() {
      return {}
    },
    props: {
      alerts: {type: Array, required: true}
    },
    components: {
      AlertCard,
      AlertItem
    }
  }
</script>
