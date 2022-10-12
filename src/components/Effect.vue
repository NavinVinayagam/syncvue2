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
            <router-link to="/">Default</router-link>
            <b>Effect</b>
            <!-- <router-link to="/effect">Effect</router-link>  -->
        </nav>
        <router-view/>
        </header>
        <div id="sk">
            <b>Fade Effect</b><br/>
            <ejs-skeleton class="skeleton" id="skeletonRectangle1" shape="Rectangle" width='90%' height='100px' shimmerEffect="Fade"></ejs-skeleton><br/>
            <b>Pulse Effect</b><br/>
            <ejs-skeleton class="skeleton" id="skeletonRectangle2" shape="Rectangle" width='90%' height='100px' shimmerEffect="Pulse"></ejs-skeleton><br/>
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
  