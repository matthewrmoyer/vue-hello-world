<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-link to="/assignments/1">Assignment 1</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/computedandwatch">Computed And Watch</router-link>
    <router-link to="/styling">Styling</router-link>
    <router-link to="/conditionalsandlists">Conditionals and Lists</router-link>
    <router-link to="/sharingDataParent">Sharing Data Parent</router-link>
    <router-link to="/sharingDataChild">Sharing Data Child</router-link>
    <router-link to="/sharingDataCallbacksParent">Sharing Data With Callbacks Parent</router-link>
    <router-link to="/sharingDataCallbacksChild">Sharing Data With Callbacks Child</router-link>
    
    
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
