<template>
    <div class="pda">
        <section class=" pro">
            <header class="label">
                <h3>专业领域</h3>
                <p>更多>></p>
            </header>
            <div id="wrapper">
                <div id="scroller">
                    <ul>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '室内装修' }}">
                                <figure>
                                    <img src="../../assets/profession/InteriorDecoration.jpg">
                                    <figcaption>室内装修</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '外装设计' }}">
                                <figure>
                                    <img src="../../assets/profession/ExteriorDesign.png">
                                    <figcaption>外装设计</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '软装设计' }}">
                                <figure>
                                    <img src="../../assets/profession/SoftDecoration.png">
                                    <figcaption>软装设计</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '品牌策划' }}">
                                <figure>
                                    <img src="../../assets/profession/EffectPicture.jpg">
                                    <figcaption>品牌策划</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '效果图深化' }}">
                                <figure>
                                    <img src="../../assets/profession/EffectPictureDesign.jpg">
                                    <figcaption>效果图深化</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '艺术品定制' }}">
                                <figure>
                                    <img src="../../assets/profession/Artwork.jpg">
                                    <figcaption>艺术品定制</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '墙体彩绘' }}">
                                <figure>
                                    <img src="../../assets/profession/ColorDrawing.jpg">
                                    <figcaption>墙体彩绘</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '景观雕塑' }}">
                                <figure>
                                    <img src="../../assets/profession/Sculpture.jpg">
                                    <figcaption>景观雕塑</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '园林规划' }}">
                                <figure>
                                    <img src="../../assets/profession/Landscaping.jpg">
                                    <figcaption>园林规划</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '风水研究' }}">
                                <figure>
                                    <img src="../../assets/profession/ResearchOfFengshul.jpg">
                                    <figcaption>风水研究</figcaption>
                                </figure>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="product">
            <header class="label">
                <h3>设计作品</h3>
                <p>更多>></p>
            </header>
            <ul>
                <li v-for="(item , dex) in prod.md" :key="dex" v-if="dex < 4">
                    <figure>
                        <div class="wrap-img">
                            <img :src="item.src" onload="autoFitWrapImg(this)">
                        </div>
                        <figcaption>
                            <p class="wrap-text">{{item.desc}}</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
        <section class="company">
            <header class="label">
                <h3>设计所</h3>
                <p>更多>></p>
            </header>
            <ul>
                <li v-for="(item , dex) in company" :key="dex" v-if="dex < 6">
                    <a :href="item.link" target="_blank">
                        <figure>
                            <div class="wrap-img">
                                <img :src="item.src" onload="autoFitWrapImg(this)">
                            </div>
                            <figcaption>
                                <p class="wrap-text">{{item.title}}</p>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </section>
        <section class="news">
            <header class="label">
                <h3>新闻</h3>
                <p>更多>></p>
            </header>
            <ul class="news-list">
                <li v-for="(item,dex) in news.md" :key="dex" v-if="dex<2">
                    <a :href="item.link" target="_blank">
                                        {{item.title}}
                                    </a>
                </li>
            </ul>
            <ul>
                <li v-for="(item , dex) in news.md" :key="dex" v-if="dex >= 2 && dex < 4">
                    <a :href="item.link" target="_blank">
                        <figure>
                            <div class="wrap-img">
                                <img :src="item.src" onload="autoFitWrapImg(this)">
                            </div>
                            <figcaption>
                                <p class="wrap-text">{{item.desc}}</p>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </section>
        <section class="designer">
            <header class="label">
                <h3>设计师</h3>
                <p>更多>></p>
            </header>
            <ul>
                <li v-for="(item , dex) in designer" :key="dex" v-if="dex < 3 ">
                    <a :href="item.link" target="_blank">
                        <figure>
                            <div class="wrap-img">
                                <img :src="item.src" onload="autoFitWrapImg(this)">
                            </div>
                            <figcaption>
                                <p class="wrap-text">{{item.title}}</p>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    import testData from "@/testData.js";
    import $ from 'jquery';
    import IScroll from 'iscroll';
    export default {
        props: ["prod", "news", "designer", "company"],
        data() {
            return {}
        },
        methods: {},
        mounted() {
            var myScroll = new IScroll('#wrapper', {
                scrollX: true,
                scrollY: false,
                click: true,
                tap: true,
                mouseWheel: true
            });
        }
    }
</script>

<style scoped lang="less">
    @margin-bottom: 20px;
    #scroller {
        z-index: 1;
        width: 650px; // height: 100%;
        transform: translateZ(0);
        user-select: none;
        ul li a {
            display: inline-block;
        }
    }
    #wrapper {
        padding: 10px 0px;
        touch-action: none;
        position: relative;
        z-index: 1;
        top: 0px;
        bottom: 48px;
        left: 0px;
        width: 100%;
        overflow: hidden;
    }
    @media (min-width:992px) {
        .pda {
            display: none;
        }
    }
    .pro {
        width: 100%;
        background-color: white;
        margin-bottom: @margin-bottom;
        border-bottom: 1px solid #c6c6c6;
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
                max-width: 0.88rem;
            }
            figure {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            figcaption {
                flex-wrap: nowrap; // width: 80px;
                font-size: 12px;
            }
        }
    }
    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.70rem;
        padding: 7px 12px;
        h3 {
            font-size: 15px;
        }
        p {
            font-size: 12px;
            color: #999;
        }
    }
    .product,
    .company,
    .news,
    .designer {
        background-color: white;
        border-bottom: 1px solid #c6c6c6;
        margin-bottom: @margin-bottom;
        ul {
            // display: flex;
            width: 100%;
            font-size: 0px;
            align-content: center;
            justify-content: center;
            li {
                // flex: 1;
                width: 3.70rem; // width: calc(50vw - 2px); // float: left;
                display: inline-block;
                padding: 0 1px;
                color: #999; // background-color: gray;
                font-size: 12px;
                img {
                    display: inline-block; // width: 100%; // height: 100%;
                    // position: relative;
                    // top: 50%;
                    // left: 0;
                    // transform: translate(0, -50%);
                }
                .wrap-img {
                    background-color: #d3dce6;
                    height: 2.08rem;
                    //  height: 3.6rem;
                    overflow: hidden;
                    position: relative;
                }
                figcaption {
                    padding: 8px 2px 8px 12px;
                    height: 0.84rem;
                    overflow: hidden;
                }
                .wrap-text {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-align: left;
                }
            }
        }
    }
    .company,
    .designer {
        ul {
            li {
                width: 32%; // width:48%;
                // border: 1px solid #d2d0d0;
                img {
                    // width: auto;
                    // height: 100%;
                    // position: relative;
                    // left: 50%;
                    // top: 0;
                    // transform: translate(-50%, 0);
                }
                .wrap-img {
                    height: 3.28rem;
                    background-color: gray;
                    position: relative;
                }
                figcaption {
                    height: 22px;
                }
            }
        }
    }
    .company ul li {
        width: 48%; // border: 1px solid #d2d0d0;
    }
    .company ul li .wrap-img {
        height:3.6rem;
        border: 1px solid #d2d0d0;
    }
    .news {
        overflow: hidden;
        .news-list {
            padding-left: 10px;
            overflow: hidden;
            li {
                width: 100%;
                display: block;
                text-align: left;
                font-size: 14px;
                margin-bottom: 15px;
                padding-left: 31px;
                background-image: url(../../assets/arrowR.png);
                background-position: left;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
    }
</style>

