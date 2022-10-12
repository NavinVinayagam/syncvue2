<template>
    <div class="home">
        <header>
        <nav>
            <router-link to="/">FAB</router-link>
            <router-link to="/speeddial">Speed Dial</router-link> 
            <b>Sketeton</b>
            <!-- <router-link to="/skeleton">Sketeton</router-link>  -->
        </nav>
        <nav>
            <b>Default</b>
            <!-- <router-link to="/">Default</router-link> -->
            <router-link to="/effect">Effect</router-link> 
        </nav>
        <router-view/>
        </header>
        <div id="sk">
            <b>Circle</b><br/>
            <ejs-skeleton class="skeleton" id="skeletonCircleMedium" shape="Circle" width="48px"></ejs-skeleton><br/>
            <b>Square</b><br/>
            <ejs-skeleton class="skeleton" id="skeletonSquareMedium" shape="Square" width="48px"></ejs-skeleton><br/>
            <b>Text</b><br/>
            <ejs-skeleton class="skeleton" id="skeletonText" width="90%" height="15px"></ejs-skeleton><br/>
            <b>Rectangle</b><br/>
            <ejs-skeleton class="skeleton" id="skeletonRectangle" shape="Rectangle" width='90%' height='100px'></ejs-skeleton><br/>
        </div>
    </div>
</template>

<script>
  import Vue from "vue";
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);
    export default Vue.extend({
        data: function () {
            return {};
        },
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

    #sk{
        width: 80%;
        height: 500px;
        margin: auto 8%
    }
    .skeleton{
        margin: 10px;
    }

</style>
  