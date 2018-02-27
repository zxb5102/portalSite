<template>
    <div>
        <el-container >
            <el-header style="height:105px">
                <div class="container">
                    <h1>

                    </h1>
                    <ul>
                        <router-link to="/index">首页</router-link>
                        <router-link to="/professionType">专业领域</router-link>
                        <router-link to="/designHouse">设计所</router-link>
                        <router-link to="/activitiesSalon">活动沙龙</router-link>
                        <router-link to="/companyNews">公司新闻</router-link>
                        <router-link to="/CompanySite">公司官网</router-link>
                    </ul>
                </div>
            </el-header>
        </el-container>
        <!-- <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped lang="less">
.container{
  height: 100%;
  width: 80%;
  margin:auto;
  // background-color: red;
  a{
    color:yellow;
    font-size: 50px;
  }
}
</style>