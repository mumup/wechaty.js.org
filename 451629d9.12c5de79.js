(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(t,e,M){"use strict";M.r(e),M.d(e,"frontMatter",(function(){return c})),M.d(e,"metadata",(function(){return T})),M.d(e,"rightToc",(function(){return N})),M.d(e,"default",(function(){return i}));var g=M(3),A=M(7),I=(M(0),M(182)),c={title:"What is Wechaty"},T={unversionedId:"introduction/what-is-wechaty",id:"introduction/what-is-wechaty",isDocsHomePage:!1,title:"What is Wechaty",description:"Wechaty: Conversational SDK for Chatbot Makers",source:"@site/docs/introduction/what-is-wechaty.md",slug:"/introduction/what-is-wechaty",permalink:"/docs/introduction/what-is-wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/introduction/what-is-wechaty.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1607431611},N=[{value:"What is Wechaty",id:"what-is-wechaty",children:[]},{value:"Just learning about Wechaty?",id:"just-learning-about-wechaty",children:[]},{value:"Web WeChat Limitations",id:"web-wechat-limitations",children:[]},{value:"Curious how our technology works?",id:"curious-how-our-technology-works",children:[]},{value:"Support Multi WeChat Protocols",id:"support-multi-wechat-protocols",children:[]},{value:"Join Us",id:"join-us",children:[]}],a={rightToc:N};function i(t){var e=t.components,c=Object(A.a)(t,["components"]);return Object(I.b)("wrapper",Object(g.a)({},a,c,{components:e,mdxType:"MDXLayout"}),Object(I.b)("p",null,Object(I.b)("img",{alt:"Wechaty: Conversational SDK for Chatbot Makers",src:M(191).default})),Object(I.b)("h2",{id:"what-is-wechaty"},"What is Wechaty"),Object(I.b)("p",null,Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/"}),"Wechaty")," is a Conversational SDK for chatbot makers that\nlets you create software to extend the functionality of the WeChat,\nwritten in Node.js with TypeScript, Support all platforms including\n",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/actions"}),"Linux"),",\n",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/actions"}),"Windows"),",\n",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/actions"}),"Darwin","(","OSX/Mac",")")," and\n",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/actions"}),"Docker"),"."),Object(I.b)("p",null,"You can use wechaty building a personal wechat chatbot in just 6 lines of JavaScript code!"),Object(I.b)("p",null,"More Powerful Feature as follows:"),Object(I.b)("ul",null,Object(I.b)("li",{parentName:"ul"},"Manage Message: Automatic message reply"),Object(I.b)("li",{parentName:"ul"},"Room Management: room creating/inviting/kicking off"),Object(I.b)("li",{parentName:"ul"},"Friendship Management"),Object(I.b)("li",{parentName:"ul"},"Intelligent dialogue Management: Just several configuration can get a task-oriented bot."),Object(I.b)("li",{parentName:"ul"},"...")),Object(I.b)("p",null,"See more in ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty"}),"Wechaty"),"\n",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://badge.fury.io/js/wechaty"}),Object(I.b)("img",Object(g.a)({parentName:"a"},{src:"https://badge.fury.io/js/wechaty.svg",alt:"NPM Version"}))),"\n",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://hub.docker.com/r/wechaty/wechaty/"}),Object(I.b)("img",Object(g.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Pulls"}))),"\n",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),Object(I.b)("img",Object(g.a)({parentName:"a"},{src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"})))),Object(I.b)("h2",{id:"just-learning-about-wechaty"},"Just learning about Wechaty?"),Object(I.b)("ul",null,Object(I.b)("li",{parentName:"ul"},"First Period: Wechaty is based on web WeChat. ",Object(I.b)("strong",{parentName:"li"},"All implement by web WeChat is fully open-source and free!")),Object(I.b)("li",{parentName:"ul"},"Second Period: There are a lot of ",Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"#web-wechat-limitation"}),"limitations when using web WeChat"),". In order to make it more easy for chatbot developers, we provide Puppet to support third party to implement their WeChat implementations, see WeChat Protocol.")),Object(I.b)("p",null,"Take a look at our ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://blog.chatie.io/wechaty-101-presentation/"}),"Wechaty 101 Talk")," which covers our core functionality, feature set and motivations behind the project."),Object(I.b)("h2",{id:"web-wechat-limitations"},"Web WeChat Limitations"),Object(I.b)("ol",null,Object(I.b)("li",{parentName:"ol"},"WeChat Account that registered after 2017 mignt not be able to login Web Wechat, so it can not use PuppetPuppeteer with Wechaty. Please make sure your WeChat Account can be able to login by visiting ",Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"https://wx.qq.com/"}),"https://wx.qq.com")),Object(I.b)("li",{parentName:"ol"},"Web API can not create room and invite members to room since 2018.")),Object(I.b)("p",null,"related issues:"),Object(I.b)("ul",null,Object(I.b)("li",{parentName:"ul"},Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty/issues/603"}),"Can not login with error message: \u5f53\u524d\u767b\u5f55\u73af\u5883\u5f02\u5e38\u3002\u4e3a\u4e86\u4f60\u7684\u5e10\u53f7\u5b89\u5168\uff0c\u6682\u65f6\u4e0d\u80fd\u767b\u5f55web\u5fae\u4fe1\u3002")),Object(I.b)("li",{parentName:"ul"},Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty/issues/990"}),"[","RUMOR","]"," wechat will close web api for wechat")),Object(I.b)("li",{parentName:"ul"},Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty/issues/872"}),"New account login issue")),Object(I.b)("li",{parentName:"ul"},Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty-puppet-puppeteer"}),"wechaty-puppet-puppeteer"))),Object(I.b)("p",null,"If you want to break the above limitations, please consider to use a Wechaty Puppet other than using Web API, like ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/botorange/wechaty-puppet-padplus"}),"wechaty-puppet-padplus"),"."),Object(I.b)("p",null,"Learn more about the Puppet at ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet"}),"Wechaty wiki: Puppet")),Object(I.b)("h2",{id:"curious-how-our-technology-works"},"Curious how our technology works?"),Object(I.b)("p",null,"We recommend ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://blog.chatie.io/wechaty-the-bot-sdk/"}),"reading the writeup")," we did and checking out our ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/Chatie/"}),"Github repo"),"."),Object(I.b)("h2",{id:"support-multi-wechat-protocols"},"Support Multi WeChat Protocols"),Object(I.b)("p",null,"The term ",Object(I.b)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is a name that we had picked up to describe part of our system: Puppet is an Abstract Class for implementing plugins, the plugins are the component that helps Wechaty to control the Wechat, that's the reason we call it ",Object(I.b)("inlineCode",{parentName:"p"},"puppet"),"."),Object(I.b)("p",null,"Plugins are named PuppetXXX, like PuppetPuppeteer is using the chrome puppeteer to control the WeChat Web API via a chrome browser, PuppetPadchat is using the WebSocket protocol to connect with a Protocol Server for controlling an iPad program. Here is the related information:"),Object(I.b)("ul",null,Object(I.b)("li",{parentName:"ul"},"\u200b",Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"/docs/introduction/puppet#2-wechaty-puppet-list"}),"Full Puppet List")),Object(I.b)("li",{parentName:"ul"},"\u200b",Object(I.b)("a",Object(g.a)({parentName:"li"},{href:"/docs/introduction/puppet#3-wechaty-puppet-compatibility"}),"Wechaty Puppet compatibility"))),Object(I.b)("p",null,"For a deeper understanding of the Puppet in Wechaty, you can read its source code if you like at ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts"}),"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts")),Object(I.b)("p",null,"All implement by web WeChat is fully open-source and free, if you need other implement, you should apply for it, ",Object(I.b)("a",Object(g.a)({parentName:"p"},{href:"https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty#wechaty-token-%E7%94%B3%E8%AF%B7%E5%8F%8A%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3%E5%92%8C%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"}),"see HOW to get token"),"."),Object(I.b)("p",null,"Here is the whole image for wechaty puppet introduction:"),Object(I.b)("p",null,Object(I.b)("img",{alt:"Puppet Structure",src:M(214).default})),Object(I.b)("h2",{id:"join-us"},"Join Us"),Object(I.b)("blockquote",null,Object(I.b)("p",{parentName:"blockquote"},"Scan the following QRCode, reply ''wechaty\" to join Wechaty Developers' Home."),Object(I.b)("p",{parentName:"blockquote"},"Please read the doc before you ask question in the group. We don't welcome any discussion unrelated to wechaty, or you should give a red pocket","(","more than 100 RMB",")"," in the group.")),Object(I.b)("p",null,Object(I.b)("img",{alt:"Wechaty Developers&#39; Home",src:M(215).default})))}i.isMDXComponent=!0},182:function(t,e,M){"use strict";M.d(e,"a",(function(){return C})),M.d(e,"b",(function(){return r}));var g=M(0),A=M.n(g);function I(t,e,M){return e in t?Object.defineProperty(t,e,{value:M,enumerable:!0,configurable:!0,writable:!0}):t[e]=M,t}function c(t,e){var M=Object.keys(t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(t);e&&(g=g.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),M.push.apply(M,g)}return M}function T(t){for(var e=1;e<arguments.length;e++){var M=null!=arguments[e]?arguments[e]:{};e%2?c(Object(M),!0).forEach((function(e){I(t,e,M[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(M)):c(Object(M)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(M,e))}))}return t}function N(t,e){if(null==t)return{};var M,g,A=function(t,e){if(null==t)return{};var M,g,A={},I=Object.keys(t);for(g=0;g<I.length;g++)M=I[g],e.indexOf(M)>=0||(A[M]=t[M]);return A}(t,e);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(t);for(g=0;g<I.length;g++)M=I[g],e.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(t,M)&&(A[M]=t[M])}return A}var a=A.a.createContext({}),i=function(t){var e=A.a.useContext(a),M=e;return t&&(M="function"==typeof t?t(e):T(T({},e),t)),M},C=function(t){var e=i(t.components);return A.a.createElement(a.Provider,{value:e},t.children)},D={inlineCode:"code",wrapper:function(t){var e=t.children;return A.a.createElement(A.a.Fragment,{},e)}},o=A.a.forwardRef((function(t,e){var M=t.components,g=t.mdxType,I=t.originalType,c=t.parentName,a=N(t,["components","mdxType","originalType","parentName"]),C=i(M),o=g,r=C["".concat(c,".").concat(o)]||C[o]||D[o]||I;return M?A.a.createElement(r,T(T({ref:e},a),{},{components:M})):A.a.createElement(r,T({ref:e},a))}));function r(t,e){var M=arguments,g=e&&e.mdxType;if("string"==typeof t||g){var I=M.length,c=new Array(I);c[0]=o;var T={};for(var N in e)hasOwnProperty.call(e,N)&&(T[N]=e[N]);T.originalType=t,T.mdxType="string"==typeof t?t:g,c[1]=T;for(var a=2;a<I;a++)c[a]=M[a];return A.a.createElement.apply(null,c)}return A.a.createElement.apply(null,M)}o.displayName="MDXCreateElement"},191:function(t,e,M){"use strict";M.r(e),e.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTkyMC4wMDAwMDBwdCIgaGVpZ2h0PSI1NDAuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAxOTIwLjAwMDAwMCA1NDAuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CjxtZXRhZGF0YT4KQ3JlYXRlZCBieSBwb3RyYWNlIDEuMTYsIHdyaXR0ZW4gYnkgUGV0ZXIgU2VsaW5nZXIgMjAwMS0yMDE5CjwvbWV0YWRhdGE+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDU0MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiM0NGE4MzgiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0yNzEwIDQ3MzMgYy0zNiAtNjMgLTczIC0xMjkgLTgzIC0xNDYgbC0xOSAtMzAgLTczIDczIC03NCA3NCAtMjMKLTIwIGMtMTMgLTExIC01MiAtNDYgLTg3IC03NyBsLTYzIC01NiAtNzcgNTkgYy00MiAzMyAtODUgNzUgLTk1IDk1IC0zNCA2MgotMTI2IDExNSAtMjAwIDExNSAtMTM5IDAgLTI2MyAtMTQwIC0yNDEgLTI3MyAxNSAtODcgODMgLTE3MiAxNTkgLTE5NyBsMzYKLTEyIDAgLTUzMSAwIC01MzIgLTczIC0zOSBjLTQ0MSAtMjQwIC03OTYgLTY1MCAtOTQxIC0xMDg2IC03NSAtMjI1IC03OSAtMjU5Ci04MyAtNzE4IGwtNSAtNDEyIDIyNzkgMCAyMjc5IDAgMTQgMTc4IGMxOCAyNDggOSA1ODIgLTIwIDcxNyAtMTA2IDQ5NyAtNDIxCjkzMCAtOTA0IDEyNDQgLTYxIDM5IC0xMTQgNzEgLTExOCA3MSAtNCAwIC04IDI1MCAtOCA1NTUgbDAgNTU1IDM3IDE1IGM2MCAyNQo5OSA2MSAxMjcgMTE3IDQ0IDg3IDMyIDE4NCAtMzIgMjU4IC01MSA2MCAtMTA0IDg0IC0xODIgODQgLTQ3IDAgLTc2IC02IC0xMDYKLTIyIC03OCAtNDEgLTEzNCAtMTI4IC0xMzQgLTIxMCAwIC0zMSAtMjIgLTUzIC01MiAtNTIgLTcgMSAtNTMgNjQgLTEwMiAxNDEKbC04OCAxNDAgLTcwIC0xMjMgYy0zOSAtNjggLTc3IC0xMzQgLTg1IC0xNDcgbC0xNSAtMjMgLTcyIDcxIC03MyA3MiAtMTEyCi01NSAtMTEzIC01NSAtNTQgMzQgYy0zMCAxOSAtNTkgMzUgLTY1IDM1IC01IDAgLTQ2IC0yMSAtOTAgLTQ2IC00NSAtMjUgLTg1Ci00MiAtODkgLTM3IC01IDQgLTM2IDc3IC03MSAxNjEgLTM0IDgzIC02NSAxNTIgLTY4IDE1MiAtMyAwIC0zNSAtNTMgLTcxCi0xMTd6IG0xMzQgLTEwOCBjMzIgLTgwIDU5IC0xNDUgNjEgLTE0NSAxIDAgNDIgMjIgOTEgNTAgNDkgMjcgOTYgNDkgMTA0IDQ5CjggMCAzOCAtMTUgNjUgLTMzIGw1MCAtMzMgMTEwIDU0IDEwOSA1NCA4MSAtODEgODEgLTgwIDc5IDE0MCBjNDQgNzcgODIgMTQwCjg1IDE0MCAzIDAgMTggLTIxIDM1IC00OCAxNiAtMjYgNTMgLTg0IDgyIC0xMjkgbDUzIC04MiAzNyAxNiBjMjYgMTAgMzggMTIKNDEgNCAxNiAtNDcgNzIgLTEwOCAxMjUgLTEzNSBsNTcgLTI5IDAgLTUyMyAwIC01MjQgLTU3IDI2IGMtMzY2IDE2NCAtNjk5CjIzOCAtMTA3OCAyMzcgLTM4MSAtMSAtNzA0IC02NyAtMTA1NyAtMjE3IGwtMzggLTE2IDAgNTA5IDAgNTA5IDM0IDEyIGM4NCAyOAoxNTYgMTI1IDE1OSAyMTggMiA0NSAwIDQ1IDc5IC0xNiBsNTcgLTQ0IDg0IDc1IDgzIDc2IDgwIC04MCA4MCAtODAgNDQgNzgKYzg1IDE1MSAxMTEgMTkzIDExOCAxOTMgNCAwIDMzIC02NiA2NiAtMTQ1eiBtLTQxOSAtMjUwOSBjMTQ5IC0zOSAyNDggLTE1MQoyNDcgLTI4MSAwIC02NyAtMTEgLTEwMiAtNDggLTE1NiAtODIgLTEyMCAtMjk3IC0xNzcgLTQzMSAtMTE1IC02MiAyOSAtMTIzCjkwIC0xNTUgMTU0IC0zNCA2OSAtMzIgMTY5IDQgMjM4IDMzIDYzIDExNCAxMzcgMTcxIDE1NyA1MyAxOSAxNDcgMjEgMjEyIDN6Cm0xNTQ2IC0xNSBjMTIyIC00NyAxOTkgLTE1MCAxOTkgLTI2OSAwIC03OCAtMTYgLTExOCAtNzUgLTE4MCAtNjUgLTcwIC0xNDUKLTEwNSAtMjU3IC0xMTAgLTc2IC00IC05MiAtMSAtMTQwIDIwIC0xNTcgNzMgLTIyNiAyNDYgLTE1NSAzOTAgMzMgNjcgMTA5CjE0MCAxNzAgMTYyIDU5IDIyIDE4NSAxNSAyNTggLTEzeiIvPgo8cGF0aCBkPSJNMTMzNDAgNDA2MiBjLTQ2IC04MSAtODUgLTE0OSAtODcgLTE1MSAtMiAtMyAtMzcgMjggLTc4IDY5IGwtNzUgNzQKLTI3IC0yNSBjLTE2IC0xNCAtNTQgLTQ4IC04NiAtNzcgbC01OCAtNTIgLTk2IDc3IC05NiA3NiAtMTQ0IC03MSBjLTc5IC00MAotMTQ1IC03MiAtMTQ3IC03MiAtMiAwIC03IDE5IC0xMCA0MyAtMTkgMTIzIC0xNDQgMjIwIC0yNjMgMjAzIC04NCAtMTEgLTE2NgotNzMgLTE5NyAtMTQ4IC0zOCAtOTAgLTUgLTIxNiA3MyAtMjc4IGw0MSAtMzMgMCAtMTI4NCAwIC0xMjgzIDExMCAwIDExMCAwIDAKNTc4IGMwIDYzNSAyIDY1NyA2MSA3NzMgMzkgNzggMTQ0IDE4NiAyMTYgMjIzIDE1NCA3OCAzNTQgNzIgNDk3IC0xNCA3NCAtNDQKMTU4IC0xMzcgMTk3IC0yMTUgNTYgLTExNiA1OSAtMTQ1IDU5IC03NzIgbDAgLTU3MyAxMDUgMCAxMDYgMCAtNCA2MjggYy0zCjY5NiAtMSA2NzEgLTczIDgxNyAtODcgMTc5IC0yNTUgMzE1IC00NTMgMzY2IC0xMDYgMjggLTI4NyAyOCAtMzkyIDEgLTkyIC0yNQotMTk1IC03NiAtMjY0IC0xMzEgbC01MCAtNDAgLTMgNDY2IGMtMiA0MzcgLTEgNDY4IDE1IDQ3NyAzMyAxOCA4MyA4MCA5NSAxMTYKMTAgMzMgMjAgNDAgMTU2IDEwNSA4MCAzOSAxNTEgNzAgMTU3IDY5IDYgLTEgNTMgLTM0IDEwMyAtNzQgbDkyIC03MiA4NiA3Nwo4NyA3NyA3OCAtNzggYzQzIC00MyA4MCAtNzYgODIgLTczIDIgMiAzOCA2NCA3OSAxMzcgNDIgNzQgNzggMTMwIDgxIDEyNSAzCi00IDMwIC03MSA2MiAtMTQ4IDMxIC03NyA1OCAtMTQxIDYwIC0xNDMgMiAtMiA0MyAxOSA5MyA0NyA0OSAyOCA5NiA1MSAxMDQKNTEgNyAwIDM3IC0xNiA2NSAtMzUgMjkgLTE5IDU1IC0zNSA1OSAtMzUgNCAwIDU0IDI3IDExMSA2MSBsMTAzIDYxIDgxIC03Nwo4MiAtNzYgNzQgMTQwIGM0MSA3OCA3NyAxNDEgODEgMTQxIDQgMCA0NCAtNTQgOTAgLTEyMCA0NiAtNjYgODcgLTEyMCA5MgotMTIwIDQgMCAzOCAxMyA3NCAyOSBsNjUgMzAgMzggLTQ5IGMyMSAtMjcgNDIgLTQ5IDQ3IC01MCA0IDAgNTMgMjkgMTA3IDY1CjU1IDM2IDEwMiA2NSAxMDUgNjUgMyAwIDQ0IC0zMCA5MSAtNjYgNDcgLTM2IDg3IC02MyA4OSAtNjEgMiAyIDMwIDY2IDYyIDE0MgozMSA3NiA2MiAxNDAgNjcgMTQxIDYgMiA1MiAtNDggMTA0IC0xMTEgNTIgLTYzIDk3IC0xMTMgMTAwIC0xMTEgMyAyIDM0IDIwCjY5IDQwIGw2MiAzOCA2NSAtMjIgYzcyIC0yNCA5NSAtNDEgOTUgLTcxIDAgLTM0IDM4IC05NSA4NCAtMTM2IGw0NSAtNDAgMwotMTA3OSBjMyAtOTk0IDUgLTEwODQgMjEgLTExMzggNTUgLTE4NSAxODAgLTMwMiAzNjUgLTM0MiA0NCAtOSAxMzIgLTE0IDI1NQotMTQgbDE4NyAwIDAgOTkgMCA5OSAtMTk3IDQgYy0yMzEgNSAtMjc0IDE3IC0zNDMgOTYgLTcwIDc5IC03MCA3NSAtNzAgNzE5CmwwIDU3MyAzMDUgMCAzMDUgMCAwIDEwNSAwIDEwNSAtMzA1IDAgLTMwNSAwIDAgMzkxIDAgMzkxIDQ0IDM5IGMxMzYgMTIwIDkwCjM0MyAtODUgNDA0IC0yMyA4IC01NiAxNSAtNzMgMTUgLTk2IDAgLTIwNSAtNzkgLTIyOCAtMTY1IC03IC0yNSAtMTcgLTQ1IC0yNAotNDUgLTYgMCAtNDEgMTEgLTc4IDI1IGwtNjYgMjUgLTU3IC0zNSBjLTMyIC0xOSAtNjIgLTM1IC02OCAtMzUgLTUgMCAtNTcgNTcKLTExNCAxMjUgLTU4IDY5IC0xMDggMTIyIC0xMTEgMTE4IC00IC01IC0zMSAtNjYgLTYwIC0xMzggLTI5IC03MSAtNTYgLTEzOAotNjIgLTE0OCAtOCAtMTUgLTE4IC0xMCAtODYgNDMgLTQzIDMzIC04MSA2MCAtODUgNjAgLTQgMCAtNTIgLTMwIC0xMDcgLTY2CmwtMTAwIC02NyAtMjIgMjkgYy0xMyAxNiAtMzIgMzkgLTQzIDUyIGwtMjEgMjQgLTYyIC0zMSBjLTM0IC0xNyAtNjUgLTMxIC03MAotMzEgLTQgMCAtNTAgNjEgLTEwMiAxMzYgLTgwIDExNCAtOTYgMTMzIC0xMDYgMTE5IC02IC04IC00MiAtNzQgLTc4IC0xNDUKLTM3IC03MiAtNzAgLTEzMCAtNzMgLTEzMCAtMyAwIC0zOCAzMCAtNzkgNjYgbC03MyA2NiAtMTAxIC02MSBjLTU2IC0zNCAtMTA1Ci02MSAtMTEwIC02MSAtNSAwIC0zNCAxNiAtNjQgMzUgLTMwIDE5IC02MCAzNSAtNjYgMzUgLTYgMCAtNDcgLTIxIC05MSAtNDYKLTQ1IC0yNSAtODQgLTQzIC04NyAtNDAgLTMgNCAtMzYgNzggLTcyIDE2NiBsLTY2IDE1OSAtODQgLTE0N3oiLz4KPHBhdGggZD0iTTkzOTMgMjk1OSBjLTIxNSAtMjEgLTM5NyAtMTA2IC01NDcgLTI1NiAtMTIyIC0xMjIgLTIwOSAtMjc0IC0yNTIKLTQ0MyAtMjkgLTExNCAtMjcgLTM3NiA0IC00ODMgOTcgLTMzOSAzNjIgLTU4OCA3MDcgLTY2MyAxMDkgLTIzIDMzNSAtMjQgNDI5Ci0xIDI3NiA2OSA1MDQgMjU0IDYyNSA1MDggNTQgMTEyIDcyIDE4MyA3OCAzMDcgbDYgMTAyIC0xMTIgMCAtMTExIDAgMCAtNDkKYzAgLTMwNyAtMjQwIC01OTMgLTU1NyAtNjY1IC04OSAtMjAgLTIzNSAtMjAgLTMyOCAtMSAtMjM0IDQ5IC00NDIgMjQ0IC01MTcKNDg1IC0yMCA2NCAtMjMgOTYgLTIzIDIyMCAwIDEyNCAzIDE1NiAyMyAyMjAgMzIgMTAwIDY0IDE2MSAxMjggMjQ3IDE0NSAxOTAKMzUzIDI4NCA2MDAgMjcwIDE2NSAtOSAyOTAgLTU5IDQwMCAtMTYwIDQ1IC00MSA1MyAtNTIgNDIgLTYzIC03IC02IC0yNTEKLTE3MyAtNTQzIC0zNjkgLTI5MSAtMTk2IC01MzQgLTM2MSAtNTM5IC0zNjUgLTcgLTcgNjggLTEyMSAxMTQgLTE3MyA1IC02CjkxMSA2MDAgMTI4MiA4NTggMTcgMTEgMTQgMTggLTMxIDgxIC05OCAxNDAgLTI2OCAyNzMgLTQzMSAzMzcgLTEyNCA0OSAtMzAwCjcxIC00NDcgNTZ6Ii8+CjxwYXRoIGQ9Ik0xMTQxMCAyOTYwIGMtMTUwIC0xNSAtMzExIC03MiAtNDI3IC0xNTEgLTE2OSAtMTE1IC0yOTkgLTMwMCAtMzU1Ci01MDQgLTE4IC02NyAtMjEgLTEwOCAtMjIgLTI1MCAwIC0xNDUgMyAtMTgzIDIyIC0yNjAgODYgLTM0MCAzNTcgLTU4OSA3MDkKLTY1MCA1NiAtMTAgMTUyIC0xNSAyNzkgLTE1IGwxOTQgMCAwIDEwOSAwIDEwOSAtMjIyIDUgYy0yNDggNSAtMjkxIDEzIC00MTgKNzUgLTEwNCA1MSAtMjIyIDE2OCAtMjczIDI3MiAtNjAgMTIyIC03MiAxODQgLTcxIDM1NSAwIDEzNCAzIDE1OCAyNyAyMzAgMTUKNDQgNDMgMTA5IDY0IDE0NCA1NCA5MCAxNjYgMTkyIDI2NyAyNDEgMTE4IDU4IDE4NiA3MCA0MjQgNzAgbDIwMiAwIDAgMTE1IDAKMTE1IC0xNjIgLTEgYy05MCAtMSAtMTk3IC01IC0yMzggLTl6Ii8+CjxwYXRoIGQ9Ik0xNDYwMCAyOTU5IGMtMTk3IC0yMyAtMzgwIC0xMTYgLTUxNyAtMjYzIC03OSAtODQgLTExNiAtMTM4IC0xNjMKLTIzOSAtNjAgLTEyNyAtODEgLTIyMSAtODcgLTM4MiAtNiAtMTY0IDEwIC0yNzYgNTggLTQwOCA2MiAtMTcyIDIyMCAtMzYzCjM3OCAtNDU3IDIwMyAtMTIxIDQ4NyAtMTUyIDY5NSAtNzYgNzkgMjggMjA0IDEwMiAyNzAgMTU4IGw0NiA0MCAwIDEzNCAwIDEzNAotNzcgLTc4IGMtMTY5IC0xNjkgLTMxNSAtMjMwIC01MjggLTIxOSAtMTY3IDggLTI4NiA2NSAtNDE1IDE5NiAtMTQzIDE0NQotMjEwIDMxNSAtMjEwIDUzMiAwIDIxNiA3NyA0MDEgMjI1IDU0NCAyMDIgMTk1IDQ3MiAyMzggNzIwIDExNiAxNzYgLTg3IDMxNQotMjc4IDM1OSAtNDkzIDEzIC02NCAxNiAtMTYwIDE2IC01NzMgbDAgLTQ5NSAxMDUgMCAxMDUgMCAwIDUxNCBjMCA1NTMgLTMKNTg5IC01NCA3MzYgLTY2IDE5MiAtMjIxIDM3NSAtNDA4IDQ4MyAtNzMgNDIgLTIxNyA4NiAtMzE5IDk3IC0xMDQgMTEgLTk1IDExCi0xOTkgLTF6Ii8+CjxwYXRoIGQ9Ik02MDAzIDIyNjMgYzMgLTYwMyA1IC02NzQgMjEgLTcyNyA2NCAtMjE1IDIxNyAtMzY2IDQyNyAtNDIzIDg3IC0yMwoyNzEgLTIzIDM1OSAwIDEzMyAzNiAyMzUgMTA2IDMwMCAyMDcgMTggMjcgMzMgNTAgMzUgNTAgMiAwIDE1IC0yMCAyOSAtNDQgMzYKLTYxIDEyNiAtMTQwIDE5OSAtMTc1IDkzIC00MyAxNTggLTU2IDI5MiAtNTUgMTAxIDEgMTMyIDUgMjAxIDI3IDE5OCA2NSAzMzgKMjE1IDM5NyA0MjYgMjAgNzMgMjEgMTAwIDI1IDcyOSBsMyA2NTIgLTExMCAwIC0xMTEgMCAwIC02MzAgYzAgLTQyMSAtNCAtNjQ2Ci0xMSAtNjgyIC0zMSAtMTQ4IC0xMzcgLTI2MSAtMjgzIC0zMDMgLTg1IC0yNSAtMjE0IC0xNyAtMjkwIDE4IC03MyAzNCAtMTU5CjExNiAtMTkwIDE4MSAtNDQgOTUgLTQ2IDEyNCAtNDYgNzg2IGwwIDYzMCAtMTEwIDAgLTExMCAwIDAgLTY0NCBjMCAtNjEzIC0xCi02NDcgLTIwIC03MDggLTM2IC0xMTcgLTEwMiAtMTkyIC0yMTggLTI0NiAtNTEgLTI0IC02OSAtMjcgLTE2NyAtMjcgLTEwMyAwCi0xMTQgMiAtMTc1IDMxIC0zNiAxNyAtODQgNDggLTEwNyA2OCAtNTkgNTEgLTExMCAxNTkgLTEyMyAyNTYgLTUgNDEgLTEwIDM0NAotMTAgNjczIGwwIDU5NyAtMTA2IDAgLTEwNSAwIDQgLTY2N3oiLz4KPHBhdGggZD0iTTE2OTcwIDIzNzIgYzAgLTMyNiA0IC01OTIgMTAgLTY0MSAyMyAtMTc2IDg2IC0zMTMgMjAyIC00MzYgOTkKLTEwNCAyMjUgLTE3MiAzNTYgLTE5MCBsNTIgLTcgMCAtMjY5IDAgLTI2OSAxMTUgMCAxMTUgMCAwIDI2OSAwIDI2OSA2NyAxMgpjMTk3IDM0IDM2NSAxNjcgNDYyIDM2NCA3NyAxNTggNzQgMTI3IDc4IDgyOSBsNCA2MjcgLTEwNiAwIC0xMDUgMCAwIC01NjQgYzAKLTYyNCAtMyAtNjYxIC02MSAtNzg0IC0zOSAtODEgLTE0MCAtMTg3IC0yMTYgLTIyNiAtMTU0IC03NyAtMzUwIC03NSAtNDkyIDYKLTc1IDQzIC0xNjAgMTMzIC0xOTkgMjA5IC02MiAxMjUgLTYyIDEyNCAtNjIgNzcxIGwwIDU4OCAtMTEwIDAgLTExMCAwIDAKLTU1OHoiLz4KPHBhdGggZD0iTTc3MCA3NTUgbDAgLTE0NSAyMzAwIDAgMjMwMCAwIDAgMTQ1IDAgMTQ1IC0yMzAwIDAgLTIzMDAgMCAwIC0xNDV6Ii8+CjwvZz4KPC9zdmc+Cg=="},214:function(t,e,M){"use strict";M.r(e),e.default=M.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"},215:function(t,e,M){"use strict";M.r(e),e.default=M.p+"assets/images/friday-qrcode-5cc2eb406423df2d76ccc0b3543f94b7.svg"}}]);