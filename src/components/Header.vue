<template>
    <div>
        <header>
            <div class="container">
                <div class="menu-btn menu-btn-normal" @click="clickMenuBtn($event)">
                    <!-- <img src="../assets/menu.png" alt="" data-flag="menu">
                                                                    <img src="../assets/close.png" alt="" data-flag=""> -->
                </div>
                <h1 class="logo">
                    <a href="">
                        <img src="../assets/logo.jpg">
                    </a>
                </h1>
                <div>
                    <ul class="nav nav-close" @click="clickNavItem($event)">
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
            <div class="nav-mask" @click="clickMask($event)"></div>
        </header>
    </div>
</template>

<script>
    import $ from 'jquery';
    function navOpen() {
        var nav = document.querySelector(".nav");
        $(nav).removeClass("nav-close").addClass("nav-open");
    }
    function navClose() {
        var nav = document.querySelector(".nav");
        $(nav).removeClass("nav-open").addClass("nav-close");
    }
    function menuBtnClose() {
        $(".menu-btn").eq(0).removeClass("menu-btn-normal").addClass("menu-btn-close");
        maskShow();
    }
    function menuBtnOpen() {
        $(".menu-btn").eq(0).removeClass("menu-btn-close").addClass("menu-btn-normal");
        maskHide();
    }
    function maskShow() {
        $(".nav-mask").eq(0).fadeIn(150);
    }
    function maskHide() {
        $(".nav-mask").eq(0).fadeOut(150);
    }
    export default {
        data() {
            return {
                // msg: "Welcome to Your Vue.js App"
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
                //关闭导航条展示
                navClose();
                menuBtnOpen();
            },
            clickMenuBtn: function(e) {
                var item = $(e.target);
                var flag = item.hasClass("menu-btn-normal");
                if (flag) {
                    menuBtnClose();
                    navOpen();
                } else {
                    menuBtnOpen();
                    navClose();
                }
            },
            clickMask: function(e) {
                navClose();
                menuBtnOpen();
                maskHide();
            }
        },
        mounted: function() {
            var nav = document.querySelector("ul[class*=nav]");
            var height = document.documentElement.scrollHeight - 51;
            $(nav).height(height);
            $(window).resize(() => {
                var height = document.documentElement.scrollHeight - 51;
                $(nav).height(height);
                maskHide();
                menuBtnOpen()
                navClose();
            });
        }
    };
</script>

<style scoped lang="less">
    @transition: .15s ease-out;
    @time: 150;
    .nav-mask {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }
    header {
        border-bottom: 1px solid black;
        position: relative;
    }
    .menu-btn {
        cursor: pointer;
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
        position: relative;
        z-index: 20;
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
            width: 25px;
            height: 25px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(../assets/close.png);
        }
        .menu-btn-normal {
            width: 25px;
            height: 25px;
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
                width: 35%;
                transition: @transition; // height: calc(100vh - 51px);
                background-color: white;
            }
            .nav-open {
                left: 0%;
            }
            .nav-close {
                left: -35%;
            }
            .menu-btn {
                display: block;
                transition: @transition;
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
                @media (max-width: 992px) {
                    font-size: 15px;
                }
                font-size: 18px;
                font-weight: bold;
                transition: @transition;
            }
            a:hover {
                color: #fff;
            }
            .login {
                a {
                    font-size: 14px;
                    @media (max-width: 992px) {
                        font-size: 12px;
                    }
                }
            }
            li {
                transition: @transition;
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