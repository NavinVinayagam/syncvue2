<template>
  <div class="home">
    <header>
      <nav>
        <b>FAB</b>
        <!-- <router-link to="/">FAB</router-link>  -->
        <router-link to="/speeddial">Speed Dial</router-link> 
        <router-link to="/skeleton">Sketeton</router-link> 
      </nav>
      <nav>
        <router-link to="/">Default</router-link> 
        <b>Position</b>
        <!-- <router-link to="/position">Position</router-link>  -->
      </nav>
      <router-view/>
    </header>
    <div id="position-target">
      <ejs-fab id="fab1" content="Add" target="#position-target" position="TopLeft"></ejs-fab>
      <ejs-fab id="fab2" content="Add" target="#position-target" position="TopCenter"></ejs-fab>
      <ejs-fab id="fab3" content="Add" target="#position-target" position="TopRight"></ejs-fab>
      <ejs-fab id="fab4" content="Add" target="#position-target" position="MiddleLeft"></ejs-fab>
      <ejs-fab id="fab5" content="Add" target="#position-target" position="MiddleCenter"></ejs-fab>
      <ejs-fab id="fab6" content="Add" target="#position-target" position="MiddleRight"></ejs-fab>
      <ejs-fab id="fab7" content="Add" target="#position-target" position="BottomLeft"></ejs-fab>
      <ejs-fab id="fab8" content="Add" target="#position-target" position="BottomCenter"></ejs-fab>
      <ejs-fab id="fab9" content="Add" target="#position-target" position="BottomRight"></ejs-fab>
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
  #position-target{
      position: relative;
      width: 80%;
      height: 500px;
      border: 2px solid;
      margin: auto 8%
  }
</style>