<template>
  <md-layout>
    <md-toolbar  class="md-flex-100">
      <md-button class="md-icon-button" @click="toggle">
        <md-icon>menu</md-icon>
      </md-button>

      <!-- TODO: Move to serparate component -->
      <md-theme md-name="white">
        <md-input-container class="md-flex-offset-33 md-flex-33 md-toolbar-container">
          <md-icon class="md-accent">search</md-icon>
          <label class="md-accent">Search for dashboards, checks and alerts</label>
          <md-input class="md-flex-100" id="search-input"></md-input>
        </md-input-container>
      </md-theme>

    </md-toolbar>

    <!-- TODO: Move to serparate component -->
    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar>

        <div class="md-toolbar-container">
          <h2 class="md-title"><md-icon class="md-size-2x">insert_chart</md-icon> ZMON</h2>
        </div>

      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>warning</md-icon> <span>Dashboard</span>
        </md-list-item>
        <md-list-item>
          <md-icon>code</md-icon> <span>Checks</span>
        </md-list-item>
        <md-list-item>
          <md-icon>add_alert</md-icon> <span>Alerts</span>
        </md-list-item>
        <md-list-item>
          <md-icon>storage</md-icon> <span>Entities</span>
        </md-list-item>

      </md-list>
    </md-sidenav>

    <!-- Transclusion goes here -->
    <slot id="content"></slot>
  </md-layout>
</template>

<script type="text/javascript">
export default {
  name: 'layout',
  data() {
    return {}
  },
  methods: {
    toggle() {
      this.$refs.sidenav.toggle()
    }
  }
}
</script>

<style type="text/css" scoped>
  #search-input {
    color: white;
  }
</style>
