<template>
  <div class="login">
    <el-card>
      <h3 class="login-title">欢迎登入</h3>
      <el-form :model="ruleForm" label-width="0px" :rules="rules" ref="ruleForm">
        <el-form-item label="" prop="user">
          <el-input placeholder="用户名" prefix-icon="user" v-model="ruleForm.user">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="pwd">
          <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="ruleForm.pwd">
          </el-input>
        </el-form-item>
        <!-- <div class="wrap-remember"> -->
        <el-form-item class="wrap-remember">
          <span class="remember-text">记住密码</span>
          <el-switch v-model="remember">
          </el-switch>
        </el-form-item>
        <!-- <el-form-item label="记住密码">
          <el-switch v-model="remember"></el-switch>
        </el-form-item> -->
        <!-- </div> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="loginBtn">登入</el-button>
        </el-form-item>
        <div class="text-btn">
          <span>
                <router-link to="/entry/register">注册账号</router-link>
            </span>
          <span>忘记密码</span>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import $ from "jquery";
  export default {
    data() {
      return {
        remember: false,
        leftCol: 14,
        rightCol: 8,
        offset: 2,
        gutter: 30,
        ruleForm: {
          user: "",
          pwd: "",
        },
        rules: {
          pwd: [{
            required: true,
            message: "密码不能为空"
          }],
          user: [{
            required: true,
            message: "用户名不能为空"
          }]
        }
      }
    },
    mounted() {
      // alert();
      var self = this;
      // bus.$emit('navFit')
      $(document).ready(function() {
        windowSizeChange.bind(self)();
        $(window).resize(() => {
          windowSizeChange.bind(self)();
        });
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
  function windowSizeChange() {
    var width = document.documentElement.clientWidth;
    // debugger;
    if (width > 992) {
      // this.show = false;
      // leftCol: 14,
      this.rightCol = 8;
      this.offset = 2;
      this.gutter = 30;
    } else {
      this.rightCol = 24;
      this.offset = 0;
      this.gutter = 0;
      // rightCol: 8,
      // offset: 2,
      // gutter: 30,
    }
  }
</script>

<style scoped lang="less">
  .login {
    font-size: 14px;
    @media (max-width: 992px) {}
    .ruleForm {
      width: 70%;
      margin: auto;
    }
    .loginBtn {
      width: 100%
    }
    .text-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span,
      a {
        cursor: pointer;
        color: #827979;
        &:hover {
          color: black;
        }
      }
    }
    .login-title {
      line-height: 20px;
      font-size: 18px;
      padding-bottom: 20px;
    }
    .wrap-remember {
      text-align: left; // display: flex;
      .remember-text {
        color: #827979;
        margin-right: 20px;
      }
    }
  }
</style>

