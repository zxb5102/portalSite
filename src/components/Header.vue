<template>
    <div>
        <header>
            <div class="container">
                <div class="menu-btn">
                    <!-- <img src="../assets/menu.png" alt="" data-flag="menu">
                            <img src="../assets/close.png" alt="" data-flag=""> -->
                </div>
                <h1 class="logo">
                    <a href="">
                        <img src="../assets/logo.jpg">
                    </a>
                </h1>
                <div>
                    <ul class="nav" @click="clickNavItem($event)">
                        <li>
                            <router-link to="/index">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/professionType">专业领域</router-link>
                        </li>
                        <li>
                            <router-link to="/designHouse">设计所</router-link>
                        </li>
                        <li>
                            <router-link to="/activitiesSalon">活动沙龙</router-link>
                        </li>
                        <li>
                            <router-link to="/companyNews">公司新闻</router-link>
                        </li>
                        <li>
                            <router-link to="/CompanySite">公司官网</router-link>
                        </li>
                        <li class="login">
                            <router-link to="/CompanySite">登入/注册</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mask"></div>
        </header>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
                // methods{
            };
        },
        methods: {
            //控制 导航条的点击
            clickNavItem: function(e) {
                var item = $(e.target).parent();
                item.siblings().removeClass("active");
                if (!item.hasClass("active")) {
                    item.addClass("active");
                }
            }
        },
        mounted:function(){
            var nav = document.querySelector("ul[class*=nav]");
            console.log(nav);
            var height  = document.documentElement.clientHeight - 51 ;
            $(nav).height(height);
        }
    };
</script>

<style scoped lang="less">
    .mask{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }
    header {
        border-bottom: 1px solid black;
        position: relative;
    }
    @media (max-width:992px) {
        .container {
            height: 50px;
        }
    }
    @media (min-width: 992px) {
        .container {
            height: 105px;
        }
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        max-width: 1200px;
        margin: auto;
        a {
            color: black; // font-size: 50px;
        }
        .menu-btn-close {
            width: 30px;
            height: 30px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(../assets/close.png);
        }
        .menu-btn-normal {
            width: 30px;
            height: 30px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(../assets/menu.png);
        }
        @media (min-width: 992px) {
            ul {
                display: flex;
            }
            .menu-btn {
                display: none;
            }
        }
        @media (max-width:992px) {
            ul {
                display: block;
                position: absolute;
                top: 51px;
                left: 0px;
                width: 40%; // height: 100%;
            }
            .menu-btn {
                display: block;
                height: 30px;
            }
            h1 img {
                height: 40px;
            }
        }
        ul {
            flex: 1;
            z-index: 20;
            justify-content: space-around;
            align-items: center;
            a {
                display: inline-block;
                text-decoration: none;
                padding: 15px;
                font-size: 18px;
                font-weight: bold;
                transition: .15s ease-out;
            }
            a:hover {
                color: #fff;
            }
            .login {
                a {
                    font-size: 14px;
                }
            }
            li {
                transition: .15s ease-out;
            }
            li:hover {
                background-color: #a9a9a9;
            }
            .active {
                background: #a9a9a9;
                a {
                    color: #fff;
                }
            }
        }
        .logo {
            padding: 10px;
            font-size: 0px;
            display: inline-block;
        }
    }
</style>