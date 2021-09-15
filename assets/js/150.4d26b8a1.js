(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{646:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_04-hook规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04-hook规则"}},[s._v("#")]),s._v(" 04. Hook规则")]),s._v(" "),a("p",[s._v("Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循"),a("strong",[s._v("两条规则")]),s._v("。我们提供了一个 "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[s._v("linter 插件"),a("OutboundLink")],1),s._v("来强制执行这些规则：")]),s._v(" "),a("h2",{attrs:{id:"只在最顶层使用-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只在最顶层使用-hook"}},[s._v("#")]),s._v(" 只在最顶层使用 Hook")]),s._v(" "),a("p",[s._v("不要在循环，条件或嵌套函数中调用 Hook， 确保"),a("strong",[s._v("总是在你的 React 函数的最顶层以及任何 return 之前调用他们")]),s._v("。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("React 怎么知道哪个 state 对应哪个 "),a("code",[s._v("useState")]),s._v("？答案是 React 靠的是 Hook 调用的顺序")])]),s._v(" "),a("li",[a("p",[s._v("如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的"),a("em",[s._v("内部")]),s._v("：")])])]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("persistForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 👍 将条件判断放置在 effect 中")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'formData'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"只在-react-函数中调用-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只在-react-函数中调用-hook"}},[s._v("#")]),s._v(" 只在 React 函数中调用 Hook")]),s._v(" "),a("p",[s._v("**不要在普通的 JavaScript 函数中调用 Hook。**你可以：")]),s._v(" "),a("ul",[a("li",[s._v("✅ 在 React 的函数组件中调用 Hook")]),s._v(" "),a("li",[s._v("✅ 在自定义 Hook 中调用其他 Hook")])]),s._v(" "),a("h2",{attrs:{id:"eslint-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-插件"}},[s._v("#")]),s._v(" ESLint 插件")]),s._v(" "),a("p",[s._v("我们发布了一个名为 "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("eslint-plugin-react-hooks")]),a("OutboundLink")],1),s._v(" 的 ESLint 插件来强制执行这两条规则。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-plugin-react-hooks --save-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你的 ESLint 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-hooks"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-hooks/rules-of-hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查 Hook 的规则")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-hooks/exhaustive-deps"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"warn"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查 effect 的依赖")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);