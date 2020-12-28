<template>
  <div id="app">
    <main-tabbar/>
    
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabber/MainTabber'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/normalize.css";
</style>  
