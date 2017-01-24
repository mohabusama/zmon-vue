<template>
  <md-layout md-row md-flex="100">
    <md-card class="md-flex-100">
      <md-card-header >
        <md-card-header-text>
          <div class="md-title">
            Too many errors in API <md-chip>5</md-chip>
          </div>
          <div class="md-subhead">Service API errors exceeds 5%</div>
        </md-card-header-text>

        <md-button class="md-icon-button md-offset-80">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>

      </md-card-header>

<!--       <md-card-content>
        <md-button class="md-raised">Entity 1 has a long ID :(</md-button>
        <md-button class="md-raised">Entity 2</md-button>
        <md-button class="md-raised">Entity 3</md-button>
        <md-button class="md-raised">Entity 4</md-button>
        <md-button class="md-raised">Entity 5</md-button>
        <md-button class="md-raised">Entity 6</md-button>
        <md-button class="md-raised">Entity 7</md-button>
        <md-button class="md-raised">Entity 8</md-button>
        <md-button class="md-raised">Entity 9</md-button>
        <md-button class="md-raised">Entity 1</md-button>
        <md-button class="md-raised">Entity 1</md-button>
        <md-button class="md-raised">Entity 1</md-button>
        <md-button class="md-raised">Entity 1</md-button>
        <md-button class="md-raised">Entity 1</md-button>
        <md-button class="md-raised">Entity 1</md-button>
        <md-button class="md-raised">Entity 1</md-button>
        <md-button class="md-raised">Entity 110</md-button>
      </md-card-content> -->

      <md-card-actions>
        <md-button>Go to alert</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</template>

<script type="text/javascript">
  export default {
    name: "alert-card",
    data() {
      return {}
    }
  }
</script>
