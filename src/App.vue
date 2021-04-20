<template>
  <div id="app">
    <component :is="layout"><router-view /></component>
  </div>
</template>

<script>
import mainLayout from '@/layouts/mainLayout'
// import homepageJS from "@/assets/js/homepage.js";
// import "@/assets/js/wow.min.js";

export default {
  computed: {
    layout () {
      console.log(this.$route.meta)
      return 'mainLayout'
    }
  },
  components: {
    mainLayout
  }
}
</script>

<style >
@import "../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
@import "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
@import "`materialize-css/dist/css/materialize.min.css";
@import "assets/css/homepage.css";
@import "assets/css/about.css";
@import "assets/css/contact.css";
@import "assets/css/post.css";
@import "assets/css/blog.css";
@import "assets/css/single.css";
@import "assets/css/servises.css";
</style>
