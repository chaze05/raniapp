<template>
  <div id="app">
    <v-toolbar>
    <v-toolbar-title>Rani Rubillos</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" flat>Home</v-btn>
      <v-btn to="/users" flat>users</v-btn>
      <v-btn to="/contactus" flat>Contact us</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
