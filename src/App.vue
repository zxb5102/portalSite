<template>
  <div id="app">
    <!-- header部分 -->
    <Header/>
    <!-- 路由部分 -->
    <router-view/>
    <!--  footer部分    -->
    <Footer/>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  import $ from "jquery";
  import {
    fitImg,
    autoFit,
    autoFitWrapImg,
    cacheFit
  } from "./util.js";
  window.fitImg = fitImg;
  window.autoFit = autoFit;
  window.autoFitWrapImg = autoFitWrapImg;
  window.cacheFit = cacheFit;
  // import Index from '@/components/content/Index'
  export default {
    name: "App",
    components: {
      Header,
      Footer
    },
    mounted() {
      var hml = document.documentElement;
      hml.style.fontSize = hml.clientWidth / 750 * 100 + "px";
      $(window).resize(() => {
        var hml = document.documentElement;
        hml.style.fontSize = hml.clientWidth / 750 * 100 + "px";
      });
    }
  };
</script>

<style lang="less">
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale; */
    background-color: white;
    @media (max-width: 992px) {
      background-color: #f3f3f3;
    }
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // font-size: 100%;
    // font-weight: 400;
  }
  a{
    text-decoration: none;
  }
</style>
