(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.ea8ac385.png"},15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/fireplanet2.d6ba3ffe.PNG"},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),s=a.n(r),c=(a(20),a(6)),l=a(7),i=a(2),u=a(8),h=a(9),p=(a(21),a(14)),m=a.n(p),d=(a(22),a(4)),g=a.n(d),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).copyHex=n.copyHex.bind(Object(i.a)(n)),n}return Object(l.a)(a,[{key:"copyHex",value:function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),g()("#copiedToBoard").show(),setTimeout((function(){g()("#copiedToBoard").fadeOut("slow")}),1500),this.props.addToPalette(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"card"},o.a.createElement("h1",null,this.props.piece.title),o.a.createElement("img",{src:this.props.piece.primaryimageurl,width:"300px"}),o.a.createElement("div",{class:"boxContainer"},o.a.createElement("div",{className:"boxes",style:{backgroundColor:this.props.piece.colors[0].color},onClick:function(){e.copyHex(e.props.piece.colors[0].color)}}),o.a.createElement("div",{className:"boxes",style:{backgroundColor:this.props.piece.colors[1].color},onClick:function(){e.copyHex(e.props.piece.colors[1].color)}}),o.a.createElement("div",{className:"boxes",style:{backgroundColor:this.props.piece.colors[2].color},onClick:function(){e.copyHex(e.props.piece.colors[2].color)}}),o.a.createElement("div",{className:"boxes",style:{backgroundColor:this.props.piece.colors[3].color},onClick:function(){e.copyHex(e.props.piece.colors[3].color)}}),o.a.createElement("div",{className:"boxes",style:{backgroundColor:this.props.piece.colors[4].color},onClick:function(){e.copyHex(e.props.piece.colors[4].color)}})),o.a.createElement("div",{id:"copiedToBoard"},"Copied to Clipboard!"))}}]),a}(n.Component),y=a(5),b=a(3),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).addToPalette=function(e){var t=n.state.currentPalette;console.log(t);var a=t.includes(e);n.state.currentPalette.length<8&&0==a&&(t.push(e),n.setState({currentPalette:t}))},n.state={rows:[],artType:"",century:"",homePage:!0,numPages:[],currentPage:1,currentPalette:[],paletteOn:!1,aboutOn:!1},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n.handleCentury=n.handleCentury.bind(Object(i.a)(n)),n.paletteStateSet=n.paletteStateSet.bind(Object(i.a)(n)),n.aboutStateSet=n.aboutStateSet.bind(Object(i.a)(n)),n.addToPalette=n.addToPalette.bind(Object(i.a)(n)),n.removePaletteEntry=n.removePaletteEntry.bind(Object(i.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(l.a)(a,[{key:"paletteStateSet",value:function(){var e=!this.state.paletteOn;this.setState({paletteOn:e})}},{key:"aboutStateSet",value:function(){var e=!this.state.aboutOn;this.setState({aboutOn:e})}},{key:"removePaletteEntry",value:function(e){var t=this.state.currentPalette.filter((function(t,a){return console.log(t),t!==e}));console.log(t),this.setState({currentPalette:t})}},{key:"handleChange",value:function(e){this.setState({artType:e.target.value}),""!=this.state.artType&&""!=this.state.century&&this.performSearch(this.state.artType,this.state.century)}},{key:"handleCentury",value:function(e){this.setState({century:e.target.value}),""!=this.state.artType&&""!=this.state.century&&this.performSearch(this.state.artType,this.state.century)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.performSearch(this.state.artType,this.state.century)}},{key:"changePages",value:function(e){var t=this,a="https://api.harvardartmuseums.org/object?apikey=19142ab0-6cf9-11ea-8bdc-95909fa24347&classification="+this.state.artType+"&q=colorcount:>=5&hasimage=1&century="+this.state.century+"&page="+e;g.a.ajax({url:a,success:function(a){t.state.currentPage=e,t.state.homePage=!1,t.state.numPages=[],console.log(e);for(var n=t.state.currentPage;n<=a.info.pages;n++)t.state.numPages.push(n);var r=a.records,s=[];r.forEach((function(e){console.log(e);var a=o.a.createElement(v,{piece:e,addToPalette:t.addToPalette});s.push(a)})),t.setState({rows:s})},error:function(e,t,a){console.log("error")}})}},{key:"performSearch",value:function(e,t){var a=this,n="https://api.harvardartmuseums.org/object?apikey=19142ab0-6cf9-11ea-8bdc-95909fa24347&classification="+e+"&q=colorcount:>=5&hasimage=1&century="+t;g.a.ajax({url:n,success:function(e){a.state.homePage=!1,a.state.currentPage=1,a.state.numPages=[];for(var t=a.state.currentPage;t<=e.info.pages;t++)a.state.numPages.push(t);console.log(a.state.numPages);var n=e.records,r=[];n.forEach((function(e){console.log(e);var t=o.a.createElement(v,{piece:e,addToPalette:a.addToPalette});r.push(t)})),a.setState({rows:r})},error:function(e,t,a){console.log("error")}})}},{key:"render",value:function(){var e=this,t=(this.state.currentPage,o.a.createElement("div",{id:"paletteContainer"},this.state.currentPalette.map((function(t){return o.a.createElement("div",{key:t},o.a.createElement(y.a,{icon:b.b,className:"deletePalette",onClick:function(a){e.removePaletteEntry(t)}})," ",o.a.createElement("p",null,t)," ",o.a.createElement("div",{className:"paletteColorBox",style:{backgroundColor:t}}))}))));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:this.state.homePage?"bg":""}),o.a.createElement("div",{id:this.state.homePage?"bg2":""}),o.a.createElement("div",{id:"paletteViewer",style:{display:1==this.state.paletteOn?"block":"none"}},o.a.createElement(y.a,{icon:b.d,id:"closeSavedPalette",onClick:function(){e.paletteStateSet()}}),o.a.createElement("h1",null,"Saved Palette"),t),o.a.createElement(y.a,{icon:b.c,id:"palette",onClick:function(){e.paletteStateSet()},style:{display:1==this.state.homePage?"none":""}}),o.a.createElement("div",{id:"aboutModal",style:{display:1==this.state.aboutOn?"block":"none"}},o.a.createElement(y.a,{icon:b.d,id:"closeSavedPalette",onClick:function(){e.aboutStateSet()}}),o.a.createElement("h1",null,"About This Project"),o.a.createElement("p",null,"Palette From Art is a web application built on React that allows users to explore various color palettes based on existing artworks in the Harvard Art Museum's API. The application allows users to search, and then click on the boxes of color below a painting to copy this into a saved palette (accessible through the palette icon in upper right corner). The user can also remove the saved hex colors in the same panel")),o.a.createElement(y.a,{icon:b.a,id:"infoButton",onClick:function(){e.aboutStateSet()},style:{margin:1==this.state.homePage?"20px 20px 20px 20px":"20px 110px 20px 100px"}}),o.a.createElement("header",{className:"toolbar"},o.a.createElement("ul",null,o.a.createElement("li",{className:"title"},o.a.createElement("img",{src:m.a})),o.a.createElement("li",{className:"about"},"About"))),o.a.createElement("div",{id:this.state.homePage?"homeForm":"searchPageForm",className:this.state.paletteOn||this.state.aboutOn?"fadeModalPresent":""},"I Want",o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("select",{value:this.state.artType,onChange:this.handleChange},o.a.createElement("option",{value:"Paintings"},"Paintings"),o.a.createElement("option",{value:"Mosaics"},"Mosaics"),o.a.createElement("option",{value:"Drawings"},"Drawings"),o.a.createElement("option",{value:"Textile%20Arts"},"Textiles"),o.a.createElement("option",{value:"Stained%20Glass"},"Stained Glass"),o.a.createElement("option",{value:"Photographs"},"Photographs"),o.a.createElement("option",{value:"Prints"},"Prints")),"from the",o.a.createElement("select",{value:this.state.century,onChange:this.handleCentury},o.a.createElement("option",{value:"14th%20century"},"14th Century"),o.a.createElement("option",{value:"15th%20century"},"15th Century"),o.a.createElement("option",{value:"16th%20century"},"16th Century"),o.a.createElement("option",{value:"17th%20century"},"17th Century"),o.a.createElement("option",{value:"18th%20century"},"18th Century"),o.a.createElement("option",{value:"19th%20century"},"19th Century"),o.a.createElement("option",{value:"20th%20century"},"20th Century"),o.a.createElement("option",{value:"21th%20century"},"21th Century")),o.a.createElement("input",{type:"submit",value:"Submit"}))),o.a.createElement("div",{id:"contentContainer",className:this.state.paletteOn||this.state.aboutOn?"fadeModalPresent":"",style:{display:1==this.state.homePage?"none":""}},this.state.rows,o.a.createElement("br",null),o.a.createElement("div",{className:"nav"},this.state.currentPage>1&&o.a.createElement("button",{className:"",onClick:function(){e.changePages(e.state.numPages[1]-2)}},this.state.numPages[1]-2),o.a.createElement("button",{className:"active",onClick:function(){e.changePages(e.state.numPages[1]-1)}},this.state.numPages[1]-1),o.a.createElement("button",{className:"",onClick:function(){e.changePages(e.state.numPages[1])}},this.state.numPages[1]),o.a.createElement("button",{className:"",onClick:function(){e.changePages(e.state.numPages[2])}},this.state.numPages[2]),o.a.createElement("button",{className:"",onClick:function(){e.changePages(e.state.numPages[3])}},this.state.numPages[3]))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0bfd479f.chunk.js.map