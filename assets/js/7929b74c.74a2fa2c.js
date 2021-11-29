"use strict";(self.webpackChunkaniapi_docs=self.webpackChunkaniapi_docs||[]).push([[2607],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2924:function(e,t,n){var r=n(7294).createContext(void 0);t.Z=r},5350:function(e,t,n){var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},1018:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),a="block_JUYf",i="blockHead_AG8D",o="blockBody_I2gl",l="method_2vln",s="getMethod_UQV3",u="putMethod_ILq3",c="postMethod_vaMB",p="deleteMethod_QrJz";function d(e){for(var t=[],n=function(e){switch(e){case"GET":return s;case"PUT":return u;case"POST":return c;case"DELETE":return p}},d=0;d<e.items.length;d++){var m=e.items[d].method,h=e.items[d].uri;t.push(r.createElement("div",{key:m+"-"+h},r.createElement("span",{className:l+" "+n(m)},m),h))}return r.createElement("div",{className:a},e.title&&r.createElement("div",{className:i},e.title),r.createElement("div",{className:o},t))}},552:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(5861),a=n(7757),i=n.n(a),o=n(7294),l=n(2171),s={tryIt:"tryIt_Ne9f",items:"items_H0a6",itemLabel:"itemLabel_DI0w",jsonContent:"jsonContent_1TuS",notSupported:"notSupported_tWIv",tryItCbox:"tryItCbox_dWU2"};function u(e){var t=[],n=[],a="https://api.aniapi.com"+e.uri,u=e.method,c=!!e.secure&&e.secure,p=(0,o.useState)(!0),d=p[0],m=p[1],h=(0,o.useState)(!1),v=h[0],k=h[1],g=(0,o.useState)(null),f=g[0],b=g[1],y=(0,o.useState)(""),N=y[0],C=y[1],T=(0,o.useState)(""),x=T[0],w=T[1];(0,o.useEffect)((function(){v&&E()}),[n]),(0,o.useEffect)((function(){k(!0)}),[]),(0,o.useEffect)((function(){return function(){k(!1)}}),[]);var E=function(){var e=(0,r.Z)(i().mark((function e(){var t,r,o,l,s,p,h,v,k,g;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return");case 2:m(!1),t=a,r=!1,o=0;case 6:if(!(o<n.length)){e.next=14;break}if("boolean"==typeof(l=n[o]).value||l.value){e.next=10;break}return e.abrupt("continue",11);case 10:if(-1!==l.name.indexOf(":"))t=t.replace(l.name,l.value);else if(r?t+="&":(t+="?",r=!0),"string"==typeof l.value&&-1!==l.value.indexOf(","))for(s=l.value.split(","),t+=l.name+"=",p=0;p<s.length;p++)t+=""+encodeURIComponent(s[p]),p+1<s.length&&(t+=",");else t+=l.name+"="+encodeURIComponent(l.value);case 11:o++,e.next=6;break;case 14:if((h=JSON.parse(window.localStorage.getItem("AUTH_USER")))||!c){e.next=18;break}return w("// You need to login in order to perform this request!"),e.abrupt("return");case 18:return v="",e.prev=19,k={Accept:"application/json","Content-Type":"application/json"},c&&(k.Authorization="Bearer "+h.access_token),e.next=24,fetch(t,{method:u,headers:k});case 24:return g=e.sent,e.next=27,g.json();case 27:v=e.sent,e.next=34;break;case 30:return e.prev=30,e.t0=e.catch(19),w("// Something bad happened, check console (F12)"),e.abrupt("return");case 34:C(t),w(JSON.stringify(v,null,4));case 36:case"end":return e.stop()}}),e,null,[[19,30]])})));return function(){return e.apply(this,arguments)}}();if(e.items)for(var O=function(r){var a=e.items[r],i=(0,o.useState)({name:a.name,value:a.value}),l=i[0],u=i[1];switch(n.push(l),a.type){case"number":case"text":t.push(o.createElement("div",{key:a.name,className:s.item},o.createElement("label",{className:s.itemLabel},a.placeholder),o.createElement("input",{type:a.type,placeholder:a.placeholder,name:a.name,value:l.value,onChange:function(e){u((function(t){return Object.assign({},t,{value:e.target.value})})),f&&(clearTimeout(f),b(null)),b(setTimeout((function(){m(!0)}),500))}})));break;case"checkbox":t.push(o.createElement("div",{key:a.name,className:s.item},o.createElement("label",{className:s.itemLabel},a.placeholder),o.createElement("input",{type:a.type,className:s.tryItCbox,name:a.name,checked:l.value,onChange:function(e){u((function(t){return Object.assign({},t,{value:e.target.checked})})),f&&(clearTimeout(f),b(null)),b(setTimeout((function(){m(!0)}),500))}})))}},S=0;S<e.items.length;S++)O(S);return o.createElement("div",null,o.createElement("div",{className:s.notSupported},"This feature is not available on mobile."),o.createElement("div",{className:s.tryIt},o.createElement("div",{className:s.items},t),o.createElement(l.Z,{className:"language-js",title:N},x)))}},2969:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){return r.createElement("span",{style:{backgroundColor:e.bgColor,borderRadius:"0.4rem",color:e.color,padding:"0.1rem 0.3rem",border:"0.1rem solid rgba(0, 0, 0, 0.1)",fontFamily:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',fontSize:"95%",verticalAlign:"middle"}},e.content)}},8150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},endpoints:function(){return h},getResourceParams:function(){return v},default:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(1018),l=n(2969),s=n(552),u=["components"],c={sidebar_position:4},p="Resource",d={unversionedId:"resources/resource",id:"resources/resource",isDocsHomePage:!1,title:"Resource",description:"export const endpoints = [",source:"@site/docs/resources/resource.mdx",sourceDirName:"resources",slug:"/resources/resource",permalink:"/docs/resources/resource",editUrl:"https://github.com/AniAPI-Team/AniAPI-Docs/edit/main/docs/resources/resource.mdx",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Song",permalink:"/docs/resources/song"},next:{title:"User",permalink:"/docs/resources/user"}},m=[{value:"Genres",id:"genres",children:[{value:"Changelog",id:"changelog",children:[]}]},{value:"Localizations",id:"localizations",children:[{value:"Attributes",id:"attributes",children:[]},{value:"Changelog",id:"changelog-1",children:[]}]},{value:"Sources",id:"sources",children:[{value:"Attributes",id:"attributes-1",children:[]},{value:"Changelog",id:"changelog-2",children:[]}]},{value:"Retrieve last Resources&#39; version",id:"retrieve-last-resources-version",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Try it",id:"try-it",children:[]}]},{value:"Retrieve a specific Resource",id:"retrieve-a-specific-resource",children:[{value:"Type",id:"type",children:[]},{value:"Returns",id:"returns-1",children:[]},{value:"Try it",id:"try-it-1",children:[]}]}],h=[{method:"GET",uri:"/v1/resources"},{method:"GET",uri:"/v1/resources/:version/:type"}],v=[{name:":version",type:"text",placeholder:":version",value:"1.0"},{name:":type",type:"number",placeholder:":type",value:"0"}],k={toc:m,endpoints:h,getResourceParams:v};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resource"},"Resource"),(0,i.kt)("p",null,"AniAPI provides an endpoint to retrieve general purpose content, most of them utils.\nThe API allows you to retrieve the last available Resources' version and retrieve individual Resource providing a version and a type."),(0,i.kt)(o.Z,{title:"Endpoints",items:h,mdxType:"ApiCodeBlock"}),(0,i.kt)("h2",{id:"genres"},"Genres"),(0,i.kt)("p",null,"This is an ",(0,i.kt)("inlineCode",{parentName:"p"},"array of strings")," containing all the availables ",(0,i.kt)("inlineCode",{parentName:"p"},"genre")," value across AniAPI."),(0,i.kt)("h3",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Default values")))),(0,i.kt)("h2",{id:"localizations"},"Localizations"),(0,i.kt)("p",null,"This is an ",(0,i.kt)("inlineCode",{parentName:"p"},"array of objects")," containing all the possible ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," values inside AniAPI."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"i18n-"},"i18n ",(0,i.kt)(l.Z,{bgColor:"#8D46B8",color:"white",content:"string",mdxType:"Highlight"})),(0,i.kt)("p",null,"The locale's ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/ISO_639-1"},"ISO 639\u20111"))," language code."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"label-"},"label ",(0,i.kt)(l.Z,{bgColor:"#8D46B8",color:"white",content:"string",mdxType:"Highlight"})),(0,i.kt)("p",null,"The locale's description."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"changelog-1"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Intial support for ",(0,i.kt)("inlineCode",{parentName:"td"},"en")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"it")," values")))),(0,i.kt)("h2",{id:"sources"},"Sources"),(0,i.kt)("p",null,"This is an ",(0,i.kt)("inlineCode",{parentName:"p"},"array of objects")," containing all the supported sources for ",(0,i.kt)("inlineCode",{parentName:"p"},"episodes")," in AniAPI."),(0,i.kt)("h3",{id:"attributes-1"},"Attributes"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"i18n--1"},"i18n ",(0,i.kt)(l.Z,{bgColor:"#8D46B8",color:"white",content:"string",mdxType:"Highlight"})),(0,i.kt)("p",null,"The source's ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/ISO_639-1"},"ISO 639\u20111"))," language code."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"name-"},"name ",(0,i.kt)(l.Z,{bgColor:"#8D46B8",color:"white",content:"string",mdxType:"Highlight"})),(0,i.kt)("p",null,"The source's name inside ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"episode"},"Episode"))),"."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"format-"},"format ",(0,i.kt)(l.Z,{bgColor:"#8D46B8",color:"white",content:"string",mdxType:"Highlight"})),(0,i.kt)("p",null,"The source's video encoding format."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"changelog-2"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Default values")))),(0,i.kt)("h2",{id:"retrieve-last-resources-version"},"Retrieve last Resources' version"),(0,i.kt)(o.Z,{items:[h[0]],mdxType:"ApiCodeBlock"}),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"No parameters."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," which identifies the latest available Resources' version."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Older Resources' versions ",(0,i.kt)("strong",{parentName:"p"},"will be available forever"),", in order to serve also external services that don't follow our updates."))),(0,i.kt)("h3",{id:"try-it"},"Try it"),(0,i.kt)(s.Z,{uri:h[0].uri,mdxType:"ApiTryIt"}),(0,i.kt)("h2",{id:"retrieve-a-specific-resource"},"Retrieve a specific Resource"),(0,i.kt)(o.Z,{items:[h[1]],mdxType:"ApiCodeBlock"}),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Possible type enum values"',title:'"Possible',type:!0,enum:!0,'values"':!0},'"GENRES": 0,\n"LOCALIZATIONS": 1,\n"SOURCES": 2\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"Returns a Resource object according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," values provided."),(0,i.kt)("h3",{id:"try-it-1"},"Try it"),(0,i.kt)(s.Z,{items:v,uri:h[1].uri,mdxType:"ApiTryIt"}))}g.isMDXComponent=!0}}]);