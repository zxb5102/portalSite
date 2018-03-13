<template>
    <div class="pdaDesignDetail">
        <el-tabs v-model="currentTab" tab-position="top">
            <el-tab-pane label="简介" name="intro">
                <div class="intro">
                    <div class="top-img">
                        <img src="../../assets/designDetail/DesignHouse11Background.jpg" alt="">
                    </div>
                    <div class="wrap-base-msg">
                        <div class="wrap-logo">
                            <img src="../../assets/designDetail/FSlogo.jpg" alt="">
                        </div>
                        <div class="wrap-desc">
                            <span>工作室由刘文毅先生于2009年创办，室内外装饰设计于一体，项目涉及别墅、办公室、酒店会所等。团队成员皆为业内资深规划设计人士。秉承“美学的理念，细致的态度，实在的品质” 的工作作风，从空间规划入手，注重自然和谐的完美诠释。主要负责过，山东菏泽-南华购物广场项目，北京市密云国税局招待所项目 宜春市翰金宾馆外观改造项目 科瑞金鼎矿业公司办公室 抚州市临川新城售楼处，抚州市崇仁县行政中心大厅及成果展厅 樟树市锦绣共和售楼处，樟树市锦绣共和商业街2012酒吧 安义市上海湾968会所，南昌市克丽缇娜美容会所（0791艺术中心），湾里九州铭城样板房， 南昌市小兰工业园区鼎恒实业办公楼等。</span>
                        </div>
                    </div>
                    <div class="wrap-a-p">
                        <div class="address">
                            <span class="wrap-icon">
                                <img src="../../assets/designDetail/location.png" alt="">
                            </span>
                            <span class="text">江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园</span>
                        </div>
                    </div>
                    <div class="wrap-a-p">
                        <div class="phone">
                            <span class="wrap-icon">
                                <img src="../../assets/designDetail/phone.png" alt="">
                            </span>
                            <span class="text">13767037370</span>
                        </div>
                    </div>
                    <h3>
                        荣誉
                    </h3>
                    <ul class="honor-list">
                        <li v-for="item in ary" :key="item">
                            <span>李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖</span>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="设计师" name="designers">
                <ul class="designers">
                    <li v-for="item in ary" :key="item" v-if="item < 5">
                        <div class="wrap-designer-img">
                            <img src="../../assets/designDetail/designer1.jpg" alt="">
                        </div>
                        <div class="designer-desc">
                            设计总监: 刘文毅
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="证书" name="certificate">
                <ul class="certificate">
                    <li v-for="item in ary" :key="item" v-if="item <=6">
                        <div class="each">
                            <div class="wrap-designer-img">
                                <img src="../../assets/designDetail/IMG_6625.jpg" alt="">
                            </div>
                            <div class="designer-desc">
                                年度金磊石材设计之星{{item}}
                            </div>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="作品" name="production" class="production">
                <div class="production-main">
                    <h3>精品工程</h3>
                    <ul class="enjoy-prod">
                        <li v-for="item in ary" :key="item" v-if="item <=6">
                            <div class="each">
                                <div class="wrap-designer-img">
                                    <img src="../../assets/designDetail/IMG_6625.jpg" alt="">
                                </div>
                                <div class="designer-desc">
                                    年度金磊石材设计之星{{item}}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h3>作品赏析</h3>
                    <ul class="competitive-prod">
                        <li v-for="item in ary" :key="item" v-if="item <=6">
                            <div class="each">
                                <div class="wrap-designer-img">
                                    <img src="../../assets/designDetail/IMG_6625.jpg" alt="">
                                </div>
                                <div class="designer-desc">
                                    年度金磊石材设计之星{{item}}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Viewer from "viewerjs";
export default {
  data() {
    return {
      currentTab: "intro",
      ary: [1, 2, 3, 4, 5, 6]
    };
  },
  mounted() {
    new Viewer(document.querySelector(".certificate"));
    new Viewer(document.querySelector(".competitive-prod"));
    new Viewer(document.querySelector(".enjoy-prod"));
  }
};
</script>
<style>
@import "viewerjs/dist/viewer.min.css";
</style>

<style scoped lang="less">
@descFontSize: 12px;
@descPaddingLeft: 10px;
@certWidth: 350px*0.3;
@certHeight: 205px*0.3;
.pdaDesignDetail {
  padding-top: 20px;
  font-size: 14px;
  text-align: left;
  background-color: white;
  .intro {
    padding-bottom: 50px;
    h3 {
      margin-top: 30px;
      font-weight: 300;
      // padding-left:30px;
      text-align: center;

      // margin-left: 30px;
      background-color: #f1f1f1;
    }
    .top-img {
      width: 100%;
      height: 120px;
      position: relative;
      overflow: hidden;
    }
    .wrap-base-msg {
      min-height: 80px;
      background-color: white;
      position: relative;
      .wrap-logo {
        position: absolute;
        height: 80px;
        width: 80px;
        left: 20px;
        top: -40px;
        overflow: hidden;
        background-color: white;
        border-radius: 50%;
        display: flex;
        border: 1px solid #c5c5c5;
        img {
          margin: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .wrap-desc {
        font-size: @descFontSize;
        text-align: left;
        text-indent: @descFontSize * 2;
        line-height: 18px;
        letter-spacing: 1px;
        padding: 50px @descPaddingLeft 0px @descPaddingLeft; // padding-top: 50px;
      }
    }
    .wrap-a-p {
      margin-top: 20px;
      display: flex;
      padding-left: @descPaddingLeft;
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
      .address {
        .text {
          max-width: 80%;
        }
      }
    }
  }
}
.designers {
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  // li{
  //     padding: 5px;
  // }
  li:nth-child(1) {
    margin-top: 20px;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .designer-desc {
      margin-top: 10px;
      margin-left: 20px;
    }
  }
  .wrap-designer-img {
    width: 253px * 0.3;
    height: 323px * 0.3;
    background: gray;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.certificate {
  padding-top: 20px;
  text-align: center;
  .designer-desc {
    display: inline-block;
  }
  li {
    // display: ;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    width: 50%;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 20px;
    .each {
      display: flex;
      flex-direction: column;
      align-items: center;
      .designer-desc {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        margin-top: 10px;
      }
    }
  }
  .wrap-designer-img {
    width: @certWidth;
    height: @certHeight;
    overflow: hidden;
    display: flex;
    img {
      max-width: 100%;
      max-width: 100%;
      margin: auto;
    }
  }
}
.production {
  .production-main {
    padding-top: 10px;
    .enjoy-prod {
      .certificate;
    }
    .competitive-prod {
      .certificate;
    }
    h3 {
      font-weight: 300;
      // padding-left:30px;
      text-align: center;

      // margin-left: 30px;
      background-color: #f1f1f1;
    }
  }
}
.honor-list {
  padding-top: 30px;
  padding-left: 10px;
  width: 95%;
  li {
    background-image: url(../../assets/disc.png);
    background-position-y: center;
    background-position-x: 0px;
    background-repeat: no-repeat;
    background-size: 15px;
    padding-left: 25px;
    list-style-type: disc;
    margin-bottom: 5px;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    // overflow: hidden;
  }
}
</style>
<style>
.pdaDesignDetail div[class*="el-tabs__header"] {
  /* width: 95%; */
  max-width: 280px;
  margin: auto;
}
</style>

