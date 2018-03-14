<template>
    <div class="wrap-outer">
        <div id="app">
            <Header/>
            <!-- 路由部分 -->
            <router-view/>
            <!--  footer部分    -->
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
    // Footer
  }
};
</script>

<style lang="less">
html{
        overflow-y: scroll;
}
</style>
