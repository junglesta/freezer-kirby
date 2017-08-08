
// RANDOM image for big screens only
var num = (Math.floor(Math.random()*31));
var array = ['ya01', 'ya02', 'ya03', 'ya04','ya05', 'ya06', 'ya07', 'ya08', 'ya09', 'ya10', 'ya11', 'ya12', 'ya13', 'ya14', 'ya15', 'ya16', 'ya17', 'ya18', 'ya19', 'ya20', 'ya21', 'ya22', 'ya23', 'ya24', 'ya25', 'ya26', 'ya27', 'ya28', 'ya29', 'ya30', 'ya31'];
var elem = document.getElementById('random-image');
elem.classList.add(array[num]);
var elem = document.getElementById('random-image-caption');
elem.classList.add(array[num]);



//prefixfree.min.js
!function(){function e(e,r){return[].slice.call((r||document).querySelectorAll(e))}if(window.addEventListener){var r=window.StyleFix={link:function(e){try{if("stylesheet"!==e.rel||e.hasAttribute("data-noprefix"))return}catch(t){return}var n,i=e.href||e.getAttribute("data-href"),a=i.replace(/[^\/]+$/,""),o=(/^[a-z]{3,10}:/.exec(a)||[""])[0],s=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(a)||[""])[0],l=/^([^?]*)\??/.exec(i)[1],u=e.parentNode,p=new XMLHttpRequest;p.onreadystatechange=function(){4===p.readyState&&n()},n=function(){var t=p.responseText;if(t&&e.parentNode&&(!p.status||p.status<400||p.status>600)){if(t=r.fix(t,!0,e),a){t=t.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,r,t){return/^([a-z]{3,10}:|#)/i.test(t)?e:/^\/\//.test(t)?'url("'+o+t+'")':/^\//.test(t)?'url("'+s+t+'")':/^\?/.test(t)?'url("'+l+t+'")':'url("'+a+t+'")'});var n=a.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");t=t.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+n,"gi"),"$1")}var i=document.createElement("style");i.textContent=t,i.media=e.media,i.disabled=e.disabled,i.setAttribute("data-href",e.getAttribute("href")),u.insertBefore(i,e),u.removeChild(e),i.media=e.media}};try{p.open("GET",i),p.send(null)}catch(t){"undefined"!=typeof XDomainRequest&&(p=new XDomainRequest,p.onerror=p.onprogress=function(){},p.onload=n,p.open("GET",i),p.send(null))}e.setAttribute("data-inprogress","")},styleElement:function(e){if(!e.hasAttribute("data-noprefix")){var t=e.disabled;e.textContent=r.fix(e.textContent,!0,e),e.disabled=t}},styleAttribute:function(e){var t=e.getAttribute("style");t=r.fix(t,!1,e),e.setAttribute("style",t)},process:function(){e("style").forEach(StyleFix.styleElement),e("[style]").forEach(StyleFix.styleAttribute)},register:function(e,t){(r.fixers=r.fixers||[]).splice(void 0===t?r.fixers.length:t,0,e)},fix:function(e,t,n){for(var i=0;i<r.fixers.length;i++)e=r.fixers[i](e,t,n)||e;return e},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,r){return r.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};!function(){setTimeout(function(){},10),document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}()}}(),function(e){function r(e,r,n,i,a){if(e=t[e],e.length){var o=RegExp(r+"("+e.join("|")+")"+n,"gi");a=a.replace(o,i)}return a}if(window.StyleFix&&window.getComputedStyle){var t=window.PrefixFree={prefixCSS:function(e,n){var i=t.prefix;if(t.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(e,r,t,n){return r+(t||"")+"linear-gradient("+(90-n)+"deg"})),e=r("functions","(\\s|:|,)","\\s*\\(","$1"+i+"$2(",e),e=r("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+i+"$2$3",e),e=r("properties","(^|\\{|\\s|;)","\\s*:","$1"+i+"$2:",e),t.properties.length){var a=RegExp("\\b("+t.properties.join("|")+")(?!:)","gi");e=r("valueProperties","\\b",":(.+?);",function(e){return e.replace(a,i+"$1")},e)}return n&&(e=r("selectors","","\\b",t.prefixSelector,e),e=r("atrules","@","\\b","@"+i+"$1",e)),e=e.replace(RegExp("-"+i,"g"),"-"),e=e.replace(/-\*-(?=[a-z]+)/gi,t.prefix)},property:function(e){return(t.properties.indexOf(e)?t.prefix:"")+e},value:function(e){return e=r("functions","(^|\\s|,)","\\s*\\(","$1"+t.prefix+"$2(",e),e=r("keywords","(^|\\s)","(\\s|$)","$1"+t.prefix+"$2$3",e)},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+t.prefix})},prefixProperty:function(e,r){var n=t.prefix+e;return r?StyleFix.camelCase(n):n}};!function(){var e={},r=[],n=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,a=function(t){if("-"===t.charAt(0)){r.push(t);var n=t.split("-"),i=n[1];for(e[i]=++e[i]||1;n.length>3;){n.pop();var a=n.join("-");o(a)&&-1===r.indexOf(a)&&r.push(a)}}},o=function(e){return StyleFix.camelCase(e)in i};if(n.length>0)for(var s=0;s<n.length;s++)a(n[s]);else for(var l in n)a(StyleFix.deCamelCase(l));var u={uses:0};for(var p in e){var f=e[p];u.uses<f&&(u={prefix:p,uses:f})}t.prefix="-"+u.prefix+"-",t.Prefix=StyleFix.camelCase(t.prefix),t.properties=[];for(var s=0;s<r.length;s++){var l=r[s];if(0===l.indexOf(t.prefix)){var c=l.slice(t.prefix.length);o(c)||t.properties.push(c)}}"Ms"!=t.Prefix||"transform"in i||"MsTransform"in i||!("msTransform"in i)||t.properties.push("transform","transform-origin"),t.properties.sort()}(),function(){function e(e,r){return i[r]="",i[r]=e,!!i[r]}var r={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};r["repeating-linear-gradient"]=r["repeating-radial-gradient"]=r["radial-gradient"]=r["linear-gradient"];var n={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};t.functions=[],t.keywords=[];var i=document.createElement("div").style;for(var a in r){var o=r[a],s=o.property,l=a+"("+o.params+")";!e(l,s)&&e(t.prefix+l,s)&&t.functions.push(a)}for(var u in n){var s=n[u];!e(u,s)&&e(t.prefix+u,s)&&t.keywords.push(u)}}(),function(){function r(e){return a.textContent=e+"{}",!!a.sheet.cssRules.length}var n={":read-only":null,":read-write":null,":any-link":null,"::selection":null},i={keyframes:"name",viewport:null,document:'regexp(".")'};t.selectors=[],t.atrules=[];var a=e.appendChild(document.createElement("style"));for(var o in n){var s=o+(n[o]?"("+n[o]+")":"");!r(s)&&r(t.prefixSelector(s))&&t.selectors.push(o)}for(var l in i){var s=l+" "+(i[l]||"");!r("@"+s)&&r("@"+t.prefix+s)&&t.atrules.push(l)}e.removeChild(a)}(),t.valueProperties=["transition","transition-property"],e.className+=" "+t.prefix,StyleFix.register(t.prefixCSS)}}(document.documentElement);

// mousetrap v1.4.6 craig.is/killing/mice 
(function(J,r,f){function s(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return h[a.which]?h[a.which]:B[a.which]?B[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,d;for(d in n)a[d]?b=!0:n[d]=0;b||(u=!1)}function C(a,b,d,c,e,v){var g,k,f=[],h=d.type;if(!l[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=
l[a][g],!(!c&&k.seq&&n[k.seq]!=k.level||h!=k.action||("keypress"!=h||d.metaKey||d.ctrlKey)&&b.sort().join(",")!==k.modifiers.sort().join(","))){var m=c&&k.seq==c&&k.level==v;(!c&&k.combo==e||m)&&l[a].splice(g,1);f.push(k)}return f}function K(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a,b,d,c){m.stopCallback(b,b.target||b.srcElement,d,c)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?
b.stopPropagation():b.cancelBubble=!0)}function y(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:m.handleKey(b,K(a),a))}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function L(a,b,d,c){function e(b){return function(){u=b;++n[a];clearTimeout(D);D=setTimeout(t,1E3)}}function v(b){x(d,b,a);"keyup"!==c&&(z=A(b));setTimeout(t,10)}for(var g=n[a]=0;g<b.length;++g){var f=g+1===b.length?v:e(c||E(b[g+1]).action);F(b[g],f,c,a,g)}}function E(a,b){var d,
c,e,f=[];d="+"===a?["+"]:a.split("+");for(e=0;e<d.length;++e)c=d[e],G[c]&&(c=G[c]),b&&"keypress"!=b&&H[c]&&(c=H[c],f.push("shift")),w(c)&&f.push(c);d=c;e=b;if(!e){if(!p){p={};for(var g in h)95<g&&112>g||h.hasOwnProperty(g)&&(p[h[g]]=g)}e=p[d]?"keydown":"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:c,modifiers:f,action:e}}function F(a,b,d,c,e){q[a+":"+d]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?L(a,f,b,d):(d=E(a,d),l[d.key]=l[d.key]||[],C(d.key,d.modifiers,{type:d.action},
c,a,e),l[d.key][c?"unshift":"push"]({callback:b,modifiers:d.modifiers,action:d.action,seq:c,level:e,combo:a}))}var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},B={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},H={"~":"`","!":"1",
"@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},G={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},D,z=!1,I=!1,u=!1;for(f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;s(r,"keypress",y);s(r,"keydown",y);s(r,"keyup",y);var m={bind:function(a,b,d){a=a instanceof Array?a:[a];for(var c=0;c<a.length;++c)F(a[c],b,d);return this},
unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},handleKey:function(a,b,d){var c=C(a,b,d),e;b={};var f=0,g=!1;for(e=0;e<c.length;++e)c[e].seq&&(f=Math.max(f,c[e].level));for(e=0;e<c.length;++e)c[e].seq?c[e].level==f&&(g=!0,
b[c[e].seq]=1,x(c[e].callback,d,c[e].combo,c[e].seq)):g||x(c[e].callback,d,c[e].combo);c="keypress"==d.type&&I;d.type!=u||w(a)||c||t(b);I=g&&"keydown"==d.type}};J.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})(window,document);

//kudos index.js minified
//
function r(t){/in/.test(document.readyState)?setTimeout("r("+t+")",9):t()}KudosPlease=function(){function t(t){e=this,this.elements=document.querySelectorAll(t.el),this.status=t.status,this.persistent=void 0!=t.persistent&&t.persistent&&void 0!=localStorage,this.duration=t.duration,this.timer={},this.currentStatus="";for(var s=0;s<this.elements.length;s++){var a=this.elements[s];a.setAttribute("data-id",s),e.request(a,"GET"),0==this.loadAmount(s)?(a.setAttribute("data-amount",0),this.timer[s]=-1,this.isTouch()?(this.on(a,"touchstart",this.enter),this.on(a,"touchend",this.out)):(this.on(a,"mouseover",this.enter),this.on(a,"mouseout",this.out))):this.finish(a)}}var e;return t.prototype.enter=function(t){var s=this,a=-1;e.hasClass(this,"finish")||(e.addClass(s,"active"),a=setTimeout(function(){e.removeClass(s,"active"),e.finish(s,!0)},e.duration),e.timer[s.getAttribute("data-id")]=a)},t.prototype.out=function(t){e.hasClass(this,"finish")||(e.removeClass(this,"active"),clearTimeout(e.timer[this.getAttribute("data-id")]))},t.prototype.finish=function(t,s){e.addClass(t,"finish"),e.changeStatus(t,"gamma"),s=s||!1,amount=e.loadAmount(parseInt(t.getAttribute("data-id"),10)),s&&(++amount,e.request(t,"POST"))},t.prototype.changeStatus=function(t,s){void 0!=e.status&&(e.removeClass(t,e.currentStatus),e.addClass(t,e.status[s]),e.currentStatus=e.status[s])},t.prototype.on=function(t,e,s){try{t.addEventListener(e,s,!1)}catch(a){t.attachEvent("on"+e,s)}},t.prototype.addClass=function(t,e){e=e.split(",");for(var s=0;s<e.length;s++)-1==t.className.indexOf(e[s])&&(t.className=t.className.trim()+" "+e[s])},t.prototype.removeClass=function(t,e){e=e.split(",");for(var s=0;s<e.length;s++)t.className=t.className.replace(e[s],"").trim()},t.prototype.hasClass=function(t,e){for(var s=t.className.split(" "),a=!1,n=0;n<s.length;n++)s[n]==e&&(a=!0);return a},t.prototype.isTouch=function(){return!!("ontouchstart"in window)||!!("onmsgesturechange"in window)},t.prototype.save=function(t,s){e.persistent&&localStorage.setItem("kudos:saved:"+t.getAttribute("data-url"),s)},t.prototype.loadAmount=function(t){var s=e.elements[t].getAttribute("data-amount")||0;return e.persistent&&null!=(amount=localStorage.getItem("kudos:saved:"+e.elements[t].getAttribute("data-url")))&&(s=amount),s},t.prototype.request=function(t,s){var a;try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(n){a=new XMLHttpRequest}a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var n=a.responseText;t.setAttribute("data-amount",n),"GET"==s&&(e.changeStatus(t,0==n?"alpha":"beta"),e.persistent&&null!=localStorage.getItem("kudos:saved:"+t.getAttribute("data-url"))&&e.changeStatus(t,"gamma")),"POST"==s&&e.save(t,n)}};var o="?url="+encodeURIComponent(t.getAttribute("data-url"));a.open(s,"http://api.kudosplease.com/"+o,!0),a.send()},"".trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),t}(),r(function(){new KudosPlease({el:".kudos",duration:1500,persistent:!1,status:{alpha:"",beta:"",gamma:""}})});



// mousetrap setup
Mousetrap.bind("up", function() { 
	console.log('up key pressed!'); 
	scroll(0,0); 
});

Mousetrap.bind("down", function() { 
	console.log('down key pressed!'); 
	window.scrollTo(100, 100000); 
});







//APPEND to copy action
function addLink() {
	var body_element = document.getElementsByTagName('body')[0];
	var selection;
	selection = window.getSelection();
	var pagelink = "<br /><br />&#9733; YO! this is an extract from Freezer Magazine: <a href='"+document.location.href+"'>"+document.location.href+"</a><br />&#9733; Freezer Magazine is licensed under a Creative Commons Attribution 4.0 International License.<br />&#9733; Permissions beyond the scope of this license may be available at http://freezer.junglestar.org.<br />&#9733; Freezer Magazine is a project by Rokma."; 
	var copytext = selection + pagelink;
	var newdiv = document.createElement('div');
	newdiv.style.position='absolute';
	newdiv.style.left='-99999px';
	body_element.appendChild(newdiv);
	newdiv.innerHTML = copytext;
	selection.selectAllChildren(newdiv);
	window.setTimeout(function() {
		body_element.removeChild(newdiv);
	},0);
}
document.oncopy = addLink;






//LAB

//pathname stuff
// var currentpath = ("/contact");
// if( document.location.pathname.match('currentpath')
//     {
//     	document.getElementsByTagName('body')[0].className+=' contact';
//     } 
// else {}
// document.getElementsByTagName('body')[0].className+=' contact';

// location.pathname.match("/projects")[1];
// document.getElementsByTagName('body')[1].className+=' projects';


//bind prev-cookie to 
// Mousetrap.bind("right", function() {
// 	console.log('right key pressed!');


  

// window.location.assign("http://www.w3schools.com") <- working

// var x = myFunction(4, 3);        // Function is called, return value will end up in x
// function myFunction(a, b) {
//     return a * b;                // Function returns the product of a and b
// }

// 	var upcoming = getCookie(navNext)
	
// 	function upcoming() {
// 		getCookie(navNext)
// 		window.location.assign("upcoming()")
// 	}
// });


// function myFunction() { // Declare a function
//     document.getElementById("demo").innerHTML = "Hello World!";
// }
 
// myFunction(); // Call the function


// Mousetrap.bind("left", function() { 
// 	console.log('left key pressed!');

// 	});




// setcookie("MyCookie", $value); // sets the cookie to the value, remember, do not
//                                // set it with HTTP only to true.
//test
// var data = <?php echo json_encode("42"); ?>;

// Mousetrap.bind("right", function() { 
// 	console.log('right key pressed!');
// 	// go to next page
// 	// window.location.href = "read next from next page snippet";   
// });



// Mousetrap.bind("left", function() { 
// 	console.log('left key pressed!');
// 	window.location.href = "<?php echo $prev->url() ?>";  
// });





// on click show submenu/.... just use the id to target

// window.onload=function(){
// document.getElementById('submenu').onclick = function() {

//     var className = ' ' + submenu.className + ' ';

//     if ( ~className.indexOf(' hidden ') ) {
//         this.className = className.replace(' hidden ', ' ');
//     } else {
//         this.className += ' hidden';
//     }              
// 	}
// } 

