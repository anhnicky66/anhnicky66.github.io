(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gafu"],{"11f1":function(e,t,n){},"14c3":function(e,t,n){var i=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"159b":function(e,t,n){var i=n("da84"),r=n("fdbc"),a=n("17c2"),o=n("9112");for(var c in r){var s=i[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(e,t,n){"use strict";var i=n("b727").forEach,r=n("a640"),a=n("ae40"),o=r("forEach"),c=a("forEach");e.exports=o&&c?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"234c":function(e,t,n){},4160:function(e,t,n){"use strict";var i=n("23e7"),r=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4a36":function(e,t,n){"use strict";var i=n("11f1"),r=n.n(i);r.a},5319:function(e,t,n){"use strict";var i=n("d784"),r=n("825a"),a=n("7b0b"),o=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),f=Math.max,h=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};i("replace",2,(function(e,t,n,i){var m=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=i.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(n,i){var r=s(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,i):t.call(String(r),n,i)},function(e,i){if(!m&&y||"string"===typeof i&&-1===i.indexOf(x)){var a=n(t,e,this,i);if(a.done)return a.value}var s=r(e),d=String(this),p="function"===typeof i;p||(i=String(i));var v=s.global;if(v){var b=s.unicode;s.lastIndex=0}var w=[];while(1){var _=l(s,d);if(null===_)break;if(w.push(_),!v)break;var R=String(_[0]);""===R&&(s.lastIndex=u(d,o(s.lastIndex),b))}for(var S="",k=0,P=0;P<w.length;P++){_=w[P];for(var C=String(_[0]),I=f(h(c(_.index),d.length),0),O=[],j=1;j<_.length;j++)O.push(g(_[j]));var U=_.groups;if(p){var $=[C].concat(O,I,d);void 0!==U&&$.push(U);var z=String(i.apply(void 0,$))}else z=E(C,d,I,O,U,i);I>=k&&(S+=d.slice(k,I)+z,k=I+C.length)}return S+d.slice(k)}];function E(e,n,i,r,o,c){var s=i+e.length,u=r.length,l=v;return void 0!==o&&(o=a(o),l=p),t.call(c,l,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var f=d(l/10);return 0===f?t:f<=u?void 0===r[f-1]?a.charAt(1):r[f-1]+a.charAt(1):t}c=r[l-1]}return void 0===c?"":c}))}}))},"8aa5":function(e,t,n){"use strict";var i=n("6547").charAt;e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},9200:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gafu-page__wrapper page__wrapper"},[n("div",{staticClass:"gafu-page__container"},[n("Gafu")],1)])},r=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gafu__wrapper"},[n("div",{staticClass:"gafu__container"},[n("canvas")])])}];n("4160"),n("d81d"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("159b");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}for(var l=n("5a89"),f=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;c(this,e),this.geometry=new l["a"](t,n,i)},h=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4500104;c(this,e),this.material=new l["h"]({color:t})},d="cube",p=function e(t){c(this,e),this.geometryObj=new f(1,1,1),this.materialObj=new h(t),this.mesh=new l["g"](this.geometryObj.geometry,this.materialObj.material),this.id="".concat(d,"-").concat(this.mesh.id)},v=(n("b64b"),function(){function e(){c(this,e)}return u(e,null,[{key:"setPosition",value:function(e,t){Object.keys(t).forEach((function(n){e[n]=t[n]}))}}]),e}()),g=function(){function e(t,n){c(this,e),this.canvasElement=t,this.defaultOptions={camera:{type:"perspective",fov:120,aspect:2,near:.1,far:50},light:{type:"directional",color:16777215,intensity:1,position:{x:-1,y:2,z:4}}},this.isPlaying=!1,this.nextFrameUpdaterFunctions=[],this.objects={},this.objectIds=[],this.renderer=new l["n"]({canvas:this.canvasElement}),n||(n=this.defaultOptions),this.camera=this.createCamera(n.camera),this.light=this.createLight(n.light),this.scene=new l["j"]}return u(e,[{key:"addObject",value:function(e,t){var n=new p(t);return v.setPosition(n.mesh.position,e),this.scene.add(n.mesh),this.objectIds.push(n.id),this.objects[n.id]=n.mesh,n}},{key:"addLight",value:function(){this.scene.add(this.light)}},{key:"render",value:function(e){if(this.resizeRendererToDisplaySize()){var t=this.renderer.domElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix()}this.nextFrameUpdater(e),this.renderer.render(this.scene,this.camera),this.isPlaying&&requestAnimationFrame(this.render.bind(this))}},{key:"resizeRendererToDisplaySize",value:function(){var e=this.renderer.domElement,t=window.devicePixelRatio,n=e.clientWidth*t|0,i=e.clientHeight*t|0,r=e.width!==n||e.height!==i;return r&&this.renderer.setSize(n,i,!1),r}},{key:"setNextFrameUpdater",value:function(e){this.nextFrameUpdaterFunctions="function"===typeof e?[e]:e}},{key:"nextFrameUpdater",value:function(e){this.nextFrameUpdaterFunctions.forEach((function(t){t(e)}))}},{key:"play",value:function(){this.isPlaying=!0,requestAnimationFrame(this.render.bind(this))}},{key:"stop",value:function(){this.isPlaying=!1}},{key:"createCamera",value:function(e){switch(e.type){case"perspective":default:return new l["i"](e.fov,e.aspect,e.near,e.far)}}},{key:"setCamera",value:function(e){if(e.position){var t={x:void 0!==e.position.x?e.position.x:this.camera.position.x,y:void 0!==e.position.y?e.position.y:this.camera.position.y,z:void 0!==e.position.z?e.position.z:this.camera.position.z};this.camera.position.set(t.x,t.y,t.z)}}},{key:"createLight",value:function(e){var t,n=e.color,i=e.intensity,r=e.type,a=e.position;switch(r){case"directional":default:t=new l["d"](n,i);break}return t.position.set(a.x,a.y,a.z),t}},{key:"disposeScene",value:function(){this.scene.dispose()}}]),e}(),m=[],y=30,x=0;x<900;x++){var E={position:{x:Math.random()*y*(1==Math.floor(2*Math.random())?1:-1),y:Math.random()*y*(1==Math.floor(2*Math.random())?1:-1),z:Math.random()*y*(1==Math.floor(2*Math.random())?1:-1)},color:"#000000".replace(/0/g,(function(){return(~~(16*Math.random())).toString(16)}))};m.push(E)}var b={name:"gafu",data:function(){return{gafu:{},gafuCubes:[]}},mounted:function(){var e=this;this.gafu=new g(this.$el.querySelector("canvas")),this.gafuCubes=m.map((function(t){return e.gafu.addObject(t.position,t.color)})),this.gafu.setCamera({position:{z:5}}),this.gafu.addLight();var t={direction:{x:1,y:1,z:1},time:null};this.gafu.setNextFrameUpdater((function(n){var i=1e-4*n;t.time||(t.time=n),e.gafuCubes.forEach((function(e,r){if(e.mesh){var a=.1*r+1,o=i*a,c=.01*i;e.mesh.rotation.x=o,e.mesh.rotation.y=o,n>t.time+3e3&&(t.direction.x*=-1,t.direction.y*=-1,t.direction.z*=-1,t.time=n),e.mesh.position.x+=c*t.direction.x,e.mesh.position.y+=c*t.direction.y,e.mesh.position.z+=c*t.direction.z}}))})),this.gafu.play()},beforeDestroy:function(){this.gafu.stop(),this.gafuCubes.forEach((function(e){e.mesh.geometry.dispose(),e.mesh=null})),this.gafu.disposeScene()}},w=b,_=(n("4a36"),n("2877")),R=Object(_["a"])(w,a,o,!1,null,null,null),S=R.exports,k={name:"gafu-page",components:{Gafu:S}},P=k,C=(n("f23b"),Object(_["a"])(P,i,r,!1,null,null,null));t["default"]=C.exports},9263:function(e,t,n){"use strict";var i=n("ad6d"),r=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(e){var t,n,r,c,f=this,h=u&&f.sticky,d=i.call(f),p=f.source,v=0,g=e;return h&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",d)),l&&(n=new RegExp("^"+p+"$(?!\\s)",d)),s&&(t=f.lastIndex),r=a.call(h?n:f,g),h?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:s&&r&&(f.lastIndex=f.global?r.index+r[0].length:t),l&&r&&r.length>1&&o.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),e.exports=c},"9f7f":function(e,t,n){"use strict";var i=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=i((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},b64b:function(e,t,n){var i=n("23e7"),r=n("7b0b"),a=n("df75"),o=n("d039"),c=o((function(){a(1)}));i({target:"Object",stat:!0,forced:c},{keys:function(e){return a(r(e))}})},d784:function(e,t,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),a=n("b622"),o=n("9263"),c=n("9112"),s=a("species"),u=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var p=a(e),v=!r((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=v&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!v||!g||"replace"===e&&(!u||!l||h)||"split"===e&&!d){var m=/./[p],y=n(p,""[e],(function(e,t,n,i,r){return t.exec===o?v&&!r?{done:!0,value:m.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=y[0],E=y[1];i(String.prototype,e,x),i(RegExp.prototype,p,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},d81d:function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").map,a=n("1dde"),o=n("ae40"),c=a("map"),s=o("map");i({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f23b:function(e,t,n){"use strict";var i=n("234c"),r=n.n(i);r.a}}]);
//# sourceMappingURL=gafu.720e7c5b.js.map