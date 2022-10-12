<template>
  <div class="home">
    <header>
      <nav>
        <router-link to="/">FAB</router-link>
        <b>Speed Dial</b>
        <!-- <router-link to="/speeddial">Speed Dial</router-link>  -->
        <router-link to="/skeleton">Sketeton</router-link> 
      </nav>
      <nav>
        <b>Default</b>
        <!-- <router-link to="/">Default</router-link> -->
        <router-link to="/linear">Linear</router-link>
        <router-link to="/radial">Radial</router-link> 
      </nav>
      <router-view/>
    </header>
    <div id="speeddial-default-target">
      <ejs-speeddial id="speeddial3" content="Add" target="#speeddial-default-target" :items='itemsLabel' position="BottomLeft"></ejs-speeddial>
      <ejs-speeddial id="speeddial2" openIconCss="e-icons e-plus" content="Add" target="#speeddial-default-target" :items='items' position="BottomCenter"></ejs-speeddial>
      <ejs-speeddial id="speeddial1" openIconCss="e-icons e-plus" closeIconCss="e-icons e-close" target="#speeddial-default-target" :items='itemsTool'></ejs-speeddial>
    </div>
  </div>
</template>
  
<script>
  import Vue from "vue";
  import { SpeedDialPlugin } from "@syncfusion/ej2-vue-buttons";
  
  Vue.use(SpeedDialPlugin);
  
  export default Vue.extend({
    data: function () {
        return {
          itemsTool: [
              {
                  iconCss: 'e-icons e-home'
              },
              {
                  iconCss: 'e-icons e-people'
              },
              {
                  iconCss: 'e-icons e-search'
              }
          ],
          items: [
              {
                text: 'Home',
                iconCss: 'e-icons e-home'
              },
              {
                text: 'People',
                iconCss: 'e-icons e-people'
              },
              {
                text: 'Search',
                iconCss: 'e-icons e-search'
              }
          ],
          itemsLabel: [
            {
                text: 'Home',
            },
            {
                text: 'Contacts',
            },
            {
                text: 'Search',
            }
        ]
        };
      }
  });
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

  #speeddial-default-target{
      position: relative;
      width: 80%;
      height: 500px;
      border: 2px solid;
      margin: auto 8%
  }
</style>
  