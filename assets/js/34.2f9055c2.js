(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{407:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"富文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#富文本"}},[t._v("#")]),t._v(" 富文本")]),t._v(" "),s("p",[t._v("二次封装富文本-Tinymce, "),s("a",{attrs:{href:"http://face.cms.7yue.pro/#/custom/tinymce",target:"_blank",rel:"noopener noreferrer"}},[t._v("演示效果"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("开箱即用")]),t._v(" "),s("li",[t._v("支持富文本效果实时预览")]),t._v(" "),s("li",[t._v("支持富文本源码预览")]),t._v(" "),s("li",[t._v("支持拖拽图片上传")]),t._v(" "),s("li",[t._v("支持自定义工具栏图标")]),t._v(" "),s("li",[t._v("支持部分markdown语法")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如果使用插入图片功能，需配合后端"),s("a",{attrs:{href:"http://doc.cms.7yue.pro/lin/server/koa/file.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文件上传接口"),s("OutboundLink")],1),t._v("使用;图片上传成功后，会以该图片完整的url地址的形式插入到富文本内容当中。")])]),t._v(" "),s("h2",{attrs:{id:"基础示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础示例"}},[t._v("#")]),t._v(" 基础示例")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tinymce")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("upload_url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("文件存储接口地址"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Tinymce "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/base/tinymce'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Tinymce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听富文本内容变化")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("500")]),t._v(" "),s("td",[t._v("富文本高度")])]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("——")]),t._v(" "),s("td",[t._v("富文本宽度")])]),t._v(" "),s("tr",[s("td",[t._v("defaultContent")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("——")]),t._v(" "),s("td",[t._v("富文本默认内容")])]),t._v(" "),s("tr",[s("td",[t._v("upload_url")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("——")]),t._v(" "),s("td",[t._v("图片上传地址")])]),t._v(" "),s("tr",[s("td",[t._v("showMenubar")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否展示左上方的中文菜单栏")])]),t._v(" "),s("tr",[s("td",[t._v("toolbar")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("undo redo | formatselect | bold italic strikethrough forecolor backcolor formatpainter | link image | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | preview fullscreen code")]),t._v(" "),s("td",[t._v("自定义工具栏图标")])])])]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法名")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("val")]),t._v(" "),s("td",[t._v("监听富文本的内容变化")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("更多用法请参考"),s("a",{attrs:{href:"https://www.tiny.cloud/docs/demo/full-featured/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tinymce"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);