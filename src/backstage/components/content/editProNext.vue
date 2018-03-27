<template>
    <div class="editPro">
        <div class="tools">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="newProd">新增图片</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDel">删除图片</el-button>
        </div>
        <div class="table-content">
            <el-table ref="prodTable" @selection-change="selectionChange" :data="imgList" border fit highlight-current-row style="width: 100%">
                <el-table-column type="selection" width="30" align="center" />
                <el-table-column label="图片名" align="center">
                    <template slot-scope="scope">
                        <template v-if="scope.row.edit">
                            <el-input class="edit-input" size="small" v-model="scope.row.name" type="textarea" autosize></el-input>
                        </template>
                        <span v-else>{{ scope.row.name }}</span>
                    </template>
                </el-table-column>

                <el-table-column min-width="100px" label="图片" prop="id" align="center">
                    <template slot-scope="scope">
                        <div class="wrap-prod-img">
                            <img :src="scope.row.src" alt="" />
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 替换图片的dialog -->
        <el-dialog title="上传图片" :visible.sync="newDialog" width="90%" center>
            <el-upload :on-remove="removeUploadImg" :file-list="fileList" :on-success="uploadSuccess" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture" :multiple="multiple">
                <div slot="tip" class="el-upload__tip">已经上传{{successNum}}个文件</div>
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="newDialog = false">取 消</el-button>
                <el-button type="primary" @click="confirmUpload">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import Vue from "vue";
import { Header } from "mint-ui";
import testData from "../../testData";
import { MessageBox } from "mint-ui";

export default {
  data() {
    return {
      labelPosition: "left",
      form: {
        imgId: "",
        name: ""
      },
      rules: {
        name: [{ required: true, message: "请填写名称", trigger: "blur" }],
        imgId: [{ required: true, message: "请上传图片", trigger: "blur" }]
      },
      imgList: testData.subImg,
      selection: [],
      newDialog: false,
      editBtn: false,
      showDailog: false,
      disabledUpload: false,
      fileList: [],
      multiple: true,
      //   tempFile: null,
      successNum: 0,
      successFile: []
    };
  },
  mounted() {
    var id = this.$route.query.id;
  },
  methods: {
    confirmNew() {
      this.$refs.newForm.validate(validate => {
        if (validate) {
          this.prodList.push({
            id: new Date().getTime(),
            name: this.form.name,
            originName: this.form.name,
            img: this.tempFile.url
          });
          this.newDialog = false;
          this.$message({
            message: "新增成功",
            type: "success"
          });
        } else {
          //   console.log("error");
          return false;
        }
      });
    },
    newProd() {
      this.newDialog = true;
      //   this.form.imgId = "";
      //   this.form.name = "";
      this.fileList = [];
      this.successFile = [];
    },
    confirmUpload() {
      for (var item of this.successFile) {
        this.imgList.push({
          id: item.id,
          src: item.file.url,
          name: item.file.name
        });
      }
      this.newDialog = false;
      this.$message({
        message: "新增成功",
        type: "success"
      });
    },
    removeUploadImg(file, fileList) {
      var dex = this.successFile.indexOf(file);
      this.successFile.splice(dex, 1);
    },
    uploadSuccess(resp, file, fileList) {
      this.successFile.push({
        file: file,
        id: new Date().getTime()
      });
      this.successNum++;
    },
    handleReplace() {
      if (this.selection.length != 1) {
        MessageBox.alert("请选择一个作品进行编辑", "提示");
      } else {
        this.showDailog = true;
        this.fileList = [];
        this.disabledUpload = false;
      }
    },
    rowClick(row, event, column) {
      console.log(row);
    },
    confirmEdit() {
      var row = this.selection[0];
      row.originName = row.name;
      this.$message({
        message: "编辑成功",
        type: "success"
      });

      this.editBtn = false;
      row.edit = false;
    },
    cancelEdit() {
      var row = this.selection[0];
      row.name = row.originName;
      this.$message({
        message: "取消编辑",
        type: "warming"
      });

      this.editBtn = false;
      row.edit = false;
    },
    handleEdit() {
      var size = this.selection.length;
      if (size != 1) {
        MessageBox.alert("请选择一个作品进行编辑", "提示");
        return;
      }
      this.editBtn = true;
      var row = this.selection[0];
      row.edit = !row.ed1t;
    },
    selectionChange(selection) {
      this.selection = selection;
    },
    handleDel() {
      var length = this.selection.length;
      if (length == 0) {
        MessageBox.alert("请勾选要删除的作品", "提示");
        return;
      }
      MessageBox.confirm("确认删除这" + length + "条信息")
        .then(action => {
          var tary = [];
          for (const item of this.imgList) {
            for (var tmp of this.selection) {
              if (item.id == tmp.id) {
                tary.push(item);
              }
            }
          }
          for (const item of tary) {
            var dex = this.imgList.indexOf(item);
            this.imgList.splice(dex, 1);
          }
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="less" scoped>
.editPro {
  font-size: 14px;
  .tools {
    // width: 80%;
    margin: auto;
    padding: 10px 0px 10px 0;
    // & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    button {
      margin: 0px;
    }
    // }
  }
  .table-content {
    .wrap-prod-img {
      height: 100px;
      width: 100px;
      margin: auto;
      display: flex;
      img {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>