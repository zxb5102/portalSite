<template>
    <div class="designDetail">
        <div class="top-img">
            <img src="../../assets/designDetail/DesignHouse11Background.jpg" alt="">
            <div class="wrap-logo">
                <img src="../../assets/designDetail/FSlogo.jpg" alt="">
            </div>
        </div>
        <div class="main-content" v-if="!isDetail">
            <el-tabs v-model="currentTab" :tab-position="tabPosition">
                <el-tab-pane label="简介" name="intro">
                    <div class="intro-main">
                        <h3 class="each-tab">描述</h3>
                        <div class="desc">
                            工作室由刘文毅先生于2009年创办，室内外装饰设计于一体，项目涉及别墅、办公室、酒店会所等。团队成员皆为业内资深规划设计人士。秉承“美学的理念，细致的态度，实在的品质” 的工作作风，从空间规划入手，注重自然和谐的完美诠释。主要负责过，山东菏泽-南华购物广场项目，北京市密云国税局招待所项目 宜春市翰金宾馆外观改造项目 科瑞金鼎矿业公司办公室 抚州市临川新城售楼处，抚州市崇仁县行政中心大厅及成果展厅 樟树市锦绣共和售楼处，樟树市锦绣共和商业街2012酒吧 安义市上海湾968会所，南昌市克丽缇娜美容会所（0791艺术中心），湾里九州铭城样板房， 南昌市小兰工业园区鼎恒实业办公楼等。
                        </div>
                        <div class="wrap-a-p">
                            <div class="address">
                                <span class="wrap-icon">
                                    <img src="../../assets/designDetail/location.png" alt="">
                                </span>
                                <span class="text">江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园</span>
                            </div>
                            <div class="phone">
                                <span class="wrap-icon">
                                    <img src="../../assets/designDetail/phone.png" alt="">
                                </span>
                                <span class="text">13767037370</span>
                            </div>
                        </div>
                        <h3 class="each-tab designer-show">
                            <span>
                                设计师风采
                            </span>
                            <span @click="goDetail('view-detail-designer')">更多>></span>
                        </h3>
                        <ul class="design-items">
                            <li v-for="{item,dex} in numbers" :key="dex">
                                <div class="wrap-designer-img">
                                    <img src="../../assets/designDetail/designer1.jpg" alt="">
                                </div>
                                <div class="designer-desc">
                                    设计总监: 刘文毅
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="荣誉/证书" name="certificate">
                    <div class="certificate-main">
                        <h3 class="each-tab">
                            <span>
                                证书
                            </span>
                            <span>更多>></span>
                        </h3>
                        <ul class="design-items">
                            <li v-for="{item,dex} in numbers" :key="dex">
                                <div class="wrap-designer-img">
                                    <img src="../../assets/designDetail/IMG_6625.jpg" alt="">
                                </div>
                                <div class="designer-desc">
                                    年度金磊石材设计之星
                                </div>
                            </li>
                        </ul>
                        <h3 class="each-tab">
                            <span>荣誉</span>
                            <span>更多>></span>
                        </h3>
                        <ul class="honor-list">
                            <li v-for="{item,dex} in numbers" :key="dex">
                                <span>李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖</span>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="作品 " name="production">
                    <div class="producton-main">
                        <h3 class="each-tab">
                            <span>精品工程</span>
                            <span>更多>></span>
                        </h3>
                        <ul class="design-items">
                            <li v-for="{item,dex} in numbers" :key="dex">
                                <div class="wrap-designer-img">
                                    <img src="../../assets/designDetail/5Show.jpg" alt="">
                                </div>
                                <div class="designer-desc">
                                    生态园茶馆
                                </div>
                            </li>
                        </ul>
                        <h3 class="each-tab">
                            <span>作品赏析</span>
                            <span>更多>></span>
                        </h3>
                        <ul class="design-items">
                            <li v-for="{item,dex} in numbers" :key="dex">
                                <div class="wrap-designer-img">
                                    <img src="../../assets/designDetail/14.jpg" alt="">
                                </div>
                                <div class="designer-desc">
                                    生态园茶馆
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!--    详细查看页面      -->
        <div :class=" [decorate,'view-detail']" v-else>
            <div class="bread-wrap">
                <div  aria-label="Breadcrumb" role="navigation" class="el-breadcrumb">
                    <span  class="el-breadcrumb__item">
                        <span @click="backHome" role="link" class="el-breadcrumb__inner">设计所介绍</span>
                        <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
                    </span>
                    <span  class="el-breadcrumb__item" aria-current="page">
                        <span role="link" class="el-breadcrumb__inner">查看更多</span>
                        <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
                    </span>
                </div>
            </div>
            <ul class="design-items">
                <li v-for="{item,dex} in numbers" :key="dex">
                    <div class="wrap-designer-img">
                        <img src="../../assets/designDetail/designer1.jpg" alt="">
                    </div>
                    <div class="designer-desc">
                        设计总监: 刘文毅
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7],
      currentTab: "certificate",
      tabPosition: "left",
      isDetail:false,
      decorate:"",
    };
  },
  methods: {
    backHome() {
        this.isDetail = false;
    },
    goDetail:function(className,dataAry){
        this.isDetail = true;
        this.decorate = className;
    }
  }
};
</script>
<style lang="less" scoped>
.designDetail {
  @paddingLeft: 20px;
  @paddingTop: 50px;
  @eachLiHeight: 323px * 0.8;
  @eachLiWidth: 253px * 0.8;
  @allPaddingLeft: 10px;
  @certWidth: 350px*0.8;
  @certHeight: 205px*0.8;
  text-align: left;
  font-size: 14px;
  width: 1200px;
  margin: auto;
  .top-img {
    height: 300px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    .wrap-logo {
      height: 150px;
      width: 150px;
      overflow: hidden;
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      background-color: white;
      img {
        margin: auto;
        max-width: 100%;
        max-width: 100%;
      }
    }
  }
  .main-content {
    // display: none;
    margin-top: 50px;
    .each-tab {
      font-size: 25px;
      font-weight: 300;
      border-bottom: 1px solid black;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
    }
    .wrap-a-p {
      margin-top: 20px;
      display: flex;
      .address,
      .phone {
        display: flex;
        align-items: center;
        .wrap-icon {
          margin-right: 10px;
          img {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
    .wrap-a-p > div {
      width: 50%;
      display: inline-block;
      flex: 1;
    }
    .desc {
      padding: @paddingTop @paddingLeft 0px @paddingLeft;
      line-height: 24px;
      letter-spacing: 2px;
    }
    .intro-main {
      padding-left: @allPaddingLeft;
      .designer-show {
        margin-top: 50px;
      }
      .wrap-designer-img {
        width: @eachLiWidth;
        height: @eachLiHeight;
        background: gray;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .designer-desc {
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      .design-items {
        padding: @paddingTop @paddingLeft 0 @paddingLeft;
        display: flex;
        flex-wrap: wrap;
        li {
          width: @eachLiWidth;
          margin-right: 20px;
          margin-bottom: 20px;
        }
      }
    }
    .certificate-main {
      .intro-main;
      .wrap-designer-img {
        width: @certWidth;
        height: @certHeight;
      }
      .design-items li {
        width: @certWidth;
      }
      .honor-list {
        padding-left: @paddingLeft*2;
        padding-top: @paddingTop;
        li {
          list-style-type: disc;
          line-height: 35px;
          height: 35px;
        }
      }
    }
    .producton-main {
      .certificate-main;
    }
  } //详细页面的css
  .bread-wrap {
    div {
      font-size: 15px;
      line-height: inherit;
    }
    height: 50px;
    line-height: 50px;
  }
  .view-detail-designer {
    .main-content .intro-main;
    padding-left: 0px;
  }
  .view-detail-certificate {
    .main-content .certificate-main;
    padding-left: 0px;
  }
  .view-detail-production {
    .main-content .producton-main;
    padding-left: 0px;
  }
}
</style>


