(this["webpackJsonpstorrsoft-maze"]=this["webpackJsonpstorrsoft-maze"]||[]).push([[0],[,,function(e,t,a){e.exports={root:"Joystick_root__1enSk",arrow:"Joystick_arrow__3L0zY",rightArrow:"Joystick_rightArrow__3fIoB",leftArrow:"Joystick_leftArrow__2OnpI",upArrow:"Joystick_upArrow__JsZSs",downArrow:"Joystick_downArrow__13DkV",button:"Joystick_button__3bTHC",left:"Joystick_left__DHKhd",right:"Joystick_right__RtAhu",top:"Joystick_top__20gVn",bottom:"Joystick_bottom__2IutX"}},function(e,t,a){e.exports={row:"Header_row__3nAfu",score:"Header_score__d2DrR",stats:"Header_stats__1vdt3",responsiveScore:"Header_responsiveScore__pXxo6",muteButton:"Header_muteButton__213aW"}},,,,,,,,,function(e,t,a){e.exports={root:"App_root__33b96",container:"App_container__2WP0Q"}},function(e,t,a){e.exports={root:"Board_root__1mqwi",canvas:"Board_canvas__3kXBv"}},,,function(e,t,a){e.exports=a.p+"static/media/mute.7f5ee120.svg"},function(e,t,a){e.exports=a.p+"static/media/unmute.9339f319.svg"},function(e,t,a){e.exports={root:"Notification_root__2LX0b"}},function(e,t,a){e.exports=a.p+"static/media/lollipop.5bf858ee.svg"},function(e,t,a){e.exports=a.p+"static/media/ice_cream.c760f5dc.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.f342226d.svg"},function(e,t,a){e.exports=a.p+"static/media/maze.12c141ff.mp3"},function(e,t,a){e.exports=a.p+"static/media/level_end.3931d957.mp3"},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(15),o=a.n(i),c=(a(29),a(6)),s=a(5),l=a(1),u=a(12),m=a.n(u),d=a(10),h=a(3),f=a.n(h),p=a(16),v=a.n(p),w=a(17),b=a.n(w);var k=function(e){var t=e.hiScore,a=e.time,r=e.points,i=e.round,o=e.handleToggleMute,c=e.mute,s=n.a.createElement("span",null,"Hi-Score ",n.a.createElement("span",{className:f.a.score},t.toString().padStart(5," ")));return n.a.createElement("header",null,n.a.createElement("div",{className:f.a.row},n.a.createElement("p",null,"Welcome to the StorrSoft maze!"),n.a.createElement("p",null,s)),n.a.createElement("div",{className:f.a.stats},n.a.createElement("p",null,"1UP ",n.a.createElement("span",{className:f.a.score},r.toString().padStart(5," ")),"\xa0\xa0 ROUND ",n.a.createElement("span",{className:f.a.score},i.toString().padStart(3," ")),"\xa0\xa0 TIME ",n.a.createElement("span",{className:f.a.score},a||0===a?a.toString().padStart(2," "):null),"\xa0\xa0"),n.a.createElement("p",{className:f.a.responsiveScore},s),c?n.a.createElement("button",{className:f.a.muteButton,title:"Click here to unmute music",onClick:o},n.a.createElement("img",{src:b.a,alt:"unmute"})):n.a.createElement("button",{className:f.a.muteButton,title:"Click here to mute music",onClick:o},n.a.createElement("img",{src:v.a,alt:"unmute"}))))},g=a(18),y=a.n(g);var O=function(e){var t=e.show,a=e.gameOver,r=e.handleOnStartGame;return t&&n.a.createElement("div",{className:y.a.root},a?n.a.createElement("p",null,"GAME OVER"):null,n.a.createElement("span",{onClick:r},"PRESS ",n.a.createElement("kbd",null,"Enter")," OR HERE TO START"))},_=a(11),E=a(8),j=function(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var a=0;a<e.length;++a)if(e[a]!==t[a])return!1;return!0},C=a(19),z=a.n(C),S=a(20),x=a.n(S),R="Enter",A="ArrowLeft",G="ArrowRight",N="ArrowUp",T="ArrowDown",P=[{name:"Lollipop",image:z.a,points:2e3},{name:"IceCream",image:x.a,points:5e3}];function I(e,t){return Math.floor(Math.random()*(t-e)+e)}var J=function(){function e(t,a,r,n,i,o){Object(E.a)(this,e),this.rows=t,this.cols=a,this.cells=r,this.startCell=n,this.endCell=i;for(var c=new Set;c.size<o;){var l=this.getRandomCell();j(l,n)||j(l,i)||c.add(l.toString())}this.randomCells=Object(s.a)(c).map((function(e){return e.split(",").map((function(e){return parseInt(e,10)}))}))}return Object(_.a)(e,[{key:"getCell",value:function(e,t){return this.cells[e+t*this.cols]}},{key:"getRandomCell",value:function(){return[I(0,this.cols),I(0,this.rows)]}},{key:"validateStep",value:function(e,t){var a=Object(s.a)(e),r=this.getCell.apply(this,Object(s.a)(e));switch(t){case A:e[0]-1>=0&&!r[3]&&(a[0]=e[0]-1);break;case G:e[0]+1<this.cols&&!r[1]&&(a[0]=e[0]+1);break;case N:e[1]-1>=0&&!r[0]&&(a[1]=e[1]-1);break;case T:e[1]+1<this.rows&&!r[2]&&(a[1]=e[1]+1);break;default:throw new Error("Unknown key action")}return{isValid:!j(e,a),newPos:a}}},{key:"isGoalReached",value:function(e){return j(e,this.endCell)}},{key:"getPrizeCellIndex",value:function(e){return this.randomCells.findIndex((function(t){return j(t,e)}))}},{key:"isPrizeCell",value:function(e){return-1!==this.getPrizeCellIndex(e)}}]),e}(),M=function e(t,a){Object(E.a)(this,e),this.x=t,this.y=a,this.walls=[!0,!0,!0,!0],this.visited=!1},B=function(){function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;Object(E.a)(this,e),this.rows=t,this.cols=a,this.stack=[],this.pickRandomCellsAmount=r}return Object(_.a)(e,[{key:"createGrid",value:function(){for(var e=[],t=0;t<this.rows;t++)for(var a=0;a<this.cols;a++)e.push(new M(a,t));this.grid=e}},{key:"getCell",value:function(e,t){return t<0||e<0||t>=this.cols||e>=this.rows?null:this.grid[t+e*this.cols]}},{key:"checkNeighbors",value:function(){var e=this.current.x,t=this.current.y,a=[this.getCell(t-1,e),this.getCell(t,e+1),this.getCell(t+1,e),this.getCell(t,e-1)].filter((function(e){return!!e&&!e.visited}));return 0===a.length?null:a[Math.floor(Math.random()*a.length)]}},{key:"removeWallsBetweenCurrentAnd",value:function(e){var t=this.current.x-e.x,a=this.current.y-e.y;1===t?(this.current.walls[3]=!1,e.walls[1]=!1):-1===t&&(this.current.walls[1]=!1,e.walls[3]=!1),1===a?(this.current.walls[0]=!1,e.walls[2]=!1):-1===a&&(this.current.walls[2]=!1,e.walls[0]=!1)}},{key:"carve",value:function(){var e=this.checkNeighbors();e?(e.visited=!0,this.stack.push(this.current),this.removeWallsBetweenCurrentAnd(e),this.current=e,this.carve()):this.stack.length>0&&(this.current=this.stack.pop(),this.carve())}},{key:"generate",value:function(){return this.createGrid(),this.current=this.grid[0],this.current.visited=!0,this.carve(),this.grid[0].walls[3]=!1,this.getCell(this.rows-1,this.cols-1).walls[2]=!1,new J(this.rows,this.cols,this.grid.map((function(e){return e.walls})),[0,0],[this.cols-1,this.rows-1],this.pickRandomCellsAmount)}}]),e}(),H=a(13),L=a.n(H),D=a(21),W=a.n(D);var U=function(e){var t=e.maze,a=e.currentCell,i=e.prizes,o=e.forwardedRef,s=Object(r.useRef)(null),l=Object(r.useState)(void 0),u=Object(c.a)(l,2),m=u[0],h=u[1],f=Object(r.useState)(!0),p=Object(c.a)(f,2),v=p[0],w=p[1],b=Object(r.useCallback)((function(){var e=o.current,t=e.offsetWidth,a=e.offsetHeight;s.current.width=t,s.current.height=a}),[o]);return Object(r.useEffect)((function(){return h(s.current.getContext("2d")),b(),window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}}),[b]),Object(r.useEffect)((function(){var e=!1,r=function(e,t,a,r){m.strokeStyle="white",m.beginPath(),m.moveTo(e,t),m.lineTo(e+a,t+r),m.stroke()};return function(){if(t){m.fillStyle="black",m.fillRect(0,0,s.current.width,s.current.height);for(var n=Math.floor(s.current.width/t.cols),o=Math.floor(s.current.height/t.rows),c=Math.floor((s.current.width-t.cols*n)/2),l=0;l<t.rows;l++)for(var u=0;u<t.cols;u++){var d=t.cells[u+l*t.cols];0===l&&d[0]&&r(n*u+c,o*l,n,0),d[1]&&r(n*(u+1)+c,o*l,0,o),d[2]&&r(n*u+c,o*(l+1),n,0),0===u&&d[3]&&r(n*u+c,o*l,0,o)}var h=function(t,a,r){var i=.75*Math.min(n,o),s=new Image(i,i);s.onload=function(){e||m.drawImage(s,t*n+c+(n-i)/2,a*o+(o-i)/2,i,i)},s.src=r},f=function(e,t,a,r){var i=Math.min(n,o);m.fillStyle=r,m.font='20px "Joystix"',m.textBaseline="top",m.fillText(a,e*n+c+(n-i)/2,t*o+(o-i)/2,i)};h(a[0],a[1],W.a),v&&f(t.endCell[0],t.endCell[1],"Goal","red"),i.forEach((function(e){var t=e.cell,a=e.image,r=e.isTaken,n=e.points,i=e.takenTime;r&&new Date-i<=3e3?f(t[0],t[1],"+".concat(n),"yellow"):r||h(t[0],t[1],a)}))}}(),function(){e=!0}}),[m,a,t,v,i]),Object(d.a)((function(){w((function(e){return!e}))}),1e3),n.a.createElement("div",{className:L.a.root},n.a.createElement("canvas",{className:L.a.canvas,ref:s}))},V=function(){};function X(e,t){var a=Object(r.useRef)(V);a.current=t,Object(r.useEffect)((function(){var t=function(t){e.includes(t.key)&&(t.preventDefault(),a.current&&a.current(t))};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[e])}var K=a(22),q=a.n(K),Q=a(23),Y=a.n(Q),Z=a(4),$=a(2),F=a.n($);var ee=function(e){var t=e.handleOnArrowKeyPressed;return n.a.createElement("div",{className:F.a.root},n.a.createElement("div",{className:Object(Z.a)(F.a.button,F.a.left),onClick:function(){return t({key:A})}},n.a.createElement("i",{className:Object(Z.a)(F.a.arrow,F.a.leftArrow)})),n.a.createElement("div",{className:Object(Z.a)(F.a.button,F.a.right),onClick:function(){return t({key:G})}},n.a.createElement("i",{className:Object(Z.a)(F.a.arrow,F.a.rightArrow)})),n.a.createElement("div",{className:Object(Z.a)(F.a.button,F.a.top),onClick:function(){return t({key:N})}},n.a.createElement("i",{className:Object(Z.a)(F.a.arrow,F.a.upArrow)})),n.a.createElement("div",{className:Object(Z.a)(F.a.button,F.a.bottom),onClick:function(){return t({key:T})}},n.a.createElement("i",{className:Object(Z.a)(F.a.arrow,F.a.downArrow)})))};function te(e,t){switch(t.type){case"startGame":return Object(l.a)(Object(l.a)({},e),{},{maze:t.payload.maze,currentCell:t.payload.maze.startCell,time:60,visitedCells:new Set,isGoalReached:!1,prizes:[]});case"reachGoal":return Object(l.a)(Object(l.a)({},e),{},{isGoalReached:!0,points:e.points+e.round*e.time*100});case"winGame":return Object(l.a)(Object(l.a)({},e),{},{maze:t.payload.maze,currentCell:t.payload.maze.startCell,time:60,round:e.round+1,visitedCells:new Set,isGoalReached:!1,prizes:[]});case"decrementTime":return Object(l.a)(Object(l.a)({},e),{},{time:e.time-1});case"endGame":return Object(l.a)(Object(l.a)({},e),{},{hiScore:Math.max(e.hiScore,e.points),points:0});case"addPrize":var a=t.payload.index,r=Object(l.a)(Object(l.a)({},P[a]),{},{isTaken:!1,cell:e.maze.randomCells[a]});return Object(l.a)(Object(l.a)({},e),{},{prizes:[].concat(Object(s.a)(e.prizes),[r])});case"reachPrize":var n=t.payload.removeIndex;return Object(l.a)(Object(l.a)({},e),{},{points:e.points+(e.prizes[n].isTaken?0:e.prizes[n].points),prizes:e.prizes.map((function(e,t){return t===n?Object(l.a)(Object(l.a)({},e),{},{isTaken:!0,takenTime:new Date}):e}))});case"moveCharacter":var i=e.visitedCells.has(t.payload.cells.toString());return Object(l.a)(Object(l.a)({},e),{},{currentCell:t.payload.cells,points:e.points+(i?0:10),visitedCells:new Set([].concat(Object(s.a)(e.visitedCells),[t.payload.cells.toString()]))});default:throw new Error("Unknown action")}}var ae=new Audio(q.a);ae.loop=!0;var re=new Audio(Y.a);var ne=function(){var e=Object(r.useReducer)(te,{points:0,round:1,hiScore:0,time:void 0,maze:void 0,currentCell:void 0,visitedCells:new Set,isGoalReached:!1,prizes:[]}),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!1),s=Object(c.a)(o,2),l=s[0],u=s[1],h=Object(r.useRef)(null),f=!a.time,p=Object(r.useCallback)((function(){l||(ae.pause(),ae.currentTime=0),u((function(e){return!e}))}),[l]),v=Object(r.useCallback)((function(){a.time||i({type:"startGame",payload:{maze:new B(17,33,P.length).generate()}})}),[a.time]),w=Object(r.useCallback)((function(e){if(a.currentCell&&a.maze&&!f&&!a.isGoalReached){var t=a.maze.validateStep(a.currentCell,e.key),r=t.isValid,n=t.newPos;if(r){var o=a.prizes.findIndex((function(e){return j(e.cell,n)}));o>=0?i({type:"reachPrize",payload:{removeIndex:o}}):a.maze.isGoalReached(n)&&i({type:"reachGoal"}),i({type:"moveCharacter",payload:{cells:n}})}}}),[a.currentCell,a.maze,f,a.isGoalReached,a.prizes]);return X([R],v),X([A,G,N,T],w),Object(d.a)((function(){i({type:"decrementTime"})}),a.time&&!a.isGoalReached?1e3:null),Object(r.useEffect)((function(){0===a.time?(ae.pause(),ae.currentTime=0,i({type:"endGame"})):60-a.time===30?i({type:"addPrize",payload:{index:0}}):15===a.time&&i({type:"addPrize",payload:{index:1}})}),[a.time]),Object(r.useEffect)((function(){a.round>0&&a.time>0&&!a.isGoalReached&&!l&&ae.play()}),[a.round,a.time,a.isGoalReached,l]),Object(r.useEffect)((function(){var e=function(){re.currentTime=0,i({type:"winGame",payload:{maze:new B(17,33,P.length).generate()}})};return a.isGoalReached&&!l&&(ae.pause(),ae.currentTime=0,re.play(),re.addEventListener("ended",e)),function(){return re.removeEventListener("ended",e)}}),[a.isGoalReached,l]),n.a.createElement("div",{className:m.a.root},n.a.createElement(k,{mute:l,handleToggleMute:p,hiScore:a.hiScore,points:a.points,time:a.time,round:a.round}),n.a.createElement("div",{className:m.a.container,ref:h},n.a.createElement(U,{maze:a.maze,currentCell:a.currentCell,prizes:a.prizes,forwardedRef:h}),n.a.createElement(ee,{handleOnArrowKeyPressed:w})),n.a.createElement(O,{show:!a.time,gameOver:0===a.time,handleOnStartGame:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.178b359a.chunk.js.map