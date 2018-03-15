var certs = [
  {
    id: "1",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
  {
    id: "2",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
  {
    id: "3",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
  {
    id: "4",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
];
var honors = [
  {
    id: "1",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖1"
  },
  {
    id: "2",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖2"
  },
  {
    id: "3",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖3"
  },
  {
    id: "4",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖4"
  }
];
var userInfo = {
    "code": 0,
    "msg": "",
    "data": {
        "user": {
            "name": "周贵",
            "state": -1,
            "institutionId": 1,
            "institution": "合橙设计所",
            "institutionType": 2,
            "park": "南昌",
            "account": "zhougui",
            "mail": "68498695@qq.com"
        },
        "menus": [
            {
                "type": 0,
                "name": "首页",
                "url": "/Home/Index",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "专业领域",
                "url": "/Home/ShowProfessionType",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "设计所",
                "url": "/Home/ShowDesignHouse",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "活动沙龙",
                "url": "/Home/ShowActivitiesSalon?parameter=2&parameter=3",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "公司新闻",
                "url": "/Home/ShowNewInZHCJ?parameter=1",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "公司官网",
                "url": "http://www.zhcjjs.com/",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "园区服务",
                "url": null,
                "subMenus": [
                    {
                        "type": 0,
                        "name": "合同审批",
                        "url": "/Contract/Index",
                        "subMenus": null
                    }
                ]
            }
        ]
    }
};
export {
  honors,
  certs,
  userInfo
};     
export default{
  honors,
  certs,
  userInfo
};     