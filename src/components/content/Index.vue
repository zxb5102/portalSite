<template>
    <div>
        <div>
            <el-carousel :height="carouselHeight" :autoplay="autoplay" trigger="click" :type="type" :options="{preventDefault: false}">
                <el-carousel-item v-for="item in indexTopImgs" :key="item.img">
                    <a :href="item.link">
                        <img :src="item.img" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <main>
            <section class="pro">
                <!-- <h3>专业领域</h3> -->
                <div id="wrapper">
                    <div id="scroller">
                        <ul>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/InteriorDecoration.jpg">
                                    <figcaption>室内装修</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/ExteriorDesign.png">
                                    <figcaption>外装设计</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/SoftDecoration.png">
                                    <figcaption>软装设计</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/EffectPicture.jpg">
                                    <figcaption>品牌策划</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/EffectPictureDesign.jpg">
                                    <figcaption>效果图深化</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/Artwork.jpg">
                                    <figcaption>艺术品鉴定</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/ColorDrawing.jpg">
                                    <figcaption>墙体彩绘</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/Sculpture.jpg">
                                    <figcaption>景观雕塑</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/Landscaping.jpg">
                                    <figcaption>园林规划</figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src="../../assets/profession/ResearchOfFengshul.jpg">
                                    <figcaption>风水研究</figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import testData from "@/testData.js";
    import IScroll from 'iscroll';
    import $ from 'jquery';
    // import Vue from 'vue'
    // import IScrollView from 'vue-iscroll-view';
    // import IScroll from 'iscroll';
    // console.log(testData);
    export default {
        data() {
            return {
                carouselHeight: "450px",
                indexTopImgs: testData.indexTopImgs,
                autoplay: false,
                type: "",
                scale: 1040 / 248
            }
        },
        methods: {},
        mounted() {
            var height = document.documentElement.clientWidth / this.scale;
            if (height < 115) {
                this.type = "card";
                height = 115;
            }
            this.carouselHeight = height + "px";
            $(window).resize(() => {
                var height = document.documentElement.clientWidth / this.scale;
                this.carouselHeight = height + "px";
                if (height < 115) {
                    this.carouselHeight = "150px"
                    this.type = "card";
                } else {
                    this.carouselHeight = height + "px";
                    this.type = "";
                }
            });
            var myScroll = new IScroll('#wrapper', {
                scrollX: true,
                scrollY: false,
                mouseWheel: true
            });
        }
    }
</script>

<style scoped lang="less">
    #scroller {
        // position: absolute;
        z-index: 1;
        width: 650px;
        height: 100%;
        transform: translateZ(0);
        user-select: none;
    }
    #wrapper {
        padding:10px 0px;
        touch-action: none;
        position: relative;
        z-index: 1;
        top: 0px;
        bottom: 48px;
        left: 0px;
        width: 100%;
        overflow: hidden;
    }
    @media (max-width:992px) {
        .carousel {
            height: 200px;
        }
        .el-carousel__item {
            display: flex;
            align-items: center;
        }
    }
    @media (min-width:992px) {
        .carousel {
            height: 450px;
        }
    }
    .el-carousel__item {
        a {
            display: inline-block;
            width: 100%;
            font-size: 0px;
        }
        img {
            width: 100%;
        }
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .pro {
        width: 100%;
        ul {
            width: 100%; 
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 14px;
            li {
                padding: 0 0px;
            }
            img {
                font-size: 0px;
                max-width: 30px;
            }
            figure {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            figcaption {
                flex-wrap: nowrap;
                // width: 80px;
                font-size: 12px;
            }
        }
    }
</style>

