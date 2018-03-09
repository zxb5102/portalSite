export default {
    /**
        img 首页图片轮播的地址 
        link 点击图片的链接地址
     */
    indexTopImgs: [
        {
            img: "/static/indexTop/big1.jpg",
            link: "#"
        },
        {
            img: "/static/indexTop/big2.jpg",
            link: "#"
        },
        {
            img: "/static/indexTop/big3.jpg",
            link: "#"
        },
        {
            img: "/static/indexTop/big4.jpg",
            link: "#"
        },
        {
            img: "/static/indexTop/big5.jpg",
            link: "#"
        },
    ],
    /**
        这个是设计作品展示的图片 
        bg 代表那个较大的横向图片集合 
        md  代表那个 中等 普通的图片集合     

        src 图片地址
        title 设计作品的名字
        desc 描述
        link  点击设计作品的链接  （设计作品的这个链接现在可以不提供）
     */
    prod: {
        bg: [
            {
                src: "/static/product/6.jpg",
                title: "红谷滩天悦港式样板房",
                desc: "美学的理念，细致的态度，实在的品质，从空间规划入手，注重自然和谐的完美诠释。 美学的理念，细致的态度，实在的品质，从空间规划入手，注重自然和谐的完美诠释。",
                link: "#"
            }
        ],
        md: [
            {
                src: "/static/product/1.jpg",
                title: "红谷滩天悦港式样板房",
                desc: "美学的理念，细致的态度，实在的品质，从空间规划入手，注重自然和谐的完美诠释。",
                link: "#"
            },
            {
                src: "/static/product/5.jpg",
                title: "宽舍",
                desc: "突破性的构想，优雅的享受，高格调的设计，空间的充分利用，让你感受不一样的美。",
                link: "#"
            },
            {
                src: "/static/product/4.jpg",
                title: "宁波博物馆",
                desc: "莲花式造型，给博物馆增添了活力。",
                link: "#"
            },
            {
                src: "/static/product/1.jpg",
                title: "马芮诗家居",
                desc: "优雅的环境，舒适的空间。帮你瞬间削减疲劳。",
                link: "#"
            },
            {
                src: "/static/product/2.jpg",
                title: "高安别墅",
                desc: "高贵舒适的休息环境，帮你瞬间削减疲劳。",
                link: "#"
            }
        ]
    },
    /**
        这个是公司数据
        src  是公司的logo 地址 
        title  是公司的名字 
        link 是点击 公司图标后跳转的地址
     */
    company: [
        {
            src: "/Photos/Company/Logo/%E8%AE%BE%E8%AE%A1%E5%8D%81%E4%B8%80%E6%89%80.jpg",
            title: "五福装饰设计",
            link: "/Home/DesignerPage?parameter=11"
        },
        {
            src: "/Photos/Company/Logo/logo6.jpg",
            title: "俞工设计",
            link: "/Home/DesignerPage?parameter=6"
        },
        {
            src: "/Photos/Company/Logo/%E8%AE%BE%E8%AE%A1%E4%B8%80%E6%89%80.JPG",
            title: "合橙",
            link: "/Home/DesignerPage?parameter=1"
        },
        {
            src: "/Photos/Company/Logo/QQ%E5%9B%BE%E7%89%8720171225100239.jpg",
            title: "赫柏",
            link: "/Home/DesignerPage?parameter=10"
        },
        {
            src: "/Photos/Company/Logo/logo13.jpg",
            title: "泥土巴巴",
            link: "/Home/DesignerPage?parameter=13"
        },
        {
            src: "/Photos/Company/Logo/logo5.JPG",
            title: "悦城空间设计",
            link: "/Home/DesignerPage?parameter=5"
        }
],
    /**
        这个是设计师数据
        src 是设计师的照片 地址 
        title 是设计师的姓名
        link 是点击设计师图标的跳转地址
     */
    designer: [
        {
            src: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/Designer/designer1.jpg",
            title: "刘文毅",
            desc: "方胜设计所：设计总监",
            link: "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=2"
        },
        {
            src: "http://cyy.zhcjjs.com/Photos/Company/Designer/Designer61.jpg",
            title: "俞礼刚",
            desc: "俞工设计师机构：设计总监",
            link: "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=6"
        },
        {
            src: "http://cyy.zhcjjs.com/Photos/Company/Designer/DesignerWang.jpg",
            title: "王长青",
            desc: "长鑫幕墙设计所：设计总监",
            link: "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=8"
        },
        {

            src: "http://cyy.zhcjjs.com/Photos/Company/Designer/Designer91.jpg",
            title: "刘小毛",
            desc: "弈凡幕墙设计顾问工作室：设计总监",
            link: "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=9"
        },
        {

            src: "http://cyy.zhcjjs.com/Photos/Company/Designer/Liuboya.jpg",
            title: "刘泊言",
            desc: "觉是设计所：设计总监",
            link: "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=10"
        },
        {
            src: "http://cyy.zhcjjs.com/Photos/Company/Designer/DesignerNtbb1.jpg",
            title: "龙木园",
            desc: "泥土巴巴墙体彩绘：设计总监",
            link: "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=13"
        },
    ],
    /**
        新闻数据 
            bg  是具有横向大图的新闻集合 
            md  是具有普通的新闻图片集合 
            
            src 是新闻图片的地址
            title 是新闻标题 
            desc 新闻描述
            link  点击后的跳转地址 
     */
    news: {
        bg: [
            {
                src: "/static/news/New.jpg",
                title: "总理李克强考察中航长江设计师产业园",
                desc: "2016年8月23日，中共中央政治局常委，国务院总理李克强， 在江西省委书记熊心社，省委副书记，省长刘奇等省、市领导的陪同下，莅临中航长江设计师创意产业园视察，受到中航长江董事长李涛和全体员工的热烈欢迎。更多",
                link: "http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=1"
            }
        ],
        md: [

            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/School&Enterprise/DSC_3770.jpg",
                title: "老牌校企联合，助力梦想起航",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-05-16",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=2",
                desc: "5月12日，江西师范大学美术学院-中航长江实践教学基地签约仪式在江西师范大学美术学院（以下简称“江西师大美术学院”）举行。江西师大美术学院院长马志明、美术学院党委书记杨卫军、美术学院党委副书记方旺春、美术学院环境设计系主任方强华、中航长江建设工程有限公司（以下简称“中航长江”）常务副总经理李伟、设计研究院院长刘文毅等领导共同出席了此次签约仪式。签约仪式由美术学院党委副书记方旺春主持。仪式上，江西师大美术学院院长马志明首先"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/CommitteeMember/1.jpg",
                title: "团市委书记盛炜一行走进中航长江",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-07-07",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=5",
                desc: "为全面掌握全市各县团委上半年重点工作推进落实情况，营造“比学赶超”的良好氛围，7月6日下午，团市委书记盛炜携团市委各部门负责人以及全市各县区团委负责人、市青联委员代表一行30余人，莅临中航长江设计师产业园（以下简称“设计师产业园”）参观"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/StudentSubsidies/IMG_5245.jpg",
                title: "青云谱区2017“汇聚爱心 幸福成长”庆六一爱心助学活动",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-06-02",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=4",
                desc: "为积极响应南昌市“兴家风、淳民风、正社风”活动号召，5月31日上午，青云谱区妇联、青云谱星星草服务社携手中航长江建设工程有限公司（以下简称“中航长江”），在青云谱区万溪王华霖小学举办了“庆祝六一，爱心助学”活动。青"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/ChuBusiness/IMG_6168.jpg",
                title: "楚商集团总裁李树锋一行莅临中航长江考察",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-05-23",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=3",
                desc: "7月7日，楚商集团董事局主席、总裁李树锋，楚商集团行政副总裁刘宏伟，楚商集团资产管理有限公司总经理刘幼平，楚商集团顾问专家赵开胜，武汉国田室内设计顾问有限公司总经理柳小飞一行莅临中航长江设计师产业园（以下简称“设计师产业园”），就合作投资在武汉建设设计师产业园的相关合作事项进行实地考察及座谈，受到了中航长江建设工程有限公司（以下简称“中航长江”）董事长李涛，总经理李鹰南，副总经理邬勤，设计师产业园研究院院长刘文毅的热情接待"
            }
        ]
    },
    /**
            专业领域的数据 
                content  是每个领域包含的数据 集合
                    id 唯一标识 （暂时可以先不提供）
     */
    pro:
