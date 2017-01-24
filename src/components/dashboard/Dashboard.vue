<template>
  <layout class="md-flex-100">
    <md-layout md-flex="25">
      <alert-list></alert-list>
    </md-layout>
    <md-layout>
      <alert-detail></alert-detail>
    </md-layout>
  </layout>
</template>

<script type="text/ecmascript-6">
  import Layout from '../layout/Layout.vue'
  import AlertList from './AlertList.vue'
  import AlertDetail from './AlertDetail.vue'

  export default {
    name: 'dashboard',
    data () {
        return {}
    },
    components: {
      Layout,
      AlertList,
      AlertDetail,
    }
  }
</script>
