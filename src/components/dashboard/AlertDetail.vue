<template>
  <md-layout md-flex="100" md-flex-offset="0">
    <md-whiteframe class="md-flex-100" id="detail-container">
      <md-layout md-flex="100">
        <md-layout md-row>
          <span class="md-display-2">This is Alert name</span>
        </md-layout>

        <md-layout md-row md-flex="100" class="detail-row">
          <entity-group></entity-group>
          <entity-group></entity-group>
          <entity-group></entity-group>
          <entity-group></entity-group>
          <entity-group></entity-group>
          <entity-group></entity-group>
          <entity-group></entity-group>
        </md-layout>

        <md-divider class=""></md-divider>

        <md-layout md-row md-flex="100" class="detail-row"></md-layout>

      </md-layout>

    </md-whiteframe>
  </md-layout>
</template>

<script type="text/javascript">
  import EntityGroup from './EntityGroup.vue'

  export default {
    name: 'alert-detail',
    data() {
      return {}
    },
    components: {
      EntityGroup
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
