// index.js
// 获取应用实例
const app = getApp()

//index.js
Page({
  data: {
    	//轮播图数组
      swiperList: [],
      //导航数组
      catesList:[],
      //楼层数据
      floorList:[]
  
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "swiper_datas": [
        {
          "id": 1,
          "imgurl": "../../images/swiper/swiper1.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goods_detail/index?goods_id=1"
        },
        {
          "id": 2,
          "imgurl": "../../images/swiper/swiper2.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goods_detail/index?goods_id=2"
        },
        {
          "id": 3,
          "imgurl": "../../images/swiper/swiper3.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goods_detail/index?goods_id=3"
        }
      ],
      "cates_datas": [
        {
          "name": "分类",
          "image_src": "../../images/cates/分类.png",
          "open_type": "switchTab",
          "navigator_url": "/pages/category/index"
        },
        {
          "name": "秒杀拍",
          "image_src": "../../images/cates/拍卖项目.png"
        },
        {
          "name": "团购",
          "image_src": "../../images/cates/购买历史.png"
        },
        {
          "name": "超值低价",
          "image_src": "../../images/cates/超值低价.png"
        }
      ],
      "floor_datas": [
        {
            "floor_title": {
                "name": "时尚女装",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
            },
            "product_list": [
                {
                    "name": "优质服饰",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
                    "image_width": "232",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=服饰"
                },
                {
                    "name": "春季热门",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=热"
                },
                {
                    "name": "爆款清仓",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=爆款"
                },
                {
                    "name": "倒春寒",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=春季"
                },
                {
                    "name": "怦然心动",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=心动"
                }
            ]
        },
        {
            "floor_title": {
                "name": "户外活动",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
            },
            "product_list": [
                {
                    "name": "勇往直前",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
                    "image_width": "232",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=户外"
                },
                {
                    "name": "户外登山包",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
                    "image_width": "273",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=登山包"
                },
                {
                    "name": "超强手套",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
                    "image_width": "193",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=手套"
                },
                {
                    "name": "户外运动鞋",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
                    "image_width": "193",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=运动鞋"
                },
                {
                    "name": "冲锋衣系列",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
                    "image_width": "273",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=冲锋衣"
                }
            ]
        },
        {
            "floor_title": {
                "name": "箱包配饰",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
            },
            "product_list": [
                {
                    "name": "清新气质",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
                    "image_width": "232",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=饰品"
                },
                {
                    "name": "复古胸针",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
                    "image_width": "263",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=胸针"
                },
                {
                    "name": "韩版手链",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
                    "image_width": "203",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=手链"
                },
                {
                    "name": "水晶项链",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
                    "image_width": "193",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=水晶项链"
                },
                {
                    "name": "情侣表",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
                    "image_width": "273",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=情侣表"
                }
            ]
        }
      ]
    };
    that.setData({
      swiperList: data.swiper_datas,
      catesList: data.cates_datas,
      floorList: data.floor_datas
    })
  }
})
