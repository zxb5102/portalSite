<template>
    <div class="register">
        <el-tabs type="border-card">
            <el-tab-pane label="个人用户">
                <el-form :model="ruleForm" label-width="0px" :rules="rules" ref="ruleForm">
                    <el-form-item label="" prop="user">
                        <el-input placeholder="用户名" prefix-icon="user" v-model="ruleForm.user">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="email">
                        <el-input placeholder="邮箱" prefix-icon="email" v-model="ruleForm.email">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                        <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="ruleForm.pwd">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" class="loginBtn">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="建材商">
                <el-form :model="ruleForm" label-width="0px" :rules="rules" ref="ruleForm">
                    <el-form-item label="" prop="companyName">
                        <el-input placeholder="建材商名称" prefix-icon="company-icon" v-model="ruleForm.companyName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="user">
                        <el-input placeholder="联系人" prefix-icon="user" v-model="ruleForm.user">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="email">
                        <el-input placeholder="邮箱" prefix-icon="email" v-model="ruleForm.email">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                        <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="ruleForm.pwd">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" class="loginBtn">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="设计师">
                <el-form :model="ruleForm" label-width="0px" :rules="rules" ref="ruleForm">
                    <el-form-item label="" prop="houses" :error="cascaderError">
                        <el-cascader @focus="cascaderFocus" @active-item-change="handleItemChange" v-model="ruleForm.houses" @blur="cascaderBlur" :show-all-levels="false" placeholder="设计所名称" :options="options" size="100%"></el-cascader>
                    </el-form-item>
                    <el-form-item label="" prop="user" :error="userError">
                        <el-input placeholder="用户名" prefix-icon="user" v-model="ruleForm.user">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="realName" :error="realNameError">
                        <el-input placeholder="姓名" prefix-icon="user" v-model="ruleForm.realName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="email" :error="emailError">
                        <el-input placeholder="邮箱" prefix-icon="email" v-model="ruleForm.email">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                        <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="ruleForm.pwd">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" class="loginBtn">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <span class="back-login">
                <router-link to="/entry/login">返回登入</router-link>
            </span>
        </el-tabs>
    </div>
</template>

<script>
    import $ from "jquery";
    import testData from "../../testData";
    export default {
        data() {
            return {
                userError: "",
                cascaderError: "",
                emailError: "",
                realNameError: "",
                options: [],
                offset: 2,
                gutter: 30,
                ruleForm: {
                    user: "",
                    pwd: "",
                    email: "",
                    companyName: "",
                    realName: "",
                    houses: []
                },
                rules: {
                    pwd: [{
                        required: true,
                        message: "密码不能为空"
                    }],
                    user: [{
                        required: true,
                        message: "用户名不能为空"
                    }],
                    email: [{
                        required: true,
                        message: "邮箱不能为空"
                    }],
                    realName: [{
                        required: true,
                        message: "姓名不能为空"
                    }],
                    companyName: [{
                        required: true,
                        message: "建材商名不能为空"
                    }],
                    houses: [{
                        required: true,
                        message: "设计所不能为空"
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
            handleItemChange(parent) {
                // console.log(parent);
                // setTimeout(() => {
                //     this.options = testData.cascadeOpt;
                // }, 300);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {} else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            cascaderBlur() {
                if (this.ruleForm.houses.length == 0) {
                    this.cascaderError = "设计所不能为空";
                }
            },
            cascaderFocus() {
                this.options = testData.cascadeOpt;
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
    .register {
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
        .remote-message {
            margin-bottom: 22px;
        }
        .back-login {
            a {
                cursor: pointer;
                color: #827979
            }
        }
    }
</style>