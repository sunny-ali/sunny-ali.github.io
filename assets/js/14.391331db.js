(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{495:function(n,s,e){"use strict";e.r(s);var t=e(4),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("strong",[n._v("问题描述")]),n._v("：\n在TextInput中输入文本 ，会弹出软键盘 ，当我收回软键盘时框焦点还在这个输入框中。\n"),e("strong",[n._v("分析：")]),n._v("\n需要监听键盘的收起事件，然后控制输入框，使输入框失去焦点\n"),e("strong",[n._v("代码：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("export default class InputItem extends Component {\n\n  constructor(props) {\n    super(props);\n    this.inputRef = React.createRef();\n  }\n\n  componentDidMount() {\n    this.keyboardDidHideListener = Keyboard.addListener(\n      'keyboardDidHide',\n      this._keyboardDidHide,\n    );\n  }\n\n  componentWillUnmount() {//当组件移除时，取消监听\n    this.keyboardDidHideListener.remove();\n  }\n  _keyboardDidHide = () => {//键盘收起\n    this.inputRef.current.blur();//使输入框失去焦点\n  };\n\n  render() {\n    return (\n          <TextInput\n           ref={this.inputRef}\n            onSubmitEditing={Keyboard.dismiss}//当结束编辑后，点击键盘的提交按钮时触发事件\n            value={this.state.value}\n          />\n    );\n  }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);