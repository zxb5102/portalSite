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
// import Index from '@/components/content/Index'
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale; */
    background-color:#f3f3f3;
    text-align: center;
  }
</style>
