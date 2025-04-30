(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();async function Wh(){console.log("Trying to load navbar...");const r=document.getElementById("navbar");if(!r){console.error("No #navbar element found");return}try{const e="/bloc/",t=await fetch(`${e}navbar.html`);if(!t.ok)throw console.error(`Failed to fetch navbar: ${t.status} ${t.statusText}`),new Error("Failed to fetch navbar");const n=await t.text();r.innerHTML=n,console.log("Navbar loaded successfully");const i=document.getElementById("hamburger"),s=document.getElementById("navLinks");i&&s?i.addEventListener("click",()=>{i.classList.toggle("active"),s.classList.toggle("active")}):console.warn("Hamburger or navLinks not found in loaded navbar"),r.querySelectorAll("a").forEach(l=>{const u=l.getAttribute("href");u&&!u.startsWith("http")&&!u.startsWith(e)&&!u.startsWith("/")&&l.setAttribute("href",`${e}${u}`)})}catch(e){console.error("Navbar load failed:",e)}}async function Xh(){console.log("Trying to load footer...");const r=document.querySelector("footer");if(!r){console.error("No <footer> element found");return}try{const e="/bloc/",t=await fetch(e+"footer.html");if(!t.ok)throw console.error(`Failed to fetch footer: ${t.status} ${t.statusText}`),new Error("Failed to fetch footer");let n=await t.text();n=n.replace(/<img\s+src=["']([^"']+)["']/gi,function(s,o){if(o.startsWith("http://")||o.startsWith("https://")||o.startsWith(e))return s;const l=o.replace(/^\.\/|^\//,"");return`<img src="${e}${l}"`}),r.innerHTML=n,console.log("Footer loaded successfully"),r.querySelectorAll("a").forEach(s=>{const o=s.getAttribute("href");o&&!o.startsWith("http")&&!o.startsWith(e)&&!o.startsWith("/")&&s.setAttribute("href",`${e}${o}`)})}catch(e){console.error("Footer load failed:",e)}}function jh(){document.querySelectorAll(".team-member").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-name");alert(`You clicked on ${t}'s bio!`)})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="175",Nr={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qh=0,tc=1,Yh=2,Cu=1,Pu=2,xi=3,bi=0,An=1,Qn=2,Wi=0,Ur=1,nc=2,ic=3,rc=4,Kh=5,sr=100,$h=101,Zh=102,Jh=103,Qh=104,ef=200,tf=201,nf=202,rf=203,Lo=204,Io=205,sf=206,af=207,of=208,lf=209,cf=210,uf=211,hf=212,ff=213,df=214,No=0,Uo=1,Oo=2,Br=3,Fo=4,Bo=5,ko=6,Ho=7,Du=0,pf=1,mf=2,Xi=0,gf=1,_f=2,vf=3,xf=4,yf=5,Mf=6,Sf=7,sc="attached",Ef="detached",Lu=300,kr=301,Hr=302,zo=303,Vo=304,Ca=306,zr=1e3,Vi=1001,Ta=1002,xn=1003,Iu=1004,gs=1005,Cn=1006,pa=1007,Mi=1008,Ai=1009,Nu=1010,Uu=1011,Ms=1012,El=1013,cr=1014,Wn=1015,Rs=1016,Tl=1017,bl=1018,Ss=1020,Ou=35902,Fu=1021,Bu=1022,On=1023,ku=1024,Hu=1025,Es=1026,Ts=1027,Al=1028,wl=1029,zu=1030,Rl=1031,Cl=1033,ma=33776,ga=33777,_a=33778,va=33779,Go=35840,Wo=35841,Xo=35842,jo=35843,qo=36196,Yo=37492,Ko=37496,$o=37808,Zo=37809,Jo=37810,Qo=37811,el=37812,tl=37813,nl=37814,il=37815,rl=37816,sl=37817,al=37818,ol=37819,ll=37820,cl=37821,xa=36492,ul=36494,hl=36495,Vu=36283,fl=36284,dl=36285,pl=36286,bs=2300,As=2301,Ya=2302,ac=2400,oc=2401,lc=2402,Tf=2500,bf=0,Gu=1,ml=2,Af=3200,wf=3201,Wu=0,Rf=1,zi="",ln="srgb",Mn="srgb-linear",ba="linear",zt="srgb",_r=7680,cc=519,Cf=512,Pf=513,Df=514,Xu=515,Lf=516,If=517,Nf=518,Uf=519,gl=35044,uc="300 es",Si=2e3,Aa=2001;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const vs=Math.PI/180,Vr=180/Math.PI;function Xn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function Pl(r,e){return(r%e+e)%e}function Of(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ff(r,e,t){return r!==e?(t-r)/(e-r):0}function xs(r,e,t){return(1-t)*r+t*e}function Bf(r,e,t,n){return xs(r,e,1-Math.exp(-t*n))}function kf(r,e=1){return e-Math.abs(Pl(r,e*2)-e)}function Hf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Vf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gf(r,e){return r+Math.random()*(e-r)}function Wf(r){return r*(.5-Math.random())}function Xf(r){r!==void 0&&(hc=r);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jf(r){return r*vs}function qf(r){return r*Vr}function Yf(r){return(r&r-1)===0&&r!==0}function Kf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $f(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zf(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),u=o(t/2),h=s((e+n)/2),m=o((e+n)/2),_=s((e-n)/2),y=o((e-n)/2),S=s((n-e)/2),b=o((n-e)/2);switch(i){case"XYX":r.set(l*m,u*_,u*y,l*h);break;case"YZY":r.set(u*y,l*m,u*_,l*h);break;case"ZXZ":r.set(u*_,u*y,l*m,l*h);break;case"XZX":r.set(l*m,u*b,u*S,l*h);break;case"YXY":r.set(u*S,l*m,u*b,l*h);break;case"ZYZ":r.set(u*b,u*S,l*m,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ju={DEG2RAD:vs,RAD2DEG:Vr,generateUUID:Xn,clamp:gt,euclideanModulo:Pl,mapLinear:Of,inverseLerp:Ff,lerp:xs,damp:Bf,pingpong:kf,smoothstep:Hf,smootherstep:zf,randInt:Vf,randFloat:Gf,randFloatSpread:Wf,seededRandom:Xf,degToRad:jf,radToDeg:qf,isPowerOfTwo:Yf,ceilPowerOfTwo:Kf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Zf,normalize:kt,denormalize:Vn};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,i,s,o,l,u,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,h)}set(e,t,n,i,s,o,l,u,h){const m=this.elements;return m[0]=e,m[1]=i,m[2]=l,m[3]=t,m[4]=s,m[5]=u,m[6]=n,m[7]=o,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],u=n[6],h=n[1],m=n[4],_=n[7],y=n[2],S=n[5],b=n[8],w=i[0],M=i[3],x=i[6],F=i[1],O=i[4],D=i[7],W=i[2],k=i[5],f=i[8];return s[0]=o*w+l*F+u*W,s[3]=o*M+l*O+u*k,s[6]=o*x+l*D+u*f,s[1]=h*w+m*F+_*W,s[4]=h*M+m*O+_*k,s[7]=h*x+m*D+_*f,s[2]=y*w+S*F+b*W,s[5]=y*M+S*O+b*k,s[8]=y*x+S*D+b*f,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],m=e[8];return t*o*m-t*l*h-n*s*m+n*l*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],m=e[8],_=m*o-l*h,y=l*u-m*s,S=h*s-o*u,b=t*_+n*y+i*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(i*h-m*n)*w,e[2]=(l*n-i*o)*w,e[3]=y*w,e[4]=(m*t-i*u)*w,e[5]=(i*s-l*t)*w,e[6]=S*w,e[7]=(n*u-h*t)*w,e[8]=(o*t-n*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*l)+o+e,-i*h,i*u,-i*(-h*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new ht;function qu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jf(){const r=ws("canvas");return r.style.display="block",r}const fc={};function ya(r){r in fc||(fc[r]=!0,console.warn(r))}function Qf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ed(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function td(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dc=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){const r={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===zt&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===zt&&(i.r=Or(i.r),i.g=Or(i.g),i.b=Or(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?ba:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Mn]:{primaries:e,whitePoint:n,transfer:ba,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:zt,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),r}const Ct=nd();function Ei(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class id{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vr===void 0&&(vr=ws("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ei(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rd=0;class Dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push($a(i[o].image)):s.push($a(i[o]))}else s=$a(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function $a(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?id.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;class cn extends hr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Vi,i=Vi,s=Cn,o=Mi,l=On,u=Ai,h=cn.DEFAULT_ANISOTROPY,m=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Xn(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Lu;cn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],m=u[4],_=u[8],y=u[1],S=u[5],b=u[9],w=u[2],M=u[6],x=u[10];if(Math.abs(m-y)<.01&&Math.abs(_-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(m+y)<.1&&Math.abs(_+w)<.1&&Math.abs(b+M)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(h+1)/2,D=(S+1)/2,W=(x+1)/2,k=(m+y)/4,f=(_+w)/4,$=(b+M)/4;return O>D&&O>W?O<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(O),i=k/n,s=f/n):D>W?D<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(D),n=k/i,s=$/i):W<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(W),n=f/s,i=$/s),this.set(n,i,s,t),this}let F=Math.sqrt((M-b)*(M-b)+(_-w)*(_-w)+(y-m)*(y-m));return Math.abs(F)<.001&&(F=1),this.x=(M-b)/F,this.y=(_-w)/F,this.z=(y-m)/F,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ad extends hr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Dl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends ad{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yu extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class od extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let u=n[i+0],h=n[i+1],m=n[i+2],_=n[i+3];const y=s[o+0],S=s[o+1],b=s[o+2],w=s[o+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(l===1){e[t+0]=y,e[t+1]=S,e[t+2]=b,e[t+3]=w;return}if(_!==w||u!==y||h!==S||m!==b){let M=1-l;const x=u*y+h*S+m*b+_*w,F=x>=0?1:-1,O=1-x*x;if(O>Number.EPSILON){const W=Math.sqrt(O),k=Math.atan2(W,x*F);M=Math.sin(M*k)/W,l=Math.sin(l*k)/W}const D=l*F;if(u=u*M+y*D,h=h*M+S*D,m=m*M+b*D,_=_*M+w*D,M===1-l){const W=1/Math.sqrt(u*u+h*h+m*m+_*_);u*=W,h*=W,m*=W,_*=W}}e[t]=u,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],u=n[i+1],h=n[i+2],m=n[i+3],_=s[o],y=s[o+1],S=s[o+2],b=s[o+3];return e[t]=l*b+m*_+u*S-h*y,e[t+1]=u*b+m*y+h*_-l*S,e[t+2]=h*b+m*S+l*y-u*_,e[t+3]=m*b-l*_-u*y-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,h=l(n/2),m=l(i/2),_=l(s/2),y=u(n/2),S=u(i/2),b=u(s/2);switch(o){case"XYZ":this._x=y*m*_+h*S*b,this._y=h*S*_-y*m*b,this._z=h*m*b+y*S*_,this._w=h*m*_-y*S*b;break;case"YXZ":this._x=y*m*_+h*S*b,this._y=h*S*_-y*m*b,this._z=h*m*b-y*S*_,this._w=h*m*_+y*S*b;break;case"ZXY":this._x=y*m*_-h*S*b,this._y=h*S*_+y*m*b,this._z=h*m*b+y*S*_,this._w=h*m*_-y*S*b;break;case"ZYX":this._x=y*m*_-h*S*b,this._y=h*S*_+y*m*b,this._z=h*m*b-y*S*_,this._w=h*m*_+y*S*b;break;case"YZX":this._x=y*m*_+h*S*b,this._y=h*S*_+y*m*b,this._z=h*m*b-y*S*_,this._w=h*m*_-y*S*b;break;case"XZY":this._x=y*m*_-h*S*b,this._y=h*S*_-y*m*b,this._z=h*m*b+y*S*_,this._w=h*m*_+y*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],u=t[9],h=t[2],m=t[6],_=t[10],y=n+l+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-u)*S,this._y=(s-h)*S,this._z=(o-i)*S}else if(n>l&&n>_){const S=2*Math.sqrt(1+n-l-_);this._w=(m-u)/S,this._x=.25*S,this._y=(i+o)/S,this._z=(s+h)/S}else if(l>_){const S=2*Math.sqrt(1+l-n-_);this._w=(s-h)/S,this._x=(i+o)/S,this._y=.25*S,this._z=(u+m)/S}else{const S=2*Math.sqrt(1+_-n-l);this._w=(o-i)/S,this._x=(s+h)/S,this._y=(u+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,u=t._y,h=t._z,m=t._w;return this._x=n*m+o*l+i*h-s*u,this._y=i*m+o*u+s*l-n*h,this._z=s*m+o*h+n*u-i*l,this._w=o*m-n*l-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const S=1-t;return this._w=S*o+t*this._w,this._x=S*n+t*this._x,this._y=S*i+t*this._y,this._z=S*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),m=Math.atan2(h,l),_=Math.sin((1-t)*m)/h,y=Math.sin(t*m)/h;return this._w=o*_+this._w*y,this._x=n*_+this._x*y,this._y=i*_+this._y*y,this._z=s*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,u=e.w,h=2*(o*i-l*n),m=2*(l*t-s*i),_=2*(s*n-o*t);return this.x=t+u*h+o*_-l*m,this.y=n+u*m+l*h-s*_,this.z=i+u*_+s*m-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=i*u-s*l,this.y=s*o-n*u,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new q,mc=new ti;class ii{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),zs.subVectors(this.max,os),xr.subVectors(e.a,os),yr.subVectors(e.b,os),Mr.subVectors(e.c,os),Ii.subVectors(yr,xr),Ni.subVectors(Mr,yr),Zi.subVectors(xr,Mr);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-Zi.z,Zi.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,Zi.z,0,-Zi.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-Zi.y,Zi.x,0];return!Ja(t,xr,yr,Mr,zs)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,xr,yr,Mr,zs))?!1:(Vs.crossVectors(Ii,Ni),t=[Vs.x,Vs.y,Vs.z],Ja(t,xr,yr,Mr,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new q,new q,new q,new q,new q,new q,new q,new q],kn=new q,Hs=new ii,xr=new q,yr=new q,Mr=new q,Ii=new q,Ni=new q,Zi=new q,os=new q,zs=new q,Vs=new q,Ji=new q;function Ja(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ji.fromArray(r,s);const l=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),u=e.dot(Ji),h=t.dot(Ji),m=n.dot(Ji);if(Math.max(-Math.max(u,h,m),Math.min(u,h,m))>l)return!1}return!0}const ld=new ii,ls=new q,Qa=new q;class ri{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ld.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Qa)),this.expandByPoint(ls.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new q,eo=new q,Gs=new q,Ui=new q,to=new q,Ws=new q,no=new q;class Cs{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){eo.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(eo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),l=Ui.dot(this.direction),u=-Ui.dot(Gs),h=Ui.lengthSq(),m=Math.abs(1-o*o);let _,y,S,b;if(m>0)if(_=o*u-l,y=o*l-u,b=s*m,_>=0)if(y>=-b)if(y<=b){const w=1/m;_*=w,y*=w,S=_*(_+o*y+2*l)+y*(o*_+y+2*u)+h}else y=s,_=Math.max(0,-(o*y+l)),S=-_*_+y*(y+2*u)+h;else y=-s,_=Math.max(0,-(o*y+l)),S=-_*_+y*(y+2*u)+h;else y<=-b?(_=Math.max(0,-(-o*s+l)),y=_>0?-s:Math.min(Math.max(-s,-u),s),S=-_*_+y*(y+2*u)+h):y<=b?(_=0,y=Math.min(Math.max(-s,-u),s),S=y*(y+2*u)+h):(_=Math.max(0,-(o*s+l)),y=_>0?s:Math.min(Math.max(-s,-u),s),S=-_*_+y*(y+2*u)+h);else y=o>0?-s:s,_=Math.max(0,-(o*y+l)),S=-_*_+y*(y+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),i&&i.copy(eo).addScaledVector(Gs,y),S}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,u;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,y=this.origin;return h>=0?(n=(e.min.x-y.x)*h,i=(e.max.x-y.x)*h):(n=(e.max.x-y.x)*h,i=(e.min.x-y.x)*h),m>=0?(s=(e.min.y-y.y)*m,o=(e.max.y-y.y)*m):(s=(e.max.y-y.y)*m,o=(e.min.y-y.y)*m),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),_>=0?(l=(e.min.z-y.z)*_,u=(e.max.z-y.z)*_):(l=(e.max.z-y.z)*_,u=(e.min.z-y.z)*_),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,s){to.subVectors(t,e),Ws.subVectors(n,e),no.crossVectors(to,Ws);let o=this.direction.dot(no),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const u=l*this.direction.dot(Ws.crossVectors(Ui,Ws));if(u<0)return null;const h=l*this.direction.dot(to.cross(Ui));if(h<0||u+h>o)return null;const m=-l*Ui.dot(no);return m<0?null:this.at(m/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,i,s,o,l,u,h,m,_,y,S,b,w,M){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,h,m,_,y,S,b,w,M)}set(e,t,n,i,s,o,l,u,h,m,_,y,S,b,w,M){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=l,x[13]=u,x[2]=h,x[6]=m,x[10]=_,x[14]=y,x[3]=S,x[7]=b,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Sr.setFromMatrixColumn(e,0).length(),s=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i),m=Math.cos(s),_=Math.sin(s);if(e.order==="XYZ"){const y=o*m,S=o*_,b=l*m,w=l*_;t[0]=u*m,t[4]=-u*_,t[8]=h,t[1]=S+b*h,t[5]=y-w*h,t[9]=-l*u,t[2]=w-y*h,t[6]=b+S*h,t[10]=o*u}else if(e.order==="YXZ"){const y=u*m,S=u*_,b=h*m,w=h*_;t[0]=y+w*l,t[4]=b*l-S,t[8]=o*h,t[1]=o*_,t[5]=o*m,t[9]=-l,t[2]=S*l-b,t[6]=w+y*l,t[10]=o*u}else if(e.order==="ZXY"){const y=u*m,S=u*_,b=h*m,w=h*_;t[0]=y-w*l,t[4]=-o*_,t[8]=b+S*l,t[1]=S+b*l,t[5]=o*m,t[9]=w-y*l,t[2]=-o*h,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const y=o*m,S=o*_,b=l*m,w=l*_;t[0]=u*m,t[4]=b*h-S,t[8]=y*h+w,t[1]=u*_,t[5]=w*h+y,t[9]=S*h-b,t[2]=-h,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const y=o*u,S=o*h,b=l*u,w=l*h;t[0]=u*m,t[4]=w-y*_,t[8]=b*_+S,t[1]=_,t[5]=o*m,t[9]=-l*m,t[2]=-h*m,t[6]=S*_+b,t[10]=y-w*_}else if(e.order==="XZY"){const y=o*u,S=o*h,b=l*u,w=l*h;t[0]=u*m,t[4]=-_,t[8]=h*m,t[1]=y*_+w,t[5]=o*m,t[9]=S*_-b,t[2]=b*_-S,t[6]=l*m,t[10]=w*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cd,e,ud)}lookAt(e,t,n){const i=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Oi.crossVectors(n,wn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Oi.crossVectors(n,wn)),Oi.normalize(),Xs.crossVectors(wn,Oi),i[0]=Oi.x,i[4]=Xs.x,i[8]=wn.x,i[1]=Oi.y,i[5]=Xs.y,i[9]=wn.y,i[2]=Oi.z,i[6]=Xs.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],u=n[8],h=n[12],m=n[1],_=n[5],y=n[9],S=n[13],b=n[2],w=n[6],M=n[10],x=n[14],F=n[3],O=n[7],D=n[11],W=n[15],k=i[0],f=i[4],$=i[8],d=i[12],g=i[1],A=i[5],L=i[9],I=i[13],V=i[2],Z=i[6],te=i[10],le=i[14],ie=i[3],ge=i[7],Ee=i[11],Se=i[15];return s[0]=o*k+l*g+u*V+h*ie,s[4]=o*f+l*A+u*Z+h*ge,s[8]=o*$+l*L+u*te+h*Ee,s[12]=o*d+l*I+u*le+h*Se,s[1]=m*k+_*g+y*V+S*ie,s[5]=m*f+_*A+y*Z+S*ge,s[9]=m*$+_*L+y*te+S*Ee,s[13]=m*d+_*I+y*le+S*Se,s[2]=b*k+w*g+M*V+x*ie,s[6]=b*f+w*A+M*Z+x*ge,s[10]=b*$+w*L+M*te+x*Ee,s[14]=b*d+w*I+M*le+x*Se,s[3]=F*k+O*g+D*V+W*ie,s[7]=F*f+O*A+D*Z+W*ge,s[11]=F*$+O*L+D*te+W*Ee,s[15]=F*d+O*I+D*le+W*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],u=e[9],h=e[13],m=e[2],_=e[6],y=e[10],S=e[14],b=e[3],w=e[7],M=e[11],x=e[15];return b*(+s*u*_-i*h*_-s*l*y+n*h*y+i*l*S-n*u*S)+w*(+t*u*S-t*h*y+s*o*y-i*o*S+i*h*m-s*u*m)+M*(+t*h*_-t*l*S-s*o*_+n*o*S+s*l*m-n*h*m)+x*(-i*l*m-t*u*_+t*l*y+i*o*_-n*o*y+n*u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],m=e[8],_=e[9],y=e[10],S=e[11],b=e[12],w=e[13],M=e[14],x=e[15],F=_*M*h-w*y*h+w*u*S-l*M*S-_*u*x+l*y*x,O=b*y*h-m*M*h-b*u*S+o*M*S+m*u*x-o*y*x,D=m*w*h-b*_*h+b*l*S-o*w*S-m*l*x+o*_*x,W=b*_*u-m*w*u-b*l*y+o*w*y+m*l*M-o*_*M,k=t*F+n*O+i*D+s*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const f=1/k;return e[0]=F*f,e[1]=(w*y*s-_*M*s-w*i*S+n*M*S+_*i*x-n*y*x)*f,e[2]=(l*M*s-w*u*s+w*i*h-n*M*h-l*i*x+n*u*x)*f,e[3]=(_*u*s-l*y*s-_*i*h+n*y*h+l*i*S-n*u*S)*f,e[4]=O*f,e[5]=(m*M*s-b*y*s+b*i*S-t*M*S-m*i*x+t*y*x)*f,e[6]=(b*u*s-o*M*s-b*i*h+t*M*h+o*i*x-t*u*x)*f,e[7]=(o*y*s-m*u*s+m*i*h-t*y*h-o*i*S+t*u*S)*f,e[8]=D*f,e[9]=(b*_*s-m*w*s-b*n*S+t*w*S+m*n*x-t*_*x)*f,e[10]=(o*w*s-b*l*s+b*n*h-t*w*h-o*n*x+t*l*x)*f,e[11]=(m*l*s-o*_*s-m*n*h+t*_*h+o*n*S-t*l*S)*f,e[12]=W*f,e[13]=(m*w*i-b*_*i+b*n*y-t*w*y-m*n*M+t*_*M)*f,e[14]=(b*l*i-o*w*i-b*n*u+t*w*u+o*n*M-t*l*M)*f,e[15]=(o*_*i-m*l*i+m*n*u-t*_*u-o*n*y+t*l*y)*f,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,u=e.z,h=s*o,m=s*l;return this.set(h*o+n,h*l-i*u,h*u+i*l,0,h*l+i*u,m*l+n,m*u-i*o,0,h*u-i*l,m*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,h=s+s,m=o+o,_=l+l,y=s*h,S=s*m,b=s*_,w=o*m,M=o*_,x=l*_,F=u*h,O=u*m,D=u*_,W=n.x,k=n.y,f=n.z;return i[0]=(1-(w+x))*W,i[1]=(S+D)*W,i[2]=(b-O)*W,i[3]=0,i[4]=(S-D)*k,i[5]=(1-(y+x))*k,i[6]=(M+F)*k,i[7]=0,i[8]=(b+O)*f,i[9]=(M-F)*f,i[10]=(1-(y+w))*f,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Sr.set(i[0],i[1],i[2]).length();const o=Sr.set(i[4],i[5],i[6]).length(),l=Sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Hn.copy(this);const h=1/s,m=1/o,_=1/l;return Hn.elements[0]*=h,Hn.elements[1]*=h,Hn.elements[2]*=h,Hn.elements[4]*=m,Hn.elements[5]*=m,Hn.elements[6]*=m,Hn.elements[8]*=_,Hn.elements[9]*=_,Hn.elements[10]*=_,t.setFromRotationMatrix(Hn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o,l=Si){const u=this.elements,h=2*s/(t-e),m=2*s/(n-i),_=(t+e)/(t-e),y=(n+i)/(n-i);let S,b;if(l===Si)S=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(l===Aa)S=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=_,u[12]=0,u[1]=0,u[5]=m,u[9]=y,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=Si){const u=this.elements,h=1/(t-e),m=1/(n-i),_=1/(o-s),y=(t+e)*h,S=(n+i)*m;let b,w;if(l===Si)b=(o+s)*_,w=-2*_;else if(l===Aa)b=s*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-y,u[1]=0,u[5]=2*m,u[9]=0,u[13]=-S,u[2]=0,u[6]=0,u[10]=w,u[14]=-b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Sr=new q,Hn=new ft,cd=new q(0,0,0),ud=new q(1,1,1),Oi=new q,Xs=new q,wn=new q,gc=new ft,_c=new ti;class ni{constructor(e=0,t=0,n=0,i=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],u=i[1],h=i[5],m=i[9],_=i[2],y=i[6],S=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-_,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,s)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _c.setFromEuler(this),this.setFromQuaternion(_c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hd=0;const vc=new q,Er=new ti,mi=new ft,js=new q,cs=new q,fd=new q,dd=new ti,xc=new q(1,0,0),yc=new q(0,1,0),Mc=new q(0,0,1),Sc={type:"added"},pd={type:"removed"},Tr={type:"childadded",child:null},io={type:"childremoved",child:null};class qt extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new q,t=new ni,n=new ti,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new ht}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(Mc,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(Mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(cs,js,this.up):mi.lookAt(js,cs,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Er.setFromRotationMatrix(mi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sc),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pd),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sc),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,m=u.length;h<m;h++){const _=u[h];s(e.shapes,_)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),h=o(e.textures),m=o(e.images),_=o(e.shapes),y=o(e.skeletons),S=o(e.animations),b=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),y.length>0&&(n.skeletons=y),S.length>0&&(n.animations=S),b.length>0&&(n.nodes=b)}return n.object=i,n;function o(l){const u=[];for(const h in l){const m=l[h];delete m.metadata,u.push(m)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new q(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new q,gi=new q,ro=new q,_i=new q,br=new q,Ar=new q,Ec=new q,so=new q,ao=new q,oo=new q,lo=new Ut,co=new Ut,uo=new Ut;class Gn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){zn.subVectors(i,t),gi.subVectors(n,t),ro.subVectors(e,t);const o=zn.dot(zn),l=zn.dot(gi),u=zn.dot(ro),h=gi.dot(gi),m=gi.dot(ro),_=o*h-l*l;if(_===0)return s.set(0,0,0),null;const y=1/_,S=(h*u-l*m)*y,b=(o*m-l*u)*y;return s.set(1-S-b,b,S)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,i,s,o,l,u){return this.getBarycoord(e,t,n,i,_i)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,_i.x),u.addScaledVector(o,_i.y),u.addScaledVector(l,_i.z),u)}static getInterpolatedAttribute(e,t,n,i,s,o){return lo.setScalar(0),co.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(e,t),co.fromBufferAttribute(e,n),uo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(lo,s.x),o.addScaledVector(co,s.y),o.addScaledVector(uo,s.z),o}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),gi.subVectors(e,t),zn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),zn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;br.subVectors(i,n),Ar.subVectors(s,n),so.subVectors(e,n);const u=br.dot(so),h=Ar.dot(so);if(u<=0&&h<=0)return t.copy(n);ao.subVectors(e,i);const m=br.dot(ao),_=Ar.dot(ao);if(m>=0&&_<=m)return t.copy(i);const y=u*_-m*h;if(y<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(n).addScaledVector(br,o);oo.subVectors(e,s);const S=br.dot(oo),b=Ar.dot(oo);if(b>=0&&S<=b)return t.copy(s);const w=S*h-u*b;if(w<=0&&h>=0&&b<=0)return l=h/(h-b),t.copy(n).addScaledVector(Ar,l);const M=m*b-S*_;if(M<=0&&_-m>=0&&S-b>=0)return Ec.subVectors(s,i),l=(_-m)/(_-m+(S-b)),t.copy(i).addScaledVector(Ec,l);const x=1/(M+w+y);return o=w*x,l=y*x,t.copy(n).addScaledVector(br,o).addScaledVector(Ar,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},qs={h:0,s:0,l:0};function ho(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=Pl(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ho(o,s,e+1/3),this.g=ho(o,s,e),this.b=ho(o,s,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=$u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ct.fromWorkingColorSpace(dn.copy(this),e),Math.round(gt(dn.r*255,0,255))*65536+Math.round(gt(dn.g*255,0,255))*256+Math.round(gt(dn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let u,h;const m=(l+o)/2;if(l===o)u=0,h=0;else{const _=o-l;switch(h=m<=.5?_/(o+l):_/(2-o-l),o){case n:u=(i-s)/_+(i<s?6:0);break;case i:u=(s-n)/_+2;break;case s:u=(n-i)/_+4;break}u/=6}return e.h=u,e.s=h,e.l=m,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=ln){Ct.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(qs);const n=xs(Fi.h,qs.h,t),i=xs(Fi.s,qs.s,t),s=xs(Fi.l,qs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new ct;ct.NAMES=$u;let md=0;class ei extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Ur,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Io,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class or extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new q,Ys=new lt;let gd=0;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}}class Zu extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ju extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ti extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _d=0;const Nn=new ft,fo=new qt,wr=new q,Rn=new ii,us=new ii,on=new q;class si extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?Ju:Zu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ti(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];us.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(Rn.min,us.min),Rn.expandByPoint(on),on.addVectors(Rn.max,us.max),Rn.expandByPoint(on)):(Rn.expandByPoint(us.min),Rn.expandByPoint(us.max))}Rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let h=0,m=l.count;h<m;h++)on.fromBufferAttribute(l,h),u&&(wr.fromBufferAttribute(e,h),on.add(wr)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let $=0;$<n.count;$++)l[$]=new q,u[$]=new q;const h=new q,m=new q,_=new q,y=new lt,S=new lt,b=new lt,w=new q,M=new q;function x($,d,g){h.fromBufferAttribute(n,$),m.fromBufferAttribute(n,d),_.fromBufferAttribute(n,g),y.fromBufferAttribute(s,$),S.fromBufferAttribute(s,d),b.fromBufferAttribute(s,g),m.sub(h),_.sub(h),S.sub(y),b.sub(y);const A=1/(S.x*b.y-b.x*S.y);isFinite(A)&&(w.copy(m).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(A),M.copy(_).multiplyScalar(S.x).addScaledVector(m,-b.x).multiplyScalar(A),l[$].add(w),l[d].add(w),l[g].add(w),u[$].add(M),u[d].add(M),u[g].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let $=0,d=F.length;$<d;++$){const g=F[$],A=g.start,L=g.count;for(let I=A,V=A+L;I<V;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const O=new q,D=new q,W=new q,k=new q;function f($){W.fromBufferAttribute(i,$),k.copy(W);const d=l[$];O.copy(d),O.sub(W.multiplyScalar(W.dot(d))).normalize(),D.crossVectors(k,d);const A=D.dot(u[$])<0?-1:1;o.setXYZW($,O.x,O.y,O.z,A)}for(let $=0,d=F.length;$<d;++$){const g=F[$],A=g.start,L=g.count;for(let I=A,V=A+L;I<V;I+=3)f(e.getX(I+0)),f(e.getX(I+1)),f(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let y=0,S=n.count;y<S;y++)n.setXYZ(y,0,0,0);const i=new q,s=new q,o=new q,l=new q,u=new q,h=new q,m=new q,_=new q;if(e)for(let y=0,S=e.count;y<S;y+=3){const b=e.getX(y+0),w=e.getX(y+1),M=e.getX(y+2);i.fromBufferAttribute(t,b),s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,M),m.subVectors(o,s),_.subVectors(i,s),m.cross(_),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),l.add(m),u.add(m),h.add(m),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(w,u.x,u.y,u.z),n.setXYZ(M,h.x,h.y,h.z)}else for(let y=0,S=t.count;y<S;y+=3)i.fromBufferAttribute(t,y+0),s.fromBufferAttribute(t,y+1),o.fromBufferAttribute(t,y+2),m.subVectors(o,s),_.subVectors(i,s),m.cross(_),n.setXYZ(y+0,m.x,m.y,m.z),n.setXYZ(y+1,m.x,m.y,m.z),n.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(l,u){const h=l.array,m=l.itemSize,_=l.normalized,y=new h.constructor(u.length*m);let S=0,b=0;for(let w=0,M=u.length;w<M;w++){l.isInterleavedBufferAttribute?S=u[w]*l.data.stride+l.offset:S=u[w]*m;for(let x=0;x<m;x++)y[b++]=h[S++]}return new yn(y,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],h=e(u,n);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let m=0,_=h.length;m<_;m++){const y=h[m],S=e(y,n);u.push(S)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],m=[];for(let _=0,y=h.length;_<y;_++){const S=h[_];m.push(S.toJSON(e.data))}m.length>0&&(i[u]=m,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const m=i[h];this.setAttribute(h,m.clone(t))}const s=e.morphAttributes;for(const h in s){const m=[],_=s[h];for(let y=0,S=_.length;y<S;y++)m.push(_[y].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,m=o.length;h<m;h++){const _=o[h];this.addGroup(_.start,_.count,_.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new ft,Qi=new Cs,Ks=new ri,bc=new q,$s=new q,Zs=new q,Js=new q,po=new q,Qs=new q,Ac=new q,ea=new q;class Pn extends qt{constructor(e=new si,t=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){Qs.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const m=l[u],_=s[u];m!==0&&(po.fromBufferAttribute(_,e),o?Qs.addScaledVector(po,m):Qs.addScaledVector(po.sub(t),m))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(Ks.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ks,bc)===null||Qi.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(Tc.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,m=s.attributes.uv1,_=s.attributes.normal,y=s.groups,S=s.drawRange;if(l!==null)if(Array.isArray(o))for(let b=0,w=y.length;b<w;b++){const M=y[b],x=o[M.materialIndex],F=Math.max(M.start,S.start),O=Math.min(l.count,Math.min(M.start+M.count,S.start+S.count));for(let D=F,W=O;D<W;D+=3){const k=l.getX(D),f=l.getX(D+1),$=l.getX(D+2);i=ta(this,x,e,n,h,m,_,k,f,$),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const b=Math.max(0,S.start),w=Math.min(l.count,S.start+S.count);for(let M=b,x=w;M<x;M+=3){const F=l.getX(M),O=l.getX(M+1),D=l.getX(M+2);i=ta(this,o,e,n,h,m,_,F,O,D),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let b=0,w=y.length;b<w;b++){const M=y[b],x=o[M.materialIndex],F=Math.max(M.start,S.start),O=Math.min(u.count,Math.min(M.start+M.count,S.start+S.count));for(let D=F,W=O;D<W;D+=3){const k=D,f=D+1,$=D+2;i=ta(this,x,e,n,h,m,_,k,f,$),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const b=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let M=b,x=w;M<x;M+=3){const F=M,O=M+1,D=M+2;i=ta(this,o,e,n,h,m,_,F,O,D),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}}}function vd(r,e,t,n,i,s,o,l){let u;if(e.side===An?u=n.intersectTriangle(o,s,i,!0,l):u=n.intersectTriangle(i,s,o,e.side===bi,l),u===null)return null;ea.copy(l),ea.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(ea);return h<t.near||h>t.far?null:{distance:h,point:ea.clone(),object:r}}function ta(r,e,t,n,i,s,o,l,u,h){r.getVertexPosition(l,$s),r.getVertexPosition(u,Zs),r.getVertexPosition(h,Js);const m=vd(r,e,t,n,$s,Zs,Js,Ac);if(m){const _=new q;Gn.getBarycoord(Ac,$s,Zs,Js,_),i&&(m.uv=Gn.getInterpolatedAttribute(i,l,u,h,_,new lt)),s&&(m.uv1=Gn.getInterpolatedAttribute(s,l,u,h,_,new lt)),o&&(m.normal=Gn.getInterpolatedAttribute(o,l,u,h,_,new q),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const y={a:l,b:u,c:h,normal:new q,materialIndex:0};Gn.getNormal($s,Zs,Js,y.normal),m.face=y,m.barycoord=_}return m}class Ps extends si{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],m=[],_=[];let y=0,S=0;b("z","y","x",-1,-1,n,t,e,o,s,0),b("z","y","x",1,-1,n,t,-e,o,s,1),b("x","z","y",1,1,e,n,t,i,o,2),b("x","z","y",1,-1,e,n,-t,i,o,3),b("x","y","z",1,-1,e,t,n,i,s,4),b("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Ti(h,3)),this.setAttribute("normal",new Ti(m,3)),this.setAttribute("uv",new Ti(_,2));function b(w,M,x,F,O,D,W,k,f,$,d){const g=D/f,A=W/$,L=D/2,I=W/2,V=k/2,Z=f+1,te=$+1;let le=0,ie=0;const ge=new q;for(let Ee=0;Ee<te;Ee++){const Se=Ee*A-I;for(let ke=0;ke<Z;ke++){const Qe=ke*g-L;ge[w]=Qe*F,ge[M]=Se*O,ge[x]=V,h.push(ge.x,ge.y,ge.z),ge[w]=0,ge[M]=0,ge[x]=k>0?1:-1,m.push(ge.x,ge.y,ge.z),_.push(ke/f),_.push(1-Ee/$),le+=1}}for(let Ee=0;Ee<$;Ee++)for(let Se=0;Se<f;Se++){const ke=y+Se+Z*Ee,Qe=y+Se+Z*(Ee+1),he=y+(Se+1)+Z*(Ee+1),_e=y+(Se+1)+Z*Ee;u.push(ke,Qe,_e),u.push(Qe,he,_e),ie+=6}l.addGroup(S,ie,d),S+=ie,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(r){const e={};for(let t=0;t<r.length;t++){const n=Gr(r[t]);for(const i in n)e[i]=n[i]}return e}function xd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Qu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const yd={clone:Gr,merge:_n};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new q,wc=new lt,Rc=new lt;class vn extends eh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Rc),t.subVectors(Rc,wc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rr=-90,Cr=1;class Ed extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(Rr,Cr,e,t);i.layers=this.layers,this.add(i);const s=new vn(Rr,Cr,e,t);s.layers=this.layers,this.add(s);const o=new vn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);const l=new vn(Rr,Cr,e,t);l.layers=this.layers,this.add(l);const u=new vn(Rr,Cr,e,t);u.layers=this.layers,this.add(u);const h=new vn(Rr,Cr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,u]=t;for(const h of t)this.remove(h);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,h,m]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,i),e.render(t,m),e.setRenderTarget(_,y,S),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class th extends cn{constructor(e=[],t=kr,n,i,s,o,l,u,h,m){super(e,t,n,i,s,o,l,u,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Td extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new th(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ps(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Wi});s.uniforms.tEquirect.value=t;const o=new Pn(i,s),l=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Cn),new Ed(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class lr extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bd={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const w of e.hand.values()){const M=t.getJointPose(w,n),x=this._getHandJoint(h,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],y=m.position.distanceTo(_.position),S=.02,b=.005;h.inputState.pinching&&y>S+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=S-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ad extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new q;class Ll{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ll(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cc=new q,Pc=new Ut,Dc=new Ut,Rd=new q,Lc=new ft,na=new q,go=new ri,Ic=new ft,_o=new Cs;class Cd extends Pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sc,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingBox.expandByPoint(na)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingSphere.expandByPoint(na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(i),e.ray.intersectsSphere(go)!==!1&&(Ic.copy(i).invert(),_o.copy(e.ray).applyMatrix4(Ic),!(this.boundingBox!==null&&_o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_o)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Pc.fromBufferAttribute(i.attributes.skinIndex,e),Dc.fromBufferAttribute(i.attributes.skinWeight,e),Cc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Dc.getComponent(s);if(o!==0){const l=Pc.getComponent(s);Lc.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Rd.copy(Cc).applyMatrix4(Lc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nh extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ih extends cn{constructor(e=null,t=1,n=1,i,s,o,l,u,h=xn,m=xn,_,y){super(null,o,l,u,h,m,i,s,_,y),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=new ft,Pd=new ft;class Il{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const l=e[s]?e[s].matrixWorld:Pd;Nc.multiplyMatrices(l,t[s]),Nc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ih(t,e,e,On,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new nh),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class _l extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new ft,Uc=new ft,ia=[],Oc=new ii,Dd=new ft,hs=new Pn,fs=new ri;class Ld extends Pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),Oc.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(Oc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),fs.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Pr),Uc.multiplyMatrices(n,Pr),hs.matrixWorld=Uc,hs.raycast(e,ia);for(let o=0,l=ia.length;o<l;o++){const u=ia[o];u.instanceId=s,u.object=this,t.push(u)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ih(new Float32Array(i*this.count),i,this.count,Al,Wn));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const l=this.geometry.morphTargetsRelative?1:1-o,u=i*e;s[u]=l,s.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vo=new q,Id=new q,Nd=new ht;class Hi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vo.subVectors(n,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nd.getNormalMatrix(e),i=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new ri,ra=new q;class Nl{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,s=new Hi,o=new Hi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],u=i[3],h=i[4],m=i[5],_=i[6],y=i[7],S=i[8],b=i[9],w=i[10],M=i[11],x=i[12],F=i[13],O=i[14],D=i[15];if(n[0].setComponents(u-s,y-h,M-S,D-x).normalize(),n[1].setComponents(u+s,y+h,M+S,D+x).normalize(),n[2].setComponents(u+o,y+m,M+b,D+F).normalize(),n[3].setComponents(u-o,y-m,M-b,D-F).normalize(),n[4].setComponents(u-l,y-_,M-w,D-O).normalize(),t===Si)n[5].setComponents(u+l,y+_,M+w,D+O).normalize();else if(t===Aa)n[5].setComponents(l,_,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ra.x=i.normal.x>0?e.max.x:e.min.x,ra.y=i.normal.y>0?e.max.y:e.min.y,ra.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rh extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wa=new q,Ra=new q,Fc=new ft,ds=new Cs,sa=new ri,xo=new q,Bc=new q;class Ul extends qt{constructor(e=new si,t=new rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)wa.fromBufferAttribute(t,i-1),Ra.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wa.distanceTo(Ra);e.setAttribute("lineDistance",new Ti(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;Fc.copy(i).invert(),ds.copy(e.ray).applyMatrix4(Fc);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,m=n.index,y=n.attributes.position;if(m!==null){const S=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let w=S,M=b-1;w<M;w+=h){const x=m.getX(w),F=m.getX(w+1),O=aa(this,e,ds,u,x,F,w);O&&t.push(O)}if(this.isLineLoop){const w=m.getX(b-1),M=m.getX(S),x=aa(this,e,ds,u,w,M,b-1);x&&t.push(x)}}else{const S=Math.max(0,o.start),b=Math.min(y.count,o.start+o.count);for(let w=S,M=b-1;w<M;w+=h){const x=aa(this,e,ds,u,w,w+1,w);x&&t.push(x)}if(this.isLineLoop){const w=aa(this,e,ds,u,b-1,S,b-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function aa(r,e,t,n,i,s,o){const l=r.geometry.attributes.position;if(wa.fromBufferAttribute(l,i),Ra.fromBufferAttribute(l,s),t.distanceSqToSegment(wa,Ra,xo,Bc)>n)return;xo.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(xo);if(!(h<e.near||h>e.far))return{distance:h,point:Bc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const kc=new q,Hc=new q;class Ud extends Ul{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)kc.fromBufferAttribute(t,i),Hc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kc.distanceTo(Hc);e.setAttribute("lineDistance",new Ti(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Od extends Ul{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sh extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zc=new ft,vl=new Cs,oa=new ri,la=new q;class Fd extends qt{constructor(e=new si,t=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=s,e.ray.intersectsSphere(oa)===!1)return;zc.copy(i).invert(),vl.copy(e.ray).applyMatrix4(zc);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,_=n.attributes.position;if(h!==null){const y=Math.max(0,o.start),S=Math.min(h.count,o.start+o.count);for(let b=y,w=S;b<w;b++){const M=h.getX(b);la.fromBufferAttribute(_,M),Vc(la,M,u,i,e,t,this)}}else{const y=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let b=y,w=S;b<w;b++)la.fromBufferAttribute(_,b),Vc(la,b,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Vc(r,e,t,n,i,s,o){const l=vl.distanceSqToPoint(r);if(l<t){const u=new q;vl.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ah extends cn{constructor(e,t,n=cr,i,s,o,l=xn,u=xn,h,m=Es){if(m!==Es&&m!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,l,u,m,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pa extends si{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),u=Math.floor(i),h=l+1,m=u+1,_=e/l,y=t/u,S=[],b=[],w=[],M=[];for(let x=0;x<m;x++){const F=x*y-o;for(let O=0;O<h;O++){const D=O*_-s;b.push(D,-F,0),w.push(0,0,1),M.push(O/l),M.push(1-x/u)}}for(let x=0;x<u;x++)for(let F=0;F<l;F++){const O=F+h*x,D=F+h*(x+1),W=F+1+h*(x+1),k=F+1+h*x;S.push(O,D,k),S.push(D,W,k)}this.setIndex(S),this.setAttribute("position",new Ti(b,3)),this.setAttribute("normal",new Ti(w,3)),this.setAttribute("uv",new Ti(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ol extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ai extends Ol{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bd extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kd extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ca(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zd(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const l=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[l+u]}return i}function oh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ds{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vd extends Ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,l=i[s],u=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case oc:s=e,l=2*t-n;break;case lc:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case oc:o=e,u=2*n-t;break;case lc:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,m=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=s*m,this._offsetNext=o*m}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,m=this._offsetPrev,_=this._offsetNext,y=this._weightPrev,S=this._weightNext,b=(n-t)/(i-t),w=b*b,M=w*b,x=-y*M+2*y*w-y*b,F=(1+y)*M+(-1.5-2*y)*w+(-.5+y)*b+1,O=(-1-S)*M+(1.5+S)*w+.5*b,D=S*M-S*w;for(let W=0;W!==l;++W)s[W]=x*o[m+W]+F*o[h+W]+O*o[u+W]+D*o[_+W];return s}}class Gd extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,m=(n-t)/(i-t),_=1-m;for(let y=0;y!==l;++y)s[y]=o[h+y]*_+o[u+y]*m;return s}}class Wd extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,o),e=!1;break}o=u}if(i!==void 0&&Hd(i))for(let l=0,u=i.length;l!==u;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,s=e.length-1;let o=1;for(let l=1;l<s;++l){let u=!1;const h=e[l],m=e[l+1];if(h!==m&&(l!==1||h!==e[0]))if(i)u=!0;else{const _=l*n,y=_-n,S=_+n;for(let b=0;b!==n;++b){const w=t[_+b];if(w!==t[y+b]||w!==t[S+b]){u=!0;break}}}if(u){if(l!==o){e[o]=e[l];const _=l*n,y=o*n;for(let S=0;S!==n;++S)t[y+S]=t[_+S]}++o}}if(s>0){e[o]=e[s];for(let l=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[l+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=As;class qr extends jn{constructor(e,t,n){super(e,t,n)}}qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=bs;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class lh extends jn{constructor(e,t,n,i){super(e,t,n,i)}}lh.prototype.ValueTypeName="color";class Wr extends jn{constructor(e,t,n,i){super(e,t,n,i)}}Wr.prototype.ValueTypeName="number";class Xd extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let h=e*l;for(let m=h+l;h!==m;h+=4)ti.slerpFlat(s,0,o,h-l,o,h,u);return s}}class Xr extends jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xd(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends jn{constructor(e,t,n){super(e,t,n)}}Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=bs;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends jn{constructor(e,t,n,i){super(e,t,n,i)}}jr.prototype.ValueTypeName="vector";class jd{constructor(e="",t=-1,n=[],i=Tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(Yd(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(jn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let l=0;l<s;l++){let u=[],h=[];u.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const m=zd(u);u=Gc(u,1,m),h=Gc(h,1,m),!i&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new Wr(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],m=h.name.match(s);if(m&&m.length>1){const _=m[1];let y=i[_];y||(i[_]=y=[]),y.push(h)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(_,y,S,b,w){if(S.length!==0){const M=[],x=[];oh(S,M,x,b),M.length!==0&&w.push(new _(y,M,x))}},i=[],s=e.name||"default",o=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let _=0;_<h.length;_++){const y=h[_].keys;if(!(!y||y.length===0))if(y[0].morphTargets){const S={};let b;for(b=0;b<y.length;b++)if(y[b].morphTargets)for(let w=0;w<y[b].morphTargets.length;w++)S[y[b].morphTargets[w]]=-1;for(const w in S){const M=[],x=[];for(let F=0;F!==y[b].morphTargets.length;++F){const O=y[b];M.push(O.time),x.push(O.morphTarget===w?1:0)}i.push(new Wr(".morphTargetInfluence["+w+"]",M,x))}u=S.length*o}else{const S=".bones["+t[_].name+"]";n(jr,S+".position",y,"pos",i),n(Xr,S+".quaternion",y,"rot",i),n(jr,S+".scale",y,"scl",i)}}return i.length===0?null:new this(s,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qd(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return lh;case"quaternion":return Xr;case"bool":case"boolean":return qr;case"string":return Yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Yd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qd(r.type);if(r.times===void 0){const t=[],n=[];oh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Gi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kd{constructor(e,t,n){const i=this;let s=!1,o=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){l++,s===!1&&i.onStart!==void 0&&i.onStart(m,o,l),s=!0},this.itemEnd=function(m){o++,i.onProgress!==void 0&&i.onProgress(m,o,l),o===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(m){i.onError!==void 0&&i.onError(m)},this.resolveURL=function(m){return u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,_){return h.push(m,_),this},this.removeHandler=function(m){const _=h.indexOf(m);return _!==-1&&h.splice(_,2),this},this.getHandler=function(m){for(let _=0,y=h.length;_<y;_+=2){const S=h[_],b=h[_+1];if(S.global&&(S.lastIndex=0),S.test(m))return b}return null}}}const $d=new Kd;class Kr{constructor(e){this.manager=e!==void 0?e:$d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class Zd extends Error{constructor(e,t){super(e),this.response=t}}class ch extends Kr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Gi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:i});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=vi[e],_=h.body.getReader(),y=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),S=y?parseInt(y):0,b=S!==0;let w=0;const M=new ReadableStream({start(x){F();function F(){_.read().then(({done:O,value:D})=>{if(O)x.close();else{w+=D.byteLength;const W=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:S});for(let k=0,f=m.length;k<f;k++){const $=m[k];$.onProgress&&$.onProgress(W)}x.enqueue(D),F()}},O=>{x.error(O)})}}});return new Response(M)}else throw new Zd(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,l));case"json":return h.json();default:if(l==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(l),y=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(y);return h.arrayBuffer().then(b=>S.decode(b))}}}).then(h=>{Gi.add(e,h);const m=vi[e];delete vi[e];for(let _=0,y=m.length;_<y;_++){const S=m[_];S.onLoad&&S.onLoad(h)}}).catch(h=>{const m=vi[e];if(m===void 0)throw this.manager.itemError(e),h;delete vi[e];for(let _=0,y=m.length;_<y;_++){const S=m[_];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jd extends Kr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=ws("img");function u(){m(),Gi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(_){m(),i&&i(_),s.manager.itemError(e),s.manager.itemEnd(e)}function m(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Qd extends Kr{constructor(e){super(e)}load(e,t,n,i){const s=new cn,o=new Jd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Da extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yo=new ft,Wc=new q,Xc=new q;class Fl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ep extends Fl{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tp extends Da{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ep}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jc=new ft,ps=new q,Mo=new q;class np extends Fl{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(ps),Mo.copy(n.position),Mo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mo),n.updateMatrixWorld(),i.makeTranslation(-ps.x,-ps.y,-ps.z),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}}class ip extends Da{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bl extends eh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=m*this.view.offsetY,u=l-m*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rp extends Fl{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ma extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sp extends Da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ys{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ap extends Kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return Gi.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Gi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Gi.add(e,u),s.manager.itemStart(e)}}class op extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const kl="\\[\\]\\.:\\/",lp=new RegExp("["+kl+"]","g"),Hl="[^"+kl+"]",cp="[^"+kl.replace("\\.","")+"]",up=/((?:WC+[\/:])*)/.source.replace("WC",Hl),hp=/(WCOD+)?/.source.replace("WCOD",cp),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),pp=new RegExp("^"+up+hp+fp+dp+"$"),mp=["material","materials","bones","map"];class gp{constructor(e,t,n){const i=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ht{constructor(e,t,n){this.path=t,this.parsedPath=n||Ht.parseTrackName(t),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,t,n):new Ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(e){const t=pp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);mp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const l=s[o];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=gp;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _p extends hr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yc(r,e,t,n){const i=vp(n);switch(t){case Fu:return r*e;case ku:return r*e;case Hu:return r*e*2;case Al:return r*e/i.components*i.byteLength;case wl:return r*e/i.components*i.byteLength;case zu:return r*e*2/i.components*i.byteLength;case Rl:return r*e*2/i.components*i.byteLength;case Bu:return r*e*3/i.components*i.byteLength;case On:return r*e*4/i.components*i.byteLength;case Cl:return r*e*4/i.components*i.byteLength;case ma:case ga:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wo:case jo:return Math.max(r,16)*Math.max(e,8)/4;case Go:case Xo:return Math.max(r,8)*Math.max(e,8)/2;case qo:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xa:case ul:case hl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Vu:case fl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dl:case pl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vp(r){switch(r){case Ai:case Nu:return{byteLength:1,components:1};case Ms:case Uu:case Rs:return{byteLength:2,components:1};case Tl:case bl:return{byteLength:2,components:4};case cr:case El:case Wn:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function xp(r){const e=new WeakMap;function t(l,u){const h=l.array,m=l.usage,_=h.byteLength,y=r.createBuffer();r.bindBuffer(u,y),r.bufferData(u,h,m),l.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:_}}function n(l,u,h){const m=u.array,_=u.updateRanges;if(r.bindBuffer(h,l),_.length===0)r.bufferSubData(h,0,m);else{_.sort((S,b)=>S.start-b.start);let y=0;for(let S=1;S<_.length;S++){const b=_[y],w=_[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++y,_[y]=w)}_.length=y+1;for(let S=0,b=_.length;S<b;S++){const w=_[S];r.bufferSubData(h,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(r.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const m=e.get(l);(!m||m.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:i,remove:s,update:o}}var yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:yp,alphahash_pars_fragment:Mp,alphamap_fragment:Sp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:bp,aomap_fragment:Ap,aomap_pars_fragment:wp,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Pp,beginnormal_vertex:Dp,bsdfs:Lp,iridescence_fragment:Ip,bumpmap_pars_fragment:Np,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Bp,color_fragment:kp,color_pars_fragment:Hp,color_pars_vertex:zp,color_vertex:Vp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:jp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:Kp,colorspace_fragment:$p,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:em,envmap_pars_vertex:tm,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:rm,fog_fragment:sm,fog_pars_fragment:am,gradientmap_pars_fragment:om,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:um,lights_pars_begin:hm,lights_toon_fragment:dm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:_m,lights_physical_pars_fragment:vm,lights_fragment_begin:xm,lights_fragment_maps:ym,lights_fragment_end:Mm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:bm,map_fragment:Am,map_pars_fragment:wm,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Lm,morphcolor_vertex:Im,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Om,normal_fragment_begin:Fm,normal_fragment_maps:Bm,normal_pars_fragment:km,normal_pars_vertex:Hm,normal_vertex:zm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:jm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:Km,project_vertex:$m,dithering_fragment:Zm,dithering_pars_fragment:Jm,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:rg,skinbase_vertex:sg,skinning_pars_vertex:ag,skinning_vertex:og,skinnormal_vertex:lg,specularmap_fragment:cg,specularmap_pars_fragment:ug,tonemapping_fragment:hg,tonemapping_pars_fragment:fg,transmission_fragment:dg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:_g,worldpos_vertex:vg,background_vert:xg,background_frag:yg,backgroundCube_vert:Mg,backgroundCube_frag:Sg,cube_vert:Eg,cube_frag:Tg,depth_vert:bg,depth_frag:Ag,distanceRGBA_vert:wg,distanceRGBA_frag:Rg,equirect_vert:Cg,equirect_frag:Pg,linedashed_vert:Dg,linedashed_frag:Lg,meshbasic_vert:Ig,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Og,meshmatcap_vert:Fg,meshmatcap_frag:Bg,meshnormal_vert:kg,meshnormal_frag:Hg,meshphong_vert:zg,meshphong_frag:Vg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:jg,points_vert:qg,points_frag:Yg,shadow_vert:Kg,shadow_frag:$g,sprite_vert:Zg,sprite_frag:Jg},we={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Jn={basic:{uniforms:_n([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:_n([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ct(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:_n([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:_n([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:_n([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ct(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:_n([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:_n([we.points,we.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:_n([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:_n([we.common,we.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:_n([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:_n([we.sprite,we.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:_n([we.common,we.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:_n([we.lights,we.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Jn.physical={uniforms:_n([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const ua={r:0,b:0,g:0},tr=new ni,Qg=new ft;function e_(r,e,t,n,i,s,o){const l=new ct(0);let u=s===!0?0:1,h,m,_=null,y=0,S=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?t:e).get(D)),D}function w(O){let D=!1;const W=b(O);W===null?x(l,u):W&&W.isColor&&(x(W,1),D=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(O,D){const W=b(D);W&&(W.isCubeTexture||W.mapping===Ca)?(m===void 0&&(m=new Pn(new Ps(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Gr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,f,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(m)),tr.copy(D.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.material.uniforms.envMap.value=W,m.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(tr)),m.material.toneMapped=Ct.getTransfer(W.colorSpace)!==zt,(_!==W||y!==W.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,_=W,y=W.version,S=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):W&&W.isTexture&&(h===void 0&&(h=new Pn(new Pa(2,2),new ji({name:"BackgroundMaterial",uniforms:Gr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=W,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(W.colorSpace)!==zt,W.matrixAutoUpdate===!0&&W.updateMatrix(),h.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||y!==W.version||S!==r.toneMapping)&&(h.material.needsUpdate=!0,_=W,y=W.version,S=r.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null))}function x(O,D){O.getRGB(ua,Qu(r)),n.buffers.color.setClear(ua.r,ua.g,ua.b,D,o)}function F(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(O,D=1){l.set(O),u=D,x(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(O){u=O,x(l,u)},render:w,addToRenderList:M,dispose:F}}function t_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=y(null);let s=i,o=!1;function l(g,A,L,I,V){let Z=!1;const te=_(I,L,A);s!==te&&(s=te,h(s.object)),Z=S(g,I,L,V),Z&&b(g,I,L,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,D(g,A,L,I),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function u(){return r.createVertexArray()}function h(g){return r.bindVertexArray(g)}function m(g){return r.deleteVertexArray(g)}function _(g,A,L){const I=L.wireframe===!0;let V=n[g.id];V===void 0&&(V={},n[g.id]=V);let Z=V[A.id];Z===void 0&&(Z={},V[A.id]=Z);let te=Z[I];return te===void 0&&(te=y(u()),Z[I]=te),te}function y(g){const A=[],L=[],I=[];for(let V=0;V<t;V++)A[V]=0,L[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:I,object:g,attributes:{},index:null}}function S(g,A,L,I){const V=s.attributes,Z=A.attributes;let te=0;const le=L.getAttributes();for(const ie in le)if(le[ie].location>=0){const Ee=V[ie];let Se=Z[ie];if(Se===void 0&&(ie==="instanceMatrix"&&g.instanceMatrix&&(Se=g.instanceMatrix),ie==="instanceColor"&&g.instanceColor&&(Se=g.instanceColor)),Ee===void 0||Ee.attribute!==Se||Se&&Ee.data!==Se.data)return!0;te++}return s.attributesNum!==te||s.index!==I}function b(g,A,L,I){const V={},Z=A.attributes;let te=0;const le=L.getAttributes();for(const ie in le)if(le[ie].location>=0){let Ee=Z[ie];Ee===void 0&&(ie==="instanceMatrix"&&g.instanceMatrix&&(Ee=g.instanceMatrix),ie==="instanceColor"&&g.instanceColor&&(Ee=g.instanceColor));const Se={};Se.attribute=Ee,Ee&&Ee.data&&(Se.data=Ee.data),V[ie]=Se,te++}s.attributes=V,s.attributesNum=te,s.index=I}function w(){const g=s.newAttributes;for(let A=0,L=g.length;A<L;A++)g[A]=0}function M(g){x(g,0)}function x(g,A){const L=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;L[g]=1,I[g]===0&&(r.enableVertexAttribArray(g),I[g]=1),V[g]!==A&&(r.vertexAttribDivisor(g,A),V[g]=A)}function F(){const g=s.newAttributes,A=s.enabledAttributes;for(let L=0,I=A.length;L<I;L++)A[L]!==g[L]&&(r.disableVertexAttribArray(L),A[L]=0)}function O(g,A,L,I,V,Z,te){te===!0?r.vertexAttribIPointer(g,A,L,V,Z):r.vertexAttribPointer(g,A,L,I,V,Z)}function D(g,A,L,I){w();const V=I.attributes,Z=L.getAttributes(),te=A.defaultAttributeValues;for(const le in Z){const ie=Z[le];if(ie.location>=0){let ge=V[le];if(ge===void 0&&(le==="instanceMatrix"&&g.instanceMatrix&&(ge=g.instanceMatrix),le==="instanceColor"&&g.instanceColor&&(ge=g.instanceColor)),ge!==void 0){const Ee=ge.normalized,Se=ge.itemSize,ke=e.get(ge);if(ke===void 0)continue;const Qe=ke.buffer,he=ke.type,_e=ke.bytesPerElement,be=he===r.INT||he===r.UNSIGNED_INT||ge.gpuType===El;if(ge.isInterleavedBufferAttribute){const Te=ge.data,qe=Te.stride,ut=ge.offset;if(Te.isInstancedInterleavedBuffer){for(let He=0;He<ie.locationSize;He++)x(ie.location+He,Te.meshPerAttribute);g.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let He=0;He<ie.locationSize;He++)M(ie.location+He);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let He=0;He<ie.locationSize;He++)O(ie.location+He,Se/ie.locationSize,he,Ee,qe*_e,(ut+Se/ie.locationSize*He)*_e,be)}else{if(ge.isInstancedBufferAttribute){for(let Te=0;Te<ie.locationSize;Te++)x(ie.location+Te,ge.meshPerAttribute);g.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Te=0;Te<ie.locationSize;Te++)M(ie.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Te=0;Te<ie.locationSize;Te++)O(ie.location+Te,Se/ie.locationSize,he,Ee,Se*_e,Se/ie.locationSize*Te*_e,be)}}else if(te!==void 0){const Ee=te[le];if(Ee!==void 0)switch(Ee.length){case 2:r.vertexAttrib2fv(ie.location,Ee);break;case 3:r.vertexAttrib3fv(ie.location,Ee);break;case 4:r.vertexAttrib4fv(ie.location,Ee);break;default:r.vertexAttrib1fv(ie.location,Ee)}}}}F()}function W(){$();for(const g in n){const A=n[g];for(const L in A){const I=A[L];for(const V in I)m(I[V].object),delete I[V];delete A[L]}delete n[g]}}function k(g){if(n[g.id]===void 0)return;const A=n[g.id];for(const L in A){const I=A[L];for(const V in I)m(I[V].object),delete I[V];delete A[L]}delete n[g.id]}function f(g){for(const A in n){const L=n[A];if(L[g.id]===void 0)continue;const I=L[g.id];for(const V in I)m(I[V].object),delete I[V];delete L[g.id]}}function $(){d(),o=!0,s!==i&&(s=i,h(s.object))}function d(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:$,resetDefaultState:d,dispose:W,releaseStatesOfGeometry:k,releaseStatesOfProgram:f,initAttributes:w,enableAttribute:M,disableUnusedAttributes:F}}function n_(r,e,t){let n;function i(h){n=h}function s(h,m){r.drawArrays(n,h,m),t.update(m,n,1)}function o(h,m,_){_!==0&&(r.drawArraysInstanced(n,h,m,_),t.update(m,n,_))}function l(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,m,0,_);let S=0;for(let b=0;b<_;b++)S+=m[b];t.update(S,n,1)}function u(h,m,_,y){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<h.length;b++)o(h[b],m[b],y[b]);else{S.multiDrawArraysInstancedWEBGL(n,h,0,m,0,y,0,_);let b=0;for(let w=0;w<_;w++)b+=m[w]*y[w];t.update(b,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function i_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const f=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(f){return!(f!==On&&n.convert(f)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(f){const $=f===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==Ai&&n.convert(f)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&f!==Wn&&!$)}function u(f){if(f==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=u(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),W=b>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:W,maxSamples:k}}function r_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Hi,l=new ht,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||n!==0||i;return i=y,n=_.length,S},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(_,y){t=m(_,y,0)},this.setState=function(_,y,S){const b=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,x=r.get(_);if(!i||b===null||b.length===0||s&&!M)s?m(null):h();else{const F=s?0:n,O=F*4;let D=x.clippingState||null;u.value=D,D=m(b,y,O,S);for(let W=0;W!==O;++W)D[W]=t[W];x.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,y,S,b){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=u.value,b!==!0||M===null){const x=S+w*4,F=y.matrixWorldInverse;l.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let O=0,D=S;O!==w;++O,D+=4)o.copy(_[O]).applyMatrix4(F,l),o.normal.toArray(M,D),M[D+3]=o.constant}u.value=M,u.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function s_(r){let e=new WeakMap;function t(o,l){return l===zo?o.mapping=kr:l===Vo&&(o.mapping=Hr),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===zo||l===Vo)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new Td(u.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ir=4,Kc=[.125,.215,.35,.446,.526,.582],ar=20,So=new Bl,$c=new ct;let Eo=null,To=0,bo=0,Ao=!1;const rr=(1+Math.sqrt(5))/2,Dr=1/rr,Zc=[new q(-rr,Dr,0),new q(rr,Dr,0),new q(-Dr,0,rr),new q(Dr,0,rr),new q(0,rr,-Dr),new q(0,rr,Dr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],a_=new q;class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:l=a_}=s;Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,i,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,To,bo),this._renderer.xr.enabled=Ao,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Rs,format:On,colorSpace:Mn,depthBuffer:!1},i=Qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o_(s)),this._blurMaterial=l_(s,e,t)}return i}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,i,s){const u=new vn(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor($c),_.toneMapping=Xi,_.autoClear=!1;const b=new or({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),w=new Pn(new Ps,b);let M=!1;const x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,M=!0):(b.color.copy($c),M=!0);for(let F=0;F<6;F++){const O=F%3;O===0?(u.up.set(0,h[F],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+m[F],s.y,s.z)):O===1?(u.up.set(0,0,h[F]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+m[F],s.z)):(u.up.set(0,h[F],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+m[F]));const D=this._cubeSize;ha(i,O*D,F>2?D:0,D,D),_.setRenderTarget(i),M&&_.render(w,u),_.render(e,u)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=S,_.autoClear=y,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===kr||e.mapping===Hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;ha(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Zc[(i-s-1)%Zc.length];this._blur(e,s-1,s,o,l)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Pn(this._lodPlanes[i],h),y=h.uniforms,S=this._sizeLods[n]-1,b=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*ar-1),w=s/b,M=isFinite(s)?1+Math.floor(m*w):ar;M>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ar}`);const x=[];let F=0;for(let f=0;f<ar;++f){const $=f/w,d=Math.exp(-$*$/2);x.push(d),f===0?F+=d:f<M&&(F+=2*d)}for(let f=0;f<x.length;f++)x[f]=x[f]/F;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=o==="latitudinal",l&&(y.poleAxis.value=l);const{_lodMax:O}=this;y.dTheta.value=b,y.mipInt.value=O-n;const D=this._sizeLods[i],W=3*D*(i>O-Ir?i-O+Ir:0),k=4*(this._cubeSize-D);ha(t,W,k,3*D,2*D),u.setRenderTarget(t),u.render(_,So)}}function o_(r){const e=[],t=[],n=[];let i=r;const s=r-Ir+1+Kc.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let u=1/l;o>r-Ir?u=Kc[o-r+Ir-1]:o===0&&(u=0),n.push(u);const h=1/(l-2),m=-h,_=1+h,y=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,b=6,w=3,M=2,x=1,F=new Float32Array(w*b*S),O=new Float32Array(M*b*S),D=new Float32Array(x*b*S);for(let k=0;k<S;k++){const f=k%3*2/3-1,$=k>2?0:-1,d=[f,$,0,f+2/3,$,0,f+2/3,$+1,0,f,$,0,f+2/3,$+1,0,f,$+1,0];F.set(d,w*b*k),O.set(y,M*b*k);const g=[k,k,k,k,k,k];D.set(g,x*b*k)}const W=new si;W.setAttribute("position",new yn(F,w)),W.setAttribute("uv",new yn(O,M)),W.setAttribute("faceIndex",new yn(D,x)),e.push(W),i>Ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qc(r,e,t){const n=new ur(r,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function l_(r,e,t){const n=new Float32Array(ar),i=new q(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function eu(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function tu(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c_(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,h=u===zo||u===Vo,m=u===kr||u===Hr;if(h||m){let _=e.get(l);const y=_!==void 0?_.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==y)return t===null&&(t=new Jc(r)),_=h?t.fromEquirectangular(l,_):t.fromCubemap(l,_),_.texture.pmremVersion=l.pmremVersion,e.set(l,_),_.texture;if(_!==void 0)return _.texture;{const S=l.image;return h&&S&&S.height>0||m&&S&&i(S)?(t===null&&(t=new Jc(r)),_=h?t.fromEquirectangular(l):t.fromCubemap(l),_.texture.pmremVersion=l.pmremVersion,e.set(l,_),l.addEventListener("dispose",s),_.texture):null}}}return l}function i(l){let u=0;const h=6;for(let m=0;m<h;m++)l[m]!==void 0&&u++;return u===h}function s(l){const u=l.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ya("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function h_(r,e,t,n){const i={},s=new WeakMap;function o(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",o),delete i[y.id];const S=s.get(y);S&&(e.remove(S),s.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function l(_,y){return i[y.id]===!0||(y.addEventListener("dispose",o),i[y.id]=!0,t.memory.geometries++),y}function u(_){const y=_.attributes;for(const S in y)e.update(y[S],r.ARRAY_BUFFER)}function h(_){const y=[],S=_.index,b=_.attributes.position;let w=0;if(S!==null){const F=S.array;w=S.version;for(let O=0,D=F.length;O<D;O+=3){const W=F[O+0],k=F[O+1],f=F[O+2];y.push(W,k,k,f,f,W)}}else if(b!==void 0){const F=b.array;w=b.version;for(let O=0,D=F.length/3-1;O<D;O+=3){const W=O+0,k=O+1,f=O+2;y.push(W,k,k,f,f,W)}}else return;const M=new(qu(y)?Ju:Zu)(y,1);M.version=w;const x=s.get(_);x&&e.remove(x),s.set(_,M)}function m(_){const y=s.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&h(_)}else h(_);return s.get(_)}return{get:l,update:u,getWireframeAttribute:m}}function f_(r,e,t){let n;function i(y){n=y}let s,o;function l(y){s=y.type,o=y.bytesPerElement}function u(y,S){r.drawElements(n,S,s,y*o),t.update(S,n,1)}function h(y,S,b){b!==0&&(r.drawElementsInstanced(n,S,s,y*o,b),t.update(S,n,b))}function m(y,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,s,y,0,b);let M=0;for(let x=0;x<b;x++)M+=S[x];t.update(M,n,1)}function _(y,S,b,w){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)h(y[x]/o,S[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(n,S,0,s,y,0,w,0,b);let x=0;for(let F=0;F<b;F++)x+=S[F]*w[F];t.update(x,n,1)}}this.setMode=i,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function d_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function p_(r,e,t){const n=new WeakMap,i=new Ut;function s(o,l,u){const h=o.morphTargetInfluences,m=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,_=m!==void 0?m.length:0;let y=n.get(l);if(y===void 0||y.count!==_){let g=function(){$.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var S=g;y!==void 0&&y.texture.dispose();const b=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],F=l.morphAttributes.normal||[],O=l.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let W=l.attributes.position.count*D,k=1;W>e.maxTextureSize&&(k=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const f=new Float32Array(W*k*4*_),$=new Yu(f,W,k,_);$.type=Wn,$.needsUpdate=!0;const d=D*4;for(let A=0;A<_;A++){const L=x[A],I=F[A],V=O[A],Z=W*k*4*A;for(let te=0;te<L.count;te++){const le=te*d;b===!0&&(i.fromBufferAttribute(L,te),f[Z+le+0]=i.x,f[Z+le+1]=i.y,f[Z+le+2]=i.z,f[Z+le+3]=0),w===!0&&(i.fromBufferAttribute(I,te),f[Z+le+4]=i.x,f[Z+le+5]=i.y,f[Z+le+6]=i.z,f[Z+le+7]=0),M===!0&&(i.fromBufferAttribute(V,te),f[Z+le+8]=i.x,f[Z+le+9]=i.y,f[Z+le+10]=i.z,f[Z+le+11]=V.itemSize===4?i.w:1)}}y={count:_,texture:$,size:new lt(W,k)},n.set(l,y),l.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const w=l.morphTargetsRelative?1:1-b;u.getUniforms().setValue(r,"morphTargetBaseInfluence",w),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:s}}function m_(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,m=u.geometry,_=e.get(u,m);if(i.get(_)!==h&&(e.update(_),i.set(_,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const y=u.skeleton;i.get(y)!==h&&(y.update(),i.set(y,h))}return _}function o(){i=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const hh=new cn,nu=new ah(1,1),fh=new Yu,dh=new od,ph=new th,iu=[],ru=[],su=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function $r(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=iu[i];if(s===void 0&&(s=new Float32Array(i),iu[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function La(r,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function g_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function __(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function v_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function x_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function y_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;ou.set(n),r.uniformMatrix2fv(this.addr,!1,ou),rn(t,n)}}function M_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;au.set(n),r.uniformMatrix3fv(this.addr,!1,au),rn(t,n)}}function S_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;su.set(n),r.uniformMatrix4fv(this.addr,!1,su),rn(t,n)}}function E_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function T_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function A_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function w_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function R_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function C_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function P_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function D_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(nu.compareFunction=Xu,s=nu):s=hh,t.setTexture2D(e||s,i)}function L_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dh,i)}function I_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ph,i)}function N_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fh,i)}function U_(r){switch(r){case 5126:return g_;case 35664:return __;case 35665:return v_;case 35666:return x_;case 35674:return y_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return b_;case 35669:case 35673:return A_;case 5125:return w_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return N_}}function O_(r,e){r.uniform1fv(this.addr,e)}function F_(r,e){const t=$r(e,this.size,2);r.uniform2fv(this.addr,t)}function B_(r,e){const t=$r(e,this.size,3);r.uniform3fv(this.addr,t)}function k_(r,e){const t=$r(e,this.size,4);r.uniform4fv(this.addr,t)}function H_(r,e){const t=$r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function z_(r,e){const t=$r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function V_(r,e){const t=$r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function G_(r,e){r.uniform1iv(this.addr,e)}function W_(r,e){r.uniform2iv(this.addr,e)}function X_(r,e){r.uniform3iv(this.addr,e)}function j_(r,e){r.uniform4iv(this.addr,e)}function q_(r,e){r.uniform1uiv(this.addr,e)}function Y_(r,e){r.uniform2uiv(this.addr,e)}function K_(r,e){r.uniform3uiv(this.addr,e)}function $_(r,e){r.uniform4uiv(this.addr,e)}function Z_(r,e,t){const n=this.cache,i=e.length,s=La(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hh,s[o])}function J_(r,e,t){const n=this.cache,i=e.length,s=La(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dh,s[o])}function Q_(r,e,t){const n=this.cache,i=e.length,s=La(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ph,s[o])}function ev(r,e,t){const n=this.cache,i=e.length,s=La(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fh,s[o])}function tv(r){switch(r){case 5126:return O_;case 35664:return F_;case 35665:return B_;case 35666:return k_;case 35674:return H_;case 35675:return z_;case 35676:return V_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return j_;case 5125:return q_;case 36294:return Y_;case 36295:return K_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ev}}class nv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}}class iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tv(t.type)}}class rv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function lu(r,e){r.seq.push(e),r.map[e.id]=e}function sv(r,e,t){const n=r.name,i=n.length;for(wo.lastIndex=0;;){const s=wo.exec(n),o=wo.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===i){lu(t,h===void 0?new nv(l,r,e):new iv(l,r,e));break}else{let _=t.map[l];_===void 0&&(_=new rv(l),lu(t,_)),t=_}}}class Sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);sv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function cu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const av=37297;let ov=0;function lv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const uu=new ht;function cv(r){Ct._getMatrix(uu,Ct.workingColorSpace,r);const e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(r)){case ba:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+lv(r.getShaderSource(e),o)}else return i}function uv(r,e){const t=cv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hv(r,e){let t;switch(e){case gf:t="Linear";break;case _f:t="Reinhard";break;case vf:t="Cineon";break;case xf:t="ACESFilmic";break;case Mf:t="AgX";break;case Sf:t="Neutral";break;case yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fa=new q;function fv(){Ct.getLuminanceCoefficients(fa);const r=fa.x.toFixed(4),e=fa.y.toFixed(4),t=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function pv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function _s(r){return r!==""}function fu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(r){return r.replace(gv,vv)}const _v=new Map;function vv(r,e){let t=pt[e];if(t===void 0){const n=_v.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}const xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(r){return r.replace(xv,yv)}function yv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case kr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ev(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Du:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function bv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Av(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=Mv(t),h=Sv(t),m=Ev(t),_=Tv(t),y=bv(t),S=dv(t),b=pv(s),w=i.createProgram();let M,x,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(_s).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(_s).join(`
`),x.length>0&&(x+=`
`)):(M=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),x=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,uv("linearToOutputTexel",t.outputColorSpace),fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),o=xl(o),o=fu(o,t),o=du(o,t),l=xl(l),l=fu(l,t),l=du(l,t),o=pu(o),l=pu(l),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=F+M+o,D=F+x+l,W=cu(i,i.VERTEX_SHADER,O),k=cu(i,i.FRAGMENT_SHADER,D);i.attachShader(w,W),i.attachShader(w,k),t.index0AttributeName!==void 0?i.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function f(A){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(w).trim(),I=i.getShaderInfoLog(W).trim(),V=i.getShaderInfoLog(k).trim();let Z=!0,te=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,w,W,k);else{const le=hu(i,W,"vertex"),ie=hu(i,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+le+`
`+ie)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||V==="")&&(te=!1);te&&(A.diagnostics={runnable:Z,programLog:L,vertexShader:{log:I,prefix:M},fragmentShader:{log:V,prefix:x}})}i.deleteShader(W),i.deleteShader(k),$=new Sa(i,w),d=mv(i,w)}let $;this.getUniforms=function(){return $===void 0&&f(this),$};let d;this.getAttributes=function(){return d===void 0&&f(this),d};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=i.getProgramParameter(w,av)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ov++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=W,this.fragmentShader=k,this}let wv=0;class Rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cv(e),t.set(e,n)),n}}class Cv{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}}function Pv(r,e,t,n,i,s,o){const l=new Ku,u=new Rv,h=new Set,m=[],_=i.logarithmicDepthBuffer,y=i.vertexTextures;let S=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(d){return h.add(d),d===0?"uv":`uv${d}`}function M(d,g,A,L,I){const V=L.fog,Z=I.geometry,te=d.isMeshStandardMaterial?L.environment:null,le=(d.isMeshStandardMaterial?t:e).get(d.envMap||te),ie=le&&le.mapping===Ca?le.image.height:null,ge=b[d.type];d.precision!==null&&(S=i.getMaxPrecision(d.precision),S!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",S,"instead."));const Ee=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Se=Ee!==void 0?Ee.length:0;let ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let Qe,he,_e,be;if(ge){const Nt=Jn[ge];Qe=Nt.vertexShader,he=Nt.fragmentShader}else Qe=d.vertexShader,he=d.fragmentShader,u.update(d),_e=u.getVertexShaderID(d),be=u.getFragmentShaderID(d);const Te=r.getRenderTarget(),qe=r.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,He=I.isBatchedMesh===!0,Ot=!!d.map,At=!!d.matcap,Ye=!!le,z=!!d.aoMap,It=!!d.lightMap,rt=!!d.bumpMap,nt=!!d.normalMap,Ne=!!d.displacementMap,Pt=!!d.emissiveMap,Ve=!!d.metalnessMap,U=!!d.roughnessMap,C=d.anisotropy>0,J=d.clearcoat>0,pe=d.dispersion>0,Q=d.iridescence>0,ue=d.sheen>0,We=d.transmission>0,Ce=C&&!!d.anisotropyMap,ze=J&&!!d.clearcoatMap,St=J&&!!d.clearcoatNormalMap,ye=J&&!!d.clearcoatRoughnessMap,Oe=Q&&!!d.iridescenceMap,Xe=Q&&!!d.iridescenceThicknessMap,Ze=ue&&!!d.sheenColorMap,Ue=ue&&!!d.sheenRoughnessMap,Et=!!d.specularMap,at=!!d.specularColorMap,Ft=!!d.specularIntensityMap,j=We&&!!d.transmissionMap,Pe=We&&!!d.thicknessMap,ce=!!d.gradientMap,me=!!d.alphaMap,De=d.alphaTest>0,Re=!!d.alphaHash,$e=!!d.extensions;let _t=Xi;d.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(_t=r.toneMapping);const Kt={shaderID:ge,shaderType:d.type,shaderName:d.name,vertexShader:Qe,fragmentShader:he,defines:d.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:S,batching:He,batchingColor:He&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Mn,alphaToCoverage:!!d.alphaToCoverage,map:Ot,matcap:At,envMap:Ye,envMapMode:Ye&&le.mapping,envMapCubeUVHeight:ie,aoMap:z,lightMap:It,bumpMap:rt,normalMap:nt,displacementMap:y&&Ne,emissiveMap:Pt,normalMapObjectSpace:nt&&d.normalMapType===Rf,normalMapTangentSpace:nt&&d.normalMapType===Wu,metalnessMap:Ve,roughnessMap:U,anisotropy:C,anisotropyMap:Ce,clearcoat:J,clearcoatMap:ze,clearcoatNormalMap:St,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:Q,iridescenceMap:Oe,iridescenceThicknessMap:Xe,sheen:ue,sheenColorMap:Ze,sheenRoughnessMap:Ue,specularMap:Et,specularColorMap:at,specularIntensityMap:Ft,transmission:We,transmissionMap:j,thicknessMap:Pe,gradientMap:ce,opaque:d.transparent===!1&&d.blending===Ur&&d.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:Re,combine:d.combine,mapUv:Ot&&w(d.map.channel),aoMapUv:z&&w(d.aoMap.channel),lightMapUv:It&&w(d.lightMap.channel),bumpMapUv:rt&&w(d.bumpMap.channel),normalMapUv:nt&&w(d.normalMap.channel),displacementMapUv:Ne&&w(d.displacementMap.channel),emissiveMapUv:Pt&&w(d.emissiveMap.channel),metalnessMapUv:Ve&&w(d.metalnessMap.channel),roughnessMapUv:U&&w(d.roughnessMap.channel),anisotropyMapUv:Ce&&w(d.anisotropyMap.channel),clearcoatMapUv:ze&&w(d.clearcoatMap.channel),clearcoatNormalMapUv:St&&w(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(d.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(d.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&w(d.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&w(d.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&w(d.sheenRoughnessMap.channel),specularMapUv:Et&&w(d.specularMap.channel),specularColorMapUv:at&&w(d.specularColorMap.channel),specularIntensityMapUv:Ft&&w(d.specularIntensityMap.channel),transmissionMapUv:j&&w(d.transmissionMap.channel),thicknessMapUv:Pe&&w(d.thicknessMap.channel),alphaMapUv:me&&w(d.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(nt||C),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Z.attributes.uv&&(Ot||me),fog:!!V,useFog:d.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:d.flatShading===!0,sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:qe,skinning:I.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ke,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:d.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,decodeVideoTexture:Ot&&d.map.isVideoTexture===!0&&Ct.getTransfer(d.map.colorSpace)===zt,decodeVideoTextureEmissive:Pt&&d.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(d.emissiveMap.colorSpace)===zt,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Qn,flipSided:d.side===An,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:$e&&d.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&d.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Kt.vertexUv1s=h.has(1),Kt.vertexUv2s=h.has(2),Kt.vertexUv3s=h.has(3),h.clear(),Kt}function x(d){const g=[];if(d.shaderID?g.push(d.shaderID):(g.push(d.customVertexShaderID),g.push(d.customFragmentShaderID)),d.defines!==void 0)for(const A in d.defines)g.push(A),g.push(d.defines[A]);return d.isRawShaderMaterial===!1&&(F(g,d),O(g,d),g.push(r.outputColorSpace)),g.push(d.customProgramCacheKey),g.join()}function F(d,g){d.push(g.precision),d.push(g.outputColorSpace),d.push(g.envMapMode),d.push(g.envMapCubeUVHeight),d.push(g.mapUv),d.push(g.alphaMapUv),d.push(g.lightMapUv),d.push(g.aoMapUv),d.push(g.bumpMapUv),d.push(g.normalMapUv),d.push(g.displacementMapUv),d.push(g.emissiveMapUv),d.push(g.metalnessMapUv),d.push(g.roughnessMapUv),d.push(g.anisotropyMapUv),d.push(g.clearcoatMapUv),d.push(g.clearcoatNormalMapUv),d.push(g.clearcoatRoughnessMapUv),d.push(g.iridescenceMapUv),d.push(g.iridescenceThicknessMapUv),d.push(g.sheenColorMapUv),d.push(g.sheenRoughnessMapUv),d.push(g.specularMapUv),d.push(g.specularColorMapUv),d.push(g.specularIntensityMapUv),d.push(g.transmissionMapUv),d.push(g.thicknessMapUv),d.push(g.combine),d.push(g.fogExp2),d.push(g.sizeAttenuation),d.push(g.morphTargetsCount),d.push(g.morphAttributeCount),d.push(g.numDirLights),d.push(g.numPointLights),d.push(g.numSpotLights),d.push(g.numSpotLightMaps),d.push(g.numHemiLights),d.push(g.numRectAreaLights),d.push(g.numDirLightShadows),d.push(g.numPointLightShadows),d.push(g.numSpotLightShadows),d.push(g.numSpotLightShadowsWithMaps),d.push(g.numLightProbes),d.push(g.shadowMapType),d.push(g.toneMapping),d.push(g.numClippingPlanes),d.push(g.numClipIntersection),d.push(g.depthPacking)}function O(d,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),d.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.reverseDepthBuffer&&l.enable(4),g.skinning&&l.enable(5),g.morphTargets&&l.enable(6),g.morphNormals&&l.enable(7),g.morphColors&&l.enable(8),g.premultipliedAlpha&&l.enable(9),g.shadowMapEnabled&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),g.decodeVideoTextureEmissive&&l.enable(20),g.alphaToCoverage&&l.enable(21),d.push(l.mask)}function D(d){const g=b[d.type];let A;if(g){const L=Jn[g];A=yd.clone(L.uniforms)}else A=d.uniforms;return A}function W(d,g){let A;for(let L=0,I=m.length;L<I;L++){const V=m[L];if(V.cacheKey===g){A=V,++A.usedTimes;break}}return A===void 0&&(A=new Av(r,g,d,s),m.push(A)),A}function k(d){if(--d.usedTimes===0){const g=m.indexOf(d);m[g]=m[m.length-1],m.pop(),d.destroy()}}function f(d){u.remove(d)}function $(){u.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:D,acquireProgram:W,releaseProgram:k,releaseShaderCache:f,programs:m,dispose:$}}function Dv(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function i(o,l,u){r.get(o)[l]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Lv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _u(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(_,y,S,b,w,M){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:y,material:S,groupOrder:b,renderOrder:_.renderOrder,z:w,group:M},r[e]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=S,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=w,x.group=M),e++,x}function l(_,y,S,b,w,M){const x=o(_,y,S,b,w,M);S.transmission>0?n.push(x):S.transparent===!0?i.push(x):t.push(x)}function u(_,y,S,b,w,M){const x=o(_,y,S,b,w,M);S.transmission>0?n.unshift(x):S.transparent===!0?i.unshift(x):t.unshift(x)}function h(_,y){t.length>1&&t.sort(_||Lv),n.length>1&&n.sort(y||gu),i.length>1&&i.sort(y||gu)}function m(){for(let _=e,y=r.length;_<y;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:m,sort:h}}function Iv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new _u,r.set(n,[o])):i>=s.length?(o=new _u,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Nv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ct};break;case"SpotLight":t={position:new q,direction:new q,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function Uv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ov=0;function Fv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bv(r){const e=new Nv,t=Uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new q);const i=new q,s=new ft,o=new ft;function l(h){let m=0,_=0,y=0;for(let d=0;d<9;d++)n.probe[d].set(0,0,0);let S=0,b=0,w=0,M=0,x=0,F=0,O=0,D=0,W=0,k=0,f=0;h.sort(Fv);for(let d=0,g=h.length;d<g;d++){const A=h[d],L=A.color,I=A.intensity,V=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)m+=L.r*I,_+=L.g*I,y+=L.b*I;else if(A.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(A.sh.coefficients[te],I);f++}else if(A.isDirectionalLight){const te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const le=A.shadow,ie=t.get(A);ie.shadowIntensity=le.intensity,ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,n.directionalShadow[S]=ie,n.directionalShadowMap[S]=Z,n.directionalShadowMatrix[S]=A.shadow.matrix,F++}n.directional[S]=te,S++}else if(A.isSpotLight){const te=e.get(A);te.position.setFromMatrixPosition(A.matrixWorld),te.color.copy(L).multiplyScalar(I),te.distance=V,te.coneCos=Math.cos(A.angle),te.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),te.decay=A.decay,n.spot[w]=te;const le=A.shadow;if(A.map&&(n.spotLightMap[W]=A.map,W++,le.updateMatrices(A),A.castShadow&&k++),n.spotLightMatrix[w]=le.matrix,A.castShadow){const ie=t.get(A);ie.shadowIntensity=le.intensity,ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,n.spotShadow[w]=ie,n.spotShadowMap[w]=Z,D++}w++}else if(A.isRectAreaLight){const te=e.get(A);te.color.copy(L).multiplyScalar(I),te.halfWidth.set(A.width*.5,0,0),te.halfHeight.set(0,A.height*.5,0),n.rectArea[M]=te,M++}else if(A.isPointLight){const te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),te.distance=A.distance,te.decay=A.decay,A.castShadow){const le=A.shadow,ie=t.get(A);ie.shadowIntensity=le.intensity,ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,ie.shadowCameraNear=le.camera.near,ie.shadowCameraFar=le.camera.far,n.pointShadow[b]=ie,n.pointShadowMap[b]=Z,n.pointShadowMatrix[b]=A.shadow.matrix,O++}n.point[b]=te,b++}else if(A.isHemisphereLight){const te=e.get(A);te.skyColor.copy(A.color).multiplyScalar(I),te.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[x]=te,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=_,n.ambient[2]=y;const $=n.hash;($.directionalLength!==S||$.pointLength!==b||$.spotLength!==w||$.rectAreaLength!==M||$.hemiLength!==x||$.numDirectionalShadows!==F||$.numPointShadows!==O||$.numSpotShadows!==D||$.numSpotMaps!==W||$.numLightProbes!==f)&&(n.directional.length=S,n.spot.length=w,n.rectArea.length=M,n.point.length=b,n.hemi.length=x,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=O,n.pointShadowMap.length=O,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=O,n.spotLightMatrix.length=D+W-k,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=f,$.directionalLength=S,$.pointLength=b,$.spotLength=w,$.rectAreaLength=M,$.hemiLength=x,$.numDirectionalShadows=F,$.numPointShadows=O,$.numSpotShadows=D,$.numSpotMaps=W,$.numLightProbes=f,n.version=Ov++)}function u(h,m){let _=0,y=0,S=0,b=0,w=0;const M=m.matrixWorldInverse;for(let x=0,F=h.length;x<F;x++){const O=h[x];if(O.isDirectionalLight){const D=n.directional[_];D.direction.setFromMatrixPosition(O.matrixWorld),i.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(M),_++}else if(O.isSpotLight){const D=n.spot[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),i.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(M),S++}else if(O.isRectAreaLight){const D=n.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),o.identity(),s.copy(O.matrixWorld),s.premultiply(M),o.extractRotation(s),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),b++}else if(O.isPointLight){const D=n.point[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const D=n.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:l,setupView:u,state:n}}function vu(r){const e=new Bv(r),t=[],n=[];function i(m){h.camera=m,t.length=0,n.length=0}function s(m){t.push(m)}function o(m){n.push(m)}function l(){e.setup(t)}function u(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function kv(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let l;return o===void 0?(l=new vu(r),e.set(i,[l])):s>=o.length?(l=new vu(r),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vv(r,e,t){let n=new Nl;const i=new lt,s=new lt,o=new Ut,l=new Bd({depthPacking:wf}),u=new kd,h={},m=t.maxTextureSize,_={[bi]:An,[An]:bi,[Qn]:Qn},y=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Hv,fragmentShader:zv}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const b=new si;b.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Pn(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let x=this.type;this.render=function(k,f,$){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const d=r.getRenderTarget(),g=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Wi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=x!==xi&&this.type===xi,V=x===xi&&this.type!==xi;for(let Z=0,te=k.length;Z<te;Z++){const le=k[Z],ie=le.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;i.copy(ie.mapSize);const ge=ie.getFrameExtents();if(i.multiply(ge),s.copy(ie.mapSize),(i.x>m||i.y>m)&&(i.x>m&&(s.x=Math.floor(m/ge.x),i.x=s.x*ge.x,ie.mapSize.x=s.x),i.y>m&&(s.y=Math.floor(m/ge.y),i.y=s.y*ge.y,ie.mapSize.y=s.y)),ie.map===null||I===!0||V===!0){const Se=this.type!==xi?{minFilter:xn,magFilter:xn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new ur(i.x,i.y,Se),ie.map.texture.name=le.name+".shadowMap",ie.camera.updateProjectionMatrix()}r.setRenderTarget(ie.map),r.clear();const Ee=ie.getViewportCount();for(let Se=0;Se<Ee;Se++){const ke=ie.getViewport(Se);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),L.viewport(o),ie.updateMatrices(le,Se),n=ie.getFrustum(),D(f,$,ie.camera,le,this.type)}ie.isPointLightShadow!==!0&&this.type===xi&&F(ie,$),ie.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(d,g,A)};function F(k,f){const $=e.update(w);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ur(i.x,i.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(f,null,$,y,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(f,null,$,S,w,null)}function O(k,f,$,d){let g=null;const A=$.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(A!==void 0)g=A;else if(g=$.isPointLight===!0?u:l,r.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0){const L=g.uuid,I=f.uuid;let V=h[L];V===void 0&&(V={},h[L]=V);let Z=V[I];Z===void 0&&(Z=g.clone(),V[I]=Z,f.addEventListener("dispose",W)),g=Z}if(g.visible=f.visible,g.wireframe=f.wireframe,d===xi?g.side=f.shadowSide!==null?f.shadowSide:f.side:g.side=f.shadowSide!==null?f.shadowSide:_[f.side],g.alphaMap=f.alphaMap,g.alphaTest=f.alphaTest,g.map=f.map,g.clipShadows=f.clipShadows,g.clippingPlanes=f.clippingPlanes,g.clipIntersection=f.clipIntersection,g.displacementMap=f.displacementMap,g.displacementScale=f.displacementScale,g.displacementBias=f.displacementBias,g.wireframeLinewidth=f.wireframeLinewidth,g.linewidth=f.linewidth,$.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const L=r.properties.get(g);L.light=$}return g}function D(k,f,$,d,g){if(k.visible===!1)return;if(k.layers.test(f.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&g===xi)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,k.matrixWorld);const I=e.update(k),V=k.material;if(Array.isArray(V)){const Z=I.groups;for(let te=0,le=Z.length;te<le;te++){const ie=Z[te],ge=V[ie.materialIndex];if(ge&&ge.visible){const Ee=O(k,ge,d,g);k.onBeforeShadow(r,k,f,$,I,Ee,ie),r.renderBufferDirect($,null,I,Ee,k,ie),k.onAfterShadow(r,k,f,$,I,Ee,ie)}}}else if(V.visible){const Z=O(k,V,d,g);k.onBeforeShadow(r,k,f,$,I,Z,null),r.renderBufferDirect($,null,I,Z,k,null),k.onAfterShadow(r,k,f,$,I,Z,null)}}const L=k.children;for(let I=0,V=L.length;I<V;I++)D(L[I],f,$,d,g)}function W(k){k.target.removeEventListener("dispose",W);for(const $ in h){const d=h[$],g=k.target.uuid;g in d&&(d[g].dispose(),delete d[g])}}}const Gv={[No]:Uo,[Oo]:ko,[Fo]:Ho,[Br]:Bo,[Uo]:No,[ko]:Oo,[Ho]:Fo,[Bo]:Br};function Wv(r,e){function t(){let j=!1;const Pe=new Ut;let ce=null;const me=new Ut(0,0,0,0);return{setMask:function(De){ce!==De&&!j&&(r.colorMask(De,De,De,De),ce=De)},setLocked:function(De){j=De},setClear:function(De,Re,$e,_t,Kt){Kt===!0&&(De*=_t,Re*=_t,$e*=_t),Pe.set(De,Re,$e,_t),me.equals(Pe)===!1&&(r.clearColor(De,Re,$e,_t),me.copy(Pe))},reset:function(){j=!1,ce=null,me.set(-1,0,0,0)}}}function n(){let j=!1,Pe=!1,ce=null,me=null,De=null;return{setReversed:function(Re){if(Pe!==Re){const $e=e.get("EXT_clip_control");Re?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Pe=Re;const _t=De;De=null,this.setClear(_t)}},getReversed:function(){return Pe},setTest:function(Re){Re?Te(r.DEPTH_TEST):qe(r.DEPTH_TEST)},setMask:function(Re){ce!==Re&&!j&&(r.depthMask(Re),ce=Re)},setFunc:function(Re){if(Pe&&(Re=Gv[Re]),me!==Re){switch(Re){case No:r.depthFunc(r.NEVER);break;case Uo:r.depthFunc(r.ALWAYS);break;case Oo:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case Fo:r.depthFunc(r.EQUAL);break;case Bo:r.depthFunc(r.GEQUAL);break;case ko:r.depthFunc(r.GREATER);break;case Ho:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Re}},setLocked:function(Re){j=Re},setClear:function(Re){De!==Re&&(Pe&&(Re=1-Re),r.clearDepth(Re),De=Re)},reset:function(){j=!1,ce=null,me=null,De=null,Pe=!1}}}function i(){let j=!1,Pe=null,ce=null,me=null,De=null,Re=null,$e=null,_t=null,Kt=null;return{setTest:function(Nt){j||(Nt?Te(r.STENCIL_TEST):qe(r.STENCIL_TEST))},setMask:function(Nt){Pe!==Nt&&!j&&(r.stencilMask(Nt),Pe=Nt)},setFunc:function(Nt,Sn,Dn){(ce!==Nt||me!==Sn||De!==Dn)&&(r.stencilFunc(Nt,Sn,Dn),ce=Nt,me=Sn,De=Dn)},setOp:function(Nt,Sn,Dn){(Re!==Nt||$e!==Sn||_t!==Dn)&&(r.stencilOp(Nt,Sn,Dn),Re=Nt,$e=Sn,_t=Dn)},setLocked:function(Nt){j=Nt},setClear:function(Nt){Kt!==Nt&&(r.clearStencil(Nt),Kt=Nt)},reset:function(){j=!1,Pe=null,ce=null,me=null,De=null,Re=null,$e=null,_t=null,Kt=null}}}const s=new t,o=new n,l=new i,u=new WeakMap,h=new WeakMap;let m={},_={},y=new WeakMap,S=[],b=null,w=!1,M=null,x=null,F=null,O=null,D=null,W=null,k=null,f=new ct(0,0,0),$=0,d=!1,g=null,A=null,L=null,I=null,V=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,le=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ie)[1]),te=le>=1):ie.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),te=le>=2);let ge=null,Ee={};const Se=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),Qe=new Ut().fromArray(Se),he=new Ut().fromArray(ke);function _e(j,Pe,ce,me){const De=new Uint8Array(4),Re=r.createTexture();r.bindTexture(j,Re),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<ce;$e++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Pe+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Re}const be={};be[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Te(r.DEPTH_TEST),o.setFunc(Br),rt(!1),nt(tc),Te(r.CULL_FACE),z(Wi);function Te(j){m[j]!==!0&&(r.enable(j),m[j]=!0)}function qe(j){m[j]!==!1&&(r.disable(j),m[j]=!1)}function ut(j,Pe){return _[j]!==Pe?(r.bindFramebuffer(j,Pe),_[j]=Pe,j===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pe),j===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(j,Pe){let ce=S,me=!1;if(j){ce=y.get(Pe),ce===void 0&&(ce=[],y.set(Pe,ce));const De=j.textures;if(ce.length!==De.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,$e=De.length;Re<$e;Re++)ce[Re]=r.COLOR_ATTACHMENT0+Re;ce.length=De.length,me=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,me=!0);me&&r.drawBuffers(ce)}function Ot(j){return b!==j?(r.useProgram(j),b=j,!0):!1}const At={[sr]:r.FUNC_ADD,[$h]:r.FUNC_SUBTRACT,[Zh]:r.FUNC_REVERSE_SUBTRACT};At[Jh]=r.MIN,At[Qh]=r.MAX;const Ye={[ef]:r.ZERO,[tf]:r.ONE,[nf]:r.SRC_COLOR,[Lo]:r.SRC_ALPHA,[cf]:r.SRC_ALPHA_SATURATE,[of]:r.DST_COLOR,[sf]:r.DST_ALPHA,[rf]:r.ONE_MINUS_SRC_COLOR,[Io]:r.ONE_MINUS_SRC_ALPHA,[lf]:r.ONE_MINUS_DST_COLOR,[af]:r.ONE_MINUS_DST_ALPHA,[uf]:r.CONSTANT_COLOR,[hf]:r.ONE_MINUS_CONSTANT_COLOR,[ff]:r.CONSTANT_ALPHA,[df]:r.ONE_MINUS_CONSTANT_ALPHA};function z(j,Pe,ce,me,De,Re,$e,_t,Kt,Nt){if(j===Wi){w===!0&&(qe(r.BLEND),w=!1);return}if(w===!1&&(Te(r.BLEND),w=!0),j!==Kh){if(j!==M||Nt!==d){if((x!==sr||D!==sr)&&(r.blendEquation(r.FUNC_ADD),x=sr,D=sr),Nt)switch(j){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFunc(r.ONE,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}F=null,O=null,W=null,k=null,f.set(0,0,0),$=0,M=j,d=Nt}return}De=De||Pe,Re=Re||ce,$e=$e||me,(Pe!==x||De!==D)&&(r.blendEquationSeparate(At[Pe],At[De]),x=Pe,D=De),(ce!==F||me!==O||Re!==W||$e!==k)&&(r.blendFuncSeparate(Ye[ce],Ye[me],Ye[Re],Ye[$e]),F=ce,O=me,W=Re,k=$e),(_t.equals(f)===!1||Kt!==$)&&(r.blendColor(_t.r,_t.g,_t.b,Kt),f.copy(_t),$=Kt),M=j,d=!1}function It(j,Pe){j.side===Qn?qe(r.CULL_FACE):Te(r.CULL_FACE);let ce=j.side===An;Pe&&(ce=!ce),rt(ce),j.blending===Ur&&j.transparent===!1?z(Wi):z(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),s.setMask(j.colorWrite);const me=j.stencilWrite;l.setTest(me),me&&(l.setMask(j.stencilWriteMask),l.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),l.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Pt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):qe(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(j){g!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),g=j)}function nt(j){j!==qh?(Te(r.CULL_FACE),j!==A&&(j===tc?r.cullFace(r.BACK):j===Yh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):qe(r.CULL_FACE),A=j}function Ne(j){j!==L&&(te&&r.lineWidth(j),L=j)}function Pt(j,Pe,ce){j?(Te(r.POLYGON_OFFSET_FILL),(I!==Pe||V!==ce)&&(r.polygonOffset(Pe,ce),I=Pe,V=ce)):qe(r.POLYGON_OFFSET_FILL)}function Ve(j){j?Te(r.SCISSOR_TEST):qe(r.SCISSOR_TEST)}function U(j){j===void 0&&(j=r.TEXTURE0+Z-1),ge!==j&&(r.activeTexture(j),ge=j)}function C(j,Pe,ce){ce===void 0&&(ge===null?ce=r.TEXTURE0+Z-1:ce=ge);let me=Ee[ce];me===void 0&&(me={type:void 0,texture:void 0},Ee[ce]=me),(me.type!==j||me.texture!==Pe)&&(ge!==ce&&(r.activeTexture(ce),ge=ce),r.bindTexture(j,Pe||be[j]),me.type=j,me.texture=Pe)}function J(){const j=Ee[ge];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pe(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ue(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function St(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Oe(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(j){Qe.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Qe.copy(j))}function Ue(j){he.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),he.copy(j))}function Et(j,Pe){let ce=h.get(Pe);ce===void 0&&(ce=new WeakMap,h.set(Pe,ce));let me=ce.get(j);me===void 0&&(me=r.getUniformBlockIndex(Pe,j.name),ce.set(j,me))}function at(j,Pe){const me=h.get(Pe).get(j);u.get(Pe)!==me&&(r.uniformBlockBinding(Pe,me,j.__bindingPointIndex),u.set(Pe,me))}function Ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},ge=null,Ee={},_={},y=new WeakMap,S=[],b=null,w=!1,M=null,x=null,F=null,O=null,D=null,W=null,k=null,f=new ct(0,0,0),$=0,d=!1,g=null,A=null,L=null,I=null,V=null,Qe.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:Te,disable:qe,bindFramebuffer:ut,drawBuffers:He,useProgram:Ot,setBlending:z,setMaterial:It,setFlipSided:rt,setCullFace:nt,setLineWidth:Ne,setPolygonOffset:Pt,setScissorTest:Ve,activeTexture:U,bindTexture:C,unbindTexture:J,compressedTexImage2D:pe,compressedTexImage3D:Q,texImage2D:Oe,texImage3D:Xe,updateUBOMapping:Et,uniformBlockBinding:at,texStorage2D:St,texStorage3D:ye,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ze,scissor:Ze,viewport:Ue,reset:Ft}}function Xv(r,e,t,n,i,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new lt,m=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,C){return S?new OffscreenCanvas(U,C):ws("canvas")}function w(U,C,J){let pe=1;const Q=Ve(U);if((Q.width>J||Q.height>J)&&(pe=J/Math.max(Q.width,Q.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(pe*Q.width),We=Math.floor(pe*Q.height);_===void 0&&(_=b(ue,We));const Ce=C?b(ue,We):_;return Ce.width=ue,Ce.height=We,Ce.getContext("2d").drawImage(U,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+We+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){r.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(U,C,J,pe,Q=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=C;if(C===r.RED&&(J===r.FLOAT&&(ue=r.R32F),J===r.HALF_FLOAT&&(ue=r.R16F),J===r.UNSIGNED_BYTE&&(ue=r.R8)),C===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.R8UI),J===r.UNSIGNED_SHORT&&(ue=r.R16UI),J===r.UNSIGNED_INT&&(ue=r.R32UI),J===r.BYTE&&(ue=r.R8I),J===r.SHORT&&(ue=r.R16I),J===r.INT&&(ue=r.R32I)),C===r.RG&&(J===r.FLOAT&&(ue=r.RG32F),J===r.HALF_FLOAT&&(ue=r.RG16F),J===r.UNSIGNED_BYTE&&(ue=r.RG8)),C===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RG8UI),J===r.UNSIGNED_SHORT&&(ue=r.RG16UI),J===r.UNSIGNED_INT&&(ue=r.RG32UI),J===r.BYTE&&(ue=r.RG8I),J===r.SHORT&&(ue=r.RG16I),J===r.INT&&(ue=r.RG32I)),C===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),J===r.UNSIGNED_INT&&(ue=r.RGB32UI),J===r.BYTE&&(ue=r.RGB8I),J===r.SHORT&&(ue=r.RGB16I),J===r.INT&&(ue=r.RGB32I)),C===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),J===r.UNSIGNED_INT&&(ue=r.RGBA32UI),J===r.BYTE&&(ue=r.RGBA8I),J===r.SHORT&&(ue=r.RGBA16I),J===r.INT&&(ue=r.RGBA32I)),C===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),C===r.RGBA){const We=Q?ba:Ct.getTransfer(pe);J===r.FLOAT&&(ue=r.RGBA32F),J===r.HALF_FLOAT&&(ue=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ue=We===zt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function D(U,C){let J;return U?C===null||C===cr||C===Ss?J=r.DEPTH24_STENCIL8:C===Wn?J=r.DEPTH32F_STENCIL8:C===Ms&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===cr||C===Ss?J=r.DEPTH_COMPONENT24:C===Wn?J=r.DEPTH_COMPONENT32F:C===Ms&&(J=r.DEPTH_COMPONENT16),J}function W(U,C){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==xn&&U.minFilter!==Cn?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function k(U){const C=U.target;C.removeEventListener("dispose",k),$(C),C.isVideoTexture&&m.delete(C)}function f(U){const C=U.target;C.removeEventListener("dispose",f),g(C)}function $(U){const C=n.get(U);if(C.__webglInit===void 0)return;const J=U.source,pe=y.get(J);if(pe){const Q=pe[C.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&d(U),Object.keys(pe).length===0&&y.delete(J)}n.remove(U)}function d(U){const C=n.get(U);r.deleteTexture(C.__webglTexture);const J=U.source,pe=y.get(J);delete pe[C.__cacheKey],o.memory.textures--}function g(U){const C=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(C.__webglFramebuffer[pe]))for(let Q=0;Q<C.__webglFramebuffer[pe].length;Q++)r.deleteFramebuffer(C.__webglFramebuffer[pe][Q]);else r.deleteFramebuffer(C.__webglFramebuffer[pe]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[pe])}else{if(Array.isArray(C.__webglFramebuffer))for(let pe=0;pe<C.__webglFramebuffer.length;pe++)r.deleteFramebuffer(C.__webglFramebuffer[pe]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pe=0;pe<C.__webglColorRenderbuffer.length;pe++)C.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[pe]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const J=U.textures;for(let pe=0,Q=J.length;pe<Q;pe++){const ue=n.get(J[pe]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(J[pe])}n.remove(U)}let A=0;function L(){A=0}function I(){const U=A;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),A+=1,U}function V(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function Z(U,C){const J=n.get(U);if(U.isVideoTexture&&Ne(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(J,U,C);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+C)}function te(U,C){const J=n.get(U);if(U.version>0&&J.__version!==U.version){he(J,U,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+C)}function le(U,C){const J=n.get(U);if(U.version>0&&J.__version!==U.version){he(J,U,C);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+C)}function ie(U,C){const J=n.get(U);if(U.version>0&&J.__version!==U.version){_e(J,U,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+C)}const ge={[zr]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[Ta]:r.MIRRORED_REPEAT},Ee={[xn]:r.NEAREST,[Iu]:r.NEAREST_MIPMAP_NEAREST,[gs]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[pa]:r.LINEAR_MIPMAP_NEAREST,[Mi]:r.LINEAR_MIPMAP_LINEAR},Se={[Cf]:r.NEVER,[Uf]:r.ALWAYS,[Pf]:r.LESS,[Xu]:r.LEQUAL,[Df]:r.EQUAL,[Nf]:r.GEQUAL,[Lf]:r.GREATER,[If]:r.NOTEQUAL};function ke(U,C){if(C.type===Wn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Cn||C.magFilter===pa||C.magFilter===gs||C.magFilter===Mi||C.minFilter===Cn||C.minFilter===pa||C.minFilter===gs||C.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ge[C.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ge[C.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ge[C.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Ee[C.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Ee[C.minFilter]),C.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Se[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===xn||C.minFilter!==gs&&C.minFilter!==Mi||C.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Qe(U,C){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",k));const pe=C.source;let Q=y.get(pe);Q===void 0&&(Q={},y.set(pe,Q));const ue=V(C);if(ue!==U.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),Q[ue].usedTimes++;const We=Q[U.__cacheKey];We!==void 0&&(Q[U.__cacheKey].usedTimes--,We.usedTimes===0&&d(C)),U.__cacheKey=ue,U.__webglTexture=Q[ue].texture}return J}function he(U,C,J){let pe=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(pe=r.TEXTURE_3D);const Q=Qe(U,C),ue=C.source;t.bindTexture(pe,U.__webglTexture,r.TEXTURE0+J);const We=n.get(ue);if(ue.version!==We.__version||Q===!0){t.activeTexture(r.TEXTURE0+J);const Ce=Ct.getPrimaries(Ct.workingColorSpace),ze=C.colorSpace===zi?null:Ct.getPrimaries(C.colorSpace),St=C.colorSpace===zi||Ce===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ye=w(C.image,!1,i.maxTextureSize);ye=Pt(C,ye);const Oe=s.convert(C.format,C.colorSpace),Xe=s.convert(C.type);let Ze=O(C.internalFormat,Oe,Xe,C.colorSpace,C.isVideoTexture);ke(pe,C);let Ue;const Et=C.mipmaps,at=C.isVideoTexture!==!0,Ft=We.__version===void 0||Q===!0,j=ue.dataReady,Pe=W(C,ye);if(C.isDepthTexture)Ze=D(C.format===Ts,C.type),Ft&&(at?t.texStorage2D(r.TEXTURE_2D,1,Ze,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,Ze,ye.width,ye.height,0,Oe,Xe,null));else if(C.isDataTexture)if(Et.length>0){at&&Ft&&t.texStorage2D(r.TEXTURE_2D,Pe,Ze,Et[0].width,Et[0].height);for(let ce=0,me=Et.length;ce<me;ce++)Ue=Et[ce],at?j&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Ue.width,Ue.height,Oe,Xe,Ue.data):t.texImage2D(r.TEXTURE_2D,ce,Ze,Ue.width,Ue.height,0,Oe,Xe,Ue.data);C.generateMipmaps=!1}else at?(Ft&&t.texStorage2D(r.TEXTURE_2D,Pe,Ze,ye.width,ye.height),j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,Oe,Xe,ye.data)):t.texImage2D(r.TEXTURE_2D,0,Ze,ye.width,ye.height,0,Oe,Xe,ye.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){at&&Ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ze,Et[0].width,Et[0].height,ye.depth);for(let ce=0,me=Et.length;ce<me;ce++)if(Ue=Et[ce],C.format!==On)if(Oe!==null)if(at){if(j)if(C.layerUpdates.size>0){const De=Yc(Ue.width,Ue.height,C.format,C.type);for(const Re of C.layerUpdates){const $e=Ue.data.subarray(Re*De/Ue.data.BYTES_PER_ELEMENT,(Re+1)*De/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,Re,Ue.width,Ue.height,1,Oe,$e)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Ue.width,Ue.height,ye.depth,Oe,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,Ze,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?j&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Ue.width,Ue.height,ye.depth,Oe,Xe,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,Ze,Ue.width,Ue.height,ye.depth,0,Oe,Xe,Ue.data)}else{at&&Ft&&t.texStorage2D(r.TEXTURE_2D,Pe,Ze,Et[0].width,Et[0].height);for(let ce=0,me=Et.length;ce<me;ce++)Ue=Et[ce],C.format!==On?Oe!==null?at?j&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Ue.width,Ue.height,Oe,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,Ze,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?j&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Ue.width,Ue.height,Oe,Xe,Ue.data):t.texImage2D(r.TEXTURE_2D,ce,Ze,Ue.width,Ue.height,0,Oe,Xe,Ue.data)}else if(C.isDataArrayTexture)if(at){if(Ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ze,ye.width,ye.height,ye.depth),j)if(C.layerUpdates.size>0){const ce=Yc(ye.width,ye.height,C.format,C.type);for(const me of C.layerUpdates){const De=ye.data.subarray(me*ce/ye.data.BYTES_PER_ELEMENT,(me+1)*ce/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,Oe,Xe,De)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Xe,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ze,ye.width,ye.height,ye.depth,0,Oe,Xe,ye.data);else if(C.isData3DTexture)at?(Ft&&t.texStorage3D(r.TEXTURE_3D,Pe,Ze,ye.width,ye.height,ye.depth),j&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Xe,ye.data)):t.texImage3D(r.TEXTURE_3D,0,Ze,ye.width,ye.height,ye.depth,0,Oe,Xe,ye.data);else if(C.isFramebufferTexture){if(Ft)if(at)t.texStorage2D(r.TEXTURE_2D,Pe,Ze,ye.width,ye.height);else{let ce=ye.width,me=ye.height;for(let De=0;De<Pe;De++)t.texImage2D(r.TEXTURE_2D,De,Ze,ce,me,0,Oe,Xe,null),ce>>=1,me>>=1}}else if(Et.length>0){if(at&&Ft){const ce=Ve(Et[0]);t.texStorage2D(r.TEXTURE_2D,Pe,Ze,ce.width,ce.height)}for(let ce=0,me=Et.length;ce<me;ce++)Ue=Et[ce],at?j&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Oe,Xe,Ue):t.texImage2D(r.TEXTURE_2D,ce,Ze,Oe,Xe,Ue);C.generateMipmaps=!1}else if(at){if(Ft){const ce=Ve(ye);t.texStorage2D(r.TEXTURE_2D,Pe,Ze,ce.width,ce.height)}j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Xe,ye)}else t.texImage2D(r.TEXTURE_2D,0,Ze,Oe,Xe,ye);M(C)&&x(pe),We.__version=ue.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function _e(U,C,J){if(C.image.length!==6)return;const pe=Qe(U,C),Q=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+J);const ue=n.get(Q);if(Q.version!==ue.__version||pe===!0){t.activeTexture(r.TEXTURE0+J);const We=Ct.getPrimaries(Ct.workingColorSpace),Ce=C.colorSpace===zi?null:Ct.getPrimaries(C.colorSpace),ze=C.colorSpace===zi||We===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const St=C.isCompressedTexture||C.image[0].isCompressedTexture,ye=C.image[0]&&C.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!St&&!ye?Oe[me]=w(C.image[me],!0,i.maxCubemapSize):Oe[me]=ye?C.image[me].image:C.image[me],Oe[me]=Pt(C,Oe[me]);const Xe=Oe[0],Ze=s.convert(C.format,C.colorSpace),Ue=s.convert(C.type),Et=O(C.internalFormat,Ze,Ue,C.colorSpace),at=C.isVideoTexture!==!0,Ft=ue.__version===void 0||pe===!0,j=Q.dataReady;let Pe=W(C,Xe);ke(r.TEXTURE_CUBE_MAP,C);let ce;if(St){at&&Ft&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,Et,Xe.width,Xe.height);for(let me=0;me<6;me++){ce=Oe[me].mipmaps;for(let De=0;De<ce.length;De++){const Re=ce[De];C.format!==On?Ze!==null?at?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Re.width,Re.height,Ze,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Et,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Re.width,Re.height,Ze,Ue,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Et,Re.width,Re.height,0,Ze,Ue,Re.data)}}}else{if(ce=C.mipmaps,at&&Ft){ce.length>0&&Pe++;const me=Ve(Oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,Et,me.width,me.height)}for(let me=0;me<6;me++)if(ye){at?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,Ze,Ue,Oe[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Et,Oe[me].width,Oe[me].height,0,Ze,Ue,Oe[me].data);for(let De=0;De<ce.length;De++){const $e=ce[De].image[me].image;at?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,$e.width,$e.height,Ze,Ue,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Et,$e.width,$e.height,0,Ze,Ue,$e.data)}}else{at?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ze,Ue,Oe[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Et,Ze,Ue,Oe[me]);for(let De=0;De<ce.length;De++){const Re=ce[De];at?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Ze,Ue,Re.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Et,Ze,Ue,Re.image[me])}}}M(C)&&x(r.TEXTURE_CUBE_MAP),ue.__version=Q.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function be(U,C,J,pe,Q,ue){const We=s.convert(J.format,J.colorSpace),Ce=s.convert(J.type),ze=O(J.internalFormat,We,Ce,J.colorSpace),St=n.get(C),ye=n.get(J);if(ye.__renderTarget=C,!St.__hasExternalTextures){const Oe=Math.max(1,C.width>>ue),Xe=Math.max(1,C.height>>ue);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,ze,Oe,Xe,C.depth,0,We,Ce,null):t.texImage2D(Q,ue,ze,Oe,Xe,0,We,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),nt(C)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,Q,ye.__webglTexture,0,rt(C)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,Q,ye.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(U,C,J){if(r.bindRenderbuffer(r.RENDERBUFFER,U),C.depthBuffer){const pe=C.depthTexture,Q=pe&&pe.isDepthTexture?pe.type:null,ue=D(C.stencilBuffer,Q),We=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=rt(C);nt(C)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,ue,C.width,C.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ue,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ue,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,U)}else{const pe=C.textures;for(let Q=0;Q<pe.length;Q++){const ue=pe[Q],We=s.convert(ue.format,ue.colorSpace),Ce=s.convert(ue.type),ze=O(ue.internalFormat,We,Ce,ue.colorSpace),St=rt(C);J&&nt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,ze,C.width,C.height):nt(C)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,ze,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ze,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=n.get(C.depthTexture);pe.__renderTarget=C,(!pe.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Z(C.depthTexture,0);const Q=pe.__webglTexture,ue=rt(C);if(C.depthTexture.format===Es)nt(C)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(C.depthTexture.format===Ts)nt(C)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ut(U){const C=n.get(U),J=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),pe){const Q=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,pe.removeEventListener("dispose",Q)};pe.addEventListener("dispose",Q),C.__depthDisposeCallback=Q}C.__boundDepthTexture=pe}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");qe(C.__webglFramebuffer,U)}else if(J){C.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[pe]),C.__webglDepthbuffer[pe]===void 0)C.__webglDepthbuffer[pe]=r.createRenderbuffer(),Te(C.__webglDepthbuffer[pe],U,!1);else{const Q=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=C.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Te(C.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(U,C,J){const pe=n.get(U);C!==void 0&&be(pe.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ut(U)}function Ot(U){const C=U.texture,J=n.get(U),pe=n.get(C);U.addEventListener("dispose",f);const Q=U.textures,ue=U.isWebGLCubeRenderTarget===!0,We=Q.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=C.version,o.memory.textures++),ue){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let ze=0;ze<C.mipmaps.length;ze++)J.__webglFramebuffer[Ce][ze]=r.createFramebuffer()}else J.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(We)for(let Ce=0,ze=Q.length;Ce<ze;Ce++){const St=n.get(Q[Ce]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&nt(U)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Q.length;Ce++){const ze=Q[Ce];J.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const St=s.convert(ze.format,ze.colorSpace),ye=s.convert(ze.type),Oe=O(ze.internalFormat,St,ye,ze.colorSpace,U.isXRRenderTarget===!0),Xe=rt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,Oe,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(J.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ke(r.TEXTURE_CUBE_MAP,C);for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)be(J.__webglFramebuffer[Ce][ze],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ze);else be(J.__webglFramebuffer[Ce],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(C)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,ze=Q.length;Ce<ze;Ce++){const St=Q[Ce],ye=n.get(St);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),ke(r.TEXTURE_2D,St),be(J.__webglFramebuffer,U,St,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),M(St)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),ke(Ce,C),C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)be(J.__webglFramebuffer[ze],U,C,r.COLOR_ATTACHMENT0,Ce,ze);else be(J.__webglFramebuffer,U,C,r.COLOR_ATTACHMENT0,Ce,0);M(C)&&x(Ce),t.unbindTexture()}U.depthBuffer&&ut(U)}function At(U){const C=U.textures;for(let J=0,pe=C.length;J<pe;J++){const Q=C[J];if(M(Q)){const ue=F(U),We=n.get(Q).__webglTexture;t.bindTexture(ue,We),x(ue),t.unbindTexture()}}}const Ye=[],z=[];function It(U){if(U.samples>0){if(nt(U)===!1){const C=U.textures,J=U.width,pe=U.height;let Q=r.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=n.get(U),Ce=C.length>1;if(Ce)for(let ze=0;ze<C.length;ze++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ze=0;ze<C.length;ze++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[ze]);const St=n.get(C[ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,J,pe,0,0,J,pe,Q,r.NEAREST),u===!0&&(Ye.length=0,z.length=0,Ye.push(r.COLOR_ATTACHMENT0+ze),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ye.push(ue),z.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let ze=0;ze<C.length;ze++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,We.__webglColorRenderbuffer[ze]);const St=n.get(C[ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,St,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){const C=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function rt(U){return Math.min(i.maxSamples,U.samples)}function nt(U){const C=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ne(U){const C=o.render.frame;m.get(U)!==C&&(m.set(U,C),U.update())}function Pt(U,C){const J=U.colorSpace,pe=U.format,Q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Mn&&J!==zi&&(Ct.getTransfer(J)===zt?(pe!==On||Q!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),C}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=te,this.setTexture3D=le,this.setTextureCube=ie,this.rebindTextures=He,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=be,this.useMultisampledRTT=nt}function jv(r,e){function t(n,i=zi){let s;const o=Ct.getTransfer(i);if(n===Ai)return r.UNSIGNED_BYTE;if(n===Tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return r.BYTE;if(n===Uu)return r.SHORT;if(n===Ms)return r.UNSIGNED_SHORT;if(n===El)return r.INT;if(n===cr)return r.UNSIGNED_INT;if(n===Wn)return r.FLOAT;if(n===Rs)return r.HALF_FLOAT;if(n===Fu)return r.ALPHA;if(n===Bu)return r.RGB;if(n===On)return r.RGBA;if(n===ku)return r.LUMINANCE;if(n===Hu)return r.LUMINANCE_ALPHA;if(n===Es)return r.DEPTH_COMPONENT;if(n===Ts)return r.DEPTH_STENCIL;if(n===Al)return r.RED;if(n===wl)return r.RED_INTEGER;if(n===zu)return r.RG;if(n===Rl)return r.RG_INTEGER;if(n===Cl)return r.RGBA_INTEGER;if(n===ma||n===ga||n===_a||n===va)if(o===zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Yo||n===Ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qo||n===Yo)return o===zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ko)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$o||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$o)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===ul||n===hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return o===zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===fl||n===dl||n===pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new cn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ji({vertexShader:qv,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends hr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",u=1,h=null,m=null,_=null,y=null,S=null,b=null;const w=new Kv,M=t.getContextAttributes();let x=null,F=null;const O=[],D=[],W=new lt;let k=null;const f=new vn;f.viewport=new Ut;const $=new vn;$.viewport=new Ut;const d=[f,$],g=new op;let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let _e=O[he];return _e===void 0&&(_e=new mo,O[he]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(he){let _e=O[he];return _e===void 0&&(_e=new mo,O[he]=_e),_e.getGripSpace()},this.getHand=function(he){let _e=O[he];return _e===void 0&&(_e=new mo,O[he]=_e),_e.getHandSpace()};function I(he){const _e=D.indexOf(he.inputSource);if(_e===-1)return;const be=O[_e];be!==void 0&&(be.update(he.inputSource,he.frame,h||o),be.dispatchEvent({type:he.type,data:he.inputSource}))}function V(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Z);for(let he=0;he<O.length;he++){const _e=D[he];_e!==null&&(D[he]=null,O[he].disconnect(_e))}A=null,L=null,w.reset(),e.setRenderTarget(x),S=null,y=null,_=null,i=null,F=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){l=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(he){h=he},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(he){if(i=he,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Te=null,qe=null;M.depth&&(qe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=M.stencil?Ts:Es,Te=M.stencil?Ss:cr);const ut={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:s};_=new XRWebGLBinding(i,t),y=_.createProjectionLayer(ut),i.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),F=new ur(y.textureWidth,y.textureHeight,{format:On,type:Ai,depthTexture:new ah(y.textureWidth,y.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),F=new ur(S.framebufferWidth,S.framebufferHeight,{format:On,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(l),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Z(he){for(let _e=0;_e<he.removed.length;_e++){const be=he.removed[_e],Te=D.indexOf(be);Te>=0&&(D[Te]=null,O[Te].disconnect(be))}for(let _e=0;_e<he.added.length;_e++){const be=he.added[_e];let Te=D.indexOf(be);if(Te===-1){for(let ut=0;ut<O.length;ut++)if(ut>=D.length){D.push(be),Te=ut;break}else if(D[ut]===null){D[ut]=be,Te=ut;break}if(Te===-1)break}const qe=O[Te];qe&&qe.connect(be)}}const te=new q,le=new q;function ie(he,_e,be){te.setFromMatrixPosition(_e.matrixWorld),le.setFromMatrixPosition(be.matrixWorld);const Te=te.distanceTo(le),qe=_e.projectionMatrix.elements,ut=be.projectionMatrix.elements,He=qe[14]/(qe[10]-1),Ot=qe[14]/(qe[10]+1),At=(qe[9]+1)/qe[5],Ye=(qe[9]-1)/qe[5],z=(qe[8]-1)/qe[0],It=(ut[8]+1)/ut[0],rt=He*z,nt=He*It,Ne=Te/(-z+It),Pt=Ne*-z;if(_e.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Pt),he.translateZ(Ne),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),qe[10]===-1)he.projectionMatrix.copy(_e.projectionMatrix),he.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ve=He+Ne,U=Ot+Ne,C=rt-Pt,J=nt+(Te-Pt),pe=At*Ot/U*Ve,Q=Ye*Ot/U*Ve;he.projectionMatrix.makePerspective(C,J,pe,Q,Ve,U),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function ge(he,_e){_e===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(_e.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(i===null)return;let _e=he.near,be=he.far;w.texture!==null&&(w.depthNear>0&&(_e=w.depthNear),w.depthFar>0&&(be=w.depthFar)),g.near=$.near=f.near=_e,g.far=$.far=f.far=be,(A!==g.near||L!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),A=g.near,L=g.far),f.layers.mask=he.layers.mask|2,$.layers.mask=he.layers.mask|4,g.layers.mask=f.layers.mask|$.layers.mask;const Te=he.parent,qe=g.cameras;ge(g,Te);for(let ut=0;ut<qe.length;ut++)ge(qe[ut],Te);qe.length===2?ie(g,f,$):g.projectionMatrix.copy(f.projectionMatrix),Ee(he,g,Te)};function Ee(he,_e,be){be===null?he.matrix.copy(_e.matrixWorld):(he.matrix.copy(be.matrixWorld),he.matrix.invert(),he.matrix.multiply(_e.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(_e.projectionMatrix),he.projectionMatrixInverse.copy(_e.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Vr*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(y===null&&S===null))return u},this.setFoveation=function(he){u=he,y!==null&&(y.fixedFoveation=he),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=he)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(g)};let Se=null;function ke(he,_e){if(m=_e.getViewerPose(h||o),b=_e,m!==null){const be=m.views;S!==null&&(e.setRenderTargetFramebuffer(F,S.framebuffer),e.setRenderTarget(F));let Te=!1;be.length!==g.cameras.length&&(g.cameras.length=0,Te=!0);for(let He=0;He<be.length;He++){const Ot=be[He];let At=null;if(S!==null)At=S.getViewport(Ot);else{const z=_.getViewSubImage(y,Ot);At=z.viewport,He===0&&(e.setRenderTargetTextures(F,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(F))}let Ye=d[He];Ye===void 0&&(Ye=new vn,Ye.layers.enable(He),Ye.viewport=new Ut,d[He]=Ye),Ye.matrix.fromArray(Ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(At.x,At.y,At.width,At.height),He===0&&(g.matrix.copy(Ye.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Te===!0&&g.cameras.push(Ye)}const qe=i.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){const He=_.getDepthInformation(be[0]);He&&He.isValid&&He.texture&&w.init(e,He,i.renderState)}}for(let be=0;be<O.length;be++){const Te=D[be],qe=O[be];Te!==null&&qe!==void 0&&qe.update(Te,_e,h||o)}Se&&Se(he,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),b=null}const Qe=new uh;Qe.setAnimationLoop(ke),this.setAnimationLoop=function(he){Se=he},this.dispose=function(){}}}const nr=new ni,Zv=new ft;function Jv(r,e){function t(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function n(M,x){x.color.getRGB(M.fogColor.value,Qu(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function i(M,x,F,O,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(M,x):x.isMeshToonMaterial?(s(M,x),_(M,x)):x.isMeshPhongMaterial?(s(M,x),m(M,x)):x.isMeshStandardMaterial?(s(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,D)):x.isMeshMatcapMaterial?(s(M,x),b(M,x)):x.isMeshDepthMaterial?s(M,x):x.isMeshDistanceMaterial?(s(M,x),w(M,x)):x.isMeshNormalMaterial?s(M,x):x.isLineBasicMaterial?(o(M,x),x.isLineDashedMaterial&&l(M,x)):x.isPointsMaterial?u(M,x,F,O):x.isSpriteMaterial?h(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,t(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===An&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,t(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===An&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,t(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,t(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=e.get(x),O=F.envMap,D=F.envMapRotation;O&&(M.envMap.value=O,nr.copy(D),nr.x*=-1,nr.y*=-1,nr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),M.envMapRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(nr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,M.aoMapTransform))}function o(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform))}function l(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function u(M,x,F,O){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=O*.5,x.map&&(M.map.value=x.map,t(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===An&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const F=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qv(r,e,t,n){let i={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(F,O){const D=O.program;n.uniformBlockBinding(F,D)}function h(F,O){let D=i[F.id];D===void 0&&(b(F),D=m(F),i[F.id]=D,F.addEventListener("dispose",M));const W=O.program;n.updateUBOMapping(F,W);const k=e.render.frame;s[F.id]!==k&&(y(F),s[F.id]=k)}function m(F){const O=_();F.__bindingPointIndex=O;const D=r.createBuffer(),W=F.__size,k=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,W,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function _(){for(let F=0;F<l;F++)if(o.indexOf(F)===-1)return o.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const O=i[F.id],D=F.uniforms,W=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let k=0,f=D.length;k<f;k++){const $=Array.isArray(D[k])?D[k]:[D[k]];for(let d=0,g=$.length;d<g;d++){const A=$[d];if(S(A,k,d,W)===!0){const L=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let Z=0;Z<I.length;Z++){const te=I[Z],le=w(te);typeof te=="number"||typeof te=="boolean"?(A.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,L+V,A.__data)):te.isMatrix3?(A.__data[0]=te.elements[0],A.__data[1]=te.elements[1],A.__data[2]=te.elements[2],A.__data[3]=0,A.__data[4]=te.elements[3],A.__data[5]=te.elements[4],A.__data[6]=te.elements[5],A.__data[7]=0,A.__data[8]=te.elements[6],A.__data[9]=te.elements[7],A.__data[10]=te.elements[8],A.__data[11]=0):(te.toArray(A.__data,V),V+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(F,O,D,W){const k=F.value,f=O+"_"+D;if(W[f]===void 0)return typeof k=="number"||typeof k=="boolean"?W[f]=k:W[f]=k.clone(),!0;{const $=W[f];if(typeof k=="number"||typeof k=="boolean"){if($!==k)return W[f]=k,!0}else if($.equals(k)===!1)return $.copy(k),!0}return!1}function b(F){const O=F.uniforms;let D=0;const W=16;for(let f=0,$=O.length;f<$;f++){const d=Array.isArray(O[f])?O[f]:[O[f]];for(let g=0,A=d.length;g<A;g++){const L=d[g],I=Array.isArray(L.value)?L.value:[L.value];for(let V=0,Z=I.length;V<Z;V++){const te=I[V],le=w(te),ie=D%W,ge=ie%le.boundary,Ee=ie+ge;D+=ge,Ee!==0&&W-Ee<le.storage&&(D+=W-Ee),L.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=D,D+=le.storage}}}const k=D%W;return k>0&&(D+=W-k),F.__size=D,F.__cache={},this}function w(F){const O={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(O.boundary=4,O.storage=4):F.isVector2?(O.boundary=8,O.storage=8):F.isVector3||F.isColor?(O.boundary=16,O.storage=12):F.isVector4?(O.boundary=16,O.storage=16):F.isMatrix3?(O.boundary=48,O.storage=48):F.isMatrix4?(O.boundary=64,O.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),O}function M(F){const O=F.target;O.removeEventListener("dispose",M);const D=o.indexOf(O.__bindingPointIndex);o.splice(D,1),r.deleteBuffer(i[O.id]),delete i[O.id],delete s[O.id]}function x(){for(const F in i)r.deleteBuffer(i[F]);o=[],i={},s={}}return{bind:u,update:h,dispose:x}}class ex{constructor(e={}){const{canvas:t=Jf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=o;const b=new Uint32Array(4),w=new Int32Array(4);let M=null,x=null;const F=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let W=!1;this._outputColorSpace=ln;let k=0,f=0,$=null,d=-1,g=null;const A=new Ut,L=new Ut;let I=null;const V=new ct(0);let Z=0,te=t.width,le=t.height,ie=1,ge=null,Ee=null;const Se=new Ut(0,0,te,le),ke=new Ut(0,0,te,le);let Qe=!1;const he=new Nl;let _e=!1,be=!1;const Te=new ft,qe=new ft,ut=new q,He=new Ut,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Ye(){return $===null?ie:1}let z=n;function It(P,Y){return t.getContext(P,Y)}try{const P={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Re,!1),z===null){const Y="webgl2";if(z=It(Y,P),z===null)throw It(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let rt,nt,Ne,Pt,Ve,U,C,J,pe,Q,ue,We,Ce,ze,St,ye,Oe,Xe,Ze,Ue,Et,at,Ft,j;function Pe(){rt=new u_(z),rt.init(),at=new jv(z,rt),nt=new i_(z,rt,e,at),Ne=new Wv(z,rt),nt.reverseDepthBuffer&&y&&Ne.buffers.depth.setReversed(!0),Pt=new d_(z),Ve=new Dv,U=new Xv(z,rt,Ne,Ve,nt,at,Pt),C=new s_(D),J=new c_(D),pe=new xp(z),Ft=new t_(z,pe),Q=new h_(z,pe,Pt,Ft),ue=new m_(z,Q,pe,Pt),Ze=new p_(z,nt,U),ye=new r_(Ve),We=new Pv(D,C,J,rt,nt,Ft,ye),Ce=new Jv(D,Ve),ze=new Iv,St=new kv(rt),Xe=new e_(D,C,J,Ne,ue,S,u),Oe=new Vv(D,ue,nt),j=new Qv(z,Pt,nt,Ne),Ue=new n_(z,rt,Pt),Et=new f_(z,rt,Pt),Pt.programs=We.programs,D.capabilities=nt,D.extensions=rt,D.properties=Ve,D.renderLists=ze,D.shadowMap=Oe,D.state=Ne,D.info=Pt}Pe();const ce=new $v(D,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(te,le,!1))},this.getSize=function(P){return P.set(te,le)},this.setSize=function(P,Y,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=P,le=Y,t.width=Math.floor(P*ie),t.height=Math.floor(Y*ie),re===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(te*ie,le*ie).floor()},this.setDrawingBufferSize=function(P,Y,re){te=P,le=Y,ie=re,t.width=Math.floor(P*re),t.height=Math.floor(Y*re),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(Se)},this.setViewport=function(P,Y,re,se){P.isVector4?Se.set(P.x,P.y,P.z,P.w):Se.set(P,Y,re,se),Ne.viewport(A.copy(Se).multiplyScalar(ie).round())},this.getScissor=function(P){return P.copy(ke)},this.setScissor=function(P,Y,re,se){P.isVector4?ke.set(P.x,P.y,P.z,P.w):ke.set(P,Y,re,se),Ne.scissor(L.copy(ke).multiplyScalar(ie).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(P){Ne.setScissorTest(Qe=P)},this.setOpaqueSort=function(P){ge=P},this.setTransparentSort=function(P){Ee=P},this.getClearColor=function(P){return P.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,re=!0){let se=0;if(P){let K=!1;if($!==null){const xe=$.texture.format;K=xe===Cl||xe===Rl||xe===wl}if(K){const xe=$.texture.type,Ae=xe===Ai||xe===cr||xe===Ms||xe===Ss||xe===Tl||xe===bl,Fe=Xe.getClearColor(),Be=Xe.getClearAlpha(),it=Fe.r,et=Fe.g,Ke=Fe.b;Ae?(b[0]=it,b[1]=et,b[2]=Ke,b[3]=Be,z.clearBufferuiv(z.COLOR,0,b)):(w[0]=it,w[1]=et,w[2]=Ke,w[3]=Be,z.clearBufferiv(z.COLOR,0,w))}else se|=z.COLOR_BUFFER_BIT}Y&&(se|=z.DEPTH_BUFFER_BIT),re&&(se|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Xe.dispose(),ze.dispose(),St.dispose(),Ve.dispose(),C.dispose(),J.dispose(),ue.dispose(),Ft.dispose(),j.dispose(),We.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",oi),ce.removeEventListener("sessionend",li),Fn.stop()};function me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const P=Pt.autoReset,Y=Oe.enabled,re=Oe.autoUpdate,se=Oe.needsUpdate,K=Oe.type;Pe(),Pt.autoReset=P,Oe.enabled=Y,Oe.autoUpdate=re,Oe.needsUpdate=se,Oe.type=K}function Re(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $e(P){const Y=P.target;Y.removeEventListener("dispose",$e),_t(Y)}function _t(P){Kt(P),Ve.remove(P)}function Kt(P){const Y=Ve.get(P).programs;Y!==void 0&&(Y.forEach(function(re){We.releaseProgram(re)}),P.isShaderMaterial&&We.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,re,se,K,xe){Y===null&&(Y=Ot);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Fe=Ia(P,Y,re,se,K);Ne.setMaterial(se,Ae);let Be=re.index,it=1;if(se.wireframe===!0){if(Be=Q.getWireframeAttribute(re),Be===void 0)return;it=2}const et=re.drawRange,Ke=re.attributes.position;let Tt=et.start*it,wt=(et.start+et.count)*it;xe!==null&&(Tt=Math.max(Tt,xe.start*it),wt=Math.min(wt,(xe.start+xe.count)*it)),Be!==null?(Tt=Math.max(Tt,0),wt=Math.min(wt,Be.count)):Ke!=null&&(Tt=Math.max(Tt,0),wt=Math.min(wt,Ke.count));const jt=wt-Tt;if(jt<0||jt===1/0)return;Ft.setup(K,se,Fe,re,Be);let vt,mt=Ue;if(Be!==null&&(vt=pe.get(Be),mt=Et,mt.setIndex(vt)),K.isMesh)se.wireframe===!0?(Ne.setLineWidth(se.wireframeLinewidth*Ye()),mt.setMode(z.LINES)):mt.setMode(z.TRIANGLES);else if(K.isLine){let je=se.linewidth;je===void 0&&(je=1),Ne.setLineWidth(je*Ye()),K.isLineSegments?mt.setMode(z.LINES):K.isLineLoop?mt.setMode(z.LINE_LOOP):mt.setMode(z.LINE_STRIP)}else K.isPoints?mt.setMode(z.POINTS):K.isSprite&&mt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ya("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const je=K._multiDrawStarts,Qt=K._multiDrawCounts,Lt=K._multiDrawCount,pn=Be?pe.get(Be).bytesPerElement:1,ci=Ve.get(se).currentProgram.getUniforms();for(let sn=0;sn<Lt;sn++)ci.setValue(z,"_gl_DrawID",sn),mt.render(je[sn]/pn,Qt[sn])}else if(K.isInstancedMesh)mt.renderInstances(Tt,jt,K.count);else if(re.isInstancedBufferGeometry){const je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Qt=Math.min(re.instanceCount,je);mt.renderInstances(Tt,jt,Qt)}else mt.render(Tt,jt)};function Nt(P,Y,re){P.transparent===!0&&P.side===Qn&&P.forceSinglePass===!1?(P.side=An,P.needsUpdate=!0,dr(P,Y,re),P.side=bi,P.needsUpdate=!0,dr(P,Y,re),P.side=Qn):dr(P,Y,re)}this.compile=function(P,Y,re=null){re===null&&(re=P),x=St.get(re),x.init(Y),O.push(x),re.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),P!==re&&P.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const se=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xe=K.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const Fe=xe[Ae];Nt(Fe,re,K),se.add(Fe)}else Nt(xe,re,K),se.add(xe)}),x=O.pop(),se},this.compileAsync=function(P,Y,re=null){const se=this.compile(P,Y,re);return new Promise(K=>{function xe(){if(se.forEach(function(Ae){Ve.get(Ae).currentProgram.isReady()&&se.delete(Ae)}),se.size===0){K(P);return}setTimeout(xe,10)}rt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Sn=null;function Dn(P){Sn&&Sn(P)}function oi(){Fn.stop()}function li(){Fn.start()}const Fn=new uh;Fn.setAnimationLoop(Dn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(P){Sn=P,ce.setAnimationLoop(P),P===null?Fn.stop():Fn.start()},ce.addEventListener("sessionstart",oi),ce.addEventListener("sessionend",li),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Y),Y=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,Y,$),x=St.get(P,O.length),x.init(Y),O.push(x),qe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),he.setFromProjectionMatrix(qe),be=this.localClippingEnabled,_e=ye.init(this.clippingPlanes,be),M=ze.get(P,F.length),M.init(),F.push(M),ce.enabled===!0&&ce.isPresenting===!0){const xe=D.xr.getDepthSensingMesh();xe!==null&&wi(xe,Y,-1/0,D.sortObjects)}wi(P,Y,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(ge,Ee),At=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,At&&Xe.addToRenderList(M,P),this.info.render.frame++,_e===!0&&ye.beginShadows();const re=x.state.shadowsArray;Oe.render(re,P,Y),_e===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,K=M.transmissive;if(x.setupLights(),Y.isArrayCamera){const xe=Y.cameras;if(K.length>0)for(let Ae=0,Fe=xe.length;Ae<Fe;Ae++){const Be=xe[Ae];Is(se,K,P,Be)}At&&Xe.render(P);for(let Ae=0,Fe=xe.length;Ae<Fe;Ae++){const Be=xe[Ae];Ls(M,P,Be,Be.viewport)}}else K.length>0&&Is(se,K,P,Y),At&&Xe.render(P),Ls(M,P,Y);$!==null&&f===0&&(U.updateMultisampleRenderTarget($),U.updateRenderTargetMipmap($)),P.isScene===!0&&P.onAfterRender(D,P,Y),Ft.resetDefaultState(),d=-1,g=null,O.pop(),O.length>0?(x=O[O.length-1],_e===!0&&ye.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function wi(P,Y,re,se){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||he.intersectsSprite(P)){se&&He.setFromMatrixPosition(P.matrixWorld).applyMatrix4(qe);const Ae=ue.update(P),Fe=P.material;Fe.visible&&M.push(P,Ae,Fe,re,He.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||he.intersectsObject(P))){const Ae=ue.update(P),Fe=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),He.copy(P.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),He.copy(Ae.boundingSphere.center)),He.applyMatrix4(P.matrixWorld).applyMatrix4(qe)),Array.isArray(Fe)){const Be=Ae.groups;for(let it=0,et=Be.length;it<et;it++){const Ke=Be[it],Tt=Fe[Ke.materialIndex];Tt&&Tt.visible&&M.push(P,Ae,Tt,re,He.z,Ke)}}else Fe.visible&&M.push(P,Ae,Fe,re,He.z,null)}}const xe=P.children;for(let Ae=0,Fe=xe.length;Ae<Fe;Ae++)wi(xe[Ae],Y,re,se)}function Ls(P,Y,re,se){const K=P.opaque,xe=P.transmissive,Ae=P.transparent;x.setupLightsView(re),_e===!0&&ye.setGlobalState(D.clippingPlanes,re),se&&Ne.viewport(A.copy(se)),K.length>0&&fr(K,Y,re),xe.length>0&&fr(xe,Y,re),Ae.length>0&&fr(Ae,Y,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Is(P,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new ur(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Rs:Ai,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const xe=x.state.transmissionRenderTarget[se.id],Ae=se.viewport||A;xe.setSize(Ae.z*D.transmissionResolutionScale,Ae.w*D.transmissionResolutionScale);const Fe=D.getRenderTarget();D.setRenderTarget(xe),D.getClearColor(V),Z=D.getClearAlpha(),Z<1&&D.setClearColor(16777215,.5),D.clear(),At&&Xe.render(re);const Be=D.toneMapping;D.toneMapping=Xi;const it=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),_e===!0&&ye.setGlobalState(D.clippingPlanes,se),fr(P,re,se),U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ke=0,Tt=Y.length;Ke<Tt;Ke++){const wt=Y[Ke],jt=wt.object,vt=wt.geometry,mt=wt.material,je=wt.group;if(mt.side===Qn&&jt.layers.test(se.layers)){const Qt=mt.side;mt.side=An,mt.needsUpdate=!0,Zr(jt,re,se,vt,mt,je),mt.side=Qt,mt.needsUpdate=!0,et=!0}}et===!0&&(U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe))}D.setRenderTarget(Fe),D.setClearColor(V,Z),it!==void 0&&(se.viewport=it),D.toneMapping=Be}function fr(P,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,xe=P.length;K<xe;K++){const Ae=P[K],Fe=Ae.object,Be=Ae.geometry,it=Ae.group;let et=Ae.material;et.allowOverride===!0&&se!==null&&(et=se),Fe.layers.test(re.layers)&&Zr(Fe,Y,re,Be,et,it)}}function Zr(P,Y,re,se,K,xe){P.onBeforeRender(D,Y,re,se,K,xe),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(D,Y,re,se,P,xe),K.transparent===!0&&K.side===Qn&&K.forceSinglePass===!1?(K.side=An,K.needsUpdate=!0,D.renderBufferDirect(re,Y,se,K,P,xe),K.side=bi,K.needsUpdate=!0,D.renderBufferDirect(re,Y,se,K,P,xe),K.side=Qn):D.renderBufferDirect(re,Y,se,K,P,xe),P.onAfterRender(D,Y,re,se,K,xe)}function dr(P,Y,re){Y.isScene!==!0&&(Y=Ot);const se=Ve.get(P),K=x.state.lights,xe=x.state.shadowsArray,Ae=K.state.version,Fe=We.getParameters(P,K.state,xe,Y,re),Be=We.getProgramCacheKey(Fe);let it=se.programs;se.environment=P.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(P.isMeshStandardMaterial?J:C).get(P.envMap||se.environment),se.envMapRotation=se.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",$e),it=new Map,se.programs=it);let et=it.get(Be);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===Ae)return Jr(P,Fe),et}else Fe.uniforms=We.getUniforms(P),P.onBeforeCompile(Fe,D),et=We.acquireProgram(Fe,Be),it.set(Be,et),se.uniforms=Fe.uniforms;const Ke=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=ye.uniform),Jr(P,Fe),se.needsLights=Us(P),se.lightsStateVersion=Ae,se.needsLights&&(Ke.ambientLightColor.value=K.state.ambient,Ke.lightProbe.value=K.state.probe,Ke.directionalLights.value=K.state.directional,Ke.directionalLightShadows.value=K.state.directionalShadow,Ke.spotLights.value=K.state.spot,Ke.spotLightShadows.value=K.state.spotShadow,Ke.rectAreaLights.value=K.state.rectArea,Ke.ltc_1.value=K.state.rectAreaLTC1,Ke.ltc_2.value=K.state.rectAreaLTC2,Ke.pointLights.value=K.state.point,Ke.pointLightShadows.value=K.state.pointShadow,Ke.hemisphereLights.value=K.state.hemi,Ke.directionalShadowMap.value=K.state.directionalShadowMap,Ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ke.spotShadowMap.value=K.state.spotShadowMap,Ke.spotLightMatrix.value=K.state.spotLightMatrix,Ke.spotLightMap.value=K.state.spotLightMap,Ke.pointShadowMap.value=K.state.pointShadowMap,Ke.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=et,se.uniformsList=null,et}function Ns(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Sa.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Jr(P,Y){const re=Ve.get(P);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function Ia(P,Y,re,se,K){Y.isScene!==!0&&(Y=Ot),U.resetTextureUnits();const xe=Y.fog,Ae=se.isMeshStandardMaterial?Y.environment:null,Fe=$===null?D.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Mn,Be=(se.isMeshStandardMaterial?J:C).get(se.envMap||Ae),it=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ke=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,wt=!!re.morphAttributes.color;let jt=Xi;se.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(jt=D.toneMapping);const vt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mt=vt!==void 0?vt.length:0,je=Ve.get(se),Qt=x.state.lights;if(_e===!0&&(be===!0||P!==g)){const an=P===g&&se.id===d;ye.setState(se,P,an)}let Lt=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Qt.state.version||je.outputColorSpace!==Fe||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==Be||se.fog===!0&&je.fog!==xe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ye.numPlanes||je.numIntersection!==ye.numIntersection)||je.vertexAlphas!==it||je.vertexTangents!==et||je.morphTargets!==Ke||je.morphNormals!==Tt||je.morphColors!==wt||je.toneMapping!==jt||je.morphTargetsCount!==mt)&&(Lt=!0):(Lt=!0,je.__version=se.version);let pn=je.currentProgram;Lt===!0&&(pn=dr(se,Y,K));let ci=!1,sn=!1,Ci=!1;const Gt=pn.getUniforms(),En=je.uniforms;if(Ne.useProgram(pn.program)&&(ci=!0,sn=!0,Ci=!0),se.id!==d&&(d=se.id,sn=!0),ci||g!==P){Ne.buffers.depth.getReversed()?(Te.copy(P.projectionMatrix),ed(Te),td(Te),Gt.setValue(z,"projectionMatrix",Te)):Gt.setValue(z,"projectionMatrix",P.projectionMatrix),Gt.setValue(z,"viewMatrix",P.matrixWorldInverse);const $t=Gt.map.cameraPosition;$t!==void 0&&$t.setValue(z,ut.setFromMatrixPosition(P.matrixWorld)),nt.logarithmicDepthBuffer&&Gt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),g!==P&&(g=P,sn=!0,Ci=!0)}if(K.isSkinnedMesh){Gt.setOptional(z,K,"bindMatrix"),Gt.setOptional(z,K,"bindMatrixInverse");const an=K.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Gt.setValue(z,"boneTexture",an.boneTexture,U))}K.isBatchedMesh&&(Gt.setOptional(z,K,"batchingTexture"),Gt.setValue(z,"batchingTexture",K._matricesTexture,U),Gt.setOptional(z,K,"batchingIdTexture"),Gt.setValue(z,"batchingIdTexture",K._indirectTexture,U),Gt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Gt.setValue(z,"batchingColorTexture",K._colorsTexture,U));const Xt=re.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&Ze.update(K,re,pn),(sn||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Gt.setValue(z,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(En.envMap.value=Be,En.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),sn&&(Gt.setValue(z,"toneMappingExposure",D.toneMappingExposure),je.needsLights&&Ri(En,Ci),xe&&se.fog===!0&&Ce.refreshFogUniforms(En,xe),Ce.refreshMaterialUniforms(En,se,ie,le,x.state.transmissionRenderTarget[P.id]),Sa.upload(z,Ns(je),En,U)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Sa.upload(z,Ns(je),En,U),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(z,"center",K.center),Gt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Gt.setValue(z,"normalMatrix",K.normalMatrix),Gt.setValue(z,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const an=se.uniformsGroups;for(let $t=0,ts=an.length;$t<ts;$t++){const ui=an[$t];j.update(ui,pn),j.bind(ui,pn)}}return pn}function Ri(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Us(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(P,Y,re){const se=Ve.get(P);se.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ve.get(P.texture).__webglTexture=Y,Ve.get(P.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){const re=Ve.get(P);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const Qr=z.createFramebuffer();this.setRenderTarget=function(P,Y=0,re=0){$=P,k=Y,f=re;let se=!0,K=null,xe=!1,Ae=!1;if(P){const Be=Ve.get(P);if(Be.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(z.FRAMEBUFFER,null),se=!1;else if(Be.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Be.__hasExternalTextures)U.rebindTextures(P,Ve.get(P.texture).__webglTexture,Ve.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ke=P.depthTexture;if(Be.__boundDepthTexture!==Ke){if(Ke!==null&&Ve.has(Ke)&&(P.width!==Ke.image.width||P.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const it=P.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ae=!0);const et=Ve.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[Y])?K=et[Y][re]:K=et[Y],xe=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?K=Ve.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?K=et[re]:K=et,A.copy(P.viewport),L.copy(P.scissor),I=P.scissorTest}else A.copy(Se).multiplyScalar(ie).floor(),L.copy(ke).multiplyScalar(ie).floor(),I=Qe;if(re!==0&&(K=Qr),Ne.bindFramebuffer(z.FRAMEBUFFER,K)&&se&&Ne.drawBuffers(P,K),Ne.viewport(A),Ne.scissor(L),Ne.setScissorTest(I),xe){const Be=Ve.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,re)}else if(Ae){const Be=Ve.get(P.texture),it=Y;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,re,it)}else if(P!==null&&re!==0){const Be=Ve.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,re)}d=-1},this.readRenderTargetPixels=function(P,Y,re,se,K,xe,Ae){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){Ne.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const Be=P.texture,it=Be.format,et=Be.type;if(!nt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-se&&re>=0&&re<=P.height-K&&z.readPixels(Y,re,se,K,at.convert(it),at.convert(et),xe)}finally{const Be=$!==null?Ve.get($).__webglFramebuffer:null;Ne.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(P,Y,re,se,K,xe,Ae){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe)if(Y>=0&&Y<=P.width-se&&re>=0&&re<=P.height-K){Ne.bindFramebuffer(z.FRAMEBUFFER,Fe);const Be=P.texture,it=Be.format,et=Be.type;if(!nt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.bufferData(z.PIXEL_PACK_BUFFER,xe.byteLength,z.STREAM_READ),z.readPixels(Y,re,se,K,at.convert(it),at.convert(et),0);const Tt=$!==null?Ve.get($).__webglFramebuffer:null;Ne.bindFramebuffer(z.FRAMEBUFFER,Tt);const wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Qf(z,wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xe),z.deleteBuffer(Ke),z.deleteSync(wt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,re=0){const se=Math.pow(2,-re),K=Math.floor(P.image.width*se),xe=Math.floor(P.image.height*se),Ae=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;U.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,Ae,Fe,K,xe),Ne.unbindTexture()};const es=z.createFramebuffer(),pr=z.createFramebuffer();this.copyTextureToTexture=function(P,Y,re=null,se=null,K=0,xe=null){xe===null&&(K!==0?(ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=K,K=0):xe=0);let Ae,Fe,Be,it,et,Ke,Tt,wt,jt;const vt=P.isCompressedTexture?P.mipmaps[xe]:P.image;if(re!==null)Ae=re.max.x-re.min.x,Fe=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,it=re.min.x,et=re.min.y,Ke=re.isBox3?re.min.z:0;else{const Xt=Math.pow(2,-K);Ae=Math.floor(vt.width*Xt),Fe=Math.floor(vt.height*Xt),P.isDataArrayTexture?Be=vt.depth:P.isData3DTexture?Be=Math.floor(vt.depth*Xt):Be=1,it=0,et=0,Ke=0}se!==null?(Tt=se.x,wt=se.y,jt=se.z):(Tt=0,wt=0,jt=0);const mt=at.convert(Y.format),je=at.convert(Y.type);let Qt;Y.isData3DTexture?(U.setTexture3D(Y,0),Qt=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Qt=z.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Qt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Lt=z.getParameter(z.UNPACK_ROW_LENGTH),pn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ci=z.getParameter(z.UNPACK_SKIP_PIXELS),sn=z.getParameter(z.UNPACK_SKIP_ROWS),Ci=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,vt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,it),z.pixelStorei(z.UNPACK_SKIP_ROWS,et),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ke);const Gt=P.isDataArrayTexture||P.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){const Xt=Ve.get(P),an=Ve.get(Y),$t=Ve.get(Xt.__renderTarget),ts=Ve.get(an.__renderTarget);Ne.bindFramebuffer(z.READ_FRAMEBUFFER,$t.__webglFramebuffer),Ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let ui=0;ui<Be;ui++)Gt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.get(P).__webglTexture,K,Ke+ui),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,xe,jt+ui)),z.blitFramebuffer(it,et,Ae,Fe,Tt,wt,Ae,Fe,z.DEPTH_BUFFER_BIT,z.NEAREST);Ne.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||Ve.has(P)){const Xt=Ve.get(P),an=Ve.get(Y);Ne.bindFramebuffer(z.READ_FRAMEBUFFER,es),Ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,pr);for(let $t=0;$t<Be;$t++)Gt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,K,Ke+$t):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xt.__webglTexture,K),En?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,an.__webglTexture,xe,jt+$t):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,an.__webglTexture,xe),K!==0?z.blitFramebuffer(it,et,Ae,Fe,Tt,wt,Ae,Fe,z.COLOR_BUFFER_BIT,z.NEAREST):En?z.copyTexSubImage3D(Qt,xe,Tt,wt,jt+$t,it,et,Ae,Fe):z.copyTexSubImage2D(Qt,xe,Tt,wt,it,et,Ae,Fe);Ne.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else En?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Qt,xe,Tt,wt,jt,Ae,Fe,Be,mt,je,vt.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(Qt,xe,Tt,wt,jt,Ae,Fe,Be,mt,vt.data):z.texSubImage3D(Qt,xe,Tt,wt,jt,Ae,Fe,Be,mt,je,vt):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xe,Tt,wt,Ae,Fe,mt,je,vt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xe,Tt,wt,vt.width,vt.height,mt,vt.data):z.texSubImage2D(z.TEXTURE_2D,xe,Tt,wt,Ae,Fe,mt,je,vt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Lt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ci),z.pixelStorei(z.UNPACK_SKIP_ROWS,sn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ci),xe===0&&Y.generateMipmaps&&z.generateMipmap(Qt),Ne.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,re=null,se=null,K=0){return ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,re,se,K)},this.initRenderTarget=function(P){Ve.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Ne.unbindTexture()},this.resetState=function(){k=0,f=0,$=null,Ne.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const xu={type:"change"},Vl={type:"start"},mh={type:"end"},da=new Cs,yu=new Hi,tx=Math.cos(70*ju.DEG2RAD),tn=new q,bn=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ro=1e-6;class nx extends _p{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new ti,this._lastTargetPosition=new q,this._quat=new ti().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qc,this._sphericalDelta=new qc,this._scale=1,this._panOffset=new q,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new q,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rx.bind(this),this._onPointerDown=ix.bind(this),this._onPointerUp=sx.bind(this),this._onContextMenu=fx.bind(this),this._onMouseWheel=lx.bind(this),this._onKeyDown=cx.bind(this),this._onTouchStart=ux.bind(this),this._onTouchMove=hx.bind(this),this._onMouseDown=ax.bind(this),this._onMouseMove=ox.bind(this),this._interceptControlDown=dx.bind(this),this._interceptControlUp=px.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xu),this.update(),this.state=Vt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=tn.length();o=this._clampDistance(l*this._scale);const u=l-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const l=new q(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new q(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(da.origin.copy(this.object.position),da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(da.direction))<tx?this.object.lookAt(this.target):(yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),da.intersectPlane(yu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ro||this._lastTargetPosition.distanceToSquared(this.target)>Ro?(this.dispatchEvent(xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;tn.copy(i).sub(this.target);let s=tn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,l=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ix(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function rx(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function sx(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mh),this.state=Vt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ax(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Vt.DOLLY;break;case Nr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Vt.ROTATE}break;case Nr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Vl)}function ox(r){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function lx(r){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(r.preventDefault(),this.dispatchEvent(Vl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(mh))}function cx(r){this.enabled!==!1&&this._handleKeyDown(r)}function ux(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Vt.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Vt.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Vl)}function hx(r){switch(this._trackPointer(r),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Vt.NONE}}function fx(r){this.enabled!==!1&&r.preventDefault()}function dx(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function px(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mu(r,e){if(e===bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ml||e===Gu){let t=r.getIndex();if(t===null){const o=[],l=r.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)o.push(u);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ml)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class mx extends Kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Nx(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=ys.extractUrlBase(e);o=ys.resolveURL(h,this.path)}else o=ys.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},u=new ch(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{s.parse(h,o,function(m){t(m),s.manager.itemEnd(e)},l)}catch(m){l(m)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},l={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===gh){try{o[Mt.KHR_BINARY_GLTF]=new Ux(e)}catch(_){i&&i(_);return}s=JSON.parse(o[Mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Yx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const _=this.pluginCallbacks[m](h);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[_.name]=_,o[_.name]=!0}if(s.extensionsUsed)for(let m=0;m<s.extensionsUsed.length;++m){const _=s.extensionsUsed[m],y=s.extensionsRequired||[];switch(_){case Mt.KHR_MATERIALS_UNLIT:o[_]=new vx;break;case Mt.KHR_DRACO_MESH_COMPRESSION:o[_]=new Ox(s,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:o[_]=new Fx;break;case Mt.KHR_MESH_QUANTIZATION:o[_]=new Bx;break;default:y.indexOf(_)>=0&&l[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}h.setExtensions(o),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function gx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _x{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const m=new ct(16777215);u.color!==void 0&&m.setRGB(u.color[0],u.color[1],u.color[2],Mn);const _=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new Ma(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new ip(m),h.distance=_;break;case"spot":h=new tp(m),h.distance=_,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),yi(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(t.cache,l,u)})}}class vx{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return or}extendParams(e,t,n){const i=[];e.color=new ct(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ln))}return Promise.all(i)}}class xx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class yx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(l,l)}return Promise.all(s)}}class Mx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Sx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Ex{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],Mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ln)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Tx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class bx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(l[0],l[1],l[2],Mn),Promise.all(s)}}class Ax{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class wx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(l[0],l[1],l[2],Mn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ln)),Promise.all(s)}}class Rx{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Cx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Px{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Dx{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lx{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ix{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const u=i.byteOffset||0,h=i.byteLength||0,m=i.count,_=i.byteStride,y=new Uint8Array(l,u,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(m,_,y,i.mode,i.filter).then(function(S){return S.buffer}):o.ready.then(function(){const S=new ArrayBuffer(m*_);return o.decodeGltfBuffer(new Uint8Array(S),m,_,y,i.mode,i.filter),S})})}else return null}}class Nx{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Un.TRIANGLES&&h.mode!==Un.TRIANGLE_STRIP&&h.mode!==Un.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],u={};for(const h in o)l.push(this.parser.getDependency("accessor",o[h]).then(m=>(u[h]=m,u[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const m=h.pop(),_=m.isGroup?m.children:[m],y=h[0].count,S=[];for(const b of _){const w=new ft,M=new q,x=new ti,F=new q(1,1,1),O=new Ld(b.geometry,b.material,y);for(let D=0;D<y;D++)u.TRANSLATION&&M.fromBufferAttribute(u.TRANSLATION,D),u.ROTATION&&x.fromBufferAttribute(u.ROTATION,D),u.SCALE&&F.fromBufferAttribute(u.SCALE,D),O.setMatrixAt(D,w.compose(M,x,F));for(const D in u)if(D==="_COLOR_0"){const W=u[D];O.instanceColor=new _l(W.array,W.itemSize,W.normalized)}else D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&b.geometry.setAttribute(D,u[D]);qt.prototype.copy.call(O,b),this.parser.assignFinalMaterial(O),S.push(O)}return m.isGroup?(m.clear(),m.add(...S),m):S[0]}))}}const gh="glTF",ms=12,Su={JSON:1313821514,BIN:5130562};class Ux{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ms,s=new DataView(e,ms);let o=0;for(;o<i;){const l=s.getUint32(o,!0);o+=4;const u=s.getUint32(o,!0);if(o+=4,u===Su.JSON){const h=new Uint8Array(e,ms+o,l);this.content=n.decode(h)}else if(u===Su.BIN){const h=ms+o;this.body=e.slice(h,h+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ox{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},u={},h={};for(const m in o){const _=yl[m]||m.toLowerCase();l[_]=o[m]}for(const m in e.attributes){const _=yl[m]||m.toLowerCase();if(o[m]!==void 0){const y=n.accessors[e.attributes[m]],S=Fr[y.componentType];h[_]=S.name,u[_]=y.normalized===!0}}return t.getDependency("bufferView",s).then(function(m){return new Promise(function(_,y){i.decodeDracoFile(m,function(S){for(const b in S.attributes){const w=S.attributes[b],M=u[b];M!==void 0&&(w.normalized=M)}_(S)},l,h,Mn,y)})})}}class Fx{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Bx{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class _h extends Ds{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=l*2,h=l*3,m=i-t,_=(n-t)/m,y=_*_,S=y*_,b=e*h,w=b-h,M=-2*S+3*y,x=S-y,F=1-M,O=x-y+_;for(let D=0;D!==l;D++){const W=o[w+D+l],k=o[w+D+u]*m,f=o[b+D+l],$=o[b+D]*m;s[D]=F*W+O*k+M*f+x*$}return s}}const kx=new ti;class Hx extends _h{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return kx.fromArray(s).normalize().toArray(s),s}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eu={9728:xn,9729:Cn,9984:Iu,9985:pa,9986:gs,9987:Mi},Tu={33071:Vi,33648:Ta,10497:zr},Co={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zx={CUBICSPLINE:void 0,LINEAR:As,STEP:bs},Po={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Vx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ol({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),r.DefaultMaterial}function ir(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gx(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,m=e.length;h<m;h++){const _=e[h];if(_.POSITION!==void 0&&(n=!0),_.NORMAL!==void 0&&(i=!0),_.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],l=[],u=[];for(let h=0,m=e.length;h<m;h++){const _=e[h];if(n){const y=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):r.attributes.position;o.push(y)}if(i){const y=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):r.attributes.normal;l.push(y)}if(s){const y=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):r.attributes.color;u.push(y)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u)]).then(function(h){const m=h[0],_=h[1],y=h[2];return n&&(r.morphAttributes.position=m),i&&(r.morphAttributes.normal=_),s&&(r.morphAttributes.color=y),r.morphTargetsRelative=!0,r})}function Wx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xx(r){let e;const t=r.extensions&&r.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Do(t.attributes):e=r.indices+":"+Do(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Do(r.targets[n]);return e}function Do(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ml(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const qx=new ft;class Yx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const u=l.match(/Version\/(\d+)/);i=n&&u?parseInt(u[1],10):-1,s=l.indexOf("Firefox")>-1,o=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Qd(this.options.manager):this.textureLoader=new ap(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ch(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ir(s,l,i),yi(l,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let l=0,u=o.length;l<u;l++)e[o[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,l)=>{const u=this.associations.get(o);u!=null&&this.associations.set(l,u);for(const[h,m]of o.children.entries())s(m,l.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ys.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Co[i.type],l=Fr[i.componentType],u=i.normalized===!0,h=new l(i.count*o);return Promise.resolve(new yn(h,o,u))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const l=o[0],u=Co[i.type],h=Fr[i.componentType],m=h.BYTES_PER_ELEMENT,_=m*u,y=i.byteOffset||0,S=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let w,M;if(S&&S!==_){const x=Math.floor(y/S),F="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let O=t.cache.get(F);O||(w=new h(l,x*S,i.count*S/m),O=new wd(w,S/m),t.cache.add(F,O)),M=new Ll(O,u,y%S/m,b)}else l===null?w=new h(i.count*u):w=new h(l,y,i.count*u),M=new yn(w,u,b);if(i.sparse!==void 0){const x=Co.SCALAR,F=Fr[i.sparse.indices.componentType],O=i.sparse.indices.byteOffset||0,D=i.sparse.values.byteOffset||0,W=new F(o[1],O,i.sparse.count*x),k=new h(o[2],D,i.sparse.count*u);l!==null&&(M=new yn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let f=0,$=W.length;f<$;f++){const d=W[f];if(M.setX(d,k[f*u]),u>=2&&M.setY(d,k[f*u+1]),u>=3&&M.setZ(d,k[f*u+2]),u>=4&&M.setW(d,k[f*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let l=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(l=u)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],l=s.images[t],u=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(m){m.flipY=!1,m.name=o.name||l.name||"",m.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(m.name=l.uri);const y=(s.samplers||{})[o.sampler]||{};return m.magFilter=Eu[y.magFilter]||Cn,m.minFilter=Eu[y.minFilter]||Mi,m.wrapS=Tu[y.wrapS]||zr,m.wrapT=Tu[y.wrapT]||zr,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==xn&&m.minFilter!==Cn,i.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const o=i.images[e],l=self.URL||self.webkitURL;let u=o.uri||"",h=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(_){h=!0;const y=new Blob([_],{type:o.mimeType});return u=l.createObjectURL(y),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(u).then(function(_){return new Promise(function(y,S){let b=y;t.isImageBitmapLoader===!0&&(b=function(w){const M=new cn(w);M.needsUpdate=!0,y(M)}),t.load(ys.resolveURL(_,s.path),b,void 0,S)})}).then(function(_){return h===!0&&l.revokeObjectURL(u),yi(_,o),_.userData.mimeType=o.mimeType||jx(o.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),_});return this.sourceCache[e]=m,m}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=s.associations.get(o);o=s.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),s.associations.set(o,u)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new sh,ei.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new rh,ei.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(i||s||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),s&&(u.vertexColors=!0),o&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return Ol}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const l={},u=s.extensions||{},h=[];if(u[Mt.KHR_MATERIALS_UNLIT]){const _=i[Mt.KHR_MATERIALS_UNLIT];o=_.getMaterialType(),h.push(_.extendParams(l,s,t))}else{const _=s.pbrMetallicRoughness||{};if(l.color=new ct(1,1,1),l.opacity=1,Array.isArray(_.baseColorFactor)){const y=_.baseColorFactor;l.color.setRGB(y[0],y[1],y[2],Mn),l.opacity=y[3]}_.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",_.baseColorTexture,ln)),l.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,l.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",_.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",_.metallicRoughnessTexture))),o=this._invokeOne(function(y){return y.getMaterialType&&y.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(y){return y.extendMaterialParams&&y.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=Qn);const m=s.alphaMode||Po.OPAQUE;if(m===Po.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,m===Po.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==or&&(h.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new lt(1,1),s.normalTexture.scale!==void 0)){const _=s.normalTexture.scale;l.normalScale.set(_,_)}if(s.occlusionTexture!==void 0&&o!==or&&(h.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==or){const _=s.emissiveFactor;l.emissive=new ct().setRGB(_[0],_[1],_[2],Mn)}return s.emissiveTexture!==void 0&&o!==or&&h.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,ln)),Promise.all(h).then(function(){const _=new o(l);return s.name&&(_.name=s.name),yi(_,s),t.associations.set(_,{materials:e}),s.extensions&&ir(i,_,s),_})}createUniqueName(e){const t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(u){return bu(u,l,t)})}const o=[];for(let l=0,u=e.length;l<u;l++){const h=e[l],m=Xx(h),_=i[m];if(_)o.push(_.promise);else{let y;h.extensions&&h.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?y=s(h):y=bu(new si,h,t),i[m]={primitive:h,promise:y},o.push(y)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,l=[];for(let u=0,h=o.length;u<h;u++){const m=o[u].material===void 0?Vx(this.cache):this.getDependency("material",o[u].material);l.push(m)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(u){const h=u.slice(0,u.length-1),m=u[u.length-1],_=[];for(let S=0,b=m.length;S<b;S++){const w=m[S],M=o[S];let x;const F=h[S];if(M.mode===Un.TRIANGLES||M.mode===Un.TRIANGLE_STRIP||M.mode===Un.TRIANGLE_FAN||M.mode===void 0)x=s.isSkinnedMesh===!0?new Cd(w,F):new Pn(w,F),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),M.mode===Un.TRIANGLE_STRIP?x.geometry=Mu(x.geometry,Gu):M.mode===Un.TRIANGLE_FAN&&(x.geometry=Mu(x.geometry,ml));else if(M.mode===Un.LINES)x=new Ud(w,F);else if(M.mode===Un.LINE_STRIP)x=new Ul(w,F);else if(M.mode===Un.LINE_LOOP)x=new Od(w,F);else if(M.mode===Un.POINTS)x=new Fd(w,F);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(x.geometry.morphAttributes).length>0&&Wx(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),yi(x,s),M.extensions&&ir(i,x,M),t.assignFinalMaterial(x),_.push(x)}for(let S=0,b=_.length;S<b;S++)t.associations.set(_[S],{meshes:e,primitives:S});if(_.length===1)return s.extensions&&ir(i,_[0],s),_[0];const y=new lr;s.extensions&&ir(i,y,s),t.associations.set(y,{meshes:e});for(let S=0,b=_.length;S<b;S++)y.add(_[S]);return y})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(ju.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,l=[],u=[];for(let h=0,m=o.length;h<m;h++){const _=o[h];if(_){l.push(_);const y=new ft;s!==null&&y.fromArray(s.array,h*16),u.push(y)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Il(l,u)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],l=[],u=[],h=[],m=[];for(let _=0,y=i.channels.length;_<y;_++){const S=i.channels[_],b=i.samplers[S.sampler],w=S.target,M=w.node,x=i.parameters!==void 0?i.parameters[b.input]:b.input,F=i.parameters!==void 0?i.parameters[b.output]:b.output;w.node!==void 0&&(o.push(this.getDependency("node",M)),l.push(this.getDependency("accessor",x)),u.push(this.getDependency("accessor",F)),h.push(b),m.push(w))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(h),Promise.all(m)]).then(function(_){const y=_[0],S=_[1],b=_[2],w=_[3],M=_[4],x=[];for(let F=0,O=y.length;F<O;F++){const D=y[F],W=S[F],k=b[F],f=w[F],$=M[F];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const d=n._createAnimationTracks(D,W,k,f,$);if(d)for(let g=0;g<d.length;g++)x.push(d[g])}return new jd(s,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let u=0,h=i.weights.length;u<h;u++)l.morphTargetInfluences[u]=i.weights[u]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],l=i.children||[];for(let h=0,m=l.length;h<m;h++)o.push(n.getDependency("node",l[h]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),u]).then(function(h){const m=h[0],_=h[1],y=h[2];y!==null&&m.traverse(function(S){S.isSkinnedMesh&&S.bind(y,qx)});for(let S=0,b=_.length;S<b;S++)m.add(_[S]);return m})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",l=[],u=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&l.push(u),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let m;if(s.isBone===!0?m=new nh:h.length>1?m=new lr:h.length===1?m=h[0]:m=new qt,m!==h[0])for(let _=0,y=h.length;_<y;_++)m.add(h[_]);if(s.name&&(m.userData.name=s.name,m.name=o),yi(m,s),s.extensions&&ir(n,m,s),s.matrix!==void 0){const _=new ft;_.fromArray(s.matrix),m.applyMatrix4(_)}else s.translation!==void 0&&m.position.fromArray(s.translation),s.rotation!==void 0&&m.quaternion.fromArray(s.rotation),s.scale!==void 0&&m.scale.fromArray(s.scale);return i.associations.has(m)||i.associations.set(m,{}),i.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new lr;n.name&&(s.name=i.createUniqueName(n.name)),yi(s,n),n.extensions&&ir(t,s,n);const o=n.nodes||[],l=[];for(let u=0,h=o.length;u<h;u++)l.push(i.getDependency("node",o[u]));return Promise.all(l).then(function(u){for(let m=0,_=u.length;m<_;m++)s.add(u[m]);const h=m=>{const _=new Map;for(const[y,S]of i.associations)(y instanceof ei||y instanceof cn)&&_.set(y,S);return m.traverse(y=>{const S=i.associations.get(y);S!=null&&_.set(y,S)}),_};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],l=e.name?e.name:e.uuid,u=[];ki[s.path]===ki.weights?e.traverse(function(y){y.morphTargetInfluences&&u.push(y.name?y.name:y.uuid)}):u.push(l);let h;switch(ki[s.path]){case ki.weights:h=Wr;break;case ki.rotation:h=Xr;break;case ki.translation:case ki.scale:h=jr;break;default:switch(n.itemSize){case 1:h=Wr;break;case 2:case 3:default:h=jr;break}break}const m=i.interpolation!==void 0?zx[i.interpolation]:As,_=this._getArrayFromAccessor(n);for(let y=0,S=u.length;y<S;y++){const b=new h(u[y]+"."+ki[s.path],t.array,_,m);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),o.push(b)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ml(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Xr?Hx:_h;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Kx(r,e,t){const n=e.attributes,i=new ii;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],u=l.min,h=l.max;if(u!==void 0&&h!==void 0){if(i.set(new q(u[0],u[1],u[2]),new q(h[0],h[1],h[2])),l.normalized){const m=Ml(Fr[l.componentType]);i.min.multiplyScalar(m),i.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new q,u=new q;for(let h=0,m=s.length;h<m;h++){const _=s[h];if(_.POSITION!==void 0){const y=t.json.accessors[_.POSITION],S=y.min,b=y.max;if(S!==void 0&&b!==void 0){if(u.setX(Math.max(Math.abs(S[0]),Math.abs(b[0]))),u.setY(Math.max(Math.abs(S[1]),Math.abs(b[1]))),u.setZ(Math.max(Math.abs(S[2]),Math.abs(b[2]))),y.normalized){const w=Ml(Fr[y.componentType]);u.multiplyScalar(w)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const o=new ri;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function bu(r,e,t){const n=e.attributes,i=[];function s(o,l){return t.getDependency("accessor",o).then(function(u){r.setAttribute(l,u)})}for(const o in n){const l=yl[o]||o.toLowerCase();l in r.attributes||i.push(s(n[o],l))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(o)}return Ct.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),yi(r,e),Kx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Gx(r,e.targets,t):r})}function $x(){const r=document.getElementById("model-container");if(!r){console.error('No container with id "model-container" found');return}const e=document.getElementById("c");if(!e){console.error('No canvas element with id "c" found');return}const t=new ex({antialias:!0,canvas:e});t.outputColorSpace=ln,t.setSize(r.clientWidth,r.clientHeight),t.setClearColor(0),t.setPixelRatio(window.devicePixelRatio),t.shadowMap.enabled=!0,t.shadowMap.type=Pu;const n=new Ad;n.background=new ct(40288);const i=new vn(45,r.clientWidth/r.clientHeight,.1,100);i.position.set(5,2,5);const s=new nx(i,t.domElement);s.target.set(0,0,0),s.enableDamping=!0,s.dampingFactor=.05,s.enableZoom=!1,s.enablePan=!1,s.minDistance=3.5,s.maxDistance=3.5,s.maxPolarAngle=Math.PI/2,s.update();const o=new sp(16777215,.4);n.add(o);const l=new Ma(16777215,2);l.position.set(5,10,5),l.castShadow=!0,n.add(l);const u=new Ma(16777215,.6);u.position.set(-5,10,5),u.castShadow=!0,n.add(u);const h=new Ma(16777215,.6);h.position.set(0,10,-5),h.castShadow=!0,n.add(h);let m=null;new mx().setPath("/bloc/model/").load("bloc_model.gltf",M=>{console.log("Model loaded successfully",M),m=M.scene,m.scale.set(4,4,4),n.add(m);const x=new ii().setFromObject(m),F=x.getCenter(new q),O=x.getSize(new q);m.position.sub(F),m.position.y+=O.y*.5,s.target.copy(F),s.update();const D=Math.max(O.x,O.y,O.z),W=i.fov*(Math.PI/180),k=D/(2*Math.tan(W/2));i.position.set(F.x,F.y,F.z+k*1.2),i.lookAt(F),i.updateProjectionMatrix()},M=>{console.log(`Loading model: ${M.loaded/M.total*100}%`)},M=>{console.error("An error happened while loading the model:",M)});function S(M){const x=M.domElement,F=document.getElementById("model-container");if(!F)return console.error('No container with id "model-container" found'),!1;const O=F.clientWidth,D=F.clientHeight,W=x.width!==O||x.height!==D;return W&&(M.setSize(O,D,!1),i.aspect=O/D,i.updateProjectionMatrix()),W}function b(){S(t),t.render(n,i)}function w(){requestAnimationFrame(w),b()}w()}function Zx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ea={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Jx=Ea.exports,Au;function vh(){return Au||(Au=1,function(r){(function(e,t){r.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Jx,function(e,t){var n=[],i=Object.getPrototypeOf,s=n.slice,o=n.flat?function(a){return n.flat.call(a)}:function(a){return n.concat.apply([],a)},l=n.push,u=n.indexOf,h={},m=h.toString,_=h.hasOwnProperty,y=_.toString,S=y.call(Object),b={},w=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},M=function(c){return c!=null&&c===c.window},x=e.document,F={type:!0,src:!0,nonce:!0,noModule:!0};function O(a,c,p){p=p||x;var v,E,T=p.createElement("script");if(T.text=a,c)for(v in F)E=c[v]||c.getAttribute&&c.getAttribute(v),E&&T.setAttribute(v,E);p.head.appendChild(T).parentNode.removeChild(T)}function D(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?h[m.call(a)]||"object":typeof a}var W="3.7.1",k=/HTML$/i,f=function(a,c){return new f.fn.init(a,c)};f.fn=f.prototype={jquery:W,constructor:f,length:0,toArray:function(){return s.call(this)},get:function(a){return a==null?s.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var c=f.merge(this.constructor(),a);return c.prevObject=this,c},each:function(a){return f.each(this,a)},map:function(a){return this.pushStack(f.map(this,function(c,p){return a.call(c,p,c)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(f.grep(this,function(a,c){return(c+1)%2}))},odd:function(){return this.pushStack(f.grep(this,function(a,c){return c%2}))},eq:function(a){var c=this.length,p=+a+(a<0?c:0);return this.pushStack(p>=0&&p<c?[this[p]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},f.extend=f.fn.extend=function(){var a,c,p,v,E,T,R=arguments[0]||{},H=1,B=arguments.length,X=!1;for(typeof R=="boolean"&&(X=R,R=arguments[H]||{},H++),typeof R!="object"&&!w(R)&&(R={}),H===B&&(R=this,H--);H<B;H++)if((a=arguments[H])!=null)for(c in a)v=a[c],!(c==="__proto__"||R===v)&&(X&&v&&(f.isPlainObject(v)||(E=Array.isArray(v)))?(p=R[c],E&&!Array.isArray(p)?T=[]:!E&&!f.isPlainObject(p)?T={}:T=p,E=!1,R[c]=f.extend(X,T,v)):v!==void 0&&(R[c]=v));return R},f.extend({expando:"jQuery"+(W+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var c,p;return!a||m.call(a)!=="[object Object]"?!1:(c=i(a),c?(p=_.call(c,"constructor")&&c.constructor,typeof p=="function"&&y.call(p)===S):!0)},isEmptyObject:function(a){var c;for(c in a)return!1;return!0},globalEval:function(a,c,p){O(a,{nonce:c&&c.nonce},p)},each:function(a,c){var p,v=0;if($(a))for(p=a.length;v<p&&c.call(a[v],v,a[v])!==!1;v++);else for(v in a)if(c.call(a[v],v,a[v])===!1)break;return a},text:function(a){var c,p="",v=0,E=a.nodeType;if(!E)for(;c=a[v++];)p+=f.text(c);return E===1||E===11?a.textContent:E===9?a.documentElement.textContent:E===3||E===4?a.nodeValue:p},makeArray:function(a,c){var p=c||[];return a!=null&&($(Object(a))?f.merge(p,typeof a=="string"?[a]:a):l.call(p,a)),p},inArray:function(a,c,p){return c==null?-1:u.call(c,a,p)},isXMLDoc:function(a){var c=a&&a.namespaceURI,p=a&&(a.ownerDocument||a).documentElement;return!k.test(c||p&&p.nodeName||"HTML")},merge:function(a,c){for(var p=+c.length,v=0,E=a.length;v<p;v++)a[E++]=c[v];return a.length=E,a},grep:function(a,c,p){for(var v,E=[],T=0,R=a.length,H=!p;T<R;T++)v=!c(a[T],T),v!==H&&E.push(a[T]);return E},map:function(a,c,p){var v,E,T=0,R=[];if($(a))for(v=a.length;T<v;T++)E=c(a[T],T,p),E!=null&&R.push(E);else for(T in a)E=c(a[T],T,p),E!=null&&R.push(E);return o(R)},guid:1,support:b}),typeof Symbol=="function"&&(f.fn[Symbol.iterator]=n[Symbol.iterator]),f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,c){h["[object "+c+"]"]=c.toLowerCase()});function $(a){var c=!!a&&"length"in a&&a.length,p=D(a);return w(a)||M(a)?!1:p==="array"||c===0||typeof c=="number"&&c>0&&c-1 in a}function d(a,c){return a.nodeName&&a.nodeName.toLowerCase()===c.toLowerCase()}var g=n.pop,A=n.sort,L=n.splice,I="[\\x20\\t\\r\\n\\f]",V=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g");f.contains=function(a,c){var p=c&&c.parentNode;return a===p||!!(p&&p.nodeType===1&&(a.contains?a.contains(p):a.compareDocumentPosition&&a.compareDocumentPosition(p)&16))};var Z=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function te(a,c){return c?a==="\0"?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a}f.escapeSelector=function(a){return(a+"").replace(Z,te)};var le=x,ie=l;(function(){var a,c,p,v,E,T=ie,R,H,B,X,oe,de=f.expando,ne=0,ve=0,st=Os(),Rt=Os(),dt=Os(),un=Os(),en=function(N,G){return N===G&&(E=!0),0},qn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Yn="(?:\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",bt="\\["+I+"*("+Yn+")(?:"+I+"*([*^$|!~]?=)"+I+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Yn+"))|)"+I+"*\\]",Ki=":("+Yn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+bt+")*)|.*)\\)|)",Dt=new RegExp(I+"+","g"),Yt=new RegExp("^"+I+"*,"+I+"*"),rs=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),za=new RegExp(I+"|>"),Kn=new RegExp(Ki),ss=new RegExp("^"+Yn+"$"),$n={ID:new RegExp("^#("+Yn+")"),CLASS:new RegExp("^\\.("+Yn+")"),TAG:new RegExp("^("+Yn+"|[*])"),ATTR:new RegExp("^"+bt),PSEUDO:new RegExp("^"+Ki),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+qn+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Pi=/^(?:input|select|textarea|button)$/i,Di=/^h\d$/i,Ln=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Va=/[+~]/,hi=new RegExp("\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\([^\\r\\n\\f])","g"),fi=function(N,G){var ee="0x"+N.slice(1)-65536;return G||(ee<0?String.fromCharCode(ee+65536):String.fromCharCode(ee>>10|55296,ee&1023|56320))},Fh=function(){Li()},Bh=Bs(function(N){return N.disabled===!0&&d(N,"fieldset")},{dir:"parentNode",next:"legend"});function kh(){try{return R.activeElement}catch{}}try{T.apply(n=s.call(le.childNodes),le.childNodes),n[le.childNodes.length].nodeType}catch{T={apply:function(G,ee){ie.apply(G,s.call(ee))},call:function(G){ie.apply(G,s.call(arguments,1))}}}function Bt(N,G,ee,ae){var fe,Me,Le,Ge,Ie,xt,tt,ot=G&&G.ownerDocument,yt=G?G.nodeType:9;if(ee=ee||[],typeof N!="string"||!N||yt!==1&&yt!==9&&yt!==11)return ee;if(!ae&&(Li(G),G=G||R,B)){if(yt!==11&&(Ie=Ln.exec(N)))if(fe=Ie[1]){if(yt===9)if(Le=G.getElementById(fe)){if(Le.id===fe)return T.call(ee,Le),ee}else return ee;else if(ot&&(Le=ot.getElementById(fe))&&Bt.contains(G,Le)&&Le.id===fe)return T.call(ee,Le),ee}else{if(Ie[2])return T.apply(ee,G.getElementsByTagName(N)),ee;if((fe=Ie[3])&&G.getElementsByClassName)return T.apply(ee,G.getElementsByClassName(fe)),ee}if(!un[N+" "]&&(!X||!X.test(N))){if(tt=N,ot=G,yt===1&&(za.test(N)||rs.test(N))){for(ot=Va.test(N)&&Ga(G.parentNode)||G,(ot!=G||!b.scope)&&((Ge=G.getAttribute("id"))?Ge=f.escapeSelector(Ge):G.setAttribute("id",Ge=de)),xt=as(N),Me=xt.length;Me--;)xt[Me]=(Ge?"#"+Ge:":scope")+" "+Fs(xt[Me]);tt=xt.join(",")}try{return T.apply(ee,ot.querySelectorAll(tt)),ee}catch{un(N,!0)}finally{Ge===de&&G.removeAttribute("id")}}}return ec(N.replace(V,"$1"),G,ee,ae)}function Os(){var N=[];function G(ee,ae){return N.push(ee+" ")>c.cacheLength&&delete G[N.shift()],G[ee+" "]=ae}return G}function Bn(N){return N[de]=!0,N}function mr(N){var G=R.createElement("fieldset");try{return!!N(G)}catch{return!1}finally{G.parentNode&&G.parentNode.removeChild(G),G=null}}function Hh(N){return function(G){return d(G,"input")&&G.type===N}}function zh(N){return function(G){return(d(G,"input")||d(G,"button"))&&G.type===N}}function Jl(N){return function(G){return"form"in G?G.parentNode&&G.disabled===!1?"label"in G?"label"in G.parentNode?G.parentNode.disabled===N:G.disabled===N:G.isDisabled===N||G.isDisabled!==!N&&Bh(G)===N:G.disabled===N:"label"in G?G.disabled===N:!1}}function $i(N){return Bn(function(G){return G=+G,Bn(function(ee,ae){for(var fe,Me=N([],ee.length,G),Le=Me.length;Le--;)ee[fe=Me[Le]]&&(ee[fe]=!(ae[fe]=ee[fe]))})})}function Ga(N){return N&&typeof N.getElementsByTagName<"u"&&N}function Li(N){var G,ee=N?N.ownerDocument||N:le;return ee==R||ee.nodeType!==9||!ee.documentElement||(R=ee,H=R.documentElement,B=!f.isXMLDoc(R),oe=H.matches||H.webkitMatchesSelector||H.msMatchesSelector,H.msMatchesSelector&&le!=R&&(G=R.defaultView)&&G.top!==G&&G.addEventListener("unload",Fh),b.getById=mr(function(ae){return H.appendChild(ae).id=f.expando,!R.getElementsByName||!R.getElementsByName(f.expando).length}),b.disconnectedMatch=mr(function(ae){return oe.call(ae,"*")}),b.scope=mr(function(){return R.querySelectorAll(":scope")}),b.cssHas=mr(function(){try{return R.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),b.getById?(c.filter.ID=function(ae){var fe=ae.replace(hi,fi);return function(Me){return Me.getAttribute("id")===fe}},c.find.ID=function(ae,fe){if(typeof fe.getElementById<"u"&&B){var Me=fe.getElementById(ae);return Me?[Me]:[]}}):(c.filter.ID=function(ae){var fe=ae.replace(hi,fi);return function(Me){var Le=typeof Me.getAttributeNode<"u"&&Me.getAttributeNode("id");return Le&&Le.value===fe}},c.find.ID=function(ae,fe){if(typeof fe.getElementById<"u"&&B){var Me,Le,Ge,Ie=fe.getElementById(ae);if(Ie){if(Me=Ie.getAttributeNode("id"),Me&&Me.value===ae)return[Ie];for(Ge=fe.getElementsByName(ae),Le=0;Ie=Ge[Le++];)if(Me=Ie.getAttributeNode("id"),Me&&Me.value===ae)return[Ie]}return[]}}),c.find.TAG=function(ae,fe){return typeof fe.getElementsByTagName<"u"?fe.getElementsByTagName(ae):fe.querySelectorAll(ae)},c.find.CLASS=function(ae,fe){if(typeof fe.getElementsByClassName<"u"&&B)return fe.getElementsByClassName(ae)},X=[],mr(function(ae){var fe;H.appendChild(ae).innerHTML="<a id='"+de+"' href='' disabled='disabled'></a><select id='"+de+"-\r\\' disabled='disabled'><option selected=''></option></select>",ae.querySelectorAll("[selected]").length||X.push("\\["+I+"*(?:value|"+qn+")"),ae.querySelectorAll("[id~="+de+"-]").length||X.push("~="),ae.querySelectorAll("a#"+de+"+*").length||X.push(".#.+[+~]"),ae.querySelectorAll(":checked").length||X.push(":checked"),fe=R.createElement("input"),fe.setAttribute("type","hidden"),ae.appendChild(fe).setAttribute("name","D"),H.appendChild(ae).disabled=!0,ae.querySelectorAll(":disabled").length!==2&&X.push(":enabled",":disabled"),fe=R.createElement("input"),fe.setAttribute("name",""),ae.appendChild(fe),ae.querySelectorAll("[name='']").length||X.push("\\["+I+"*name"+I+"*="+I+`*(?:''|"")`)}),b.cssHas||X.push(":has"),X=X.length&&new RegExp(X.join("|")),en=function(ae,fe){if(ae===fe)return E=!0,0;var Me=!ae.compareDocumentPosition-!fe.compareDocumentPosition;return Me||(Me=(ae.ownerDocument||ae)==(fe.ownerDocument||fe)?ae.compareDocumentPosition(fe):1,Me&1||!b.sortDetached&&fe.compareDocumentPosition(ae)===Me?ae===R||ae.ownerDocument==le&&Bt.contains(le,ae)?-1:fe===R||fe.ownerDocument==le&&Bt.contains(le,fe)?1:v?u.call(v,ae)-u.call(v,fe):0:Me&4?-1:1)}),R}Bt.matches=function(N,G){return Bt(N,null,null,G)},Bt.matchesSelector=function(N,G){if(Li(N),B&&!un[G+" "]&&(!X||!X.test(G)))try{var ee=oe.call(N,G);if(ee||b.disconnectedMatch||N.document&&N.document.nodeType!==11)return ee}catch{un(G,!0)}return Bt(G,R,null,[N]).length>0},Bt.contains=function(N,G){return(N.ownerDocument||N)!=R&&Li(N),f.contains(N,G)},Bt.attr=function(N,G){(N.ownerDocument||N)!=R&&Li(N);var ee=c.attrHandle[G.toLowerCase()],ae=ee&&_.call(c.attrHandle,G.toLowerCase())?ee(N,G,!B):void 0;return ae!==void 0?ae:N.getAttribute(G)},Bt.error=function(N){throw new Error("Syntax error, unrecognized expression: "+N)},f.uniqueSort=function(N){var G,ee=[],ae=0,fe=0;if(E=!b.sortStable,v=!b.sortStable&&s.call(N,0),A.call(N,en),E){for(;G=N[fe++];)G===N[fe]&&(ae=ee.push(fe));for(;ae--;)L.call(N,ee[ae],1)}return v=null,N},f.fn.uniqueSort=function(){return this.pushStack(f.uniqueSort(s.apply(this)))},c=f.expr={cacheLength:50,createPseudo:Bn,match:$n,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(N){return N[1]=N[1].replace(hi,fi),N[3]=(N[3]||N[4]||N[5]||"").replace(hi,fi),N[2]==="~="&&(N[3]=" "+N[3]+" "),N.slice(0,4)},CHILD:function(N){return N[1]=N[1].toLowerCase(),N[1].slice(0,3)==="nth"?(N[3]||Bt.error(N[0]),N[4]=+(N[4]?N[5]+(N[6]||1):2*(N[3]==="even"||N[3]==="odd")),N[5]=+(N[7]+N[8]||N[3]==="odd")):N[3]&&Bt.error(N[0]),N},PSEUDO:function(N){var G,ee=!N[6]&&N[2];return $n.CHILD.test(N[0])?null:(N[3]?N[2]=N[4]||N[5]||"":ee&&Kn.test(ee)&&(G=as(ee,!0))&&(G=ee.indexOf(")",ee.length-G)-ee.length)&&(N[0]=N[0].slice(0,G),N[2]=ee.slice(0,G)),N.slice(0,3))}},filter:{TAG:function(N){var G=N.replace(hi,fi).toLowerCase();return N==="*"?function(){return!0}:function(ee){return d(ee,G)}},CLASS:function(N){var G=st[N+" "];return G||(G=new RegExp("(^|"+I+")"+N+"("+I+"|$)"))&&st(N,function(ee){return G.test(typeof ee.className=="string"&&ee.className||typeof ee.getAttribute<"u"&&ee.getAttribute("class")||"")})},ATTR:function(N,G,ee){return function(ae){var fe=Bt.attr(ae,N);return fe==null?G==="!=":G?(fe+="",G==="="?fe===ee:G==="!="?fe!==ee:G==="^="?ee&&fe.indexOf(ee)===0:G==="*="?ee&&fe.indexOf(ee)>-1:G==="$="?ee&&fe.slice(-ee.length)===ee:G==="~="?(" "+fe.replace(Dt," ")+" ").indexOf(ee)>-1:G==="|="?fe===ee||fe.slice(0,ee.length+1)===ee+"-":!1):!0}},CHILD:function(N,G,ee,ae,fe){var Me=N.slice(0,3)!=="nth",Le=N.slice(-4)!=="last",Ge=G==="of-type";return ae===1&&fe===0?function(Ie){return!!Ie.parentNode}:function(Ie,xt,tt){var ot,yt,Je,Wt,Tn,hn=Me!==Le?"nextSibling":"previousSibling",In=Ie.parentNode,Zn=Ge&&Ie.nodeName.toLowerCase(),gr=!tt&&!Ge,mn=!1;if(In){if(Me){for(;hn;){for(Je=Ie;Je=Je[hn];)if(Ge?d(Je,Zn):Je.nodeType===1)return!1;Tn=hn=N==="only"&&!Tn&&"nextSibling"}return!0}if(Tn=[Le?In.firstChild:In.lastChild],Le&&gr){for(yt=In[de]||(In[de]={}),ot=yt[N]||[],Wt=ot[0]===ne&&ot[1],mn=Wt&&ot[2],Je=Wt&&In.childNodes[Wt];Je=++Wt&&Je&&Je[hn]||(mn=Wt=0)||Tn.pop();)if(Je.nodeType===1&&++mn&&Je===Ie){yt[N]=[ne,Wt,mn];break}}else if(gr&&(yt=Ie[de]||(Ie[de]={}),ot=yt[N]||[],Wt=ot[0]===ne&&ot[1],mn=Wt),mn===!1)for(;(Je=++Wt&&Je&&Je[hn]||(mn=Wt=0)||Tn.pop())&&!((Ge?d(Je,Zn):Je.nodeType===1)&&++mn&&(gr&&(yt=Je[de]||(Je[de]={}),yt[N]=[ne,mn]),Je===Ie)););return mn-=fe,mn===ae||mn%ae===0&&mn/ae>=0}}},PSEUDO:function(N,G){var ee,ae=c.pseudos[N]||c.setFilters[N.toLowerCase()]||Bt.error("unsupported pseudo: "+N);return ae[de]?ae(G):ae.length>1?(ee=[N,N,"",G],c.setFilters.hasOwnProperty(N.toLowerCase())?Bn(function(fe,Me){for(var Le,Ge=ae(fe,G),Ie=Ge.length;Ie--;)Le=u.call(fe,Ge[Ie]),fe[Le]=!(Me[Le]=Ge[Ie])}):function(fe){return ae(fe,0,ee)}):ae}},pseudos:{not:Bn(function(N){var G=[],ee=[],ae=qa(N.replace(V,"$1"));return ae[de]?Bn(function(fe,Me,Le,Ge){for(var Ie,xt=ae(fe,null,Ge,[]),tt=fe.length;tt--;)(Ie=xt[tt])&&(fe[tt]=!(Me[tt]=Ie))}):function(fe,Me,Le){return G[0]=fe,ae(G,null,Le,ee),G[0]=null,!ee.pop()}}),has:Bn(function(N){return function(G){return Bt(N,G).length>0}}),contains:Bn(function(N){return N=N.replace(hi,fi),function(G){return(G.textContent||f.text(G)).indexOf(N)>-1}}),lang:Bn(function(N){return ss.test(N||"")||Bt.error("unsupported lang: "+N),N=N.replace(hi,fi).toLowerCase(),function(G){var ee;do if(ee=B?G.lang:G.getAttribute("xml:lang")||G.getAttribute("lang"))return ee=ee.toLowerCase(),ee===N||ee.indexOf(N+"-")===0;while((G=G.parentNode)&&G.nodeType===1);return!1}}),target:function(N){var G=e.location&&e.location.hash;return G&&G.slice(1)===N.id},root:function(N){return N===H},focus:function(N){return N===kh()&&R.hasFocus()&&!!(N.type||N.href||~N.tabIndex)},enabled:Jl(!1),disabled:Jl(!0),checked:function(N){return d(N,"input")&&!!N.checked||d(N,"option")&&!!N.selected},selected:function(N){return N.parentNode&&N.parentNode.selectedIndex,N.selected===!0},empty:function(N){for(N=N.firstChild;N;N=N.nextSibling)if(N.nodeType<6)return!1;return!0},parent:function(N){return!c.pseudos.empty(N)},header:function(N){return Di.test(N.nodeName)},input:function(N){return Pi.test(N.nodeName)},button:function(N){return d(N,"input")&&N.type==="button"||d(N,"button")},text:function(N){var G;return d(N,"input")&&N.type==="text"&&((G=N.getAttribute("type"))==null||G.toLowerCase()==="text")},first:$i(function(){return[0]}),last:$i(function(N,G){return[G-1]}),eq:$i(function(N,G,ee){return[ee<0?ee+G:ee]}),even:$i(function(N,G){for(var ee=0;ee<G;ee+=2)N.push(ee);return N}),odd:$i(function(N,G){for(var ee=1;ee<G;ee+=2)N.push(ee);return N}),lt:$i(function(N,G,ee){var ae;for(ee<0?ae=ee+G:ee>G?ae=G:ae=ee;--ae>=0;)N.push(ae);return N}),gt:$i(function(N,G,ee){for(var ae=ee<0?ee+G:ee;++ae<G;)N.push(ae);return N})}},c.pseudos.nth=c.pseudos.eq;for(a in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[a]=Hh(a);for(a in{submit:!0,reset:!0})c.pseudos[a]=zh(a);function Ql(){}Ql.prototype=c.filters=c.pseudos,c.setFilters=new Ql;function as(N,G){var ee,ae,fe,Me,Le,Ge,Ie,xt=Rt[N+" "];if(xt)return G?0:xt.slice(0);for(Le=N,Ge=[],Ie=c.preFilter;Le;){(!ee||(ae=Yt.exec(Le)))&&(ae&&(Le=Le.slice(ae[0].length)||Le),Ge.push(fe=[])),ee=!1,(ae=rs.exec(Le))&&(ee=ae.shift(),fe.push({value:ee,type:ae[0].replace(V," ")}),Le=Le.slice(ee.length));for(Me in c.filter)(ae=$n[Me].exec(Le))&&(!Ie[Me]||(ae=Ie[Me](ae)))&&(ee=ae.shift(),fe.push({value:ee,type:Me,matches:ae}),Le=Le.slice(ee.length));if(!ee)break}return G?Le.length:Le?Bt.error(N):Rt(N,Ge).slice(0)}function Fs(N){for(var G=0,ee=N.length,ae="";G<ee;G++)ae+=N[G].value;return ae}function Bs(N,G,ee){var ae=G.dir,fe=G.next,Me=fe||ae,Le=ee&&Me==="parentNode",Ge=ve++;return G.first?function(Ie,xt,tt){for(;Ie=Ie[ae];)if(Ie.nodeType===1||Le)return N(Ie,xt,tt);return!1}:function(Ie,xt,tt){var ot,yt,Je=[ne,Ge];if(tt){for(;Ie=Ie[ae];)if((Ie.nodeType===1||Le)&&N(Ie,xt,tt))return!0}else for(;Ie=Ie[ae];)if(Ie.nodeType===1||Le)if(yt=Ie[de]||(Ie[de]={}),fe&&d(Ie,fe))Ie=Ie[ae]||Ie;else{if((ot=yt[Me])&&ot[0]===ne&&ot[1]===Ge)return Je[2]=ot[2];if(yt[Me]=Je,Je[2]=N(Ie,xt,tt))return!0}return!1}}function Wa(N){return N.length>1?function(G,ee,ae){for(var fe=N.length;fe--;)if(!N[fe](G,ee,ae))return!1;return!0}:N[0]}function Vh(N,G,ee){for(var ae=0,fe=G.length;ae<fe;ae++)Bt(N,G[ae],ee);return ee}function ks(N,G,ee,ae,fe){for(var Me,Le=[],Ge=0,Ie=N.length,xt=G!=null;Ge<Ie;Ge++)(Me=N[Ge])&&(!ee||ee(Me,ae,fe))&&(Le.push(Me),xt&&G.push(Ge));return Le}function Xa(N,G,ee,ae,fe,Me){return ae&&!ae[de]&&(ae=Xa(ae)),fe&&!fe[de]&&(fe=Xa(fe,Me)),Bn(function(Le,Ge,Ie,xt){var tt,ot,yt,Je,Wt=[],Tn=[],hn=Ge.length,In=Le||Vh(G||"*",Ie.nodeType?[Ie]:Ie,[]),Zn=N&&(Le||!G)?ks(In,Wt,N,Ie,xt):In;if(ee?(Je=fe||(Le?N:hn||ae)?[]:Ge,ee(Zn,Je,Ie,xt)):Je=Zn,ae)for(tt=ks(Je,Tn),ae(tt,[],Ie,xt),ot=tt.length;ot--;)(yt=tt[ot])&&(Je[Tn[ot]]=!(Zn[Tn[ot]]=yt));if(Le){if(fe||N){if(fe){for(tt=[],ot=Je.length;ot--;)(yt=Je[ot])&&tt.push(Zn[ot]=yt);fe(null,Je=[],tt,xt)}for(ot=Je.length;ot--;)(yt=Je[ot])&&(tt=fe?u.call(Le,yt):Wt[ot])>-1&&(Le[tt]=!(Ge[tt]=yt))}}else Je=ks(Je===Ge?Je.splice(hn,Je.length):Je),fe?fe(null,Ge,Je,xt):T.apply(Ge,Je)})}function ja(N){for(var G,ee,ae,fe=N.length,Me=c.relative[N[0].type],Le=Me||c.relative[" "],Ge=Me?1:0,Ie=Bs(function(ot){return ot===G},Le,!0),xt=Bs(function(ot){return u.call(G,ot)>-1},Le,!0),tt=[function(ot,yt,Je){var Wt=!Me&&(Je||yt!=p)||((G=yt).nodeType?Ie(ot,yt,Je):xt(ot,yt,Je));return G=null,Wt}];Ge<fe;Ge++)if(ee=c.relative[N[Ge].type])tt=[Bs(Wa(tt),ee)];else{if(ee=c.filter[N[Ge].type].apply(null,N[Ge].matches),ee[de]){for(ae=++Ge;ae<fe&&!c.relative[N[ae].type];ae++);return Xa(Ge>1&&Wa(tt),Ge>1&&Fs(N.slice(0,Ge-1).concat({value:N[Ge-2].type===" "?"*":""})).replace(V,"$1"),ee,Ge<ae&&ja(N.slice(Ge,ae)),ae<fe&&ja(N=N.slice(ae)),ae<fe&&Fs(N))}tt.push(ee)}return Wa(tt)}function Gh(N,G){var ee=G.length>0,ae=N.length>0,fe=function(Me,Le,Ge,Ie,xt){var tt,ot,yt,Je=0,Wt="0",Tn=Me&&[],hn=[],In=p,Zn=Me||ae&&c.find.TAG("*",xt),gr=ne+=In==null?1:Math.random()||.1,mn=Zn.length;for(xt&&(p=Le==R||Le||xt);Wt!==mn&&(tt=Zn[Wt])!=null;Wt++){if(ae&&tt){for(ot=0,!Le&&tt.ownerDocument!=R&&(Li(tt),Ge=!B);yt=N[ot++];)if(yt(tt,Le||R,Ge)){T.call(Ie,tt);break}xt&&(ne=gr)}ee&&((tt=!yt&&tt)&&Je--,Me&&Tn.push(tt))}if(Je+=Wt,ee&&Wt!==Je){for(ot=0;yt=G[ot++];)yt(Tn,hn,Le,Ge);if(Me){if(Je>0)for(;Wt--;)Tn[Wt]||hn[Wt]||(hn[Wt]=g.call(Ie));hn=ks(hn)}T.apply(Ie,hn),xt&&!Me&&hn.length>0&&Je+G.length>1&&f.uniqueSort(Ie)}return xt&&(ne=gr,p=In),Tn};return ee?Bn(fe):fe}function qa(N,G){var ee,ae=[],fe=[],Me=dt[N+" "];if(!Me){for(G||(G=as(N)),ee=G.length;ee--;)Me=ja(G[ee]),Me[de]?ae.push(Me):fe.push(Me);Me=dt(N,Gh(fe,ae)),Me.selector=N}return Me}function ec(N,G,ee,ae){var fe,Me,Le,Ge,Ie,xt=typeof N=="function"&&N,tt=!ae&&as(N=xt.selector||N);if(ee=ee||[],tt.length===1){if(Me=tt[0]=tt[0].slice(0),Me.length>2&&(Le=Me[0]).type==="ID"&&G.nodeType===9&&B&&c.relative[Me[1].type]){if(G=(c.find.ID(Le.matches[0].replace(hi,fi),G)||[])[0],G)xt&&(G=G.parentNode);else return ee;N=N.slice(Me.shift().value.length)}for(fe=$n.needsContext.test(N)?0:Me.length;fe--&&(Le=Me[fe],!c.relative[Ge=Le.type]);)if((Ie=c.find[Ge])&&(ae=Ie(Le.matches[0].replace(hi,fi),Va.test(Me[0].type)&&Ga(G.parentNode)||G))){if(Me.splice(fe,1),N=ae.length&&Fs(Me),!N)return T.apply(ee,ae),ee;break}}return(xt||qa(N,tt))(ae,G,!B,ee,!G||Va.test(N)&&Ga(G.parentNode)||G),ee}b.sortStable=de.split("").sort(en).join("")===de,Li(),b.sortDetached=mr(function(N){return N.compareDocumentPosition(R.createElement("fieldset"))&1}),f.find=Bt,f.expr[":"]=f.expr.pseudos,f.unique=f.uniqueSort,Bt.compile=qa,Bt.select=ec,Bt.setDocument=Li,Bt.tokenize=as,Bt.escape=f.escapeSelector,Bt.getText=f.text,Bt.isXML=f.isXMLDoc,Bt.selectors=f.expr,Bt.support=f.support,Bt.uniqueSort=f.uniqueSort})();var ge=function(a,c,p){for(var v=[],E=p!==void 0;(a=a[c])&&a.nodeType!==9;)if(a.nodeType===1){if(E&&f(a).is(p))break;v.push(a)}return v},Ee=function(a,c){for(var p=[];a;a=a.nextSibling)a.nodeType===1&&a!==c&&p.push(a);return p},Se=f.expr.match.needsContext,ke=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Qe(a,c,p){return w(c)?f.grep(a,function(v,E){return!!c.call(v,E,v)!==p}):c.nodeType?f.grep(a,function(v){return v===c!==p}):typeof c!="string"?f.grep(a,function(v){return u.call(c,v)>-1!==p}):f.filter(c,a,p)}f.filter=function(a,c,p){var v=c[0];return p&&(a=":not("+a+")"),c.length===1&&v.nodeType===1?f.find.matchesSelector(v,a)?[v]:[]:f.find.matches(a,f.grep(c,function(E){return E.nodeType===1}))},f.fn.extend({find:function(a){var c,p,v=this.length,E=this;if(typeof a!="string")return this.pushStack(f(a).filter(function(){for(c=0;c<v;c++)if(f.contains(E[c],this))return!0}));for(p=this.pushStack([]),c=0;c<v;c++)f.find(a,E[c],p);return v>1?f.uniqueSort(p):p},filter:function(a){return this.pushStack(Qe(this,a||[],!1))},not:function(a){return this.pushStack(Qe(this,a||[],!0))},is:function(a){return!!Qe(this,typeof a=="string"&&Se.test(a)?f(a):a||[],!1).length}});var he,_e=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,be=f.fn.init=function(a,c,p){var v,E;if(!a)return this;if(p=p||he,typeof a=="string")if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3?v=[null,a,null]:v=_e.exec(a),v&&(v[1]||!c))if(v[1]){if(c=c instanceof f?c[0]:c,f.merge(this,f.parseHTML(v[1],c&&c.nodeType?c.ownerDocument||c:x,!0)),ke.test(v[1])&&f.isPlainObject(c))for(v in c)w(this[v])?this[v](c[v]):this.attr(v,c[v]);return this}else return E=x.getElementById(v[2]),E&&(this[0]=E,this.length=1),this;else return!c||c.jquery?(c||p).find(a):this.constructor(c).find(a);else{if(a.nodeType)return this[0]=a,this.length=1,this;if(w(a))return p.ready!==void 0?p.ready(a):a(f)}return f.makeArray(a,this)};be.prototype=f.fn,he=f(x);var Te=/^(?:parents|prev(?:Until|All))/,qe={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({has:function(a){var c=f(a,this),p=c.length;return this.filter(function(){for(var v=0;v<p;v++)if(f.contains(this,c[v]))return!0})},closest:function(a,c){var p,v=0,E=this.length,T=[],R=typeof a!="string"&&f(a);if(!Se.test(a)){for(;v<E;v++)for(p=this[v];p&&p!==c;p=p.parentNode)if(p.nodeType<11&&(R?R.index(p)>-1:p.nodeType===1&&f.find.matchesSelector(p,a))){T.push(p);break}}return this.pushStack(T.length>1?f.uniqueSort(T):T)},index:function(a){return a?typeof a=="string"?u.call(f(a),this[0]):u.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,c){return this.pushStack(f.uniqueSort(f.merge(this.get(),f(a,c))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function ut(a,c){for(;(a=a[c])&&a.nodeType!==1;);return a}f.each({parent:function(a){var c=a.parentNode;return c&&c.nodeType!==11?c:null},parents:function(a){return ge(a,"parentNode")},parentsUntil:function(a,c,p){return ge(a,"parentNode",p)},next:function(a){return ut(a,"nextSibling")},prev:function(a){return ut(a,"previousSibling")},nextAll:function(a){return ge(a,"nextSibling")},prevAll:function(a){return ge(a,"previousSibling")},nextUntil:function(a,c,p){return ge(a,"nextSibling",p)},prevUntil:function(a,c,p){return ge(a,"previousSibling",p)},siblings:function(a){return Ee((a.parentNode||{}).firstChild,a)},children:function(a){return Ee(a.firstChild)},contents:function(a){return a.contentDocument!=null&&i(a.contentDocument)?a.contentDocument:(d(a,"template")&&(a=a.content||a),f.merge([],a.childNodes))}},function(a,c){f.fn[a]=function(p,v){var E=f.map(this,c,p);return a.slice(-5)!=="Until"&&(v=p),v&&typeof v=="string"&&(E=f.filter(v,E)),this.length>1&&(qe[a]||f.uniqueSort(E),Te.test(a)&&E.reverse()),this.pushStack(E)}});var He=/[^\x20\t\r\n\f]+/g;function Ot(a){var c={};return f.each(a.match(He)||[],function(p,v){c[v]=!0}),c}f.Callbacks=function(a){a=typeof a=="string"?Ot(a):f.extend({},a);var c,p,v,E,T=[],R=[],H=-1,B=function(){for(E=E||a.once,v=c=!0;R.length;H=-1)for(p=R.shift();++H<T.length;)T[H].apply(p[0],p[1])===!1&&a.stopOnFalse&&(H=T.length,p=!1);a.memory||(p=!1),c=!1,E&&(p?T=[]:T="")},X={add:function(){return T&&(p&&!c&&(H=T.length-1,R.push(p)),function oe(de){f.each(de,function(ne,ve){w(ve)?(!a.unique||!X.has(ve))&&T.push(ve):ve&&ve.length&&D(ve)!=="string"&&oe(ve)})}(arguments),p&&!c&&B()),this},remove:function(){return f.each(arguments,function(oe,de){for(var ne;(ne=f.inArray(de,T,ne))>-1;)T.splice(ne,1),ne<=H&&H--}),this},has:function(oe){return oe?f.inArray(oe,T)>-1:T.length>0},empty:function(){return T&&(T=[]),this},disable:function(){return E=R=[],T=p="",this},disabled:function(){return!T},lock:function(){return E=R=[],!p&&!c&&(T=p=""),this},locked:function(){return!!E},fireWith:function(oe,de){return E||(de=de||[],de=[oe,de.slice?de.slice():de],R.push(de),c||B()),this},fire:function(){return X.fireWith(this,arguments),this},fired:function(){return!!v}};return X};function At(a){return a}function Ye(a){throw a}function z(a,c,p,v){var E;try{a&&w(E=a.promise)?E.call(a).done(c).fail(p):a&&w(E=a.then)?E.call(a,c,p):c.apply(void 0,[a].slice(v))}catch(T){p.apply(void 0,[T])}}f.extend({Deferred:function(a){var c=[["notify","progress",f.Callbacks("memory"),f.Callbacks("memory"),2],["resolve","done",f.Callbacks("once memory"),f.Callbacks("once memory"),0,"resolved"],["reject","fail",f.Callbacks("once memory"),f.Callbacks("once memory"),1,"rejected"]],p="pending",v={state:function(){return p},always:function(){return E.done(arguments).fail(arguments),this},catch:function(T){return v.then(null,T)},pipe:function(){var T=arguments;return f.Deferred(function(R){f.each(c,function(H,B){var X=w(T[B[4]])&&T[B[4]];E[B[1]](function(){var oe=X&&X.apply(this,arguments);oe&&w(oe.promise)?oe.promise().progress(R.notify).done(R.resolve).fail(R.reject):R[B[0]+"With"](this,X?[oe]:arguments)})}),T=null}).promise()},then:function(T,R,H){var B=0;function X(oe,de,ne,ve){return function(){var st=this,Rt=arguments,dt=function(){var en,qn;if(!(oe<B)){if(en=ne.apply(st,Rt),en===de.promise())throw new TypeError("Thenable self-resolution");qn=en&&(typeof en=="object"||typeof en=="function")&&en.then,w(qn)?ve?qn.call(en,X(B,de,At,ve),X(B,de,Ye,ve)):(B++,qn.call(en,X(B,de,At,ve),X(B,de,Ye,ve),X(B,de,At,de.notifyWith))):(ne!==At&&(st=void 0,Rt=[en]),(ve||de.resolveWith)(st,Rt))}},un=ve?dt:function(){try{dt()}catch(en){f.Deferred.exceptionHook&&f.Deferred.exceptionHook(en,un.error),oe+1>=B&&(ne!==Ye&&(st=void 0,Rt=[en]),de.rejectWith(st,Rt))}};oe?un():(f.Deferred.getErrorHook?un.error=f.Deferred.getErrorHook():f.Deferred.getStackHook&&(un.error=f.Deferred.getStackHook()),e.setTimeout(un))}}return f.Deferred(function(oe){c[0][3].add(X(0,oe,w(H)?H:At,oe.notifyWith)),c[1][3].add(X(0,oe,w(T)?T:At)),c[2][3].add(X(0,oe,w(R)?R:Ye))}).promise()},promise:function(T){return T!=null?f.extend(T,v):v}},E={};return f.each(c,function(T,R){var H=R[2],B=R[5];v[R[1]]=H.add,B&&H.add(function(){p=B},c[3-T][2].disable,c[3-T][3].disable,c[0][2].lock,c[0][3].lock),H.add(R[3].fire),E[R[0]]=function(){return E[R[0]+"With"](this===E?void 0:this,arguments),this},E[R[0]+"With"]=H.fireWith}),v.promise(E),a&&a.call(E,E),E},when:function(a){var c=arguments.length,p=c,v=Array(p),E=s.call(arguments),T=f.Deferred(),R=function(H){return function(B){v[H]=this,E[H]=arguments.length>1?s.call(arguments):B,--c||T.resolveWith(v,E)}};if(c<=1&&(z(a,T.done(R(p)).resolve,T.reject,!c),T.state()==="pending"||w(E[p]&&E[p].then)))return T.then();for(;p--;)z(E[p],R(p),T.reject);return T.promise()}});var It=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;f.Deferred.exceptionHook=function(a,c){e.console&&e.console.warn&&a&&It.test(a.name)&&e.console.warn("jQuery.Deferred exception: "+a.message,a.stack,c)},f.readyException=function(a){e.setTimeout(function(){throw a})};var rt=f.Deferred();f.fn.ready=function(a){return rt.then(a).catch(function(c){f.readyException(c)}),this},f.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--f.readyWait:f.isReady)||(f.isReady=!0,!(a!==!0&&--f.readyWait>0)&&rt.resolveWith(x,[f]))}}),f.ready.then=rt.then;function nt(){x.removeEventListener("DOMContentLoaded",nt),e.removeEventListener("load",nt),f.ready()}x.readyState==="complete"||x.readyState!=="loading"&&!x.documentElement.doScroll?e.setTimeout(f.ready):(x.addEventListener("DOMContentLoaded",nt),e.addEventListener("load",nt));var Ne=function(a,c,p,v,E,T,R){var H=0,B=a.length,X=p==null;if(D(p)==="object"){E=!0;for(H in p)Ne(a,c,H,p[H],!0,T,R)}else if(v!==void 0&&(E=!0,w(v)||(R=!0),X&&(R?(c.call(a,v),c=null):(X=c,c=function(oe,de,ne){return X.call(f(oe),ne)})),c))for(;H<B;H++)c(a[H],p,R?v:v.call(a[H],H,c(a[H],p)));return E?a:X?c.call(a):B?c(a[0],p):T},Pt=/^-ms-/,Ve=/-([a-z])/g;function U(a,c){return c.toUpperCase()}function C(a){return a.replace(Pt,"ms-").replace(Ve,U)}var J=function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType};function pe(){this.expando=f.expando+pe.uid++}pe.uid=1,pe.prototype={cache:function(a){var c=a[this.expando];return c||(c={},J(a)&&(a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,configurable:!0}))),c},set:function(a,c,p){var v,E=this.cache(a);if(typeof c=="string")E[C(c)]=p;else for(v in c)E[C(v)]=c[v];return E},get:function(a,c){return c===void 0?this.cache(a):a[this.expando]&&a[this.expando][C(c)]},access:function(a,c,p){return c===void 0||c&&typeof c=="string"&&p===void 0?this.get(a,c):(this.set(a,c,p),p!==void 0?p:c)},remove:function(a,c){var p,v=a[this.expando];if(v!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(C):(c=C(c),c=c in v?[c]:c.match(He)||[]),p=c.length;p--;)delete v[c[p]];(c===void 0||f.isEmptyObject(v))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var c=a[this.expando];return c!==void 0&&!f.isEmptyObject(c)}};var Q=new pe,ue=new pe,We=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ce=/[A-Z]/g;function ze(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:We.test(a)?JSON.parse(a):a}function St(a,c,p){var v;if(p===void 0&&a.nodeType===1)if(v="data-"+c.replace(Ce,"-$&").toLowerCase(),p=a.getAttribute(v),typeof p=="string"){try{p=ze(p)}catch{}ue.set(a,c,p)}else p=void 0;return p}f.extend({hasData:function(a){return ue.hasData(a)||Q.hasData(a)},data:function(a,c,p){return ue.access(a,c,p)},removeData:function(a,c){ue.remove(a,c)},_data:function(a,c,p){return Q.access(a,c,p)},_removeData:function(a,c){Q.remove(a,c)}}),f.fn.extend({data:function(a,c){var p,v,E,T=this[0],R=T&&T.attributes;if(a===void 0){if(this.length&&(E=ue.get(T),T.nodeType===1&&!Q.get(T,"hasDataAttrs"))){for(p=R.length;p--;)R[p]&&(v=R[p].name,v.indexOf("data-")===0&&(v=C(v.slice(5)),St(T,v,E[v])));Q.set(T,"hasDataAttrs",!0)}return E}return typeof a=="object"?this.each(function(){ue.set(this,a)}):Ne(this,function(H){var B;if(T&&H===void 0)return B=ue.get(T,a),B!==void 0||(B=St(T,a),B!==void 0)?B:void 0;this.each(function(){ue.set(this,a,H)})},null,c,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){ue.remove(this,a)})}}),f.extend({queue:function(a,c,p){var v;if(a)return c=(c||"fx")+"queue",v=Q.get(a,c),p&&(!v||Array.isArray(p)?v=Q.access(a,c,f.makeArray(p)):v.push(p)),v||[]},dequeue:function(a,c){c=c||"fx";var p=f.queue(a,c),v=p.length,E=p.shift(),T=f._queueHooks(a,c),R=function(){f.dequeue(a,c)};E==="inprogress"&&(E=p.shift(),v--),E&&(c==="fx"&&p.unshift("inprogress"),delete T.stop,E.call(a,R,T)),!v&&T&&T.empty.fire()},_queueHooks:function(a,c){var p=c+"queueHooks";return Q.get(a,p)||Q.access(a,p,{empty:f.Callbacks("once memory").add(function(){Q.remove(a,[c+"queue",p])})})}}),f.fn.extend({queue:function(a,c){var p=2;return typeof a!="string"&&(c=a,a="fx",p--),arguments.length<p?f.queue(this[0],a):c===void 0?this:this.each(function(){var v=f.queue(this,a,c);f._queueHooks(this,a),a==="fx"&&v[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var p,v=1,E=f.Deferred(),T=this,R=this.length,H=function(){--v||E.resolveWith(T,[T])};for(typeof a!="string"&&(c=a,a=void 0),a=a||"fx";R--;)p=Q.get(T[R],a+"queueHooks"),p&&p.empty&&(v++,p.empty.add(H));return H(),E.promise(c)}});var ye=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Oe=new RegExp("^(?:([+-])=|)("+ye+")([a-z%]*)$","i"),Xe=["Top","Right","Bottom","Left"],Ze=x.documentElement,Ue=function(a){return f.contains(a.ownerDocument,a)},Et={composed:!0};Ze.getRootNode&&(Ue=function(a){return f.contains(a.ownerDocument,a)||a.getRootNode(Et)===a.ownerDocument});var at=function(a,c){return a=c||a,a.style.display==="none"||a.style.display===""&&Ue(a)&&f.css(a,"display")==="none"};function Ft(a,c,p,v){var E,T,R=20,H=v?function(){return v.cur()}:function(){return f.css(a,c,"")},B=H(),X=p&&p[3]||(f.cssNumber[c]?"":"px"),oe=a.nodeType&&(f.cssNumber[c]||X!=="px"&&+B)&&Oe.exec(f.css(a,c));if(oe&&oe[3]!==X){for(B=B/2,X=X||oe[3],oe=+B||1;R--;)f.style(a,c,oe+X),(1-T)*(1-(T=H()/B||.5))<=0&&(R=0),oe=oe/T;oe=oe*2,f.style(a,c,oe+X),p=p||[]}return p&&(oe=+oe||+B||0,E=p[1]?oe+(p[1]+1)*p[2]:+p[2],v&&(v.unit=X,v.start=oe,v.end=E)),E}var j={};function Pe(a){var c,p=a.ownerDocument,v=a.nodeName,E=j[v];return E||(c=p.body.appendChild(p.createElement(v)),E=f.css(c,"display"),c.parentNode.removeChild(c),E==="none"&&(E="block"),j[v]=E,E)}function ce(a,c){for(var p,v,E=[],T=0,R=a.length;T<R;T++)v=a[T],v.style&&(p=v.style.display,c?(p==="none"&&(E[T]=Q.get(v,"display")||null,E[T]||(v.style.display="")),v.style.display===""&&at(v)&&(E[T]=Pe(v))):p!=="none"&&(E[T]="none",Q.set(v,"display",p)));for(T=0;T<R;T++)E[T]!=null&&(a[T].style.display=E[T]);return a}f.fn.extend({show:function(){return ce(this,!0)},hide:function(){return ce(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){at(this)?f(this).show():f(this).hide()})}});var me=/^(?:checkbox|radio)$/i,De=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Re=/^$|^module$|\/(?:java|ecma)script/i;(function(){var a=x.createDocumentFragment(),c=a.appendChild(x.createElement("div")),p=x.createElement("input");p.setAttribute("type","radio"),p.setAttribute("checked","checked"),p.setAttribute("name","t"),c.appendChild(p),b.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",b.option=!!c.lastChild})();var $e={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$e.tbody=$e.tfoot=$e.colgroup=$e.caption=$e.thead,$e.th=$e.td,b.option||($e.optgroup=$e.option=[1,"<select multiple='multiple'>","</select>"]);function _t(a,c){var p;return typeof a.getElementsByTagName<"u"?p=a.getElementsByTagName(c||"*"):typeof a.querySelectorAll<"u"?p=a.querySelectorAll(c||"*"):p=[],c===void 0||c&&d(a,c)?f.merge([a],p):p}function Kt(a,c){for(var p=0,v=a.length;p<v;p++)Q.set(a[p],"globalEval",!c||Q.get(c[p],"globalEval"))}var Nt=/<|&#?\w+;/;function Sn(a,c,p,v,E){for(var T,R,H,B,X,oe,de=c.createDocumentFragment(),ne=[],ve=0,st=a.length;ve<st;ve++)if(T=a[ve],T||T===0)if(D(T)==="object")f.merge(ne,T.nodeType?[T]:T);else if(!Nt.test(T))ne.push(c.createTextNode(T));else{for(R=R||de.appendChild(c.createElement("div")),H=(De.exec(T)||["",""])[1].toLowerCase(),B=$e[H]||$e._default,R.innerHTML=B[1]+f.htmlPrefilter(T)+B[2],oe=B[0];oe--;)R=R.lastChild;f.merge(ne,R.childNodes),R=de.firstChild,R.textContent=""}for(de.textContent="",ve=0;T=ne[ve++];){if(v&&f.inArray(T,v)>-1){E&&E.push(T);continue}if(X=Ue(T),R=_t(de.appendChild(T),"script"),X&&Kt(R),p)for(oe=0;T=R[oe++];)Re.test(T.type||"")&&p.push(T)}return de}var Dn=/^([^.]*)(?:\.(.+)|)/;function oi(){return!0}function li(){return!1}function Fn(a,c,p,v,E,T){var R,H;if(typeof c=="object"){typeof p!="string"&&(v=v||p,p=void 0);for(H in c)Fn(a,H,p,v,c[H],T);return a}if(v==null&&E==null?(E=p,v=p=void 0):E==null&&(typeof p=="string"?(E=v,v=void 0):(E=v,v=p,p=void 0)),E===!1)E=li;else if(!E)return a;return T===1&&(R=E,E=function(B){return f().off(B),R.apply(this,arguments)},E.guid=R.guid||(R.guid=f.guid++)),a.each(function(){f.event.add(this,c,E,v,p)})}f.event={global:{},add:function(a,c,p,v,E){var T,R,H,B,X,oe,de,ne,ve,st,Rt,dt=Q.get(a);if(J(a))for(p.handler&&(T=p,p=T.handler,E=T.selector),E&&f.find.matchesSelector(Ze,E),p.guid||(p.guid=f.guid++),(B=dt.events)||(B=dt.events=Object.create(null)),(R=dt.handle)||(R=dt.handle=function(un){return typeof f<"u"&&f.event.triggered!==un.type?f.event.dispatch.apply(a,arguments):void 0}),c=(c||"").match(He)||[""],X=c.length;X--;)H=Dn.exec(c[X])||[],ve=Rt=H[1],st=(H[2]||"").split(".").sort(),ve&&(de=f.event.special[ve]||{},ve=(E?de.delegateType:de.bindType)||ve,de=f.event.special[ve]||{},oe=f.extend({type:ve,origType:Rt,data:v,handler:p,guid:p.guid,selector:E,needsContext:E&&f.expr.match.needsContext.test(E),namespace:st.join(".")},T),(ne=B[ve])||(ne=B[ve]=[],ne.delegateCount=0,(!de.setup||de.setup.call(a,v,st,R)===!1)&&a.addEventListener&&a.addEventListener(ve,R)),de.add&&(de.add.call(a,oe),oe.handler.guid||(oe.handler.guid=p.guid)),E?ne.splice(ne.delegateCount++,0,oe):ne.push(oe),f.event.global[ve]=!0)},remove:function(a,c,p,v,E){var T,R,H,B,X,oe,de,ne,ve,st,Rt,dt=Q.hasData(a)&&Q.get(a);if(!(!dt||!(B=dt.events))){for(c=(c||"").match(He)||[""],X=c.length;X--;){if(H=Dn.exec(c[X])||[],ve=Rt=H[1],st=(H[2]||"").split(".").sort(),!ve){for(ve in B)f.event.remove(a,ve+c[X],p,v,!0);continue}for(de=f.event.special[ve]||{},ve=(v?de.delegateType:de.bindType)||ve,ne=B[ve]||[],H=H[2]&&new RegExp("(^|\\.)"+st.join("\\.(?:.*\\.|)")+"(\\.|$)"),R=T=ne.length;T--;)oe=ne[T],(E||Rt===oe.origType)&&(!p||p.guid===oe.guid)&&(!H||H.test(oe.namespace))&&(!v||v===oe.selector||v==="**"&&oe.selector)&&(ne.splice(T,1),oe.selector&&ne.delegateCount--,de.remove&&de.remove.call(a,oe));R&&!ne.length&&((!de.teardown||de.teardown.call(a,st,dt.handle)===!1)&&f.removeEvent(a,ve,dt.handle),delete B[ve])}f.isEmptyObject(B)&&Q.remove(a,"handle events")}},dispatch:function(a){var c,p,v,E,T,R,H=new Array(arguments.length),B=f.event.fix(a),X=(Q.get(this,"events")||Object.create(null))[B.type]||[],oe=f.event.special[B.type]||{};for(H[0]=B,c=1;c<arguments.length;c++)H[c]=arguments[c];if(B.delegateTarget=this,!(oe.preDispatch&&oe.preDispatch.call(this,B)===!1)){for(R=f.event.handlers.call(this,B,X),c=0;(E=R[c++])&&!B.isPropagationStopped();)for(B.currentTarget=E.elem,p=0;(T=E.handlers[p++])&&!B.isImmediatePropagationStopped();)(!B.rnamespace||T.namespace===!1||B.rnamespace.test(T.namespace))&&(B.handleObj=T,B.data=T.data,v=((f.event.special[T.origType]||{}).handle||T.handler).apply(E.elem,H),v!==void 0&&(B.result=v)===!1&&(B.preventDefault(),B.stopPropagation()));return oe.postDispatch&&oe.postDispatch.call(this,B),B.result}},handlers:function(a,c){var p,v,E,T,R,H=[],B=c.delegateCount,X=a.target;if(B&&X.nodeType&&!(a.type==="click"&&a.button>=1)){for(;X!==this;X=X.parentNode||this)if(X.nodeType===1&&!(a.type==="click"&&X.disabled===!0)){for(T=[],R={},p=0;p<B;p++)v=c[p],E=v.selector+" ",R[E]===void 0&&(R[E]=v.needsContext?f(E,this).index(X)>-1:f.find(E,this,null,[X]).length),R[E]&&T.push(v);T.length&&H.push({elem:X,handlers:T})}}return X=this,B<c.length&&H.push({elem:X,handlers:c.slice(B)}),H},addProp:function(a,c){Object.defineProperty(f.Event.prototype,a,{enumerable:!0,configurable:!0,get:w(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(p){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:p})}})},fix:function(a){return a[f.expando]?a:new f.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var c=this||a;return me.test(c.type)&&c.click&&d(c,"input")&&wi(c,"click",!0),!1},trigger:function(a){var c=this||a;return me.test(c.type)&&c.click&&d(c,"input")&&wi(c,"click"),!0},_default:function(a){var c=a.target;return me.test(c.type)&&c.click&&d(c,"input")&&Q.get(c,"click")||d(c,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};function wi(a,c,p){if(!p){Q.get(a,c)===void 0&&f.event.add(a,c,oi);return}Q.set(a,c,!1),f.event.add(a,c,{namespace:!1,handler:function(v){var E,T=Q.get(this,c);if(v.isTrigger&1&&this[c]){if(T)(f.event.special[c]||{}).delegateType&&v.stopPropagation();else if(T=s.call(arguments),Q.set(this,c,T),this[c](),E=Q.get(this,c),Q.set(this,c,!1),T!==E)return v.stopImmediatePropagation(),v.preventDefault(),E}else T&&(Q.set(this,c,f.event.trigger(T[0],T.slice(1),this)),v.stopPropagation(),v.isImmediatePropagationStopped=oi)}})}f.removeEvent=function(a,c,p){a.removeEventListener&&a.removeEventListener(c,p)},f.Event=function(a,c){if(!(this instanceof f.Event))return new f.Event(a,c);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?oi:li,this.target=a.target&&a.target.nodeType===3?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,c&&f.extend(this,c),this.timeStamp=a&&a.timeStamp||Date.now(),this[f.expando]=!0},f.Event.prototype={constructor:f.Event,isDefaultPrevented:li,isPropagationStopped:li,isImmediatePropagationStopped:li,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=oi,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=oi,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=oi,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},f.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},f.event.addProp),f.each({focus:"focusin",blur:"focusout"},function(a,c){function p(v){if(x.documentMode){var E=Q.get(this,"handle"),T=f.event.fix(v);T.type=v.type==="focusin"?"focus":"blur",T.isSimulated=!0,E(v),T.target===T.currentTarget&&E(T)}else f.event.simulate(c,v.target,f.event.fix(v))}f.event.special[a]={setup:function(){var v;if(wi(this,a,!0),x.documentMode)v=Q.get(this,c),v||this.addEventListener(c,p),Q.set(this,c,(v||0)+1);else return!1},trigger:function(){return wi(this,a),!0},teardown:function(){var v;if(x.documentMode)v=Q.get(this,c)-1,v?Q.set(this,c,v):(this.removeEventListener(c,p),Q.remove(this,c));else return!1},_default:function(v){return Q.get(v.target,a)},delegateType:c},f.event.special[c]={setup:function(){var v=this.ownerDocument||this.document||this,E=x.documentMode?this:v,T=Q.get(E,c);T||(x.documentMode?this.addEventListener(c,p):v.addEventListener(a,p,!0)),Q.set(E,c,(T||0)+1)},teardown:function(){var v=this.ownerDocument||this.document||this,E=x.documentMode?this:v,T=Q.get(E,c)-1;T?Q.set(E,c,T):(x.documentMode?this.removeEventListener(c,p):v.removeEventListener(a,p,!0),Q.remove(E,c))}}}),f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,c){f.event.special[a]={delegateType:c,bindType:c,handle:function(p){var v,E=this,T=p.relatedTarget,R=p.handleObj;return(!T||T!==E&&!f.contains(E,T))&&(p.type=R.origType,v=R.handler.apply(this,arguments),p.type=c),v}}}),f.fn.extend({on:function(a,c,p,v){return Fn(this,a,c,p,v)},one:function(a,c,p,v){return Fn(this,a,c,p,v,1)},off:function(a,c,p){var v,E;if(a&&a.preventDefault&&a.handleObj)return v=a.handleObj,f(a.delegateTarget).off(v.namespace?v.origType+"."+v.namespace:v.origType,v.selector,v.handler),this;if(typeof a=="object"){for(E in a)this.off(E,c,a[E]);return this}return(c===!1||typeof c=="function")&&(p=c,c=void 0),p===!1&&(p=li),this.each(function(){f.event.remove(this,a,p,c)})}});var Ls=/<script|<style|<link/i,Is=/checked\s*(?:[^=]|=\s*.checked.)/i,fr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Zr(a,c){return d(a,"table")&&d(c.nodeType!==11?c:c.firstChild,"tr")&&f(a).children("tbody")[0]||a}function dr(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function Ns(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function Jr(a,c){var p,v,E,T,R,H,B;if(c.nodeType===1){if(Q.hasData(a)&&(T=Q.get(a),B=T.events,B)){Q.remove(c,"handle events");for(E in B)for(p=0,v=B[E].length;p<v;p++)f.event.add(c,E,B[E][p])}ue.hasData(a)&&(R=ue.access(a),H=f.extend({},R),ue.set(c,H))}}function Ia(a,c){var p=c.nodeName.toLowerCase();p==="input"&&me.test(a.type)?c.checked=a.checked:(p==="input"||p==="textarea")&&(c.defaultValue=a.defaultValue)}function Ri(a,c,p,v){c=o(c);var E,T,R,H,B,X,oe=0,de=a.length,ne=de-1,ve=c[0],st=w(ve);if(st||de>1&&typeof ve=="string"&&!b.checkClone&&Is.test(ve))return a.each(function(Rt){var dt=a.eq(Rt);st&&(c[0]=ve.call(this,Rt,dt.html())),Ri(dt,c,p,v)});if(de&&(E=Sn(c,a[0].ownerDocument,!1,a,v),T=E.firstChild,E.childNodes.length===1&&(E=T),T||v)){for(R=f.map(_t(E,"script"),dr),H=R.length;oe<de;oe++)B=E,oe!==ne&&(B=f.clone(B,!0,!0),H&&f.merge(R,_t(B,"script"))),p.call(a[oe],B,oe);if(H)for(X=R[R.length-1].ownerDocument,f.map(R,Ns),oe=0;oe<H;oe++)B=R[oe],Re.test(B.type||"")&&!Q.access(B,"globalEval")&&f.contains(X,B)&&(B.src&&(B.type||"").toLowerCase()!=="module"?f._evalUrl&&!B.noModule&&f._evalUrl(B.src,{nonce:B.nonce||B.getAttribute("nonce")},X):O(B.textContent.replace(fr,""),B,X))}return a}function Us(a,c,p){for(var v,E=c?f.filter(c,a):a,T=0;(v=E[T])!=null;T++)!p&&v.nodeType===1&&f.cleanData(_t(v)),v.parentNode&&(p&&Ue(v)&&Kt(_t(v,"script")),v.parentNode.removeChild(v));return a}f.extend({htmlPrefilter:function(a){return a},clone:function(a,c,p){var v,E,T,R,H=a.cloneNode(!0),B=Ue(a);if(!b.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a))for(R=_t(H),T=_t(a),v=0,E=T.length;v<E;v++)Ia(T[v],R[v]);if(c)if(p)for(T=T||_t(a),R=R||_t(H),v=0,E=T.length;v<E;v++)Jr(T[v],R[v]);else Jr(a,H);return R=_t(H,"script"),R.length>0&&Kt(R,!B&&_t(a,"script")),H},cleanData:function(a){for(var c,p,v,E=f.event.special,T=0;(p=a[T])!==void 0;T++)if(J(p)){if(c=p[Q.expando]){if(c.events)for(v in c.events)E[v]?f.event.remove(p,v):f.removeEvent(p,v,c.handle);p[Q.expando]=void 0}p[ue.expando]&&(p[ue.expando]=void 0)}}}),f.fn.extend({detach:function(a){return Us(this,a,!0)},remove:function(a){return Us(this,a)},text:function(a){return Ne(this,function(c){return c===void 0?f.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,a,arguments.length)},append:function(){return Ri(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Zr(this,a);c.appendChild(a)}})},prepend:function(){return Ri(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Zr(this,a);c.insertBefore(a,c.firstChild)}})},before:function(){return Ri(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ri(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,c=0;(a=this[c])!=null;c++)a.nodeType===1&&(f.cleanData(_t(a,!1)),a.textContent="");return this},clone:function(a,c){return a=a??!1,c=c??a,this.map(function(){return f.clone(this,a,c)})},html:function(a){return Ne(this,function(c){var p=this[0]||{},v=0,E=this.length;if(c===void 0&&p.nodeType===1)return p.innerHTML;if(typeof c=="string"&&!Ls.test(c)&&!$e[(De.exec(c)||["",""])[1].toLowerCase()]){c=f.htmlPrefilter(c);try{for(;v<E;v++)p=this[v]||{},p.nodeType===1&&(f.cleanData(_t(p,!1)),p.innerHTML=c);p=0}catch{}}p&&this.empty().append(c)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ri(this,arguments,function(c){var p=this.parentNode;f.inArray(this,a)<0&&(f.cleanData(_t(this)),p&&p.replaceChild(c,this))},a)}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,c){f.fn[a]=function(p){for(var v,E=[],T=f(p),R=T.length-1,H=0;H<=R;H++)v=H===R?this:this.clone(!0),f(T[H])[c](v),l.apply(E,v.get());return this.pushStack(E)}});var Qr=new RegExp("^("+ye+")(?!px)[a-z%]+$","i"),es=/^--/,pr=function(a){var c=a.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(a)},P=function(a,c,p){var v,E,T={};for(E in c)T[E]=a.style[E],a.style[E]=c[E];v=p.call(a);for(E in c)a.style[E]=T[E];return v},Y=new RegExp(Xe.join("|"),"i");(function(){function a(){if(X){B.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",X.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ze.appendChild(B).appendChild(X);var oe=e.getComputedStyle(X);p=oe.top!=="1%",H=c(oe.marginLeft)===12,X.style.right="60%",T=c(oe.right)===36,v=c(oe.width)===36,X.style.position="absolute",E=c(X.offsetWidth/3)===12,Ze.removeChild(B),X=null}}function c(oe){return Math.round(parseFloat(oe))}var p,v,E,T,R,H,B=x.createElement("div"),X=x.createElement("div");X.style&&(X.style.backgroundClip="content-box",X.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=X.style.backgroundClip==="content-box",f.extend(b,{boxSizingReliable:function(){return a(),v},pixelBoxStyles:function(){return a(),T},pixelPosition:function(){return a(),p},reliableMarginLeft:function(){return a(),H},scrollboxSize:function(){return a(),E},reliableTrDimensions:function(){var oe,de,ne,ve;return R==null&&(oe=x.createElement("table"),de=x.createElement("tr"),ne=x.createElement("div"),oe.style.cssText="position:absolute;left:-11111px;border-collapse:separate",de.style.cssText="box-sizing:content-box;border:1px solid",de.style.height="1px",ne.style.height="9px",ne.style.display="block",Ze.appendChild(oe).appendChild(de).appendChild(ne),ve=e.getComputedStyle(de),R=parseInt(ve.height,10)+parseInt(ve.borderTopWidth,10)+parseInt(ve.borderBottomWidth,10)===de.offsetHeight,Ze.removeChild(oe)),R}}))})();function re(a,c,p){var v,E,T,R,H=es.test(c),B=a.style;return p=p||pr(a),p&&(R=p.getPropertyValue(c)||p[c],H&&R&&(R=R.replace(V,"$1")||void 0),R===""&&!Ue(a)&&(R=f.style(a,c)),!b.pixelBoxStyles()&&Qr.test(R)&&Y.test(c)&&(v=B.width,E=B.minWidth,T=B.maxWidth,B.minWidth=B.maxWidth=B.width=R,R=p.width,B.width=v,B.minWidth=E,B.maxWidth=T)),R!==void 0?R+"":R}function se(a,c){return{get:function(){if(a()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var K=["Webkit","Moz","ms"],xe=x.createElement("div").style,Ae={};function Fe(a){for(var c=a[0].toUpperCase()+a.slice(1),p=K.length;p--;)if(a=K[p]+c,a in xe)return a}function Be(a){var c=f.cssProps[a]||Ae[a];return c||(a in xe?a:Ae[a]=Fe(a)||a)}var it=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Tt(a,c,p){var v=Oe.exec(c);return v?Math.max(0,v[2]-(p||0))+(v[3]||"px"):c}function wt(a,c,p,v,E,T){var R=c==="width"?1:0,H=0,B=0,X=0;if(p===(v?"border":"content"))return 0;for(;R<4;R+=2)p==="margin"&&(X+=f.css(a,p+Xe[R],!0,E)),v?(p==="content"&&(B-=f.css(a,"padding"+Xe[R],!0,E)),p!=="margin"&&(B-=f.css(a,"border"+Xe[R]+"Width",!0,E))):(B+=f.css(a,"padding"+Xe[R],!0,E),p!=="padding"?B+=f.css(a,"border"+Xe[R]+"Width",!0,E):H+=f.css(a,"border"+Xe[R]+"Width",!0,E));return!v&&T>=0&&(B+=Math.max(0,Math.ceil(a["offset"+c[0].toUpperCase()+c.slice(1)]-T-B-H-.5))||0),B+X}function jt(a,c,p){var v=pr(a),E=!b.boxSizingReliable()||p,T=E&&f.css(a,"boxSizing",!1,v)==="border-box",R=T,H=re(a,c,v),B="offset"+c[0].toUpperCase()+c.slice(1);if(Qr.test(H)){if(!p)return H;H="auto"}return(!b.boxSizingReliable()&&T||!b.reliableTrDimensions()&&d(a,"tr")||H==="auto"||!parseFloat(H)&&f.css(a,"display",!1,v)==="inline")&&a.getClientRects().length&&(T=f.css(a,"boxSizing",!1,v)==="border-box",R=B in a,R&&(H=a[B])),H=parseFloat(H)||0,H+wt(a,c,p||(T?"border":"content"),R,v,H)+"px"}f.extend({cssHooks:{opacity:{get:function(a,c){if(c){var p=re(a,"opacity");return p===""?"1":p}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(a,c,p,v){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var E,T,R,H=C(c),B=es.test(c),X=a.style;if(B||(c=Be(H)),R=f.cssHooks[c]||f.cssHooks[H],p!==void 0){if(T=typeof p,T==="string"&&(E=Oe.exec(p))&&E[1]&&(p=Ft(a,c,E),T="number"),p==null||p!==p)return;T==="number"&&!B&&(p+=E&&E[3]||(f.cssNumber[H]?"":"px")),!b.clearCloneStyle&&p===""&&c.indexOf("background")===0&&(X[c]="inherit"),(!R||!("set"in R)||(p=R.set(a,p,v))!==void 0)&&(B?X.setProperty(c,p):X[c]=p)}else return R&&"get"in R&&(E=R.get(a,!1,v))!==void 0?E:X[c]}},css:function(a,c,p,v){var E,T,R,H=C(c),B=es.test(c);return B||(c=Be(H)),R=f.cssHooks[c]||f.cssHooks[H],R&&"get"in R&&(E=R.get(a,!0,p)),E===void 0&&(E=re(a,c,v)),E==="normal"&&c in Ke&&(E=Ke[c]),p===""||p?(T=parseFloat(E),p===!0||isFinite(T)?T||0:E):E}}),f.each(["height","width"],function(a,c){f.cssHooks[c]={get:function(p,v,E){if(v)return it.test(f.css(p,"display"))&&(!p.getClientRects().length||!p.getBoundingClientRect().width)?P(p,et,function(){return jt(p,c,E)}):jt(p,c,E)},set:function(p,v,E){var T,R=pr(p),H=!b.scrollboxSize()&&R.position==="absolute",B=H||E,X=B&&f.css(p,"boxSizing",!1,R)==="border-box",oe=E?wt(p,c,E,X,R):0;return X&&H&&(oe-=Math.ceil(p["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(R[c])-wt(p,c,"border",!1,R)-.5)),oe&&(T=Oe.exec(v))&&(T[3]||"px")!=="px"&&(p.style[c]=v,v=f.css(p,c)),Tt(p,v,oe)}}}),f.cssHooks.marginLeft=se(b.reliableMarginLeft,function(a,c){if(c)return(parseFloat(re(a,"marginLeft"))||a.getBoundingClientRect().left-P(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),f.each({margin:"",padding:"",border:"Width"},function(a,c){f.cssHooks[a+c]={expand:function(p){for(var v=0,E={},T=typeof p=="string"?p.split(" "):[p];v<4;v++)E[a+Xe[v]+c]=T[v]||T[v-2]||T[0];return E}},a!=="margin"&&(f.cssHooks[a+c].set=Tt)}),f.fn.extend({css:function(a,c){return Ne(this,function(p,v,E){var T,R,H={},B=0;if(Array.isArray(v)){for(T=pr(p),R=v.length;B<R;B++)H[v[B]]=f.css(p,v[B],!1,T);return H}return E!==void 0?f.style(p,v,E):f.css(p,v)},a,c,arguments.length>1)}});function vt(a,c,p,v,E){return new vt.prototype.init(a,c,p,v,E)}f.Tween=vt,vt.prototype={constructor:vt,init:function(a,c,p,v,E,T){this.elem=a,this.prop=p,this.easing=E||f.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=v,this.unit=T||(f.cssNumber[p]?"":"px")},cur:function(){var a=vt.propHooks[this.prop];return a&&a.get?a.get(this):vt.propHooks._default.get(this)},run:function(a){var c,p=vt.propHooks[this.prop];return this.options.duration?this.pos=c=f.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=c=a,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):vt.propHooks._default.set(this),this}},vt.prototype.init.prototype=vt.prototype,vt.propHooks={_default:{get:function(a){var c;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(c=f.css(a.elem,a.prop,""),!c||c==="auto"?0:c)},set:function(a){f.fx.step[a.prop]?f.fx.step[a.prop](a):a.elem.nodeType===1&&(f.cssHooks[a.prop]||a.elem.style[Be(a.prop)]!=null)?f.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},vt.propHooks.scrollTop=vt.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},f.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},f.fx=vt.prototype.init,f.fx.step={};var mt,je,Qt=/^(?:toggle|show|hide)$/,Lt=/queueHooks$/;function pn(){je&&(x.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(pn):e.setTimeout(pn,f.fx.interval),f.fx.tick())}function ci(){return e.setTimeout(function(){mt=void 0}),mt=Date.now()}function sn(a,c){var p,v=0,E={height:a};for(c=c?1:0;v<4;v+=2-c)p=Xe[v],E["margin"+p]=E["padding"+p]=a;return c&&(E.opacity=E.width=a),E}function Ci(a,c,p){for(var v,E=(Xt.tweeners[c]||[]).concat(Xt.tweeners["*"]),T=0,R=E.length;T<R;T++)if(v=E[T].call(p,c,a))return v}function Gt(a,c,p){var v,E,T,R,H,B,X,oe,de="width"in c||"height"in c,ne=this,ve={},st=a.style,Rt=a.nodeType&&at(a),dt=Q.get(a,"fxshow");p.queue||(R=f._queueHooks(a,"fx"),R.unqueued==null&&(R.unqueued=0,H=R.empty.fire,R.empty.fire=function(){R.unqueued||H()}),R.unqueued++,ne.always(function(){ne.always(function(){R.unqueued--,f.queue(a,"fx").length||R.empty.fire()})}));for(v in c)if(E=c[v],Qt.test(E)){if(delete c[v],T=T||E==="toggle",E===(Rt?"hide":"show"))if(E==="show"&&dt&&dt[v]!==void 0)Rt=!0;else continue;ve[v]=dt&&dt[v]||f.style(a,v)}if(B=!f.isEmptyObject(c),!(!B&&f.isEmptyObject(ve))){de&&a.nodeType===1&&(p.overflow=[st.overflow,st.overflowX,st.overflowY],X=dt&&dt.display,X==null&&(X=Q.get(a,"display")),oe=f.css(a,"display"),oe==="none"&&(X?oe=X:(ce([a],!0),X=a.style.display||X,oe=f.css(a,"display"),ce([a]))),(oe==="inline"||oe==="inline-block"&&X!=null)&&f.css(a,"float")==="none"&&(B||(ne.done(function(){st.display=X}),X==null&&(oe=st.display,X=oe==="none"?"":oe)),st.display="inline-block")),p.overflow&&(st.overflow="hidden",ne.always(function(){st.overflow=p.overflow[0],st.overflowX=p.overflow[1],st.overflowY=p.overflow[2]})),B=!1;for(v in ve)B||(dt?"hidden"in dt&&(Rt=dt.hidden):dt=Q.access(a,"fxshow",{display:X}),T&&(dt.hidden=!Rt),Rt&&ce([a],!0),ne.done(function(){Rt||ce([a]),Q.remove(a,"fxshow");for(v in ve)f.style(a,v,ve[v])})),B=Ci(Rt?dt[v]:0,v,ne),v in dt||(dt[v]=B.start,Rt&&(B.end=B.start,B.start=0))}}function En(a,c){var p,v,E,T,R;for(p in a)if(v=C(p),E=c[v],T=a[p],Array.isArray(T)&&(E=T[1],T=a[p]=T[0]),p!==v&&(a[v]=T,delete a[p]),R=f.cssHooks[v],R&&"expand"in R){T=R.expand(T),delete a[v];for(p in T)p in a||(a[p]=T[p],c[p]=E)}else c[v]=E}function Xt(a,c,p){var v,E,T=0,R=Xt.prefilters.length,H=f.Deferred().always(function(){delete B.elem}),B=function(){if(E)return!1;for(var de=mt||ci(),ne=Math.max(0,X.startTime+X.duration-de),ve=ne/X.duration||0,st=1-ve,Rt=0,dt=X.tweens.length;Rt<dt;Rt++)X.tweens[Rt].run(st);return H.notifyWith(a,[X,st,ne]),st<1&&dt?ne:(dt||H.notifyWith(a,[X,1,0]),H.resolveWith(a,[X]),!1)},X=H.promise({elem:a,props:f.extend({},c),opts:f.extend(!0,{specialEasing:{},easing:f.easing._default},p),originalProperties:c,originalOptions:p,startTime:mt||ci(),duration:p.duration,tweens:[],createTween:function(de,ne){var ve=f.Tween(a,X.opts,de,ne,X.opts.specialEasing[de]||X.opts.easing);return X.tweens.push(ve),ve},stop:function(de){var ne=0,ve=de?X.tweens.length:0;if(E)return this;for(E=!0;ne<ve;ne++)X.tweens[ne].run(1);return de?(H.notifyWith(a,[X,1,0]),H.resolveWith(a,[X,de])):H.rejectWith(a,[X,de]),this}}),oe=X.props;for(En(oe,X.opts.specialEasing);T<R;T++)if(v=Xt.prefilters[T].call(X,a,oe,X.opts),v)return w(v.stop)&&(f._queueHooks(X.elem,X.opts.queue).stop=v.stop.bind(v)),v;return f.map(oe,Ci,X),w(X.opts.start)&&X.opts.start.call(a,X),X.progress(X.opts.progress).done(X.opts.done,X.opts.complete).fail(X.opts.fail).always(X.opts.always),f.fx.timer(f.extend(B,{elem:a,anim:X,queue:X.opts.queue})),X}f.Animation=f.extend(Xt,{tweeners:{"*":[function(a,c){var p=this.createTween(a,c);return Ft(p.elem,a,Oe.exec(c),p),p}]},tweener:function(a,c){w(a)?(c=a,a=["*"]):a=a.match(He);for(var p,v=0,E=a.length;v<E;v++)p=a[v],Xt.tweeners[p]=Xt.tweeners[p]||[],Xt.tweeners[p].unshift(c)},prefilters:[Gt],prefilter:function(a,c){c?Xt.prefilters.unshift(a):Xt.prefilters.push(a)}}),f.speed=function(a,c,p){var v=a&&typeof a=="object"?f.extend({},a):{complete:p||!p&&c||w(a)&&a,duration:a,easing:p&&c||c&&!w(c)&&c};return f.fx.off?v.duration=0:typeof v.duration!="number"&&(v.duration in f.fx.speeds?v.duration=f.fx.speeds[v.duration]:v.duration=f.fx.speeds._default),(v.queue==null||v.queue===!0)&&(v.queue="fx"),v.old=v.complete,v.complete=function(){w(v.old)&&v.old.call(this),v.queue&&f.dequeue(this,v.queue)},v},f.fn.extend({fadeTo:function(a,c,p,v){return this.filter(at).css("opacity",0).show().end().animate({opacity:c},a,p,v)},animate:function(a,c,p,v){var E=f.isEmptyObject(a),T=f.speed(c,p,v),R=function(){var H=Xt(this,f.extend({},a),T);(E||Q.get(this,"finish"))&&H.stop(!0)};return R.finish=R,E||T.queue===!1?this.each(R):this.queue(T.queue,R)},stop:function(a,c,p){var v=function(E){var T=E.stop;delete E.stop,T(p)};return typeof a!="string"&&(p=c,c=a,a=void 0),c&&this.queue(a||"fx",[]),this.each(function(){var E=!0,T=a!=null&&a+"queueHooks",R=f.timers,H=Q.get(this);if(T)H[T]&&H[T].stop&&v(H[T]);else for(T in H)H[T]&&H[T].stop&&Lt.test(T)&&v(H[T]);for(T=R.length;T--;)R[T].elem===this&&(a==null||R[T].queue===a)&&(R[T].anim.stop(p),E=!1,R.splice(T,1));(E||!p)&&f.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var c,p=Q.get(this),v=p[a+"queue"],E=p[a+"queueHooks"],T=f.timers,R=v?v.length:0;for(p.finish=!0,f.queue(this,a,[]),E&&E.stop&&E.stop.call(this,!0),c=T.length;c--;)T[c].elem===this&&T[c].queue===a&&(T[c].anim.stop(!0),T.splice(c,1));for(c=0;c<R;c++)v[c]&&v[c].finish&&v[c].finish.call(this);delete p.finish})}}),f.each(["toggle","show","hide"],function(a,c){var p=f.fn[c];f.fn[c]=function(v,E,T){return v==null||typeof v=="boolean"?p.apply(this,arguments):this.animate(sn(c,!0),v,E,T)}}),f.each({slideDown:sn("show"),slideUp:sn("hide"),slideToggle:sn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,c){f.fn[a]=function(p,v,E){return this.animate(c,p,v,E)}}),f.timers=[],f.fx.tick=function(){var a,c=0,p=f.timers;for(mt=Date.now();c<p.length;c++)a=p[c],!a()&&p[c]===a&&p.splice(c--,1);p.length||f.fx.stop(),mt=void 0},f.fx.timer=function(a){f.timers.push(a),f.fx.start()},f.fx.interval=13,f.fx.start=function(){je||(je=!0,pn())},f.fx.stop=function(){je=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(a,c){return a=f.fx&&f.fx.speeds[a]||a,c=c||"fx",this.queue(c,function(p,v){var E=e.setTimeout(p,a);v.stop=function(){e.clearTimeout(E)}})},function(){var a=x.createElement("input"),c=x.createElement("select"),p=c.appendChild(x.createElement("option"));a.type="checkbox",b.checkOn=a.value!=="",b.optSelected=p.selected,a=x.createElement("input"),a.value="t",a.type="radio",b.radioValue=a.value==="t"}();var an,$t=f.expr.attrHandle;f.fn.extend({attr:function(a,c){return Ne(this,f.attr,a,c,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})}}),f.extend({attr:function(a,c,p){var v,E,T=a.nodeType;if(!(T===3||T===8||T===2)){if(typeof a.getAttribute>"u")return f.prop(a,c,p);if((T!==1||!f.isXMLDoc(a))&&(E=f.attrHooks[c.toLowerCase()]||(f.expr.match.bool.test(c)?an:void 0)),p!==void 0){if(p===null){f.removeAttr(a,c);return}return E&&"set"in E&&(v=E.set(a,p,c))!==void 0?v:(a.setAttribute(c,p+""),p)}return E&&"get"in E&&(v=E.get(a,c))!==null?v:(v=f.find.attr(a,c),v??void 0)}},attrHooks:{type:{set:function(a,c){if(!b.radioValue&&c==="radio"&&d(a,"input")){var p=a.value;return a.setAttribute("type",c),p&&(a.value=p),c}}}},removeAttr:function(a,c){var p,v=0,E=c&&c.match(He);if(E&&a.nodeType===1)for(;p=E[v++];)a.removeAttribute(p)}}),an={set:function(a,c,p){return c===!1?f.removeAttr(a,p):a.setAttribute(p,p),p}},f.each(f.expr.match.bool.source.match(/\w+/g),function(a,c){var p=$t[c]||f.find.attr;$t[c]=function(v,E,T){var R,H,B=E.toLowerCase();return T||(H=$t[B],$t[B]=R,R=p(v,E,T)!=null?B:null,$t[B]=H),R}});var ts=/^(?:input|select|textarea|button)$/i,ui=/^(?:a|area)$/i;f.fn.extend({prop:function(a,c){return Ne(this,f.prop,a,c,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[f.propFix[a]||a]})}}),f.extend({prop:function(a,c,p){var v,E,T=a.nodeType;if(!(T===3||T===8||T===2))return(T!==1||!f.isXMLDoc(a))&&(c=f.propFix[c]||c,E=f.propHooks[c]),p!==void 0?E&&"set"in E&&(v=E.set(a,p,c))!==void 0?v:a[c]=p:E&&"get"in E&&(v=E.get(a,c))!==null?v:a[c]},propHooks:{tabIndex:{get:function(a){var c=f.find.attr(a,"tabindex");return c?parseInt(c,10):ts.test(a.nodeName)||ui.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(f.propHooks.selected={get:function(a){var c=a.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(a){var c=a.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this});function qi(a){var c=a.match(He)||[];return c.join(" ")}function Yi(a){return a.getAttribute&&a.getAttribute("class")||""}function Na(a){return Array.isArray(a)?a:typeof a=="string"?a.match(He)||[]:[]}f.fn.extend({addClass:function(a){var c,p,v,E,T,R;return w(a)?this.each(function(H){f(this).addClass(a.call(this,H,Yi(this)))}):(c=Na(a),c.length?this.each(function(){if(v=Yi(this),p=this.nodeType===1&&" "+qi(v)+" ",p){for(T=0;T<c.length;T++)E=c[T],p.indexOf(" "+E+" ")<0&&(p+=E+" ");R=qi(p),v!==R&&this.setAttribute("class",R)}}):this)},removeClass:function(a){var c,p,v,E,T,R;return w(a)?this.each(function(H){f(this).removeClass(a.call(this,H,Yi(this)))}):arguments.length?(c=Na(a),c.length?this.each(function(){if(v=Yi(this),p=this.nodeType===1&&" "+qi(v)+" ",p){for(T=0;T<c.length;T++)for(E=c[T];p.indexOf(" "+E+" ")>-1;)p=p.replace(" "+E+" "," ");R=qi(p),v!==R&&this.setAttribute("class",R)}}):this):this.attr("class","")},toggleClass:function(a,c){var p,v,E,T,R=typeof a,H=R==="string"||Array.isArray(a);return w(a)?this.each(function(B){f(this).toggleClass(a.call(this,B,Yi(this),c),c)}):typeof c=="boolean"&&H?c?this.addClass(a):this.removeClass(a):(p=Na(a),this.each(function(){if(H)for(T=f(this),E=0;E<p.length;E++)v=p[E],T.hasClass(v)?T.removeClass(v):T.addClass(v);else(a===void 0||R==="boolean")&&(v=Yi(this),v&&Q.set(this,"__className__",v),this.setAttribute&&this.setAttribute("class",v||a===!1?"":Q.get(this,"__className__")||""))}))},hasClass:function(a){var c,p,v=0;for(c=" "+a+" ";p=this[v++];)if(p.nodeType===1&&(" "+qi(Yi(p))+" ").indexOf(c)>-1)return!0;return!1}});var yh=/\r/g;f.fn.extend({val:function(a){var c,p,v,E=this[0];return arguments.length?(v=w(a),this.each(function(T){var R;this.nodeType===1&&(v?R=a.call(this,T,f(this).val()):R=a,R==null?R="":typeof R=="number"?R+="":Array.isArray(R)&&(R=f.map(R,function(H){return H==null?"":H+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,R,"value")===void 0)&&(this.value=R))})):E?(c=f.valHooks[E.type]||f.valHooks[E.nodeName.toLowerCase()],c&&"get"in c&&(p=c.get(E,"value"))!==void 0?p:(p=E.value,typeof p=="string"?p.replace(yh,""):p??"")):void 0}}),f.extend({valHooks:{option:{get:function(a){var c=f.find.attr(a,"value");return c??qi(f.text(a))}},select:{get:function(a){var c,p,v,E=a.options,T=a.selectedIndex,R=a.type==="select-one",H=R?null:[],B=R?T+1:E.length;for(T<0?v=B:v=R?T:0;v<B;v++)if(p=E[v],(p.selected||v===T)&&!p.disabled&&(!p.parentNode.disabled||!d(p.parentNode,"optgroup"))){if(c=f(p).val(),R)return c;H.push(c)}return H},set:function(a,c){for(var p,v,E=a.options,T=f.makeArray(c),R=E.length;R--;)v=E[R],(v.selected=f.inArray(f.valHooks.option.get(v),T)>-1)&&(p=!0);return p||(a.selectedIndex=-1),T}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(a,c){if(Array.isArray(c))return a.checked=f.inArray(f(a).val(),c)>-1}},b.checkOn||(f.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})});var ns=e.location,Gl={guid:Date.now()},Ua=/\?/;f.parseXML=function(a){var c,p;if(!a||typeof a!="string")return null;try{c=new e.DOMParser().parseFromString(a,"text/xml")}catch{}return p=c&&c.getElementsByTagName("parsererror")[0],(!c||p)&&f.error("Invalid XML: "+(p?f.map(p.childNodes,function(v){return v.textContent}).join(`
`):a)),c};var Wl=/^(?:focusinfocus|focusoutblur)$/,Xl=function(a){a.stopPropagation()};f.extend(f.event,{trigger:function(a,c,p,v){var E,T,R,H,B,X,oe,de,ne=[p||x],ve=_.call(a,"type")?a.type:a,st=_.call(a,"namespace")?a.namespace.split("."):[];if(T=de=R=p=p||x,!(p.nodeType===3||p.nodeType===8)&&!Wl.test(ve+f.event.triggered)&&(ve.indexOf(".")>-1&&(st=ve.split("."),ve=st.shift(),st.sort()),B=ve.indexOf(":")<0&&"on"+ve,a=a[f.expando]?a:new f.Event(ve,typeof a=="object"&&a),a.isTrigger=v?2:3,a.namespace=st.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+st.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=p),c=c==null?[a]:f.makeArray(c,[a]),oe=f.event.special[ve]||{},!(!v&&oe.trigger&&oe.trigger.apply(p,c)===!1))){if(!v&&!oe.noBubble&&!M(p)){for(H=oe.delegateType||ve,Wl.test(H+ve)||(T=T.parentNode);T;T=T.parentNode)ne.push(T),R=T;R===(p.ownerDocument||x)&&ne.push(R.defaultView||R.parentWindow||e)}for(E=0;(T=ne[E++])&&!a.isPropagationStopped();)de=T,a.type=E>1?H:oe.bindType||ve,X=(Q.get(T,"events")||Object.create(null))[a.type]&&Q.get(T,"handle"),X&&X.apply(T,c),X=B&&T[B],X&&X.apply&&J(T)&&(a.result=X.apply(T,c),a.result===!1&&a.preventDefault());return a.type=ve,!v&&!a.isDefaultPrevented()&&(!oe._default||oe._default.apply(ne.pop(),c)===!1)&&J(p)&&B&&w(p[ve])&&!M(p)&&(R=p[B],R&&(p[B]=null),f.event.triggered=ve,a.isPropagationStopped()&&de.addEventListener(ve,Xl),p[ve](),a.isPropagationStopped()&&de.removeEventListener(ve,Xl),f.event.triggered=void 0,R&&(p[B]=R)),a.result}},simulate:function(a,c,p){var v=f.extend(new f.Event,p,{type:a,isSimulated:!0});f.event.trigger(v,null,c)}}),f.fn.extend({trigger:function(a,c){return this.each(function(){f.event.trigger(a,c,this)})},triggerHandler:function(a,c){var p=this[0];if(p)return f.event.trigger(a,c,p,!0)}});var Mh=/\[\]$/,jl=/\r?\n/g,Sh=/^(?:submit|button|image|reset|file)$/i,Eh=/^(?:input|select|textarea|keygen)/i;function Oa(a,c,p,v){var E;if(Array.isArray(c))f.each(c,function(T,R){p||Mh.test(a)?v(a,R):Oa(a+"["+(typeof R=="object"&&R!=null?T:"")+"]",R,p,v)});else if(!p&&D(c)==="object")for(E in c)Oa(a+"["+E+"]",c[E],p,v);else v(a,c)}f.param=function(a,c){var p,v=[],E=function(T,R){var H=w(R)?R():R;v[v.length]=encodeURIComponent(T)+"="+encodeURIComponent(H??"")};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){E(this.name,this.value)});else for(p in a)Oa(p,a[p],c,E);return v.join("&")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=f.prop(this,"elements");return a?f.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!f(this).is(":disabled")&&Eh.test(this.nodeName)&&!Sh.test(a)&&(this.checked||!me.test(a))}).map(function(a,c){var p=f(this).val();return p==null?null:Array.isArray(p)?f.map(p,function(v){return{name:c.name,value:v.replace(jl,`\r
`)}}):{name:c.name,value:p.replace(jl,`\r
`)}}).get()}});var Th=/%20/g,bh=/#.*$/,Ah=/([?&])_=[^&]*/,wh=/^(.*?):[ \t]*([^\r\n]*)$/mg,Rh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ch=/^(?:GET|HEAD)$/,Ph=/^\/\//,ql={},Fa={},Yl="*/".concat("*"),Ba=x.createElement("a");Ba.href=ns.href;function Kl(a){return function(c,p){typeof c!="string"&&(p=c,c="*");var v,E=0,T=c.toLowerCase().match(He)||[];if(w(p))for(;v=T[E++];)v[0]==="+"?(v=v.slice(1)||"*",(a[v]=a[v]||[]).unshift(p)):(a[v]=a[v]||[]).push(p)}}function $l(a,c,p,v){var E={},T=a===Fa;function R(H){var B;return E[H]=!0,f.each(a[H]||[],function(X,oe){var de=oe(c,p,v);if(typeof de=="string"&&!T&&!E[de])return c.dataTypes.unshift(de),R(de),!1;if(T)return!(B=de)}),B}return R(c.dataTypes[0])||!E["*"]&&R("*")}function ka(a,c){var p,v,E=f.ajaxSettings.flatOptions||{};for(p in c)c[p]!==void 0&&((E[p]?a:v||(v={}))[p]=c[p]);return v&&f.extend(!0,a,v),a}function Dh(a,c,p){for(var v,E,T,R,H=a.contents,B=a.dataTypes;B[0]==="*";)B.shift(),v===void 0&&(v=a.mimeType||c.getResponseHeader("Content-Type"));if(v){for(E in H)if(H[E]&&H[E].test(v)){B.unshift(E);break}}if(B[0]in p)T=B[0];else{for(E in p){if(!B[0]||a.converters[E+" "+B[0]]){T=E;break}R||(R=E)}T=T||R}if(T)return T!==B[0]&&B.unshift(T),p[T]}function Lh(a,c,p,v){var E,T,R,H,B,X={},oe=a.dataTypes.slice();if(oe[1])for(R in a.converters)X[R.toLowerCase()]=a.converters[R];for(T=oe.shift();T;)if(a.responseFields[T]&&(p[a.responseFields[T]]=c),!B&&v&&a.dataFilter&&(c=a.dataFilter(c,a.dataType)),B=T,T=oe.shift(),T){if(T==="*")T=B;else if(B!=="*"&&B!==T){if(R=X[B+" "+T]||X["* "+T],!R){for(E in X)if(H=E.split(" "),H[1]===T&&(R=X[B+" "+H[0]]||X["* "+H[0]],R)){R===!0?R=X[E]:X[E]!==!0&&(T=H[0],oe.unshift(H[1]));break}}if(R!==!0)if(R&&a.throws)c=R(c);else try{c=R(c)}catch(de){return{state:"parsererror",error:R?de:"No conversion from "+B+" to "+T}}}}return{state:"success",data:c}}f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ns.href,type:"GET",isLocal:Rh.test(ns.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Yl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,c){return c?ka(ka(a,f.ajaxSettings),c):ka(f.ajaxSettings,a)},ajaxPrefilter:Kl(ql),ajaxTransport:Kl(Fa),ajax:function(a,c){typeof a=="object"&&(c=a,a=void 0),c=c||{};var p,v,E,T,R,H,B,X,oe,de,ne=f.ajaxSetup({},c),ve=ne.context||ne,st=ne.context&&(ve.nodeType||ve.jquery)?f(ve):f.event,Rt=f.Deferred(),dt=f.Callbacks("once memory"),un=ne.statusCode||{},en={},qn={},Yn="canceled",bt={readyState:0,getResponseHeader:function(Dt){var Yt;if(B){if(!T)for(T={};Yt=wh.exec(E);)T[Yt[1].toLowerCase()+" "]=(T[Yt[1].toLowerCase()+" "]||[]).concat(Yt[2]);Yt=T[Dt.toLowerCase()+" "]}return Yt==null?null:Yt.join(", ")},getAllResponseHeaders:function(){return B?E:null},setRequestHeader:function(Dt,Yt){return B==null&&(Dt=qn[Dt.toLowerCase()]=qn[Dt.toLowerCase()]||Dt,en[Dt]=Yt),this},overrideMimeType:function(Dt){return B==null&&(ne.mimeType=Dt),this},statusCode:function(Dt){var Yt;if(Dt)if(B)bt.always(Dt[bt.status]);else for(Yt in Dt)un[Yt]=[un[Yt],Dt[Yt]];return this},abort:function(Dt){var Yt=Dt||Yn;return p&&p.abort(Yt),Ki(0,Yt),this}};if(Rt.promise(bt),ne.url=((a||ne.url||ns.href)+"").replace(Ph,ns.protocol+"//"),ne.type=c.method||c.type||ne.method||ne.type,ne.dataTypes=(ne.dataType||"*").toLowerCase().match(He)||[""],ne.crossDomain==null){H=x.createElement("a");try{H.href=ne.url,H.href=H.href,ne.crossDomain=Ba.protocol+"//"+Ba.host!=H.protocol+"//"+H.host}catch{ne.crossDomain=!0}}if(ne.data&&ne.processData&&typeof ne.data!="string"&&(ne.data=f.param(ne.data,ne.traditional)),$l(ql,ne,c,bt),B)return bt;X=f.event&&ne.global,X&&f.active++===0&&f.event.trigger("ajaxStart"),ne.type=ne.type.toUpperCase(),ne.hasContent=!Ch.test(ne.type),v=ne.url.replace(bh,""),ne.hasContent?ne.data&&ne.processData&&(ne.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ne.data=ne.data.replace(Th,"+")):(de=ne.url.slice(v.length),ne.data&&(ne.processData||typeof ne.data=="string")&&(v+=(Ua.test(v)?"&":"?")+ne.data,delete ne.data),ne.cache===!1&&(v=v.replace(Ah,"$1"),de=(Ua.test(v)?"&":"?")+"_="+Gl.guid+++de),ne.url=v+de),ne.ifModified&&(f.lastModified[v]&&bt.setRequestHeader("If-Modified-Since",f.lastModified[v]),f.etag[v]&&bt.setRequestHeader("If-None-Match",f.etag[v])),(ne.data&&ne.hasContent&&ne.contentType!==!1||c.contentType)&&bt.setRequestHeader("Content-Type",ne.contentType),bt.setRequestHeader("Accept",ne.dataTypes[0]&&ne.accepts[ne.dataTypes[0]]?ne.accepts[ne.dataTypes[0]]+(ne.dataTypes[0]!=="*"?", "+Yl+"; q=0.01":""):ne.accepts["*"]);for(oe in ne.headers)bt.setRequestHeader(oe,ne.headers[oe]);if(ne.beforeSend&&(ne.beforeSend.call(ve,bt,ne)===!1||B))return bt.abort();if(Yn="abort",dt.add(ne.complete),bt.done(ne.success),bt.fail(ne.error),p=$l(Fa,ne,c,bt),!p)Ki(-1,"No Transport");else{if(bt.readyState=1,X&&st.trigger("ajaxSend",[bt,ne]),B)return bt;ne.async&&ne.timeout>0&&(R=e.setTimeout(function(){bt.abort("timeout")},ne.timeout));try{B=!1,p.send(en,Ki)}catch(Dt){if(B)throw Dt;Ki(-1,Dt)}}function Ki(Dt,Yt,rs,za){var Kn,ss,$n,Pi,Di,Ln=Yt;B||(B=!0,R&&e.clearTimeout(R),p=void 0,E=za||"",bt.readyState=Dt>0?4:0,Kn=Dt>=200&&Dt<300||Dt===304,rs&&(Pi=Dh(ne,bt,rs)),!Kn&&f.inArray("script",ne.dataTypes)>-1&&f.inArray("json",ne.dataTypes)<0&&(ne.converters["text script"]=function(){}),Pi=Lh(ne,Pi,bt,Kn),Kn?(ne.ifModified&&(Di=bt.getResponseHeader("Last-Modified"),Di&&(f.lastModified[v]=Di),Di=bt.getResponseHeader("etag"),Di&&(f.etag[v]=Di)),Dt===204||ne.type==="HEAD"?Ln="nocontent":Dt===304?Ln="notmodified":(Ln=Pi.state,ss=Pi.data,$n=Pi.error,Kn=!$n)):($n=Ln,(Dt||!Ln)&&(Ln="error",Dt<0&&(Dt=0))),bt.status=Dt,bt.statusText=(Yt||Ln)+"",Kn?Rt.resolveWith(ve,[ss,Ln,bt]):Rt.rejectWith(ve,[bt,Ln,$n]),bt.statusCode(un),un=void 0,X&&st.trigger(Kn?"ajaxSuccess":"ajaxError",[bt,ne,Kn?ss:$n]),dt.fireWith(ve,[bt,Ln]),X&&(st.trigger("ajaxComplete",[bt,ne]),--f.active||f.event.trigger("ajaxStop")))}return bt},getJSON:function(a,c,p){return f.get(a,c,p,"json")},getScript:function(a,c){return f.get(a,void 0,c,"script")}}),f.each(["get","post"],function(a,c){f[c]=function(p,v,E,T){return w(v)&&(T=T||E,E=v,v=void 0),f.ajax(f.extend({url:p,type:c,dataType:T,data:v,success:E},f.isPlainObject(p)&&p))}}),f.ajaxPrefilter(function(a){var c;for(c in a.headers)c.toLowerCase()==="content-type"&&(a.contentType=a.headers[c]||"")}),f._evalUrl=function(a,c,p){return f.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(v){f.globalEval(v,c,p)}})},f.fn.extend({wrapAll:function(a){var c;return this[0]&&(w(a)&&(a=a.call(this[0])),c=f(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var p=this;p.firstElementChild;)p=p.firstElementChild;return p}).append(this)),this},wrapInner:function(a){return w(a)?this.each(function(c){f(this).wrapInner(a.call(this,c))}):this.each(function(){var c=f(this),p=c.contents();p.length?p.wrapAll(a):c.append(a)})},wrap:function(a){var c=w(a);return this.each(function(p){f(this).wrapAll(c?a.call(this,p):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){f(this).replaceWith(this.childNodes)}),this}}),f.expr.pseudos.hidden=function(a){return!f.expr.pseudos.visible(a)},f.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},f.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Ih={0:200,1223:204},is=f.ajaxSettings.xhr();b.cors=!!is&&"withCredentials"in is,b.ajax=is=!!is,f.ajaxTransport(function(a){var c,p;if(b.cors||is&&!a.crossDomain)return{send:function(v,E){var T,R=a.xhr();if(R.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(T in a.xhrFields)R[T]=a.xhrFields[T];a.mimeType&&R.overrideMimeType&&R.overrideMimeType(a.mimeType),!a.crossDomain&&!v["X-Requested-With"]&&(v["X-Requested-With"]="XMLHttpRequest");for(T in v)R.setRequestHeader(T,v[T]);c=function(H){return function(){c&&(c=p=R.onload=R.onerror=R.onabort=R.ontimeout=R.onreadystatechange=null,H==="abort"?R.abort():H==="error"?typeof R.status!="number"?E(0,"error"):E(R.status,R.statusText):E(Ih[R.status]||R.status,R.statusText,(R.responseType||"text")!=="text"||typeof R.responseText!="string"?{binary:R.response}:{text:R.responseText},R.getAllResponseHeaders()))}},R.onload=c(),p=R.onerror=R.ontimeout=c("error"),R.onabort!==void 0?R.onabort=p:R.onreadystatechange=function(){R.readyState===4&&e.setTimeout(function(){c&&p()})},c=c("abort");try{R.send(a.hasContent&&a.data||null)}catch(H){if(c)throw H}},abort:function(){c&&c()}}}),f.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return f.globalEval(a),a}}}),f.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),f.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var c,p;return{send:function(v,E){c=f("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",p=function(T){c.remove(),p=null,T&&E(T.type==="error"?404:200,T.type)}),x.head.appendChild(c[0])},abort:function(){p&&p()}}}});var Zl=[],Ha=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Zl.pop()||f.expando+"_"+Gl.guid++;return this[a]=!0,a}}),f.ajaxPrefilter("json jsonp",function(a,c,p){var v,E,T,R=a.jsonp!==!1&&(Ha.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ha.test(a.data)&&"data");if(R||a.dataTypes[0]==="jsonp")return v=a.jsonpCallback=w(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,R?a[R]=a[R].replace(Ha,"$1"+v):a.jsonp!==!1&&(a.url+=(Ua.test(a.url)?"&":"?")+a.jsonp+"="+v),a.converters["script json"]=function(){return T||f.error(v+" was not called"),T[0]},a.dataTypes[0]="json",E=e[v],e[v]=function(){T=arguments},p.always(function(){E===void 0?f(e).removeProp(v):e[v]=E,a[v]&&(a.jsonpCallback=c.jsonpCallback,Zl.push(v)),T&&w(E)&&E(T[0]),T=E=void 0}),"script"}),b.createHTMLDocument=function(){var a=x.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",a.childNodes.length===2}(),f.parseHTML=function(a,c,p){if(typeof a!="string")return[];typeof c=="boolean"&&(p=c,c=!1);var v,E,T;return c||(b.createHTMLDocument?(c=x.implementation.createHTMLDocument(""),v=c.createElement("base"),v.href=x.location.href,c.head.appendChild(v)):c=x),E=ke.exec(a),T=!p&&[],E?[c.createElement(E[1])]:(E=Sn([a],c,T),T&&T.length&&f(T).remove(),f.merge([],E.childNodes))},f.fn.load=function(a,c,p){var v,E,T,R=this,H=a.indexOf(" ");return H>-1&&(v=qi(a.slice(H)),a=a.slice(0,H)),w(c)?(p=c,c=void 0):c&&typeof c=="object"&&(E="POST"),R.length>0&&f.ajax({url:a,type:E||"GET",dataType:"html",data:c}).done(function(B){T=arguments,R.html(v?f("<div>").append(f.parseHTML(B)).find(v):B)}).always(p&&function(B,X){R.each(function(){p.apply(this,T||[B.responseText,X,B])})}),this},f.expr.pseudos.animated=function(a){return f.grep(f.timers,function(c){return a===c.elem}).length},f.offset={setOffset:function(a,c,p){var v,E,T,R,H,B,X,oe=f.css(a,"position"),de=f(a),ne={};oe==="static"&&(a.style.position="relative"),H=de.offset(),T=f.css(a,"top"),B=f.css(a,"left"),X=(oe==="absolute"||oe==="fixed")&&(T+B).indexOf("auto")>-1,X?(v=de.position(),R=v.top,E=v.left):(R=parseFloat(T)||0,E=parseFloat(B)||0),w(c)&&(c=c.call(a,p,f.extend({},H))),c.top!=null&&(ne.top=c.top-H.top+R),c.left!=null&&(ne.left=c.left-H.left+E),"using"in c?c.using.call(a,ne):de.css(ne)}},f.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(E){f.offset.setOffset(this,a,E)});var c,p,v=this[0];if(v)return v.getClientRects().length?(c=v.getBoundingClientRect(),p=v.ownerDocument.defaultView,{top:c.top+p.pageYOffset,left:c.left+p.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,c,p,v=this[0],E={top:0,left:0};if(f.css(v,"position")==="fixed")c=v.getBoundingClientRect();else{for(c=this.offset(),p=v.ownerDocument,a=v.offsetParent||p.documentElement;a&&(a===p.body||a===p.documentElement)&&f.css(a,"position")==="static";)a=a.parentNode;a&&a!==v&&a.nodeType===1&&(E=f(a).offset(),E.top+=f.css(a,"borderTopWidth",!0),E.left+=f.css(a,"borderLeftWidth",!0))}return{top:c.top-E.top-f.css(v,"marginTop",!0),left:c.left-E.left-f.css(v,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&f.css(a,"position")==="static";)a=a.offsetParent;return a||Ze})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var p=c==="pageYOffset";f.fn[a]=function(v){return Ne(this,function(E,T,R){var H;if(M(E)?H=E:E.nodeType===9&&(H=E.defaultView),R===void 0)return H?H[c]:E[T];H?H.scrollTo(p?H.pageXOffset:R,p?R:H.pageYOffset):E[T]=R},a,v,arguments.length)}}),f.each(["top","left"],function(a,c){f.cssHooks[c]=se(b.pixelPosition,function(p,v){if(v)return v=re(p,c),Qr.test(v)?f(p).position()[c]+"px":v})}),f.each({Height:"height",Width:"width"},function(a,c){f.each({padding:"inner"+a,content:c,"":"outer"+a},function(p,v){f.fn[v]=function(E,T){var R=arguments.length&&(p||typeof E!="boolean"),H=p||(E===!0||T===!0?"margin":"border");return Ne(this,function(B,X,oe){var de;return M(B)?v.indexOf("outer")===0?B["inner"+a]:B.document.documentElement["client"+a]:B.nodeType===9?(de=B.documentElement,Math.max(B.body["scroll"+a],de["scroll"+a],B.body["offset"+a],de["offset"+a],de["client"+a])):oe===void 0?f.css(B,X,H):f.style(B,X,oe,H)},c,R?E:void 0,R)}})}),f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,c){f.fn[c]=function(p){return this.on(c,p)}}),f.fn.extend({bind:function(a,c,p){return this.on(a,null,c,p)},unbind:function(a,c){return this.off(a,null,c)},delegate:function(a,c,p,v){return this.on(c,a,p,v)},undelegate:function(a,c,p){return arguments.length===1?this.off(a,"**"):this.off(c,a||"**",p)},hover:function(a,c){return this.on("mouseenter",a).on("mouseleave",c||a)}}),f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,c){f.fn[c]=function(p,v){return arguments.length>0?this.on(c,null,p,v):this.trigger(c)}});var Nh=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;f.proxy=function(a,c){var p,v,E;if(typeof c=="string"&&(p=a[c],c=a,a=p),!!w(a))return v=s.call(arguments,2),E=function(){return a.apply(c||this,v.concat(s.call(arguments)))},E.guid=a.guid=a.guid||f.guid++,E},f.holdReady=function(a){a?f.readyWait++:f.ready(!0)},f.isArray=Array.isArray,f.parseJSON=JSON.parse,f.nodeName=d,f.isFunction=w,f.isWindow=M,f.camelCase=C,f.type=D,f.now=Date.now,f.isNumeric=function(a){var c=f.type(a);return(c==="number"||c==="string")&&!isNaN(a-parseFloat(a))},f.trim=function(a){return a==null?"":(a+"").replace(Nh,"$1")};var Uh=e.jQuery,Oh=e.$;return f.noConflict=function(a){return e.$===f&&(e.$=Oh),a&&e.jQuery===f&&(e.jQuery=Uh),f},typeof t>"u"&&(e.jQuery=e.$=f),f})}(Ea)),Ea.exports}var Qx=vh();const Jt=Zx(Qx);var wu={},Ru;function e0(){if(Ru)return wu;Ru=1;var r=vh(),e,t="",n=Math.PI,i=n/2,s="ontouchstart"in window,o=s?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},l={backward:["bl","tl"],forward:["br","tr"],all:["tl","bl","tr","br"]},u=["single","double"],h={page:1,gradients:!0,duration:600,acceleration:!0,display:"double",when:null},m={folding:null,corners:"forward",cornerSize:100,gradients:!0,duration:600,acceleration:!0},_=6,y={0:{top:0,left:0,right:"auto",bottom:"auto"},1:{top:0,right:0,left:"auto",bottom:"auto"}},S=function(d,g,A,L){return{css:{position:"absolute",top:d,left:g,overflow:L||"hidden","z-index":A||"auto"}}},b=function(d,g,A,L,I){var V=1-I,Z=V*V*V,te=I*I*I;return M(Math.round(Z*d.x+3*I*V*V*g.x+3*I*I*V*A.x+te*L.x),Math.round(Z*d.y+3*I*V*V*g.y+3*I*I*V*A.y+te*L.y))},w=function(d){return d/n*180},M=function(d,g){return{x:d,y:g}},x=function(d,g,A){return e&&A?" translate3d("+d+"px,"+g+"px, 0px) ":" translate("+d+"px, "+g+"px) "},F=function(d){return" rotate("+d+"deg) "},O=function(d,g){return Object.prototype.hasOwnProperty.call(g,d)},D=function(){for(var d=["Moz","Webkit","Khtml","O","ms"],g=d.length,A="";g--;)d[g]+"Transform"in document.body.style&&(A="-"+d[g].toLowerCase()+"-");return A},W=function(d,g,A,L,I){var V,Z=[];if(t=="-webkit-"){for(V=0;V<I;V++)Z.push("color-stop("+L[V][0]+", "+L[V][1]+")");d.css({"background-image":"-webkit-gradient(linear, "+g.x+"% "+g.y+"%,  "+A.x+"% "+A.y+"%, "+Z.join(",")+" )"})}else{g={x:g.x/100*d.width(),y:g.y/100*d.height()},A={x:A.x/100*d.width(),y:A.y/100*d.height()};var te=A.x-g.x,le=A.y-g.y,ie=Math.atan2(le,te),ge=ie-Math.PI/2,Ee=Math.abs(d.width()*Math.sin(ge))+Math.abs(d.height()*Math.cos(ge)),Se=Math.sqrt(le*le+te*te),ke=M(A.x<g.x?d.width():0,A.y<g.y?d.height():0),Qe=Math.tan(ie),he=-1/Qe,_e=(he*ke.x-ke.y-Qe*g.x+g.y)/(he-Qe),be={x:_e,y:he*_e-he*ke.x+ke.y},Te=Math.sqrt(Math.pow(be.x-g.x,2)+Math.pow(be.y-g.y,2));for(V=0;V<I;V++)Z.push(" "+L[V][1]+" "+(Te+Se*L[V][0])*100/Ee+"%");d.css({"background-image":t+"linear-gradient("+-ie+"rad,"+Z.join(",")+")"})}},k={init:function(d){e===void 0&&(e="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style,t=D());var g,A=this.data(),L=this.children();if(d=r.extend({width:this.width(),height:this.height()},h,d),A.opts=d,A.pageObjs={},A.pages={},A.pageWrap={},A.pagePlace={},A.pageMv=[],A.totalPages=d.pages||0,d.when)for(g in d.when)O(g,d.when)&&this.bind(g,d.when[g]);for(this.css({position:"relative",width:d.width,height:d.height}),this.turn("display",d.display),e&&!s&&d.acceleration&&this.transform(x(0,0,!0)),g=0;g<L.length;g++)this.turn("addPage",L[g],g+1);return this.turn("page",d.page),l=r.extend({},l,d.corners),r(this).bind(o.start,function(I){for(var V in A.pages)if(O(V,A.pages)&&f._eventStart.call(A.pages[V],I)===!1)return!1}),r(document).bind(o.move,function(I){for(var V in A.pages)O(V,A.pages)&&f._eventMove.call(A.pages[V],I)}).bind(o.end,function(I){for(var V in A.pages)O(V,A.pages)&&f._eventEnd.call(A.pages[V],I)}),A.done=!0,this},addPage:function(d,g){var A=!1,L=this.data(),I=L.totalPages+1;if(g){if(g==I)g=I,A=!0;else if(g>I)throw new Error('It is impossible to add the page "'+g+'", the maximum value is: "'+I+'"')}else g=I,A=!0;return g>=1&&g<=I&&(L.done&&this.turn("stop"),g in L.pageObjs&&k._movePages.call(this,g,1),A&&(L.totalPages=I),L.pageObjs[g]=r(d).addClass("turn-page p"+g),k._addPage.call(this,g),L.done&&this.turn("update"),k._removeFromDOM.call(this)),this},_addPage:function(d){var g=this.data(),A=g.pageObjs[d];if(A)if(k._necessPage.call(this,d)){if(!g.pageWrap[d]){var L=g.display=="double"?this.width()/2:this.width(),I=this.height();A.css({width:L,height:I}),g.pagePlace[d]=d,g.pageWrap[d]=r("<div/>",{class:"turn-page-wrapper",page:d,css:{position:"absolute",overflow:"hidden",width:L,height:I}}).css(y[g.display=="double"?d%2:0]),this.append(g.pageWrap[d]),g.pageWrap[d].prepend(g.pageObjs[d])}(!d||k._setPageLoc.call(this,d)==1)&&k._makeFlip.call(this,d)}else g.pagePlace[d]=0,g.pageObjs[d]&&g.pageObjs[d].remove()},hasPage:function(d){return d in this.data().pageObjs},_makeFlip:function(d){var g=this.data();if(!g.pages[d]&&g.pagePlace[d]==d){var A=g.display=="single",L=d%2;g.pages[d]=g.pageObjs[d].css({width:A?this.width():this.width()/2,height:this.height()}).flip({page:d,next:A&&d===g.totalPages?d-1:L||A?d+1:d-1,turn:this,duration:g.opts.duration,acceleration:g.opts.acceleration,corners:A?"all":L?"forward":"backward",backGradient:g.opts.gradients,frontGradient:g.opts.gradients}).flip("disable",g.disabled).bind("pressed",k._pressed).bind("released",k._released).bind("start",k._start).bind("end",k._end).bind("flip",k._flip)}return g.pages[d]},_makeRange:function(){var d;this.data();var g=this.turn("range");for(d=g[0];d<=g[1];d++)k._addPage.call(this,d)},range:function(d){var g,A,L,I=this.data();d=d||I.tpage||I.page;var V=k._view.call(this,d);if(d<1||d>I.totalPages)throw new Error('"'+d+'" is not a page for range');return V[1]=V[1]||V[0],V[0]>=1&&V[1]<=I.totalPages?(g=Math.floor((_-2)/2),I.totalPages-V[1]>V[0]?(A=Math.min(V[0]-1,g),L=2*g-A):(L=Math.min(I.totalPages-V[1],g),A=2*g-L)):(A=_-1,L=_-1),[Math.max(1,V[0]-A),Math.min(I.totalPages,V[1]+L)]},_necessPage:function(d){if(d===0)return!0;var g=this.turn("range");return d>=g[0]&&d<=g[1]},_removeFromDOM:function(){var d,g=this.data();for(d in g.pageWrap)O(d,g.pageWrap)&&!k._necessPage.call(this,d)&&k._removePageFromDOM.call(this,d)},_removePageFromDOM:function(d){var g=this.data();if(g.pages[d]){var A=g.pages[d].data();A.f&&A.f.fwrapper&&A.f.fwrapper.remove(),g.pages[d].remove(),delete g.pages[d]}g.pageObjs[d]&&g.pageObjs[d].remove(),g.pageWrap[d]&&(g.pageWrap[d].remove(),delete g.pageWrap[d]),delete g.pagePlace[d]},removePage:function(d){var g=this.data();return g.pageObjs[d]&&(this.turn("stop"),k._removePageFromDOM.call(this,d),delete g.pageObjs[d],k._movePages.call(this,d,-1),g.totalPages=g.totalPages-1,k._makeRange.call(this),g.page>g.totalPages&&this.turn("page",g.totalPages)),this},_movePages:function(d,g){var A,L=this.data(),I=L.display=="single",V=function(Z){var te=Z+g,le=te%2;L.pageObjs[Z]&&(L.pageObjs[te]=L.pageObjs[Z].removeClass("page"+Z).addClass("page"+te)),L.pagePlace[Z]&&L.pageWrap[Z]&&(L.pagePlace[te]=te,L.pageWrap[te]=L.pageWrap[Z].css(y[I?0:le]).attr("page",te),L.pages[Z]&&(L.pages[te]=L.pages[Z].flip("options",{page:te,next:I||le?te+1:te-1,corners:I?"all":le?"forward":"backward"})),g&&(delete L.pages[Z],delete L.pagePlace[Z],delete L.pageObjs[Z],delete L.pageWrap[Z],delete L.pageObjs[Z]))};if(g>0)for(A=L.totalPages;A>=d;A--)V(A);else for(A=d;A<=L.totalPages;A++)V(A)},display:function(d){var g=this.data(),A=g.display;if(d){if(r.inArray(d,u)==-1)throw new Error('"'+d+'" is not a value for display');if(d=="single"?g.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),g.pageObjs[0]=r("<div />",{class:"turn-page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this)):g.pageObjs[0]&&(this.turn("stop").css({overflow:""}),g.pageObjs[0].remove(),delete g.pageObjs[0]),g.display=d,A){var L=this.turn("size");k._movePages.call(this,1,0),this.turn("size",L.width,L.height).turn("update")}return this}else return A},animating:function(){return this.data().pageMv.length>0},disable:function(d){var g,A=this.data(),L=this.turn("view");A.disabled=d===void 0||d===!0;for(g in A.pages)O(g,A.pages)&&A.pages[g].flip("disable",d?r.inArray(g,L):!1);return this},size:function(d,g){if(d&&g){var A=this.data(),L=A.display=="double"?d/2:d,I;this.css({width:d,height:g}),A.pageObjs[0]&&A.pageObjs[0].css({width:L,height:g});for(I in A.pageWrap)O(I,A.pageWrap)&&(A.pageObjs[I].css({width:L,height:g}),A.pageWrap[I].css({width:L,height:g}),A.pages[I]&&A.pages[I].css({width:L,height:g}));return this.turn("resize"),this}else return{width:this.width(),height:this.height()}},resize:function(){var d,g=this.data();for(g.pages[0]&&(g.pageWrap[0].css({left:-this.width()}),g.pages[0].flip("resize",!0)),d=1;d<=g.totalPages;d++)g.pages[d]&&g.pages[d].flip("resize",!0)},_removeMv:function(d){var g,A=this.data();for(g=0;g<A.pageMv.length;g++)if(A.pageMv[g]==d)return A.pageMv.splice(g,1),!0;return!1},_addMv:function(d){var g=this.data();k._removeMv.call(this,d),g.pageMv.push(d)},_view:function(d){var g=this.data();return d=d||g.page,g.display=="double"?d%2?[d-1,d]:[d,d+1]:[d]},view:function(d){var g=this.data(),A=k._view.call(this,d);return g.display=="double"?[A[0]>0?A[0]:0,A[1]<=g.totalPages?A[1]:0]:[A[0]>0&&A[0]<=g.totalPages?A[0]:0]},stop:function(d){var g,A,L=this.data(),I=L.pageMv;L.pageMv=[],L.tpage&&(L.page=L.tpage,delete L.tpage);for(g in I)O(g,I)&&(A=L.pages[I[g]].data().f.opts,f._moveFoldingPage.call(L.pages[I[g]],null),L.pages[I[g]].flip("hideFoldedPage"),L.pagePlace[A.next]=A.next,A.force&&(A.next=A.page%2===0?A.page-1:A.page+1,delete A.force));return this.turn("update"),this},pages:function(d){var g=this.data();if(d){if(d<g.totalPages){for(var A=d+1;A<=g.totalPages;A++)this.turn("removePage",A);this.turn("page")>d&&this.turn("page",d)}return g.totalPages=d,this}else return g.totalPages},_fitPage:function(d,g){var A=this.data(),L=this.turn("view",d);A.page!=d&&(this.trigger("turning",[d,L]),r.inArray(1,L)!=-1&&this.trigger("first"),r.inArray(A.totalPages,L)!=-1&&this.trigger("last")),A.pageObjs[d]&&(A.tpage=d,this.turn("stop",g),k._removeFromDOM.call(this),k._makeRange.call(this),this.trigger("turned",[d,L]))},_turnPage:function(d){var g,A,L=this.data(),I=this.turn("view"),V=this.turn("view",d);if(L.page!=d&&(this.trigger("turning",[d,V]),r.inArray(1,V)!=-1&&this.trigger("first"),r.inArray(L.totalPages,V)!=-1&&this.trigger("last")),!!L.pageObjs[d]&&(L.tpage=d,this.turn("stop"),k._makeRange.call(this),L.display=="single"?(g=I[0],A=V[0]):I[1]&&d>I[1]?(g=I[1],A=V[0]):I[0]&&d<I[0]&&(g=I[0],A=V[1]),L.pages[g])){var Z=L.pages[g].data().f.opts;L.tpage=A,Z.next!=A&&(Z.next=A,L.pagePlace[A]=Z.page,Z.force=!0),L.display=="single"?L.pages[g].flip("turnPage",V[0]>I[0]?"br":"bl"):L.pages[g].flip("turnPage")}},page:function(d){d=parseInt(d,10);var g=this.data();return d>0&&d<=g.totalPages?(!g.done||r.inArray(d,this.turn("view"))!=-1?k._fitPage.call(this,d):k._turnPage.call(this,d),this):g.page},next:function(){var d=this.data();return this.turn("page",k._view.call(this,d.page).pop()+1)},previous:function(){var d=this.data();return this.turn("page",k._view.call(this,d.page).shift()-1)},_addMotionPage:function(){var d=r(this).data().f.opts,g=d.turn,A=g.data();d.pageMv=d.page,k._addMv.call(g,d.pageMv),A.pagePlace[d.next]=d.page,g.turn("update")},_start:function(d,g,A){var L=g.turn.data(),I=r.Event("start");if(d.stopPropagation(),g.turn.trigger(I,[g,A]),I.isDefaultPrevented()){d.preventDefault();return}if(L.display=="single"){var V=A.charAt(1)=="l";g.page==1&&V||g.page==L.totalPages&&!V?d.preventDefault():V?(g.next=g.next<g.page?g.next:g.page-1,g.force=!0):g.next=g.next>g.page?g.next:g.page+1}k._addMotionPage.call(this)},_end:function(d,g){var A=r(this),L=A.data().f,I=L.opts,V=I.turn,Z=V.data();d.stopPropagation(),g||Z.tpage?(Z.tpage==I.next||Z.tpage==I.page)&&(delete Z.tpage,k._fitPage.call(V,Z.tpage||I.next,!0)):(k._removeMv.call(V,I.pageMv),V.turn("update"))},_pressed:function(){var d,g=r(this),A=g.data().f,L=A.opts.turn,I=L.data().pages;for(d in I)d!=A.opts.page&&I[d].flip("disable",!0);return A.time=new Date().getTime()},_released:function(d,g){var A=r(this),L=A.data().f;d.stopPropagation(),(new Date().getTime()-L.time<200||g.x<0||g.x>r(this).width())&&(d.preventDefault(),L.opts.turn.data().tpage=L.opts.next,L.opts.turn.turn("update"),r(A).flip("turnPage"))},_flip:function(){var d=r(this).data().f.opts;d.turn.trigger("turn",[d.next])},calculateZ:function(d){var g,A,L,I,V,Z=this,te=this.data(),le=this.turn("view"),ie=le[0]||le[1],ge={pageZ:{},partZ:{},pageV:{}},Ee=function(Se){var ke=Z.turn("view",Se);ke[0]&&(ge.pageV[ke[0]]=!0),ke[1]&&(ge.pageV[ke[1]]=!0)};for(g=0;g<d.length;g++)A=d[g],L=te.pages[A].data().f.opts.next,I=te.pagePlace[A],Ee(A),Ee(L),V=te.pagePlace[L]==L?L:A,ge.pageZ[V]=te.totalPages-Math.abs(ie-V),ge.partZ[I]=te.totalPages*2+Math.abs(ie-V);return ge},update:function(){var d,g=this.data();if(g.pageMv.length&&g.pageMv[0]!==0){var A=this.turn("calculateZ",g.pageMv),L=this.turn("view",g.tpage);g.pagePlace[L[0]]==L[0]?L[0]:g.pagePlace[L[1]]==L[1]&&L[1];for(d in g.pageWrap)O(d,g.pageWrap)&&(g.pageWrap[d].css({display:A.pageV[d]?"":"none","z-index":A.pageZ[d]||0}),g.pages[d]&&(g.pages[d].flip("z",A.partZ[d]||null),A.pageV[d]&&g.pages[d].flip("resize"),g.tpage&&g.pages[d].flip("disable",!0)))}else for(d in g.pageWrap)if(O(d,g.pageWrap)){var I=k._setPageLoc.call(this,d);g.pages[d]&&g.pages[d].flip("disable",g.disabled||I!=1).flip("z",null)}},_setPageLoc:function(d){var g=this.data(),A=this.turn("view");return d==A[0]||d==A[1]?(g.pageWrap[d].css({"z-index":g.totalPages,display:""}),1):g.display=="single"&&d==A[0]+1||g.display=="double"&&d==A[0]-2||d==A[1]+2?(g.pageWrap[d].css({"z-index":g.totalPages-1,display:""}),2):(g.pageWrap[d].css({"z-index":0,display:"none"}),0)}},f={init:function(d){return d.gradients&&(d.frontGradient=!0,d.backGradient=!0),this.data({f:{}}),this.flip("options",d),f._addPageWrapper.call(this),this},setData:function(d){var g=this.data();return g.f=r.extend(g.f,d),this},options:function(d){var g=this.data().f;return d?(f.setData.call(this,{opts:r.extend({},g.opts||m,d)}),this):g.opts},z:function(d){var g=this.data().f;return g.opts["z-index"]=d,g.fwrapper.css({"z-index":d||parseInt(g.parent.css("z-index"),10)||0}),this},_cAllowed:function(){return l[this.data().f.opts.corners]||this.data().f.opts.corners},_cornerActivated:function(d){if(d.originalEvent===void 0)return!1;d=s?d.originalEvent.touches:[d];var g=this.data().f,A=g.parent.offset(),L=this.width(),I=this.height(),V={x:Math.max(0,d[0].pageX-A.left),y:Math.max(0,d[0].pageY-A.top)},Z=g.opts.cornerSize,te=f._cAllowed.call(this);if(V.x<=0||V.y<=0||V.x>=L||V.y>=I)return!1;if(V.y<Z)V.corner="t";else if(V.y>=I-Z)V.corner="b";else return!1;if(V.x<=Z)V.corner+="l";else if(V.x>=L-Z)V.corner+="r";else return!1;return r.inArray(V.corner,te)==-1?!1:V},_c:function(d,g){return g=g||0,{tl:M(g,g),tr:M(this.width()-g,g),bl:M(g,this.height()-g),br:M(this.width()-g,this.height()-g)}[d]},_c2:function(d){return{tl:M(this.width()*2,0),tr:M(-this.width(),0),bl:M(this.width()*2,this.height()),br:M(-this.width(),this.height())}[d]},_foldingPage:function(d){var g=this.data().f.opts;if(g.folding)return g.folding;if(g.turn){var A=g.turn.data();return A.display=="single"?A.pageObjs[g.next]?A.pageObjs[0]:null:A.pageObjs[g.next]}},_backGradient:function(){var d=this.data().f,g=d.opts.turn,A=d.opts.backGradient&&(!g||g.data().display=="single"||d.opts.page!=2&&d.opts.page!=g.data().totalPages-1);return A&&!d.bshadow&&(d.bshadow=r("<div/>",S(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(d.parent)),A},resize:function(d){var g=this.data().f,A=this.width(),L=this.height(),I=Math.round(Math.sqrt(Math.pow(A,2)+Math.pow(L,2)));d&&(g.wrapper.css({width:I,height:I}),g.fwrapper.css({width:I,height:I}).children(":first-child").css({width:A,height:L}),g.fpage.css({width:L,height:A}),g.opts.frontGradient&&g.ashadow.css({width:L,height:A}),f._backGradient.call(this)&&g.bshadow.css({width:A,height:L})),g.parent.is(":visible")&&(g.fwrapper.css({top:g.parent.offset().top,left:g.parent.offset().left}),g.opts.turn&&g.fparent.css({top:-g.opts.turn.offset().top,left:-g.opts.turn.offset().left})),this.flip("z",g.opts["z-index"])},_addPageWrapper:function(){var d=this.data().f,g=this.parent();if(!d.wrapper){if(this.css("left"),this.css("top"),this.width(),this.height(),d.parent=g,d.fparent=d.opts.turn?d.opts.turn.data().fparent:r("#turn-fwrappers"),!d.fparent){var A=r("<div/>",{css:{"pointer-events":"none"}}).hide();A.data().flips=0,d.opts.turn?(A.css(S(-d.opts.turn.offset().top,-d.opts.turn.offset().left,"auto","visible").css).appendTo(d.opts.turn),d.opts.turn.data().fparent=A):A.css(S(0,0,"auto","visible").css).attr("id","turn-fwrappers").appendTo(r("body")),d.fparent=A}this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"}),d.wrapper=r("<div/>",S(0,0,this.css("z-index"))).appendTo(g).prepend(this),d.fwrapper=r("<div/>",S(g.offset().top,g.offset().left)).hide().appendTo(d.fparent),d.fpage=r("<div/>",{css:{cursor:"default"}}).appendTo(r("<div/>",S(0,0,0,"visible")).appendTo(d.fwrapper)),d.opts.frontGradient&&(d.ashadow=r("<div/>",S(0,0,1)).appendTo(d.fpage)),f.setData.call(this,d),f.resize.call(this,!0)}},_fold:function(d){var g=this,A=0,L=0,I,V,Z,te,le,ie,ge=M(0,0),Ee=M(0,0),Se=M(0,0),ke=this.width(),Qe=this.height(),he=f._foldingPage.call(this),_e=this.data().f,be=_e.opts.acceleration,Te=_e.wrapper.height(),qe=f._c.call(this,d.corner),ut=d.corner.substr(0,1)=="t",He=d.corner.substr(1,1)=="l",Ot=function(){var Ye=M(qe.x?qe.x-d.x:d.x,qe.y?qe.y-d.y:d.y),z=Math.atan2(Ye.y,Ye.x),It;L=i-z,A=w(L),It=M(He?ke-Ye.x/2:d.x+Ye.x/2,Ye.y/2);var rt=L-Math.atan2(It.y,It.x),nt=Math.max(0,Math.sin(rt)*Math.sqrt(Math.pow(It.x,2)+Math.pow(It.y,2)));if(Se=M(nt*Math.sin(L),nt*Math.cos(L)),L>i&&(Se.x=Se.x+Math.abs(Se.y*Math.tan(z)),Se.y=0,Math.round(Se.x*Math.tan(n-L))<Qe))return d.y=Math.sqrt(Math.pow(Qe,2)+2*It.x*Ye.x),ut&&(d.y=Qe-d.y),Ot();if(L>i){var Ne=n-L,Pt=Te-Qe/Math.sin(Ne);ge=M(Math.round(Pt*Math.cos(Ne)),Math.round(Pt*Math.sin(Ne))),He&&(ge.x=-ge.x),ut&&(ge.y=-ge.y)}I=Math.round(Se.y/Math.tan(L)+Se.x);var Ve=ke-I,U=Ve*Math.cos(L*2),C=Ve*Math.sin(L*2);Ee=M(Math.round(He?Ve-U:I+U),Math.round(ut?C:Qe-C)),le=Ve*Math.sin(L);var J=f._c2.call(g,d.corner),pe=Math.sqrt(Math.pow(J.x-d.x,2)+Math.pow(J.y-d.y,2));return ie=pe<ke?pe/ke:1,_e.opts.frontGradient&&(te=le>100?(le-100)/le:0,V=M(le*Math.sin(i-L)/Qe*100,le*Math.cos(i-L)/ke*100),ut&&(V.y=100-V.y),He&&(V.x=100-V.x)),f._backGradient.call(g)&&(Z=M(le*Math.sin(L)/ke*100,le*Math.cos(L)/Qe*100),He||(Z.x=100-Z.x),ut||(Z.y=100-Z.y)),Se.x=Math.round(Se.x),Se.y=Math.round(Se.y),!0},At=function(Ye,z,It,rt){var nt=["0","auto"],Ne=(ke-Te)*It[0]/100,Pt=(Qe-Te)*It[1]/100,Ve={left:nt[z[0]],top:nt[z[1]],right:nt[z[2]],bottom:nt[z[3]]},U=rt!=90&&rt!=-90?He?-1:1:0;It=It[0]+"% "+It[1]+"%",g.css(Ve).transform(F(rt)+x(Ye.x+U,Ye.y,be),It),_e.fpage.parent().css(Ve),_e.wrapper.transform(x(-Ye.x+Ne-U,-Ye.y+Pt,be)+F(-rt),It),_e.fwrapper.transform(x(-Ye.x+ge.x+Ne,-Ye.y+ge.y+Pt,be)+F(-rt),It),_e.fpage.parent().transform(F(rt)+x(Ye.x+Ee.x-ge.x,Ye.y+Ee.y-ge.y,be),It),_e.opts.frontGradient&&W(_e.ashadow,M(He?100:0,ut?100:0),M(V.x,V.y),[[te,"rgba(0,0,0,0)"],[(1-te)*.8+te,"rgba(0,0,0,"+.2*ie+")"],[1,"rgba(255,255,255,"+.2*ie+")"]],3),f._backGradient.call(g)&&W(_e.bshadow,M(He?0:100,ut?0:100),M(Z.x,Z.y),[[.8,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,"+.3*ie+")"],[1,"rgba(0,0,0,0)"]],3)};switch(d.corner){case"tl":d.x=Math.max(d.x,1),Ot(),At(Se,[1,0,0,1],[100,0],A),_e.fpage.transform(x(-Qe,-ke,be)+F(90-A*2),"100% 100%"),he.transform(F(90)+x(0,-Qe,be),"0% 0%");break;case"tr":d.x=Math.min(d.x,ke-1),Ot(),At(M(-Se.x,Se.y),[0,0,0,1],[0,0],-A),_e.fpage.transform(x(0,-ke,be)+F(-90+A*2),"0% 100%"),he.transform(F(270)+x(-ke,0,be),"0% 0%");break;case"bl":d.x=Math.max(d.x,1),Ot(),At(M(Se.x,-Se.y),[1,1,0,0],[100,100],-A),_e.fpage.transform(x(-Qe,0,be)+F(-90+A*2),"100% 0%"),he.transform(F(270)+x(-ke,0,be),"0% 0%");break;case"br":d.x=Math.min(d.x,ke-1),Ot(),At(M(-Se.x,-Se.y),[0,1,1,0],[0,100],A),_e.fpage.transform(F(90-A*2),"0% 0%"),he.transform(F(90)+x(0,-Qe,be),"0% 0%");break}_e.point=d},_moveFoldingPage:function(d){var g=this.data().f,A=f._foldingPage.call(this);A&&(d?g.fpage.children()[g.ashadow?"1":"0"]||(f.setData.call(this,{backParent:A.parent()}),g.fpage.prepend(A)):g.backParent&&g.backParent.prepend(A))},_showFoldedPage:function(d,g){var A=f._foldingPage.call(this),L=this.data(),I=L.f;if(!I.point||I.point.corner!=d.corner){var V=r.Event("start");if(this.trigger(V,[I.opts,d.corner]),V.isDefaultPrevented())return!1}if(A){if(g){var Z=this,te=I.point&&I.point.corner==d.corner?I.point:f._c.call(this,d.corner,1);this.animatef({from:[te.x,te.y],to:[d.x,d.y],duration:500,frame:function(le){d.x=Math.round(le[0]),d.y=Math.round(le[1]),f._fold.call(Z,d)}})}else f._fold.call(this,d),L.effect&&!L.effect.turning&&this.animatef(!1);return I.fwrapper.is(":visible")||(I.fparent.show().data().flips++,f._moveFoldingPage.call(this,!0),I.fwrapper.show(),I.bshadow&&I.bshadow.show()),!0}return!1},hide:function(){var d=this.data().f,g=f._foldingPage.call(this);return--d.fparent.data().flips===0&&d.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform("","0% 100%"),d.wrapper.transform("","0% 100%"),d.fwrapper.hide(),d.bshadow&&d.bshadow.hide(),g.transform("","0% 0%"),this},hideFoldedPage:function(d){var g=this.data().f;if(g.point){var A=this,L=g.point,I=function(){g.point=null,A.flip("hide"),A.trigger("end",[!1])};if(d){var V=f._c.call(this,L.corner),Z=L.corner.substr(0,1)=="t",te=Z?Math.min(0,L.y-V.y)/2:Math.max(0,L.y-V.y)/2,le=M(L.x,L.y+te),ie=M(V.x,V.y-te);this.animatef({from:0,to:1,frame:function(ge){var Ee=b(L,le,ie,V,ge);L.x=Ee.x,L.y=Ee.y,f._fold.call(A,L)},complete:I,duration:800,hiding:!0})}else this.animatef(!1),I()}},turnPage:function(d){var g=this,A=this.data().f;d={corner:A.corner?A.corner.corner:d||f._cAllowed.call(this)[0]};var L=A.point||f._c.call(this,d.corner,A.opts.turn?A.opts.turn.data().opts.elevation:0),I=f._c2.call(this,d.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(V){var Z=b(L,L,I,I,V);d.x=Z.x,d.y=Z.y,f._showFoldedPage.call(g,d)},complete:function(){g.trigger("end",[!0])},duration:A.opts.duration,turning:!0}),A.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&this.data().effect.turning},_eventStart:function(d){var g=this.data().f;if(!g.disabled&&!this.flip("isTurning")){if(g.corner=f._cornerActivated.call(this,d),g.corner&&f._foldingPage.call(this,g.corner))return f._moveFoldingPage.call(this,!0),this.trigger("pressed",[g.point]),!1;g.corner=null}},_eventMove:function(d){var g=this.data().f;if(!g.disabled){if(d=s?d.originalEvent.touches:[d],g.corner){var A=g.parent.offset();g.corner.x=d[0].pageX-A.left,g.corner.y=d[0].pageY-A.top,f._showFoldedPage.call(this,g.corner)}else if(!this.data().effect&&this.is(":visible")){var L=f._cornerActivated.call(this,d[0]);if(L){var I=f._c.call(this,L.corner,g.opts.cornerSize/2);L.x=I.x,L.y=I.y,f._showFoldedPage.call(this,L,!0)}else f.hideFoldedPage.call(this,!0)}}},_eventEnd:function(){var d=this.data().f;if(!d.disabled&&d.point){var g=r.Event("released");this.trigger(g,[d.point]),g.isDefaultPrevented()||f.hideFoldedPage.call(this,!0)}d.corner=null},disable:function(d){return f.setData.call(this,{disabled:d}),this}},$=function(d,g,A){if(!A[0]||typeof A[0]=="object")return g.init.apply(d,A);if(g[A[0]]&&A[0].toString().substr(0,1)!="_")return g[A[0]].apply(d,Array.prototype.slice.call(A,1));throw A[0]+" is an invalid value"};return r.extend(r.fn,{flip:function(d,g){return $(this,f,arguments)},turn:function(d){return $(this,k,arguments)},transform:function(d,g){var A={};return g&&(A[t+"transform-origin"]=g),A[t+"transform"]=d,this.css(A)},animatef:function(d){var g=this.data();if(g.effect&&clearInterval(g.effect.handle),d){d.to.length||(d.to=[d.to]),d.from.length||(d.from=[d.from]),d.easing||(d.easing=function(ie,ge,Ee,Se,ke){return Se*Math.sqrt(1-(ge=ge/ke-1)*ge)+Ee});var A,L=[],I=d.to.length,V=this,Z=d.fps||30,te=-Z,le=function(){var ie,ge=[];for(te=Math.min(d.duration,te+Z),ie=0;ie<I;ie++)ge.push(d.easing(1,te,d.from[ie],L[ie],d.duration));d.frame(I==1?ge[0]:ge),te==d.duration&&(clearInterval(g.effect.handle),delete g.effect,V.data(g),d.complete&&d.complete())};for(A=0;A<I;A++)L.push(d.to[A]-d.from[A]);g.effect=d,g.effect.handle=setInterval(le,Z),this.data(g),le()}else delete g.effect}}),r.isTouch=s,wu}e0();function t0(){const r=document.getElementById("flipbook");if(!r){console.error('No flipbook container with id "flipbook" found');return}const e=document.createElement("div");e.className="page";const t=document.createElement("img");t.src="./img/innovation-pages/01.jpg",t.alt="Front Cover",e.appendChild(t),r.appendChild(e);for(let u=2;u<=57;u++){const h=document.createElement("div");h.className="page";const m=document.createElement("img"),_=u<10?String(u).padStart(2,"0"):u.toString();m.src=`./img/innovation-pages/${_}.jpg`,m.alt=`Page ${u}`,h.appendChild(m),r.appendChild(h)}const n=document.createElement("div");n.className="page";const i=document.createElement("img");i.src="./img/innovation-pages/58.jpg",i.alt="Back Cover",n.appendChild(i),r.appendChild(n);const s=()=>window.innerWidth<=768,o=()=>{if(s()){const u=Math.min(window.innerWidth*.9,528),h=u*816/528;return{width:u,height:h}}return{width:528,height:816}},l=o();Jt("#flipbook").turn({width:s()?l.width:1056,height:l.height,autoCenter:!0,display:"single",when:{turning:function(u,h){const m=Jt("#flipbook").turn("pages"),_=o();h===1||h===m||s()?(Jt("#flipbook").turn("display","single"),Jt("#flipbook").turn("size",_.width,_.height)):(Jt("#flipbook").turn("display","double"),Jt("#flipbook").turn("size",_.width*2,_.height))},turned:function(u,h){const m=Jt("#flipbook").turn("pages");(h===1||h===m)&&(Jt("#flipbook").turn("display","single"),Jt("#flipbook").turn("size",528,816))},start:function(){const u=Jt("#flipbook").turn("page"),h=Jt("#flipbook").turn("pages"),m=o();(u===1||u===h||s())&&(Jt("#flipbook").turn("display","single"),Jt("#flipbook").turn("size",m.width,m.height))}}}),window.addEventListener("resize",()=>{const u=o(),h=Jt("#flipbook").turn("page"),m=Jt("#flipbook").turn("pages");s()?(Jt("#flipbook").turn("display","single"),Jt("#flipbook").turn("size",u.width,u.height)):h===1||h===m?Jt("#flipbook").turn("size",u.width,u.height):(Jt("#flipbook").turn("display","double"),Jt("#flipbook").turn("size",u.width*2,u.height))})}function xh(r){const e=window.location.pathname,t="/bloc/";return e.endsWith(r)||e.endsWith(`${t}${r}`)||e===`${t}${r}`}Wh();Xh();xh("model.html")&&$x();xh("about.html")&&jh();document.addEventListener("DOMContentLoaded",()=>{t0()});
