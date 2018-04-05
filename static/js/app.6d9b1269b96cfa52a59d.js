webpackJsonp([1],{J7ds:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("zL8q"),r=s.n(a),i=(s("tvR6"),s("Gu7T")),o=s.n(i),c=s("Icdr"),h=s.n(c),l=s("O4Lo"),u=s.n(l),d=s("472O"),g=["legendselectchanged","legendselected","legendunselected","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","geoselectchanged","geoselected","geounselected","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected","axisareaselected","focusnodeadjacency","unfocusnodeadjacency","brush","brushselected","click","dblclick","mouseover","mouseout","mousedown","mouseup","globalout"],f={props:{options:Object,theme:[String,Object],initOptions:Object,group:String,autoResize:Boolean,watchShallow:Boolean},data:function(){return{chart:null,lastArea:0}},computed:{width:{cache:!1,get:function(){return this.delegateGet("width","getWidth")}},height:{cache:!1,get:function(){return this.delegateGet("height","getHeight")}},isDisposed:{cache:!1,get:function(){return!!this.delegateGet("isDisposed","isDisposed")}},computedOptions:{cache:!1,get:function(){return this.delegateGet("computedOptions","getOption")}}},watch:{group:function(e){this.chart.group=e}},methods:{mergeOptions:function(e,t,s){this.delegateMethod("setOption",e,t,s)},appendData:function(e){this.delegateMethod("appendData",e)},resize:function(e){this.delegateMethod("resize",e)},dispatchAction:function(e){this.delegateMethod("dispatchAction",e)},convertToPixel:function(e,t){return this.delegateMethod("convertToPixel",e,t)},convertFromPixel:function(e,t){return this.delegateMethod("convertFromPixel",e,t)},containPixel:function(e,t){return this.delegateMethod("containPixel",e,t)},showLoading:function(e,t){this.delegateMethod("showLoading",e,t)},hideLoading:function(){this.delegateMethod("hideLoading")},getDataURL:function(e){return this.delegateMethod("getDataURL",e)},getConnectedDataURL:function(e){return this.delegateMethod("getConnectedDataURL",e)},clear:function(){this.delegateMethod("clear")},dispose:function(){this.delegateMethod("dispose")},delegateMethod:function(e){var t;if(this.chart){for(var s=arguments.length,a=Array(s>1?s-1:0),r=1;r<s;r++)a[r-1]=arguments[r];return(t=this.chart)[e].apply(t,o()(a))}n.default.util.warn("Cannot call ["+e+"] before the chart is initialized. Set prop [options] first.",this)},delegateGet:function(e,t){return this.chart||n.default.util.warn("Cannot get ["+e+"] before the chart is initialized. Set prop [options] first.",this),this.chart[t]()},getArea:function(){return this.$el.offsetWidth*this.$el.offsetHeight},init:function(){var e=this;if(!this.chart){var t=h.a.init(this.$el,this.theme,this.initOptions);this.group&&(t.group=this.group),t.setOption(this.options,!0),g.forEach(function(s){t.on(s,function(t){e.$emit(s,t)})}),this.autoResize&&(this.lastArea=this.getArea(),this.__resizeHandler=u()(function(){0===e.lastArea?(e.mergeOptions({},!0),e.resize(),e.mergeOptions(e.options,!0)):e.resize(),e.lastArea=e.getArea()},100,{leading:!0}),Object(d.a)(this.$el,this.__resizeHandler)),this.chart=t}},destroy:function(){this.autoResize&&Object(d.b)(this.$el,this.__resizeHandler),this.dispose(),this.chart=null},refresh:function(){this.destroy(),this.init()}},created:function(){var e=this;this.$watch("options",function(t){!e.chart&&t?e.init():e.chart.setOption(e.options,!0)},{deep:!this.watchShallow});["theme","initOptions","autoResize","watchShallow"].forEach(function(t){e.$watch(t,function(){e.refresh()},{deep:!0})})},mounted:function(){this.options&&this.init()},activated:function(){this.autoResize&&this.chart&&this.chart.resize()},beforeDestroy:function(){this.chart&&this.destroy()},connect:function(e){"string"!=typeof e&&(e=e.map(function(e){return e.chart})),h.a.connect(e)},disconnect:function(e){h.a.disConnect(e)},registerMap:function(e,t,s){h.a.registerMap(e,t,s)},registerTheme:function(e,t){h.a.registerTheme(e,t)},graphic:h.a.graphic},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"echarts"})},staticRenderFns:[]};var j=s("VU/8")(f,p,!1,function(e){s("e65M")},null,null).exports,m=(s("4UDB"),s("Oq2I"),s("2tOJ"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),t("router-view"),this._v(" "),this._m(1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("\n      Hubble\n    ")]),this._v(" "),t("h2",[this._v("Travel through GitHub Stars' history")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{attrs:{align:"center"}},[this._v("\n    Created by "),t("a",{attrs:{href:"https://github.com/SevenOutman",target:"_blank"}},[this._v("SevenOutman at GitHub")])])}]});var v=s("VU/8")({name:"App"},m,!1,function(e){s("vmFt")},null,null).exports,w=s("/ocq"),z=s("2R8v"),b=s.n(z),y=(s("mtWM"),s("PJh5")),k=s.n(y),S=s("tlQw"),P=s.n(S),O=b()(["\n        query RepoStars($owner: String!, $name: String!, $afterPointer: String) {\n          repository(owner: $owner, name: $name) {\n            stargazers(after: $afterPointer, first: 100) {\n              edges {\n                starredAt\n              },\n              pageInfo {\n                endCursor\n                hasPreviousPage\n                hasNextPage\n              }\n              totalCount\n            }\n          }\n        }\n      "],["\n        query RepoStars($owner: String!, $name: String!, $afterPointer: String) {\n          repository(owner: $owner, name: $name) {\n            stargazers(after: $afterPointer, first: 100) {\n              edges {\n                starredAt\n              },\n              pageInfo {\n                endCursor\n                hasPreviousPage\n                hasNextPage\n              }\n              totalCount\n            }\n          }\n        }\n      "]),x={name:"RepoStars",apollo:{repository:{query:P()(O),variables:function(){return{owner:this.owner,name:this.repo,afterPointer:this.afterPointer}},skip:function(){return!this.requesting},manual:!0,result:function(e){var t=e.data;if(!e.loading){var s=t.repository.stargazers,n=s.edges,a=s.pageInfo,r=a.endCursor,i=a.hasPreviousPage,c=a.hasNextPage,h=s.totalCount;this.stargazers=[].concat(o()(this.stargazers),o()(n.map(function(e){return e.starredAt}))),this.totalPages=Math.ceil(h/100),!i&&n.length&&(this.firstStar=n[0].starredAt),this.afterPointer=r,c||(this.requesting=!1)}},error:function(e){+e.networkError.statusCode>400&&(this.requesting=!1,this.accessToken="",this.showDialog=!0)}}},data:function(){return{repository:"",afterPointer:null,accessToken:localStorage.getItem("access_token"),owner:"js-org",repo:"dns.js.org",stargazers:[],showDialog:!1,requesting:!1,totalPages:1,firstStar:""}},computed:{chartData:function(){if(this.requesting){var e=[];if(this.firstStar){var t=k()(this.firstStar).subtract(1,"day"),s=k()();e.push([t.format("YYYY-MM-DD"),0]);for(var n=t.add(1,"day");n.isSameOrBefore(s,"day");n=n.add(1,"day"))e.push([n.format("YYYY-MM-DD")])}return e}var a=[];if(1===this.stargazers.length)a=[this.stargazers[0],1];else if(this.stargazers.length>1)for(var r=k()(this.stargazers[0]).subtract(1,"day"),i=k()(),o=0,c=0,h=r;h.isSameOrBefore(i,"day");h=h.add(1,"day")){var l=0;if(o>=this.stargazers.length)c=void 0;else if(h.isBefore(k()(this.stargazers[o]),"day"));else{for(;o<this.stargazers.length;o++){var u=k()(this.stargazers[o]);if(u.isSame(h,"day")&&l++,u.isAfter(h,"day"))break}c+=l}a.push([h.format("YYYY-MM-DD"),c])}return a},chartOptions:function(){return{tooltip:{trigger:"axis"},xAxis:{type:"time",axisLine:{lineStyle:{color:"#cccccc"}},splitLine:{show:!1},axisLabel:{color:"#333333"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}},max:100*this.totalPages},series:[{type:"line",lineStyle:{color:"#409EFF"},showSymbol:!1,itemStyle:{color:"#409EFF"},markPoint:{data:[{type:"max"}]},data:this.chartData}]}}},methods:{saveAccessToken:function(){localStorage.setItem("access_token",this.accessToken),this.showDialog=!1,this.fetchRepo()},fetchRepo:function(){this.stargazers=[],this.firstStar="",this.afterPointer=null,this.requesting=!0},resizeChart:function(){this.$refs.chart.resize()}},mounted:function(){window.addEventListener("resize",this.resizeChart)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeChart)}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("div",{staticClass:"input-group"},[e.requesting?e._e():s("el-input",{attrs:{placeholder:"User/Org"},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}}),e._v(" "),e.requesting?e._e():s("el-input",{attrs:{placeholder:"Repo"},model:{value:e.repo,callback:function(t){e.repo=t},expression:"repo"}}),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.requesting,disabled:!e.owner||!e.repo},on:{click:e.fetchRepo}},[e._v("\n      "+e._s(e.requesting?"Counting stars ("+e.stargazers.length+")":"Start")+"\n    ")])],1),e._v(" "),s("chart",{ref:"chart",attrs:{options:e.chartOptions}}),e._v(" "),s("el-dialog",{attrs:{title:"Error: Forbidden",visible:e.showDialog,modal:!1,width:"400px"},on:{"update:visible":function(t){e.showDialog=t}}},[s("p",[e._v("\n      You are not allowed to access the API.\n      You might need to provide an access token.\n      Follow "),s("a",{attrs:{href:"https://github.com/settings/tokens/new?scopes=repo&description=Hubble",target:"_blank"}},[e._v("this link")]),e._v(" to create one and paste it below.\n    ")]),e._v(" "),s("div",{staticClass:"input-group",staticStyle:{width:"auto"}},[s("el-input",{attrs:{placeholder:"Paste access token here"},model:{value:e.accessToken,callback:function(t){e.accessToken=t},expression:"accessToken"}}),e._v(" "),s("el-button",{on:{click:e.saveAccessToken}},[e._v("Save")])],1),e._v(" "),s("a",{attrs:{href:"https://github.com/SevenOutman/Hubble#access-token",target:"_blank"}},[e._v("Why is this required?")])])],1)},staticRenderFns:[]};var q=s("VU/8")(x,_,!1,function(e){s("J7ds")},null,null).exports;n.default.use(w.a);var M=new w.a({routes:[{path:"/",name:"RepoStars",component:q}]}),R=s("u1/p"),D=s("rp1p"),F=s("+dIz"),C=s("69U5"),E=new D.a({uri:"https://api.github.com/graphql",headers:{Authorization:"token "+localStorage.getItem("access_token")}}),L=new R.a({link:E,cache:new F.a,connectToDevTools:!0});n.default.use(C.a);var A=new C.a({defaultClient:L}).provide();n.default.use(r.a),n.default.component("chart",j),n.default.config.productionTip=!1,new n.default({el:"#app",router:M,provide:A,components:{App:v},template:"<App/>"})},e65M:function(e,t){},tvR6:function(e,t){},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(e){return s(r(e))}function r(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="uslO"},vmFt:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6d9b1269b96cfa52a59d.js.map