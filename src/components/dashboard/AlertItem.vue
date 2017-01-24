<template>
  <md-list-item class="md-flex-100">
      <md-avatar>
        <md-icon class="md-size-2x">alarm</md-icon>
        <!-- <img src="https://placeimg.com/40/40/people/1" alt="People"> -->
      </md-avatar>
    <div class="md-list-text-container">
      <span class="md-title">Too many errors in API <md-chip>4</md-chip> </span>
      <span>Service API errors exceeds 5%</span>
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
    }
  }
</script>
