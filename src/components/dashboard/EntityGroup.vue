<template>
  <md-card class="entity-group-card md-flex-25">
    <md-card-header>
      <div class="md-title">{{ application }}</div>
      <div class="md-subhead">Total entities <md-chip>{{ entities.length }}</md-chip></div>
    </md-card-header>
    <md-card-content>
      <md-button class="md-raised" v-for="entity in entities"> {{ entity.id.slice(0, 10) }} </md-button>
    </md-card-content>
  </md-card>
</template>

<script type="text/javascript">
  export default {
    name: 'entity-group',
    data() {
      return {
      }
    },
    computed: {
      application: function() {
        return (this.entities.length > 0) ? this.entities[0].application_id : ''
      }
    },
    props: {
      entities: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style type="text/css" scoped>
  .entity-group-card {
    margin: 0px 5px 5px 0px;
  }
</style>
