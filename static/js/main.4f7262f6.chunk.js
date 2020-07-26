(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=(n(52),n(5)),l=n(6),u=n(8),s=n(7),m=(n(53),n(16)),h=n(4),f=n(9),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(m.Grid,{className:"landing-grid"},r.a.createElement(m.Cell,{col:12},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Visual Demo"),r.a.createElement("hr",null),r.a.createElement("p",null,"Searching | ",r.a.createElement(f.b,{to:"/sorting"},"Sorting")," | ",r.a.createElement(f.b,{to:"/graphs"},"Graph")," | Strings | Algorithmic Patterns | System Design "),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/parkjsdev/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/park-jsdev",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),n}(a.Component),v=n(33),p=n(17);function g(e){var t=[];if(e.length<=1)return e;var n=e.slice();return function e(t,n,a,r,o){if(n===a)return;var i=Math.floor((n+a)/2);e(r,n,i,t,o),e(r,i+1,a,t,o),function(e,t,n,a,r,o){var i=t,c=t,l=n+1;for(;c<=n&&l<=a;)o.push([c,l]),o.push([c,l]),r[c]<=r[l]?(o.push([i,r[c]]),e[i++]=r[c++]):(o.push([i,r[l]]),e[i++]=r[l++]);for(;c<=n;)o.push([c,c]),o.push([c,c]),o.push([i,r[c]]),e[i++]=r[c++];for(;l<=a;)o.push([l,l]),o.push([l,l]),o.push([i,r[l]]),e[i++]=r[l++]}(t,n,i,a,r,o)}(e,0,e.length-1,n,t),t}n(104);var b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={array:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e,t,n=[],a=0;a<300;a++)n.push((e=5,t=730,Math.floor(Math.random()*(t-e+1)+e)));this.setState({array:n})}},{key:"mergeSort",value:function(){for(var e=g(this.state.array),t=function(t){var n=document.getElementsByClassName("array-bar");if(t%3!==2){var a=Object(v.a)(e[t],2),r=a[0],o=a[1],i=n[r].style,c=n[o].style,l=t%3===0?"red":"violet";setTimeout((function(){i.backgroundColor=l,c.backgroundColor=l}),.75*t)}else setTimeout((function(){var a=Object(v.a)(e[t],2),r=a[0],o=a[1];n[r].style.height="".concat(o,"px")}),.75*t)},n=0;n<e.length;n++)t(n)}},{key:"quickSort",value:function(){}},{key:"heapSort",value:function(){}},{key:"bubbleSort",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement("div",{className:"array-container"},r.a.createElement("div",null,r.a.createElement("br",null)),t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:"violet",height:"".concat(e,"px")}})})),r.a.createElement("div",{className:"array-buttons"},r.a.createElement(p.a,{variant:"outline-primary",onClick:function(){return e.resetArray()}},"Generate New Array")," ",r.a.createElement(p.a,{variant:"outline-light",onClick:function(){return e.mergeSort()}},"Merge Sort")," ",r.a.createElement(p.a,{variant:"outline-light",onClick:function(){return e.quickSort()}},"Quick Sort")," ",r.a.createElement(p.a,{variant:"outline-light",onClick:function(){return e.heapSort()}},"Heap Sort")," ",r.a.createElement(p.a,{variant:"outline-light",onClick:function(){return e.bubbleSort()}},"Bubble Sort")," "))}}]),n}(r.a.Component);var E=n(34),y=(n(105),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isStart,o=e.isWall,i=e.onMouseDown,c=e.onMouseEnter,l=e.onMouseUp,u=e.row,s=n?"node-finish":a?"node-start":o?"node-wall":"";return r.a.createElement("div",{id:"node-".concat(u,"-").concat(t),className:"node ".concat(s),onMouseDown:function(){return i(u,t)},onMouseEnter:function(){return c(u,t)},onMouseUp:function(){return l()}})}}]),n}(a.Component)),k=n(25);function j(e,t,n){var a=[];t.distance=0;for(var r=function(e){var t,n=[],a=Object(k.a)(e);try{for(a.s();!(t=a.n()).done;){var r,o=t.value,i=Object(k.a)(o);try{for(i.s();!(r=i.n()).done;){var c=r.value;n.push(c)}}catch(l){i.e(l)}finally{i.f()}}}catch(l){a.e(l)}finally{a.f()}return n}(e);r.length;){O(r);var o=r.shift();if(!o.isWall){if(o.distance===1/0)return a;if(o.isVisited=!0,a.push(o),o===n)return a;w(o,e)}}}function O(e){e.sort((function(e,t){return e.distance-t.distance}))}function w(e,t){var n,a=function(e,t){var n=[],a=e.col,r=e.row;r>0&&n.push(t[r-1][a]);r<t.length-1&&n.push(t[r+1][a]);a>0&&n.push(t[r][a-1]);a<t[0].length-1&&n.push(t[r][a+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),r=Object(k.a)(a);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.distance=e.distance+1,o.previousNode=e}}catch(i){r.e(i)}finally{r.f()}}n(106);var S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={grid:[],mouseIsPressed:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=C();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=M(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=M(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateDijkstra",value:function(e,t){for(var n=this,a=function(a){if(a===e.length)return setTimeout((function(){n.animateShortestPath(t)}),10*a),{v:void 0};setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),5*a)},r=0;r<=e.length;r++){var o=a(r);if("object"===typeof o)return o.v}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*t)},n=0;n<e.length;n++)t(n)}},{key:"visualizeDijkstra",value:function(){var e=this.state.grid,t=e[10][10],n=e[10][30],a=j(e,t,n),r=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(n);this.animateDijkstra(a,r)}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,a=t.mouseIsPressed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"graph-buttons"},r.a.createElement(p.a,{variant:"outline-primary",size:"lg",onClick:function(){return e.visualizeDijkstra()}},"Start")," ",r.a.createElement(p.a,{variant:"outline-danger",size:"lg",onClick:function(){return window.location.reload(!1)}},"Reset")," "),r.a.createElement("div",{className:"grid"},n.map((function(t,n){return r.a.createElement("div",{key:n},t.map((function(t,n){var o=t.row,i=t.col,c=t.isFinish,l=t.isStart,u=t.isWall;return r.a.createElement(y,{key:n,col:i,isFinish:c,isStart:l,isWall:u,mouseIsPressed:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},row:o})})))}))))}}]),n}(a.Component),C=function(){for(var e=[],t=0;t<25;t++){for(var n=[],a=0;a<40;a++)n.push(N(a,t));e.push(n)}return e},N=function(e,t){return{col:e,row:t,isStart:10===t&&10===e,isFinish:10===t&&30===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},M=function(e,t,n){var a=e.slice(),r=a[t][n],o=Object(E.a)(Object(E.a)({},r),{},{isWall:!r.isWall});return a[t][n]=o,a},D=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Coming soon!")}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Coming soon!")}}]),n}(a.Component),P=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Coming soon!")}}]),n}(a.Component),W=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Coming soon!")}}]),n}(a.Component),A=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:d}),r.a.createElement(h.a,{path:"/sorting",component:b}),r.a.createElement(h.a,{path:"/graphs",component:S}),r.a.createElement(h.a,{path:"/contact",component:D}),r.a.createElement(h.a,{path:"/admin",component:W}),r.a.createElement(h.a,{path:"/register",component:P}),r.a.createElement(h.a,{path:"/login",component:I}))},x=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(m.Layout,null,r.a.createElement(m.Header,{className:"header-color",title:r.a.createElement(f.b,{style:{textDecoration:"none",color:"white"},to:"/"},"Visual Demo"),scroll:!0},r.a.createElement(m.Navigation,null,r.a.createElement(f.b,{to:"/admin"},"Admin"),r.a.createElement(f.b,{to:"/register"},"Register"),r.a.createElement(f.b,{to:"/login"},"Login"),r.a.createElement(f.b,{to:"/contact"},"Contact"))),r.a.createElement(m.Drawer,{title:r.a.createElement(f.b,{style:{textDecoration:"none",color:"black"},to:"/"},"Visual Demo")},r.a.createElement(m.Navigation,null,r.a.createElement(f.b,{to:"/sorting"},"Sorting Algorithms"),r.a.createElement(f.b,{to:"/graphs"},"Graph Algorithms"))),r.a.createElement(m.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(A,null))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(107),n(108),n(109);i.a.render(r.a.createElement(f.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,n){e.exports=n(110)},52:function(e,t,n){},53:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.4f7262f6.chunk.js.map