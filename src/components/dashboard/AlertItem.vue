<template>
  <md-list-item class="md-flex-100" v-bind:class="{'item-active': selected}" @click="select">
      <md-avatar>
        <md-icon class="md-size-2x">alarm</md-icon>
      </md-avatar>
    <div class="md-list-text-container">
      <span class="md-title">{{ alert.name }} <md-chip>{{ alert.entities_count }}</md-chip> </span>
      <span>{{ alert.description.slice(0, 25) }}</span>
    </div>

    <md-button class="md-icon-button md-list-action">
      <md-icon class="md-size-2x">keyboard_arrow_right</md-icon>
    </md-button>

    <md-divider class="md-inset"></md-divider>
  </md-list-item>
</template>

<script type="text/javascript">
  export default {
    name: 'alert-list-item',
    data() {
      return {}
    },
    props: {
      alert: {
        type: Object,
        required: true
      },
      selected: {
        type: Boolean,
      }
    },
    methods: {
      select: function() {
        console.log(this.selected)
        this.$emit('selectAlert', this.alert)
      }
    },
    created: function() {
      console.log(this.selected)
    }
  }
</script>

<style type="text/css" scoped>
  .item-active {
    background-color: lightgrey;
  }
</style>
