/*
 * uCharts®
 * 高性能跨平台图表库，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）、Vue、Taro等支持canvas的框架平台
 * Copyright (c) 2021 QIUN®秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 复制使用请保留本段注释，感谢支持开源！
 * 
 * uCharts®官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */

// 主题颜色配置：如每个图表类型需要不同主题，请在对应图表类型上更改color属性
const color = ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'];

//事件转换函数，主要用作格式化x轴为时间轴，根据需求自行修改
const formatDateTime = (timeStamp, returnType)=>{
  var date = new Date();
  date.setTime(timeStamp * 1000);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  if(returnType == 'full'){return y + '-' + m + '-' + d + ' '+ h +':' + minute + ':' + second;}
  if(returnType == 'y-m-d'){return y + '-' + m + '-' + d;}
  if(returnType == 'h:m'){return  h +':' + minute;}
  if(returnType == 'h:m:s'){return  h +':' + minute +':' + second;}
  return [y, m, d, h, minute, second];
}

module.exports = {
  //demotype为自定义图表类型，一般不需要自定义图表类型，只需要改根节点上对应的类型即可
	"type":["pie","ring","rose","word","funnel","map","arcbar","line","column","bar","area","radar","gauge","candle","mix","tline","tarea","scatter","bubble","demotype"],
	"range":["饼状图","圆环图","玫瑰图","词云图","漏斗图","地图","圆弧进度条","折线图","柱状图","条状图","区域图","雷达图","仪表盘","K线图","混合图","时间轴折线","时间轴区域","散点图","气泡图","自定义类型"],
  //增加自定义图表类型，如果需要categories，请在这里加入您的图表类型，例如最后的"demotype"
  //自定义类型时需要注意"tline","tarea","scatter","bubble"等时间轴（矢量x轴）类图表，没有categories，不需要加入categories
	"categories":["line","column","bar","area","radar","gauge","candle","mix","demotype"],
  //instance为实例变量承载属性，不要删除
  "instance":{},
  //option为opts及eopts承载属性，不要删除
  "option":{},
  //下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
  "formatter":{
    "yAxisDemo1":function(val){return val+'元'},
    "yAxisDemo2":function(val){return val.toFixed(2)},
    "xAxisDemo1":function(val){return val+'年'},
    "xAxisDemo2":function(val){return formatDateTime(val,'h:m')},
    "seriesDemo1":function(val){return val+'元'},
	"tooltipDemo2":(item, category, index, opts)=>{
		return `${item.name}: ${item.data}分钟`
	},
    "tooltipDemo1":function(item, category, index, opts){
		return `${category} 学习时长: ${item.data}小时`
    },
    "pieDemo":function(val, index, series){
      if(index !== undefined){
        return series[index].name+'：'+series[index].data+'元'
      }
    },
  },
  //这里演示了自定义您的图表类型的option，可以随意命名，之后在组件上 type="demotype" 后，组件会调用这个花括号里的option，如果组件上还存在opts参数，会将demotype与opts中option合并后渲染图表。
  
  //下面是自定义配置，请添加项目所需的通用配置
	"arcbar":{
    "type": "arcbar",
    "canvasId": "",
    "canvas2d": false,
    "background": "none",
    "animation": true,
    "timing": "easeOut",
    "duration": 1000,
    "color": [
        "#1890FF",
        "#91CB74",
        "#FAC858",
        "#EE6666",
        "#73C0DE",
        "#3CA272",
        "#FC8452",
        "#9A60B4",
        "#ea7ccc"
    ],
    "rotate": false,
    "errorReload": true,
    "fontSize": 21,
    "fontColor": "#666666",
    "enableScroll": false,
    "touchMoveLimit": 60,
    "enableMarkLine": false,
    "dataLabel": true,
    "dataPointShape": true,
    "dataPointShapeType": "solid",
    "tapLegend": true,
    "subtitle": {
        "name": "分钟",
        "fontSize": 18,
        "color": "#666666",
        "offsetX": 0,
        "offsetY": 0
    },
    "extra": {
        "arcbar": {
            "type": "default",
            "width": 6,
            "backgroundColor": "#E9E9E9",
            "startAngle": 0.75,
            "endAngle": 0.25,
            "gap": 2,
            "centerX": 0,
            "centerY": 0,
            "linearType": "none"
        }
    }
},
"pie":{
    "type": "pie",
    "canvasId": "",
    "canvas2d": false,
    "background": "none",
    "animation": true,
    "timing": "easeOut",
    "duration": 1000,
    "color": [
        "#1890FF",
        "#91CB74",
        "#FAC858",
        "#EE6666",
        "#73C0DE",
        "#3CA272",
        "#FC8452",
        "#9A60B4",
        "#ea7ccc"
    ],
    "padding": [
        5,
        5,
        5,
        5
    ],
    "rotate": false,
    "errorReload": true,
    "fontSize": 18,
    "fontColor": "#666666",
    "enableScroll": false,
    "touchMoveLimit": 60,
    "enableMarkLine": false,
    "dataLabel": false,
    "dataPointShape": true,
    "dataPointShapeType": "solid",
    "tapLegend": true,
    "legend": {
        "show": true,
        "position": "bottom",
        "float": "center",
        "padding": 5,
        "margin": 5,
        "backgroundColor": "rgba(0,0,0,0)",
        "borderColor": "rgba(0,0,0,0)",
        "borderWidth": 0,
        "fontSize": 13,
        "fontColor": "#666666",
        "lineHeight": 11,
        "hiddenColor": "#CECECE",
        "itemGap": 10
    },
    "extra": {
        "pie": {
            "activeOpacity": 0.5,
            "activeRadius": 10,
            "offsetAngle": 0,
            "customRadius": 0,
            "labelWidth": 15,
            "border": true,
            "borderWidth": 3,
            "borderColor": "#FFFFFF",
            "linearType": "none"
        },
        "tooltip": {
            "showBox": true,
            "showArrow": true,
            "showCategory": false,
            "borderWidth": 0,
            "borderRadius": 0,
            "borderColor": "#000000",
            "borderOpacity": 0.7,
            "bgColor": "#000000",
            "bgOpacity": 0.7,
            "gridType": "solid",
            "dashLength": 4,
            "gridColor": "#CCCCCC",
            "fontColor": "#FFFFFF",
            "splitLine": true,
            "horizentalLine": false,
            "xAxisLabel": false,
            "yAxisLabel": false,
            "labelBgColor": "#FFFFFF",
            "labelBgOpacity": 0.7,
            "labelFontColor": "#666666"
        }
    }
},
"line":{
    "type": "line",
	"loadingType":0,
    "canvasId": "",
    "canvas2d": false,
    "background": "none",
    "animation": true,
    "timing": "easeOut",
    "duration": 1000,
    "color": [
        "#F5D04B"
    ],
    "padding": [
        3,
        3,
        3,
        3
    ],
    "rotate": false,
    "errorReload": true,
    "fontSize": 13,
    "fontColor": "#666666",
    "enableScroll": true,
    "touchMoveLimit": 60,
    "enableMarkLine": false,
    "dataLabel": true,
    "dataPointShape": true,
    "dataPointShapeType": "solid",
    "tapLegend": true,
    "xAxis": {
        "disabled": false,
        "axisLine": true,
        "axisLineColor": "#CCCCCC",
        "calibration": false,
        "fontColor": "#666666",
        "fontSize": 13,
        "rotateLabel": false,
        "itemCount": 5,
        "boundaryGap": "center",
        "disableGrid": true,
        "gridColor": "#CCCCCC",
        "gridType": "solid",
        "dashLength": 4,
        "gridEval": 1,
        "scrollShow": false,
        "scrollAlign": "left",
        "scrollColor": "#A6A6A6",
        "scrollBackgroundColor": "#EFEBEF",
        "format": ""
    },
    "yAxis": {
        "disabled": false,
        "disableGrid": false,
        "splitNumber": 5,
        "gridType": "dash",
        "dashLength": 10,
        "gridColor": "#CCCCCC",
        "padding": 5,
        "showTitle": true,
        "data": [
            {
                "type": "value",
                "position": "left",
                "disabled": false,
                "axisLine": true,
                "axisLineColor": "#CCCCCC",
                "calibration": false,
                "fontColor": "#666666",
                "fontSize": 13,
                "textAlign": "right",
                "title": "小时",
                "titleFontSize": 13,
                "titleOffsetY": 7,
                "titleOffsetX": 10,
                "titleFontColor": "#666666",
                "min": null,
                "max": null,
                "tofix": null,
                "unit": "",
                "format": ""
            }
        ]
    },
    "legend": {
        "show": false,
        "position": "bottom",
        "float": "center",
        "padding": 5,
        "margin": 5,
        "backgroundColor": "rgba(0,0,0,0)",
        "borderColor": "rgba(0,0,0,0)",
        "borderWidth": 0,
        "fontSize": 13,
        "fontColor": "#666666",
        "lineHeight": 11,
        "hiddenColor": "#CECECE",
        "itemGap": 10
    },
    "extra": {
        "line": {
            "type": "straight",
            "width": 2
        },
        "tooltip": {
            "showBox": true,
            "showArrow": true,
            "showCategory": false,
            "borderWidth": 0,
            "borderRadius": 0,
            "borderColor": "#000000",
            "borderOpacity": 0.7,
            "bgColor": "#000000",
            "bgOpacity": 0.7,
            "gridType": "solid",
            "dashLength": 4,
            "gridColor": "#CCCCCC",
            "fontColor": "#FFFFFF",
            "splitLine": true,
            "horizentalLine": false,
            "xAxisLabel": false,
            "yAxisLabel": false,
            "labelBgColor": "#FFFFFF",
            "labelBgOpacity": 0.7,
            "labelFontColor": "#666666"
        },
        "markLine": {
            "type": "solid",
            "dashLength": 4,
            "data": []
        }
    }
}
}