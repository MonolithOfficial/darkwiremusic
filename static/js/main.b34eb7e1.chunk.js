(this.webpackJsonpdarkwire_react_rebuild=this.webpackJsonpdarkwire_react_rebuild||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/darkwirecover.4bb2a429.png"},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),i=(a(36),a(8)),o=a(9),s=a(12),m=a(11),u=a(7),d=function(){return r.a.createElement("nav",{id:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.c,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/reviews"},"Reviews")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/lists"},"Lists")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/register"},"Register"))))},h=a(1),p=a(10),v=a.n(p),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={slides:[],activeSlide:1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/articles.json").then((function(t){e.setState({slides:t.data}),b()})),this.interval=setInterval((function(){return g()}),5e3)}},{key:"componentDidUpdate",value:function(){console.log(this.state.activeSlide)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.slides,t=e.length?e.map((function(t){return r.a.createElement(u.b,{to:"/"+t.content,key:t.number},r.a.createElement("div",{className:"mySlides fade"},r.a.createElement("div",{className:"numbertext"},t.number," / ",e.length),r.a.createElement("img",{src:"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/"+t.photo,alt:"",style:{width:"100%"}}),r.a.createElement("div",{className:"text"},t.title)))})):r.a.createElement("h3",{className:"loading"});return r.a.createElement("div",null,t)}}]),a}(n.Component),E=0,g=function(){var e=document.querySelectorAll(".mySlides");E===e.length-1&&(E=0);for(var t=0;t<e.length;t++)e[t].style.display="none";e[++E-1].style.display="block",console.log(E)},b=function(){var e=document.querySelectorAll(".mySlides");setTimeout((function(){e[0].style.display="block"}),400)},y=f,w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={articles:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/articles.json").then((function(t){e.setState({articles:t.data}),console.log(e.state.articles)}))}},{key:"render",value:function(){var e=this.state.articles,t=e.length?e.map((function(e){return r.a.createElement("div",{className:"articleDiv",key:e.number},r.a.createElement("img",{src:"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/"+e.photo,alt:""}),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/"+e.content},r.a.createElement("p",{className:"articleTitle"},e.title)),r.a.createElement("p",{className:"articleCategory"},e.category)))})):r.a.createElement("h1",null,"There are no articles at the moment");return r.a.createElement("div",null,r.a.createElement("div",{id:"topContainer"},r.a.createElement("div",{className:"slideshow-container"},r.a.createElement(y,null))),r.a.createElement("div",{id:"pageWrapperHome"},r.a.createElement("div",{className:"wrapper"},t),r.a.createElement("div",{className:"charts"},"ey")))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={article:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.post_id;v.a.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/"+t).then((function(t){e.setState({article:t.data})}))}},{key:"render",value:function(){var e=this.state.article,t=e.length?e.map((function(e){return r.a.createElement("div",{className:"wrapperArticle",key:Number(e.place)},r.a.createElement("h3",{className:"mainSubTitle"},e.place,". ",e.name),r.a.createElement("p",{className:"desc"},e.description),r.a.createElement("img",{src:"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/"+e.photo,alt:""}))})):r.a.createElement("h1",null,"Loading. Please wait.");return r.a.createElement("div",{id:"pageWrapper"},t)}}]),a}(n.Component),j=function(e){var t=e.articleProps;return console.log(t),r.a.createElement("div",{id:"footer"},r.a.createElement("div",{id:"footerContent"}),r.a.createElement("div",{id:"footerCopyright"},r.a.createElement("p",null,"Darkwire, a property of Darkroom Laboratories")))},O=a(30),N=a.n(O),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={articleData:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/articles.json").then((function(t){e.setState({articleData:t.data}),console.log(e.state)}))}},{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("img",{id:"mainLogo",src:N.a,alt:"darkwire"}),r.a.createElement(d,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:w}),r.a.createElement(h.a,{path:"/:post_id",component:k})),r.a.createElement(j,{articleProps:this.state.articleData})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b34eb7e1.chunk.js.map