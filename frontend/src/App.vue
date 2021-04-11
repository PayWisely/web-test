<template>
  <v-app>
    <v-card flat>
      <v-toolbar flat>
        <v-toolbar-title>Restaurant</v-toolbar-title>
        <template v-slot:extension>
           <v-tabs grow class="tabs">
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab to="/reservations">Reservations</v-tab>
            <v-tab to="/inventory">Inventory</v-tab>
          </v-tabs>      
        </template>
      </v-toolbar>
      <v-card flat tile class="router-view-container">
        <router-view></router-view>
      </v-card>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    //
  }),
})
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
.router-view-container {
  margin: 40px;
  height: 100vh;
}
.tabs {
  a {
    text-decoration: none;
  }
}
</style>