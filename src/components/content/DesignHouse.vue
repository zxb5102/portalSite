<template>
    <div class="design-house">
        <el-row :gutter="gutter">
            <el-col :span="leftCol">
                <el-row :gutter="0">
                    <el-col :span="24">
                        <div class="top-search">
                            <el-input v-model="input" placeholder="搜索设计所"></el-input>
                            <el-button size="medium" type="primary" icon="el-icon-search">搜索</el-button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="0" v-for="(item,dex) in designHouse" :key="dex">
                    <el-col :span="24" class="e-col">
                        <el-card :body-style="{ padding: '0px' }" class="e-card">
                            <div class="e-body">
                                <div class="wrap-img">
                                    <img :src="item.logo" class="image">
                                </div>
                                <div style="" class="wrap-bottom">
                                    <h3>
                                        <span>{{item.title}}</span>
                                    </h3>
                                    <p>{{item.desc}}</p>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="0">
                    <el-col :span="24">
                        <el-pagination :current-page="currentPage" @current-change="currentChange" :small="small" layout="prev, pager, next" :total="total" :page-size="pageSize">
                        </el-pagination>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="rightCol" class="hidden-md-and-down">
                <aside class="sidebar">
                    <h3>
                        <span>优秀设计师</span>
                    </h3>
                    <section >
                        <ul>
                            <li v-for="(item,dex) in designer" :key="dex" v-if="dex < 5">
                                <div class="left">
                                    <img :src="item.src" alt="">
                                </div>
                                <div class="right">
                                    <h5>
                                        <a href="">{{item.title}}</a>
                                    </h5>
                                    <p>{{item.desc}}</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </aside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import testData from "../../testData.js"
    import $ from "jquery";
    export default {
        data() {
            return {
                input: "",
                small: false,
                tabPosition: 'top',
                designHouse: testData.designHouse,
                designer:testData.designer,
                total: 40,
                pageSize: 5,
                currentPage: 1,
                leftCol: 15,
                rightCol: 9,
                gutter: 50
            };
        },
        methods: {
            currentChange: function(currentPage) {
                this.currentPage = currentPage;
            }
        },
        mounted() {
            var self = this;
            $(document).ready(function() {
                windowSizeChange.bind(self)();
                $(window).resize(() => {
                    windowSizeChange.bind(self)();
                });
            })
        }
    }
    function windowSizeChange() {
        var width = document.documentElement.clientWidth;
        if (width > 992) {
            // this.tabPosition = "left";
            this.small = false;
            this.gutter = 50;
            this.leftCol = 15;
        } else {
            // this.tabPosition = "top";
            this.small = true;
            this.gutter = 0;
            this.leftCol = 24;
        }
    }
</script>

<style scoped lang="less">
    .e-body {
        display: flex;
    }
    .wrap-img {
        height: 100px;
        width: 100px;
        overflow: hidden;
        min-width: 100px;
        @media (min-width: 992px) {
            height: 113px;
            width: 200px;
            min-width: 200px;
        }
    }
    .e-col {
        margin-bottom: 10px;
    }
    .wrap-bottom {
        padding: 14px;
        h3 {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .wrap-logo {
                height: 50px;
                width: 50px;
                border-radius: 50%;
                overflow: hidden;
            }
            img {
                max-width: 50px;
                max-height: 50px;
                margin: auto;
            }
        }
        p {
            margin-top: 13px;
            line-height: 18px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
    .design-house {
        background-color: white;
        font-size: 14px;
        width: 95%;
        margin: auto;
        @media (min-width: 992px) {
            width: 1200px;
        }
    }
    .top-search {
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        button {
            margin-left: 10px;
        }
    }
    .sidebar{
        .left{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            overflow: hidden;
            // display: flex;
            img{
                margin: auto;
                height: 100%;
                // max-width: 100%;
                // max-height: 100%;
            }
        }
        li{
            display: flex;
            background: red;
            margin-top: 30px;
        }
    }
</style>