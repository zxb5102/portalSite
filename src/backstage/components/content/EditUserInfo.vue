<template>
  <div class="editUserInfo">
    <el-collapse v-model="activeName" accordion class="collapse-list">
      <el-collapse-item name="honor">
        <template slot="title">
          <span class="accordion-title">荣誉</span>
          <el-button type="text" icon="el-icon-circle-plus-outline" @click.capture.stop="addHonor" round>新增荣誉</el-button>
        </template>
        <el-table :data="honors" border style="width: 100%" stripe="stripe" size="mini" header-cell-class-name="center-header">
          <el-table-column prop="value" label="当前的荣誉">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click='del("确认删除?","honor",scope.row)' type="danger" size="mini">
                删除</el-button>
              <el-button @click="editHonor(scope.row)" type="info" size="mini">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
      <!-- 证书表格 -->
      <el-collapse-item name="cert">
        <template slot="title">
          <span class="accordion-title">证书</span>
          <el-button type="text" icon="el-icon-circle-plus-outline" @click.capture.stop="addCert" round>新增证书</el-button>
        </template>
        <el-table :data="certs" border style="width: 100%" stripe="stripe" size="mini" header-cell-class-name="center-header">
          <el-table-column prop="name" label="当前的证书">
          </el-table-column>
          <el-table-column label="证书图片">
            <template slot-scope="scope">
              <div class="cert-wrap-img">
                <img :src="scope.row.img" alt="">
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click='del("确认删除?","cert",scope.row)' type="danger" size="mini" style="margin-right:10px;margin-bottom:10px">
                删除</el-button>
              <el-button @click="editCert(scope.row)" type="info" size="mini" style="margin:0px">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
    <!-- 荣誉弹框 -->
    <el-dialog :title="honorTitle" :visible.sync="honorDialogShow" :width="dialogWidth">
      <el-input placeholder="请输入内容" :disabled="false" v-model="honorValue" type="textarea" :rows="2">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="honorDialogShow = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="commitHonorValue" size="mini">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 确认信息的弹窗 -->
    <el-dialog title="提示" :visible.sync="infoDialogShow" :width="dialogWidth">
      <span>{{message}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="infoDialogShow = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="sureDel" size="mini">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 证书弹框 -->
    <el-dialog :title="certTitle" :visible.sync="certDialogShow" :width="dialogWidth">
      <el-input placeholder="请输入内容" :disabled="false" v-model="certValue" type="textarea" :rows="2"></el-input>
      <!-- <el-form ref="form" label-position="top">
				<el-form-item label="名称">
					
				</el-form-item>
				<el-form-item label="图片">
					<el-upload limit="1" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-remove="certRemove" :file-list="certImgs" list-type="text">
						<el-button size="small" type="primary" :disabled="certUploadDisable">点击上传</el-button>
					</el-upload>
				</el-form-item>
			</el-form> -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="certDialogShow = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="commitCertValue" size="mini">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
import testData from "../../testData";
import testData2 from "../../../testData"; //这里需要使用设计所的详情页面的 测试数据
import { userInfo } from "../../testData";
// console.log(userInfo);
export default {
  data() {
    return {
      infoType: "",
      message: "",
      dialogWidth: "80%",
      honorValue: "",
      honorTitle: "",
      honorType: "",
      certType: "",
      certTitle: "",
      certValue: "",
      stripe: true,
      row: {},
      certImgs: [],
      infoDialogShow: false,
      honorDialogShow: false,
      certDialogShow: false,
      activeName: "honor",
      // certs: testData.certs,
      // honors: testData.honors
      certs: [],
      honors: []
    };
  },
  methods: {
    del(info, type, row) {
      this.message = info;
      this.infoType = type;
      this.infoDialogShow = true;
      this.row = row;
    },
    sureDel() {
      if (this.infoType == "honor") {
        this.deleteHonor();
      } else {
        this.deleteCert();
      }
      this.infoDialogShow = false;
    },
    deleteHonor() {
      var dex = 0;
      for (var item of this.honors) {
        if (item.id == this.row.id) {
          this.honors.splice(dex, 1);
        }
        dex++;
      }
    },
    deleteCert() {
      var dex = 0;
      for (var item of this.certs) {
        if (item.id == this.row.id) {
          this.certs.splice(dex, 1);
        }
        dex++;
      }
    },
    editHonor(row) {
      this.honorTitle = "编辑荣誉";
      this.honorType = "edit";
      this.row = row;
      this.honorValue = row.value;
      this.honorDialogShow = true;
    },
    editCert(row) {
      this.certTitle = "编辑证书名称";
      this.certType = "edit";
      this.row = row;
      this.certValue = row.name;
      //   this.certImgs = [
      //     {
      //       //name:row.name;
      //       url: row.img
      //     }
      //   ];
      this.certDialogShow = true;
    },
    addHonor() {
      // console.log(this);
      this.honorTitle = "新增荣誉";
      this.honorDialogShow = true;
      this.honorType = "new";
      this.honorValue = "";
    },
    commitHonorValue() {
      if (this.honorType == "edit") {
        for (var item of this.honors) {
          if (item.id == this.row.id) {
            item.value = this.honorValue;
          }
        }
      } else {
        this.honors.push({
          id: new Date().getTime(),
          value: this.honorValue
        });
      }
      this.honorDialogShow = false;
    },
    commitCertValue() {
      if (this.certType == "edit") {
        for (var item of this.certs) {
          if (item.id == this.row.id) {
            item.name = this.certValue;
          }
        }
      } else {
        // this.honors.push({
        //   id: new Date().getTime(),
        //   value: this.honorValue
        // });
      }
      this.certDialogShow = false;
    },
    addCert() {},
    handleRemove(file, fileList) {},
    handlePreview(file) {}
  },
  mounted: function() {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 992) {
      this.dialogWidth = "70%";
    } else {
      this.dialogWidth = "100%";
    }

    if (ISDEV) {
      var mock = new MockAdapter(axios);
      mock.onPost("/Account/GetInfo").reply(200, userInfo);
      mock.onPost("/Home/GetDesignPro").reply(200, testData2.designDetail);
    }

    axios({
      method: "post",
      url: "/Account/GetInfo",
      data: {}
    })
      .then(resp => {
        var code = resp.data.code;
        if (code == 0) {
          var companyId = resp.data.data.user.institutionId;
          axios({
            method: "post",
            url: "/Home/GetDesignPro",
            data: {
              parameter: companyId
            }
          })
            .then(resp => {
              var honorAry = [];
              for (var item of resp.data.DesignerHonor) {
                honorAry.push({
                  id: item.Id,
                  value: item.HonorName
                });
              }
              this.honors = honorAry;
              var certAry = [];
              for (var item of resp.data.DesignerCert) {
                certAry.push({
                  id: item.Id,
                  img: item.PhotoPath.replace("../..", "http://cyy.zhcjjs.com"),
                  name: item.Name
                });
              }
              this.certs = certAry;
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          window.location = "/#/entry/login";
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="less" scoped>
.editUserInfo {
  .collapse-list {
    max-width: 1000px;
    margin: auto;
  }
  overflow: hidden;
  .accordion-title {
    margin-left: 20px;
    font-size: 14px;
    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
  .cert-wrap-img {
    width: 200px;
    height: 200px;
    @media (max-width: 992px) {
      height: 100px;
      width: 100px;
    }
    display: flex;
    img {
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
  }
}
</style>
<style>
.center-header div {
  text-align: center;
}
.cell-padding-desc {
  padding: 0px;
}
</style>