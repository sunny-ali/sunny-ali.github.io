(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{503:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"问题描述-当后台返回多个value时-意味着图形中有多条线-接下来就分析从后台传过来的数据源-然后对图形进行处理。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题描述-当后台返回多个value时-意味着图形中有多条线-接下来就分析从后台传过来的数据源-然后对图形进行处理。"}},[s._v("#")]),s._v(" 问题描述：当后台返回多个value时，意味着图形中有多条线，接下来就分析从后台传过来的数据源，然后对图形进行处理。")]),s._v(" "),n("p",[s._v("附上遍历成功后的面积图\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200717111611940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgyNDgzOQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('data = [\n  {time: "25-01", value: "5", valueY: "2"},\n  {time: "25-02", value: "2", valueY: "6"},\n  {time: "25-03", value: "8", valueY: "1"},\n  {time: "25-04", value: "1", valueY: "9"},\n  {time: "25-05", value: "5", valueY: "6"},\n  {time: "25-06", value: "3", valueY: "7"},\n  {time: "25-07", value: "3", valueY: "4"},\n  {time: "25-08", value: "8", valueY: "3"},\n  {time: "25-09", value: "9", valueY: "9"},\n  {time: "25-10", value: "4", valueY: "7"},\n  {time: "25-11", value: "7", valueY: "7"},\n  {time: "25-12", value: "2", valueY: "1"},\n  {time: "25-13", value: "4", valueY: "0"},\n  {time: "25-14", value: "9", valueY: "1"},\n  {time: "25-15", value: "1", valueY: "8"},\n  {time: "25-16", value: "0", valueY: "2"},\n  {time: "25-17", value: "8", valueY: "9"},\n  {time: "25-18", value: "6", valueY: "5"},\n  {time: "25-19", value: "9", valueY: "5"},\n  {time: "25-20", value: "3", valueY: "6"},\n  {time: "25-21", value: "1", valueY: "6"},\n  {time: "25-22", value: "5", valueY: "8"},\n  {time: "25-23", value: "9", valueY: "7"},\n  {time: "26-00", value: "6", valueY: "7"},\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("value代表今日某时开销，valueY代表昨日某时的开销，因此图形中有二条Area。\n"),n("strong",[s._v("主要代码")]),s._v("如下:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React, {PureComponent} from 'react';\nimport {\n  AreaChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,\n  Legend, Scatter,\n} from 'recharts';\n\nconst colors = ['#1b7fff', '#F04089']//设置2条Area的颜色\nexport default class DetailComposedArea extends PureComponent {\n  render() {\n    const colorIds = new Array(colors.length).fill(1).map(_ => new Date().getTime() + Math.random());\n    const {width, height, data, names, delX} = this.props//拿到从父组件传过来的值\n\n    //接下来要对遍历的Area数据源做处理\n    const stringArr = Object.keys(data[0])   // ['time','value','valueY']\n    stringArr.splice(stringArr.findIndex(item => item === delX), 1)//删除横坐标的time\n    const chartData = stringArr  //chartData=['value','valueY']\n\n    return (\n      <AreaChart\n        width={width}\n        height={height}\n        data={data}\n      >\n        <defs>\n          {\n            colors.map((color, i) => {\n             //主要用来设置面积图的阴影部分的透明度\n              //id全局必须唯一，每次render之后会影响后面的引用\n              return (\n                <linearGradient id={`color${colorIds[i]}`} x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\" key={i}>\n                  <stop offset=\"12%\" stopColor={color} stopOpacity={1}/>\n                  <stop offset=\"100%\" stopColor={color} stopOpacity={0}/>\n                </linearGradient>\n              );\n            })\n          }\n        </defs>\n        {\n        //根据chartData的长度来遍历Area的个数\n          chartData.map((item, i => {\n            return (\n              <Area key={i}\n                    dataKey={item} // 取data数组中每个对象item的值\n                    name={names[i]} //对应Area的名字\n                    fill={`url(#color${colorIds[i]})`} //填充颜色\n                    type=\"monotone\"\n                    animationDuration={500}\n                    stroke={colors[i]} //线条颜色\n                    label={{position: 'top', fill: '#fff0', fontSize: 12}}\n              />\n            )\n          })\n        }\n      </AreaChart>\n    );\n  }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);