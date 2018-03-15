<template>
  <div class="dv">
    <span class="h5 welcome" v-if="baseInfo[3]">你好,{{ baseInfo[3].value}}</span>
    <!-- <b-table class="person-info" striped hover :items="items"></b-table> -->
    <div class="person-info">
      <h3 class="person-info-label">基本信息</h3>
      <div v-for="item in baseInfo" :key="item.label" class="each-item">
        <div class="label">{{item.label}}</div>
        <div class="msg">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { userInfo } from "../testData";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
export default {
  data() {
    return {
      baseInfo: []
    };
  },
  mounted() {
    var mock = new MockAdapter(axios);
    mock.onPost("/Account/GetInfo").reply(200, userInfo);
    axios({
      method: "post",
      url: "/Account/GetInfo",
      data: {}
    })
      .then(resp => {
        var code = resp.data.code;
        if (code == 0) {
          var userInfo = resp.data.data.user;
          var institutionType = "";
          switch (userInfo.institutionType) {
            case 1:
              institutionType = "部门";
              break;
            case 2:
              institutionType = "设计所";
              break;
            case 3:
              institutionType = "建材商";
              break;
            default:
              institutionType = "机构";
          }
          var status = "";
          switch (userInfo.state) {
            case -1:
              status = "审核失败";
              break;
            case 0:
              status = "正在审核";
              break;
            default:
              status = "通过";
          }

          this.baseInfo = [
            {
              label: "审核状态：",
              value: status
            },
            {
              label: "园区：",
              value: userInfo.park
            },
            {
              label: institutionType,
              value: userInfo.institution
            },
            {
              label: "姓名：",
              value: userInfo.name
            },
            {
              label: "账号：",
              value: userInfo.account
            },
            {
              label: "邮箱：",
              value: userInfo.mail
            }
          ];
        } else {
          //没有登入的情况下 跳转到 登入界面
          window.location = "/#/entry/login";
        }
      })
      .catch(error => {
        // console.log(error);
        alert("服务器繁忙请稍后重试");
      });
  }
};
</script>
<style scoped lang="less">
.welcome {
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    font-size: 18px;
  }
}
.each-item {
  display: block;
  margin-bottom: 20px;
  .label {
    display: inline-block;
    min-width: 100px;
    margin-right: 20px;
    //background-color: gray;
    @media (max-width: 992px) {
      min-width: 50px;
    }
  }
  .msg {
    display: inline-block;
  }
}
.person-info {
  .person-info-label {
    font-weight: 300;
    margin-bottom: 20px;
    line-height: 55px;
    border-bottom: 1px solid black;
    @media (max-width: 992px) {
      font-size: 20px;
    }
  }
  @media (max-width: 992px) {
    max-width: 95%;
  }
  @media (min-width: 992px) {
    max-width: 768px;
  }
  margin: auto;
}
</style>


