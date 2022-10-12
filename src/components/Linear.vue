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
                <router-link to="/">Default</router-link>
                <b>Linear</b>
                <!-- <router-link to="/linear">Linear</router-link> -->
                <router-link to="/radial">Radial</router-link> 
            </nav>
            <router-view/>
        </header>
        <div id="linear-target">
            <ejs-speeddial id="speeddial1" openIconCss="e-icons e-plus" target="#linear-target" :items='items' position="TopLeft"></ejs-speeddial>
            <ejs-speeddial id="speeddial2" openIconCss="e-icons e-plus" target="#linear-target" :items='items' position="TopCenter"></ejs-speeddial>
            <ejs-speeddial id="speeddial3" openIconCss="e-icons e-plus" target="#linear-target" :items='items' position="TopRight"></ejs-speeddial>
            <ejs-speeddial id="speeddial4" openIconCss="e-icons e-plus" target="#linear-target" :items='items' direction="Right" position="MiddleLeft"></ejs-speeddial>
            <ejs-speeddial id="speeddial5" openIconCss="e-icons e-plus" target="#linear-target" :items='items' position="MiddleCenter"></ejs-speeddial>
            <ejs-speeddial id="speeddial6" openIconCss="e-icons e-plus" target="#linear-target" :items='items' direction="Left" position="MiddleRight"></ejs-speeddial>
            <ejs-speeddial id="speeddial7" openIconCss="e-icons e-plus" target="#linear-target" :items='items' position="BottomLeft"></ejs-speeddial>
            <ejs-speeddial id="speeddial8" openIconCss="e-icons e-plus" target="#linear-target" :items='items' position="BottomCenter"></ejs-speeddial>
            <ejs-speeddial id="speeddial9" openIconCss="e-icons e-plus" target="#linear-target" :items='items' position="BottomRight"></ejs-speeddial>
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
            items: [
            { iconCss: 'e-icons e-home' },
            { iconCss: 'e-icons e-people' },
            { iconCss: 'e-icons e-search' }
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

    #linear-target{
        position: relative;
        width: 80%;
        height: 500px;
        border: 2px solid;
        margin: auto 8%
    }
</style>