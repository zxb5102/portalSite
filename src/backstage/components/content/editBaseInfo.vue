<template>
    <div class="baseInfo">
        <div class="tools">
            <div v-if="!isEdit">
                <el-button size="mini" class="filter-item"   @click="handleEdit" type="info" icon="el-icon-edit">编辑</el-button>
                <el-button size="mini" class="filter-item"   @click="handleReplace" type="info" icon="el-icon-edit">替换logo</el-button>
            </div>
            <div v-else>
                <el-button size="mini" icon="el-icon-close" type="warning" @click="cancelEdit()">取消</el-button>
                <el-button size="mini" icon="el-icon-check" type="success" @click="commitEdit()">完成</el-button>
            </div>
        </div>
        <div class="main">
            <div class="each-item">
                <div class="label">logo图片</div>
                <div class="content">
                    <div class="wrap-img">
                        <img :src="baseInfo.logo" alt="">
                    </div>
                </div>
            </div>
            <div class="each-item">
                <div class="label">名称</div>
                <div class="content">
                    <el-input v-if="isEdit" v-model="baseInfo.name" type="textarea" autosize></el-input>
                    <span v-else> {{baseInfo.name}}</span>
                </div>
            </div>
            <div class="each-item">
                <div class="label">描述</div>
                <div class="content">
                    <el-input v-if="isEdit" v-model="baseInfo.desc" type="textarea" autosize></el-input>
                    <span v-else>{{baseInfo.desc}}</span>
                </div>
            </div>
            <div class="each-item">
                <div class="label">地址</div>
                <div class="content">
                    <el-input v-if="isEdit" v-model="baseInfo.address" type="textarea" autosize></el-input>
                    <span v-else>{{baseInfo.address}}</span>
                </div>
            </div>
            <div class="each-item">
                <div class="label">电话</div>
                <div class="content">
                    <el-input v-if="isEdit" v-model="baseInfo.phone" type="textarea" autosize></el-input>
                    <span v-else>{{baseInfo.phone}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import testData from "../../testData";
console.log(testData.baseInfo[0]);
export default {
  data() {
    return {
      isEdit: false,
      baseInfo: testData.baseInfo[0]
    };
  },
  methods: {
    commitEdit() {
      this.originName = this.name;
      this.originAddress = this.address;
      this.originDesc = this.desc;
      this.originPhone = this.phone;
      this.isEdit = false;
    },
    cancelEdit() {
      this.name = this.originName;
      this.address = this.originAddress;
      this.desc = this.originDesc;
      this.phone = this.originPhone;
      this.isEdit = false;
    },

    handleEdit() {
      this.isEdit = true;
    },
    handleReplace() {}
  }
};
</script>
<style lang="less" scoped>
.baseInfo {
  .tools {
    padding: 10px 0px 10px 0;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      button {
        margin: 0px;
      }
    }
  }
  .main {
    .each-item:nth-child(1) {
      border-top: 1px solid black;
    }
    .each-item {
      display: flex;
      border-bottom: 1px solid black;
      .label {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid black;
      }
      .content {
        flex: 2;
        text-align: center;
        padding: 5px;
        .wrap-img {
          height: 100px;
          margin: auto;
          width: 100px;
          display: flex;
          img {
            max-width: 100%;
            max-width: 100%;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>


