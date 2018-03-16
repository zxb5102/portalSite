<template>
    <div class="header">
        <b-navbar :toggleable="toggleable" type="dark" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">
                <div class="wrap-logo">
                    <img src="../../assets/logo-only.png" alt="" height="36px" width="36px">
                    <span>中航长江设计师产业园</span>
                </div>
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            <em>个人信息</em>
                        </template>
                        <router-link to="/home" tag="div">
                            <b-dropdown-item href="">
                                基本信息
                            </b-dropdown-item>
                        </router-link>
                        <router-link to="/editUserInfo" tag="div">
                            <b-dropdown-item href="">
                                编辑主页
                            </b-dropdown-item>
                        </router-link>
                        <b-dropdown-item href="/Manage/ChangePassword" target="_blank">
                            修改密码
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            <em>园区服务</em>
                        </template>
                        <b-dropdown-item href="/Contract/List" target="_blank">合同审批</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="/">返回官网</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  data: () => ({
    toggleable: true,
    menuVisible: false
  })
};
</script>
<style lang="less" scoped>
.header {
  .wrap-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
