<template>
  <md-card class="entity-group-card">
    <md-card-header>
      <div class="md-title">Application 1</div>
      <div class="md-subhead">Total entities <md-chip>3</md-chip></div>
    </md-card-header>
    <md-card-content>
      <md-button class="md-raised">Entity 1</md-button>
      <md-button class="md-raised">Entity 2</md-button>
      <md-button class="md-raised">Entity 3</md-button>
    </md-card-content>
  </md-card>
</template>

<script type="text/javascript">
  export default {
    name: 'entity-group',
    data() {
      return {}
    }
  }
</script>

<style type="text/css" scoped>
  .entity-group-card {
    margin: 0px 5px 5px 0px;
  }
</style>
