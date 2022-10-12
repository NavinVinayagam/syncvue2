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
                <router-link to="/linear">Linear</router-link>
                <b>Radial</b>
                <!-- <router-link to="/radial">Radial</router-link>  -->
            </nav>
            <router-view/>
        </header>
        <div id="radial-target">
            <ejs-speeddial id="speeddial1" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="TopLeft"></ejs-speeddial>
            <ejs-speeddial id="speeddial2" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="TopCenter"></ejs-speeddial>
            <ejs-speeddial id="speeddial3" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="TopRight"></ejs-speeddial>
            <ejs-speeddial id="speeddial4" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="MiddleLeft"></ejs-speeddial>
            <ejs-speeddial id="speeddial5" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="MiddleCenter"></ejs-speeddial>
            <ejs-speeddial id="speeddial6" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="MiddleRight"></ejs-speeddial>
            <ejs-speeddial id="speeddial7" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="BottomLeft"></ejs-speeddial>
            <ejs-speeddial id="speeddial8" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="BottomCenter"></ejs-speeddial>
            <ejs-speeddial id="speeddial9" openIconCss="e-icons e-edit" target="#radial-target" :items='items' mode='Radial' position="BottomRight"></ejs-speeddial>
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
                {
                    iconCss: 'e-icons e-cut'
                },
                {
                    iconCss: 'e-icons e-copy'
                },
                {
                    iconCss: 'e-icons e-paste'
                },
                {
                    iconCss: 'e-icons e-delete-1'
                },
                {
                    iconCss: 'e-icons e-save'
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

    #radial-target{
        position: relative;
        width: 80%;
        height: 500px;
        border: 2px solid;
        margin: auto 8%
    }
</style>