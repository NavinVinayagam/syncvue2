<template>
  <div class="home">
    <header>
      <nav>
        <b>FAB</b> 
        <!-- <router-link to="/">FAB</router-link> -->
        <router-link to="/speeddial">Speed Dial</router-link> 
        <router-link to="/skeleton">Sketeton</router-link> 
      </nav>
      <nav>
        <b>Default</b>
        <!-- <router-link to="/">Default</router-link> -->
        <router-link to="/position">Position</router-link> 
      </nav>
      <router-view/>
    </header>
    <div id="fab-default-target">
      <ejs-fab id="fab" content="Add" target="#fab-default-target"></ejs-fab>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { FabPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(FabPlugin);

export default Vue.extend({});
</script>

<style>
  header{
    margin: 30px;
    text-align: center;
  }

  nav{
    margin: 20px;
  }

  a{
    width: 50px;
    margin: 20px;
    text-decoration: none;
  }

  #fab-default-target{
    position: relative;
    width: 80%;
    height: 500px;
    border: 2px solid;
    margin: auto 8%
  }
</style>