[
    {
        "name": "室内装饰                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/CITY台湾奶茶_020.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计一所.JPG",
                "title": "合橙设计所",
                "desc": "合橙是一家专注于品牌形象设计的专业研究机构。多年来，一直致力于打造集战略高度、设计深度、执行速度三度一体的设计模式。合橙擅长以精准的策略切中本质，以创意的设计提升附加值；专注于品牌塑造，为企业提供品牌策划、终端SI系统设计、平面视觉设计等服务；塑造品牌的过程就是在塑造品牌气质的过程。严谨的逻辑为骨架、支撑起品牌呈现的核心是体验、而最终呈现的结果则由用户感知；在此过程中、空间、平面、音乐、味道、交互、产品、服务等所有能刺激到受众知觉的元素均在可利用的元素之中；设计则是如何针对体验目标合理选择这些元素、并打散重组这些信息塑造品牌气质的过程、这就是现代品牌设计的逻辑",
                "phone": "13767037370",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=1"
            }
        ]
    },
    {
        "name": "外装设计                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/花园.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/FSlogo.JPG",
                "title": "方胜设计所",
                "desc": "工作室由刘文毅先生于2009年创办，室内外装饰设计于一体，项目涉及别墅、办公室、酒店会所等。团队成员皆为业内资深规划设计人士。秉承“美学的理念，细致的态度，实在的品质” 的工作作风，从空间规划入手，注重自然和谐的完美诠释。主要负责过，山东菏泽-南华购物广场项目，北京市密云国税局招待所项目 宜春市翰金宾馆外观改造项目 科瑞金鼎矿业公司办公室 抚州市临川新城售楼处，抚州市崇仁县行政中心大厅及成果展厅 樟树市锦绣共和售楼处，樟树市锦绣共和商业街2012酒吧 安义市上海湾968会所，南昌市克丽缇娜美容会所（0791艺术中心），湾里九州铭城样板房，    南昌市小兰工业园区鼎恒实业办公楼等。",
                "phone": "13870692757",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=2"
            },
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/Product/IMG_8697_show.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo12.jpg",
                "title": "设计十二所",
                "desc": "工作室由陈福明先生于2008年创办，集规划与景观设计、室内外装饰设计、绘画与景观雕塑小品设计制作于一体，项目涉及风景区、文化街区及镇村、生态园、酒店会所等。团队成员皆为业内资深规划设计人士。工作室秉承“世界眼光，生态理念，设计品质”，从空间规划入手，注重自然和谐的完美诠释。主要案例：2004年，第二届四川省花卉博览会总体规划,2009年，云境生态园酒店（南昌市广州路）,2010年，云境生态园酒店（南昌市高新五路）,2011年，南昌市湾里区梅岭镇景观改造规划与设计,2011年，华夏艺术谷文化产业园总体规划（南昌市红角洲）,2012年，南昌市湾里区旅游景区环线公路景观总体规划与设计,2012年，狮子峰景区总体规划与设计（四星级）,2013年，竹海明珠景区（梅岭主峰景区）总体规划与设计（四星级）,2014年，南昌市湾里区太平镇特色小镇建设总体规划,2015年，徽州新文化产业园规划（安徽省黄山市）,2015年，安义县安义古村群深度开发项目设计",
                "phone": "13503502770",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=12"
            }
        ]
    },
    {
        "name": "软装设计                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/5Show.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计三所.jpg",
                "title": "意大利迈致建筑设计事务所",
                "desc": "MZA（ANTONIO MEI &QIANJING ZHOU  ARCHITETTI的简称）的主要领域是商业空间和销售场所及高端住宅的设计。事务所是以室内建筑师ANTONIO  MEI梅皓和室内建筑师周前进的名字命名并由他们共同创建了这个建筑事务所,它坐落在意大利的褔贾（Foggia）。\nMZA的核心价值是可持续性的互动设计，这种设计手法能表达了设计过程中涉及了与环境、建筑本身、客户、消费者、多领域学科及所有一切与之相关的事物和人，只有在持续互相作用的情况下才能完成一个成功的设计项目。在室内设计、家具设计和产品设计中通过对材料的选择去创造恰当的设计语言，对待所有元素和摆设的设计和放置的方法都非常苛求完善。尊重环境和建筑物本身的特质，不盲目的追求时尚和创造永恒的空间的是我们的所追求的，在空间里奢华是建立在舒适的基础上的，而不是仅仅停留在流光溢彩的表面。我们希望能以功能性为前提下，在空间中的产品或人是设计方案的中心，充分的考虑项目的所在的环境以及空间的背景信息，室内空间能够调动参与者所有的感官体验，这就是我们一直所遵循的工作准则。代表作品：泰豪590茶会所、金润会馆、重庆刘一手火锅、澄湖教育集团幼儿园、珠海友情连锁酒店、南昌洗药湖山庄后期软装、皇冠国际酒店后期软装、力高地产样板房后期软装、博泰静林府样板房后期软装、一汽大众4S店、绿地山庄、经地兰宫、保利、静林府、海珀兰庭、恒茂华城、滨江壹号、紫金城、恒茂国际都会、万科、万达星城等",
                "phone": "18007099870",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=3"
            },
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/fygntbb1399999273699.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo13.jpg",
                "title": "泥土巴巴墙体彩绘【南昌】工作室",
                "desc": "泥土巴巴墙体彩绘工作室，自2010年成立至今，5年墙绘品牌，1100多幅作品。一直专注于创意墙体彩绘创作，是一家以手绘家居与心灵美学创作为核心的专业墙绘工作室，主营业务包括室内外绘画艺术创作等。泥土巴巴墙体彩绘一直秉承“顾客至上”原则，致力于为客户提供优质完善的家居艺术解决方案，满足不同客户的美学精神需求，打造现代化完美个性的家居空间，引领家居装饰时尚前沿。泥土巴巴拥有一支具有多年手绘技术经验的专业队伍，大部分来自全国各大美院高校，多年来凭借扎实的绘画功底和良好的服务态度获得客户的一致认同和亲睐。泥土巴巴墙绘为客户量身定制不同绘画方案，每幅作品均源自客户自身的性格与情感体现，用艺术雕琢您的心灵，满足您深层次的精神需求，是我们最大的使命。",
                "phone": "18170916982",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=13"
            }
        ]
    },
    {
        "name": "品牌策划                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/bjxd13.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计四所.jpg",
                "title": "安空间设计所",
                "desc": "工作领域：住宅及样板房、别墅豪宅、酒店会所、酒楼餐厅、展览展示、商业空间、写字楼及办公空间",
                "phone": "13879179036",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=4"
            }
        ]
    },
    {
        "name": "效果图深化               ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/sgwd01.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo5.JPG",
                "title": "悦城空间设计机构",
                "desc": "悦城空间设计机构由徐乐城先生创建于2005年创办，集酒店会所设计与商业空间，别墅，写字楼设计、其它室内外装饰设计等。团队成员皆为业内资深设计人士。秉承“独特眼光，生态理念，设计品质”，以人为本的原则从空间规划入手，注重自然和谐的完美诠释。主要作品：湖南凤凰花园酒店（五星级）、泽园休闲会所 米兰假日酒店（南昌店）、鹰潭市驻南昌办事处 饭是钢大酒店、深圳万科四季花园 米兰花园酒店（南昌店）、深圳东海花园 华鑫大酒店、网缘网咖 江西千爱艺术酒店、深圳齐名别墅 沙宣（南昌店）、保利别墅 BYD比亚迪汽车南昌4S店、绿地别墅 汇仁集团综合楼会所、万年商会",
                "phone": "13870690753",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=5"
            },
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/dyxg01.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo15.JPG",
                "title": "8023效果图工作室",
                "desc": "8023 效果图工作室设计制作中心，是专业从事表现设计辅助工作。业务涉及家装效果图、建筑效果图、工装效果图、cad施工图专业深化。全程的服务，客户的满意是我们的宗旨，您的认可是我们的动力。8023工作室 全体人员立志打造专业、完美、创新的作品。近期作品有：进贤自建别墅，南昌阳光佳苑，南昌万达星城等。\n",
                "phone": "18579061024",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=15"
            }
        ]
    },
    {
        "name": "墙体彩绘                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/nclgdx1.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo6.jpg",
                "title": "俞工设计师机构",
                "desc": "俞工设计机构2009年成立，一家专业从事室内外设计的设计机构，经过6年的整合和发展，我们有非常成熟的高端设计师团队，业务也已经成熟定位。设计总监俞礼纲，高级室内建筑室、CIID(中国建筑学会室内分会)江西专委会委员，荣获中国百名优秀室内建筑师称号，其作品遍及全图各地。俞工设计机构以房产开发精装、办公空间及私人会所装饰、精品住宅设计等业务为主。项目涉及，房产开发相关精装修设计（销售中心，样板房，大楼公区等），办公大楼、办公空间及私人会所设计和精品住宅室内设计。",
                "phone": "13767050809",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=6"
            }
        ]
    },
    {
        "name": "景观雕塑                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/瑞昌高铁南站.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计八所.jpg",
                "title": "长鑫幕墙设计所",
                "desc": "       长鑫幕墙专业团队成立于2014年10月，专业提供幕墙、门窗、钢结构技术服务(方案设计、施工图设计、下单、钢结构、相关方案的成本预算、设计图纸审核、施工现场等相关服务)来协助业主、建筑师及施工单位成功的完成幕墙工程。\n我们团队由经验丰富幕墙设计师、结构师组成，主持或参与过国内外大型幕墙工程的设计工作，充分考虑幕墙成本，合理利用幕墙材料，随时掌握幕墙技术的最新发展，并且通过不断参与众多优秀建筑项目合作，使长鑫幕墙技术水平走在行业的前沿。我们以技术、价值、创新的不断融合，与所有致力于提升幕墙品质的同仁一道，为幕墙技术人才创造更加宽广的平台，为客户创造更大的产品价值，为社会建造更加环保舒适的绿色建筑！",
                "phone": "18720998770",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=8"
            }
        ]
    },
    {
        "name": "艺术品定制               ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/保税商品展示交易物流中心.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo9.jpg",
                "title": "弈凡幕墙设计顾问工作室",
                "desc": "弈凡幕墙设计顾问工作室是一家独立于第三方的幕墙设计、咨询机构，专业从事建筑门窗幕墙系统的设计及咨询顾问，凭借多年积累的铝合金设计顾问服务经验和专业技术经验，秉承公平公正的原则，帮助业主做好项目成本控制，协助建筑师的建筑理念圆满地实现，对施工承包商的监督到位，与业主和项目相关专业团队共同打造精品工程。  我们专注于门窗幕墙的招标图设计、标准化设计、外观效果方案设计、施工图设计、成本控制、施工过程控制和钢结构设计等，确保我们的专业服务最大限度满足于客户的需要是我们对每一个项目关注的中心。我们拥有最先进的、全面高效的幕墙设计理念，为建筑行业中的客户提供技术支持、综合设计流程的管理并辅助各个阶段的综合规划和实施等服务。我们的整体幕墙设计工作，有机地结合了最前沿的建筑节能、绿色建筑的理念。在建筑外围护结构的设计中，将建筑规划、结构、物理和节能灯相关要求综合考虑，为客户提供最优的解决方案。   弈凡设计（顾问）工作室汇集了一批国内顶尖的幕墙设计师，为客户提供量身定制的一站式、高集成的建筑幕墙设计及相关技术服务。技术团队成员均出身国内顶尖幕墙企业，经验丰富，团队业绩遍布全国各地。公司将竭诚为客户提供及时、贴身的技术服务。",
                "phone": "13807910370",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=9"
            }
        ]
    },
    {
        "name": "园林规划                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/DJQL7187.jpg",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/QQ图片20171225100239.jpg",
                "title": "觉是设计所",
                "desc": "赫柏整体设计,专业环境艺术设计机构，承接全国各地楼盘样板间、售楼处、会所、酒店、别墅等整体空间设计工程。赫柏设计,自2010年成立以来，汇聚众多设计精英，组成强大的设计与实施团队，拥有出色的设计开发能力及市场整合能力，以优,质的设计及实施为国内多家大型地产商及各类商业空间提供专业服务。,让我,们一起用最好的艺术来打造品质空间，“Hold,Best,Art”!主要作品有：上海花桥梦世界电影文化综合体售楼会所，红谷滩联泰七号广场后现代风格售楼部，高新区云中城现代风格售楼处(软装)，红角洲联泰天悦港式风格售楼部,、楼盘样板房，,联泰天悦港式及欧式样板房，联泰七号广场ＬＯＦＴ公寓样板间，上海保利茉莉公馆别墅美式样板房，万科金域蓝湾精装修样板房(软装)，万科海上传奇精装修样板房(软装)，,抚州紫海中央城精装样板房(软装)，燕国际温泉度假村样板别墅(软装)，嘉丰集团地产湾里别墅样板房,绿都置业.绿都阳光样板间,博泰蓝岸香舍售楼处及样板间,博泰高新湖韵天城样板间,力高国际香港唯一婚礼会所,上海思南公馆老别墅私人会所,南昌红谷滩游艇主题私人会所,南昌高新区马芮诗家居旗舰总店,南昌和德昌茶庄,南昌七彩云南茶庄,丰城车间主任主题餐厅,丰城华艺整体家居软装旗舰总店,丰城九中办公大楼及礼堂。",
                "phone": "13970858876",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=10"
            }
        ]
    },
    {
        "name": "风水研究                ",
        "content": [
            {
                "src": "http://cyy.zhcjjs.com/Photos/Company/Product/娱乐中心外观效果图.JPG",
                "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计十一所.jpg",
                "title": "深圳五福装饰设计有限公司",
                "desc": "主要作品有：香港力高集团江西南昌皇冠国际，湖南·凤凰山庄酒店等项目。",
                "phone": "13807031588",
                "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
                "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=11"
            }
        ]
    }
]
,
    designHouse: [
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计一所.JPG",
        "title": "合橙设计所",
        "desc": "合橙是一家专注于品牌形象设计的专业研究机构。多年来，一直致力于打造集战略高度、设计深度、执行速度三度",
        "phone": "13767037370",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=1"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/FSlogo.JPG",
        "title": "方胜设计所",
        "desc": "工作室由刘文毅先生于2009年创办，室内外装饰设计于一体，项目涉及别墅、办公室、酒店会所等。团队成员",
        "phone": "13870692757",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=2"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计三所.jpg",
        "title": "意大利迈致建筑设计事务所",
        "desc": "MZA（ANTONIO MEI &QIANJING ZHOU  ARCHITETTI的简称）的主要领",
        "phone": "18007099870",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=3"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计四所.jpg",
        "title": "安空间设计所",
        "desc": "工作领域：住宅及样板房、别墅豪宅、酒店会所、酒楼餐厅、展览展示、商业空间、写字楼及办公空间",
        "phone": "13879179036",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=4"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo5.JPG",
        "title": "悦城空间设计机构",
        "desc": "悦城空间设计机构由徐乐城先生创建于2005年创办，集酒店会所设计与商业空间，别墅，写字楼设计、其它室",
        "phone": "13870690753",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=5"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo6.jpg",
        "title": "俞工设计师机构",
        "desc": "俞工设计机构2009年成立，一家专业从事室内外设计的设计机构，经过6年的整合和发展，我们有非常成熟的",
        "phone": "13767050809",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=6"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计八所.jpg",
        "title": "长鑫幕墙设计所",
        "desc": "       长鑫幕墙专业团队成立于2014年10月，专业提供幕墙、门窗、钢结构技术服务(方案设计、",
        "phone": "18720998770",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=8"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo9.jpg",
        "title": "弈凡幕墙设计顾问工作室",
        "desc": "弈凡幕墙设计顾问工作室是一家独立于第三方的幕墙设计、咨询机构，专业从事建筑门窗幕墙系统的设计及咨询顾",
        "phone": "13807910370",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=9"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/QQ图片20171225100239.jpg",
        "title": "觉是设计所",
        "desc": "赫柏整体设计,专业环境艺术设计机构，承接全国各地楼盘样板间、售楼处、会所、酒店、别墅等整体空间设计工",
        "phone": "13970858876",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=10"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/设计十一所.jpg",
        "title": "深圳五福装饰设计有限公司",
        "desc": "主要作品有：香港力高集团江西南昌皇冠国际，湖南·凤凰山庄酒店等项目。",
        "phone": "13807031588",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=11"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo12.jpg",
        "title": "设计十二所",
        "desc": "工作室由陈福明先生于2008年创办，集规划与景观设计、室内外装饰设计、绘画与景观雕塑小品设计制作于一",
        "phone": "13503502770",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=12"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo13.jpg",
        "title": "泥土巴巴墙体彩绘【南昌】工作室",
        "desc": "泥土巴巴墙体彩绘工作室，自2010年成立至今，5年墙绘品牌，1100多幅作品。一直专注于创意墙体彩绘",
        "phone": "18170916982",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=13"
    },
    {
        "logo": "http://cyy.zhcjjs.com/Photos/Company/Logo/logo15.JPG",
        "title": "8023效果图工作室",
        "desc": "8023 效果图工作室设计制作中心，是专业从事表现设计辅助工作。业务涉及家装效果图、建筑效果图、工装",
        "phone": "18579061024",
        "address": "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
        "link": "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=15"
    }
]
,
    companyNews:{
        common: [
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/PremierInspect/9.jpg",
                title: "总理李克强考察中航长江设计师产业园",
                id: "",
                from: "中航长江设计师产业园",
                date: "2016-08-28",
                desc: "8月23日下午17时，中共中央政治局常委、国务院总理李克强，国务委员、国务院秘书长杨晶一行，在江西省委书记鹿心社，省委副书记、代省长刘奇，江西省委常委、省委秘书长朱虹，江西省委常委、南昌市委书记龚建华，南昌市委副书记、市长郭安等省、市领导的陪同下，莅临中航长江设计师创意产业园（以下简称“中航长江”）视察，受到了中航长江董事长李涛、",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=1"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/NPCVisit/IMG_1437.jpg",
                title: "市人大常委会主任陈德寿一行莅临中航长江视察指导工作",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-07-18",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=6",
                desc: "7月14日上午，市人大常委会主任陈德寿、副主任陈以荻、秘书长徐永立、财经委主任委员张春辉、办公厅副调研员宋晓一行莅临中航长江设计师产业园（以下简称“设计师产业园”），就基层人大代表工作站的工作开展情况，以及设计师产业园的运营现状进行视察。青云谱区委书记孙毅，区人大常委会党组书记、主任魏根金等区领导，以及"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/CommitteeMember/1.jpg",
                title: "团市委书记盛炜一行走进中航长江",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-07-07",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=5",
                desc: "为全面掌握全市各县团委上半年重点工作推进落实情况，营造“比学赶超”的良好氛围，7月6日下午，团市委书记盛炜携团市委各部门负责人以及全市各县区团委负责人、市青联委员代表一行30余人，莅临中航长江设计师产业园（以下简称“设计师产业园”）参观"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/StudentSubsidies/IMG_5245.jpg",
                title: "青云谱区2017“汇聚爱心 幸福成长”庆六一爱心助学活动",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-06-02",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=4",
                desc: "为积极响应南昌市“兴家风、淳民风、正社风”活动号召，5月31日上午，青云谱区妇联、青云谱星星草服务社携手中航长江建设工程有限公司（以下简称“中航长江”），在青云谱区万溪王华霖小学举办了“庆祝六一，爱心助学”活动。青"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/ChuBusiness/IMG_6168.jpg",
                title: "楚商集团总裁李树锋一行莅临中航长江考察",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-05-23",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=3",
                desc: "7月7日，楚商集团董事局主席、总裁李树锋，楚商集团行政副总裁刘宏伟，楚商集团资产管理有限公司总经理刘幼平，楚商集团顾问专家赵开胜，武汉国田室内设计顾问有限公司总经理柳小飞一行莅临中航长江设计师产业园（以下简称“设计师产业园”），就合作投资在武汉建设设计师产业园的相关合作事项进行实地考察及座谈，受到了中航长江建设工程有限公司（以下简称“中航长江”）董事长李涛，总经理李鹰南，副总经理邬勤，设计师产业园研究院院长刘文毅的热情接待"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/School&Enterprise/DSC_3770.jpg",
                title: "老牌校企联合，助力梦想起航",
                id: "",
                from: "中航长江设计师产业园",
                date: "2017-05-16",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=2",
                desc: "5月12日，江西师范大学美术学院-中航长江实践教学基地签约仪式在江西师范大学美术学院（以下简称“江西师大美术学院”）举行。江西师大美术学院院长马志明、美术学院党委书记杨卫军、美术学院党委副书记方旺春、美术学院环境设计系主任方强华、中航长江建设工程有限公司（以下简称“中航长江”）常务副总经理李伟、设计研究院院长刘文毅等领导共同出席了此次签约仪式。签约仪式由美术学院党委副书记方旺春主持。仪式上，江西师大美术学院院长马志明首先"
            }
        ],
        hot: [
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=1",
                title: "总理李克强考察中航长江设计师产业园"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=2",
                title: "老牌校企联合，助力梦想起航"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=3",
                title: "楚商集团总裁李树锋一行莅临中航长江考察"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=4",
                title: "青云谱区2017“汇聚爱心 幸福成长”庆六一爱心助学活动"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowNewInZHCJ?parameter=5",
                title: "团市委书记盛炜一行走进中航长江"
            }
        ]
    },
    activities: {
        common: [
            {
                src: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/ActiveSalon/ZHCJTrain/IMG_0462.jpg",
                title: "中航长江开展实习生培训课",
                id: "",
                from: "中航长江设计师产业园",
                date: "2016-12-13",
                desc: "12月13日下午，第三期实习生培训课在中航长江设计师产业园（以下简称“中航长江”）设计三所-意大利迈致空间设计事务所举行。",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=3"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/ActiveSalon/KJJLH/IMG_5490.jpg",
                title: "空间设计与平面设计的对话",
                id: "",
                from: "中航长江设计师产业园",
                date: "2016-11-27",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=1",
                desc: "11月27日，一场关于“空间设计与平面设计对话”的交流会在中航长江设计师产业园（以下简称“中航长江”）创意咖啡厅举行。“平面设计”方是来自深圳平面设计协会（SGDA）的设计大师，他们分别是SGDA前主席、顾问孔森，SGDA秘书长宋博渊，深圳·锐奥品牌设计创作总监管普查，UNDESIGN联合设计创作总监邓远健，深圳墨壹广告创作总监汪松"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/ActiveSalon/SJSCYY/0618.jpg",
                title: "热烈庆祝中航长江设计师产业园全体设计师入园见面会顺利召开",
                id: "",
                from: "中航长江设计师产业园",
                date: "2016-10-20",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=2",
                desc: "10月20日，在中航长江设计师产业园会议室顺利召开了全体设计师入园见面会，中航长江建设工程有限公司（以下简称“中航长江”）董事长李涛、常务副总经理李伟、副总经理邬勤及公司各部门主要负责人参与了此次见面会，共同欢迎来自幕墙、室内装饰、钢结构、园林、软装、策划等多个设计领域的业内知名设计师进驻产业园"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/ActiveSalon/VisitZHCJ/5.jpg",
                title: "苇渡书院系列课程之一 一解密新商业、新经济 走进中航长江设计师创意产业园",
                id: "",
                from: "中航长江设计师产业园",
                date: "2016-04-16",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=4",
                desc: "2016年4月16日下午两点半，苇渡书院系列课程之解密新商业、新经济在中航长江设计师创意产业园（以下简称“中航长江”）创意沙龙咖啡屋隆重开讲。本次课程由苇渡书院院长聂德民博士主讲，中航长江的设计师和相关合作伙伴参与了此次课程的学习"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/ActiveSalon/SJSCYY/0618.jpg",
                title: "热烈庆祝中航长江设计师产业园全体设计师入园见面会顺利召开",
                id: "",
                from: "中航长江设计师产业园",
                date: "2016-10-20",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=2",
                desc: "10月20日，在中航长江设计师产业园会议室顺利召开了全体设计师入园见面会，中航长江建设工程有限公司（以下简称“中航长江”）董事长李涛、常务副总经理李伟、副总经理邬勤及公司各部门主要负责人参与了此次见面会，共同欢迎来自幕墙、室内装饰、钢结构、园林、软装、策划等多个设计领域的业内知名设计师进驻产业园"
            },
            {
                src: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/ActiveSalon/VisitZHCJ/5.jpg",
                title: "苇渡书院系列课程之一 一解密新商业、新经济 走进中航长江设计师创意产业园",
                id: "",
                from: "中航长江设计师产业园",
                date: "2016-04-16",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=4",
                desc: "2016年4月16日下午两点半，苇渡书院系列课程之解密新商业、新经济在中航长江设计师创意产业园（以下简称“中航长江”）创意沙龙咖啡屋隆重开讲。本次课程由苇渡书院院长聂德民博士主讲，中航长江的设计师和相关合作伙伴参与了此次课程的学习"
            }
        ],
        hot: [
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=4",
                title: "苇渡书院系列课程之一 一解密新商业、新经济 走进中航长江设计师创意产业园"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=3",
                title: "中航长江开展实习生培训课"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=1",
                title: "空间设计与平面设计的对话"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=2",
                title: "热烈庆祝中航长江设计师产业园全体设计师入园见面会顺利召开"
            },
            {
                id: "",
                link:"http://cyy.zhcjjs.com/Home/ShowActivitiesSalon?parameter=2&parameter=1",
                title: "空间设计与平面设计的对话"
            }
        ]
    },
    province: ["南昌", "武汉"],
    houses: [
        "合橙设计所",
        "方胜设计所",
        "合橙设计所2",
        "方胜设计所2",
    ],
    cascadeOpt: [{
        value: "1",
        label: "南昌",
//         合橙设计所
// 方胜设计所
// 意大利迈致建筑设计事务所
// 安空间设计所
// 悦城空间设计机构
// 俞工设计师机构
// 香港排列风水研究院
// 长鑫幕墙设计所
// 弈凡幕墙设计顾问工作室
// 觉是设计所
// 深圳五福装饰设计有限公司
// 陈福明艺术工作室
// 泥土巴巴墙体彩绘【南昌】工作室
// 版画漆画研究所
// 8023效果图工作室
        children: [{
            value: "合橙设计所",
            label: "合橙设计所"
        },{
            value: "泥土巴巴墙体彩绘【南昌】工作室",
            label: "泥土巴巴墙体彩绘【南昌】工作室"
        },{
            value: "版画漆画研究所",
            label: "版画漆画研究所"
        },{
            value: "8023效果图工作室",
            label: "8023效果图工作室"
        },{
            value: "香港排列风水研究院",
            label: "香港排列风水研究院"
        },{
            value: "长鑫幕墙设计所",
            label: "长鑫幕墙设计所"
        },{
            value: "弈凡幕墙设计顾问工作室",
            label: "弈凡幕墙设计顾问工作室"
        },{
            value: "觉是设计所",
            label: "觉是设计所"
        },{
            value: "深圳五福装饰设计有限公司",
            label: "深圳五福装饰设计有限公司"
        },{
            value: "陈福明艺术工作室",
            label: "陈福明艺术工作室"
        }, {
            value: "方胜设计所",
            label: "方胜设计所"
        }, {
            value: "意大利迈致建筑设计事务所",
            label: "意大利迈致建筑设计事务所"
        }, {
            value: "安空间设计所",
            label: "安空间设计所"
        }, {
            value: "俞工设计师机构",
            label: "俞工设计师机构"
        }, {
            value: "悦城空间设计机构",
            label: "悦城空间设计机构"
        }]
    }, {
        label: "武汉",
        disabled: true,
        value: "2",
        children: []
    }]

}