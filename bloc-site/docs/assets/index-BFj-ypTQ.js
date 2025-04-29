(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();async function df(){console.log("Trying to load navbar...");const r=document.getElementById("navbar");if(!r){console.error("No #navbar element found");return}try{const e=await fetch("navbar.html");if(!e.ok)throw new Error("Failed to fetch navbar");const t=await e.text();r.innerHTML=t,console.log("Navbar loaded successfully");const n=document.getElementById("hamburger"),i=document.getElementById("navLinks");n&&i?n.addEventListener("click",()=>{n.classList.toggle("active"),i.classList.toggle("active")}):console.warn("Hamburger or navLinks not found in loaded navbar")}catch(e){console.error("Navbar load failed:",e)}}async function pf(){console.log("Trying to load footer...");const r=document.querySelector("footer");if(!r){console.error("No <footer> element found");return}try{const e=await fetch("footer.html");if(!e.ok)throw new Error("Failed to fetch footer");const t=await e.text();r.innerHTML=t,console.log("Footer loaded successfully")}catch(e){console.error("Footer load failed:",e)}}function mf(){document.querySelectorAll(".team-member").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-name");alert(`You clicked on ${t}'s bio!`)})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="175",Or={ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gf=0,mc=1,_f=2,Gu=1,Wu=2,bi=3,Li=0,Rn=1,ri=2,Ki=0,Br=1,gc=2,_c=3,vc=4,vf=5,hr=100,xf=101,yf=102,Mf=103,Sf=104,Ef=200,Tf=201,bf=202,Af=203,zo=204,Vo=205,wf=206,Rf=207,Cf=208,Pf=209,Lf=210,Df=211,If=212,Nf=213,Uf=214,Go=0,Wo=1,Xo=2,zr=3,jo=4,qo=5,Yo=6,Ko=7,Xu=0,Ff=1,Of=2,$i=0,Bf=1,kf=2,Hf=3,zf=4,Vf=5,Gf=6,Wf=7,xc="attached",Xf="detached",ju=300,Vr=301,Gr=302,$o=303,Zo=304,Da=306,Wr=1e3,qi=1001,wa=1002,Sn=1003,qu=1004,ys=1005,Un=1006,_a=1007,wi=1008,Di=1009,Yu=1010,Ku=1011,bs=1012,Dl=1013,mr=1014,$n=1015,Ds=1016,Il=1017,Nl=1018,As=1020,$u=35902,Zu=1021,Ju=1022,Gn=1023,Qu=1024,eh=1025,ws=1026,Rs=1027,Ul=1028,Fl=1029,th=1030,Ol=1031,Bl=1033,va=33776,xa=33777,ya=33778,Ma=33779,Jo=35840,Qo=35841,el=35842,tl=35843,nl=36196,il=37492,rl=37496,sl=37808,al=37809,ol=37810,ll=37811,cl=37812,ul=37813,hl=37814,fl=37815,dl=37816,pl=37817,ml=37818,gl=37819,_l=37820,vl=37821,Sa=36492,xl=36494,yl=36495,nh=36283,Ml=36284,Sl=36285,El=36286,Cs=2300,Ps=2301,io=2302,yc=2400,Mc=2401,Sc=2402,jf=2500,qf=0,ih=1,Tl=2,Yf=3200,Kf=3201,rh=0,$f=1,ji="",un="srgb",Tn="srgb-linear",Ra="linear",Ht="srgb",yr=7680,Ec=519,Zf=512,Jf=513,Qf=514,sh=515,ed=516,td=517,nd=518,id=519,bl=35044,Tc="300 es",Ri=2e3,Ca=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const Ss=Math.PI/180,Xr=180/Math.PI;function Zn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function kl(r,e){return(r%e+e)%e}function rd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function sd(r,e,t){return r!==e?(t-r)/(e-r):0}function Es(r,e,t){return(1-t)*r+t*e}function ad(r,e,t,n){return Es(r,e,1-Math.exp(-t*n))}function od(r,e=1){return e-Math.abs(kl(r,e*2)-e)}function ld(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function cd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ud(r,e){return r+Math.floor(Math.random()*(e-r+1))}function hd(r,e){return r+Math.random()*(e-r)}function fd(r){return r*(.5-Math.random())}function dd(r){r!==void 0&&(bc=r);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pd(r){return r*Ss}function md(r){return r*Xr}function gd(r){return(r&r-1)===0&&r!==0}function _d(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xd(r,e,t,n,i){const s=Math.cos,l=Math.sin,c=s(t/2),h=l(t/2),f=s((e+n)/2),g=l((e+n)/2),x=s((e-n)/2),v=l((e-n)/2),S=s((n-e)/2),o=l((n-e)/2);switch(i){case"XYX":r.set(c*g,h*x,h*v,c*f);break;case"YZY":r.set(h*v,c*g,h*x,c*f);break;case"ZXZ":r.set(h*x,h*v,c*g,c*f);break;case"XZX":r.set(c*g,h*o,h*S,c*f);break;case"YXY":r.set(h*S,c*g,h*o,c*f);break;case"ZYZ":r.set(h*o,h*S,c*g,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:Ss,RAD2DEG:Xr,generateUUID:Zn,clamp:yt,euclideanModulo:kl,mapLinear:rd,inverseLerp:sd,lerp:Es,damp:ad,pingpong:od,smoothstep:ld,smootherstep:cd,randInt:ud,randFloat:hd,randFloatSpread:fd,seededRandom:dd,degToRad:pd,radToDeg:md,isPowerOfTwo:gd,ceilPowerOfTwo:_d,floorPowerOfTwo:vd,setQuaternionFromProperEuler:xd,normalize:Ft,denormalize:Yn};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,n,i,s,l,c,h,f){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,h,f)}set(e,t,n,i,s,l,c,h,f){const g=this.elements;return g[0]=e,g[1]=i,g[2]=c,g[3]=t,g[4]=s,g[5]=h,g[6]=n,g[7]=l,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[3],h=n[6],f=n[1],g=n[4],x=n[7],v=n[2],S=n[5],o=n[8],w=i[0],M=i[3],y=i[6],F=i[1],U=i[4],L=i[7],G=i[2],k=i[5],B=i[8];return s[0]=l*w+c*F+h*G,s[3]=l*M+c*U+h*k,s[6]=l*y+c*L+h*B,s[1]=f*w+g*F+x*G,s[4]=f*M+g*U+x*k,s[7]=f*y+g*L+x*B,s[2]=v*w+S*F+o*G,s[5]=v*M+S*U+o*k,s[8]=v*y+S*L+o*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],h=e[6],f=e[7],g=e[8];return t*l*g-t*c*f-n*s*g+n*c*h+i*s*f-i*l*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],h=e[6],f=e[7],g=e[8],x=g*l-c*f,v=c*h-g*s,S=f*s-l*h,o=t*x+n*v+i*S;if(o===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/o;return e[0]=x*w,e[1]=(i*f-g*n)*w,e[2]=(c*n-i*l)*w,e[3]=v*w,e[4]=(g*t-i*h)*w,e[5]=(i*s-c*t)*w,e[6]=S*w,e[7]=(n*h-f*t)*w,e[8]=(l*t-n*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,c){const h=Math.cos(s),f=Math.sin(s);return this.set(n*h,n*f,-n*(h*l+f*c)+l+e,-i*f,i*h,-i*(-f*l+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new mt;function oh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ls(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yd(){const r=Ls("canvas");return r.style.display="block",r}const Ac={};function Ea(r){r in Ac||(Ac[r]=!0,console.warn(r))}function Md(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Sd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ed(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wc=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){const r={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(i,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Ht&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ht&&(i.r=kr(i.r),i.g=kr(i.g),i.b=kr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?Ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,l){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Tn]:{primaries:e,whitePoint:n,transfer:Ra,toXYZ:wc,fromXYZ:Rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:wc,fromXYZ:Rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),r}const Pt=Td();function Ci(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mr;class bd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=Ls("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=Ci(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?s.push(so(i[l].image)):s.push(so(i[l]))}else s=so(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class hn extends _r{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=qi,i=qi,s=Un,l=wi,c=Gn,h=Di,f=hn.DEFAULT_ANISOTROPY,g=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Zn(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=ju;hn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const h=e.elements,f=h[0],g=h[4],x=h[8],v=h[1],S=h[5],o=h[9],w=h[2],M=h[6],y=h[10];if(Math.abs(g-v)<.01&&Math.abs(x-w)<.01&&Math.abs(o-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+w)<.1&&Math.abs(o+M)<.1&&Math.abs(f+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(f+1)/2,L=(S+1)/2,G=(y+1)/2,k=(g+v)/4,B=(x+w)/4,Z=(o+M)/4;return U>L&&U>G?U<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(U),i=k/n,s=B/n):L>G?L<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(L),n=k/i,s=Z/i):G<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(G),n=B/s,i=Z/s),this.set(n,i,s,t),this}let F=Math.sqrt((M-o)*(M-o)+(x-w)*(x-w)+(v-g)*(v-g));return Math.abs(F)<.001&&(F=1),this.x=(M-o)/F,this.y=(x-w)/F,this.z=(v-g)/F,this.w=Math.acos((f+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends _r{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Hl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends Rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lh extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cd extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,c){let h=n[i+0],f=n[i+1],g=n[i+2],x=n[i+3];const v=s[l+0],S=s[l+1],o=s[l+2],w=s[l+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=o,e[t+3]=w;return}if(x!==w||h!==v||f!==S||g!==o){let M=1-c;const y=h*v+f*S+g*o+x*w,F=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const G=Math.sqrt(U),k=Math.atan2(G,y*F);M=Math.sin(M*k)/G,c=Math.sin(c*k)/G}const L=c*F;if(h=h*M+v*L,f=f*M+S*L,g=g*M+o*L,x=x*M+w*L,M===1-c){const G=1/Math.sqrt(h*h+f*f+g*g+x*x);h*=G,f*=G,g*=G,x*=G}}e[t]=h,e[t+1]=f,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,n,i,s,l){const c=n[i],h=n[i+1],f=n[i+2],g=n[i+3],x=s[l],v=s[l+1],S=s[l+2],o=s[l+3];return e[t]=c*o+g*x+h*S-f*v,e[t+1]=h*o+g*v+f*x-c*S,e[t+2]=f*o+g*S+c*v-h*x,e[t+3]=g*o-c*x-h*v-f*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,l=e._order,c=Math.cos,h=Math.sin,f=c(n/2),g=c(i/2),x=c(s/2),v=h(n/2),S=h(i/2),o=h(s/2);switch(l){case"XYZ":this._x=v*g*x+f*S*o,this._y=f*S*x-v*g*o,this._z=f*g*o+v*S*x,this._w=f*g*x-v*S*o;break;case"YXZ":this._x=v*g*x+f*S*o,this._y=f*S*x-v*g*o,this._z=f*g*o-v*S*x,this._w=f*g*x+v*S*o;break;case"ZXY":this._x=v*g*x-f*S*o,this._y=f*S*x+v*g*o,this._z=f*g*o+v*S*x,this._w=f*g*x-v*S*o;break;case"ZYX":this._x=v*g*x-f*S*o,this._y=f*S*x+v*g*o,this._z=f*g*o-v*S*x,this._w=f*g*x+v*S*o;break;case"YZX":this._x=v*g*x+f*S*o,this._y=f*S*x+v*g*o,this._z=f*g*o-v*S*x,this._w=f*g*x-v*S*o;break;case"XZY":this._x=v*g*x-f*S*o,this._y=f*S*x-v*g*o,this._z=f*g*o+v*S*x,this._w=f*g*x+v*S*o;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],c=t[5],h=t[9],f=t[2],g=t[6],x=t[10],v=n+c+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(s-f)*S,this._z=(l-i)*S}else if(n>c&&n>x){const S=2*Math.sqrt(1+n-c-x);this._w=(g-h)/S,this._x=.25*S,this._y=(i+l)/S,this._z=(s+f)/S}else if(c>x){const S=2*Math.sqrt(1+c-n-x);this._w=(s-f)/S,this._x=(i+l)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+x-n-c);this._w=(l-i)/S,this._x=(s+f)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,c=t._x,h=t._y,f=t._z,g=t._w;return this._x=n*g+l*c+i*f-s*h,this._y=i*g+l*h+s*c-n*f,this._z=s*g+l*f+n*h-i*c,this._w=l*g-n*c-i*h-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,l=this._w;let c=l*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*l+t*this._w,this._x=S*n+t*this._x,this._y=S*i+t*this._y,this._z=S*s+t*this._z,this.normalize(),this}const f=Math.sqrt(h),g=Math.atan2(f,c),x=Math.sin((1-t)*g)/f,v=Math.sin(t*g)/f;return this._w=l*x+this._w*v,this._x=n*x+this._x*v,this._y=i*x+this._y*v,this._z=s*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,c=e.z,h=e.w,f=2*(l*i-c*n),g=2*(c*t-s*i),x=2*(s*n-l*t);return this.x=t+h*f+l*x-c*g,this.y=n+h*g+c*f-s*x,this.z=i+h*x+s*g-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,c=t.y,h=t.z;return this.x=i*h-s*c,this.y=s*l-n*h,this.z=n*c-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new j,Cc=new ai;class li{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Xn):Xn.fromBufferAttribute(s,l),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),Ws.subVectors(this.max,hs),Sr.subVectors(e.a,hs),Er.subVectors(e.b,hs),Tr.subVectors(e.c,hs),Bi.subVectors(Er,Sr),ki.subVectors(Tr,Er),ir.subVectors(Sr,Tr);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-ir.z,ir.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,ir.z,0,-ir.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-ir.y,ir.x,0];return!oo(t,Sr,Er,Tr,Ws)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Sr,Er,Tr,Ws))?!1:(Xs.crossVectors(Bi,ki),t=[Xs.x,Xs.y,Xs.z],oo(t,Sr,Er,Tr,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new j,new j,new j,new j,new j,new j,new j,new j],Xn=new j,Gs=new li,Sr=new j,Er=new j,Tr=new j,Bi=new j,ki=new j,ir=new j,hs=new j,Ws=new j,Xs=new j,rr=new j;function oo(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){rr.fromArray(r,s);const c=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),h=e.dot(rr),f=t.dot(rr),g=n.dot(rr);if(Math.max(-Math.max(h,f,g),Math.min(h,f,g))>c)return!1}return!0}const Pd=new li,fs=new j,lo=new j;class ci{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(lo)),this.expandByPoint(fs.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new j,co=new j,js=new j,Hi=new j,uo=new j,qs=new j,ho=new j;class Is{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){co.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,l=-this.direction.dot(js),c=Hi.dot(this.direction),h=-Hi.dot(js),f=Hi.lengthSq(),g=Math.abs(1-l*l);let x,v,S,o;if(g>0)if(x=l*h-c,v=l*c-h,o=s*g,x>=0)if(v>=-o)if(v<=o){const w=1/g;x*=w,v*=w,S=x*(x+l*v+2*c)+v*(l*x+v+2*h)+f}else v=s,x=Math.max(0,-(l*v+c)),S=-x*x+v*(v+2*h)+f;else v=-s,x=Math.max(0,-(l*v+c)),S=-x*x+v*(v+2*h)+f;else v<=-o?(x=Math.max(0,-(-l*s+c)),v=x>0?-s:Math.min(Math.max(-s,-h),s),S=-x*x+v*(v+2*h)+f):v<=o?(x=0,v=Math.min(Math.max(-s,-h),s),S=v*(v+2*h)+f):(x=Math.max(0,-(l*s+c)),v=x>0?s:Math.min(Math.max(-s,-h),s),S=-x*x+v*(v+2*h)+f);else v=l>0?-s:s,x=Math.max(0,-(l*v+c)),S=-x*x+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,x),i&&i.copy(co).addScaledVector(js,v),S}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,c,h;const f=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,i=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,i=(e.min.x-v.x)*f),g>=0?(s=(e.min.y-v.y)*g,l=(e.max.y-v.y)*g):(s=(e.max.y-v.y)*g,l=(e.min.y-v.y)*g),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),x>=0?(c=(e.min.z-v.z)*x,h=(e.max.z-v.z)*x):(c=(e.max.z-v.z)*x,h=(e.min.z-v.z)*x),n>h||c>i)||((c>n||n!==n)&&(n=c),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,s){uo.subVectors(t,e),qs.subVectors(n,e),ho.crossVectors(uo,qs);let l=this.direction.dot(ho),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Hi.subVectors(this.origin,e);const h=c*this.direction.dot(qs.crossVectors(Hi,qs));if(h<0)return null;const f=c*this.direction.dot(uo.cross(Hi));if(f<0||h+f>l)return null;const g=-c*Hi.dot(ho);return g<0?null:this.at(g/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,i,s,l,c,h,f,g,x,v,S,o,w,M){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,h,f,g,x,v,S,o,w,M)}set(e,t,n,i,s,l,c,h,f,g,x,v,S,o,w,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=l,y[9]=c,y[13]=h,y[2]=f,y[6]=g,y[10]=x,y[14]=v,y[3]=S,y[7]=o,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),l=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(i),f=Math.sin(i),g=Math.cos(s),x=Math.sin(s);if(e.order==="XYZ"){const v=l*g,S=l*x,o=c*g,w=c*x;t[0]=h*g,t[4]=-h*x,t[8]=f,t[1]=S+o*f,t[5]=v-w*f,t[9]=-c*h,t[2]=w-v*f,t[6]=o+S*f,t[10]=l*h}else if(e.order==="YXZ"){const v=h*g,S=h*x,o=f*g,w=f*x;t[0]=v+w*c,t[4]=o*c-S,t[8]=l*f,t[1]=l*x,t[5]=l*g,t[9]=-c,t[2]=S*c-o,t[6]=w+v*c,t[10]=l*h}else if(e.order==="ZXY"){const v=h*g,S=h*x,o=f*g,w=f*x;t[0]=v-w*c,t[4]=-l*x,t[8]=o+S*c,t[1]=S+o*c,t[5]=l*g,t[9]=w-v*c,t[2]=-l*f,t[6]=c,t[10]=l*h}else if(e.order==="ZYX"){const v=l*g,S=l*x,o=c*g,w=c*x;t[0]=h*g,t[4]=o*f-S,t[8]=v*f+w,t[1]=h*x,t[5]=w*f+v,t[9]=S*f-o,t[2]=-f,t[6]=c*h,t[10]=l*h}else if(e.order==="YZX"){const v=l*h,S=l*f,o=c*h,w=c*f;t[0]=h*g,t[4]=w-v*x,t[8]=o*x+S,t[1]=x,t[5]=l*g,t[9]=-c*g,t[2]=-f*g,t[6]=S*x+o,t[10]=v-w*x}else if(e.order==="XZY"){const v=l*h,S=l*f,o=c*h,w=c*f;t[0]=h*g,t[4]=-x,t[8]=f*g,t[1]=v*x+w,t[5]=l*g,t[9]=S*x-o,t[2]=o*x-S,t[6]=c*g,t[10]=w*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ld,e,Dd)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),zi.crossVectors(n,In),zi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),zi.crossVectors(n,In)),zi.normalize(),Ys.crossVectors(In,zi),i[0]=zi.x,i[4]=Ys.x,i[8]=In.x,i[1]=zi.y,i[5]=Ys.y,i[9]=In.y,i[2]=zi.z,i[6]=Ys.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[4],h=n[8],f=n[12],g=n[1],x=n[5],v=n[9],S=n[13],o=n[2],w=n[6],M=n[10],y=n[14],F=n[3],U=n[7],L=n[11],G=n[15],k=i[0],B=i[4],Z=i[8],p=i[12],_=i[1],b=i[5],D=i[9],O=i[13],V=i[2],ee=i[6],ne=i[10],ae=i[14],ie=i[3],me=i[7],Ee=i[11],Me=i[15];return s[0]=l*k+c*_+h*V+f*ie,s[4]=l*B+c*b+h*ee+f*me,s[8]=l*Z+c*D+h*ne+f*Ee,s[12]=l*p+c*O+h*ae+f*Me,s[1]=g*k+x*_+v*V+S*ie,s[5]=g*B+x*b+v*ee+S*me,s[9]=g*Z+x*D+v*ne+S*Ee,s[13]=g*p+x*O+v*ae+S*Me,s[2]=o*k+w*_+M*V+y*ie,s[6]=o*B+w*b+M*ee+y*me,s[10]=o*Z+w*D+M*ne+y*Ee,s[14]=o*p+w*O+M*ae+y*Me,s[3]=F*k+U*_+L*V+G*ie,s[7]=F*B+U*b+L*ee+G*me,s[11]=F*Z+U*D+L*ne+G*Ee,s[15]=F*p+U*O+L*ae+G*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],c=e[5],h=e[9],f=e[13],g=e[2],x=e[6],v=e[10],S=e[14],o=e[3],w=e[7],M=e[11],y=e[15];return o*(+s*h*x-i*f*x-s*c*v+n*f*v+i*c*S-n*h*S)+w*(+t*h*S-t*f*v+s*l*v-i*l*S+i*f*g-s*h*g)+M*(+t*f*x-t*c*S-s*l*x+n*l*S+s*c*g-n*f*g)+y*(-i*c*g-t*h*x+t*c*v+i*l*x-n*l*v+n*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],h=e[6],f=e[7],g=e[8],x=e[9],v=e[10],S=e[11],o=e[12],w=e[13],M=e[14],y=e[15],F=x*M*f-w*v*f+w*h*S-c*M*S-x*h*y+c*v*y,U=o*v*f-g*M*f-o*h*S+l*M*S+g*h*y-l*v*y,L=g*w*f-o*x*f+o*c*S-l*w*S-g*c*y+l*x*y,G=o*x*h-g*w*h-o*c*v+l*w*v+g*c*M-l*x*M,k=t*F+n*U+i*L+s*G;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return e[0]=F*B,e[1]=(w*v*s-x*M*s-w*i*S+n*M*S+x*i*y-n*v*y)*B,e[2]=(c*M*s-w*h*s+w*i*f-n*M*f-c*i*y+n*h*y)*B,e[3]=(x*h*s-c*v*s-x*i*f+n*v*f+c*i*S-n*h*S)*B,e[4]=U*B,e[5]=(g*M*s-o*v*s+o*i*S-t*M*S-g*i*y+t*v*y)*B,e[6]=(o*h*s-l*M*s-o*i*f+t*M*f+l*i*y-t*h*y)*B,e[7]=(l*v*s-g*h*s+g*i*f-t*v*f-l*i*S+t*h*S)*B,e[8]=L*B,e[9]=(o*x*s-g*w*s-o*n*S+t*w*S+g*n*y-t*x*y)*B,e[10]=(l*w*s-o*c*s+o*n*f-t*w*f-l*n*y+t*c*y)*B,e[11]=(g*c*s-l*x*s-g*n*f+t*x*f+l*n*S-t*c*S)*B,e[12]=G*B,e[13]=(g*w*i-o*x*i+o*n*v-t*w*v-g*n*M+t*x*M)*B,e[14]=(o*c*i-l*w*i-o*n*h+t*w*h+l*n*M-t*c*M)*B,e[15]=(l*x*i-g*c*i+g*n*h-t*x*h-l*n*v+t*c*v)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,c=e.y,h=e.z,f=s*l,g=s*c;return this.set(f*l+n,f*c-i*h,f*h+i*c,0,f*c+i*h,g*c+n,g*h-i*l,0,f*h-i*c,g*h+i*l,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,c=t._z,h=t._w,f=s+s,g=l+l,x=c+c,v=s*f,S=s*g,o=s*x,w=l*g,M=l*x,y=c*x,F=h*f,U=h*g,L=h*x,G=n.x,k=n.y,B=n.z;return i[0]=(1-(w+y))*G,i[1]=(S+L)*G,i[2]=(o-U)*G,i[3]=0,i[4]=(S-L)*k,i[5]=(1-(v+y))*k,i[6]=(M+F)*k,i[7]=0,i[8]=(o+U)*B,i[9]=(M-F)*B,i[10]=(1-(v+w))*B,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=br.set(i[0],i[1],i[2]).length();const l=br.set(i[4],i[5],i[6]).length(),c=br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const f=1/s,g=1/l,x=1/c;return jn.elements[0]*=f,jn.elements[1]*=f,jn.elements[2]*=f,jn.elements[4]*=g,jn.elements[5]*=g,jn.elements[6]*=g,jn.elements[8]*=x,jn.elements[9]*=x,jn.elements[10]*=x,t.setFromRotationMatrix(jn),n.x=s,n.y=l,n.z=c,this}makePerspective(e,t,n,i,s,l,c=Ri){const h=this.elements,f=2*s/(t-e),g=2*s/(n-i),x=(t+e)/(t-e),v=(n+i)/(n-i);let S,o;if(c===Ri)S=-(l+s)/(l-s),o=-2*l*s/(l-s);else if(c===Ca)S=-l/(l-s),o=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=o,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,l,c=Ri){const h=this.elements,f=1/(t-e),g=1/(n-i),x=1/(l-s),v=(t+e)*f,S=(n+i)*g;let o,w;if(c===Ri)o=(l+s)*x,w=-2*x;else if(c===Ca)o=s*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-o,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const br=new j,jn=new gt,Ld=new j(0,0,0),Dd=new j(1,1,1),zi=new j,Ys=new j,In=new j,Pc=new gt,Lc=new ai;class oi{constructor(e=0,t=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],f=i[5],g=i[9],x=i[2],v=i[6],S=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-x,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-x,s)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Id=0;const Dc=new j,Ar=new ai,Mi=new gt,Ks=new j,ds=new j,Nd=new j,Ud=new ai,Ic=new j(1,0,0),Nc=new j(0,1,0),Uc=new j(0,0,1),Fc={type:"added"},Fd={type:"removed"},wr={type:"childadded",child:null},fo={type:"childremoved",child:null};class Yt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new j,t=new oi,n=new ai,i=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new mt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ds,Ks,this.up):Mi.lookAt(Ks,ds,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),Ar.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fc),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fc),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,g=h.length;f<g;f++){const x=h[f];s(e.shapes,x)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(s(e.materials,this.material[h]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];i.animations.push(s(e.animations,h))}}if(t){const c=l(e.geometries),h=l(e.materials),f=l(e.textures),g=l(e.images),x=l(e.shapes),v=l(e.skeletons),S=l(e.animations),o=l(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),g.length>0&&(n.images=g),x.length>0&&(n.shapes=x),v.length>0&&(n.skeletons=v),S.length>0&&(n.animations=S),o.length>0&&(n.nodes=o)}return n.object=i,n;function l(c){const h=[];for(const f in c){const g=c[f];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Yt.DEFAULT_UP=new j(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new j,Si=new j,po=new j,Ei=new j,Rr=new j,Cr=new j,Oc=new j,mo=new j,go=new j,_o=new j,vo=new Nt,xo=new Nt,yo=new Nt;class Kn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qn.subVectors(i,t),Si.subVectors(n,t),po.subVectors(e,t);const l=qn.dot(qn),c=qn.dot(Si),h=qn.dot(po),f=Si.dot(Si),g=Si.dot(po),x=l*f-c*c;if(x===0)return s.set(0,0,0),null;const v=1/x,S=(f*h-c*g)*v,o=(l*g-c*h)*v;return s.set(1-S-o,o,S)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,i,s,l,c,h){return this.getBarycoord(e,t,n,i,Ei)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Ei.x),h.addScaledVector(l,Ei.y),h.addScaledVector(c,Ei.z),h)}static getInterpolatedAttribute(e,t,n,i,s,l){return vo.setScalar(0),xo.setScalar(0),yo.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,i),l.setScalar(0),l.addScaledVector(vo,s.x),l.addScaledVector(xo,s.y),l.addScaledVector(yo,s.z),l}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),Si.subVectors(e,t),qn.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),qn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,c;Rr.subVectors(i,n),Cr.subVectors(s,n),mo.subVectors(e,n);const h=Rr.dot(mo),f=Cr.dot(mo);if(h<=0&&f<=0)return t.copy(n);go.subVectors(e,i);const g=Rr.dot(go),x=Cr.dot(go);if(g>=0&&x<=g)return t.copy(i);const v=h*x-g*f;if(v<=0&&h>=0&&g<=0)return l=h/(h-g),t.copy(n).addScaledVector(Rr,l);_o.subVectors(e,s);const S=Rr.dot(_o),o=Cr.dot(_o);if(o>=0&&S<=o)return t.copy(s);const w=S*f-h*o;if(w<=0&&f>=0&&o<=0)return c=f/(f-o),t.copy(n).addScaledVector(Cr,c);const M=g*o-S*x;if(M<=0&&x-g>=0&&S-o>=0)return Oc.subVectors(s,i),c=(x-g)/(x-g+(S-o)),t.copy(i).addScaledVector(Oc,c);const y=1/(M+w+v);return l=w*y,c=v*y,t.copy(n).addScaledVector(Rr,l).addScaledVector(Cr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},$s={h:0,s:0,l:0};function Mo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=kl(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Mo(l,s,e+1/3),this.g=Mo(l,s,e),this.b=Mo(l,s,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Pt.fromWorkingColorSpace(_n.copy(this),e),Math.round(yt(_n.r*255,0,255))*65536+Math.round(yt(_n.g*255,0,255))*256+Math.round(yt(_n.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,s=_n.b,l=Math.max(n,i,s),c=Math.min(n,i,s);let h,f;const g=(c+l)/2;if(c===l)h=0,f=0;else{const x=l-c;switch(f=g<=.5?x/(l+c):x/(2-l-c),l){case n:h=(i-s)/x+(i<s?6:0);break;case i:h=(s-n)/x+2;break;case s:h=(n-i)/x+4;break}h/=6}return e.h=h,e.s=f,e.l=g,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=un){Pt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL($s);const n=Es(Vi.h,$s.h,t),i=Es(Vi.s,$s.s,t),s=Es(Vi.l,$s.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new ut;ut.NAMES=uh;let Od=0;class si extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Br,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Vo,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dr extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new j,Zs=new lt;let Bd=0;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class hh extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fh extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pi extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kd=0;const zn=new gt,So=new Yt,Pr=new j,Nn=new li,ps=new li,cn=new j;class ui extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?fh:hh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Pi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const c=t[s];ps.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(Nn.min,ps.min),Nn.expandByPoint(cn),cn.addVectors(Nn.max,ps.max),Nn.expandByPoint(cn)):(Nn.expandByPoint(ps.min),Nn.expandByPoint(ps.max))}Nn.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,l=t.length;s<l;s++){const c=t[s],h=this.morphTargetsRelative;for(let f=0,g=c.count;f<g;f++)cn.fromBufferAttribute(c,f),h&&(Pr.fromBufferAttribute(e,f),cn.add(Pr)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let Z=0;Z<n.count;Z++)c[Z]=new j,h[Z]=new j;const f=new j,g=new j,x=new j,v=new lt,S=new lt,o=new lt,w=new j,M=new j;function y(Z,p,_){f.fromBufferAttribute(n,Z),g.fromBufferAttribute(n,p),x.fromBufferAttribute(n,_),v.fromBufferAttribute(s,Z),S.fromBufferAttribute(s,p),o.fromBufferAttribute(s,_),g.sub(f),x.sub(f),S.sub(v),o.sub(v);const b=1/(S.x*o.y-o.x*S.y);isFinite(b)&&(w.copy(g).multiplyScalar(o.y).addScaledVector(x,-S.y).multiplyScalar(b),M.copy(x).multiplyScalar(S.x).addScaledVector(g,-o.x).multiplyScalar(b),c[Z].add(w),c[p].add(w),c[_].add(w),h[Z].add(M),h[p].add(M),h[_].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Z=0,p=F.length;Z<p;++Z){const _=F[Z],b=_.start,D=_.count;for(let O=b,V=b+D;O<V;O+=3)y(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const U=new j,L=new j,G=new j,k=new j;function B(Z){G.fromBufferAttribute(i,Z),k.copy(G);const p=c[Z];U.copy(p),U.sub(G.multiplyScalar(G.dot(p))).normalize(),L.crossVectors(k,p);const b=L.dot(h[Z])<0?-1:1;l.setXYZW(Z,U.x,U.y,U.z,b)}for(let Z=0,p=F.length;Z<p;++Z){const _=F[Z],b=_.start,D=_.count;for(let O=b,V=b+D;O<V;O+=3)B(e.getX(O+0)),B(e.getX(O+1)),B(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,S=n.count;v<S;v++)n.setXYZ(v,0,0,0);const i=new j,s=new j,l=new j,c=new j,h=new j,f=new j,g=new j,x=new j;if(e)for(let v=0,S=e.count;v<S;v+=3){const o=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);i.fromBufferAttribute(t,o),s.fromBufferAttribute(t,w),l.fromBufferAttribute(t,M),g.subVectors(l,s),x.subVectors(i,s),g.cross(x),c.fromBufferAttribute(n,o),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),c.add(g),h.add(g),f.add(g),n.setXYZ(o,c.x,c.y,c.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(M,f.x,f.y,f.z)}else for(let v=0,S=t.count;v<S;v+=3)i.fromBufferAttribute(t,v+0),s.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),g.subVectors(l,s),x.subVectors(i,s),g.cross(x),n.setXYZ(v+0,g.x,g.y,g.z),n.setXYZ(v+1,g.x,g.y,g.z),n.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(c,h){const f=c.array,g=c.itemSize,x=c.normalized,v=new f.constructor(h.length*g);let S=0,o=0;for(let w=0,M=h.length;w<M;w++){c.isInterleavedBufferAttribute?S=h[w]*c.data.stride+c.offset:S=h[w]*g;for(let y=0;y<g;y++)v[o++]=f[S++]}return new En(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,n=this.index.array,i=this.attributes;for(const c in i){const h=i[c],f=e(h,n);t.setAttribute(c,f)}const s=this.morphAttributes;for(const c in s){const h=[],f=s[c];for(let g=0,x=f.length;g<x;g++){const v=f[g],S=e(v,n);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const i={};let s=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],g=[];for(let x=0,v=f.length;x<v;x++){const S=f[x];g.push(S.toJSON(e.data))}g.length>0&&(i[h]=g,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const f in i){const g=i[f];this.setAttribute(f,g.clone(t))}const s=e.morphAttributes;for(const f in s){const g=[],x=s[f];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,g=l.length;f<g;f++){const x=l[f];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new gt,sr=new Is,Js=new ci,kc=new j,Qs=new j,ea=new j,ta=new j,Eo=new j,na=new j,Hc=new j,ia=new j;class Fn extends Yt{constructor(e=new ui,t=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){na.set(0,0,0);for(let h=0,f=s.length;h<f;h++){const g=c[h],x=s[h];g!==0&&(Eo.fromBufferAttribute(x,e),l?na.addScaledVector(Eo,g):na.addScaledVector(Eo.sub(t),g))}t.add(na)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Js.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Js,kc)===null||sr.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,l=this.material,c=s.index,h=s.attributes.position,f=s.attributes.uv,g=s.attributes.uv1,x=s.attributes.normal,v=s.groups,S=s.drawRange;if(c!==null)if(Array.isArray(l))for(let o=0,w=v.length;o<w;o++){const M=v[o],y=l[M.materialIndex],F=Math.max(M.start,S.start),U=Math.min(c.count,Math.min(M.start+M.count,S.start+S.count));for(let L=F,G=U;L<G;L+=3){const k=c.getX(L),B=c.getX(L+1),Z=c.getX(L+2);i=ra(this,y,e,n,f,g,x,k,B,Z),i&&(i.faceIndex=Math.floor(L/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const o=Math.max(0,S.start),w=Math.min(c.count,S.start+S.count);for(let M=o,y=w;M<y;M+=3){const F=c.getX(M),U=c.getX(M+1),L=c.getX(M+2);i=ra(this,l,e,n,f,g,x,F,U,L),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}else if(h!==void 0)if(Array.isArray(l))for(let o=0,w=v.length;o<w;o++){const M=v[o],y=l[M.materialIndex],F=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let L=F,G=U;L<G;L+=3){const k=L,B=L+1,Z=L+2;i=ra(this,y,e,n,f,g,x,k,B,Z),i&&(i.faceIndex=Math.floor(L/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{const o=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let M=o,y=w;M<y;M+=3){const F=M,U=M+1,L=M+2;i=ra(this,l,e,n,f,g,x,F,U,L),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}}}function Hd(r,e,t,n,i,s,l,c){let h;if(e.side===Rn?h=n.intersectTriangle(l,s,i,!0,c):h=n.intersectTriangle(i,s,l,e.side===Li,c),h===null)return null;ia.copy(c),ia.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(ia);return f<t.near||f>t.far?null:{distance:f,point:ia.clone(),object:r}}function ra(r,e,t,n,i,s,l,c,h,f){r.getVertexPosition(c,Qs),r.getVertexPosition(h,ea),r.getVertexPosition(f,ta);const g=Hd(r,e,t,n,Qs,ea,ta,Hc);if(g){const x=new j;Kn.getBarycoord(Hc,Qs,ea,ta,x),i&&(g.uv=Kn.getInterpolatedAttribute(i,c,h,f,x,new lt)),s&&(g.uv1=Kn.getInterpolatedAttribute(s,c,h,f,x,new lt)),l&&(g.normal=Kn.getInterpolatedAttribute(l,c,h,f,x,new j),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const v={a:c,b:h,c:f,normal:new j,materialIndex:0};Kn.getNormal(Qs,ea,ta,v.normal),g.face=v,g.barycoord=x}return g}class Ns extends ui{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const c=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const h=[],f=[],g=[],x=[];let v=0,S=0;o("z","y","x",-1,-1,n,t,e,l,s,0),o("z","y","x",1,-1,n,t,-e,l,s,1),o("x","z","y",1,1,e,n,t,i,l,2),o("x","z","y",1,-1,e,n,-t,i,l,3),o("x","y","z",1,-1,e,t,n,i,s,4),o("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(h),this.setAttribute("position",new Pi(f,3)),this.setAttribute("normal",new Pi(g,3)),this.setAttribute("uv",new Pi(x,2));function o(w,M,y,F,U,L,G,k,B,Z,p){const _=L/B,b=G/Z,D=L/2,O=G/2,V=k/2,ee=B+1,ne=Z+1;let ae=0,ie=0;const me=new j;for(let Ee=0;Ee<ne;Ee++){const Me=Ee*b-O;for(let Be=0;Be<ee;Be++){const Ze=Be*_-D;me[w]=Ze*F,me[M]=Me*U,me[y]=V,f.push(me.x,me.y,me.z),me[w]=0,me[M]=0,me[y]=k>0?1:-1,g.push(me.x,me.y,me.z),x.push(Be/B),x.push(1-Ee/Z),ae+=1}}for(let Ee=0;Ee<Z;Ee++)for(let Me=0;Me<B;Me++){const Be=v+Me+ee*Ee,Ze=v+Me+ee*(Ee+1),ce=v+(Me+1)+ee*(Ee+1),ve=v+(Me+1)+ee*Ee;h.push(Be,Ze,ve),h.push(Ze,ce,ve),ie+=6}c.addGroup(S,ie,p),S+=ie,v+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=jr(r[t]);for(const i in n)e[i]=n[i]}return e}function zd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Vd={clone:jr,merge:yn};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ph extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new j,zc=new lt,Vc=new lt;class Mn extends ph{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Vc),t.subVectors(Vc,zc)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;s+=l.offsetX*i/h,t-=l.offsetY*n/f,i*=l.width/h,n*=l.height/f}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Dr=1;class Xd extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(Lr,Dr,e,t);i.layers=this.layers,this.add(i);const s=new Mn(Lr,Dr,e,t);s.layers=this.layers,this.add(s);const l=new Mn(Lr,Dr,e,t);l.layers=this.layers,this.add(l);const c=new Mn(Lr,Dr,e,t);c.layers=this.layers,this.add(c);const h=new Mn(Lr,Dr,e,t);h.layers=this.layers,this.add(h);const f=new Mn(Lr,Dr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,l,c,h]=t;for(const f of t)this.remove(f);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,h,f,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),o=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,l),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,h),e.setRenderTarget(n,4,i),e.render(t,f),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,i),e.render(t,g),e.setRenderTarget(x,v,S),e.xr.enabled=o,n.texture.needsPMREMUpdate=!0}}class mh extends hn{constructor(e=[],t=Vr,n,i,s,l,c,h,f,g){super(e,t,n,i,s,l,c,h,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jd extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ns(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Ki});s.uniforms.tEquirect.value=t;const l=new Fn(i,s),c=t.minFilter;return t.minFilter===wi&&(t.minFilter=Un),new Xd(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}class pr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qd={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const w of e.hand.values()){const M=t.getJointPose(w,n),y=this._getHandJoint(f,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=f.joints["index-finger-tip"],x=f.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,o=.005;f.inputState.pinching&&v>S+o?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=S-o&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(qd)))}return c!==null&&(c.visible=i!==null),h!==null&&(h.visible=s!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yd extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new j;class zl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gc=new j,Wc=new Nt,Xc=new Nt,$d=new j,jc=new gt,sa=new j,bo=new ci,qc=new gt,Ao=new Is;class Zd extends Fn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xc,this.bindMatrix=new gt,this.bindMatrixInverse=new gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(i),e.ray.intersectsSphere(bo)!==!1&&(qc.copy(i).invert(),Ao.copy(e.ray).applyMatrix4(qc),!(this.boundingBox!==null&&Ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wc.fromBufferAttribute(i.attributes.skinIndex,e),Xc.fromBufferAttribute(i.attributes.skinWeight,e),Gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const l=Xc.getComponent(s);if(l!==0){const c=Wc.getComponent(s);jc.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector($d.copy(Gc).applyMatrix4(jc),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gh extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _h extends hn{constructor(e=null,t=1,n=1,i,s,l,c,h,f=Sn,g=Sn,x,v){super(null,l,c,h,f,g,i,s,x,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=new gt,Jd=new gt;class Vl{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new gt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,l=e.length;s<l;s++){const c=e[s]?e[s].matrixWorld:Jd;Yc.multiplyMatrices(c,t[s]),Yc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _h(t,e,e,Gn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let l=t[s];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),l=new gh),this.bones.push(l),this.boneInverses.push(new gt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const l=t[i];e.bones.push(l.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Al extends En{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ir=new gt,Kc=new gt,aa=[],$c=new li,Qd=new gt,ms=new Fn,gs=new ci;class ep extends Fn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),$c.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union($c)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),gs.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,l=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),e.ray.intersectsSphere(gs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ir),Kc.multiplyMatrices(n,Ir),ms.matrixWorld=Kc,ms.raycast(e,aa);for(let l=0,c=aa.length;l<c;l++){const h=aa[l];h.instanceId=s,h.object=this,t.push(h)}aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(i*this.count),i,this.count,Ul,$n));const s=this.morphTexture.source.data.data;let l=0;for(let f=0;f<n.length;f++)l+=n[f];const c=this.geometry.morphTargetsRelative?1:1-l,h=i*e;s[h]=c,s.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wo=new j,tp=new j,np=new mt;class Xi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wo.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||np.getNormalMatrix(e),i=this.coplanarPoint(wo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new ci,oa=new j;class Gl{constructor(e=new Xi,t=new Xi,n=new Xi,i=new Xi,s=new Xi,l=new Xi){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,i=e.elements,s=i[0],l=i[1],c=i[2],h=i[3],f=i[4],g=i[5],x=i[6],v=i[7],S=i[8],o=i[9],w=i[10],M=i[11],y=i[12],F=i[13],U=i[14],L=i[15];if(n[0].setComponents(h-s,v-f,M-S,L-y).normalize(),n[1].setComponents(h+s,v+f,M+S,L+y).normalize(),n[2].setComponents(h+l,v+g,M+o,L+F).normalize(),n[3].setComponents(h-l,v-g,M-o,L-F).normalize(),n[4].setComponents(h-c,v-x,M-w,L-U).normalize(),t===Ri)n[5].setComponents(h+c,v+x,M+w,L+U).normalize();else if(t===Ca)n[5].setComponents(c,x,w,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vh extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pa=new j,La=new j,Zc=new gt,_s=new Is,la=new ci,Ro=new j,Jc=new j;class Wl extends Yt{constructor(e=new ui,t=new vh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pa.fromBufferAttribute(t,i-1),La.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pa.distanceTo(La);e.setAttribute("lineDistance",new Pi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=s,e.ray.intersectsSphere(la)===!1)return;Zc.copy(i).invert(),_s.copy(e.ray).applyMatrix4(Zc);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,g=n.index,v=n.attributes.position;if(g!==null){const S=Math.max(0,l.start),o=Math.min(g.count,l.start+l.count);for(let w=S,M=o-1;w<M;w+=f){const y=g.getX(w),F=g.getX(w+1),U=ca(this,e,_s,h,y,F,w);U&&t.push(U)}if(this.isLineLoop){const w=g.getX(o-1),M=g.getX(S),y=ca(this,e,_s,h,w,M,o-1);y&&t.push(y)}}else{const S=Math.max(0,l.start),o=Math.min(v.count,l.start+l.count);for(let w=S,M=o-1;w<M;w+=f){const y=ca(this,e,_s,h,w,w+1,w);y&&t.push(y)}if(this.isLineLoop){const w=ca(this,e,_s,h,o-1,S,o-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function ca(r,e,t,n,i,s,l){const c=r.geometry.attributes.position;if(Pa.fromBufferAttribute(c,i),La.fromBufferAttribute(c,s),t.distanceSqToSegment(Pa,La,Ro,Jc)>n)return;Ro.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Ro);if(!(f<e.near||f>e.far))return{distance:f,point:Jc.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const Qc=new j,eu=new j;class ip extends Wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qc.fromBufferAttribute(t,i),eu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(eu);e.setAttribute("lineDistance",new Pi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rp extends Wl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xh extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tu=new gt,wl=new Is,ua=new ci,ha=new j;class sp extends Yt{constructor(e=new ui,t=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;tu.copy(i).invert(),wl.copy(e.ray).applyMatrix4(tu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,x=n.attributes.position;if(f!==null){const v=Math.max(0,l.start),S=Math.min(f.count,l.start+l.count);for(let o=v,w=S;o<w;o++){const M=f.getX(o);ha.fromBufferAttribute(x,M),nu(ha,M,h,i,e,t,this)}}else{const v=Math.max(0,l.start),S=Math.min(x.count,l.start+l.count);for(let o=v,w=S;o<w;o++)ha.fromBufferAttribute(x,o),nu(ha,o,h,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function nu(r,e,t,n,i,s,l){const c=wl.distanceSqToPoint(r);if(c<t){const h=new j;wl.closestPointToPoint(r,h),h.applyMatrix4(n);const f=i.ray.origin.distanceTo(h);if(f<i.near||f>i.far)return;s.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class yh extends hn{constructor(e,t,n=mr,i,s,l,c=Sn,h=Sn,f,g=ws){if(g!==ws&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,l,c,h,g,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ia extends ui{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,c=Math.floor(n),h=Math.floor(i),f=c+1,g=h+1,x=e/c,v=t/h,S=[],o=[],w=[],M=[];for(let y=0;y<g;y++){const F=y*v-l;for(let U=0;U<f;U++){const L=U*x-s;o.push(L,-F,0),w.push(0,0,1),M.push(U/c),M.push(1-y/h)}}for(let y=0;y<h;y++)for(let F=0;F<c;F++){const U=F+f*y,L=F+f*(y+1),G=F+1+f*(y+1),k=F+1+f*y;S.push(U,L,k),S.push(L,G,k)}this.setIndex(S),this.setAttribute("position",new Pi(o,3)),this.setAttribute("normal",new Pi(w,3)),this.setAttribute("uv",new Pi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xl extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Xl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ap extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class op extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function lp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function cp(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function iu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,l=0;l!==n;++s){const c=t[s]*e;for(let h=0;h!==e;++h)i[l++]=r[c+h]}return i}function Mh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let l=s[n];if(l!==void 0)if(Array.isArray(l))do l=s[n],l!==void 0&&(e.push(s.time),t.push(...l)),s=r[i++];while(s!==void 0);else if(l.toArray!==void 0)do l=s[n],l!==void 0&&(e.push(s.time),l.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do l=s[n],l!==void 0&&(e.push(s.time),t.push(l)),s=r[i++];while(s!==void 0)}class Us{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let l;t:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break e}l=t.length;break t}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let h=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(i=s,s=t[--n-1],e>=s)break e}l=n,n=0;break t}break n}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let l=0;l!==i;++l)t[l]=n[s+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class up extends Us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,l=e+1,c=i[s],h=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case Mc:s=e,c=2*t-n;break;case Sc:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Mc:l=e,h=2*n-t;break;case Sc:l=1,h=n+i[1]-i[0];break;default:l=e-1,h=t}const f=(n-t)*.5,g=this.valueSize;this._weightPrev=f/(t-c),this._weightNext=f/(h-n),this._offsetPrev=s*g,this._offsetNext=l*g}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=e*c,f=h-c,g=this._offsetPrev,x=this._offsetNext,v=this._weightPrev,S=this._weightNext,o=(n-t)/(i-t),w=o*o,M=w*o,y=-v*M+2*v*w-v*o,F=(1+v)*M+(-1.5-2*v)*w+(-.5+v)*o+1,U=(-1-S)*M+(1.5+S)*w+.5*o,L=S*M-S*w;for(let G=0;G!==c;++G)s[G]=y*l[g+G]+F*l[f+G]+U*l[h+G]+L*l[x+G];return s}}class hp extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=e*c,f=h-c,g=(n-t)/(i-t),x=1-g;for(let v=0;v!==c;++v)s[v]=l[f+v]*x+l[h+v]*g;return s}}class fp extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new up(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,l=i-1;for(;s!==i&&n[s]<e;)++s;for(;l!==-1&&n[l]>t;)--l;if(++l,s!==0||l!==i){s>=l&&(l=Math.max(l,1),s=l-1);const c=this.getValueSize();this.times=n.slice(s,l),this.values=this.values.slice(s*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==s;c++){const h=n[c];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,h),e=!1;break}if(l!==null&&l>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,h,l),e=!1;break}l=h}if(i!==void 0&&lp(i))for(let c=0,h=i.length;c!==h;++c){const f=i[c];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===io,s=e.length-1;let l=1;for(let c=1;c<s;++c){let h=!1;const f=e[c],g=e[c+1];if(f!==g&&(c!==1||f!==e[0]))if(i)h=!0;else{const x=c*n,v=x-n,S=x+n;for(let o=0;o!==n;++o){const w=t[x+o];if(w!==t[v+o]||w!==t[S+o]){h=!0;break}}}if(h){if(c!==l){e[l]=e[c];const x=c*n,v=l*n;for(let S=0;S!==n;++S)t[v+S]=t[x+S]}++l}}if(s>0){e[l]=e[s];for(let c=s*n,h=l*n,f=0;f!==n;++f)t[h+f]=t[c+f];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Ps;class $r extends Jn{constructor(e,t,n){super(e,t,n)}}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Cs;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Sh extends Jn{constructor(e,t,n,i){super(e,t,n,i)}}Sh.prototype.ValueTypeName="color";class qr extends Jn{constructor(e,t,n,i){super(e,t,n,i)}}qr.prototype.ValueTypeName="number";class dp extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=(n-t)/(i-t);let f=e*c;for(let g=f+c;f!==g;f+=4)ai.slerpFlat(s,0,l,f-c,l,f,h);return s}}class Yr extends Jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dp(this.times,this.values,this.getValueSize(),e)}}Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends Jn{constructor(e,t,n){super(e,t,n)}}Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Cs;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends Jn{constructor(e,t,n,i){super(e,t,n,i)}}Kr.prototype.ValueTypeName="vector";class pp{constructor(e="",t=-1,n=[],i=jf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(gp(n[l]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,l=n.length;s!==l;++s)t.push(Jn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,l=[];for(let c=0;c<s;c++){let h=[],f=[];h.push((c+s-1)%s,c,(c+1)%s),f.push(0,1,0);const g=cp(h);h=iu(h,1,g),f=iu(f,1,g),!i&&h[0]===0&&(h.push(s),f.push(f[0])),l.push(new qr(".morphTargetInfluences["+t[c].name+"]",h,f).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,h=e.length;c<h;c++){const f=e[c],g=f.name.match(s);if(g&&g.length>1){const x=g[1];let v=i[x];v||(i[x]=v=[]),v.push(f)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return l}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(x,v,S,o,w){if(S.length!==0){const M=[],y=[];Mh(S,M,y,o),M.length!==0&&w.push(new x(v,M,y))}},i=[],s=e.name||"default",l=e.fps||30,c=e.blendMode;let h=e.length||-1;const f=e.hierarchy||[];for(let x=0;x<f.length;x++){const v=f[x].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const S={};let o;for(o=0;o<v.length;o++)if(v[o].morphTargets)for(let w=0;w<v[o].morphTargets.length;w++)S[v[o].morphTargets[w]]=-1;for(const w in S){const M=[],y=[];for(let F=0;F!==v[o].morphTargets.length;++F){const U=v[o];M.push(U.time),y.push(U.morphTarget===w?1:0)}i.push(new qr(".morphTargetInfluence["+w+"]",M,y))}h=S.length*l}else{const S=".bones["+t[x].name+"]";n(Kr,S+".position",v,"pos",i),n(Yr,S+".quaternion",v,"rot",i),n(Kr,S+".scale",v,"scl",i)}}return i.length===0?null:new this(s,h,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qr;case"vector":case"vector2":case"vector3":case"vector4":return Kr;case"color":return Sh;case"quaternion":return Yr;case"bool":case"boolean":return $r;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function gp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mp(r.type);if(r.times===void 0){const t=[],n=[];Mh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Yi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class _p{constructor(e,t,n){const i=this;let s=!1,l=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){c++,s===!1&&i.onStart!==void 0&&i.onStart(g,l,c),s=!0},this.itemEnd=function(g){l++,i.onProgress!==void 0&&i.onProgress(g,l,c),l===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(g){i.onError!==void 0&&i.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,x){return f.push(g,x),this},this.removeHandler=function(g){const x=f.indexOf(g);return x!==-1&&f.splice(x,2),this},this.getHandler=function(g){for(let x=0,v=f.length;x<v;x+=2){const S=f[x],o=f[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return o}return null}}}const vp=new _p;class Jr{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class xp extends Error{constructor(e,t){super(e),this.response=t}}class Eh extends Jr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:i});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:i});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,h=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const g=Ti[e],x=f.body.getReader(),v=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),S=v?parseInt(v):0,o=S!==0;let w=0;const M=new ReadableStream({start(y){F();function F(){x.read().then(({done:U,value:L})=>{if(U)y.close();else{w+=L.byteLength;const G=new ProgressEvent("progress",{lengthComputable:o,loaded:w,total:S});for(let k=0,B=g.length;k<B;k++){const Z=g[k];Z.onProgress&&Z.onProgress(G)}y.enqueue(L),F()}},U=>{y.error(U)})}}});return new Response(M)}else throw new xp(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(g=>new DOMParser().parseFromString(g,c));case"json":return f.json();default:if(c==="")return f.text();{const x=/charset="?([^;"\s]*)"?/i.exec(c),v=x&&x[1]?x[1].toLowerCase():void 0,S=new TextDecoder(v);return f.arrayBuffer().then(o=>S.decode(o))}}}).then(f=>{Yi.add(e,f);const g=Ti[e];delete Ti[e];for(let x=0,v=g.length;x<v;x++){const S=g[x];S.onLoad&&S.onLoad(f)}}).catch(f=>{const g=Ti[e];if(g===void 0)throw this.manager.itemError(e),f;delete Ti[e];for(let x=0,v=g.length;x<v;x++){const S=g[x];S.onError&&S.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yp extends Jr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=Yi.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const c=Ls("img");function h(){g(),Yi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(x){g(),i&&i(x),s.manager.itemError(e),s.manager.itemEnd(e)}function g(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class Mp extends Jr{constructor(e){super(e)}load(e,t,n,i){const s=new hn,l=new yp(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Na extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Co=new gt,ru=new j,su=new j;class jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(su),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sp extends jl{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Xr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ep extends Na{constructor(e,t,n=0,i=Math.PI/3,s=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=l,this.map=null,this.shadow=new Sp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const au=new gt,vs=new j,Po=new j;class Tp extends jl{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(vs),Po.copy(n.position),Po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Po),n.updateMatrixWorld(),i.makeTranslation(-vs.x,-vs.y,-vs.z),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au)}}class bp extends Na{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ql extends ph{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,c=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,l=s+f*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ap extends jl{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ta extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wp extends Na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ts{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Rp extends Jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=Yi.get(e);if(l!==void 0){if(s.manager.itemStart(e),l.then){l.then(f=>{t&&t(f),s.manager.itemEnd(e)}).catch(f=>{i&&i(f)});return}return setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const h=fetch(e,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(f){return Yi.add(e,f),t&&t(f),s.manager.itemEnd(e),f}).catch(function(f){i&&i(f),Yi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Yi.add(e,h),s.manager.itemStart(e)}}class Cp extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Yl="\\[\\]\\.:\\/",Pp=new RegExp("["+Yl+"]","g"),Kl="[^"+Yl+"]",Lp="[^"+Yl.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",Kl),Ip=/(WCOD+)?/.source.replace("WCOD",Lp),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),Fp=new RegExp("^"+Dp+Ip+Np+Up+"$"),Op=["material","materials","bones","map"];class Bp{constructor(e,t,n){const i=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ot{constructor(e,t,n){this.path=t,this.parsedPath=n||Ot.parseTrackName(t),this.node=Ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ot.Composite(e,t,n):new Ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pp,"")}static parseTrackName(e){const t=Fp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Op.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let l=0;l<s.length;l++){const c=s[l];if(c.name===t||c.uuid===t)return c;const h=n(c.children);if(h)return h}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===f){f=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const l=e[i];if(l===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=s}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=Bp;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ou{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kp extends _r{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lu(r,e,t,n){const i=Hp(n);switch(t){case Zu:return r*e;case Qu:return r*e;case eh:return r*e*2;case Ul:return r*e/i.components*i.byteLength;case Fl:return r*e/i.components*i.byteLength;case th:return r*e*2/i.components*i.byteLength;case Ol:return r*e*2/i.components*i.byteLength;case Ju:return r*e*3/i.components*i.byteLength;case Gn:return r*e*4/i.components*i.byteLength;case Bl:return r*e*4/i.components*i.byteLength;case va:case xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qo:case tl:return Math.max(r,16)*Math.max(e,8)/4;case Jo:case el:return Math.max(r,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Sa:case xl:case yl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nh:case Ml:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Sl:case El:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hp(r){switch(r){case Di:case Yu:return{byteLength:1,components:1};case bs:case Ku:case Ds:return{byteLength:2,components:1};case Il:case Nl:return{byteLength:2,components:4};case mr:case Dl:case $n:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Th(){let r=null,e=!1,t=null,n=null;function i(s,l){t(s,l),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zp(r){const e=new WeakMap;function t(c,h){const f=c.array,g=c.usage,x=f.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,f,g),c.onUploadCallback();let S;if(f instanceof Float32Array)S=r.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=r.SHORT;else if(f instanceof Uint32Array)S=r.UNSIGNED_INT;else if(f instanceof Int32Array)S=r.INT;else if(f instanceof Int8Array)S=r.BYTE;else if(f instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:x}}function n(c,h,f){const g=h.array,x=h.updateRanges;if(r.bindBuffer(f,c),x.length===0)r.bufferSubData(f,0,g);else{x.sort((S,o)=>S.start-o.start);let v=0;for(let S=1;S<x.length;S++){const o=x[v],w=x[S];w.start<=o.start+o.count+1?o.count=Math.max(o.count,w.start+w.count-o.start):(++v,x[v]=w)}x.length=v+1;for(let S=0,o=x.length;S<o;S++){const w=x[S];r.bufferSubData(f,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=e.get(c);(!g||g.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:i,remove:s,update:l}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,zm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#define LAMBERT
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
}`,r_=`#define LAMBERT
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
}`,s_=`#define MATCAP
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
}`,a_=`#define MATCAP
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
}`,o_=`#define NORMAL
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
}`,l_=`#define NORMAL
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
}`,c_=`#define PHONG
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
}`,u_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,p_=`#define TOON
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
}`,m_=`uniform float size;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,x_=`uniform float rotation;
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
}`,y_=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Vp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:jp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:Kp,batching_pars_vertex:$p,batching_vertex:Zp,begin_vertex:Jp,beginnormal_vertex:Qp,bsdfs:em,iridescence_fragment:tm,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:sm,clipping_planes_vertex:am,color_fragment:om,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:um,common:hm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:_m,colorspace_fragment:vm,colorspace_pars_fragment:xm,envmap_fragment:ym,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:bm,fog_pars_vertex:Am,fog_fragment:wm,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Im,lights_toon_fragment:Um,lights_toon_pars_fragment:Fm,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:km,lights_physical_pars_fragment:Hm,lights_fragment_begin:zm,lights_fragment_maps:Vm,lights_fragment_end:Gm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Km,map_particle_fragment:$m,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:rg,normal_fragment_begin:sg,normal_fragment_maps:ag,normal_pars_fragment:og,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:dg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:_g,project_vertex:vg,dithering_fragment:xg,dithering_pars_fragment:yg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Tg,shadowmap_vertex:bg,shadowmask_pars_fragment:Ag,skinbase_vertex:wg,skinning_pars_vertex:Rg,skinning_vertex:Cg,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Fg,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:kg,worldpos_vertex:Hg,background_vert:zg,background_frag:Vg,backgroundCube_vert:Gg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:jg,depth_vert:qg,depth_frag:Yg,distanceRGBA_vert:Kg,distanceRGBA_frag:$g,equirect_vert:Zg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:r_,meshmatcap_vert:s_,meshmatcap_frag:a_,meshnormal_vert:o_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:u_,meshphysical_vert:h_,meshphysical_frag:f_,meshtoon_vert:d_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:__,shadow_frag:v_,sprite_vert:x_,sprite_frag:y_},Ce={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ii={basic:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:yn([Ce.points,Ce.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:yn([Ce.common,Ce.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:yn([Ce.sprite,Ce.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:yn([Ce.lights,Ce.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ii.physical={uniforms:yn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const da={r:0,b:0,g:0},or=new oi,M_=new gt;function S_(r,e,t,n,i,s,l){const c=new ut(0);let h=s===!0?0:1,f,g,x=null,v=0,S=null;function o(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?t:e).get(L)),L}function w(U){let L=!1;const G=o(U);G===null?y(c,h):G&&G.isColor&&(y(G,1),L=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,L){const G=o(L);G&&(G.isCubeTexture||G.mapping===Da)?(g===void 0&&(g=new Fn(new Ns(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:jr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,B,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(g)),or.copy(L.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(M_.makeRotationFromEuler(or)),g.material.toneMapped=Pt.getTransfer(G.colorSpace)!==Ht,(x!==G||v!==G.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,x=G,v=G.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(f===void 0&&(f=new Fn(new Ia(2,2),new Zi({name:"BackgroundMaterial",uniforms:jr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=G,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=Pt.getTransfer(G.colorSpace)!==Ht,G.matrixAutoUpdate===!0&&G.updateMatrix(),f.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||v!==G.version||S!==r.toneMapping)&&(f.material.needsUpdate=!0,x=G,v=G.version,S=r.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function y(U,L){U.getRGB(da,dh(r)),n.buffers.color.setClear(da.r,da.g,da.b,L,l)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(U,L=1){c.set(U),h=L,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,y(c,h)},render:w,addToRenderList:M,dispose:F}}function E_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=v(null);let s=i,l=!1;function c(_,b,D,O,V){let ee=!1;const ne=x(O,D,b);s!==ne&&(s=ne,f(s.object)),ee=S(_,O,D,V),ee&&o(_,O,D,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(ee||l)&&(l=!1,L(_,b,D,O),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function h(){return r.createVertexArray()}function f(_){return r.bindVertexArray(_)}function g(_){return r.deleteVertexArray(_)}function x(_,b,D){const O=D.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let ee=V[b.id];ee===void 0&&(ee={},V[b.id]=ee);let ne=ee[O];return ne===void 0&&(ne=v(h()),ee[O]=ne),ne}function v(_){const b=[],D=[],O=[];for(let V=0;V<t;V++)b[V]=0,D[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:O,object:_,attributes:{},index:null}}function S(_,b,D,O){const V=s.attributes,ee=b.attributes;let ne=0;const ae=D.getAttributes();for(const ie in ae)if(ae[ie].location>=0){const Ee=V[ie];let Me=ee[ie];if(Me===void 0&&(ie==="instanceMatrix"&&_.instanceMatrix&&(Me=_.instanceMatrix),ie==="instanceColor"&&_.instanceColor&&(Me=_.instanceColor)),Ee===void 0||Ee.attribute!==Me||Me&&Ee.data!==Me.data)return!0;ne++}return s.attributesNum!==ne||s.index!==O}function o(_,b,D,O){const V={},ee=b.attributes;let ne=0;const ae=D.getAttributes();for(const ie in ae)if(ae[ie].location>=0){let Ee=ee[ie];Ee===void 0&&(ie==="instanceMatrix"&&_.instanceMatrix&&(Ee=_.instanceMatrix),ie==="instanceColor"&&_.instanceColor&&(Ee=_.instanceColor));const Me={};Me.attribute=Ee,Ee&&Ee.data&&(Me.data=Ee.data),V[ie]=Me,ne++}s.attributes=V,s.attributesNum=ne,s.index=O}function w(){const _=s.newAttributes;for(let b=0,D=_.length;b<D;b++)_[b]=0}function M(_){y(_,0)}function y(_,b){const D=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;D[_]=1,O[_]===0&&(r.enableVertexAttribArray(_),O[_]=1),V[_]!==b&&(r.vertexAttribDivisor(_,b),V[_]=b)}function F(){const _=s.newAttributes,b=s.enabledAttributes;for(let D=0,O=b.length;D<O;D++)b[D]!==_[D]&&(r.disableVertexAttribArray(D),b[D]=0)}function U(_,b,D,O,V,ee,ne){ne===!0?r.vertexAttribIPointer(_,b,D,V,ee):r.vertexAttribPointer(_,b,D,O,V,ee)}function L(_,b,D,O){w();const V=O.attributes,ee=D.getAttributes(),ne=b.defaultAttributeValues;for(const ae in ee){const ie=ee[ae];if(ie.location>=0){let me=V[ae];if(me===void 0&&(ae==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),ae==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),me!==void 0){const Ee=me.normalized,Me=me.itemSize,Be=e.get(me);if(Be===void 0)continue;const Ze=Be.buffer,ce=Be.type,ve=Be.bytesPerElement,we=ce===r.INT||ce===r.UNSIGNED_INT||me.gpuType===Dl;if(me.isInterleavedBufferAttribute){const Te=me.data,je=Te.stride,dt=me.offset;if(Te.isInstancedInterleavedBuffer){for(let We=0;We<ie.locationSize;We++)y(ie.location+We,Te.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let We=0;We<ie.locationSize;We++)M(ie.location+We);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let We=0;We<ie.locationSize;We++)U(ie.location+We,Me/ie.locationSize,ce,Ee,je*ve,(dt+Me/ie.locationSize*We)*ve,we)}else{if(me.isInstancedBufferAttribute){for(let Te=0;Te<ie.locationSize;Te++)y(ie.location+Te,me.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Te=0;Te<ie.locationSize;Te++)M(ie.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Te=0;Te<ie.locationSize;Te++)U(ie.location+Te,Me/ie.locationSize,ce,Ee,Me*ve,Me/ie.locationSize*Te*ve,we)}}else if(ne!==void 0){const Ee=ne[ae];if(Ee!==void 0)switch(Ee.length){case 2:r.vertexAttrib2fv(ie.location,Ee);break;case 3:r.vertexAttrib3fv(ie.location,Ee);break;case 4:r.vertexAttrib4fv(ie.location,Ee);break;default:r.vertexAttrib1fv(ie.location,Ee)}}}}F()}function G(){Z();for(const _ in n){const b=n[_];for(const D in b){const O=b[D];for(const V in O)g(O[V].object),delete O[V];delete b[D]}delete n[_]}}function k(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const D in b){const O=b[D];for(const V in O)g(O[V].object),delete O[V];delete b[D]}delete n[_.id]}function B(_){for(const b in n){const D=n[b];if(D[_.id]===void 0)continue;const O=D[_.id];for(const V in O)g(O[V].object),delete O[V];delete D[_.id]}}function Z(){p(),l=!0,s!==i&&(s=i,f(s.object))}function p(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:Z,resetDefaultState:p,dispose:G,releaseStatesOfGeometry:k,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:F}}function T_(r,e,t){let n;function i(f){n=f}function s(f,g){r.drawArrays(n,f,g),t.update(g,n,1)}function l(f,g,x){x!==0&&(r.drawArraysInstanced(n,f,g,x),t.update(g,n,x))}function c(f,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,g,0,x);let S=0;for(let o=0;o<x;o++)S+=g[o];t.update(S,n,1)}function h(f,g,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let o=0;o<f.length;o++)l(f[o],g[o],v[o]);else{S.multiDrawArraysInstancedWEBGL(n,f,0,g,0,v,0,x);let o=0;for(let w=0;w<x;w++)o+=g[w]*v[w];t.update(o,n,1)}}this.setMode=i,this.render=s,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function b_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(B){return!(B!==Gn&&n.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){const Z=B===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Di&&n.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==$n&&!Z)}function h(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=h(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const x=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),o=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=o>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:o,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:F,maxVaryings:U,maxFragmentUniforms:L,vertexTextures:G,maxSamples:k}}function A_(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new Xi,c=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||n!==0||i;return i=v,n=x.length,S},this.beginShadows=function(){s=!0,g(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(x,v){t=g(x,v,0)},this.setState=function(x,v,S){const o=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,y=r.get(x);if(!i||o===null||o.length===0||s&&!M)s?g(null):f();else{const F=s?0:n,U=F*4;let L=y.clippingState||null;h.value=L,L=g(o,v,U,S);for(let G=0;G!==U;++G)L[G]=t[G];y.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(x,v,S,o){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=h.value,o!==!0||M===null){const y=S+w*4,F=v.matrixWorldInverse;c.getNormalMatrix(F),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,L=S;U!==w;++U,L+=4)l.copy(x[U]).applyMatrix4(F,c),l.normal.toArray(M,L),M[L+3]=l.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function w_(r){let e=new WeakMap;function t(l,c){return c===$o?l.mapping=Vr:c===Zo&&(l.mapping=Gr),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===$o||c===Zo)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new jd(h.height);return f.fromEquirectangularTexture(r,l),e.set(l,f),l.addEventListener("dispose",i),t(f.texture,l.mapping)}else return null}}return l}function i(l){const c=l.target;c.removeEventListener("dispose",i);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Fr=4,cu=[.125,.215,.35,.446,.526,.582],fr=20,Lo=new ql,uu=new ut;let Do=null,Io=0,No=0,Uo=!1;const ur=(1+Math.sqrt(5))/2,Nr=1/ur,hu=[new j(-ur,Nr,0),new j(ur,Nr,0),new j(-Nr,0,ur),new j(Nr,0,ur),new j(0,ur,-Nr),new j(0,ur,Nr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],R_=new j;class fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:l=256,position:c=R_}=s;Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,i,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Io,No),this._renderer.xr.enabled=Uo,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ds,format:Gn,colorSpace:Tn,depthBuffer:!1},i=du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C_(s)),this._blurMaterial=P_(s,e,t)}return i}_compileMaterial(e){const t=new Fn(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,i,s){const h=new Mn(90,1,t,n),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(uu),x.toneMapping=$i,x.autoClear=!1;const o=new dr({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),w=new Fn(new Ns,o);let M=!1;const y=e.background;y?y.isColor&&(o.color.copy(y),e.background=null,M=!0):(o.color.copy(uu),M=!0);for(let F=0;F<6;F++){const U=F%3;U===0?(h.up.set(0,f[F],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+g[F],s.y,s.z)):U===1?(h.up.set(0,0,f[F]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+g[F],s.z)):(h.up.set(0,f[F],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+g[F]));const L=this._cubeSize;pa(i,U*L,F>2?L:0,L,L),x.setRenderTarget(i),M&&x.render(w,h),x.render(e,h)}w.geometry.dispose(),w.material.dispose(),x.toneMapping=S,x.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vr||e.mapping===Gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=i?this._cubemapMaterial:this._equirectMaterial,l=new Fn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const h=this._cubeSize;pa(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=hu[(i-s-1)%hu.length];this._blur(e,s-1,s,l,c)}t.autoClear=n}_blur(e,t,n,i,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",s),this._halfBlur(l,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Fn(this._lodPlanes[i],f),v=f.uniforms,S=this._sizeLods[n]-1,o=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*fr-1),w=s/o,M=isFinite(s)?1+Math.floor(g*w):fr;M>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${fr}`);const y=[];let F=0;for(let B=0;B<fr;++B){const Z=B/w,p=Math.exp(-Z*Z/2);y.push(p),B===0?F+=p:B<M&&(F+=2*p)}for(let B=0;B<y.length;B++)y[B]=y[B]/F;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=l==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:U}=this;v.dTheta.value=o,v.mipInt.value=U-n;const L=this._sizeLods[i],G=3*L*(i>U-Fr?i-U+Fr:0),k=4*(this._cubeSize-L);pa(t,G,k,3*L,2*L),h.setRenderTarget(t),h.render(x,Lo)}}function C_(r){const e=[],t=[],n=[];let i=r;const s=r-Fr+1+cu.length;for(let l=0;l<s;l++){const c=Math.pow(2,i);t.push(c);let h=1/c;l>r-Fr?h=cu[l-r+Fr-1]:l===0&&(h=0),n.push(h);const f=1/(c-2),g=-f,x=1+f,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,o=6,w=3,M=2,y=1,F=new Float32Array(w*o*S),U=new Float32Array(M*o*S),L=new Float32Array(y*o*S);for(let k=0;k<S;k++){const B=k%3*2/3-1,Z=k>2?0:-1,p=[B,Z,0,B+2/3,Z,0,B+2/3,Z+1,0,B,Z,0,B+2/3,Z+1,0,B,Z+1,0];F.set(p,w*o*k),U.set(v,M*o*k);const _=[k,k,k,k,k,k];L.set(_,y*o*k)}const G=new ui;G.setAttribute("position",new En(F,w)),G.setAttribute("uv",new En(U,M)),G.setAttribute("faceIndex",new En(L,y)),e.push(G),i>Fr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function du(r,e,t){const n=new gr(r,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function P_(r,e,t){const n=new Float32Array(fr),i=new j(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function pu(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function mu(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function L_(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===$o||h===Zo,g=h===Vr||h===Gr;if(f||g){let x=e.get(c);const v=x!==void 0?x.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new fu(r)),x=f?t.fromEquirectangular(c,x):t.fromCubemap(c,x),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),x.texture;if(x!==void 0)return x.texture;{const S=c.image;return f&&S&&S.height>0||g&&S&&i(S)?(t===null&&(t=new fu(r)),x=f?t.fromEquirectangular(c):t.fromCubemap(c),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),c.addEventListener("dispose",s),x.texture):null}}}return c}function i(c){let h=0;const f=6;for(let g=0;g<f;g++)c[g]!==void 0&&h++;return h===f}function s(c){const h=c.target;h.removeEventListener("dispose",s);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function D_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ea("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I_(r,e,t,n){const i={},s=new WeakMap;function l(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const o in v.attributes)e.remove(v.attributes[o]);v.removeEventListener("dispose",l),delete i[v.id];const S=s.get(v);S&&(e.remove(S),s.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(x,v){return i[v.id]===!0||(v.addEventListener("dispose",l),i[v.id]=!0,t.memory.geometries++),v}function h(x){const v=x.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function f(x){const v=[],S=x.index,o=x.attributes.position;let w=0;if(S!==null){const F=S.array;w=S.version;for(let U=0,L=F.length;U<L;U+=3){const G=F[U+0],k=F[U+1],B=F[U+2];v.push(G,k,k,B,B,G)}}else if(o!==void 0){const F=o.array;w=o.version;for(let U=0,L=F.length/3-1;U<L;U+=3){const G=U+0,k=U+1,B=U+2;v.push(G,k,k,B,B,G)}}else return;const M=new(oh(v)?fh:hh)(v,1);M.version=w;const y=s.get(x);y&&e.remove(y),s.set(x,M)}function g(x){const v=s.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&f(x)}else f(x);return s.get(x)}return{get:c,update:h,getWireframeAttribute:g}}function N_(r,e,t){let n;function i(v){n=v}let s,l;function c(v){s=v.type,l=v.bytesPerElement}function h(v,S){r.drawElements(n,S,s,v*l),t.update(S,n,1)}function f(v,S,o){o!==0&&(r.drawElementsInstanced(n,S,s,v*l,o),t.update(S,n,o))}function g(v,S,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,s,v,0,o);let M=0;for(let y=0;y<o;y++)M+=S[y];t.update(M,n,1)}function x(v,S,o,w){if(o===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)f(v[y]/l,S[y],w[y]);else{M.multiDrawElementsInstancedWEBGL(n,S,0,s,v,0,w,0,o);let y=0;for(let F=0;F<o;F++)y+=S[F]*w[F];t.update(y,n,1)}}this.setMode=i,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function U_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function F_(r,e,t){const n=new WeakMap,i=new Nt;function s(l,c,h){const f=l.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=g!==void 0?g.length:0;let v=n.get(c);if(v===void 0||v.count!==x){let _=function(){Z.dispose(),n.delete(c),c.removeEventListener("dispose",_)};var S=_;v!==void 0&&v.texture.dispose();const o=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],F=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let L=0;o===!0&&(L=1),w===!0&&(L=2),M===!0&&(L=3);let G=c.attributes.position.count*L,k=1;G>e.maxTextureSize&&(k=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*k*4*x),Z=new lh(B,G,k,x);Z.type=$n,Z.needsUpdate=!0;const p=L*4;for(let b=0;b<x;b++){const D=y[b],O=F[b],V=U[b],ee=G*k*4*b;for(let ne=0;ne<D.count;ne++){const ae=ne*p;o===!0&&(i.fromBufferAttribute(D,ne),B[ee+ae+0]=i.x,B[ee+ae+1]=i.y,B[ee+ae+2]=i.z,B[ee+ae+3]=0),w===!0&&(i.fromBufferAttribute(O,ne),B[ee+ae+4]=i.x,B[ee+ae+5]=i.y,B[ee+ae+6]=i.z,B[ee+ae+7]=0),M===!0&&(i.fromBufferAttribute(V,ne),B[ee+ae+8]=i.x,B[ee+ae+9]=i.y,B[ee+ae+10]=i.z,B[ee+ae+11]=V.itemSize===4?i.w:1)}}v={count:x,texture:Z,size:new lt(G,k)},n.set(c,v),c.addEventListener("dispose",_)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let o=0;for(let M=0;M<f.length;M++)o+=f[M];const w=c.morphTargetsRelative?1:1-o;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:s}}function O_(r,e,t,n){let i=new WeakMap;function s(h){const f=n.render.frame,g=h.geometry,x=e.get(h,g);if(i.get(x)!==f&&(e.update(x),i.set(x,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),i.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),i.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;i.get(v)!==f&&(v.update(),i.set(v,f))}return x}function l(){i=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:l}}const bh=new hn,gu=new yh(1,1),Ah=new lh,wh=new Cd,Rh=new mh,_u=[],vu=[],xu=new Float32Array(16),yu=new Float32Array(9),Mu=new Float32Array(4);function Qr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=_u[i];if(s===void 0&&(s=new Float32Array(i),_u[i]=s),e!==0){n.toArray(s,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(s,c)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ua(r,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function B_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function H_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function V_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Mu.set(n),r.uniformMatrix2fv(this.addr,!1,Mu),on(t,n)}}function G_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;yu.set(n),r.uniformMatrix3fv(this.addr,!1,yu),on(t,n)}}function W_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;xu.set(n),r.uniformMatrix4fv(this.addr,!1,xu),on(t,n)}}function X_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function j_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function Y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function K_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function Z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function J_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function Q_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gu.compareFunction=sh,s=gu):s=bh,t.setTexture2D(e||s,i)}function ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wh,i)}function tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rh,i)}function nv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ah,i)}function iv(r){switch(r){case 5126:return B_;case 35664:return k_;case 35665:return H_;case 35666:return z_;case 35674:return V_;case 35675:return G_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return j_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return K_;case 36294:return $_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(r,e){r.uniform1fv(this.addr,e)}function sv(r,e){const t=Qr(e,this.size,2);r.uniform2fv(this.addr,t)}function av(r,e){const t=Qr(e,this.size,3);r.uniform3fv(this.addr,t)}function ov(r,e){const t=Qr(e,this.size,4);r.uniform4fv(this.addr,t)}function lv(r,e){const t=Qr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cv(r,e){const t=Qr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uv(r,e){const t=Qr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hv(r,e){r.uniform1iv(this.addr,e)}function fv(r,e){r.uniform2iv(this.addr,e)}function dv(r,e){r.uniform3iv(this.addr,e)}function pv(r,e){r.uniform4iv(this.addr,e)}function mv(r,e){r.uniform1uiv(this.addr,e)}function gv(r,e){r.uniform2uiv(this.addr,e)}function _v(r,e){r.uniform3uiv(this.addr,e)}function vv(r,e){r.uniform4uiv(this.addr,e)}function xv(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||bh,s[l])}function yv(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||wh,s[l])}function Mv(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||Rh,s[l])}function Sv(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||Ah,s[l])}function Ev(r){switch(r){case 5126:return rv;case 35664:return sv;case 35665:return av;case 35666:return ov;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iv(t.type)}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Su(r,e){r.seq.push(e),r.map[e.id]=e}function wv(r,e,t){const n=r.name,i=n.length;for(Fo.lastIndex=0;;){const s=Fo.exec(n),l=Fo.lastIndex;let c=s[1];const h=s[2]==="]",f=s[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===i){Su(t,f===void 0?new Tv(c,r,e):new bv(c,r,e));break}else{let x=t.map[c];x===void 0&&(x=new Av(c),Su(t,x)),t=x}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),l=e.getUniformLocation(t,s.name);wv(s,l,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const c=t[s],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function Eu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Rv=37297;let Cv=0;function Pv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Tu=new mt;function Lv(r){Pt._getMatrix(Tu,Pt.workingColorSpace,r);const e=`mat3( ${Tu.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(r)){case Ra:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function bu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Pv(r.getShaderSource(e),l)}else return i}function Dv(r,e){const t=Lv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Iv(r,e){let t;switch(e){case Bf:t="Linear";break;case kf:t="Reinhard";break;case Hf:t="Cineon";break;case zf:t="ACESFilmic";break;case Gf:t="AgX";break;case Wf:t="Neutral";break;case Vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ma=new j;function Nv(){Pt.getLuminanceCoefficients(ma);const r=ma.x.toFixed(4),e=ma.y.toFixed(4),t=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Fv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function Ms(r){return r!==""}function Au(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(r){return r.replace(Bv,Hv)}const kv=new Map;function Hv(r,e){let t=vt[e];if(t===void 0){const n=kv.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(r){return r.replace(zv,Vv)}function Vv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Gv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Wv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vr:case Gr:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gr:e="ENVMAP_MODE_REFRACTION";break}return e}function jv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ff:e="ENVMAP_BLENDING_MIX";break;case Of:e="ENVMAP_BLENDING_ADD";break}return e}function qv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yv(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,c=t.fragmentShader;const h=Gv(t),f=Wv(t),g=Xv(t),x=jv(t),v=qv(t),S=Uv(t),o=Fv(s),w=i.createProgram();let M,y,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,o].filter(Ms).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,o].filter(Ms).join(`
`),y.length>0&&(y+=`
`)):(M=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,o,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),y=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,o,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?vt.tonemapping_pars_fragment:"",t.toneMapping!==$i?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),l=Rl(l),l=Au(l,t),l=wu(l,t),c=Rl(c),c=Au(c,t),c=wu(c,t),l=Ru(l),c=Ru(c),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=F+M+l,L=F+y+c,G=Eu(i,i.VERTEX_SHADER,U),k=Eu(i,i.FRAGMENT_SHADER,L);i.attachShader(w,G),i.attachShader(w,k),t.index0AttributeName!==void 0?i.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function B(b){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(w).trim(),O=i.getShaderInfoLog(G).trim(),V=i.getShaderInfoLog(k).trim();let ee=!0,ne=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,w,G,k);else{const ae=bu(i,G,"vertex"),ie=bu(i,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+ae+`
`+ie)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||V==="")&&(ne=!1);ne&&(b.diagnostics={runnable:ee,programLog:D,vertexShader:{log:O,prefix:M},fragmentShader:{log:V,prefix:y}})}i.deleteShader(G),i.deleteShader(k),Z=new ba(i,w),p=Ov(i,w)}let Z;this.getUniforms=function(){return Z===void 0&&B(this),Z};let p;this.getAttributes=function(){return p===void 0&&B(this),p};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(w,Rv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=k,this}let Kv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zv(e),t.set(e,n)),n}}class Zv{constructor(e){this.id=Kv++,this.code=e,this.usedTimes=0}}function Jv(r,e,t,n,i,s,l){const c=new ch,h=new $v,f=new Set,g=[],x=i.logarithmicDepthBuffer,v=i.vertexTextures;let S=i.precision;const o={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(p){return f.add(p),p===0?"uv":`uv${p}`}function M(p,_,b,D,O){const V=D.fog,ee=O.geometry,ne=p.isMeshStandardMaterial?D.environment:null,ae=(p.isMeshStandardMaterial?t:e).get(p.envMap||ne),ie=ae&&ae.mapping===Da?ae.image.height:null,me=o[p.type];p.precision!==null&&(S=i.getMaxPrecision(p.precision),S!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",S,"instead."));const Ee=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Me=Ee!==void 0?Ee.length:0;let Be=0;ee.morphAttributes.position!==void 0&&(Be=1),ee.morphAttributes.normal!==void 0&&(Be=2),ee.morphAttributes.color!==void 0&&(Be=3);let Ze,ce,ve,we;if(me){const Lt=ii[me];Ze=Lt.vertexShader,ce=Lt.fragmentShader}else Ze=p.vertexShader,ce=p.fragmentShader,h.update(p),ve=h.getVertexShaderID(p),we=h.getFragmentShaderID(p);const Te=r.getRenderTarget(),je=r.state.buffers.depth.getReversed(),dt=O.isInstancedMesh===!0,We=O.isBatchedMesh===!0,It=!!p.map,Tt=!!p.matcap,qe=!!ae,z=!!p.aoMap,Mt=!!p.lightMap,st=!!p.bumpMap,at=!!p.normalMap,Ve=!!p.displacementMap,At=!!p.emissiveMap,ze=!!p.metalnessMap,N=!!p.roughnessMap,R=p.anisotropy>0,J=p.clearcoat>0,he=p.dispersion>0,xe=p.iridescence>0,ue=p.sheen>0,Xe=p.transmission>0,Pe=R&&!!p.anisotropyMap,Ue=J&&!!p.clearcoatMap,wt=J&&!!p.clearcoatNormalMap,Se=J&&!!p.clearcoatRoughnessMap,ke=xe&&!!p.iridescenceMap,Je=xe&&!!p.iridescenceThicknessMap,Qe=ue&&!!p.sheenColorMap,Ne=ue&&!!p.sheenRoughnessMap,St=!!p.specularMap,ct=!!p.specularColorMap,Bt=!!p.specularIntensityMap,X=Xe&&!!p.transmissionMap,Le=Xe&&!!p.thicknessMap,le=!!p.gradientMap,de=!!p.alphaMap,Ie=p.alphaTest>0,De=!!p.alphaHash,ht=!!p.extensions;let Gt=$i;p.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Gt=r.toneMapping);const tn={shaderID:me,shaderType:p.type,shaderName:p.name,vertexShader:Ze,fragmentShader:ce,defines:p.defines,customVertexShaderID:ve,customFragmentShaderID:we,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:S,batching:We,batchingColor:We&&O._colorsTexture!==null,instancing:dt,instancingColor:dt&&O.instanceColor!==null,instancingMorph:dt&&O.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Tn,alphaToCoverage:!!p.alphaToCoverage,map:It,matcap:Tt,envMap:qe,envMapMode:qe&&ae.mapping,envMapCubeUVHeight:ie,aoMap:z,lightMap:Mt,bumpMap:st,normalMap:at,displacementMap:v&&Ve,emissiveMap:At,normalMapObjectSpace:at&&p.normalMapType===$f,normalMapTangentSpace:at&&p.normalMapType===rh,metalnessMap:ze,roughnessMap:N,anisotropy:R,anisotropyMap:Pe,clearcoat:J,clearcoatMap:Ue,clearcoatNormalMap:wt,clearcoatRoughnessMap:Se,dispersion:he,iridescence:xe,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:ue,sheenColorMap:Qe,sheenRoughnessMap:Ne,specularMap:St,specularColorMap:ct,specularIntensityMap:Bt,transmission:Xe,transmissionMap:X,thicknessMap:Le,gradientMap:le,opaque:p.transparent===!1&&p.blending===Br&&p.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:De,combine:p.combine,mapUv:It&&w(p.map.channel),aoMapUv:z&&w(p.aoMap.channel),lightMapUv:Mt&&w(p.lightMap.channel),bumpMapUv:st&&w(p.bumpMap.channel),normalMapUv:at&&w(p.normalMap.channel),displacementMapUv:Ve&&w(p.displacementMap.channel),emissiveMapUv:At&&w(p.emissiveMap.channel),metalnessMapUv:ze&&w(p.metalnessMap.channel),roughnessMapUv:N&&w(p.roughnessMap.channel),anisotropyMapUv:Pe&&w(p.anisotropyMap.channel),clearcoatMapUv:Ue&&w(p.clearcoatMap.channel),clearcoatNormalMapUv:wt&&w(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&w(p.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&w(p.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&w(p.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&w(p.sheenRoughnessMap.channel),specularMapUv:St&&w(p.specularMap.channel),specularColorMapUv:ct&&w(p.specularColorMap.channel),specularIntensityMapUv:Bt&&w(p.specularIntensityMap.channel),transmissionMapUv:X&&w(p.transmissionMap.channel),thicknessMapUv:Le&&w(p.thicknessMap.channel),alphaMapUv:de&&w(p.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(at||R),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ee.attributes.uv&&(It||de),fog:!!V,useFog:p.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:je,skinning:O.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Be,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:p.dithering,shadowMapEnabled:r.shadowMap.enabled&&b.length>0,shadowMapType:r.shadowMap.type,toneMapping:Gt,decodeVideoTexture:It&&p.map.isVideoTexture===!0&&Pt.getTransfer(p.map.colorSpace)===Ht,decodeVideoTextureEmissive:At&&p.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(p.emissiveMap.colorSpace)===Ht,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===ri,flipSided:p.side===Rn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ht&&p.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&p.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function y(p){const _=[];if(p.shaderID?_.push(p.shaderID):(_.push(p.customVertexShaderID),_.push(p.customFragmentShaderID)),p.defines!==void 0)for(const b in p.defines)_.push(b),_.push(p.defines[b]);return p.isRawShaderMaterial===!1&&(F(_,p),U(_,p),_.push(r.outputColorSpace)),_.push(p.customProgramCacheKey),_.join()}function F(p,_){p.push(_.precision),p.push(_.outputColorSpace),p.push(_.envMapMode),p.push(_.envMapCubeUVHeight),p.push(_.mapUv),p.push(_.alphaMapUv),p.push(_.lightMapUv),p.push(_.aoMapUv),p.push(_.bumpMapUv),p.push(_.normalMapUv),p.push(_.displacementMapUv),p.push(_.emissiveMapUv),p.push(_.metalnessMapUv),p.push(_.roughnessMapUv),p.push(_.anisotropyMapUv),p.push(_.clearcoatMapUv),p.push(_.clearcoatNormalMapUv),p.push(_.clearcoatRoughnessMapUv),p.push(_.iridescenceMapUv),p.push(_.iridescenceThicknessMapUv),p.push(_.sheenColorMapUv),p.push(_.sheenRoughnessMapUv),p.push(_.specularMapUv),p.push(_.specularColorMapUv),p.push(_.specularIntensityMapUv),p.push(_.transmissionMapUv),p.push(_.thicknessMapUv),p.push(_.combine),p.push(_.fogExp2),p.push(_.sizeAttenuation),p.push(_.morphTargetsCount),p.push(_.morphAttributeCount),p.push(_.numDirLights),p.push(_.numPointLights),p.push(_.numSpotLights),p.push(_.numSpotLightMaps),p.push(_.numHemiLights),p.push(_.numRectAreaLights),p.push(_.numDirLightShadows),p.push(_.numPointLightShadows),p.push(_.numSpotLightShadows),p.push(_.numSpotLightShadowsWithMaps),p.push(_.numLightProbes),p.push(_.shadowMapType),p.push(_.toneMapping),p.push(_.numClippingPlanes),p.push(_.numClipIntersection),p.push(_.depthPacking)}function U(p,_){c.disableAll(),_.supportsVertexTextures&&c.enable(0),_.instancing&&c.enable(1),_.instancingColor&&c.enable(2),_.instancingMorph&&c.enable(3),_.matcap&&c.enable(4),_.envMap&&c.enable(5),_.normalMapObjectSpace&&c.enable(6),_.normalMapTangentSpace&&c.enable(7),_.clearcoat&&c.enable(8),_.iridescence&&c.enable(9),_.alphaTest&&c.enable(10),_.vertexColors&&c.enable(11),_.vertexAlphas&&c.enable(12),_.vertexUv1s&&c.enable(13),_.vertexUv2s&&c.enable(14),_.vertexUv3s&&c.enable(15),_.vertexTangents&&c.enable(16),_.anisotropy&&c.enable(17),_.alphaHash&&c.enable(18),_.batching&&c.enable(19),_.dispersion&&c.enable(20),_.batchingColor&&c.enable(21),p.push(c.mask),c.disableAll(),_.fog&&c.enable(0),_.useFog&&c.enable(1),_.flatShading&&c.enable(2),_.logarithmicDepthBuffer&&c.enable(3),_.reverseDepthBuffer&&c.enable(4),_.skinning&&c.enable(5),_.morphTargets&&c.enable(6),_.morphNormals&&c.enable(7),_.morphColors&&c.enable(8),_.premultipliedAlpha&&c.enable(9),_.shadowMapEnabled&&c.enable(10),_.doubleSided&&c.enable(11),_.flipSided&&c.enable(12),_.useDepthPacking&&c.enable(13),_.dithering&&c.enable(14),_.transmission&&c.enable(15),_.sheen&&c.enable(16),_.opaque&&c.enable(17),_.pointsUvs&&c.enable(18),_.decodeVideoTexture&&c.enable(19),_.decodeVideoTextureEmissive&&c.enable(20),_.alphaToCoverage&&c.enable(21),p.push(c.mask)}function L(p){const _=o[p.type];let b;if(_){const D=ii[_];b=Vd.clone(D.uniforms)}else b=p.uniforms;return b}function G(p,_){let b;for(let D=0,O=g.length;D<O;D++){const V=g[D];if(V.cacheKey===_){b=V,++b.usedTimes;break}}return b===void 0&&(b=new Yv(r,_,p,s),g.push(b)),b}function k(p){if(--p.usedTimes===0){const _=g.indexOf(p);g[_]=g[g.length-1],g.pop(),p.destroy()}}function B(p){h.remove(p)}function Z(){h.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:L,acquireProgram:G,releaseProgram:k,releaseShaderCache:B,programs:g,dispose:Z}}function Qv(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let c=r.get(l);return c===void 0&&(c={},r.set(l,c)),c}function n(l){r.delete(l)}function i(l,c,h){r.get(l)[c]=h}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function e0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(x,v,S,o,w,M){let y=r[e];return y===void 0?(y={id:x.id,object:x,geometry:v,material:S,groupOrder:o,renderOrder:x.renderOrder,z:w,group:M},r[e]=y):(y.id=x.id,y.object=x,y.geometry=v,y.material=S,y.groupOrder=o,y.renderOrder=x.renderOrder,y.z=w,y.group=M),e++,y}function c(x,v,S,o,w,M){const y=l(x,v,S,o,w,M);S.transmission>0?n.push(y):S.transparent===!0?i.push(y):t.push(y)}function h(x,v,S,o,w,M){const y=l(x,v,S,o,w,M);S.transmission>0?n.unshift(y):S.transparent===!0?i.unshift(y):t.unshift(y)}function f(x,v){t.length>1&&t.sort(x||e0),n.length>1&&n.sort(v||Pu),i.length>1&&i.sort(v||Pu)}function g(){for(let x=e,v=r.length;x<v;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:h,finish:g,sort:f}}function t0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new Lu,r.set(n,[l])):i>=s.length?(l=new Lu,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function n0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ut};break;case"SpotLight":t={position:new j,direction:new j,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function i0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let r0=0;function s0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function a0(r){const e=new n0,t=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new j);const i=new j,s=new gt,l=new gt;function c(f){let g=0,x=0,v=0;for(let p=0;p<9;p++)n.probe[p].set(0,0,0);let S=0,o=0,w=0,M=0,y=0,F=0,U=0,L=0,G=0,k=0,B=0;f.sort(s0);for(let p=0,_=f.length;p<_;p++){const b=f[p],D=b.color,O=b.intensity,V=b.distance,ee=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)g+=D.r*O,x+=D.g*O,v+=D.b*O;else if(b.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(b.sh.coefficients[ne],O);B++}else if(b.isDirectionalLight){const ne=e.get(b);if(ne.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const ae=b.shadow,ie=t.get(b);ie.shadowIntensity=ae.intensity,ie.shadowBias=ae.bias,ie.shadowNormalBias=ae.normalBias,ie.shadowRadius=ae.radius,ie.shadowMapSize=ae.mapSize,n.directionalShadow[S]=ie,n.directionalShadowMap[S]=ee,n.directionalShadowMatrix[S]=b.shadow.matrix,F++}n.directional[S]=ne,S++}else if(b.isSpotLight){const ne=e.get(b);ne.position.setFromMatrixPosition(b.matrixWorld),ne.color.copy(D).multiplyScalar(O),ne.distance=V,ne.coneCos=Math.cos(b.angle),ne.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),ne.decay=b.decay,n.spot[w]=ne;const ae=b.shadow;if(b.map&&(n.spotLightMap[G]=b.map,G++,ae.updateMatrices(b),b.castShadow&&k++),n.spotLightMatrix[w]=ae.matrix,b.castShadow){const ie=t.get(b);ie.shadowIntensity=ae.intensity,ie.shadowBias=ae.bias,ie.shadowNormalBias=ae.normalBias,ie.shadowRadius=ae.radius,ie.shadowMapSize=ae.mapSize,n.spotShadow[w]=ie,n.spotShadowMap[w]=ee,L++}w++}else if(b.isRectAreaLight){const ne=e.get(b);ne.color.copy(D).multiplyScalar(O),ne.halfWidth.set(b.width*.5,0,0),ne.halfHeight.set(0,b.height*.5,0),n.rectArea[M]=ne,M++}else if(b.isPointLight){const ne=e.get(b);if(ne.color.copy(b.color).multiplyScalar(b.intensity),ne.distance=b.distance,ne.decay=b.decay,b.castShadow){const ae=b.shadow,ie=t.get(b);ie.shadowIntensity=ae.intensity,ie.shadowBias=ae.bias,ie.shadowNormalBias=ae.normalBias,ie.shadowRadius=ae.radius,ie.shadowMapSize=ae.mapSize,ie.shadowCameraNear=ae.camera.near,ie.shadowCameraFar=ae.camera.far,n.pointShadow[o]=ie,n.pointShadowMap[o]=ee,n.pointShadowMatrix[o]=b.shadow.matrix,U++}n.point[o]=ne,o++}else if(b.isHemisphereLight){const ne=e.get(b);ne.skyColor.copy(b.color).multiplyScalar(O),ne.groundColor.copy(b.groundColor).multiplyScalar(O),n.hemi[y]=ne,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=x,n.ambient[2]=v;const Z=n.hash;(Z.directionalLength!==S||Z.pointLength!==o||Z.spotLength!==w||Z.rectAreaLength!==M||Z.hemiLength!==y||Z.numDirectionalShadows!==F||Z.numPointShadows!==U||Z.numSpotShadows!==L||Z.numSpotMaps!==G||Z.numLightProbes!==B)&&(n.directional.length=S,n.spot.length=w,n.rectArea.length=M,n.point.length=o,n.hemi.length=y,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=L+G-k,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=B,Z.directionalLength=S,Z.pointLength=o,Z.spotLength=w,Z.rectAreaLength=M,Z.hemiLength=y,Z.numDirectionalShadows=F,Z.numPointShadows=U,Z.numSpotShadows=L,Z.numSpotMaps=G,Z.numLightProbes=B,n.version=r0++)}function h(f,g){let x=0,v=0,S=0,o=0,w=0;const M=g.matrixWorldInverse;for(let y=0,F=f.length;y<F;y++){const U=f[y];if(U.isDirectionalLight){const L=n.directional[x];L.direction.setFromMatrixPosition(U.matrixWorld),i.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(M),x++}else if(U.isSpotLight){const L=n.spot[S];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(U.matrixWorld),i.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const L=n.rectArea[o];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),l.identity(),s.copy(U.matrixWorld),s.premultiply(M),l.extractRotation(s),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),o++}else if(U.isPointLight){const L=n.point[v];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const L=n.hemi[w];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(M),w++}}}return{setup:c,setupView:h,state:n}}function Du(r){const e=new a0(r),t=[],n=[];function i(g){f.camera=g,t.length=0,n.length=0}function s(g){t.push(g)}function l(g){n.push(g)}function c(){e.setup(t)}function h(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:l}}function o0(r){let e=new WeakMap;function t(i,s=0){const l=e.get(i);let c;return l===void 0?(c=new Du(r),e.set(i,[c])):s>=l.length?(c=new Du(r),l.push(c)):c=l[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function u0(r,e,t){let n=new Gl;const i=new lt,s=new lt,l=new Nt,c=new ap({depthPacking:Kf}),h=new op,f={},g=t.maxTextureSize,x={[Li]:Rn,[Rn]:Li,[ri]:ri},v=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const o=new ui;o.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Fn(o,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let y=this.type;this.render=function(k,B,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const p=r.getRenderTarget(),_=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Ki),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=y!==bi&&this.type===bi,V=y===bi&&this.type!==bi;for(let ee=0,ne=k.length;ee<ne;ee++){const ae=k[ee],ie=ae.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;i.copy(ie.mapSize);const me=ie.getFrameExtents();if(i.multiply(me),s.copy(ie.mapSize),(i.x>g||i.y>g)&&(i.x>g&&(s.x=Math.floor(g/me.x),i.x=s.x*me.x,ie.mapSize.x=s.x),i.y>g&&(s.y=Math.floor(g/me.y),i.y=s.y*me.y,ie.mapSize.y=s.y)),ie.map===null||O===!0||V===!0){const Me=this.type!==bi?{minFilter:Sn,magFilter:Sn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new gr(i.x,i.y,Me),ie.map.texture.name=ae.name+".shadowMap",ie.camera.updateProjectionMatrix()}r.setRenderTarget(ie.map),r.clear();const Ee=ie.getViewportCount();for(let Me=0;Me<Ee;Me++){const Be=ie.getViewport(Me);l.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),D.viewport(l),ie.updateMatrices(ae,Me),n=ie.getFrustum(),L(B,Z,ie.camera,ae,this.type)}ie.isPointLightShadow!==!0&&this.type===bi&&F(ie,Z),ie.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(p,_,b)};function F(k,B){const Z=e.update(w);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new gr(i.x,i.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(B,null,Z,v,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(B,null,Z,S,w,null)}function U(k,B,Z,p){let _=null;const b=Z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(b!==void 0)_=b;else if(_=Z.isPointLight===!0?h:c,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const D=_.uuid,O=B.uuid;let V=f[D];V===void 0&&(V={},f[D]=V);let ee=V[O];ee===void 0&&(ee=_.clone(),V[O]=ee,B.addEventListener("dispose",G)),_=ee}if(_.visible=B.visible,_.wireframe=B.wireframe,p===bi?_.side=B.shadowSide!==null?B.shadowSide:B.side:_.side=B.shadowSide!==null?B.shadowSide:x[B.side],_.alphaMap=B.alphaMap,_.alphaTest=B.alphaTest,_.map=B.map,_.clipShadows=B.clipShadows,_.clippingPlanes=B.clippingPlanes,_.clipIntersection=B.clipIntersection,_.displacementMap=B.displacementMap,_.displacementScale=B.displacementScale,_.displacementBias=B.displacementBias,_.wireframeLinewidth=B.wireframeLinewidth,_.linewidth=B.linewidth,Z.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=r.properties.get(_);D.light=Z}return _}function L(k,B,Z,p,_){if(k.visible===!1)return;if(k.layers.test(B.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&_===bi)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld);const O=e.update(k),V=k.material;if(Array.isArray(V)){const ee=O.groups;for(let ne=0,ae=ee.length;ne<ae;ne++){const ie=ee[ne],me=V[ie.materialIndex];if(me&&me.visible){const Ee=U(k,me,p,_);k.onBeforeShadow(r,k,B,Z,O,Ee,ie),r.renderBufferDirect(Z,null,O,Ee,k,ie),k.onAfterShadow(r,k,B,Z,O,Ee,ie)}}}else if(V.visible){const ee=U(k,V,p,_);k.onBeforeShadow(r,k,B,Z,O,ee,null),r.renderBufferDirect(Z,null,O,ee,k,null),k.onAfterShadow(r,k,B,Z,O,ee,null)}}const D=k.children;for(let O=0,V=D.length;O<V;O++)L(D[O],B,Z,p,_)}function G(k){k.target.removeEventListener("dispose",G);for(const Z in f){const p=f[Z],_=k.target.uuid;_ in p&&(p[_].dispose(),delete p[_])}}}const h0={[Go]:Wo,[Xo]:Yo,[jo]:Ko,[zr]:qo,[Wo]:Go,[Yo]:Xo,[Ko]:jo,[qo]:zr};function f0(r,e){function t(){let X=!1;const Le=new Nt;let le=null;const de=new Nt(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!X&&(r.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,De,ht,Gt,tn){tn===!0&&(Ie*=Gt,De*=Gt,ht*=Gt),Le.set(Ie,De,ht,Gt),de.equals(Le)===!1&&(r.clearColor(Ie,De,ht,Gt),de.copy(Le))},reset:function(){X=!1,le=null,de.set(-1,0,0,0)}}}function n(){let X=!1,Le=!1,le=null,de=null,Ie=null;return{setReversed:function(De){if(Le!==De){const ht=e.get("EXT_clip_control");De?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),Le=De;const Gt=Ie;Ie=null,this.setClear(Gt)}},getReversed:function(){return Le},setTest:function(De){De?Te(r.DEPTH_TEST):je(r.DEPTH_TEST)},setMask:function(De){le!==De&&!X&&(r.depthMask(De),le=De)},setFunc:function(De){if(Le&&(De=h0[De]),de!==De){switch(De){case Go:r.depthFunc(r.NEVER);break;case Wo:r.depthFunc(r.ALWAYS);break;case Xo:r.depthFunc(r.LESS);break;case zr:r.depthFunc(r.LEQUAL);break;case jo:r.depthFunc(r.EQUAL);break;case qo:r.depthFunc(r.GEQUAL);break;case Yo:r.depthFunc(r.GREATER);break;case Ko:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=De}},setLocked:function(De){X=De},setClear:function(De){Ie!==De&&(Le&&(De=1-De),r.clearDepth(De),Ie=De)},reset:function(){X=!1,le=null,de=null,Ie=null,Le=!1}}}function i(){let X=!1,Le=null,le=null,de=null,Ie=null,De=null,ht=null,Gt=null,tn=null;return{setTest:function(Lt){X||(Lt?Te(r.STENCIL_TEST):je(r.STENCIL_TEST))},setMask:function(Lt){Le!==Lt&&!X&&(r.stencilMask(Lt),Le=Lt)},setFunc:function(Lt,bn,On){(le!==Lt||de!==bn||Ie!==On)&&(r.stencilFunc(Lt,bn,On),le=Lt,de=bn,Ie=On)},setOp:function(Lt,bn,On){(De!==Lt||ht!==bn||Gt!==On)&&(r.stencilOp(Lt,bn,On),De=Lt,ht=bn,Gt=On)},setLocked:function(Lt){X=Lt},setClear:function(Lt){tn!==Lt&&(r.clearStencil(Lt),tn=Lt)},reset:function(){X=!1,Le=null,le=null,de=null,Ie=null,De=null,ht=null,Gt=null,tn=null}}}const s=new t,l=new n,c=new i,h=new WeakMap,f=new WeakMap;let g={},x={},v=new WeakMap,S=[],o=null,w=!1,M=null,y=null,F=null,U=null,L=null,G=null,k=null,B=new ut(0,0,0),Z=0,p=!1,_=null,b=null,D=null,O=null,V=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ae=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=ae>=1):ie.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=ae>=2);let me=null,Ee={};const Me=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),Ze=new Nt().fromArray(Me),ce=new Nt().fromArray(Be);function ve(X,Le,le,de){const Ie=new Uint8Array(4),De=r.createTexture();r.bindTexture(X,De),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<le;ht++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Le+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return De}const we={};we[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(r.DEPTH_TEST),l.setFunc(zr),st(!1),at(mc),Te(r.CULL_FACE),z(Ki);function Te(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function je(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function dt(X,Le){return x[X]!==Le?(r.bindFramebuffer(X,Le),x[X]=Le,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Le),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function We(X,Le){let le=S,de=!1;if(X){le=v.get(Le),le===void 0&&(le=[],v.set(Le,le));const Ie=X.textures;if(le.length!==Ie.length||le[0]!==r.COLOR_ATTACHMENT0){for(let De=0,ht=Ie.length;De<ht;De++)le[De]=r.COLOR_ATTACHMENT0+De;le.length=Ie.length,de=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,de=!0);de&&r.drawBuffers(le)}function It(X){return o!==X?(r.useProgram(X),o=X,!0):!1}const Tt={[hr]:r.FUNC_ADD,[xf]:r.FUNC_SUBTRACT,[yf]:r.FUNC_REVERSE_SUBTRACT};Tt[Mf]=r.MIN,Tt[Sf]=r.MAX;const qe={[Ef]:r.ZERO,[Tf]:r.ONE,[bf]:r.SRC_COLOR,[zo]:r.SRC_ALPHA,[Lf]:r.SRC_ALPHA_SATURATE,[Cf]:r.DST_COLOR,[wf]:r.DST_ALPHA,[Af]:r.ONE_MINUS_SRC_COLOR,[Vo]:r.ONE_MINUS_SRC_ALPHA,[Pf]:r.ONE_MINUS_DST_COLOR,[Rf]:r.ONE_MINUS_DST_ALPHA,[Df]:r.CONSTANT_COLOR,[If]:r.ONE_MINUS_CONSTANT_COLOR,[Nf]:r.CONSTANT_ALPHA,[Uf]:r.ONE_MINUS_CONSTANT_ALPHA};function z(X,Le,le,de,Ie,De,ht,Gt,tn,Lt){if(X===Ki){w===!0&&(je(r.BLEND),w=!1);return}if(w===!1&&(Te(r.BLEND),w=!0),X!==vf){if(X!==M||Lt!==p){if((y!==hr||L!==hr)&&(r.blendEquation(r.FUNC_ADD),y=hr,L=hr),Lt)switch(X){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFunc(r.ONE,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}F=null,U=null,G=null,k=null,B.set(0,0,0),Z=0,M=X,p=Lt}return}Ie=Ie||Le,De=De||le,ht=ht||de,(Le!==y||Ie!==L)&&(r.blendEquationSeparate(Tt[Le],Tt[Ie]),y=Le,L=Ie),(le!==F||de!==U||De!==G||ht!==k)&&(r.blendFuncSeparate(qe[le],qe[de],qe[De],qe[ht]),F=le,U=de,G=De,k=ht),(Gt.equals(B)===!1||tn!==Z)&&(r.blendColor(Gt.r,Gt.g,Gt.b,tn),B.copy(Gt),Z=tn),M=X,p=!1}function Mt(X,Le){X.side===ri?je(r.CULL_FACE):Te(r.CULL_FACE);let le=X.side===Rn;Le&&(le=!le),st(le),X.blending===Br&&X.transparent===!1?z(Ki):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),s.setMask(X.colorWrite);const de=X.stencilWrite;c.setTest(de),de&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),At(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):je(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(X){_!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),_=X)}function at(X){X!==gf?(Te(r.CULL_FACE),X!==b&&(X===mc?r.cullFace(r.BACK):X===_f?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):je(r.CULL_FACE),b=X}function Ve(X){X!==D&&(ne&&r.lineWidth(X),D=X)}function At(X,Le,le){X?(Te(r.POLYGON_OFFSET_FILL),(O!==Le||V!==le)&&(r.polygonOffset(Le,le),O=Le,V=le)):je(r.POLYGON_OFFSET_FILL)}function ze(X){X?Te(r.SCISSOR_TEST):je(r.SCISSOR_TEST)}function N(X){X===void 0&&(X=r.TEXTURE0+ee-1),me!==X&&(r.activeTexture(X),me=X)}function R(X,Le,le){le===void 0&&(me===null?le=r.TEXTURE0+ee-1:le=me);let de=Ee[le];de===void 0&&(de={type:void 0,texture:void 0},Ee[le]=de),(de.type!==X||de.texture!==Le)&&(me!==le&&(r.activeTexture(le),me=le),r.bindTexture(X,Le||we[X]),de.type=X,de.texture=Le)}function J(){const X=Ee[me];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function he(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Ze.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ze.copy(X))}function Ne(X){ce.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),ce.copy(X))}function St(X,Le){let le=f.get(Le);le===void 0&&(le=new WeakMap,f.set(Le,le));let de=le.get(X);de===void 0&&(de=r.getUniformBlockIndex(Le,X.name),le.set(X,de))}function ct(X,Le){const de=f.get(Le).get(X);h.get(Le)!==de&&(r.uniformBlockBinding(Le,de,X.__bindingPointIndex),h.set(Le,de))}function Bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},me=null,Ee={},x={},v=new WeakMap,S=[],o=null,w=!1,M=null,y=null,F=null,U=null,L=null,G=null,k=null,B=new ut(0,0,0),Z=0,p=!1,_=null,b=null,D=null,O=null,V=null,Ze.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Te,disable:je,bindFramebuffer:dt,drawBuffers:We,useProgram:It,setBlending:z,setMaterial:Mt,setFlipSided:st,setCullFace:at,setLineWidth:Ve,setPolygonOffset:At,setScissorTest:ze,activeTexture:N,bindTexture:R,unbindTexture:J,compressedTexImage2D:he,compressedTexImage3D:xe,texImage2D:ke,texImage3D:Je,updateUBOMapping:St,uniformBlockBinding:ct,texStorage2D:wt,texStorage3D:Se,texSubImage2D:ue,texSubImage3D:Xe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ue,scissor:Qe,viewport:Ne,reset:Bt}}function d0(r,e,t,n,i,s,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new lt,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function o(N,R){return S?new OffscreenCanvas(N,R):Ls("canvas")}function w(N,R,J){let he=1;const xe=ze(N);if((xe.width>J||xe.height>J)&&(he=J/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(he*xe.width),Xe=Math.floor(he*xe.height);x===void 0&&(x=o(ue,Xe));const Pe=R?o(ue,Xe):x;return Pe.width=ue,Pe.height=Xe,Pe.getContext("2d").drawImage(N,0,0,ue,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Xe+")."),Pe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function M(N){return N.generateMipmaps}function y(N){r.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,R,J,he,xe=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=R;if(R===r.RED&&(J===r.FLOAT&&(ue=r.R32F),J===r.HALF_FLOAT&&(ue=r.R16F),J===r.UNSIGNED_BYTE&&(ue=r.R8)),R===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.R8UI),J===r.UNSIGNED_SHORT&&(ue=r.R16UI),J===r.UNSIGNED_INT&&(ue=r.R32UI),J===r.BYTE&&(ue=r.R8I),J===r.SHORT&&(ue=r.R16I),J===r.INT&&(ue=r.R32I)),R===r.RG&&(J===r.FLOAT&&(ue=r.RG32F),J===r.HALF_FLOAT&&(ue=r.RG16F),J===r.UNSIGNED_BYTE&&(ue=r.RG8)),R===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RG8UI),J===r.UNSIGNED_SHORT&&(ue=r.RG16UI),J===r.UNSIGNED_INT&&(ue=r.RG32UI),J===r.BYTE&&(ue=r.RG8I),J===r.SHORT&&(ue=r.RG16I),J===r.INT&&(ue=r.RG32I)),R===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),J===r.UNSIGNED_INT&&(ue=r.RGB32UI),J===r.BYTE&&(ue=r.RGB8I),J===r.SHORT&&(ue=r.RGB16I),J===r.INT&&(ue=r.RGB32I)),R===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),J===r.UNSIGNED_INT&&(ue=r.RGBA32UI),J===r.BYTE&&(ue=r.RGBA8I),J===r.SHORT&&(ue=r.RGBA16I),J===r.INT&&(ue=r.RGBA32I)),R===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),R===r.RGBA){const Xe=xe?Ra:Pt.getTransfer(he);J===r.FLOAT&&(ue=r.RGBA32F),J===r.HALF_FLOAT&&(ue=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ue=Xe===Ht?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function L(N,R){let J;return N?R===null||R===mr||R===As?J=r.DEPTH24_STENCIL8:R===$n?J=r.DEPTH32F_STENCIL8:R===bs&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===mr||R===As?J=r.DEPTH_COMPONENT24:R===$n?J=r.DEPTH_COMPONENT32F:R===bs&&(J=r.DEPTH_COMPONENT16),J}function G(N,R){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==Un?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function k(N){const R=N.target;R.removeEventListener("dispose",k),Z(R),R.isVideoTexture&&g.delete(R)}function B(N){const R=N.target;R.removeEventListener("dispose",B),_(R)}function Z(N){const R=n.get(N);if(R.__webglInit===void 0)return;const J=N.source,he=v.get(J);if(he){const xe=he[R.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&p(N),Object.keys(he).length===0&&v.delete(J)}n.remove(N)}function p(N){const R=n.get(N);r.deleteTexture(R.__webglTexture);const J=N.source,he=v.get(J);delete he[R.__cacheKey],l.memory.textures--}function _(N){const R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(R.__webglFramebuffer[he]))for(let xe=0;xe<R.__webglFramebuffer[he].length;xe++)r.deleteFramebuffer(R.__webglFramebuffer[he][xe]);else r.deleteFramebuffer(R.__webglFramebuffer[he]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[he])}else{if(Array.isArray(R.__webglFramebuffer))for(let he=0;he<R.__webglFramebuffer.length;he++)r.deleteFramebuffer(R.__webglFramebuffer[he]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let he=0;he<R.__webglColorRenderbuffer.length;he++)R.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[he]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=N.textures;for(let he=0,xe=J.length;he<xe;he++){const ue=n.get(J[he]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),l.memory.textures--),n.remove(J[he])}n.remove(N)}let b=0;function D(){b=0}function O(){const N=b;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),b+=1,N}function V(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function ee(N,R){const J=n.get(N);if(N.isVideoTexture&&Ve(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){const he=N.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(J,N,R);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+R)}function ne(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){ce(J,N,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+R)}function ae(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){ce(J,N,R);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+R)}function ie(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){ve(J,N,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+R)}const me={[Wr]:r.REPEAT,[qi]:r.CLAMP_TO_EDGE,[wa]:r.MIRRORED_REPEAT},Ee={[Sn]:r.NEAREST,[qu]:r.NEAREST_MIPMAP_NEAREST,[ys]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[_a]:r.LINEAR_MIPMAP_NEAREST,[wi]:r.LINEAR_MIPMAP_LINEAR},Me={[Zf]:r.NEVER,[id]:r.ALWAYS,[Jf]:r.LESS,[sh]:r.LEQUAL,[Qf]:r.EQUAL,[nd]:r.GEQUAL,[ed]:r.GREATER,[td]:r.NOTEQUAL};function Be(N,R){if(R.type===$n&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Un||R.magFilter===_a||R.magFilter===ys||R.magFilter===wi||R.minFilter===Un||R.minFilter===_a||R.minFilter===ys||R.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,me[R.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,me[R.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,me[R.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Ee[R.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Ee[R.minFilter]),R.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Me[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Sn||R.minFilter!==ys&&R.minFilter!==wi||R.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Ze(N,R){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",k));const he=R.source;let xe=v.get(he);xe===void 0&&(xe={},v.set(he,xe));const ue=V(R);if(ue!==N.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,J=!0),xe[ue].usedTimes++;const Xe=xe[N.__cacheKey];Xe!==void 0&&(xe[N.__cacheKey].usedTimes--,Xe.usedTimes===0&&p(R)),N.__cacheKey=ue,N.__webglTexture=xe[ue].texture}return J}function ce(N,R,J){let he=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(he=r.TEXTURE_3D);const xe=Ze(N,R),ue=R.source;t.bindTexture(he,N.__webglTexture,r.TEXTURE0+J);const Xe=n.get(ue);if(ue.version!==Xe.__version||xe===!0){t.activeTexture(r.TEXTURE0+J);const Pe=Pt.getPrimaries(Pt.workingColorSpace),Ue=R.colorSpace===ji?null:Pt.getPrimaries(R.colorSpace),wt=R.colorSpace===ji||Pe===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Se=w(R.image,!1,i.maxTextureSize);Se=At(R,Se);const ke=s.convert(R.format,R.colorSpace),Je=s.convert(R.type);let Qe=U(R.internalFormat,ke,Je,R.colorSpace,R.isVideoTexture);Be(he,R);let Ne;const St=R.mipmaps,ct=R.isVideoTexture!==!0,Bt=Xe.__version===void 0||xe===!0,X=ue.dataReady,Le=G(R,Se);if(R.isDepthTexture)Qe=L(R.format===Rs,R.type),Bt&&(ct?t.texStorage2D(r.TEXTURE_2D,1,Qe,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,Je,null));else if(R.isDataTexture)if(St.length>0){ct&&Bt&&t.texStorage2D(r.TEXTURE_2D,Le,Qe,St[0].width,St[0].height);for(let le=0,de=St.length;le<de;le++)Ne=St[le],ct?X&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,Ne.width,Ne.height,ke,Je,Ne.data):t.texImage2D(r.TEXTURE_2D,le,Qe,Ne.width,Ne.height,0,ke,Je,Ne.data);R.generateMipmaps=!1}else ct?(Bt&&t.texStorage2D(r.TEXTURE_2D,Le,Qe,Se.width,Se.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Je,Se.data)):t.texImage2D(r.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,Je,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ct&&Bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Qe,St[0].width,St[0].height,Se.depth);for(let le=0,de=St.length;le<de;le++)if(Ne=St[le],R.format!==Gn)if(ke!==null)if(ct){if(X)if(R.layerUpdates.size>0){const Ie=lu(Ne.width,Ne.height,R.format,R.type);for(const De of R.layerUpdates){const ht=Ne.data.subarray(De*Ie/Ne.data.BYTES_PER_ELEMENT,(De+1)*Ie/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,De,Ne.width,Ne.height,1,ke,ht)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Ne.width,Ne.height,Se.depth,ke,Ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Qe,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Ne.width,Ne.height,Se.depth,ke,Je,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Qe,Ne.width,Ne.height,Se.depth,0,ke,Je,Ne.data)}else{ct&&Bt&&t.texStorage2D(r.TEXTURE_2D,Le,Qe,St[0].width,St[0].height);for(let le=0,de=St.length;le<de;le++)Ne=St[le],R.format!==Gn?ke!==null?ct?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,Ne.width,Ne.height,ke,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?X&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,Ne.width,Ne.height,ke,Je,Ne.data):t.texImage2D(r.TEXTURE_2D,le,Qe,Ne.width,Ne.height,0,ke,Je,Ne.data)}else if(R.isDataArrayTexture)if(ct){if(Bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Qe,Se.width,Se.height,Se.depth),X)if(R.layerUpdates.size>0){const le=lu(Se.width,Se.height,R.format,R.type);for(const de of R.layerUpdates){const Ie=Se.data.subarray(de*le/Se.data.BYTES_PER_ELEMENT,(de+1)*le/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,ke,Je,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(R.isData3DTexture)ct?(Bt&&t.texStorage3D(r.TEXTURE_3D,Le,Qe,Se.width,Se.height,Se.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)):t.texImage3D(r.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(R.isFramebufferTexture){if(Bt)if(ct)t.texStorage2D(r.TEXTURE_2D,Le,Qe,Se.width,Se.height);else{let le=Se.width,de=Se.height;for(let Ie=0;Ie<Le;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,Qe,le,de,0,ke,Je,null),le>>=1,de>>=1}}else if(St.length>0){if(ct&&Bt){const le=ze(St[0]);t.texStorage2D(r.TEXTURE_2D,Le,Qe,le.width,le.height)}for(let le=0,de=St.length;le<de;le++)Ne=St[le],ct?X&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ke,Je,Ne):t.texImage2D(r.TEXTURE_2D,le,Qe,ke,Je,Ne);R.generateMipmaps=!1}else if(ct){if(Bt){const le=ze(Se);t.texStorage2D(r.TEXTURE_2D,Le,Qe,le.width,le.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Je,Se)}else t.texImage2D(r.TEXTURE_2D,0,Qe,ke,Je,Se);M(R)&&y(he),Xe.__version=ue.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ve(N,R,J){if(R.image.length!==6)return;const he=Ze(N,R),xe=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+J);const ue=n.get(xe);if(xe.version!==ue.__version||he===!0){t.activeTexture(r.TEXTURE0+J);const Xe=Pt.getPrimaries(Pt.workingColorSpace),Pe=R.colorSpace===ji?null:Pt.getPrimaries(R.colorSpace),Ue=R.colorSpace===ji||Xe===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const wt=R.isCompressedTexture||R.image[0].isCompressedTexture,Se=R.image[0]&&R.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!wt&&!Se?ke[de]=w(R.image[de],!0,i.maxCubemapSize):ke[de]=Se?R.image[de].image:R.image[de],ke[de]=At(R,ke[de]);const Je=ke[0],Qe=s.convert(R.format,R.colorSpace),Ne=s.convert(R.type),St=U(R.internalFormat,Qe,Ne,R.colorSpace),ct=R.isVideoTexture!==!0,Bt=ue.__version===void 0||he===!0,X=xe.dataReady;let Le=G(R,Je);Be(r.TEXTURE_CUBE_MAP,R);let le;if(wt){ct&&Bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,St,Je.width,Je.height);for(let de=0;de<6;de++){le=ke[de].mipmaps;for(let Ie=0;Ie<le.length;Ie++){const De=le[Ie];R.format!==Gn?Qe!==null?ct?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,De.width,De.height,Qe,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,St,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,De.width,De.height,Qe,Ne,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,St,De.width,De.height,0,Qe,Ne,De.data)}}}else{if(le=R.mipmaps,ct&&Bt){le.length>0&&Le++;const de=ze(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,St,de.width,de.height)}for(let de=0;de<6;de++)if(Se){ct?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Qe,Ne,ke[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,St,ke[de].width,ke[de].height,0,Qe,Ne,ke[de].data);for(let Ie=0;Ie<le.length;Ie++){const ht=le[Ie].image[de].image;ct?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,ht.width,ht.height,Qe,Ne,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,St,ht.width,ht.height,0,Qe,Ne,ht.data)}}else{ct?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,Ne,ke[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,St,Qe,Ne,ke[de]);for(let Ie=0;Ie<le.length;Ie++){const De=le[Ie];ct?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Qe,Ne,De.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,St,Qe,Ne,De.image[de])}}}M(R)&&y(r.TEXTURE_CUBE_MAP),ue.__version=xe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function we(N,R,J,he,xe,ue){const Xe=s.convert(J.format,J.colorSpace),Pe=s.convert(J.type),Ue=U(J.internalFormat,Xe,Pe,J.colorSpace),wt=n.get(R),Se=n.get(J);if(Se.__renderTarget=R,!wt.__hasExternalTextures){const ke=Math.max(1,R.width>>ue),Je=Math.max(1,R.height>>ue);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,ue,Ue,ke,Je,R.depth,0,Xe,Pe,null):t.texImage2D(xe,ue,Ue,ke,Je,0,Xe,Pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),at(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,xe,Se.__webglTexture,0,st(R)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,xe,Se.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(N,R,J){if(r.bindRenderbuffer(r.RENDERBUFFER,N),R.depthBuffer){const he=R.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ue=L(R.stencilBuffer,xe),Xe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=st(R);at(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,ue,R.width,R.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ue,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,N)}else{const he=R.textures;for(let xe=0;xe<he.length;xe++){const ue=he[xe],Xe=s.convert(ue.format,ue.colorSpace),Pe=s.convert(ue.type),Ue=U(ue.internalFormat,Xe,Pe,ue.colorSpace),wt=st(R);J&&at(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,Ue,R.width,R.height):at(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,Ue,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function je(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(R.depthTexture);he.__renderTarget=R,(!he.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ee(R.depthTexture,0);const xe=he.__webglTexture,ue=st(R);if(R.depthTexture.format===ws)at(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(R.depthTexture.format===Rs)at(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function dt(N){const R=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),he){const xe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),R.__depthDisposeCallback=xe}R.__boundDepthTexture=he}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");je(R.__webglFramebuffer,N)}else if(J){R.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[he]),R.__webglDepthbuffer[he]===void 0)R.__webglDepthbuffer[he]=r.createRenderbuffer(),Te(R.__webglDepthbuffer[he],N,!1);else{const xe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=R.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Te(R.__webglDepthbuffer,N,!1);else{const he=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(N,R,J){const he=n.get(N);R!==void 0&&we(he.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&dt(N)}function It(N){const R=N.texture,J=n.get(N),he=n.get(R);N.addEventListener("dispose",B);const xe=N.textures,ue=N.isWebGLCubeRenderTarget===!0,Xe=xe.length>1;if(Xe||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=R.version,l.memory.textures++),ue){J.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[Pe]=[];for(let Ue=0;Ue<R.mipmaps.length;Ue++)J.__webglFramebuffer[Pe][Ue]=r.createFramebuffer()}else J.__webglFramebuffer[Pe]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let Pe=0;Pe<R.mipmaps.length;Pe++)J.__webglFramebuffer[Pe]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){const wt=n.get(xe[Pe]);wt.__webglTexture===void 0&&(wt.__webglTexture=r.createTexture(),l.memory.textures++)}if(N.samples>0&&at(N)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Pe=0;Pe<xe.length;Pe++){const Ue=xe[Pe];J.__webglColorRenderbuffer[Pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Pe]);const wt=s.convert(Ue.format,Ue.colorSpace),Se=s.convert(Ue.type),ke=U(Ue.internalFormat,wt,Se,Ue.colorSpace,N.isXRRenderTarget===!0),Je=st(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,ke,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,J.__webglColorRenderbuffer[Pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Be(r.TEXTURE_CUBE_MAP,R);for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)we(J.__webglFramebuffer[Pe][Ue],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ue);else we(J.__webglFramebuffer[Pe],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);M(R)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){const wt=xe[Pe],Se=n.get(wt);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),Be(r.TEXTURE_2D,wt),we(J.__webglFramebuffer,N,wt,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,0),M(wt)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Pe=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,he.__webglTexture),Be(Pe,R),R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)we(J.__webglFramebuffer[Ue],N,R,r.COLOR_ATTACHMENT0,Pe,Ue);else we(J.__webglFramebuffer,N,R,r.COLOR_ATTACHMENT0,Pe,0);M(R)&&y(Pe),t.unbindTexture()}N.depthBuffer&&dt(N)}function Tt(N){const R=N.textures;for(let J=0,he=R.length;J<he;J++){const xe=R[J];if(M(xe)){const ue=F(N),Xe=n.get(xe).__webglTexture;t.bindTexture(ue,Xe),y(ue),t.unbindTexture()}}}const qe=[],z=[];function Mt(N){if(N.samples>0){if(at(N)===!1){const R=N.textures,J=N.width,he=N.height;let xe=r.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=n.get(N),Pe=R.length>1;if(Pe)for(let Ue=0;Ue<R.length;Ue++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<R.length;Ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const wt=n.get(R[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,J,he,0,0,J,he,xe,r.NEAREST),h===!0&&(qe.length=0,z.length=0,qe.push(r.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&N.resolveDepthBuffer===!1&&(qe.push(ue),z.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pe)for(let Ue=0;Ue<R.length;Ue++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const wt=n.get(R[Ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,wt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const R=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function st(N){return Math.min(i.maxSamples,N.samples)}function at(N){const R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ve(N){const R=l.render.frame;g.get(N)!==R&&(g.set(N,R),N.update())}function At(N,R){const J=N.colorSpace,he=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==Tn&&J!==ji&&(Pt.getTransfer(J)===Ht?(he!==Gn||xe!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(f.width=N.naturalWidth||N.width,f.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(f.width=N.displayWidth,f.height=N.displayHeight):(f.width=N.width,f.height=N.height),f}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=ee,this.setTexture2DArray=ne,this.setTexture3D=ae,this.setTextureCube=ie,this.rebindTextures=We,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=at}function p0(r,e){function t(n,i=ji){let s;const l=Pt.getTransfer(i);if(n===Di)return r.UNSIGNED_BYTE;if(n===Il)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return r.BYTE;if(n===Ku)return r.SHORT;if(n===bs)return r.UNSIGNED_SHORT;if(n===Dl)return r.INT;if(n===mr)return r.UNSIGNED_INT;if(n===$n)return r.FLOAT;if(n===Ds)return r.HALF_FLOAT;if(n===Zu)return r.ALPHA;if(n===Ju)return r.RGB;if(n===Gn)return r.RGBA;if(n===Qu)return r.LUMINANCE;if(n===eh)return r.LUMINANCE_ALPHA;if(n===ws)return r.DEPTH_COMPONENT;if(n===Rs)return r.DEPTH_STENCIL;if(n===Ul)return r.RED;if(n===Fl)return r.RED_INTEGER;if(n===th)return r.RG;if(n===Ol)return r.RG_INTEGER;if(n===Bl)return r.RGBA_INTEGER;if(n===va||n===xa||n===ya||n===Ma)if(l===Ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Qo||n===el||n===tl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===rl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nl||n===il)return l===Ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl||n===_l||n===vl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return l===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===xl||n===yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sa)return l===Ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===Ml||n===Sl||n===El)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g0=`
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

}`;class _0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new hn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zi({vertexShader:m0,fragmentShader:g0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new Ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends _r{constructor(e,t){super();const n=this;let i=null,s=1,l=null,c="local-floor",h=1,f=null,g=null,x=null,v=null,S=null,o=null;const w=new _0,M=t.getContextAttributes();let y=null,F=null;const U=[],L=[],G=new lt;let k=null;const B=new Mn;B.viewport=new Nt;const Z=new Mn;Z.viewport=new Nt;const p=[B,Z],_=new Cp;let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ve=U[ce];return ve===void 0&&(ve=new To,U[ce]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ce){let ve=U[ce];return ve===void 0&&(ve=new To,U[ce]=ve),ve.getGripSpace()},this.getHand=function(ce){let ve=U[ce];return ve===void 0&&(ve=new To,U[ce]=ve),ve.getHandSpace()};function O(ce){const ve=L.indexOf(ce.inputSource);if(ve===-1)return;const we=U[ve];we!==void 0&&(we.update(ce.inputSource,ce.frame,f||l),we.dispatchEvent({type:ce.type,data:ce.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ee);for(let ce=0;ce<U.length;ce++){const ve=L[ce];ve!==null&&(L[ce]=null,U[ce].disconnect(ve))}b=null,D=null,w.reset(),e.setRenderTarget(y),S=null,v=null,x=null,i=null,F=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){c=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ce){f=ce},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return o},this.getSession=function(){return i},this.setSession=async function(ce){if(i=ce,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Te=null,je=null;M.depth&&(je=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=M.stencil?Rs:ws,Te=M.stencil?As:mr);const dt={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:s};x=new XRWebGLBinding(i,t),v=x.createProjectionLayer(dt),i.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),F=new gr(v.textureWidth,v.textureHeight,{format:Gn,type:Di,depthTexture:new yh(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(i,t,we),i.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),F=new gr(S.framebufferWidth,S.framebufferHeight,{format:Gn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await i.requestReferenceSpace(c),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ee(ce){for(let ve=0;ve<ce.removed.length;ve++){const we=ce.removed[ve],Te=L.indexOf(we);Te>=0&&(L[Te]=null,U[Te].disconnect(we))}for(let ve=0;ve<ce.added.length;ve++){const we=ce.added[ve];let Te=L.indexOf(we);if(Te===-1){for(let dt=0;dt<U.length;dt++)if(dt>=L.length){L.push(we),Te=dt;break}else if(L[dt]===null){L[dt]=we,Te=dt;break}if(Te===-1)break}const je=U[Te];je&&je.connect(we)}}const ne=new j,ae=new j;function ie(ce,ve,we){ne.setFromMatrixPosition(ve.matrixWorld),ae.setFromMatrixPosition(we.matrixWorld);const Te=ne.distanceTo(ae),je=ve.projectionMatrix.elements,dt=we.projectionMatrix.elements,We=je[14]/(je[10]-1),It=je[14]/(je[10]+1),Tt=(je[9]+1)/je[5],qe=(je[9]-1)/je[5],z=(je[8]-1)/je[0],Mt=(dt[8]+1)/dt[0],st=We*z,at=We*Mt,Ve=Te/(-z+Mt),At=Ve*-z;if(ve.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(At),ce.translateZ(Ve),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),je[10]===-1)ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const ze=We+Ve,N=It+Ve,R=st-At,J=at+(Te-At),he=Tt*It/N*ze,xe=qe*It/N*ze;ce.projectionMatrix.makePerspective(R,J,he,xe,ze,N),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function me(ce,ve){ve===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ve.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(i===null)return;let ve=ce.near,we=ce.far;w.texture!==null&&(w.depthNear>0&&(ve=w.depthNear),w.depthFar>0&&(we=w.depthFar)),_.near=Z.near=B.near=ve,_.far=Z.far=B.far=we,(b!==_.near||D!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,D=_.far),B.layers.mask=ce.layers.mask|2,Z.layers.mask=ce.layers.mask|4,_.layers.mask=B.layers.mask|Z.layers.mask;const Te=ce.parent,je=_.cameras;me(_,Te);for(let dt=0;dt<je.length;dt++)me(je[dt],Te);je.length===2?ie(_,B,Z):_.projectionMatrix.copy(B.projectionMatrix),Ee(ce,_,Te)};function Ee(ce,ve,we){we===null?ce.matrix.copy(ve.matrixWorld):(ce.matrix.copy(we.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ve.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Xr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(ce){h=ce,v!==null&&(v.fixedFoveation=ce),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ce)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(_)};let Me=null;function Be(ce,ve){if(g=ve.getViewerPose(f||l),o=ve,g!==null){const we=g.views;S!==null&&(e.setRenderTargetFramebuffer(F,S.framebuffer),e.setRenderTarget(F));let Te=!1;we.length!==_.cameras.length&&(_.cameras.length=0,Te=!0);for(let We=0;We<we.length;We++){const It=we[We];let Tt=null;if(S!==null)Tt=S.getViewport(It);else{const z=x.getViewSubImage(v,It);Tt=z.viewport,We===0&&(e.setRenderTargetTextures(F,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(F))}let qe=p[We];qe===void 0&&(qe=new Mn,qe.layers.enable(We),qe.viewport=new Nt,p[We]=qe),qe.matrix.fromArray(It.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(It.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),We===0&&(_.matrix.copy(qe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Te===!0&&_.cameras.push(qe)}const je=i.enabledFeatures;if(je&&je.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){const We=x.getDepthInformation(we[0]);We&&We.isValid&&We.texture&&w.init(e,We,i.renderState)}}for(let we=0;we<U.length;we++){const Te=L[we],je=U[we];Te!==null&&je!==void 0&&je.update(Te,ve,f||l)}Me&&Me(ce,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),o=null}const Ze=new Th;Ze.setAnimationLoop(Be),this.setAnimationLoop=function(ce){Me=ce},this.dispose=function(){}}}const lr=new oi,x0=new gt;function y0(r,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function n(M,y){y.color.getRGB(M.fogColor.value,dh(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function i(M,y,F,U,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?s(M,y):y.isMeshToonMaterial?(s(M,y),x(M,y)):y.isMeshPhongMaterial?(s(M,y),g(M,y)):y.isMeshStandardMaterial?(s(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,L)):y.isMeshMatcapMaterial?(s(M,y),o(M,y)):y.isMeshDepthMaterial?s(M,y):y.isMeshDistanceMaterial?(s(M,y),w(M,y)):y.isMeshNormalMaterial?s(M,y):y.isLineBasicMaterial?(l(M,y),y.isLineDashedMaterial&&c(M,y)):y.isPointsMaterial?h(M,y,F,U):y.isSpriteMaterial?f(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Rn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Rn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const F=e.get(y),U=F.envMap,L=F.envMapRotation;U&&(M.envMap.value=U,lr.copy(L),lr.x*=-1,lr.y*=-1,lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),M.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(lr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function l(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function c(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function h(M,y,F,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*F,M.scale.value=U*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function x(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,F){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Rn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function o(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const F=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function M0(r,e,t,n){let i={},s={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(F,U){const L=U.program;n.uniformBlockBinding(F,L)}function f(F,U){let L=i[F.id];L===void 0&&(o(F),L=g(F),i[F.id]=L,F.addEventListener("dispose",M));const G=U.program;n.updateUBOMapping(F,G);const k=e.render.frame;s[F.id]!==k&&(v(F),s[F.id]=k)}function g(F){const U=x();F.__bindingPointIndex=U;const L=r.createBuffer(),G=F.__size,k=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,G,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function x(){for(let F=0;F<c;F++)if(l.indexOf(F)===-1)return l.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(F){const U=i[F.id],L=F.uniforms,G=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let k=0,B=L.length;k<B;k++){const Z=Array.isArray(L[k])?L[k]:[L[k]];for(let p=0,_=Z.length;p<_;p++){const b=Z[p];if(S(b,k,p,G)===!0){const D=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let V=0;for(let ee=0;ee<O.length;ee++){const ne=O[ee],ae=w(ne);typeof ne=="number"||typeof ne=="boolean"?(b.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,D+V,b.__data)):ne.isMatrix3?(b.__data[0]=ne.elements[0],b.__data[1]=ne.elements[1],b.__data[2]=ne.elements[2],b.__data[3]=0,b.__data[4]=ne.elements[3],b.__data[5]=ne.elements[4],b.__data[6]=ne.elements[5],b.__data[7]=0,b.__data[8]=ne.elements[6],b.__data[9]=ne.elements[7],b.__data[10]=ne.elements[8],b.__data[11]=0):(ne.toArray(b.__data,V),V+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(F,U,L,G){const k=F.value,B=U+"_"+L;if(G[B]===void 0)return typeof k=="number"||typeof k=="boolean"?G[B]=k:G[B]=k.clone(),!0;{const Z=G[B];if(typeof k=="number"||typeof k=="boolean"){if(Z!==k)return G[B]=k,!0}else if(Z.equals(k)===!1)return Z.copy(k),!0}return!1}function o(F){const U=F.uniforms;let L=0;const G=16;for(let B=0,Z=U.length;B<Z;B++){const p=Array.isArray(U[B])?U[B]:[U[B]];for(let _=0,b=p.length;_<b;_++){const D=p[_],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,ee=O.length;V<ee;V++){const ne=O[V],ae=w(ne),ie=L%G,me=ie%ae.boundary,Ee=ie+me;L+=me,Ee!==0&&G-Ee<ae.storage&&(L+=G-Ee),D.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=L,L+=ae.storage}}}const k=L%G;return k>0&&(L+=G-k),F.__size=L,F.__cache={},this}function w(F){const U={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(U.boundary=4,U.storage=4):F.isVector2?(U.boundary=8,U.storage=8):F.isVector3||F.isColor?(U.boundary=16,U.storage=12):F.isVector4?(U.boundary=16,U.storage=16):F.isMatrix3?(U.boundary=48,U.storage=48):F.isMatrix4?(U.boundary=64,U.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),U}function M(F){const U=F.target;U.removeEventListener("dispose",M);const L=l.indexOf(U.__bindingPointIndex);l.splice(L,1),r.deleteBuffer(i[U.id]),delete i[U.id],delete s[U.id]}function y(){for(const F in i)r.deleteBuffer(i[F]);l=[],i={},s={}}return{bind:h,update:f,dispose:y}}class S0{constructor(e={}){const{canvas:t=yd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=l;const o=new Uint32Array(4),w=new Int32Array(4);let M=null,y=null;const F=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let G=!1;this._outputColorSpace=un;let k=0,B=0,Z=null,p=-1,_=null;const b=new Nt,D=new Nt;let O=null;const V=new ut(0);let ee=0,ne=t.width,ae=t.height,ie=1,me=null,Ee=null;const Me=new Nt(0,0,ne,ae),Be=new Nt(0,0,ne,ae);let Ze=!1;const ce=new Gl;let ve=!1,we=!1;const Te=new gt,je=new gt,dt=new j,We=new Nt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function qe(){return Z===null?ie:1}let z=n;function Mt(C,K){return t.getContext(C,K)}try{const C={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",De,!1),z===null){const K="webgl2";if(z=Mt(K,C),z===null)throw Mt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let st,at,Ve,At,ze,N,R,J,he,xe,ue,Xe,Pe,Ue,wt,Se,ke,Je,Qe,Ne,St,ct,Bt,X;function Le(){st=new D_(z),st.init(),ct=new p0(z,st),at=new b_(z,st,e,ct),Ve=new f0(z,st),at.reverseDepthBuffer&&v&&Ve.buffers.depth.setReversed(!0),At=new U_(z),ze=new Qv,N=new d0(z,st,Ve,ze,at,ct,At),R=new w_(L),J=new L_(L),he=new zp(z),Bt=new E_(z,he),xe=new I_(z,he,At,Bt),ue=new O_(z,xe,he,At),Qe=new F_(z,at,N),Se=new A_(ze),Xe=new Jv(L,R,J,st,at,Bt,Se),Pe=new y0(L,ze),Ue=new t0,wt=new o0(st),Je=new S_(L,R,J,Ve,ue,S,h),ke=new u0(L,ue,at),X=new M0(z,At,at,Ve),Ne=new T_(z,st,At),St=new N_(z,st,At),At.programs=Xe.programs,L.capabilities=at,L.extensions=st,L.properties=ze,L.renderLists=Ue,L.shadowMap=ke,L.state=Ve,L.info=At}Le();const le=new v0(L,z);this.xr=le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(ne,ae,!1))},this.getSize=function(C){return C.set(ne,ae)},this.setSize=function(C,K,re=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,ae=K,t.width=Math.floor(C*ie),t.height=Math.floor(K*ie),re===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(ne*ie,ae*ie).floor()},this.setDrawingBufferSize=function(C,K,re){ne=C,ae=K,ie=re,t.width=Math.floor(C*re),t.height=Math.floor(K*re),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,K,re,se){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,K,re,se),Ve.viewport(b.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,K,re,se){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,K,re,se),Ve.scissor(D.copy(Be).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(C){Ve.setScissorTest(Ze=C)},this.setOpaqueSort=function(C){me=C},this.setTransparentSort=function(C){Ee=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,re=!0){let se=0;if(C){let $=!1;if(Z!==null){const ye=Z.texture.format;$=ye===Bl||ye===Ol||ye===Fl}if($){const ye=Z.texture.type,Re=ye===Di||ye===mr||ye===bs||ye===As||ye===Il||ye===Nl,Fe=Je.getClearColor(),He=Je.getClearAlpha(),tt=Fe.r,et=Fe.g,Oe=Fe.b;Re?(o[0]=tt,o[1]=et,o[2]=Oe,o[3]=He,z.clearBufferuiv(z.COLOR,0,o)):(w[0]=tt,w[1]=et,w[2]=Oe,w[3]=He,z.clearBufferiv(z.COLOR,0,w))}else se|=z.COLOR_BUFFER_BIT}K&&(se|=z.DEPTH_BUFFER_BIT),re&&(se|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Je.dispose(),Ue.dispose(),wt.dispose(),ze.dispose(),R.dispose(),J.dispose(),ue.dispose(),Bt.dispose(),X.dispose(),Xe.dispose(),le.dispose(),le.removeEventListener("sessionstart",Fs),le.removeEventListener("sessionend",Qn),ei.stop()};function de(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=At.autoReset,K=ke.enabled,re=ke.autoUpdate,se=ke.needsUpdate,$=ke.type;Le(),At.autoReset=C,ke.enabled=K,ke.autoUpdate=re,ke.needsUpdate=se,ke.type=$}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const K=C.target;K.removeEventListener("dispose",ht),Gt(K)}function Gt(C){tn(C),ze.remove(C)}function tn(C){const K=ze.get(C).programs;K!==void 0&&(K.forEach(function(re){Xe.releaseProgram(re)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,re,se,$,ye){K===null&&(K=It);const Re=$.isMesh&&$.matrixWorld.determinant()<0,Fe=mi(C,K,re,se,$);Ve.setMaterial(se,Re);let He=re.index,tt=1;if(se.wireframe===!0){if(He=xe.getWireframeAttribute(re),He===void 0)return;tt=2}const et=re.drawRange,Oe=re.attributes.position;let _t=et.start*tt,Rt=(et.start+et.count)*tt;ye!==null&&(_t=Math.max(_t,ye.start*tt),Rt=Math.min(Rt,(ye.start+ye.count)*tt)),He!==null?(_t=Math.max(_t,0),Rt=Math.min(Rt,He.count)):Oe!=null&&(_t=Math.max(_t,0),Rt=Math.min(Rt,Oe.count));const Kt=Rt-_t;if(Kt<0||Kt===1/0)return;Bt.setup($,se,Fe,re,He);let Xt,Ct=Ne;if(He!==null&&(Xt=he.get(He),Ct=St,Ct.setIndex(Xt)),$.isMesh)se.wireframe===!0?(Ve.setLineWidth(se.wireframeLinewidth*qe()),Ct.setMode(z.LINES)):Ct.setMode(z.TRIANGLES);else if($.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),Ve.setLineWidth(Ye*qe()),$.isLineSegments?Ct.setMode(z.LINES):$.isLineLoop?Ct.setMode(z.LINE_LOOP):Ct.setMode(z.LINE_STRIP)}else $.isPoints?Ct.setMode(z.POINTS):$.isSprite&&Ct.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ea("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ye=$._multiDrawStarts,Jt=$._multiDrawCounts,Dt=$._multiDrawCount,Cn=He?he.get(He).bytesPerElement:1,ln=ze.get(se).currentProgram.getUniforms();for(let vn=0;vn<Dt;vn++)ln.setValue(z,"_gl_DrawID",vn),Ct.render(Ye[vn]/Cn,Jt[vn])}else if($.isInstancedMesh)Ct.renderInstances(_t,Kt,$.count);else if(re.isInstancedBufferGeometry){const Ye=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Jt=Math.min(re.instanceCount,Ye);Ct.renderInstances(_t,Kt,Jt)}else Ct.render(_t,Kt)};function Lt(C,K,re){C.transparent===!0&&C.side===ri&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,pi(C,K,re),C.side=Li,C.needsUpdate=!0,pi(C,K,re),C.side=ri):pi(C,K,re)}this.compile=function(C,K,re=null){re===null&&(re=C),y=wt.get(re),y.init(K),U.push(y),re.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),C!==re&&C.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),y.setupLights();const se=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Fe=ye[Re];Lt(Fe,re,$),se.add(Fe)}else Lt(ye,re,$),se.add(ye)}),y=U.pop(),se},this.compileAsync=function(C,K,re=null){const se=this.compile(C,K,re);return new Promise($=>{function ye(){if(se.forEach(function(Re){ze.get(Re).currentProgram.isReady()&&se.delete(Re)}),se.size===0){$(C);return}setTimeout(ye,10)}st.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let bn=null;function On(C){bn&&bn(C)}function Fs(){ei.stop()}function Qn(){ei.start()}const ei=new Th;ei.setAnimationLoop(On),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(C){bn=C,le.setAnimationLoop(C),C===null?ei.stop():ei.start()},le.addEventListener("sessionstart",Fs),le.addEventListener("sessionend",Qn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(K),K=le.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,K,Z),y=wt.get(C,U.length),y.init(K),U.push(y),je.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ce.setFromProjectionMatrix(je),we=this.localClippingEnabled,ve=Se.init(this.clippingPlanes,we),M=Ue.get(C,F.length),M.init(),F.push(M),le.enabled===!0&&le.isPresenting===!0){const ye=L.xr.getDepthSensingMesh();ye!==null&&fi(ye,K,-1/0,L.sortObjects)}fi(C,K,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(me,Ee),Tt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Tt&&Je.addToRenderList(M,C),this.info.render.frame++,ve===!0&&Se.beginShadows();const re=y.state.shadowsArray;ke.render(re,C,K),ve===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,$=M.transmissive;if(y.setupLights(),K.isArrayCamera){const ye=K.cameras;if($.length>0)for(let Re=0,Fe=ye.length;Re<Fe;Re++){const He=ye[Re];ts(se,$,C,He)}Tt&&Je.render(C);for(let Re=0,Fe=ye.length;Re<Fe;Re++){const He=ye[Re];es(M,C,He,He.viewport)}}else $.length>0&&ts(se,$,C,K),Tt&&Je.render(C),es(M,C,K);Z!==null&&B===0&&(N.updateMultisampleRenderTarget(Z),N.updateRenderTargetMipmap(Z)),C.isScene===!0&&C.onAfterRender(L,C,K),Bt.resetDefaultState(),p=-1,_=null,U.pop(),U.length>0?(y=U[U.length-1],ve===!0&&Se.setGlobalState(L.clippingPlanes,y.state.camera)):y=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function fi(C,K,re,se){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ce.intersectsSprite(C)){se&&We.setFromMatrixPosition(C.matrixWorld).applyMatrix4(je);const Re=ue.update(C),Fe=C.material;Fe.visible&&M.push(C,Re,Fe,re,We.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ce.intersectsObject(C))){const Re=ue.update(C),Fe=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),We.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),We.copy(Re.boundingSphere.center)),We.applyMatrix4(C.matrixWorld).applyMatrix4(je)),Array.isArray(Fe)){const He=Re.groups;for(let tt=0,et=He.length;tt<et;tt++){const Oe=He[tt],_t=Fe[Oe.materialIndex];_t&&_t.visible&&M.push(C,Re,_t,re,We.z,Oe)}}else Fe.visible&&M.push(C,Re,Fe,re,We.z,null)}}const ye=C.children;for(let Re=0,Fe=ye.length;Re<Fe;Re++)fi(ye[Re],K,re,se)}function es(C,K,re,se){const $=C.opaque,ye=C.transmissive,Re=C.transparent;y.setupLightsView(re),ve===!0&&Se.setGlobalState(L.clippingPlanes,re),se&&Ve.viewport(b.copy(se)),$.length>0&&di($,K,re),ye.length>0&&di(ye,K,re),Re.length>0&&di(Re,K,re),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function ts(C,K,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[se.id]===void 0&&(y.state.transmissionRenderTarget[se.id]=new gr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ds:Di,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const ye=y.state.transmissionRenderTarget[se.id],Re=se.viewport||b;ye.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const Fe=L.getRenderTarget();L.setRenderTarget(ye),L.getClearColor(V),ee=L.getClearAlpha(),ee<1&&L.setClearColor(16777215,.5),L.clear(),Tt&&Je.render(re);const He=L.toneMapping;L.toneMapping=$i;const tt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),y.setupLightsView(se),ve===!0&&Se.setGlobalState(L.clippingPlanes,se),di(C,re,se),N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye),st.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Oe=0,_t=K.length;Oe<_t;Oe++){const Rt=K[Oe],Kt=Rt.object,Xt=Rt.geometry,Ct=Rt.material,Ye=Rt.group;if(Ct.side===ri&&Kt.layers.test(se.layers)){const Jt=Ct.side;Ct.side=Rn,Ct.needsUpdate=!0,ns(Kt,re,se,Xt,Ct,Ye),Ct.side=Jt,Ct.needsUpdate=!0,et=!0}}et===!0&&(N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye))}L.setRenderTarget(Fe),L.setClearColor(V,ee),tt!==void 0&&(se.viewport=tt),L.toneMapping=He}function di(C,K,re){const se=K.isScene===!0?K.overrideMaterial:null;for(let $=0,ye=C.length;$<ye;$++){const Re=C[$],Fe=Re.object,He=Re.geometry,tt=Re.group;let et=Re.material;et.allowOverride===!0&&se!==null&&(et=se),Fe.layers.test(re.layers)&&ns(Fe,K,re,He,et,tt)}}function ns(C,K,re,se,$,ye){C.onBeforeRender(L,K,re,se,$,ye),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(L,K,re,se,C,ye),$.transparent===!0&&$.side===ri&&$.forceSinglePass===!1?($.side=Rn,$.needsUpdate=!0,L.renderBufferDirect(re,K,se,$,C,ye),$.side=Li,$.needsUpdate=!0,L.renderBufferDirect(re,K,se,$,C,ye),$.side=ri):L.renderBufferDirect(re,K,se,$,C,ye),C.onAfterRender(L,K,re,se,$,ye)}function pi(C,K,re){K.isScene!==!0&&(K=It);const se=ze.get(C),$=y.state.lights,ye=y.state.shadowsArray,Re=$.state.version,Fe=Xe.getParameters(C,$.state,ye,K,re),He=Xe.getProgramCacheKey(Fe);let tt=se.programs;se.environment=C.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(C.isMeshStandardMaterial?J:R).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",ht),tt=new Map,se.programs=tt);let et=tt.get(He);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===Re)return is(C,Fe),et}else Fe.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Fe,L),et=Xe.acquireProgram(Fe,He),tt.set(He,et),se.uniforms=Fe.uniforms;const Oe=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=Se.uniform),is(C,Fe),se.needsLights=Fa(C),se.lightsStateVersion=Re,se.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMap.value=$.state.directionalShadowMap,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotShadowMap.value=$.state.spotShadowMap,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMap.value=$.state.pointShadowMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=et,se.uniformsList=null,et}function vr(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=ba.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function is(C,K){const re=ze.get(C);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.batchingColor=K.batchingColor,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.instancingMorph=K.instancingMorph,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function mi(C,K,re,se,$){K.isScene!==!0&&(K=It),N.resetTextureUnits();const ye=K.fog,Re=se.isMeshStandardMaterial?K.environment:null,Fe=Z===null?L.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Tn,He=(se.isMeshStandardMaterial?J:R).get(se.envMap||Re),tt=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Oe=!!re.morphAttributes.position,_t=!!re.morphAttributes.normal,Rt=!!re.morphAttributes.color;let Kt=$i;se.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Kt=L.toneMapping);const Xt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ct=Xt!==void 0?Xt.length:0,Ye=ze.get(se),Jt=y.state.lights;if(ve===!0&&(we===!0||C!==_)){const qt=C===_&&se.id===p;Se.setState(se,C,qt)}let Dt=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Jt.state.version||Ye.outputColorSpace!==Fe||$.isBatchedMesh&&Ye.batching===!1||!$.isBatchedMesh&&Ye.batching===!0||$.isBatchedMesh&&Ye.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ye.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ye.instancing===!1||!$.isInstancedMesh&&Ye.instancing===!0||$.isSkinnedMesh&&Ye.skinning===!1||!$.isSkinnedMesh&&Ye.skinning===!0||$.isInstancedMesh&&Ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ye.instancingMorph===!1&&$.morphTexture!==null||Ye.envMap!==He||se.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==et||Ye.morphTargets!==Oe||Ye.morphNormals!==_t||Ye.morphColors!==Rt||Ye.toneMapping!==Kt||Ye.morphTargetsCount!==Ct)&&(Dt=!0):(Dt=!0,Ye.__version=se.version);let Cn=Ye.currentProgram;Dt===!0&&(Cn=pi(se,K,$));let ln=!1,vn=!1,Bn=!1;const Vt=Cn.getUniforms(),$t=Ye.uniforms;if(Ve.useProgram(Cn.program)&&(ln=!0,vn=!0,Bn=!0),se.id!==p&&(p=se.id,vn=!0),ln||_!==C){Ve.buffers.depth.getReversed()?(Te.copy(C.projectionMatrix),Sd(Te),Ed(Te),Vt.setValue(z,"projectionMatrix",Te)):Vt.setValue(z,"projectionMatrix",C.projectionMatrix),Vt.setValue(z,"viewMatrix",C.matrixWorldInverse);const nn=Vt.map.cameraPosition;nn!==void 0&&nn.setValue(z,dt.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&Vt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,vn=!0,Bn=!0)}if($.isSkinnedMesh){Vt.setOptional(z,$,"bindMatrix"),Vt.setOptional(z,$,"bindMatrixInverse");const qt=$.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Vt.setValue(z,"boneTexture",qt.boneTexture,N))}$.isBatchedMesh&&(Vt.setOptional(z,$,"batchingTexture"),Vt.setValue(z,"batchingTexture",$._matricesTexture,N),Vt.setOptional(z,$,"batchingIdTexture"),Vt.setValue(z,"batchingIdTexture",$._indirectTexture,N),Vt.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Vt.setValue(z,"batchingColorTexture",$._colorsTexture,N));const dn=re.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Qe.update($,re,Cn),(vn||Ye.receiveShadow!==$.receiveShadow)&&(Ye.receiveShadow=$.receiveShadow,Vt.setValue(z,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&($t.envMap.value=He,$t.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&($t.envMapIntensity.value=K.environmentIntensity),vn&&(Vt.setValue(z,"toneMappingExposure",L.toneMappingExposure),Ye.needsLights&&ti($t,Bn),ye&&se.fog===!0&&Pe.refreshFogUniforms($t,ye),Pe.refreshMaterialUniforms($t,se,ie,ae,y.state.transmissionRenderTarget[C.id]),ba.upload(z,vr(Ye),$t,N)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ba.upload(z,vr(Ye),$t,N),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(z,"center",$.center),Vt.setValue(z,"modelViewMatrix",$.modelViewMatrix),Vt.setValue(z,"normalMatrix",$.normalMatrix),Vt.setValue(z,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const qt=se.uniformsGroups;for(let nn=0,as=qt.length;nn<as;nn++){const gi=qt[nn];X.update(gi,Cn),X.bind(gi,Cn)}}return Cn}function ti(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Fa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,K,re){const se=ze.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=K,ze.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const re=ze.get(C);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0};const rs=z.createFramebuffer();this.setRenderTarget=function(C,K=0,re=0){Z=C,k=K,B=re;let se=!0,$=null,ye=!1,Re=!1;if(C){const He=ze.get(C);if(He.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(z.FRAMEBUFFER,null),se=!1;else if(He.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(He.__hasExternalTextures)N.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Oe=C.depthTexture;if(He.__boundDepthTexture!==Oe){if(Oe!==null&&ze.has(Oe)&&(C.width!==Oe.image.width||C.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const et=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[K])?$=et[K][re]:$=et[K],ye=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?$=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?$=et[re]:$=et,b.copy(C.viewport),D.copy(C.scissor),O=C.scissorTest}else b.copy(Me).multiplyScalar(ie).floor(),D.copy(Be).multiplyScalar(ie).floor(),O=Ze;if(re!==0&&($=rs),Ve.bindFramebuffer(z.FRAMEBUFFER,$)&&se&&Ve.drawBuffers(C,$),Ve.viewport(b),Ve.scissor(D),Ve.setScissorTest(O),ye){const He=ze.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,He.__webglTexture,re)}else if(Re){const He=ze.get(C.texture),tt=K;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,re,tt)}else if(C!==null&&re!==0){const He=ze.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,re)}p=-1},this.readRenderTargetPixels=function(C,K,re,se,$,ye,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){Ve.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const He=C.texture,tt=He.format,et=He.type;if(!at.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-se&&re>=0&&re<=C.height-$&&z.readPixels(K,re,se,$,ct.convert(tt),ct.convert(et),ye)}finally{const He=Z!==null?ze.get(Z).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(C,K,re,se,$,ye,Re){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe)if(K>=0&&K<=C.width-se&&re>=0&&re<=C.height-$){Ve.bindFramebuffer(z.FRAMEBUFFER,Fe);const He=C.texture,tt=He.format,et=He.type;if(!at.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.bufferData(z.PIXEL_PACK_BUFFER,ye.byteLength,z.STREAM_READ),z.readPixels(K,re,se,$,ct.convert(tt),ct.convert(et),0);const _t=Z!==null?ze.get(Z).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,_t);const Rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Md(z,Rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ye),z.deleteBuffer(Oe),z.deleteSync(Rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,re=0){const se=Math.pow(2,-re),$=Math.floor(C.image.width*se),ye=Math.floor(C.image.height*se),Re=K!==null?K.x:0,Fe=K!==null?K.y:0;N.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,Re,Fe,$,ye),Ve.unbindTexture()};const ss=z.createFramebuffer(),Oa=z.createFramebuffer();this.copyTextureToTexture=function(C,K,re=null,se=null,$=0,ye=null){ye===null&&($!==0?(Ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=$,$=0):ye=0);let Re,Fe,He,tt,et,Oe,_t,Rt,Kt;const Xt=C.isCompressedTexture?C.mipmaps[ye]:C.image;if(re!==null)Re=re.max.x-re.min.x,Fe=re.max.y-re.min.y,He=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,et=re.min.y,Oe=re.isBox3?re.min.z:0;else{const dn=Math.pow(2,-$);Re=Math.floor(Xt.width*dn),Fe=Math.floor(Xt.height*dn),C.isDataArrayTexture?He=Xt.depth:C.isData3DTexture?He=Math.floor(Xt.depth*dn):He=1,tt=0,et=0,Oe=0}se!==null?(_t=se.x,Rt=se.y,Kt=se.z):(_t=0,Rt=0,Kt=0);const Ct=ct.convert(K.format),Ye=ct.convert(K.type);let Jt;K.isData3DTexture?(N.setTexture3D(K,0),Jt=z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),Jt=z.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),Jt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const Dt=z.getParameter(z.UNPACK_ROW_LENGTH),Cn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ln=z.getParameter(z.UNPACK_SKIP_PIXELS),vn=z.getParameter(z.UNPACK_SKIP_ROWS),Bn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Xt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Xt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,et),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Oe);const Vt=C.isDataArrayTexture||C.isData3DTexture,$t=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const dn=ze.get(C),qt=ze.get(K),nn=ze.get(dn.__renderTarget),as=ze.get(qt.__renderTarget);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let gi=0;gi<He;gi++)Vt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,$,Oe+gi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(K).__webglTexture,ye,Kt+gi)),z.blitFramebuffer(tt,et,Re,Fe,_t,Rt,Re,Fe,z.DEPTH_BUFFER_BIT,z.NEAREST);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||ze.has(C)){const dn=ze.get(C),qt=ze.get(K);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,ss),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,Oa);for(let nn=0;nn<He;nn++)Vt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,$,Oe+nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,$),$t?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.__webglTexture,ye,Kt+nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qt.__webglTexture,ye),$!==0?z.blitFramebuffer(tt,et,Re,Fe,_t,Rt,Re,Fe,z.COLOR_BUFFER_BIT,z.NEAREST):$t?z.copyTexSubImage3D(Jt,ye,_t,Rt,Kt+nn,tt,et,Re,Fe):z.copyTexSubImage2D(Jt,ye,_t,Rt,tt,et,Re,Fe);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else $t?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Jt,ye,_t,Rt,Kt,Re,Fe,He,Ct,Ye,Xt.data):K.isCompressedArrayTexture?z.compressedTexSubImage3D(Jt,ye,_t,Rt,Kt,Re,Fe,He,Ct,Xt.data):z.texSubImage3D(Jt,ye,_t,Rt,Kt,Re,Fe,He,Ct,Ye,Xt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ye,_t,Rt,Re,Fe,Ct,Ye,Xt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ye,_t,Rt,Xt.width,Xt.height,Ct,Xt.data):z.texSubImage2D(z.TEXTURE_2D,ye,_t,Rt,Re,Fe,Ct,Ye,Xt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Cn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ln),z.pixelStorei(z.UNPACK_SKIP_ROWS,vn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Bn),ye===0&&K.generateMipmaps&&z.generateMipmap(Jt),Ve.unbindTexture()},this.copyTextureToTexture3D=function(C,K,re=null,se=null,$=0){return Ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,re,se,$)},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){k=0,B=0,Z=null,Ve.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const Iu={type:"change"},Zl={type:"start"},Ch={type:"end"},ga=new Is,Nu=new Xi,E0=Math.cos(70*ah.DEG2RAD),sn=new j,wn=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class T0 extends kp{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new ai,this._lastTargetPosition=new j,this._quat=new ai().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ou,this._sphericalDelta=new ou,this._scale=1,this._panOffset=new j,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new j,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=A0.bind(this),this._onPointerDown=b0.bind(this),this._onPointerUp=w0.bind(this),this._onContextMenu=N0.bind(this),this._onMouseWheel=P0.bind(this),this._onKeyDown=L0.bind(this),this._onTouchStart=D0.bind(this),this._onTouchMove=I0.bind(this),this._onMouseDown=R0.bind(this),this._onMouseMove=C0.bind(this),this._interceptControlDown=U0.bind(this),this._interceptControlUp=F0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Iu),this.update(),this.state=zt.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=wn:n>Math.PI&&(n-=wn),i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=l!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=sn.length();l=this._clampDistance(c*this._scale);const h=c-l;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;const f=new j(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),l=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ga.origin.copy(this.object.position),ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ga.direction))<E0?this.object.lookAt(this.target):(Nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ga.intersectPlane(Nu,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(Iu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wn/60*this.autoRotateSpeed*e:wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;sn.copy(i).sub(this.target);let s=sn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,l=n.width,c=n.height;this._mouse.x=i/l*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function b0(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function A0(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function w0(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ch),this.state=zt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function R0(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=zt.DOLLY;break;case Or.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}break;case Or.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(Zl)}function C0(r){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function P0(r){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(r.preventDefault(),this.dispatchEvent(Zl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ch))}function L0(r){this.enabled!==!1&&this._handleKeyDown(r)}function D0(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ur.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=zt.TOUCH_ROTATE;break;case Ur.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case Ur.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=zt.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(Zl)}function I0(r){switch(this._trackPointer(r),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=zt.NONE}}function N0(r){this.enabled!==!1&&r.preventDefault()}function U0(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F0(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Uu(r,e){if(e===qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Tl||e===ih){let t=r.getIndex();if(t===null){const l=[],c=r.getAttribute("position");if(c!==void 0){for(let h=0;h<c.count;h++)l.push(h);r.setIndex(l),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Tl)for(let l=1;l<=n;l++)i.push(t.getX(0)),i.push(t.getX(l)),i.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(i.push(t.getX(l)),i.push(t.getX(l+1)),i.push(t.getX(l+2))):(i.push(t.getX(l+2)),i.push(t.getX(l+1)),i.push(t.getX(l)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class O0 extends Jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new V0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new J0(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new nx(t)})}load(e,t,n,i){const s=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const f=Ts.extractUrlBase(e);l=Ts.resolveURL(f,this.path)}else l=Ts.extractUrlBase(e);this.manager.itemStart(e);const c=function(f){i?i(f):console.error(f),s.manager.itemError(e),s.manager.itemEnd(e)},h=new Eh(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(f){try{s.parse(f,l,function(g){t(g),s.manager.itemEnd(e)},c)}catch(g){c(g)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const l={},c={},h=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===Ph){try{l[Et.KHR_BINARY_GLTF]=new ix(e)}catch(x){i&&i(x);return}s=JSON.parse(l[Et.KHR_BINARY_GLTF].content)}else s=JSON.parse(h.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new gx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const x=this.pluginCallbacks[g](f);x.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[x.name]=x,l[x.name]=!0}if(s.extensionsUsed)for(let g=0;g<s.extensionsUsed.length;++g){const x=s.extensionsUsed[g],v=s.extensionsRequired||[];switch(x){case Et.KHR_MATERIALS_UNLIT:l[x]=new H0;break;case Et.KHR_DRACO_MESH_COMPRESSION:l[x]=new rx(s,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:l[x]=new sx;break;case Et.KHR_MESH_QUANTIZATION:l[x]=new ax;break;default:v.indexOf(x)>=0&&c[x]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+x+'".')}}f.setExtensions(l),f.setPlugins(c),f.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function B0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class k0{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,h=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let f;const g=new ut(16777215);h.color!==void 0&&g.setRGB(h.color[0],h.color[1],h.color[2],Tn);const x=h.range!==void 0?h.range:0;switch(h.type){case"directional":f=new Ta(g),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new bp(g),f.distance=x;break;case"spot":f=new Ep(g),f.distance=x,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,f.angle=h.spot.outerConeAngle,f.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return f.position.set(0,0,0),Ai(f,h),h.intensity!==void 0&&(f.intensity=h.intensity),f.name=t.createUniqueName(h.name||"light_"+e),i=Promise.resolve(f),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(h){return n._getNodeRef(t.cache,c,h)})}}class H0{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return dr}extendParams(e,t,n){const i=[];e.color=new ut(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const l=s.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Tn),e.opacity=l[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,un))}return Promise.all(i)}}class z0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class V0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],l=i.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(c,c)}return Promise.all(s)}}class G0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class W0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],l=i.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(s)}}class X0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=i.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Tn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,un)),l.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(s)}}class j0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],l=i.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(s)}}class q0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],l=i.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(c[0],c[1],c[2],Tn),Promise.all(s)}}class Y0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class K0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],l=i.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(c[0],c[1],c[2],Tn),l.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,un)),Promise.all(s)}}class $0{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],l=i.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(s)}}class Z0{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],l=i.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(s)}}class J0{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,l)}}class Q0{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const l=s.extensions[t],c=i.images[l.source];let h=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(h=f)}return this.detectSupport().then(function(f){if(f)return n.loadTextureImage(e,l.source,h);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ex{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const l=s.extensions[t],c=i.images[l.source];let h=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(h=f)}return this.detectSupport().then(function(f){if(f)return n.loadTextureImage(e,l.source,h);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tx{constructor(e){this.name=Et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const h=i.byteOffset||0,f=i.byteLength||0,g=i.count,x=i.byteStride,v=new Uint8Array(c,h,f);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(g,x,v,i.mode,i.filter).then(function(S){return S.buffer}):l.ready.then(function(){const S=new ArrayBuffer(g*x);return l.decodeGltfBuffer(new Uint8Array(S),g,x,v,i.mode,i.filter),S})})}else return null}}class nx{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const f of i.primitives)if(f.mode!==Vn.TRIANGLES&&f.mode!==Vn.TRIANGLE_STRIP&&f.mode!==Vn.TRIANGLE_FAN&&f.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],h={};for(const f in l)c.push(this.parser.getDependency("accessor",l[f]).then(g=>(h[f]=g,h[f])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(f=>{const g=f.pop(),x=g.isGroup?g.children:[g],v=f[0].count,S=[];for(const o of x){const w=new gt,M=new j,y=new ai,F=new j(1,1,1),U=new ep(o.geometry,o.material,v);for(let L=0;L<v;L++)h.TRANSLATION&&M.fromBufferAttribute(h.TRANSLATION,L),h.ROTATION&&y.fromBufferAttribute(h.ROTATION,L),h.SCALE&&F.fromBufferAttribute(h.SCALE,L),U.setMatrixAt(L,w.compose(M,y,F));for(const L in h)if(L==="_COLOR_0"){const G=h[L];U.instanceColor=new Al(G.array,G.itemSize,G.normalized)}else L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"&&o.geometry.setAttribute(L,h[L]);Yt.prototype.copy.call(U,o),this.parser.assignFinalMaterial(U),S.push(U)}return g.isGroup?(g.clear(),g.add(...S),g):S[0]}))}}const Ph="glTF",xs=12,Fu={JSON:1313821514,BIN:5130562};class ix{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ph)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xs,s=new DataView(e,xs);let l=0;for(;l<i;){const c=s.getUint32(l,!0);l+=4;const h=s.getUint32(l,!0);if(l+=4,h===Fu.JSON){const f=new Uint8Array(e,xs+l,c);this.content=n.decode(f)}else if(h===Fu.BIN){const f=xs+l;this.body=e.slice(f,f+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},h={},f={};for(const g in l){const x=Cl[g]||g.toLowerCase();c[x]=l[g]}for(const g in e.attributes){const x=Cl[g]||g.toLowerCase();if(l[g]!==void 0){const v=n.accessors[e.attributes[g]],S=Hr[v.componentType];f[x]=S.name,h[x]=v.normalized===!0}}return t.getDependency("bufferView",s).then(function(g){return new Promise(function(x,v){i.decodeDracoFile(g,function(S){for(const o in S.attributes){const w=S.attributes[o],M=h[o];M!==void 0&&(w.normalized=M)}x(S)},c,f,Tn,v)})})}}class sx{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ax{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}}class Lh extends Us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let l=0;l!==i;l++)t[l]=n[s+l];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=c*2,f=c*3,g=i-t,x=(n-t)/g,v=x*x,S=v*x,o=e*f,w=o-f,M=-2*S+3*v,y=S-v,F=1-M,U=y-v+x;for(let L=0;L!==c;L++){const G=l[w+L+c],k=l[w+L+h]*g,B=l[o+L+c],Z=l[o+L]*g;s[L]=F*G+U*k+M*B+y*Z}return s}}const ox=new ai;class lx extends Lh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ox.fromArray(s).normalize().toArray(s),s}}const Vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ou={9728:Sn,9729:Un,9984:qu,9985:_a,9986:ys,9987:wi},Bu={33071:qi,33648:wa,10497:Wr},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cx={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Cs},ko={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ux(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Xl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),r.DefaultMaterial}function cr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hx(r,e,t){let n=!1,i=!1,s=!1;for(let f=0,g=e.length;f<g;f++){const x=e[f];if(x.POSITION!==void 0&&(n=!0),x.NORMAL!==void 0&&(i=!0),x.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const l=[],c=[],h=[];for(let f=0,g=e.length;f<g;f++){const x=e[f];if(n){const v=x.POSITION!==void 0?t.getDependency("accessor",x.POSITION):r.attributes.position;l.push(v)}if(i){const v=x.NORMAL!==void 0?t.getDependency("accessor",x.NORMAL):r.attributes.normal;c.push(v)}if(s){const v=x.COLOR_0!==void 0?t.getDependency("accessor",x.COLOR_0):r.attributes.color;h.push(v)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){const g=f[0],x=f[1],v=f[2];return n&&(r.morphAttributes.position=g),i&&(r.morphAttributes.normal=x),s&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function fx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dx(r){let e;const t=r.extensions&&r.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ho(t.attributes):e=r.indices+":"+Ho(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ho(r.targets[n]);return e}function Ho(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function px(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mx=new gt;class gx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new B0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const h=c.match(/Version\/(\d+)/);i=n&&h?parseInt(h[1],10):-1,s=c.indexOf("Firefox")>-1,l=s?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&l<98?this.textureLoader=new Mp(this.options.manager):this.textureLoader=new Rp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][i.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:i.asset,parser:n,userData:{}};return cr(s,c,i),Ai(c,i),Promise.all(n._invokeAll(function(h){return h.afterRoot&&h.afterRoot(c)})).then(function(){for(const h of c.scenes)h.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const l=t[i].joints;for(let c=0,h=l.length;c<h;c++)e[l[c]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const l=e[i];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(l,c)=>{const h=this.associations.get(l);h!=null&&this.associations.set(c,h);for(const[f,g]of l.children.entries())s(g,c.children[f])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,l){n.load(Ts.resolveURL(t.uri,i.path),s,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const l=Bo[i.type],c=Hr[i.componentType],h=i.normalized===!0,f=new c(i.count*l);return Promise.resolve(new En(f,l,h))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(l){const c=l[0],h=Bo[i.type],f=Hr[i.componentType],g=f.BYTES_PER_ELEMENT,x=g*h,v=i.byteOffset||0,S=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,o=i.normalized===!0;let w,M;if(S&&S!==x){const y=Math.floor(v/S),F="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+y+":"+i.count;let U=t.cache.get(F);U||(w=new f(c,y*S,i.count*S/g),U=new Kd(w,S/g),t.cache.add(F,U)),M=new zl(U,h,v%S/g,o)}else c===null?w=new f(i.count*h):w=new f(c,v,i.count*h),M=new En(w,h,o);if(i.sparse!==void 0){const y=Bo.SCALAR,F=Hr[i.sparse.indices.componentType],U=i.sparse.indices.byteOffset||0,L=i.sparse.values.byteOffset||0,G=new F(l[1],U,i.sparse.count*y),k=new f(l[2],L,i.sparse.count*h);c!==null&&(M=new En(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let B=0,Z=G.length;B<Z;B++){const p=G[B];if(M.setX(p,k[B*h]),h>=2&&M.setY(p,k[B*h+1]),h>=3&&M.setZ(p,k[B*h+2]),h>=4&&M.setW(p,k[B*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=o}return M})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,l=t.images[s];let c=this.textureLoader;if(l.uri){const h=n.manager.getHandler(l.uri);h!==null&&(c=h)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const i=this,s=this.json,l=s.textures[e],c=s.images[t],h=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[h])return this.textureCache[h];const f=this.loadImageSource(t,n).then(function(g){g.flipY=!1,g.name=l.name||c.name||"",g.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(g.name=c.uri);const v=(s.samplers||{})[l.sampler]||{};return g.magFilter=Ou[v.magFilter]||Un,g.minFilter=Ou[v.minFilter]||wi,g.wrapS=Bu[v.wrapS]||Wr,g.wrapT=Bu[v.wrapT]||Wr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Sn&&g.minFilter!==Un,i.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[h]=f,f}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(x=>x.clone());const l=i.images[e],c=self.URL||self.webkitURL;let h=l.uri||"",f=!1;if(l.bufferView!==void 0)h=n.getDependency("bufferView",l.bufferView).then(function(x){f=!0;const v=new Blob([x],{type:l.mimeType});return h=c.createObjectURL(v),h});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(h).then(function(x){return new Promise(function(v,S){let o=v;t.isImageBitmapLoader===!0&&(o=function(w){const M=new hn(w);M.needsUpdate=!0,v(M)}),t.load(Ts.resolveURL(x,s.path),o,void 0,S)})}).then(function(x){return f===!0&&c.revokeObjectURL(h),Ai(x,l),x.userData.mimeType=l.mimeType||px(l.uri),x}).catch(function(x){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),x});return this.sourceCache[e]=g,g}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),s.extensions[Et.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const h=s.associations.get(l);l=s.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),s.associations.set(l,h)}}return i!==void 0&&(l.colorSpace=i),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new xh,si.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(c,h)),n=h}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new vh,si.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,this.cache.add(c,h)),n=h}if(i||s||l){let c="ClonedMaterial:"+n.uuid+":";i&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let h=this.cache.get(c);h||(h=n.clone(),s&&(h.vertexColors=!0),l&&(h.flatShading=!0),i&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(c,h),this.associations.set(h,this.associations.get(n))),n=h}e.material=n}getMaterialType(){return Xl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let l;const c={},h=s.extensions||{},f=[];if(h[Et.KHR_MATERIALS_UNLIT]){const x=i[Et.KHR_MATERIALS_UNLIT];l=x.getMaterialType(),f.push(x.extendParams(c,s,t))}else{const x=s.pbrMetallicRoughness||{};if(c.color=new ut(1,1,1),c.opacity=1,Array.isArray(x.baseColorFactor)){const v=x.baseColorFactor;c.color.setRGB(v[0],v[1],v[2],Tn),c.opacity=v[3]}x.baseColorTexture!==void 0&&f.push(t.assignTexture(c,"map",x.baseColorTexture,un)),c.metalness=x.metallicFactor!==void 0?x.metallicFactor:1,c.roughness=x.roughnessFactor!==void 0?x.roughnessFactor:1,x.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(c,"metalnessMap",x.metallicRoughnessTexture)),f.push(t.assignTexture(c,"roughnessMap",x.metallicRoughnessTexture))),l=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=ri);const g=s.alphaMode||ko.OPAQUE;if(g===ko.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,g===ko.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&l!==dr&&(f.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new lt(1,1),s.normalTexture.scale!==void 0)){const x=s.normalTexture.scale;c.normalScale.set(x,x)}if(s.occlusionTexture!==void 0&&l!==dr&&(f.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&l!==dr){const x=s.emissiveFactor;c.emissive=new ut().setRGB(x[0],x[1],x[2],Tn)}return s.emissiveTexture!==void 0&&l!==dr&&f.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,un)),Promise.all(f).then(function(){const x=new l(c);return s.name&&(x.name=s.name),Ai(x,s),t.associations.set(x,{materials:e}),s.extensions&&cr(i,x,s),x})}createUniqueName(e){const t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(c){return n[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(h){return ku(h,c,t)})}const l=[];for(let c=0,h=e.length;c<h;c++){const f=e[c],g=dx(f),x=i[g];if(x)l.push(x.promise);else{let v;f.extensions&&f.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?v=s(f):v=ku(new ui,f,t),i[g]={primitive:f,promise:v},l.push(v)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],l=s.primitives,c=[];for(let h=0,f=l.length;h<f;h++){const g=l[h].material===void 0?ux(this.cache):this.getDependency("material",l[h].material);c.push(g)}return c.push(t.loadGeometries(l)),Promise.all(c).then(function(h){const f=h.slice(0,h.length-1),g=h[h.length-1],x=[];for(let S=0,o=g.length;S<o;S++){const w=g[S],M=l[S];let y;const F=f[S];if(M.mode===Vn.TRIANGLES||M.mode===Vn.TRIANGLE_STRIP||M.mode===Vn.TRIANGLE_FAN||M.mode===void 0)y=s.isSkinnedMesh===!0?new Zd(w,F):new Fn(w,F),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),M.mode===Vn.TRIANGLE_STRIP?y.geometry=Uu(y.geometry,ih):M.mode===Vn.TRIANGLE_FAN&&(y.geometry=Uu(y.geometry,Tl));else if(M.mode===Vn.LINES)y=new ip(w,F);else if(M.mode===Vn.LINE_STRIP)y=new Wl(w,F);else if(M.mode===Vn.LINE_LOOP)y=new rp(w,F);else if(M.mode===Vn.POINTS)y=new sp(w,F);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(y.geometry.morphAttributes).length>0&&fx(y,s),y.name=t.createUniqueName(s.name||"mesh_"+e),Ai(y,s),M.extensions&&cr(i,y,M),t.assignFinalMaterial(y),x.push(y)}for(let S=0,o=x.length;S<o;S++)t.associations.set(x[S],{meshes:e,primitives:S});if(x.length===1)return s.extensions&&cr(i,x[0],s),x[0];const v=new pr;s.extensions&&cr(i,v,s),t.associations.set(v,{meshes:e});for(let S=0,o=x.length;S<o;S++)v.add(x[S]);return v})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mn(ah.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ql(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),l=i,c=[],h=[];for(let f=0,g=l.length;f<g;f++){const x=l[f];if(x){c.push(x);const v=new gt;s!==null&&v.fromArray(s.array,f*16),h.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new Vl(c,h)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,l=[],c=[],h=[],f=[],g=[];for(let x=0,v=i.channels.length;x<v;x++){const S=i.channels[x],o=i.samplers[S.sampler],w=S.target,M=w.node,y=i.parameters!==void 0?i.parameters[o.input]:o.input,F=i.parameters!==void 0?i.parameters[o.output]:o.output;w.node!==void 0&&(l.push(this.getDependency("node",M)),c.push(this.getDependency("accessor",y)),h.push(this.getDependency("accessor",F)),f.push(o),g.push(w))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(f),Promise.all(g)]).then(function(x){const v=x[0],S=x[1],o=x[2],w=x[3],M=x[4],y=[];for(let F=0,U=v.length;F<U;F++){const L=v[F],G=S[F],k=o[F],B=w[F],Z=M[F];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const p=n._createAnimationTracks(L,G,k,B,Z);if(p)for(let _=0;_<p.length;_++)y.push(p[_])}return new pp(s,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const l=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let h=0,f=i.weights.length;h<f;h++)c.morphTargetInfluences[h]=i.weights[h]}),l})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),l=[],c=i.children||[];for(let f=0,g=c.length;f<g;f++)l.push(n.getDependency("node",c[f]));const h=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(l),h]).then(function(f){const g=f[0],x=f[1],v=f[2];v!==null&&g.traverse(function(S){S.isSkinnedMesh&&S.bind(v,mx)});for(let S=0,o=x.length;S<o;S++)g.add(x[S]);return g})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],l=s.name?i.createUniqueName(s.name):"",c=[],h=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return h&&c.push(h),s.camera!==void 0&&c.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){c.push(f)}),this.nodeCache[e]=Promise.all(c).then(function(f){let g;if(s.isBone===!0?g=new gh:f.length>1?g=new pr:f.length===1?g=f[0]:g=new Yt,g!==f[0])for(let x=0,v=f.length;x<v;x++)g.add(f[x]);if(s.name&&(g.userData.name=s.name,g.name=l),Ai(g,s),s.extensions&&cr(n,g,s),s.matrix!==void 0){const x=new gt;x.fromArray(s.matrix),g.applyMatrix4(x)}else s.translation!==void 0&&g.position.fromArray(s.translation),s.rotation!==void 0&&g.quaternion.fromArray(s.rotation),s.scale!==void 0&&g.scale.fromArray(s.scale);return i.associations.has(g)||i.associations.set(g,{}),i.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new pr;n.name&&(s.name=i.createUniqueName(n.name)),Ai(s,n),n.extensions&&cr(t,s,n);const l=n.nodes||[],c=[];for(let h=0,f=l.length;h<f;h++)c.push(i.getDependency("node",l[h]));return Promise.all(c).then(function(h){for(let g=0,x=h.length;g<x;g++)s.add(h[g]);const f=g=>{const x=new Map;for(const[v,S]of i.associations)(v instanceof si||v instanceof hn)&&x.set(v,S);return g.traverse(v=>{const S=i.associations.get(v);S!=null&&x.set(v,S)}),x};return i.associations=f(s),s})}_createAnimationTracks(e,t,n,i,s){const l=[],c=e.name?e.name:e.uuid,h=[];Wi[s.path]===Wi.weights?e.traverse(function(v){v.morphTargetInfluences&&h.push(v.name?v.name:v.uuid)}):h.push(c);let f;switch(Wi[s.path]){case Wi.weights:f=qr;break;case Wi.rotation:f=Yr;break;case Wi.translation:case Wi.scale:f=Kr;break;default:switch(n.itemSize){case 1:f=qr;break;case 2:case 3:default:f=Kr;break}break}const g=i.interpolation!==void 0?cx[i.interpolation]:Ps,x=this._getArrayFromAccessor(n);for(let v=0,S=h.length;v<S;v++){const o=new f(h[v]+"."+Wi[s.path],t.array,x,g);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(o),l.push(o)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pl(t.constructor),i=new Float32Array(t.length);for(let s=0,l=t.length;s<l;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Yr?lx:Lh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _x(r,e,t){const n=e.attributes,i=new li;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],h=c.min,f=c.max;if(h!==void 0&&f!==void 0){if(i.set(new j(h[0],h[1],h[2]),new j(f[0],f[1],f[2])),c.normalized){const g=Pl(Hr[c.componentType]);i.min.multiplyScalar(g),i.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new j,h=new j;for(let f=0,g=s.length;f<g;f++){const x=s[f];if(x.POSITION!==void 0){const v=t.json.accessors[x.POSITION],S=v.min,o=v.max;if(S!==void 0&&o!==void 0){if(h.setX(Math.max(Math.abs(S[0]),Math.abs(o[0]))),h.setY(Math.max(Math.abs(S[1]),Math.abs(o[1]))),h.setZ(Math.max(Math.abs(S[2]),Math.abs(o[2]))),v.normalized){const w=Pl(Hr[v.componentType]);h.multiplyScalar(w)}c.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(c)}r.boundingBox=i;const l=new ci;i.getCenter(l.center),l.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=l}function ku(r,e,t){const n=e.attributes,i=[];function s(l,c){return t.getDependency("accessor",l).then(function(h){r.setAttribute(c,h)})}for(const l in n){const c=Cl[l]||l.toLowerCase();c in r.attributes||i.push(s(n[l],c))}if(e.indices!==void 0&&!r.index){const l=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});i.push(l)}return Pt.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pt.workingColorSpace}" not supported.`),Ai(r,e),_x(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hx(r,e.targets,t):r})}function Dh(){const r=document.getElementById("model-container");if(!r){console.error('No container with id "model-container" found');return}const e=document.getElementById("c");if(!e){console.error('No canvas element with id "c" found');return}const t=new S0({antialias:!0,canvas:e});t.outputColorSpace=un,t.setSize(r.clientWidth,r.clientHeight),t.setClearColor(0),t.setPixelRatio(window.devicePixelRatio),t.shadowMap.enabled=!0,t.shadowMap.type=Wu;const n=new Yd;n.background=new ut(40288);const i=new Mn(45,r.clientWidth/r.clientHeight,.1,100);i.position.set(5,2,5);const s=new T0(i,t.domElement);s.target.set(0,0,0),s.enableDamping=!0,s.dampingFactor=.05,s.enableZoom=!1,s.enablePan=!1,s.minDistance=3.5,s.maxDistance=3.5,s.maxPolarAngle=Math.PI/2,s.update();const l=new wp(16777215,.4);n.add(l);const c=new Ta(16777215,2);c.position.set(5,10,5),c.castShadow=!0,n.add(c);const h=new Ta(16777215,.6);h.position.set(-5,10,5),h.castShadow=!0,n.add(h);const f=new Ta(16777215,.6);f.position.set(0,10,-5),f.castShadow=!0,n.add(f);let g=null;new O0().setPath("./model/").load("bloc_model.gltf",w=>{console.log("Model loaded successfully",w),g=w.scene,g.scale.set(4,4,4),n.add(g);const M=new li().setFromObject(g),y=M.getCenter(new j),F=M.getSize(new j);g.position.sub(y),g.position.y+=F.y*.5,s.target.copy(y),s.update();const U=Math.max(F.x,F.y,F.z),L=i.fov*(Math.PI/180),G=U/(2*Math.tan(L/2));i.position.set(y.x,y.y,y.z+G*1.2),i.lookAt(y),i.updateProjectionMatrix()},w=>{console.log(`Loading model: ${w.loaded/w.total*100}%`)},w=>{console.error("An error happened while loading the model:",w)});function v(w){const M=w.domElement,y=document.getElementById("model-container");if(!y)return console.error('No container with id "model-container" found'),!1;const F=y.clientWidth,U=y.clientHeight,L=M.width!==F||M.height!==U;return L&&(w.setSize(F,U,!1),i.aspect=F/U,i.updateProjectionMatrix()),L}function S(){v(t),t.render(n,i)}function o(){requestAnimationFrame(o),S()}o()}function vx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Aa={exports:{}};/*!
 * jQuery JavaScript Library v1.12.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T19:56Z
 */var xx=Aa.exports,Hu;function Ih(){return Hu||(Hu=1,function(r){(function(e,t){r.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:xx,function(e,t){var n=[],i=e.document,s=n.slice,l=n.concat,c=n.push,h=n.indexOf,f={},g=f.toString,x=f.hasOwnProperty,v={},S="1.12.0",o=function(a,u){return new o.fn.init(a,u)},w=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,M=/^-ms-/,y=/-([\da-z])/gi,F=function(a,u){return u.toUpperCase()};o.fn=o.prototype={jquery:S,constructor:o,selector:"",length:0,toArray:function(){return s.call(this)},get:function(a){return a!=null?a<0?this[a+this.length]:this[a]:s.call(this)},pushStack:function(a){var u=o.merge(this.constructor(),a);return u.prevObject=this,u.context=this.context,u},each:function(a){return o.each(this,a)},map:function(a){return this.pushStack(o.map(this,function(u,d){return a.call(u,d,u)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var u=this.length,d=+a+(a<0?u:0);return this.pushStack(d>=0&&d<u?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:n.sort,splice:n.splice},o.extend=o.fn.extend=function(){var a,u,d,m,E,T,A=arguments[0]||{},I=1,Y=arguments.length,q=!1;for(typeof A=="boolean"&&(q=A,A=arguments[I]||{},I++),typeof A!="object"&&!o.isFunction(A)&&(A={}),I===Y&&(A=this,I--);I<Y;I++)if((E=arguments[I])!=null)for(m in E)a=A[m],d=E[m],A!==d&&(q&&d&&(o.isPlainObject(d)||(u=o.isArray(d)))?(u?(u=!1,T=a&&o.isArray(a)?a:[]):T=a&&o.isPlainObject(a)?a:{},A[m]=o.extend(q,T,d)):d!==void 0&&(A[m]=d));return A},o.extend({expando:"jQuery"+(S+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return o.type(a)==="function"},isArray:Array.isArray||function(a){return o.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){var u=a&&a.toString();return!o.isArray(a)&&u-parseFloat(u)+1>=0},isEmptyObject:function(a){var u;for(u in a)return!1;return!0},isPlainObject:function(a){var u;if(!a||o.type(a)!=="object"||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!x.call(a,"constructor")&&!x.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}if(!v.ownFirst)for(u in a)return x.call(a,u);for(u in a);return u===void 0||x.call(a,u)},type:function(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?f[g.call(a)]||"object":typeof a},globalEval:function(a){a&&o.trim(a)&&(e.execScript||function(u){e.eval.call(e,u)})(a)},camelCase:function(a){return a.replace(M,"ms-").replace(y,F)},nodeName:function(a,u){return a.nodeName&&a.nodeName.toLowerCase()===u.toLowerCase()},each:function(a,u){var d,m=0;if(U(a))for(d=a.length;m<d&&u.call(a[m],m,a[m])!==!1;m++);else for(m in a)if(u.call(a[m],m,a[m])===!1)break;return a},trim:function(a){return a==null?"":(a+"").replace(w,"")},makeArray:function(a,u){var d=u||[];return a!=null&&(U(Object(a))?o.merge(d,typeof a=="string"?[a]:a):c.call(d,a)),d},inArray:function(a,u,d){var m;if(u){if(h)return h.call(u,a,d);for(m=u.length,d=d?d<0?Math.max(0,m+d):d:0;d<m;d++)if(d in u&&u[d]===a)return d}return-1},merge:function(a,u){for(var d=+u.length,m=0,E=a.length;m<d;)a[E++]=u[m++];if(d!==d)for(;u[m]!==void 0;)a[E++]=u[m++];return a.length=E,a},grep:function(a,u,d){for(var m,E=[],T=0,A=a.length,I=!d;T<A;T++)m=!u(a[T],T),m!==I&&E.push(a[T]);return E},map:function(a,u,d){var m,E,T=0,A=[];if(U(a))for(m=a.length;T<m;T++)E=u(a[T],T,d),E!=null&&A.push(E);else for(T in a)E=u(a[T],T,d),E!=null&&A.push(E);return l.apply([],A)},guid:1,proxy:function(a,u){var d,m,E;if(typeof u=="string"&&(E=a[u],u=a,a=E),!!o.isFunction(a))return d=s.call(arguments,2),m=function(){return a.apply(u||this,d.concat(s.call(arguments)))},m.guid=a.guid=a.guid||o.guid++,m},now:function(){return+new Date},support:v}),typeof Symbol=="function"&&(o.fn[Symbol.iterator]=n[Symbol.iterator]),o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,u){f["[object "+u+"]"]=u.toLowerCase()});function U(a){var u=!!a&&"length"in a&&a.length,d=o.type(a);return d==="function"||o.isWindow(a)?!1:d==="array"||u===0||typeof u=="number"&&u>0&&u-1 in a}var L=function(a){var u,d,m,E,T,A,I,Y,q,Q,ge,be,_e,ot,nt,pt,Pn,fn,Ii,Ge="sizzle"+1*new Date,pn=a.document,xt=0,Zt=0,Ni=$a(),Bs=$a(),kn=$a(),Qi=function(P,H){return P===H&&(ge=!0),0},Ui=1<<31,Fi={}.hasOwnProperty,An=[],Hn=An.pop,Jh=An.push,Oi=An.push,cc=An.slice,er=function(P,H){for(var W=0,oe=P.length;W<oe;W++)if(P[W]===H)return W;return-1},qa="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",kt="[\\x20\\t\\r\\n\\f]",tr="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",uc="\\["+kt+"*("+tr+")(?:"+kt+"*([*^$|!~]?=)"+kt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+tr+"))|)"+kt+"*\\]",Ya=":("+tr+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+uc+")*)|.*)\\)|)",Qh=new RegExp(kt+"+","g"),ks=new RegExp("^"+kt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+kt+"+$","g"),ef=new RegExp("^"+kt+"*,"+kt+"*"),tf=new RegExp("^"+kt+"*([>+~]|"+kt+")"+kt+"*"),nf=new RegExp("="+kt+`*([^\\]'"]*?)`+kt+"*\\]","g"),rf=new RegExp(Ya),hc=new RegExp("^"+tr+"$"),Hs={ID:new RegExp("^#("+tr+")"),CLASS:new RegExp("^\\.("+tr+")"),TAG:new RegExp("^("+tr+"|[*])"),ATTR:new RegExp("^"+uc),PSEUDO:new RegExp("^"+Ya),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+kt+"*(even|odd|(([+-]|)(\\d*)n|)"+kt+"*(?:([+-]|)"+kt+"*(\\d+)|))"+kt+"*\\)|)","i"),bool:new RegExp("^(?:"+qa+")$","i"),needsContext:new RegExp("^"+kt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+kt+"*((?:-\\d)?\\d*)"+kt+"*\\)|)(?=[^-]|$)","i")},sf=/^(?:input|select|textarea|button)$/i,af=/^h\d$/i,ls=/^[^{]+\{\s*\[native \w/,of=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ka=/[+~]/,lf=/'|\\/g,_i=new RegExp("\\\\([\\da-f]{1,6}"+kt+"?|("+kt+")|.)","ig"),vi=function(P,H,W){var oe="0x"+H-65536;return oe!==oe||W?H:oe<0?String.fromCharCode(oe+65536):String.fromCharCode(oe>>10|55296,oe&1023|56320)},fc=function(){be()};try{Oi.apply(An=cc.call(pn.childNodes),pn.childNodes),An[pn.childNodes.length].nodeType}catch{Oi={apply:An.length?function(H,W){Jh.apply(H,cc.call(W))}:function(H,W){for(var oe=H.length,te=0;H[oe++]=W[te++];);H.length=oe-1}}}function Wt(P,H,W,oe){var te,pe,fe,Ae,Ke,ft,$e,rt,bt=H&&H.ownerDocument,Ut=H?H.nodeType:9;if(W=W||[],typeof P!="string"||!P||Ut!==1&&Ut!==9&&Ut!==11)return W;if(!oe&&((H?H.ownerDocument||H:pn)!==_e&&be(H),H=H||_e,nt)){if(Ut!==11&&(ft=of.exec(P)))if(te=ft[1]){if(Ut===9)if(fe=H.getElementById(te)){if(fe.id===te)return W.push(fe),W}else return W;else if(bt&&(fe=bt.getElementById(te))&&Ii(H,fe)&&fe.id===te)return W.push(fe),W}else{if(ft[2])return Oi.apply(W,H.getElementsByTagName(P)),W;if((te=ft[3])&&d.getElementsByClassName&&H.getElementsByClassName)return Oi.apply(W,H.getElementsByClassName(te)),W}if(d.qsa&&!kn[P+" "]&&(!pt||!pt.test(P))){if(Ut!==1)bt=H,rt=P;else if(H.nodeName.toLowerCase()!=="object"){for((Ae=H.getAttribute("id"))?Ae=Ae.replace(lf,"\\$&"):H.setAttribute("id",Ae=Ge),$e=A(P),pe=$e.length,Ke=hc.test(Ae)?"#"+Ae:"[id='"+Ae+"']";pe--;)$e[pe]=Ke+" "+zs($e[pe]);rt=$e.join(","),bt=Ka.test(P)&&Ja(H.parentNode)||H}if(rt)try{return Oi.apply(W,bt.querySelectorAll(rt)),W}catch{}finally{Ae===Ge&&H.removeAttribute("id")}}}return Y(P.replace(ks,"$1"),H,W,oe)}function $a(){var P=[];function H(W,oe){return P.push(W+" ")>m.cacheLength&&delete H[P.shift()],H[W+" "]=oe}return H}function Wn(P){return P[Ge]=!0,P}function ni(P){var H=_e.createElement("div");try{return!!P(H)}catch{return!1}finally{H.parentNode&&H.parentNode.removeChild(H),H=null}}function Za(P,H){for(var W=P.split("|"),oe=W.length;oe--;)m.attrHandle[W[oe]]=H}function dc(P,H){var W=H&&P,oe=W&&P.nodeType===1&&H.nodeType===1&&(~H.sourceIndex||Ui)-(~P.sourceIndex||Ui);if(oe)return oe;if(W){for(;W=W.nextSibling;)if(W===H)return-1}return P?1:-1}function cf(P){return function(H){var W=H.nodeName.toLowerCase();return W==="input"&&H.type===P}}function uf(P){return function(H){var W=H.nodeName.toLowerCase();return(W==="input"||W==="button")&&H.type===P}}function nr(P){return Wn(function(H){return H=+H,Wn(function(W,oe){for(var te,pe=P([],W.length,H),fe=pe.length;fe--;)W[te=pe[fe]]&&(W[te]=!(oe[te]=W[te]))})})}function Ja(P){return P&&typeof P.getElementsByTagName<"u"&&P}d=Wt.support={},T=Wt.isXML=function(P){var H=P&&(P.ownerDocument||P).documentElement;return H?H.nodeName!=="HTML":!1},be=Wt.setDocument=function(P){var H,W,oe=P?P.ownerDocument||P:pn;return oe===_e||oe.nodeType!==9||!oe.documentElement||(_e=oe,ot=_e.documentElement,nt=!T(_e),(W=_e.defaultView)&&W.top!==W&&(W.addEventListener?W.addEventListener("unload",fc,!1):W.attachEvent&&W.attachEvent("onunload",fc)),d.attributes=ni(function(te){return te.className="i",!te.getAttribute("className")}),d.getElementsByTagName=ni(function(te){return te.appendChild(_e.createComment("")),!te.getElementsByTagName("*").length}),d.getElementsByClassName=ls.test(_e.getElementsByClassName),d.getById=ni(function(te){return ot.appendChild(te).id=Ge,!_e.getElementsByName||!_e.getElementsByName(Ge).length}),d.getById?(m.find.ID=function(te,pe){if(typeof pe.getElementById<"u"&&nt){var fe=pe.getElementById(te);return fe?[fe]:[]}},m.filter.ID=function(te){var pe=te.replace(_i,vi);return function(fe){return fe.getAttribute("id")===pe}}):(delete m.find.ID,m.filter.ID=function(te){var pe=te.replace(_i,vi);return function(fe){var Ae=typeof fe.getAttributeNode<"u"&&fe.getAttributeNode("id");return Ae&&Ae.value===pe}}),m.find.TAG=d.getElementsByTagName?function(te,pe){if(typeof pe.getElementsByTagName<"u")return pe.getElementsByTagName(te);if(d.qsa)return pe.querySelectorAll(te)}:function(te,pe){var fe,Ae=[],Ke=0,ft=pe.getElementsByTagName(te);if(te==="*"){for(;fe=ft[Ke++];)fe.nodeType===1&&Ae.push(fe);return Ae}return ft},m.find.CLASS=d.getElementsByClassName&&function(te,pe){if(typeof pe.getElementsByClassName<"u"&&nt)return pe.getElementsByClassName(te)},Pn=[],pt=[],(d.qsa=ls.test(_e.querySelectorAll))&&(ni(function(te){ot.appendChild(te).innerHTML="<a id='"+Ge+"'></a><select id='"+Ge+"-\r\\' msallowcapture=''><option selected=''></option></select>",te.querySelectorAll("[msallowcapture^='']").length&&pt.push("[*^$]="+kt+`*(?:''|"")`),te.querySelectorAll("[selected]").length||pt.push("\\["+kt+"*(?:value|"+qa+")"),te.querySelectorAll("[id~="+Ge+"-]").length||pt.push("~="),te.querySelectorAll(":checked").length||pt.push(":checked"),te.querySelectorAll("a#"+Ge+"+*").length||pt.push(".#.+[+~]")}),ni(function(te){var pe=_e.createElement("input");pe.setAttribute("type","hidden"),te.appendChild(pe).setAttribute("name","D"),te.querySelectorAll("[name=d]").length&&pt.push("name"+kt+"*[*^$|!~]?="),te.querySelectorAll(":enabled").length||pt.push(":enabled",":disabled"),te.querySelectorAll("*,:x"),pt.push(",.*:")})),(d.matchesSelector=ls.test(fn=ot.matches||ot.webkitMatchesSelector||ot.mozMatchesSelector||ot.oMatchesSelector||ot.msMatchesSelector))&&ni(function(te){d.disconnectedMatch=fn.call(te,"div"),fn.call(te,"[s!='']:x"),Pn.push("!=",Ya)}),pt=pt.length&&new RegExp(pt.join("|")),Pn=Pn.length&&new RegExp(Pn.join("|")),H=ls.test(ot.compareDocumentPosition),Ii=H||ls.test(ot.contains)?function(te,pe){var fe=te.nodeType===9?te.documentElement:te,Ae=pe&&pe.parentNode;return te===Ae||!!(Ae&&Ae.nodeType===1&&(fe.contains?fe.contains(Ae):te.compareDocumentPosition&&te.compareDocumentPosition(Ae)&16))}:function(te,pe){if(pe){for(;pe=pe.parentNode;)if(pe===te)return!0}return!1},Qi=H?function(te,pe){if(te===pe)return ge=!0,0;var fe=!te.compareDocumentPosition-!pe.compareDocumentPosition;return fe||(fe=(te.ownerDocument||te)===(pe.ownerDocument||pe)?te.compareDocumentPosition(pe):1,fe&1||!d.sortDetached&&pe.compareDocumentPosition(te)===fe?te===_e||te.ownerDocument===pn&&Ii(pn,te)?-1:pe===_e||pe.ownerDocument===pn&&Ii(pn,pe)?1:Q?er(Q,te)-er(Q,pe):0:fe&4?-1:1)}:function(te,pe){if(te===pe)return ge=!0,0;var fe,Ae=0,Ke=te.parentNode,ft=pe.parentNode,$e=[te],rt=[pe];if(!Ke||!ft)return te===_e?-1:pe===_e?1:Ke?-1:ft?1:Q?er(Q,te)-er(Q,pe):0;if(Ke===ft)return dc(te,pe);for(fe=te;fe=fe.parentNode;)$e.unshift(fe);for(fe=pe;fe=fe.parentNode;)rt.unshift(fe);for(;$e[Ae]===rt[Ae];)Ae++;return Ae?dc($e[Ae],rt[Ae]):$e[Ae]===pn?-1:rt[Ae]===pn?1:0}),_e},Wt.matches=function(P,H){return Wt(P,null,null,H)},Wt.matchesSelector=function(P,H){if((P.ownerDocument||P)!==_e&&be(P),H=H.replace(nf,"='$1']"),d.matchesSelector&&nt&&!kn[H+" "]&&(!Pn||!Pn.test(H))&&(!pt||!pt.test(H)))try{var W=fn.call(P,H);if(W||d.disconnectedMatch||P.document&&P.document.nodeType!==11)return W}catch{}return Wt(H,_e,null,[P]).length>0},Wt.contains=function(P,H){return(P.ownerDocument||P)!==_e&&be(P),Ii(P,H)},Wt.attr=function(P,H){(P.ownerDocument||P)!==_e&&be(P);var W=m.attrHandle[H.toLowerCase()],oe=W&&Fi.call(m.attrHandle,H.toLowerCase())?W(P,H,!nt):void 0;return oe!==void 0?oe:d.attributes||!nt?P.getAttribute(H):(oe=P.getAttributeNode(H))&&oe.specified?oe.value:null},Wt.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)},Wt.uniqueSort=function(P){var H,W=[],oe=0,te=0;if(ge=!d.detectDuplicates,Q=!d.sortStable&&P.slice(0),P.sort(Qi),ge){for(;H=P[te++];)H===P[te]&&(oe=W.push(te));for(;oe--;)P.splice(W[oe],1)}return Q=null,P},E=Wt.getText=function(P){var H,W="",oe=0,te=P.nodeType;if(te){if(te===1||te===9||te===11){if(typeof P.textContent=="string")return P.textContent;for(P=P.firstChild;P;P=P.nextSibling)W+=E(P)}else if(te===3||te===4)return P.nodeValue}else for(;H=P[oe++];)W+=E(H);return W},m=Wt.selectors={cacheLength:50,createPseudo:Wn,match:Hs,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(P){return P[1]=P[1].replace(_i,vi),P[3]=(P[3]||P[4]||P[5]||"").replace(_i,vi),P[2]==="~="&&(P[3]=" "+P[3]+" "),P.slice(0,4)},CHILD:function(P){return P[1]=P[1].toLowerCase(),P[1].slice(0,3)==="nth"?(P[3]||Wt.error(P[0]),P[4]=+(P[4]?P[5]+(P[6]||1):2*(P[3]==="even"||P[3]==="odd")),P[5]=+(P[7]+P[8]||P[3]==="odd")):P[3]&&Wt.error(P[0]),P},PSEUDO:function(P){var H,W=!P[6]&&P[2];return Hs.CHILD.test(P[0])?null:(P[3]?P[2]=P[4]||P[5]||"":W&&rf.test(W)&&(H=A(W,!0))&&(H=W.indexOf(")",W.length-H)-W.length)&&(P[0]=P[0].slice(0,H),P[2]=W.slice(0,H)),P.slice(0,3))}},filter:{TAG:function(P){var H=P.replace(_i,vi).toLowerCase();return P==="*"?function(){return!0}:function(W){return W.nodeName&&W.nodeName.toLowerCase()===H}},CLASS:function(P){var H=Ni[P+" "];return H||(H=new RegExp("(^|"+kt+")"+P+"("+kt+"|$)"))&&Ni(P,function(W){return H.test(typeof W.className=="string"&&W.className||typeof W.getAttribute<"u"&&W.getAttribute("class")||"")})},ATTR:function(P,H,W){return function(oe){var te=Wt.attr(oe,P);return te==null?H==="!=":H?(te+="",H==="="?te===W:H==="!="?te!==W:H==="^="?W&&te.indexOf(W)===0:H==="*="?W&&te.indexOf(W)>-1:H==="$="?W&&te.slice(-W.length)===W:H==="~="?(" "+te.replace(Qh," ")+" ").indexOf(W)>-1:H==="|="?te===W||te.slice(0,W.length+1)===W+"-":!1):!0}},CHILD:function(P,H,W,oe,te){var pe=P.slice(0,3)!=="nth",fe=P.slice(-4)!=="last",Ae=H==="of-type";return oe===1&&te===0?function(Ke){return!!Ke.parentNode}:function(Ke,ft,$e){var rt,bt,Ut,it,rn,mn,Ln=pe!==fe?"nextSibling":"previousSibling",jt=Ke.parentNode,cs=Ae&&Ke.nodeName.toLowerCase(),us=!$e&&!Ae,Dn=!1;if(jt){if(pe){for(;Ln;){for(it=Ke;it=it[Ln];)if(Ae?it.nodeName.toLowerCase()===cs:it.nodeType===1)return!1;mn=Ln=P==="only"&&!mn&&"nextSibling"}return!0}if(mn=[fe?jt.firstChild:jt.lastChild],fe&&us){for(it=jt,Ut=it[Ge]||(it[Ge]={}),bt=Ut[it.uniqueID]||(Ut[it.uniqueID]={}),rt=bt[P]||[],rn=rt[0]===xt&&rt[1],Dn=rn&&rt[2],it=rn&&jt.childNodes[rn];it=++rn&&it&&it[Ln]||(Dn=rn=0)||mn.pop();)if(it.nodeType===1&&++Dn&&it===Ke){bt[P]=[xt,rn,Dn];break}}else if(us&&(it=Ke,Ut=it[Ge]||(it[Ge]={}),bt=Ut[it.uniqueID]||(Ut[it.uniqueID]={}),rt=bt[P]||[],rn=rt[0]===xt&&rt[1],Dn=rn),Dn===!1)for(;(it=++rn&&it&&it[Ln]||(Dn=rn=0)||mn.pop())&&!((Ae?it.nodeName.toLowerCase()===cs:it.nodeType===1)&&++Dn&&(us&&(Ut=it[Ge]||(it[Ge]={}),bt=Ut[it.uniqueID]||(Ut[it.uniqueID]={}),bt[P]=[xt,Dn]),it===Ke)););return Dn-=te,Dn===oe||Dn%oe===0&&Dn/oe>=0}}},PSEUDO:function(P,H){var W,oe=m.pseudos[P]||m.setFilters[P.toLowerCase()]||Wt.error("unsupported pseudo: "+P);return oe[Ge]?oe(H):oe.length>1?(W=[P,P,"",H],m.setFilters.hasOwnProperty(P.toLowerCase())?Wn(function(te,pe){for(var fe,Ae=oe(te,H),Ke=Ae.length;Ke--;)fe=er(te,Ae[Ke]),te[fe]=!(pe[fe]=Ae[Ke])}):function(te){return oe(te,0,W)}):oe}},pseudos:{not:Wn(function(P){var H=[],W=[],oe=I(P.replace(ks,"$1"));return oe[Ge]?Wn(function(te,pe,fe,Ae){for(var Ke,ft=oe(te,null,Ae,[]),$e=te.length;$e--;)(Ke=ft[$e])&&(te[$e]=!(pe[$e]=Ke))}):function(te,pe,fe){return H[0]=te,oe(H,null,fe,W),H[0]=null,!W.pop()}}),has:Wn(function(P){return function(H){return Wt(P,H).length>0}}),contains:Wn(function(P){return P=P.replace(_i,vi),function(H){return(H.textContent||H.innerText||E(H)).indexOf(P)>-1}}),lang:Wn(function(P){return hc.test(P||"")||Wt.error("unsupported lang: "+P),P=P.replace(_i,vi).toLowerCase(),function(H){var W;do if(W=nt?H.lang:H.getAttribute("xml:lang")||H.getAttribute("lang"))return W=W.toLowerCase(),W===P||W.indexOf(P+"-")===0;while((H=H.parentNode)&&H.nodeType===1);return!1}}),target:function(P){var H=a.location&&a.location.hash;return H&&H.slice(1)===P.id},root:function(P){return P===ot},focus:function(P){return P===_e.activeElement&&(!_e.hasFocus||_e.hasFocus())&&!!(P.type||P.href||~P.tabIndex)},enabled:function(P){return P.disabled===!1},disabled:function(P){return P.disabled===!0},checked:function(P){var H=P.nodeName.toLowerCase();return H==="input"&&!!P.checked||H==="option"&&!!P.selected},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},empty:function(P){for(P=P.firstChild;P;P=P.nextSibling)if(P.nodeType<6)return!1;return!0},parent:function(P){return!m.pseudos.empty(P)},header:function(P){return af.test(P.nodeName)},input:function(P){return sf.test(P.nodeName)},button:function(P){var H=P.nodeName.toLowerCase();return H==="input"&&P.type==="button"||H==="button"},text:function(P){var H;return P.nodeName.toLowerCase()==="input"&&P.type==="text"&&((H=P.getAttribute("type"))==null||H.toLowerCase()==="text")},first:nr(function(){return[0]}),last:nr(function(P,H){return[H-1]}),eq:nr(function(P,H,W){return[W<0?W+H:W]}),even:nr(function(P,H){for(var W=0;W<H;W+=2)P.push(W);return P}),odd:nr(function(P,H){for(var W=1;W<H;W+=2)P.push(W);return P}),lt:nr(function(P,H,W){for(var oe=W<0?W+H:W;--oe>=0;)P.push(oe);return P}),gt:nr(function(P,H,W){for(var oe=W<0?W+H:W;++oe<H;)P.push(oe);return P})}},m.pseudos.nth=m.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})m.pseudos[u]=cf(u);for(u in{submit:!0,reset:!0})m.pseudos[u]=uf(u);function pc(){}pc.prototype=m.filters=m.pseudos,m.setFilters=new pc,A=Wt.tokenize=function(P,H){var W,oe,te,pe,fe,Ae,Ke,ft=Bs[P+" "];if(ft)return H?0:ft.slice(0);for(fe=P,Ae=[],Ke=m.preFilter;fe;){(!W||(oe=ef.exec(fe)))&&(oe&&(fe=fe.slice(oe[0].length)||fe),Ae.push(te=[])),W=!1,(oe=tf.exec(fe))&&(W=oe.shift(),te.push({value:W,type:oe[0].replace(ks," ")}),fe=fe.slice(W.length));for(pe in m.filter)(oe=Hs[pe].exec(fe))&&(!Ke[pe]||(oe=Ke[pe](oe)))&&(W=oe.shift(),te.push({value:W,type:pe,matches:oe}),fe=fe.slice(W.length));if(!W)break}return H?fe.length:fe?Wt.error(P):Bs(P,Ae).slice(0)};function zs(P){for(var H=0,W=P.length,oe="";H<W;H++)oe+=P[H].value;return oe}function Qa(P,H,W){var oe=H.dir,te=W&&oe==="parentNode",pe=Zt++;return H.first?function(fe,Ae,Ke){for(;fe=fe[oe];)if(fe.nodeType===1||te)return P(fe,Ae,Ke)}:function(fe,Ae,Ke){var ft,$e,rt,bt=[xt,pe];if(Ke){for(;fe=fe[oe];)if((fe.nodeType===1||te)&&P(fe,Ae,Ke))return!0}else for(;fe=fe[oe];)if(fe.nodeType===1||te){if(rt=fe[Ge]||(fe[Ge]={}),$e=rt[fe.uniqueID]||(rt[fe.uniqueID]={}),(ft=$e[oe])&&ft[0]===xt&&ft[1]===pe)return bt[2]=ft[2];if($e[oe]=bt,bt[2]=P(fe,Ae,Ke))return!0}}}function eo(P){return P.length>1?function(H,W,oe){for(var te=P.length;te--;)if(!P[te](H,W,oe))return!1;return!0}:P[0]}function hf(P,H,W){for(var oe=0,te=H.length;oe<te;oe++)Wt(P,H[oe],W);return W}function Vs(P,H,W,oe,te){for(var pe,fe=[],Ae=0,Ke=P.length,ft=H!=null;Ae<Ke;Ae++)(pe=P[Ae])&&(!W||W(pe,oe,te))&&(fe.push(pe),ft&&H.push(Ae));return fe}function to(P,H,W,oe,te,pe){return oe&&!oe[Ge]&&(oe=to(oe)),te&&!te[Ge]&&(te=to(te,pe)),Wn(function(fe,Ae,Ke,ft){var $e,rt,bt,Ut=[],it=[],rn=Ae.length,mn=fe||hf(H||"*",Ke.nodeType?[Ke]:Ke,[]),Ln=P&&(fe||!H)?Vs(mn,Ut,P,Ke,ft):mn,jt=W?te||(fe?P:rn||oe)?[]:Ae:Ln;if(W&&W(Ln,jt,Ke,ft),oe)for($e=Vs(jt,it),oe($e,[],Ke,ft),rt=$e.length;rt--;)(bt=$e[rt])&&(jt[it[rt]]=!(Ln[it[rt]]=bt));if(fe){if(te||P){if(te){for($e=[],rt=jt.length;rt--;)(bt=jt[rt])&&$e.push(Ln[rt]=bt);te(null,jt=[],$e,ft)}for(rt=jt.length;rt--;)(bt=jt[rt])&&($e=te?er(fe,bt):Ut[rt])>-1&&(fe[$e]=!(Ae[$e]=bt))}}else jt=Vs(jt===Ae?jt.splice(rn,jt.length):jt),te?te(null,Ae,jt,ft):Oi.apply(Ae,jt)})}function no(P){for(var H,W,oe,te=P.length,pe=m.relative[P[0].type],fe=pe||m.relative[" "],Ae=pe?1:0,Ke=Qa(function(rt){return rt===H},fe,!0),ft=Qa(function(rt){return er(H,rt)>-1},fe,!0),$e=[function(rt,bt,Ut){var it=!pe&&(Ut||bt!==q)||((H=bt).nodeType?Ke(rt,bt,Ut):ft(rt,bt,Ut));return H=null,it}];Ae<te;Ae++)if(W=m.relative[P[Ae].type])$e=[Qa(eo($e),W)];else{if(W=m.filter[P[Ae].type].apply(null,P[Ae].matches),W[Ge]){for(oe=++Ae;oe<te&&!m.relative[P[oe].type];oe++);return to(Ae>1&&eo($e),Ae>1&&zs(P.slice(0,Ae-1).concat({value:P[Ae-2].type===" "?"*":""})).replace(ks,"$1"),W,Ae<oe&&no(P.slice(Ae,oe)),oe<te&&no(P=P.slice(oe)),oe<te&&zs(P))}$e.push(W)}return eo($e)}function ff(P,H){var W=H.length>0,oe=P.length>0,te=function(pe,fe,Ae,Ke,ft){var $e,rt,bt,Ut=0,it="0",rn=pe&&[],mn=[],Ln=q,jt=pe||oe&&m.find.TAG("*",ft),cs=xt+=Ln==null?1:Math.random()||.1,us=jt.length;for(ft&&(q=fe===_e||fe||ft);it!==us&&($e=jt[it])!=null;it++){if(oe&&$e){for(rt=0,!fe&&$e.ownerDocument!==_e&&(be($e),Ae=!nt);bt=P[rt++];)if(bt($e,fe||_e,Ae)){Ke.push($e);break}ft&&(xt=cs)}W&&(($e=!bt&&$e)&&Ut--,pe&&rn.push($e))}if(Ut+=it,W&&it!==Ut){for(rt=0;bt=H[rt++];)bt(rn,mn,fe,Ae);if(pe){if(Ut>0)for(;it--;)rn[it]||mn[it]||(mn[it]=Hn.call(Ke));mn=Vs(mn)}Oi.apply(Ke,mn),ft&&!pe&&mn.length>0&&Ut+H.length>1&&Wt.uniqueSort(Ke)}return ft&&(xt=cs,q=Ln),rn};return W?Wn(te):te}return I=Wt.compile=function(P,H){var W,oe=[],te=[],pe=kn[P+" "];if(!pe){for(H||(H=A(P)),W=H.length;W--;)pe=no(H[W]),pe[Ge]?oe.push(pe):te.push(pe);pe=kn(P,ff(te,oe)),pe.selector=P}return pe},Y=Wt.select=function(P,H,W,oe){var te,pe,fe,Ae,Ke,ft=typeof P=="function"&&P,$e=!oe&&A(P=ft.selector||P);if(W=W||[],$e.length===1){if(pe=$e[0]=$e[0].slice(0),pe.length>2&&(fe=pe[0]).type==="ID"&&d.getById&&H.nodeType===9&&nt&&m.relative[pe[1].type]){if(H=(m.find.ID(fe.matches[0].replace(_i,vi),H)||[])[0],H)ft&&(H=H.parentNode);else return W;P=P.slice(pe.shift().value.length)}for(te=Hs.needsContext.test(P)?0:pe.length;te--&&(fe=pe[te],!m.relative[Ae=fe.type]);)if((Ke=m.find[Ae])&&(oe=Ke(fe.matches[0].replace(_i,vi),Ka.test(pe[0].type)&&Ja(H.parentNode)||H))){if(pe.splice(te,1),P=oe.length&&zs(pe),!P)return Oi.apply(W,oe),W;break}}return(ft||I(P,$e))(oe,H,!nt,W,!H||Ka.test(P)&&Ja(H.parentNode)||H),W},d.sortStable=Ge.split("").sort(Qi).join("")===Ge,d.detectDuplicates=!!ge,be(),d.sortDetached=ni(function(P){return P.compareDocumentPosition(_e.createElement("div"))&1}),ni(function(P){return P.innerHTML="<a href='#'></a>",P.firstChild.getAttribute("href")==="#"})||Za("type|href|height|width",function(P,H,W){if(!W)return P.getAttribute(H,H.toLowerCase()==="type"?1:2)}),(!d.attributes||!ni(function(P){return P.innerHTML="<input/>",P.firstChild.setAttribute("value",""),P.firstChild.getAttribute("value")===""}))&&Za("value",function(P,H,W){if(!W&&P.nodeName.toLowerCase()==="input")return P.defaultValue}),ni(function(P){return P.getAttribute("disabled")==null})||Za(qa,function(P,H,W){var oe;if(!W)return P[H]===!0?H.toLowerCase():(oe=P.getAttributeNode(H))&&oe.specified?oe.value:null}),Wt}(e);o.find=L,o.expr=L.selectors,o.expr[":"]=o.expr.pseudos,o.uniqueSort=o.unique=L.uniqueSort,o.text=L.getText,o.isXMLDoc=L.isXML,o.contains=L.contains;var G=function(a,u,d){for(var m=[],E=d!==void 0;(a=a[u])&&a.nodeType!==9;)if(a.nodeType===1){if(E&&o(a).is(d))break;m.push(a)}return m},k=function(a,u){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==u&&d.push(a);return d},B=o.expr.match.needsContext,Z=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,p=/^.[^:#\[\.,]*$/;function _(a,u,d){if(o.isFunction(u))return o.grep(a,function(m,E){return!!u.call(m,E,m)!==d});if(u.nodeType)return o.grep(a,function(m){return m===u!==d});if(typeof u=="string"){if(p.test(u))return o.filter(u,a,d);u=o.filter(u,a)}return o.grep(a,function(m){return o.inArray(m,u)>-1!==d})}o.filter=function(a,u,d){var m=u[0];return d&&(a=":not("+a+")"),u.length===1&&m.nodeType===1?o.find.matchesSelector(m,a)?[m]:[]:o.find.matches(a,o.grep(u,function(E){return E.nodeType===1}))},o.fn.extend({find:function(a){var u,d=[],m=this,E=m.length;if(typeof a!="string")return this.pushStack(o(a).filter(function(){for(u=0;u<E;u++)if(o.contains(m[u],this))return!0}));for(u=0;u<E;u++)o.find(a,m[u],d);return d=this.pushStack(E>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(_(this,a||[],!1))},not:function(a){return this.pushStack(_(this,a||[],!0))},is:function(a){return!!_(this,typeof a=="string"&&B.test(a)?o(a):a||[],!1).length}});var b,D=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,O=o.fn.init=function(a,u,d){var m,E;if(!a)return this;if(d=d||b,typeof a=="string")if(a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?m=[null,a,null]:m=D.exec(a),m&&(m[1]||!u))if(m[1]){if(u=u instanceof o?u[0]:u,o.merge(this,o.parseHTML(m[1],u&&u.nodeType?u.ownerDocument||u:i,!0)),Z.test(m[1])&&o.isPlainObject(u))for(m in u)o.isFunction(this[m])?this[m](u[m]):this.attr(m,u[m]);return this}else{if(E=i.getElementById(m[2]),E&&E.parentNode){if(E.id!==m[2])return b.find(a);this.length=1,this[0]=E}return this.context=i,this.selector=a,this}else return!u||u.jquery?(u||d).find(a):this.constructor(u).find(a);else{if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(o.isFunction(a))return typeof d.ready<"u"?d.ready(a):a(o)}return a.selector!==void 0&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this)};O.prototype=o.fn,b=o(i);var V=/^(?:parents|prev(?:Until|All))/,ee={children:!0,contents:!0,next:!0,prev:!0};o.fn.extend({has:function(a){var u,d=o(a,this),m=d.length;return this.filter(function(){for(u=0;u<m;u++)if(o.contains(this,d[u]))return!0})},closest:function(a,u){for(var d,m=0,E=this.length,T=[],A=B.test(a)||typeof a!="string"?o(a,u||this.context):0;m<E;m++)for(d=this[m];d&&d!==u;d=d.parentNode)if(d.nodeType<11&&(A?A.index(d)>-1:d.nodeType===1&&o.find.matchesSelector(d,a))){T.push(d);break}return this.pushStack(T.length>1?o.uniqueSort(T):T)},index:function(a){return a?typeof a=="string"?o.inArray(this[0],o(a)):o.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,u){return this.pushStack(o.uniqueSort(o.merge(this.get(),o(a,u))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function ne(a,u){do a=a[u];while(a&&a.nodeType!==1);return a}o.each({parent:function(a){var u=a.parentNode;return u&&u.nodeType!==11?u:null},parents:function(a){return G(a,"parentNode")},parentsUntil:function(a,u,d){return G(a,"parentNode",d)},next:function(a){return ne(a,"nextSibling")},prev:function(a){return ne(a,"previousSibling")},nextAll:function(a){return G(a,"nextSibling")},prevAll:function(a){return G(a,"previousSibling")},nextUntil:function(a,u,d){return G(a,"nextSibling",d)},prevUntil:function(a,u,d){return G(a,"previousSibling",d)},siblings:function(a){return k((a.parentNode||{}).firstChild,a)},children:function(a){return k(a.firstChild)},contents:function(a){return o.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:o.merge([],a.childNodes)}},function(a,u){o.fn[a]=function(d,m){var E=o.map(this,u,d);return a.slice(-5)!=="Until"&&(m=d),m&&typeof m=="string"&&(E=o.filter(m,E)),this.length>1&&(ee[a]||(E=o.uniqueSort(E)),V.test(a)&&(E=E.reverse())),this.pushStack(E)}});var ae=/\S+/g;function ie(a){var u={};return o.each(a.match(ae)||[],function(d,m){u[m]=!0}),u}o.Callbacks=function(a){a=typeof a=="string"?ie(a):o.extend({},a);var u,d,m,E,T=[],A=[],I=-1,Y=function(){for(E=a.once,m=u=!0;A.length;I=-1)for(d=A.shift();++I<T.length;)T[I].apply(d[0],d[1])===!1&&a.stopOnFalse&&(I=T.length,d=!1);a.memory||(d=!1),u=!1,E&&(d?T=[]:T="")},q={add:function(){return T&&(d&&!u&&(I=T.length-1,A.push(d)),function Q(ge){o.each(ge,function(be,_e){o.isFunction(_e)?(!a.unique||!q.has(_e))&&T.push(_e):_e&&_e.length&&o.type(_e)!=="string"&&Q(_e)})}(arguments),d&&!u&&Y()),this},remove:function(){return o.each(arguments,function(Q,ge){for(var be;(be=o.inArray(ge,T,be))>-1;)T.splice(be,1),be<=I&&I--}),this},has:function(Q){return Q?o.inArray(Q,T)>-1:T.length>0},empty:function(){return T&&(T=[]),this},disable:function(){return E=A=[],T=d="",this},disabled:function(){return!T},lock:function(){return E=!0,d||q.disable(),this},locked:function(){return!!E},fireWith:function(Q,ge){return E||(ge=ge||[],ge=[Q,ge.slice?ge.slice():ge],A.push(ge),u||Y()),this},fire:function(){return q.fireWith(this,arguments),this},fired:function(){return!!m}};return q},o.extend({Deferred:function(a){var u=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],d="pending",m={state:function(){return d},always:function(){return E.done(arguments).fail(arguments),this},then:function(){var T=arguments;return o.Deferred(function(A){o.each(u,function(I,Y){var q=o.isFunction(T[I])&&T[I];E[Y[1]](function(){var Q=q&&q.apply(this,arguments);Q&&o.isFunction(Q.promise)?Q.promise().progress(A.notify).done(A.resolve).fail(A.reject):A[Y[0]+"With"](this===m?A.promise():this,q?[Q]:arguments)})}),T=null}).promise()},promise:function(T){return T!=null?o.extend(T,m):m}},E={};return m.pipe=m.then,o.each(u,function(T,A){var I=A[2],Y=A[3];m[A[1]]=I.add,Y&&I.add(function(){d=Y},u[T^1][2].disable,u[2][2].lock),E[A[0]]=function(){return E[A[0]+"With"](this===E?m:this,arguments),this},E[A[0]+"With"]=I.fireWith}),m.promise(E),a&&a.call(E,E),E},when:function(a){var u=0,d=s.call(arguments),m=d.length,E=m!==1||a&&o.isFunction(a.promise)?m:0,T=E===1?a:o.Deferred(),A=function(Q,ge,be){return function(_e){ge[Q]=this,be[Q]=arguments.length>1?s.call(arguments):_e,be===I?T.notifyWith(ge,be):--E||T.resolveWith(ge,be)}},I,Y,q;if(m>1)for(I=new Array(m),Y=new Array(m),q=new Array(m);u<m;u++)d[u]&&o.isFunction(d[u].promise)?d[u].promise().progress(A(u,Y,I)).done(A(u,q,d)).fail(T.reject):--E;return E||T.resolveWith(q,d),T.promise()}});var me;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,!(a!==!0&&--o.readyWait>0)&&(me.resolveWith(i,[o]),o.fn.triggerHandler&&(o(i).triggerHandler("ready"),o(i).off("ready"))))}});function Ee(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",Me),e.removeEventListener("load",Me)):(i.detachEvent("onreadystatechange",Me),e.detachEvent("onload",Me))}function Me(){(i.addEventListener||e.event.type==="load"||i.readyState==="complete")&&(Ee(),o.ready())}o.ready.promise=function(a){if(!me)if(me=o.Deferred(),i.readyState==="complete")e.setTimeout(o.ready);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",Me),e.addEventListener("load",Me);else{i.attachEvent("onreadystatechange",Me),e.attachEvent("onload",Me);var u=!1;try{u=e.frameElement==null&&i.documentElement}catch{}u&&u.doScroll&&function d(){if(!o.isReady){try{u.doScroll("left")}catch{return e.setTimeout(d,50)}Ee(),o.ready()}}()}return me.promise(a)},o.ready.promise();var Be;for(Be in o(v))break;v.ownFirst=Be==="0",v.inlineBlockNeedsLayout=!1,o(function(){var a,u,d,m;d=i.getElementsByTagName("body")[0],!(!d||!d.style)&&(u=i.createElement("div"),m=i.createElement("div"),m.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",d.appendChild(m).appendChild(u),typeof u.style.zoom<"u"&&(u.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",v.inlineBlockNeedsLayout=a=u.offsetWidth===3,a&&(d.style.zoom=1)),d.removeChild(m))}),function(){var a=i.createElement("div");v.deleteExpando=!0;try{delete a.test}catch{v.deleteExpando=!1}a=null}();var Ze=function(a){var u=o.noData[(a.nodeName+" ").toLowerCase()],d=+a.nodeType||1;return d!==1&&d!==9?!1:!u||u!==!0&&a.getAttribute("classid")===u},ce=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ve=/([A-Z])/g;function we(a,u,d){if(d===void 0&&a.nodeType===1){var m="data-"+u.replace(ve,"-$1").toLowerCase();if(d=a.getAttribute(m),typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:ce.test(d)?o.parseJSON(d):d}catch{}o.data(a,u,d)}else d=void 0}return d}function Te(a){var u;for(u in a)if(!(u==="data"&&o.isEmptyObject(a[u]))&&u!=="toJSON")return!1;return!0}function je(a,u,d,m){if(Ze(a)){var E,T,A=o.expando,I=a.nodeType,Y=I?o.cache:a,q=I?a[A]:a[A]&&A;if(!((!q||!Y[q]||!m&&!Y[q].data)&&d===void 0&&typeof u=="string"))return q||(I?q=a[A]=n.pop()||o.guid++:q=A),Y[q]||(Y[q]=I?{}:{toJSON:o.noop}),(typeof u=="object"||typeof u=="function")&&(m?Y[q]=o.extend(Y[q],u):Y[q].data=o.extend(Y[q].data,u)),T=Y[q],m||(T.data||(T.data={}),T=T.data),d!==void 0&&(T[o.camelCase(u)]=d),typeof u=="string"?(E=T[u],E==null&&(E=T[o.camelCase(u)])):E=T,E}}function dt(a,u,d){if(Ze(a)){var m,E,T=a.nodeType,A=T?o.cache:a,I=T?a[o.expando]:o.expando;if(A[I]){if(u&&(m=d?A[I]:A[I].data,m)){for(o.isArray(u)?u=u.concat(o.map(u,o.camelCase)):(u in m)?u=[u]:(u=o.camelCase(u),u in m?u=[u]:u=u.split(" ")),E=u.length;E--;)delete m[u[E]];if(d?!Te(m):!o.isEmptyObject(m))return}!d&&(delete A[I].data,!Te(A[I]))||(T?o.cleanData([a],!0):v.deleteExpando||A!=A.window?delete A[I]:A[I]=void 0)}}}o.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?o.cache[a[o.expando]]:a[o.expando],!!a&&!Te(a)},data:function(a,u,d){return je(a,u,d)},removeData:function(a,u){return dt(a,u)},_data:function(a,u,d){return je(a,u,d,!0)},_removeData:function(a,u){return dt(a,u,!0)}}),o.fn.extend({data:function(a,u){var d,m,E,T=this[0],A=T&&T.attributes;if(a===void 0){if(this.length&&(E=o.data(T),T.nodeType===1&&!o._data(T,"parsedAttrs"))){for(d=A.length;d--;)A[d]&&(m=A[d].name,m.indexOf("data-")===0&&(m=o.camelCase(m.slice(5)),we(T,m,E[m])));o._data(T,"parsedAttrs",!0)}return E}return typeof a=="object"?this.each(function(){o.data(this,a)}):arguments.length>1?this.each(function(){o.data(this,a,u)}):T?we(T,a,o.data(T,a)):void 0},removeData:function(a){return this.each(function(){o.removeData(this,a)})}}),o.extend({queue:function(a,u,d){var m;if(a)return u=(u||"fx")+"queue",m=o._data(a,u),d&&(!m||o.isArray(d)?m=o._data(a,u,o.makeArray(d)):m.push(d)),m||[]},dequeue:function(a,u){u=u||"fx";var d=o.queue(a,u),m=d.length,E=d.shift(),T=o._queueHooks(a,u),A=function(){o.dequeue(a,u)};E==="inprogress"&&(E=d.shift(),m--),E&&(u==="fx"&&d.unshift("inprogress"),delete T.stop,E.call(a,A,T)),!m&&T&&T.empty.fire()},_queueHooks:function(a,u){var d=u+"queueHooks";return o._data(a,d)||o._data(a,d,{empty:o.Callbacks("once memory").add(function(){o._removeData(a,u+"queue"),o._removeData(a,d)})})}}),o.fn.extend({queue:function(a,u){var d=2;return typeof a!="string"&&(u=a,a="fx",d--),arguments.length<d?o.queue(this[0],a):u===void 0?this:this.each(function(){var m=o.queue(this,a,u);o._queueHooks(this,a),a==="fx"&&m[0]!=="inprogress"&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,u){var d,m=1,E=o.Deferred(),T=this,A=this.length,I=function(){--m||E.resolveWith(T,[T])};for(typeof a!="string"&&(u=a,a=void 0),a=a||"fx";A--;)d=o._data(T[A],a+"queueHooks"),d&&d.empty&&(m++,d.empty.add(I));return I(),E.promise(u)}}),function(){var a;v.shrinkWrapBlocks=function(){if(a!=null)return a;a=!1;var u,d,m;if(d=i.getElementsByTagName("body")[0],!(!d||!d.style))return u=i.createElement("div"),m=i.createElement("div"),m.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",d.appendChild(m).appendChild(u),typeof u.style.zoom<"u"&&(u.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",u.appendChild(i.createElement("div")).style.width="5px",a=u.offsetWidth!==3),d.removeChild(m),a}}();var We=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,It=new RegExp("^(?:([+-])=|)("+We+")([a-z%]*)$","i"),Tt=["Top","Right","Bottom","Left"],qe=function(a,u){return a=u||a,o.css(a,"display")==="none"||!o.contains(a.ownerDocument,a)};function z(a,u,d,m){var E,T=1,A=20,I=m?function(){return m.cur()}:function(){return o.css(a,u,"")},Y=I(),q=d&&d[3]||(o.cssNumber[u]?"":"px"),Q=(o.cssNumber[u]||q!=="px"&&+Y)&&It.exec(o.css(a,u));if(Q&&Q[3]!==q){q=q||Q[3],d=d||[],Q=+Y||1;do T=T||".5",Q=Q/T,o.style(a,u,Q+q);while(T!==(T=I()/Y)&&T!==1&&--A)}return d&&(Q=+Q||+Y||0,E=d[1]?Q+(d[1]+1)*d[2]:+d[2],m&&(m.unit=q,m.start=Q,m.end=E)),E}var Mt=function(a,u,d,m,E,T,A){var I=0,Y=a.length,q=d==null;if(o.type(d)==="object"){E=!0;for(I in d)Mt(a,u,I,d[I],!0,T,A)}else if(m!==void 0&&(E=!0,o.isFunction(m)||(A=!0),q&&(A?(u.call(a,m),u=null):(q=u,u=function(Q,ge,be){return q.call(o(Q),be)})),u))for(;I<Y;I++)u(a[I],d,A?m:m.call(a[I],I,u(a[I],d)));return E?a:q?u.call(a):Y?u(a[0],d):T},st=/^(?:checkbox|radio)$/i,at=/<([\w:-]+)/,Ve=/^$|\/(?:java|ecma)script/i,At=/^\s+/,ze="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function N(a){var u=ze.split("|"),d=a.createDocumentFragment();if(d.createElement)for(;u.length;)d.createElement(u.pop());return d}(function(){var a=i.createElement("div"),u=i.createDocumentFragment(),d=i.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",v.leadingWhitespace=a.firstChild.nodeType===3,v.tbody=!a.getElementsByTagName("tbody").length,v.htmlSerialize=!!a.getElementsByTagName("link").length,v.html5Clone=i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",d.type="checkbox",d.checked=!0,u.appendChild(d),v.appendChecked=d.checked,a.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,u.appendChild(a),d=i.createElement("input"),d.setAttribute("type","radio"),d.setAttribute("checked","checked"),d.setAttribute("name","t"),a.appendChild(d),v.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,v.noCloneEvent=!!a.addEventListener,a[o.expando]=1,v.attributes=!a.getAttribute(o.expando)})();var R={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:v.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};R.optgroup=R.option,R.tbody=R.tfoot=R.colgroup=R.caption=R.thead,R.th=R.td;function J(a,u){var d,m,E=0,T=typeof a.getElementsByTagName<"u"?a.getElementsByTagName(u||"*"):typeof a.querySelectorAll<"u"?a.querySelectorAll(u||"*"):void 0;if(!T)for(T=[],d=a.childNodes||a;(m=d[E])!=null;E++)!u||o.nodeName(m,u)?T.push(m):o.merge(T,J(m,u));return u===void 0||u&&o.nodeName(a,u)?o.merge([a],T):T}function he(a,u){for(var d,m=0;(d=a[m])!=null;m++)o._data(d,"globalEval",!u||o._data(u[m],"globalEval"))}var xe=/<|&#?\w+;/,ue=/<tbody/i;function Xe(a){st.test(a.type)&&(a.defaultChecked=a.checked)}function Pe(a,u,d,m,E){for(var T,A,I,Y,q,Q,ge,be=a.length,_e=N(u),ot=[],nt=0;nt<be;nt++)if(A=a[nt],A||A===0)if(o.type(A)==="object")o.merge(ot,A.nodeType?[A]:A);else if(!xe.test(A))ot.push(u.createTextNode(A));else{for(Y=Y||_e.appendChild(u.createElement("div")),q=(at.exec(A)||["",""])[1].toLowerCase(),ge=R[q]||R._default,Y.innerHTML=ge[1]+o.htmlPrefilter(A)+ge[2],T=ge[0];T--;)Y=Y.lastChild;if(!v.leadingWhitespace&&At.test(A)&&ot.push(u.createTextNode(At.exec(A)[0])),!v.tbody)for(A=q==="table"&&!ue.test(A)?Y.firstChild:ge[1]==="<table>"&&!ue.test(A)?Y:0,T=A&&A.childNodes.length;T--;)o.nodeName(Q=A.childNodes[T],"tbody")&&!Q.childNodes.length&&A.removeChild(Q);for(o.merge(ot,Y.childNodes),Y.textContent="";Y.firstChild;)Y.removeChild(Y.firstChild);Y=_e.lastChild}for(Y&&_e.removeChild(Y),v.appendChecked||o.grep(J(ot,"input"),Xe),nt=0;A=ot[nt++];){if(m&&o.inArray(A,m)>-1){E&&E.push(A);continue}if(I=o.contains(A.ownerDocument,A),Y=J(_e.appendChild(A),"script"),I&&he(Y),d)for(T=0;A=Y[T++];)Ve.test(A.type||"")&&d.push(A)}return Y=null,_e}(function(){var a,u,d=i.createElement("div");for(a in{submit:!0,change:!0,focusin:!0})u="on"+a,(v[a]=u in e)||(d.setAttribute(u,"t"),v[a]=d.attributes[u].expando===!1);d=null})();var Ue=/^(?:input|select|textarea)$/i,wt=/^key/,Se=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ke=/^(?:focusinfocus|focusoutblur)$/,Je=/^([^.]*)(?:\.(.+)|)/;function Qe(){return!0}function Ne(){return!1}function St(){try{return i.activeElement}catch{}}function ct(a,u,d,m,E,T){var A,I;if(typeof u=="object"){typeof d!="string"&&(m=m||d,d=void 0);for(I in u)ct(a,I,d,m,u[I],T);return a}if(m==null&&E==null?(E=d,m=d=void 0):E==null&&(typeof d=="string"?(E=m,m=void 0):(E=m,m=d,d=void 0)),E===!1)E=Ne;else if(!E)return a;return T===1&&(A=E,E=function(Y){return o().off(Y),A.apply(this,arguments)},E.guid=A.guid||(A.guid=o.guid++)),a.each(function(){o.event.add(this,u,E,m,d)})}o.event={global:{},add:function(a,u,d,m,E){var T,A,I,Y,q,Q,ge,be,_e,ot,nt,pt=o._data(a);if(pt){for(d.handler&&(Y=d,d=Y.handler,E=Y.selector),d.guid||(d.guid=o.guid++),(A=pt.events)||(A=pt.events={}),(Q=pt.handle)||(Q=pt.handle=function(Pn){return typeof o<"u"&&(!Pn||o.event.triggered!==Pn.type)?o.event.dispatch.apply(Q.elem,arguments):void 0},Q.elem=a),u=(u||"").match(ae)||[""],I=u.length;I--;)T=Je.exec(u[I])||[],_e=nt=T[1],ot=(T[2]||"").split(".").sort(),_e&&(q=o.event.special[_e]||{},_e=(E?q.delegateType:q.bindType)||_e,q=o.event.special[_e]||{},ge=o.extend({type:_e,origType:nt,data:m,handler:d,guid:d.guid,selector:E,needsContext:E&&o.expr.match.needsContext.test(E),namespace:ot.join(".")},Y),(be=A[_e])||(be=A[_e]=[],be.delegateCount=0,(!q.setup||q.setup.call(a,m,ot,Q)===!1)&&(a.addEventListener?a.addEventListener(_e,Q,!1):a.attachEvent&&a.attachEvent("on"+_e,Q))),q.add&&(q.add.call(a,ge),ge.handler.guid||(ge.handler.guid=d.guid)),E?be.splice(be.delegateCount++,0,ge):be.push(ge),o.event.global[_e]=!0);a=null}},remove:function(a,u,d,m,E){var T,A,I,Y,q,Q,ge,be,_e,ot,nt,pt=o.hasData(a)&&o._data(a);if(!(!pt||!(Q=pt.events))){for(u=(u||"").match(ae)||[""],q=u.length;q--;){if(I=Je.exec(u[q])||[],_e=nt=I[1],ot=(I[2]||"").split(".").sort(),!_e){for(_e in Q)o.event.remove(a,_e+u[q],d,m,!0);continue}for(ge=o.event.special[_e]||{},_e=(m?ge.delegateType:ge.bindType)||_e,be=Q[_e]||[],I=I[2]&&new RegExp("(^|\\.)"+ot.join("\\.(?:.*\\.|)")+"(\\.|$)"),Y=T=be.length;T--;)A=be[T],(E||nt===A.origType)&&(!d||d.guid===A.guid)&&(!I||I.test(A.namespace))&&(!m||m===A.selector||m==="**"&&A.selector)&&(be.splice(T,1),A.selector&&be.delegateCount--,ge.remove&&ge.remove.call(a,A));Y&&!be.length&&((!ge.teardown||ge.teardown.call(a,ot,pt.handle)===!1)&&o.removeEvent(a,_e,pt.handle),delete Q[_e])}o.isEmptyObject(Q)&&(delete pt.handle,o._removeData(a,"events"))}},trigger:function(a,u,d,m){var E,T,A,I,Y,q,Q,ge=[d||i],be=x.call(a,"type")?a.type:a,_e=x.call(a,"namespace")?a.namespace.split("."):[];if(A=q=d=d||i,!(d.nodeType===3||d.nodeType===8)&&!ke.test(be+o.event.triggered)&&(be.indexOf(".")>-1&&(_e=be.split("."),be=_e.shift(),_e.sort()),T=be.indexOf(":")<0&&"on"+be,a=a[o.expando]?a:new o.Event(be,typeof a=="object"&&a),a.isTrigger=m?2:3,a.namespace=_e.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+_e.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=d),u=u==null?[a]:o.makeArray(u,[a]),Y=o.event.special[be]||{},!(!m&&Y.trigger&&Y.trigger.apply(d,u)===!1))){if(!m&&!Y.noBubble&&!o.isWindow(d)){for(I=Y.delegateType||be,ke.test(I+be)||(A=A.parentNode);A;A=A.parentNode)ge.push(A),q=A;q===(d.ownerDocument||i)&&ge.push(q.defaultView||q.parentWindow||e)}for(Q=0;(A=ge[Q++])&&!a.isPropagationStopped();)a.type=Q>1?I:Y.bindType||be,E=(o._data(A,"events")||{})[a.type]&&o._data(A,"handle"),E&&E.apply(A,u),E=T&&A[T],E&&E.apply&&Ze(A)&&(a.result=E.apply(A,u),a.result===!1&&a.preventDefault());if(a.type=be,!m&&!a.isDefaultPrevented()&&(!Y._default||Y._default.apply(ge.pop(),u)===!1)&&Ze(d)&&T&&d[be]&&!o.isWindow(d)){q=d[T],q&&(d[T]=null),o.event.triggered=be;try{d[be]()}catch{}o.event.triggered=void 0,q&&(d[T]=q)}return a.result}},dispatch:function(a){a=o.event.fix(a);var u,d,m,E,T,A=[],I=s.call(arguments),Y=(o._data(this,"events")||{})[a.type]||[],q=o.event.special[a.type]||{};if(I[0]=a,a.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,a)===!1)){for(A=o.event.handlers.call(this,a,Y),u=0;(E=A[u++])&&!a.isPropagationStopped();)for(a.currentTarget=E.elem,d=0;(T=E.handlers[d++])&&!a.isImmediatePropagationStopped();)(!a.rnamespace||a.rnamespace.test(T.namespace))&&(a.handleObj=T,a.data=T.data,m=((o.event.special[T.origType]||{}).handle||T.handler).apply(E.elem,I),m!==void 0&&(a.result=m)===!1&&(a.preventDefault(),a.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,a),a.result}},handlers:function(a,u){var d,m,E,T,A=[],I=u.delegateCount,Y=a.target;if(I&&Y.nodeType&&(a.type!=="click"||isNaN(a.button)||a.button<1)){for(;Y!=this;Y=Y.parentNode||this)if(Y.nodeType===1&&(Y.disabled!==!0||a.type!=="click")){for(m=[],d=0;d<I;d++)T=u[d],E=T.selector+" ",m[E]===void 0&&(m[E]=T.needsContext?o(E,this).index(Y)>-1:o.find(E,this,null,[Y]).length),m[E]&&m.push(T);m.length&&A.push({elem:Y,handlers:m})}}return I<u.length&&A.push({elem:this,handlers:u.slice(I)}),A},fix:function(a){if(a[o.expando])return a;var u,d,m,E=a.type,T=a,A=this.fixHooks[E];for(A||(this.fixHooks[E]=A=Se.test(E)?this.mouseHooks:wt.test(E)?this.keyHooks:{}),m=A.props?this.props.concat(A.props):this.props,a=new o.Event(T),u=m.length;u--;)d=m[u],a[d]=T[d];return a.target||(a.target=T.srcElement||i),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,A.filter?A.filter(a,T):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,u){return a.which==null&&(a.which=u.charCode!=null?u.charCode:u.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,u){var d,m,E,T=u.button,A=u.fromElement;return a.pageX==null&&u.clientX!=null&&(m=a.target.ownerDocument||i,E=m.documentElement,d=m.body,a.pageX=u.clientX+(E&&E.scrollLeft||d&&d.scrollLeft||0)-(E&&E.clientLeft||d&&d.clientLeft||0),a.pageY=u.clientY+(E&&E.scrollTop||d&&d.scrollTop||0)-(E&&E.clientTop||d&&d.clientTop||0)),!a.relatedTarget&&A&&(a.relatedTarget=A===a.target?u.toElement:A),!a.which&&T!==void 0&&(a.which=T&1?1:T&2?3:T&4?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==St()&&this.focus)try{return this.focus(),!1}catch{}},delegateType:"focusin"},blur:{trigger:function(){if(this===St()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(o.nodeName(this,"input")&&this.type==="checkbox"&&this.click)return this.click(),!1},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,u,d){var m=o.extend(new o.Event,d,{type:a,isSimulated:!0});o.event.trigger(m,null,u),m.isDefaultPrevented()&&d.preventDefault()}},o.removeEvent=i.removeEventListener?function(a,u,d){a.removeEventListener&&a.removeEventListener(u,d)}:function(a,u,d){var m="on"+u;a.detachEvent&&(typeof a[m]>"u"&&(a[m]=null),a.detachEvent(m,d))},o.Event=function(a,u){if(!(this instanceof o.Event))return new o.Event(a,u);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?Qe:Ne):this.type=a,u&&o.extend(this,u),this.timeStamp=a&&a.timeStamp||o.now(),this[o.expando]=!0},o.Event.prototype={constructor:o.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Qe,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Qe,!(!a||this.isSimulated)&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Qe,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,u){o.event.special[a]={delegateType:u,bindType:u,handle:function(d){var m,E=this,T=d.relatedTarget,A=d.handleObj;return(!T||T!==E&&!o.contains(E,T))&&(d.type=A.origType,m=A.handler.apply(this,arguments),d.type=u),m}}}),v.submit||(o.event.special.submit={setup:function(){if(o.nodeName(this,"form"))return!1;o.event.add(this,"click._submit keypress._submit",function(a){var u=a.target,d=o.nodeName(u,"input")||o.nodeName(u,"button")?o.prop(u,"form"):void 0;d&&!o._data(d,"submit")&&(o.event.add(d,"submit._submit",function(m){m._submitBubble=!0}),o._data(d,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&o.event.simulate("submit",this.parentNode,a))},teardown:function(){if(o.nodeName(this,"form"))return!1;o.event.remove(this,"._submit")}}),v.change||(o.event.special.change={setup:function(){if(Ue.test(this.nodeName))return(this.type==="checkbox"||this.type==="radio")&&(o.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._justChanged=!0)}),o.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),o.event.simulate("change",this,a)})),!1;o.event.add(this,"beforeactivate._change",function(a){var u=a.target;Ue.test(u.nodeName)&&!o._data(u,"change")&&(o.event.add(u,"change._change",function(d){this.parentNode&&!d.isSimulated&&!d.isTrigger&&o.event.simulate("change",this.parentNode,d)}),o._data(u,"change",!0))})},handle:function(a){var u=a.target;if(this!==u||a.isSimulated||a.isTrigger||u.type!=="radio"&&u.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return o.event.remove(this,"._change"),!Ue.test(this.nodeName)}}),v.focusin||o.each({focus:"focusin",blur:"focusout"},function(a,u){var d=function(m){o.event.simulate(u,m.target,o.event.fix(m))};o.event.special[u]={setup:function(){var m=this.ownerDocument||this,E=o._data(m,u);E||m.addEventListener(a,d,!0),o._data(m,u,(E||0)+1)},teardown:function(){var m=this.ownerDocument||this,E=o._data(m,u)-1;E?o._data(m,u,E):(m.removeEventListener(a,d,!0),o._removeData(m,u))}}}),o.fn.extend({on:function(a,u,d,m){return ct(this,a,u,d,m)},one:function(a,u,d,m){return ct(this,a,u,d,m,1)},off:function(a,u,d){var m,E;if(a&&a.preventDefault&&a.handleObj)return m=a.handleObj,o(a.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this;if(typeof a=="object"){for(E in a)this.off(E,u,a[E]);return this}return(u===!1||typeof u=="function")&&(d=u,u=void 0),d===!1&&(d=Ne),this.each(function(){o.event.remove(this,a,d,u)})},trigger:function(a,u){return this.each(function(){o.event.trigger(a,u,this)})},triggerHandler:function(a,u){var d=this[0];if(d)return o.event.trigger(a,u,d,!0)}});var Bt=/ jQuery\d+="(?:null|\d+)"/g,X=new RegExp("<(?:"+ze+")[\\s/>]","i"),Le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,le=/<script|<style|<link/i,de=/checked\s*(?:[^=]|=\s*.checked.)/i,Ie=/^true\/(.*)/,De=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ht=N(i),Gt=ht.appendChild(i.createElement("div"));function tn(a,u){return o.nodeName(a,"table")&&o.nodeName(u.nodeType!==11?u:u.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Lt(a){return a.type=(o.find.attr(a,"type")!==null)+"/"+a.type,a}function bn(a){var u=Ie.exec(a.type);return u?a.type=u[1]:a.removeAttribute("type"),a}function On(a,u){if(!(u.nodeType!==1||!o.hasData(a))){var d,m,E,T=o._data(a),A=o._data(u,T),I=T.events;if(I){delete A.handle,A.events={};for(d in I)for(m=0,E=I[d].length;m<E;m++)o.event.add(u,d,I[d][m])}A.data&&(A.data=o.extend({},A.data))}}function Fs(a,u){var d,m,E;if(u.nodeType===1){if(d=u.nodeName.toLowerCase(),!v.noCloneEvent&&u[o.expando]){E=o._data(u);for(m in E.events)o.removeEvent(u,m,E.handle);u.removeAttribute(o.expando)}d==="script"&&u.text!==a.text?(Lt(u).text=a.text,bn(u)):d==="object"?(u.parentNode&&(u.outerHTML=a.outerHTML),v.html5Clone&&a.innerHTML&&!o.trim(u.innerHTML)&&(u.innerHTML=a.innerHTML)):d==="input"&&st.test(a.type)?(u.defaultChecked=u.checked=a.checked,u.value!==a.value&&(u.value=a.value)):d==="option"?u.defaultSelected=u.selected=a.defaultSelected:(d==="input"||d==="textarea")&&(u.defaultValue=a.defaultValue)}}function Qn(a,u,d,m){u=l.apply([],u);var E,T,A,I,Y,q,Q=0,ge=a.length,be=ge-1,_e=u[0],ot=o.isFunction(_e);if(ot||ge>1&&typeof _e=="string"&&!v.checkClone&&de.test(_e))return a.each(function(nt){var pt=a.eq(nt);ot&&(u[0]=_e.call(this,nt,pt.html())),Qn(pt,u,d,m)});if(ge&&(q=Pe(u,a[0].ownerDocument,!1,a,m),E=q.firstChild,q.childNodes.length===1&&(q=E),E||m)){for(I=o.map(J(q,"script"),Lt),A=I.length;Q<ge;Q++)T=q,Q!==be&&(T=o.clone(T,!0,!0),A&&o.merge(I,J(T,"script"))),d.call(a[Q],T,Q);if(A)for(Y=I[I.length-1].ownerDocument,o.map(I,bn),Q=0;Q<A;Q++)T=I[Q],Ve.test(T.type||"")&&!o._data(T,"globalEval")&&o.contains(Y,T)&&(T.src?o._evalUrl&&o._evalUrl(T.src):o.globalEval((T.text||T.textContent||T.innerHTML||"").replace(De,"")));q=E=null}return a}function ei(a,u,d){for(var m,E=u?o.filter(u,a):a,T=0;(m=E[T])!=null;T++)!d&&m.nodeType===1&&o.cleanData(J(m)),m.parentNode&&(d&&o.contains(m.ownerDocument,m)&&he(J(m,"script")),m.parentNode.removeChild(m));return a}o.extend({htmlPrefilter:function(a){return a.replace(Le,"<$1></$2>")},clone:function(a,u,d){var m,E,T,A,I,Y=o.contains(a.ownerDocument,a);if(v.html5Clone||o.isXMLDoc(a)||!X.test("<"+a.nodeName+">")?T=a.cloneNode(!0):(Gt.innerHTML=a.outerHTML,Gt.removeChild(T=Gt.firstChild)),(!v.noCloneEvent||!v.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!o.isXMLDoc(a))for(m=J(T),I=J(a),A=0;(E=I[A])!=null;++A)m[A]&&Fs(E,m[A]);if(u)if(d)for(I=I||J(a),m=m||J(T),A=0;(E=I[A])!=null;A++)On(E,m[A]);else On(a,T);return m=J(T,"script"),m.length>0&&he(m,!Y&&J(a,"script")),m=I=E=null,T},cleanData:function(a,u){for(var d,m,E,T,A=0,I=o.expando,Y=o.cache,q=v.attributes,Q=o.event.special;(d=a[A])!=null;A++)if((u||Ze(d))&&(E=d[I],T=E&&Y[E],T)){if(T.events)for(m in T.events)Q[m]?o.event.remove(d,m):o.removeEvent(d,m,T.handle);Y[E]&&(delete Y[E],!q&&typeof d.removeAttribute<"u"?d.removeAttribute(I):d[I]=void 0,n.push(E))}}}),o.fn.extend({domManip:Qn,detach:function(a){return ei(this,a,!0)},remove:function(a){return ei(this,a)},text:function(a){return Mt(this,function(u){return u===void 0?o.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(u))},null,a,arguments.length)},append:function(){return Qn(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=tn(this,a);u.appendChild(a)}})},prepend:function(){return Qn(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=tn(this,a);u.insertBefore(a,u.firstChild)}})},before:function(){return Qn(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Qn(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,u=0;(a=this[u])!=null;u++){for(a.nodeType===1&&o.cleanData(J(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&o.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,u){return a=a??!1,u=u??a,this.map(function(){return o.clone(this,a,u)})},html:function(a){return Mt(this,function(u){var d=this[0]||{},m=0,E=this.length;if(u===void 0)return d.nodeType===1?d.innerHTML.replace(Bt,""):void 0;if(typeof u=="string"&&!le.test(u)&&(v.htmlSerialize||!X.test(u))&&(v.leadingWhitespace||!At.test(u))&&!R[(at.exec(u)||["",""])[1].toLowerCase()]){u=o.htmlPrefilter(u);try{for(;m<E;m++)d=this[m]||{},d.nodeType===1&&(o.cleanData(J(d,!1)),d.innerHTML=u);d=0}catch{}}d&&this.empty().append(u)},null,a,arguments.length)},replaceWith:function(){var a=[];return Qn(this,arguments,function(u){var d=this.parentNode;o.inArray(this,a)<0&&(o.cleanData(J(this)),d&&d.replaceChild(u,this))},a)}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,u){o.fn[a]=function(d){for(var m,E=0,T=[],A=o(d),I=A.length-1;E<=I;E++)m=E===I?this:this.clone(!0),o(A[E])[u](m),c.apply(T,m.get());return this.pushStack(T)}});var fi,es={HTML:"block",BODY:"block"};function ts(a,u){var d=o(u.createElement(a)).appendTo(u.body),m=o.css(d[0],"display");return d.detach(),m}function di(a){var u=i,d=es[a];return d||(d=ts(a,u),(d==="none"||!d)&&(fi=(fi||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(u.documentElement),u=(fi[0].contentWindow||fi[0].contentDocument).document,u.write(),u.close(),d=ts(a,u),fi.detach()),es[a]=d),d}var ns=/^margin/,pi=new RegExp("^("+We+")(?!px)[a-z%]+$","i"),vr=function(a,u,d,m){var E,T,A={};for(T in u)A[T]=a.style[T],a.style[T]=u[T];E=d.apply(a,m||[]);for(T in u)a.style[T]=A[T];return E},is=i.documentElement;(function(){var a,u,d,m,E,T,A=i.createElement("div"),I=i.createElement("div");if(!I.style)return;I.style.cssText="float:left;opacity:.5",v.opacity=I.style.opacity==="0.5",v.cssFloat=!!I.style.cssFloat,I.style.backgroundClip="content-box",I.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle=I.style.backgroundClip==="content-box",A=i.createElement("div"),A.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",I.innerHTML="",A.appendChild(I),v.boxSizing=I.style.boxSizing===""||I.style.MozBoxSizing===""||I.style.WebkitBoxSizing==="",o.extend(v,{reliableHiddenOffsets:function(){return a==null&&Y(),m},boxSizingReliable:function(){return a==null&&Y(),d},pixelMarginRight:function(){return a==null&&Y(),u},pixelPosition:function(){return a==null&&Y(),a},reliableMarginRight:function(){return a==null&&Y(),E},reliableMarginLeft:function(){return a==null&&Y(),T}});function Y(){var q,Q,ge=i.documentElement;ge.appendChild(A),I.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a=d=T=!1,u=E=!0,e.getComputedStyle&&(Q=e.getComputedStyle(I),a=(Q||{}).top!=="1%",T=(Q||{}).marginLeft==="2px",d=(Q||{width:"4px"}).width==="4px",I.style.marginRight="50%",u=(Q||{marginRight:"4px"}).marginRight==="4px",q=I.appendChild(i.createElement("div")),q.style.cssText=I.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",q.style.marginRight=q.style.width="0",I.style.width="1px",E=!parseFloat((e.getComputedStyle(q)||{}).marginRight),I.removeChild(q)),I.style.display="none",m=I.getClientRects().length===0,m&&(I.style.display="",I.innerHTML="<table><tr><td></td><td>t</td></tr></table>",q=I.getElementsByTagName("td"),q[0].style.cssText="margin:0;border:0;padding:0;display:none",m=q[0].offsetHeight===0,m&&(q[0].style.display="",q[1].style.display="none",m=q[0].offsetHeight===0)),ge.removeChild(A)}})();var mi,ti,Fa=/^(top|right|bottom|left)$/;e.getComputedStyle?(mi=function(a){var u=a.ownerDocument.defaultView;return u.opener||(u=e),u.getComputedStyle(a)},ti=function(a,u,d){var m,E,T,A,I=a.style;return d=d||mi(a),A=d?d.getPropertyValue(u)||d[u]:void 0,d&&(A===""&&!o.contains(a.ownerDocument,a)&&(A=o.style(a,u)),!v.pixelMarginRight()&&pi.test(A)&&ns.test(u)&&(m=I.width,E=I.minWidth,T=I.maxWidth,I.minWidth=I.maxWidth=I.width=A,A=d.width,I.width=m,I.minWidth=E,I.maxWidth=T)),A===void 0?A:A+""}):is.currentStyle&&(mi=function(a){return a.currentStyle},ti=function(a,u,d){var m,E,T,A,I=a.style;return d=d||mi(a),A=d?d[u]:void 0,A==null&&I&&I[u]&&(A=I[u]),pi.test(A)&&!Fa.test(u)&&(m=I.left,E=a.runtimeStyle,T=E&&E.left,T&&(E.left=a.currentStyle.left),I.left=u==="fontSize"?"1em":A,A=I.pixelLeft+"px",I.left=m,T&&(E.left=T)),A===void 0?A:A+""||"auto"});function rs(a,u){return{get:function(){if(a()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var ss=/alpha\([^)]*\)/i,Oa=/opacity\s*=\s*([^)]*)/i,C=/^(none|table(?!-c[ea]).+)/,K=new RegExp("^("+We+")(.*)$","i"),re={position:"absolute",visibility:"hidden",display:"block"},se={letterSpacing:"0",fontWeight:"400"},$=["Webkit","O","Moz","ms"],ye=i.createElement("div").style;function Re(a){if(a in ye)return a;for(var u=a.charAt(0).toUpperCase()+a.slice(1),d=$.length;d--;)if(a=$[d]+u,a in ye)return a}function Fe(a,u){for(var d,m,E,T=[],A=0,I=a.length;A<I;A++)m=a[A],m.style&&(T[A]=o._data(m,"olddisplay"),d=m.style.display,u?(!T[A]&&d==="none"&&(m.style.display=""),m.style.display===""&&qe(m)&&(T[A]=o._data(m,"olddisplay",di(m.nodeName)))):(E=qe(m),(d&&d!=="none"||!E)&&o._data(m,"olddisplay",E?d:o.css(m,"display"))));for(A=0;A<I;A++)m=a[A],m.style&&(!u||m.style.display==="none"||m.style.display==="")&&(m.style.display=u?T[A]||"":"none");return a}function He(a,u,d){var m=K.exec(u);return m?Math.max(0,m[1]-(d||0))+(m[2]||"px"):u}function tt(a,u,d,m,E){for(var T=d===(m?"border":"content")?4:u==="width"?1:0,A=0;T<4;T+=2)d==="margin"&&(A+=o.css(a,d+Tt[T],!0,E)),m?(d==="content"&&(A-=o.css(a,"padding"+Tt[T],!0,E)),d!=="margin"&&(A-=o.css(a,"border"+Tt[T]+"Width",!0,E))):(A+=o.css(a,"padding"+Tt[T],!0,E),d!=="padding"&&(A+=o.css(a,"border"+Tt[T]+"Width",!0,E)));return A}function et(a,u,d){var m=!0,E=u==="width"?a.offsetWidth:a.offsetHeight,T=mi(a),A=v.boxSizing&&o.css(a,"boxSizing",!1,T)==="border-box";if(i.msFullscreenElement&&e.top!==e&&a.getClientRects().length&&(E=Math.round(a.getBoundingClientRect()[u]*100)),E<=0||E==null){if(E=ti(a,u,T),(E<0||E==null)&&(E=a.style[u]),pi.test(E))return E;m=A&&(v.boxSizingReliable()||E===a.style[u]),E=parseFloat(E)||0}return E+tt(a,u,d||(A?"border":"content"),m,T)+"px"}o.extend({cssHooks:{opacity:{get:function(a,u){if(u){var d=ti(a,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:v.cssFloat?"cssFloat":"styleFloat"},style:function(a,u,d,m){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var E,T,A,I=o.camelCase(u),Y=a.style;if(u=o.cssProps[I]||(o.cssProps[I]=Re(I)||I),A=o.cssHooks[u]||o.cssHooks[I],d!==void 0){if(T=typeof d,T==="string"&&(E=It.exec(d))&&E[1]&&(d=z(a,u,E),T="number"),d==null||d!==d)return;if(T==="number"&&(d+=E&&E[3]||(o.cssNumber[I]?"":"px")),!v.clearCloneStyle&&d===""&&u.indexOf("background")===0&&(Y[u]="inherit"),!A||!("set"in A)||(d=A.set(a,d,m))!==void 0)try{Y[u]=d}catch{}}else return A&&"get"in A&&(E=A.get(a,!1,m))!==void 0?E:Y[u]}},css:function(a,u,d,m){var E,T,A,I=o.camelCase(u);return u=o.cssProps[I]||(o.cssProps[I]=Re(I)||I),A=o.cssHooks[u]||o.cssHooks[I],A&&"get"in A&&(T=A.get(a,!0,d)),T===void 0&&(T=ti(a,u,m)),T==="normal"&&u in se&&(T=se[u]),d===""||d?(E=parseFloat(T),d===!0||isFinite(E)?E||0:T):T}}),o.each(["height","width"],function(a,u){o.cssHooks[u]={get:function(d,m,E){if(m)return C.test(o.css(d,"display"))&&d.offsetWidth===0?vr(d,re,function(){return et(d,u,E)}):et(d,u,E)},set:function(d,m,E){var T=E&&mi(d);return He(d,m,E?tt(d,u,E,v.boxSizing&&o.css(d,"boxSizing",!1,T)==="border-box",T):0)}}}),v.opacity||(o.cssHooks.opacity={get:function(a,u){return Oa.test((u&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":u?"1":""},set:function(a,u){var d=a.style,m=a.currentStyle,E=o.isNumeric(u)?"alpha(opacity="+u*100+")":"",T=m&&m.filter||d.filter||"";d.zoom=1,!((u>=1||u==="")&&o.trim(T.replace(ss,""))===""&&d.removeAttribute&&(d.removeAttribute("filter"),u===""||m&&!m.filter))&&(d.filter=ss.test(T)?T.replace(ss,E):T+" "+E)}}),o.cssHooks.marginRight=rs(v.reliableMarginRight,function(a,u){if(u)return vr(a,{display:"inline-block"},ti,[a,"marginRight"])}),o.cssHooks.marginLeft=rs(v.reliableMarginLeft,function(a,u){if(u)return(parseFloat(ti(a,"marginLeft"))||(o.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-vr(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px"}),o.each({margin:"",padding:"",border:"Width"},function(a,u){o.cssHooks[a+u]={expand:function(d){for(var m=0,E={},T=typeof d=="string"?d.split(" "):[d];m<4;m++)E[a+Tt[m]+u]=T[m]||T[m-2]||T[0];return E}},ns.test(a)||(o.cssHooks[a+u].set=He)}),o.fn.extend({css:function(a,u){return Mt(this,function(d,m,E){var T,A,I={},Y=0;if(o.isArray(m)){for(T=mi(d),A=m.length;Y<A;Y++)I[m[Y]]=o.css(d,m[Y],!1,T);return I}return E!==void 0?o.style(d,m,E):o.css(d,m)},a,u,arguments.length>1)},show:function(){return Fe(this,!0)},hide:function(){return Fe(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){qe(this)?o(this).show():o(this).hide()})}});function Oe(a,u,d,m,E){return new Oe.prototype.init(a,u,d,m,E)}o.Tween=Oe,Oe.prototype={constructor:Oe,init:function(a,u,d,m,E,T){this.elem=a,this.prop=d,this.easing=E||o.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=m,this.unit=T||(o.cssNumber[d]?"":"px")},cur:function(){var a=Oe.propHooks[this.prop];return a&&a.get?a.get(this):Oe.propHooks._default.get(this)},run:function(a){var u,d=Oe.propHooks[this.prop];return this.options.duration?this.pos=u=o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=u=a,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):Oe.propHooks._default.set(this),this}},Oe.prototype.init.prototype=Oe.prototype,Oe.propHooks={_default:{get:function(a){var u;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(u=o.css(a.elem,a.prop,""),!u||u==="auto"?0:u)},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.nodeType===1&&(a.elem.style[o.cssProps[a.prop]]!=null||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Oe.propHooks.scrollTop=Oe.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},o.fx=Oe.prototype.init,o.fx.step={};var _t,Rt,Kt=/^(?:toggle|show|hide)$/,Xt=/queueHooks$/;function Ct(){return e.setTimeout(function(){_t=void 0}),_t=o.now()}function Ye(a,u){var d,m={height:a},E=0;for(u=u?1:0;E<4;E+=2-u)d=Tt[E],m["margin"+d]=m["padding"+d]=a;return u&&(m.opacity=m.width=a),m}function Jt(a,u,d){for(var m,E=(ln.tweeners[u]||[]).concat(ln.tweeners["*"]),T=0,A=E.length;T<A;T++)if(m=E[T].call(d,u,a))return m}function Dt(a,u,d){var m,E,T,A,I,Y,q,Q,ge=this,be={},_e=a.style,ot=a.nodeType&&qe(a),nt=o._data(a,"fxshow");d.queue||(I=o._queueHooks(a,"fx"),I.unqueued==null&&(I.unqueued=0,Y=I.empty.fire,I.empty.fire=function(){I.unqueued||Y()}),I.unqueued++,ge.always(function(){ge.always(function(){I.unqueued--,o.queue(a,"fx").length||I.empty.fire()})})),a.nodeType===1&&("height"in u||"width"in u)&&(d.overflow=[_e.overflow,_e.overflowX,_e.overflowY],q=o.css(a,"display"),Q=q==="none"?o._data(a,"olddisplay")||di(a.nodeName):q,Q==="inline"&&o.css(a,"float")==="none"&&(!v.inlineBlockNeedsLayout||di(a.nodeName)==="inline"?_e.display="inline-block":_e.zoom=1)),d.overflow&&(_e.overflow="hidden",v.shrinkWrapBlocks()||ge.always(function(){_e.overflow=d.overflow[0],_e.overflowX=d.overflow[1],_e.overflowY=d.overflow[2]}));for(m in u)if(E=u[m],Kt.exec(E)){if(delete u[m],T=T||E==="toggle",E===(ot?"hide":"show"))if(E==="show"&&nt&&nt[m]!==void 0)ot=!0;else continue;be[m]=nt&&nt[m]||o.style(a,m)}else q=void 0;if(o.isEmptyObject(be))(q==="none"?di(a.nodeName):q)==="inline"&&(_e.display=q);else{nt?"hidden"in nt&&(ot=nt.hidden):nt=o._data(a,"fxshow",{}),T&&(nt.hidden=!ot),ot?o(a).show():ge.done(function(){o(a).hide()}),ge.done(function(){var pt;o._removeData(a,"fxshow");for(pt in be)o.style(a,pt,be[pt])});for(m in be)A=Jt(ot?nt[m]:0,m,ge),m in nt||(nt[m]=A.start,ot&&(A.end=A.start,A.start=m==="width"||m==="height"?1:0))}}function Cn(a,u){var d,m,E,T,A;for(d in a)if(m=o.camelCase(d),E=u[m],T=a[d],o.isArray(T)&&(E=T[1],T=a[d]=T[0]),d!==m&&(a[m]=T,delete a[d]),A=o.cssHooks[m],A&&"expand"in A){T=A.expand(T),delete a[m];for(d in T)d in a||(a[d]=T[d],u[d]=E)}else u[m]=E}function ln(a,u,d){var m,E,T=0,A=ln.prefilters.length,I=o.Deferred().always(function(){delete Y.elem}),Y=function(){if(E)return!1;for(var ge=_t||Ct(),be=Math.max(0,q.startTime+q.duration-ge),_e=be/q.duration||0,ot=1-_e,nt=0,pt=q.tweens.length;nt<pt;nt++)q.tweens[nt].run(ot);return I.notifyWith(a,[q,ot,be]),ot<1&&pt?be:(I.resolveWith(a,[q]),!1)},q=I.promise({elem:a,props:o.extend({},u),opts:o.extend(!0,{specialEasing:{},easing:o.easing._default},d),originalProperties:u,originalOptions:d,startTime:_t||Ct(),duration:d.duration,tweens:[],createTween:function(ge,be){var _e=o.Tween(a,q.opts,ge,be,q.opts.specialEasing[ge]||q.opts.easing);return q.tweens.push(_e),_e},stop:function(ge){var be=0,_e=ge?q.tweens.length:0;if(E)return this;for(E=!0;be<_e;be++)q.tweens[be].run(1);return ge?(I.notifyWith(a,[q,1,0]),I.resolveWith(a,[q,ge])):I.rejectWith(a,[q,ge]),this}}),Q=q.props;for(Cn(Q,q.opts.specialEasing);T<A;T++)if(m=ln.prefilters[T].call(q,a,Q,q.opts),m)return o.isFunction(m.stop)&&(o._queueHooks(q.elem,q.opts.queue).stop=o.proxy(m.stop,m)),m;return o.map(Q,Jt,q),o.isFunction(q.opts.start)&&q.opts.start.call(a,q),o.fx.timer(o.extend(Y,{elem:a,anim:q,queue:q.opts.queue})),q.progress(q.opts.progress).done(q.opts.done,q.opts.complete).fail(q.opts.fail).always(q.opts.always)}o.Animation=o.extend(ln,{tweeners:{"*":[function(a,u){var d=this.createTween(a,u);return z(d.elem,a,It.exec(u),d),d}]},tweener:function(a,u){o.isFunction(a)?(u=a,a=["*"]):a=a.match(ae);for(var d,m=0,E=a.length;m<E;m++)d=a[m],ln.tweeners[d]=ln.tweeners[d]||[],ln.tweeners[d].unshift(u)},prefilters:[Dt],prefilter:function(a,u){u?ln.prefilters.unshift(a):ln.prefilters.push(a)}}),o.speed=function(a,u,d){var m=a&&typeof a=="object"?o.extend({},a):{complete:d||!d&&u||o.isFunction(a)&&a,duration:a,easing:d&&u||u&&!o.isFunction(u)&&u};return m.duration=o.fx.off?0:typeof m.duration=="number"?m.duration:m.duration in o.fx.speeds?o.fx.speeds[m.duration]:o.fx.speeds._default,(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(){o.isFunction(m.old)&&m.old.call(this),m.queue&&o.dequeue(this,m.queue)},m},o.fn.extend({fadeTo:function(a,u,d,m){return this.filter(qe).css("opacity",0).show().end().animate({opacity:u},a,d,m)},animate:function(a,u,d,m){var E=o.isEmptyObject(a),T=o.speed(u,d,m),A=function(){var I=ln(this,o.extend({},a),T);(E||o._data(this,"finish"))&&I.stop(!0)};return A.finish=A,E||T.queue===!1?this.each(A):this.queue(T.queue,A)},stop:function(a,u,d){var m=function(E){var T=E.stop;delete E.stop,T(d)};return typeof a!="string"&&(d=u,u=a,a=void 0),u&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var E=!0,T=a!=null&&a+"queueHooks",A=o.timers,I=o._data(this);if(T)I[T]&&I[T].stop&&m(I[T]);else for(T in I)I[T]&&I[T].stop&&Xt.test(T)&&m(I[T]);for(T=A.length;T--;)A[T].elem===this&&(a==null||A[T].queue===a)&&(A[T].anim.stop(d),E=!1,A.splice(T,1));(E||!d)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var u,d=o._data(this),m=d[a+"queue"],E=d[a+"queueHooks"],T=o.timers,A=m?m.length:0;for(d.finish=!0,o.queue(this,a,[]),E&&E.stop&&E.stop.call(this,!0),u=T.length;u--;)T[u].elem===this&&T[u].queue===a&&(T[u].anim.stop(!0),T.splice(u,1));for(u=0;u<A;u++)m[u]&&m[u].finish&&m[u].finish.call(this);delete d.finish})}}),o.each(["toggle","show","hide"],function(a,u){var d=o.fn[u];o.fn[u]=function(m,E,T){return m==null||typeof m=="boolean"?d.apply(this,arguments):this.animate(Ye(u,!0),m,E,T)}}),o.each({slideDown:Ye("show"),slideUp:Ye("hide"),slideToggle:Ye("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,u){o.fn[a]=function(d,m,E){return this.animate(u,d,m,E)}}),o.timers=[],o.fx.tick=function(){var a,u=o.timers,d=0;for(_t=o.now();d<u.length;d++)a=u[d],!a()&&u[d]===a&&u.splice(d--,1);u.length||o.fx.stop(),_t=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Rt||(Rt=e.setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){e.clearInterval(Rt),Rt=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,u){return a=o.fx&&o.fx.speeds[a]||a,u=u||"fx",this.queue(u,function(d,m){var E=e.setTimeout(d,a);m.stop=function(){e.clearTimeout(E)}})},function(){var a,u=i.createElement("input"),d=i.createElement("div"),m=i.createElement("select"),E=m.appendChild(i.createElement("option"));d=i.createElement("div"),d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=d.getElementsByTagName("a")[0],u.setAttribute("type","checkbox"),d.appendChild(u),a=d.getElementsByTagName("a")[0],a.style.cssText="top:1px",v.getSetAttribute=d.className!=="t",v.style=/top/.test(a.getAttribute("style")),v.hrefNormalized=a.getAttribute("href")==="/a",v.checkOn=!!u.value,v.optSelected=E.selected,v.enctype=!!i.createElement("form").enctype,m.disabled=!0,v.optDisabled=!E.disabled,u=i.createElement("input"),u.setAttribute("value",""),v.input=u.getAttribute("value")==="",u.value="t",u.setAttribute("type","radio"),v.radioValue=u.value==="t"}();var vn=/\r/g;o.fn.extend({val:function(a){var u,d,m,E=this[0];return arguments.length?(m=o.isFunction(a),this.each(function(T){var A;this.nodeType===1&&(m?A=a.call(this,T,o(this).val()):A=a,A==null?A="":typeof A=="number"?A+="":o.isArray(A)&&(A=o.map(A,function(I){return I==null?"":I+""})),u=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,A,"value")===void 0)&&(this.value=A))})):E?(u=o.valHooks[E.type]||o.valHooks[E.nodeName.toLowerCase()],u&&"get"in u&&(d=u.get(E,"value"))!==void 0?d:(d=E.value,typeof d=="string"?d.replace(vn,""):d??"")):void 0}}),o.extend({valHooks:{option:{get:function(a){var u=o.find.attr(a,"value");return u??o.trim(o.text(a))}},select:{get:function(a){for(var u,d,m=a.options,E=a.selectedIndex,T=a.type==="select-one"||E<0,A=T?null:[],I=T?E+1:m.length,Y=E<0?I:T?E:0;Y<I;Y++)if(d=m[Y],(d.selected||Y===E)&&(v.optDisabled?!d.disabled:d.getAttribute("disabled")===null)&&(!d.parentNode.disabled||!o.nodeName(d.parentNode,"optgroup"))){if(u=o(d).val(),T)return u;A.push(u)}return A},set:function(a,u){for(var d,m,E=a.options,T=o.makeArray(u),A=E.length;A--;)if(m=E[A],o.inArray(o.valHooks.option.get(m),T)>=0)try{m.selected=d=!0}catch{m.scrollHeight}else m.selected=!1;return d||(a.selectedIndex=-1),E}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,u){if(o.isArray(u))return a.checked=o.inArray(o(a).val(),u)>-1}},v.checkOn||(o.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})});var Bn,Vt,$t=o.expr.attrHandle,dn=/^(?:checked|selected)$/i,qt=v.getSetAttribute,nn=v.input;o.fn.extend({attr:function(a,u){return Mt(this,o.attr,a,u,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,u,d){var m,E,T=a.nodeType;if(!(T===3||T===8||T===2)){if(typeof a.getAttribute>"u")return o.prop(a,u,d);if((T!==1||!o.isXMLDoc(a))&&(u=u.toLowerCase(),E=o.attrHooks[u]||(o.expr.match.bool.test(u)?Vt:Bn)),d!==void 0){if(d===null){o.removeAttr(a,u);return}return E&&"set"in E&&(m=E.set(a,d,u))!==void 0?m:(a.setAttribute(u,d+""),d)}return E&&"get"in E&&(m=E.get(a,u))!==null?m:(m=o.find.attr(a,u),m??void 0)}},attrHooks:{type:{set:function(a,u){if(!v.radioValue&&u==="radio"&&o.nodeName(a,"input")){var d=a.value;return a.setAttribute("type",u),d&&(a.value=d),u}}}},removeAttr:function(a,u){var d,m,E=0,T=u&&u.match(ae);if(T&&a.nodeType===1)for(;d=T[E++];)m=o.propFix[d]||d,o.expr.match.bool.test(d)?nn&&qt||!dn.test(d)?a[m]=!1:a[o.camelCase("default-"+d)]=a[m]=!1:o.attr(a,d,""),a.removeAttribute(qt?d:m)}}),Vt={set:function(a,u,d){return u===!1?o.removeAttr(a,d):nn&&qt||!dn.test(d)?a.setAttribute(!qt&&o.propFix[d]||d,d):a[o.camelCase("default-"+d)]=a[d]=!0,d}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,u){var d=$t[u]||o.find.attr;nn&&qt||!dn.test(u)?$t[u]=function(m,E,T){var A,I;return T||(I=$t[E],$t[E]=A,A=d(m,E,T)!=null?E.toLowerCase():null,$t[E]=I),A}:$t[u]=function(m,E,T){if(!T)return m[o.camelCase("default-"+E)]?E.toLowerCase():null}}),(!nn||!qt)&&(o.attrHooks.value={set:function(a,u,d){if(o.nodeName(a,"input"))a.defaultValue=u;else return Bn&&Bn.set(a,u,d)}}),qt||(Bn={set:function(a,u,d){var m=a.getAttributeNode(d);if(m||a.setAttributeNode(m=a.ownerDocument.createAttribute(d)),m.value=u+="",d==="value"||u===a.getAttribute(d))return u}},$t.id=$t.name=$t.coords=function(a,u,d){var m;if(!d)return(m=a.getAttributeNode(u))&&m.value!==""?m.value:null},o.valHooks.button={get:function(a,u){var d=a.getAttributeNode(u);if(d&&d.specified)return d.value},set:Bn.set},o.attrHooks.contenteditable={set:function(a,u,d){Bn.set(a,u===""?!1:u,d)}},o.each(["width","height"],function(a,u){o.attrHooks[u]={set:function(d,m){if(m==="")return d.setAttribute(u,"auto"),m}}})),v.style||(o.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,u){return a.style.cssText=u+""}});var as=/^(?:input|select|textarea|button|object)$/i,gi=/^(?:a|area)$/i;o.fn.extend({prop:function(a,u){return Mt(this,o.prop,a,u,arguments.length>1)},removeProp:function(a){return a=o.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch{}})}}),o.extend({prop:function(a,u,d){var m,E,T=a.nodeType;if(!(T===3||T===8||T===2))return(T!==1||!o.isXMLDoc(a))&&(u=o.propFix[u]||u,E=o.propHooks[u]),d!==void 0?E&&"set"in E&&(m=E.set(a,d,u))!==void 0?m:a[u]=d:E&&"get"in E&&(m=E.get(a,u))!==null?m:a[u]},propHooks:{tabIndex:{get:function(a){var u=o.find.attr(a,"tabindex");return u?parseInt(u,10):as.test(a.nodeName)||gi.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.hrefNormalized||o.each(["href","src"],function(a,u){o.propHooks[u]={get:function(d){return d.getAttribute(u,4)}}}),v.optSelected||(o.propHooks.selected={get:function(a){var u=a.parentNode;return u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex),null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this}),v.enctype||(o.propFix.enctype="encoding");var Ba=/[\t\r\n\f]/g;function Ji(a){return o.attr(a,"class")||""}o.fn.extend({addClass:function(a){var u,d,m,E,T,A,I,Y=0;if(o.isFunction(a))return this.each(function(q){o(this).addClass(a.call(this,q,Ji(this)))});if(typeof a=="string"&&a){for(u=a.match(ae)||[];d=this[Y++];)if(E=Ji(d),m=d.nodeType===1&&(" "+E+" ").replace(Ba," "),m){for(A=0;T=u[A++];)m.indexOf(" "+T+" ")<0&&(m+=T+" ");I=o.trim(m),E!==I&&o.attr(d,"class",I)}}return this},removeClass:function(a){var u,d,m,E,T,A,I,Y=0;if(o.isFunction(a))return this.each(function(q){o(this).removeClass(a.call(this,q,Ji(this)))});if(!arguments.length)return this.attr("class","");if(typeof a=="string"&&a){for(u=a.match(ae)||[];d=this[Y++];)if(E=Ji(d),m=d.nodeType===1&&(" "+E+" ").replace(Ba," "),m){for(A=0;T=u[A++];)for(;m.indexOf(" "+T+" ")>-1;)m=m.replace(" "+T+" "," ");I=o.trim(m),E!==I&&o.attr(d,"class",I)}}return this},toggleClass:function(a,u){var d=typeof a;return typeof u=="boolean"&&d==="string"?u?this.addClass(a):this.removeClass(a):o.isFunction(a)?this.each(function(m){o(this).toggleClass(a.call(this,m,Ji(this),u),u)}):this.each(function(){var m,E,T,A;if(d==="string")for(E=0,T=o(this),A=a.match(ae)||[];m=A[E++];)T.hasClass(m)?T.removeClass(m):T.addClass(m);else(a===void 0||d==="boolean")&&(m=Ji(this),m&&o._data(this,"__className__",m),o.attr(this,"class",m||a===!1?"":o._data(this,"__className__")||""))})},hasClass:function(a){var u,d,m=0;for(u=" "+a+" ";d=this[m++];)if(d.nodeType===1&&(" "+Ji(d)+" ").replace(Ba," ").indexOf(u)>-1)return!0;return!1}}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,u){o.fn[u]=function(d,m){return arguments.length>0?this.on(u,null,d,m):this.trigger(u)}}),o.fn.extend({hover:function(a,u){return this.mouseenter(a).mouseleave(u||a)}});var Nh=e.location,ka=o.now(),Ha=/\?/,Uh=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;o.parseJSON=function(a){if(e.JSON&&e.JSON.parse)return e.JSON.parse(a+"");var u,d=null,m=o.trim(a+"");return m&&!o.trim(m.replace(Uh,function(E,T,A,I){return u&&T&&(d=0),d===0?E:(u=A||T,d+=!I-!A,"")}))?Function("return "+m)():o.error("Invalid JSON: "+a)},o.parseXML=function(a){var u,d;if(!a||typeof a!="string")return null;try{e.DOMParser?(d=new e.DOMParser,u=d.parseFromString(a,"text/xml")):(u=new e.ActiveXObject("Microsoft.XMLDOM"),u.async="false",u.loadXML(a))}catch{u=void 0}return(!u||!u.documentElement||u.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),u};var Fh=/#.*$/,Jl=/([?&])_=[^&]*/,Oh=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Bh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kh=/^(?:GET|HEAD)$/,Hh=/^\/\//,Ql=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,ec={},za={},tc="*/".concat("*"),Va=Nh.href,xr=Ql.exec(Va.toLowerCase())||[];function nc(a){return function(u,d){typeof u!="string"&&(d=u,u="*");var m,E=0,T=u.toLowerCase().match(ae)||[];if(o.isFunction(d))for(;m=T[E++];)m.charAt(0)==="+"?(m=m.slice(1)||"*",(a[m]=a[m]||[]).unshift(d)):(a[m]=a[m]||[]).push(d)}}function ic(a,u,d,m){var E={},T=a===za;function A(I){var Y;return E[I]=!0,o.each(a[I]||[],function(q,Q){var ge=Q(u,d,m);if(typeof ge=="string"&&!T&&!E[ge])return u.dataTypes.unshift(ge),A(ge),!1;if(T)return!(Y=ge)}),Y}return A(u.dataTypes[0])||!E["*"]&&A("*")}function Ga(a,u){var d,m,E=o.ajaxSettings.flatOptions||{};for(m in u)u[m]!==void 0&&((E[m]?a:d||(d={}))[m]=u[m]);return d&&o.extend(!0,a,d),a}function zh(a,u,d){for(var m,E,T,A,I=a.contents,Y=a.dataTypes;Y[0]==="*";)Y.shift(),E===void 0&&(E=a.mimeType||u.getResponseHeader("Content-Type"));if(E){for(A in I)if(I[A]&&I[A].test(E)){Y.unshift(A);break}}if(Y[0]in d)T=Y[0];else{for(A in d){if(!Y[0]||a.converters[A+" "+Y[0]]){T=A;break}m||(m=A)}T=T||m}if(T)return T!==Y[0]&&Y.unshift(T),d[T]}function Vh(a,u,d,m){var E,T,A,I,Y,q={},Q=a.dataTypes.slice();if(Q[1])for(A in a.converters)q[A.toLowerCase()]=a.converters[A];for(T=Q.shift();T;)if(a.responseFields[T]&&(d[a.responseFields[T]]=u),!Y&&m&&a.dataFilter&&(u=a.dataFilter(u,a.dataType)),Y=T,T=Q.shift(),T){if(T==="*")T=Y;else if(Y!=="*"&&Y!==T){if(A=q[Y+" "+T]||q["* "+T],!A){for(E in q)if(I=E.split(" "),I[1]===T&&(A=q[Y+" "+I[0]]||q["* "+I[0]],A)){A===!0?A=q[E]:q[E]!==!0&&(T=I[0],Q.unshift(I[1]));break}}if(A!==!0)if(A&&a.throws)u=A(u);else try{u=A(u)}catch(ge){return{state:"parsererror",error:A?ge:"No conversion from "+Y+" to "+T}}}}return{state:"success",data:u}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Va,type:"GET",isLocal:Bh.test(xr[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,u){return u?Ga(Ga(a,o.ajaxSettings),u):Ga(o.ajaxSettings,a)},ajaxPrefilter:nc(ec),ajaxTransport:nc(za),ajax:function(a,u){typeof a=="object"&&(u=a,a=void 0),u=u||{};var d,m,E,T,A,I,Y,q,Q=o.ajaxSetup({},u),ge=Q.context||Q,be=Q.context&&(ge.nodeType||ge.jquery)?o(ge):o.event,_e=o.Deferred(),ot=o.Callbacks("once memory"),nt=Q.statusCode||{},pt={},Pn={},fn=0,Ii="canceled",Ge={readyState:0,getResponseHeader:function(xt){var Zt;if(fn===2){if(!q)for(q={};Zt=Oh.exec(T);)q[Zt[1].toLowerCase()]=Zt[2];Zt=q[xt.toLowerCase()]}return Zt??null},getAllResponseHeaders:function(){return fn===2?T:null},setRequestHeader:function(xt,Zt){var Ni=xt.toLowerCase();return fn||(xt=Pn[Ni]=Pn[Ni]||xt,pt[xt]=Zt),this},overrideMimeType:function(xt){return fn||(Q.mimeType=xt),this},statusCode:function(xt){var Zt;if(xt)if(fn<2)for(Zt in xt)nt[Zt]=[nt[Zt],xt[Zt]];else Ge.always(xt[Ge.status]);return this},abort:function(xt){var Zt=xt||Ii;return Y&&Y.abort(Zt),pn(0,Zt),this}};if(_e.promise(Ge).complete=ot.add,Ge.success=Ge.done,Ge.error=Ge.fail,Q.url=((a||Q.url||Va)+"").replace(Fh,"").replace(Hh,xr[1]+"//"),Q.type=u.method||u.type||Q.method||Q.type,Q.dataTypes=o.trim(Q.dataType||"*").toLowerCase().match(ae)||[""],Q.crossDomain==null&&(d=Ql.exec(Q.url.toLowerCase()),Q.crossDomain=!!(d&&(d[1]!==xr[1]||d[2]!==xr[2]||(d[3]||(d[1]==="http:"?"80":"443"))!==(xr[3]||(xr[1]==="http:"?"80":"443"))))),Q.data&&Q.processData&&typeof Q.data!="string"&&(Q.data=o.param(Q.data,Q.traditional)),ic(ec,Q,u,Ge),fn===2)return Ge;I=o.event&&Q.global,I&&o.active++===0&&o.event.trigger("ajaxStart"),Q.type=Q.type.toUpperCase(),Q.hasContent=!kh.test(Q.type),E=Q.url,Q.hasContent||(Q.data&&(E=Q.url+=(Ha.test(E)?"&":"?")+Q.data,delete Q.data),Q.cache===!1&&(Q.url=Jl.test(E)?E.replace(Jl,"$1_="+ka++):E+(Ha.test(E)?"&":"?")+"_="+ka++)),Q.ifModified&&(o.lastModified[E]&&Ge.setRequestHeader("If-Modified-Since",o.lastModified[E]),o.etag[E]&&Ge.setRequestHeader("If-None-Match",o.etag[E])),(Q.data&&Q.hasContent&&Q.contentType!==!1||u.contentType)&&Ge.setRequestHeader("Content-Type",Q.contentType),Ge.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+tc+"; q=0.01":""):Q.accepts["*"]);for(m in Q.headers)Ge.setRequestHeader(m,Q.headers[m]);if(Q.beforeSend&&(Q.beforeSend.call(ge,Ge,Q)===!1||fn===2))return Ge.abort();Ii="abort";for(m in{success:1,error:1,complete:1})Ge[m](Q[m]);if(Y=ic(za,Q,u,Ge),!Y)pn(-1,"No Transport");else{if(Ge.readyState=1,I&&be.trigger("ajaxSend",[Ge,Q]),fn===2)return Ge;Q.async&&Q.timeout>0&&(A=e.setTimeout(function(){Ge.abort("timeout")},Q.timeout));try{fn=1,Y.send(pt,pn)}catch(xt){if(fn<2)pn(-1,xt);else throw xt}}function pn(xt,Zt,Ni,Bs){var kn,Qi,Ui,Fi,An,Hn=Zt;fn!==2&&(fn=2,A&&e.clearTimeout(A),Y=void 0,T=Bs||"",Ge.readyState=xt>0?4:0,kn=xt>=200&&xt<300||xt===304,Ni&&(Fi=zh(Q,Ge,Ni)),Fi=Vh(Q,Fi,Ge,kn),kn?(Q.ifModified&&(An=Ge.getResponseHeader("Last-Modified"),An&&(o.lastModified[E]=An),An=Ge.getResponseHeader("etag"),An&&(o.etag[E]=An)),xt===204||Q.type==="HEAD"?Hn="nocontent":xt===304?Hn="notmodified":(Hn=Fi.state,Qi=Fi.data,Ui=Fi.error,kn=!Ui)):(Ui=Hn,(xt||!Hn)&&(Hn="error",xt<0&&(xt=0))),Ge.status=xt,Ge.statusText=(Zt||Hn)+"",kn?_e.resolveWith(ge,[Qi,Hn,Ge]):_e.rejectWith(ge,[Ge,Hn,Ui]),Ge.statusCode(nt),nt=void 0,I&&be.trigger(kn?"ajaxSuccess":"ajaxError",[Ge,Q,kn?Qi:Ui]),ot.fireWith(ge,[Ge,Hn]),I&&(be.trigger("ajaxComplete",[Ge,Q]),--o.active||o.event.trigger("ajaxStop")))}return Ge},getJSON:function(a,u,d){return o.get(a,u,d,"json")},getScript:function(a,u){return o.get(a,void 0,u,"script")}}),o.each(["get","post"],function(a,u){o[u]=function(d,m,E,T){return o.isFunction(m)&&(T=T||E,E=m,m=void 0),o.ajax(o.extend({url:d,type:u,dataType:T,data:m,success:E},o.isPlainObject(d)&&d))}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},o.fn.extend({wrapAll:function(a){if(o.isFunction(a))return this.each(function(d){o(this).wrapAll(a.call(this,d))});if(this[0]){var u=o(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},wrapInner:function(a){return o.isFunction(a)?this.each(function(u){o(this).wrapInner(a.call(this,u))}):this.each(function(){var u=o(this),d=u.contents();d.length?d.wrapAll(a):u.append(a)})},wrap:function(a){var u=o.isFunction(a);return this.each(function(d){o(this).wrapAll(u?a.call(this,d):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}});function Gh(a){return a.style&&a.style.display||o.css(a,"display")}function Wh(a){for(;a&&a.nodeType===1;){if(Gh(a)==="none"||a.type==="hidden")return!0;a=a.parentNode}return!1}o.expr.filters.hidden=function(a){return v.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Wh(a)},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var Xh=/%20/g,jh=/\[\]$/,rc=/\r?\n/g,qh=/^(?:submit|button|image|reset|file)$/i,Yh=/^(?:input|select|textarea|keygen)/i;function Wa(a,u,d,m){var E;if(o.isArray(u))o.each(u,function(T,A){d||jh.test(a)?m(a,A):Wa(a+"["+(typeof A=="object"&&A!=null?T:"")+"]",A,d,m)});else if(!d&&o.type(u)==="object")for(E in u)Wa(a+"["+E+"]",u[E],d,m);else m(a,u)}o.param=function(a,u){var d,m=[],E=function(T,A){A=o.isFunction(A)?A():A??"",m[m.length]=encodeURIComponent(T)+"="+encodeURIComponent(A)};if(u===void 0&&(u=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){E(this.name,this.value)});else for(d in a)Wa(d,a[d],u,E);return m.join("&").replace(Xh,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Yh.test(this.nodeName)&&!qh.test(a)&&(this.checked||!st.test(a))}).map(function(a,u){var d=o(this).val();return d==null?null:o.isArray(d)?o.map(d,function(m){return{name:u.name,value:m.replace(rc,`\r
`)}}):{name:u.name,value:d.replace(rc,`\r
`)}}).get()}}),o.ajaxSettings.xhr=e.ActiveXObject!==void 0?function(){return this.isLocal?sc():i.documentMode>8?Xa():/^(get|post|head|put|delete|options)$/i.test(this.type)&&Xa()||sc()}:Xa;var Kh=0,Os={},os=o.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var a in Os)Os[a](void 0,!0)}),v.cors=!!os&&"withCredentials"in os,os=v.ajax=!!os,os&&o.ajaxTransport(function(a){if(!a.crossDomain||v.cors){var u;return{send:function(d,m){var E,T=a.xhr(),A=++Kh;if(T.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(E in a.xhrFields)T[E]=a.xhrFields[E];a.mimeType&&T.overrideMimeType&&T.overrideMimeType(a.mimeType),!a.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(E in d)d[E]!==void 0&&T.setRequestHeader(E,d[E]+"");T.send(a.hasContent&&a.data||null),u=function(I,Y){var q,Q,ge;if(u&&(Y||T.readyState===4))if(delete Os[A],u=void 0,T.onreadystatechange=o.noop,Y)T.readyState!==4&&T.abort();else{ge={},q=T.status,typeof T.responseText=="string"&&(ge.text=T.responseText);try{Q=T.statusText}catch{Q=""}!q&&a.isLocal&&!a.crossDomain?q=ge.text?200:404:q===1223&&(q=204)}ge&&m(q,Q,ge,T.getAllResponseHeaders())},a.async?T.readyState===4?e.setTimeout(u):T.onreadystatechange=Os[A]=u:u()},abort:function(){u&&u(void 0,!0)}}}});function Xa(){try{return new e.XMLHttpRequest}catch{}}function sc(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch{}}o.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),o.ajaxTransport("script",function(a){if(a.crossDomain){var u,d=i.head||o("head")[0]||i.documentElement;return{send:function(m,E){u=i.createElement("script"),u.async=!0,a.scriptCharset&&(u.charset=a.scriptCharset),u.src=a.url,u.onload=u.onreadystatechange=function(T,A){(A||!u.readyState||/loaded|complete/.test(u.readyState))&&(u.onload=u.onreadystatechange=null,u.parentNode&&u.parentNode.removeChild(u),u=null,A||E(200,"success"))},d.insertBefore(u,d.firstChild)},abort:function(){u&&u.onload(void 0,!0)}}}});var ac=[],ja=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ac.pop()||o.expando+"_"+ka++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(a,u,d){var m,E,T,A=a.jsonp!==!1&&(ja.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ja.test(a.data)&&"data");if(A||a.dataTypes[0]==="jsonp")return m=a.jsonpCallback=o.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,A?a[A]=a[A].replace(ja,"$1"+m):a.jsonp!==!1&&(a.url+=(Ha.test(a.url)?"&":"?")+a.jsonp+"="+m),a.converters["script json"]=function(){return T||o.error(m+" was not called"),T[0]},a.dataTypes[0]="json",E=e[m],e[m]=function(){T=arguments},d.always(function(){E===void 0?o(e).removeProp(m):e[m]=E,a[m]&&(a.jsonpCallback=u.jsonpCallback,ac.push(m)),T&&o.isFunction(E)&&E(T[0]),T=E=void 0}),"script"}),v.createHTMLDocument=function(){if(!i.implementation.createHTMLDocument)return!1;var a=i.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",a.body.childNodes.length===2}(),o.parseHTML=function(a,u,d){if(!a||typeof a!="string")return null;typeof u=="boolean"&&(d=u,u=!1),u=u||(v.createHTMLDocument?i.implementation.createHTMLDocument(""):i);var m=Z.exec(a),E=!d&&[];return m?[u.createElement(m[1])]:(m=Pe([a],u,E),E&&E.length&&o(E).remove(),o.merge([],m.childNodes))};var oc=o.fn.load;o.fn.load=function(a,u,d){if(typeof a!="string"&&oc)return oc.apply(this,arguments);var m,E,T,A=this,I=a.indexOf(" ");return I>-1&&(m=o.trim(a.slice(I,a.length)),a=a.slice(0,I)),o.isFunction(u)?(d=u,u=void 0):u&&typeof u=="object"&&(E="POST"),A.length>0&&o.ajax({url:a,type:E||"GET",dataType:"html",data:u}).done(function(Y){T=arguments,A.html(m?o("<div>").append(o.parseHTML(Y)).find(m):Y)}).always(d&&function(Y,q){A.each(function(){d.apply(A,T||[Y.responseText,q,Y])})}),this},o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,u){o.fn[u]=function(d){return this.on(u,d)}}),o.expr.filters.animated=function(a){return o.grep(o.timers,function(u){return a===u.elem}).length};function lc(a){return o.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}o.offset={setOffset:function(a,u,d){var m,E,T,A,I,Y,q,Q=o.css(a,"position"),ge=o(a),be={};Q==="static"&&(a.style.position="relative"),I=ge.offset(),T=o.css(a,"top"),Y=o.css(a,"left"),q=(Q==="absolute"||Q==="fixed")&&o.inArray("auto",[T,Y])>-1,q?(m=ge.position(),A=m.top,E=m.left):(A=parseFloat(T)||0,E=parseFloat(Y)||0),o.isFunction(u)&&(u=u.call(a,d,o.extend({},I))),u.top!=null&&(be.top=u.top-I.top+A),u.left!=null&&(be.left=u.left-I.left+E),"using"in u?u.using.call(a,be):ge.css(be)}},o.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(A){o.offset.setOffset(this,a,A)});var u,d,m={top:0,left:0},E=this[0],T=E&&E.ownerDocument;if(T)return u=T.documentElement,o.contains(u,E)?(typeof E.getBoundingClientRect<"u"&&(m=E.getBoundingClientRect()),d=lc(T),{top:m.top+(d.pageYOffset||u.scrollTop)-(u.clientTop||0),left:m.left+(d.pageXOffset||u.scrollLeft)-(u.clientLeft||0)}):m},position:function(){if(this[0]){var a,u,d={top:0,left:0},m=this[0];return o.css(m,"position")==="fixed"?u=m.getBoundingClientRect():(a=this.offsetParent(),u=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=o.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:u.top-d.top-o.css(m,"marginTop",!0),left:u.left-d.left-o.css(m,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&!o.nodeName(a,"html")&&o.css(a,"position")==="static";)a=a.offsetParent;return a||is})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,u){var d=/Y/.test(u);o.fn[a]=function(m){return Mt(this,function(E,T,A){var I=lc(E);if(A===void 0)return I?u in I?I[u]:I.document.documentElement[T]:E[T];I?I.scrollTo(d?o(I).scrollLeft():A,d?A:o(I).scrollTop()):E[T]=A},a,m,arguments.length,null)}}),o.each(["top","left"],function(a,u){o.cssHooks[u]=rs(v.pixelPosition,function(d,m){if(m)return m=ti(d,u),pi.test(m)?o(d).position()[u]+"px":m})}),o.each({Height:"height",Width:"width"},function(a,u){o.each({padding:"inner"+a,content:u,"":"outer"+a},function(d,m){o.fn[m]=function(E,T){var A=arguments.length&&(d||typeof E!="boolean"),I=d||(E===!0||T===!0?"margin":"border");return Mt(this,function(Y,q,Q){var ge;return o.isWindow(Y)?Y.document.documentElement["client"+a]:Y.nodeType===9?(ge=Y.documentElement,Math.max(Y.body["scroll"+a],ge["scroll"+a],Y.body["offset"+a],ge["offset"+a],ge["client"+a])):Q===void 0?o.css(Y,q,I):o.style(Y,q,Q,I)},u,A?E:void 0,A,null)}})}),o.fn.extend({bind:function(a,u,d){return this.on(a,null,u,d)},unbind:function(a,u){return this.off(a,null,u)},delegate:function(a,u,d,m){return this.on(u,a,d,m)},undelegate:function(a,u,d){return arguments.length===1?this.off(a,"**"):this.off(u,a||"**",d)}}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack;var $h=e.jQuery,Zh=e.$;return o.noConflict=function(a){return e.$===o&&(e.$=Zh),a&&e.jQuery===o&&(e.jQuery=$h),o},t||(e.jQuery=e.$=o),o})}(Aa)),Aa.exports}var yx=Ih();const en=vx(yx);var zu={},Vu;function Mx(){if(Vu)return zu;Vu=1;var r=Ih(),e,t="",n=Math.PI,i=n/2,s="ontouchstart"in window,l=s?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},c={backward:["bl","tl"],forward:["br","tr"],all:["tl","bl","tr","br"]},h=["single","double"],f={page:1,gradients:!0,duration:600,acceleration:!0,display:"double",when:null},g={folding:null,corners:"forward",cornerSize:100,gradients:!0,duration:600,acceleration:!0},x=6,v={0:{top:0,left:0,right:"auto",bottom:"auto"},1:{top:0,right:0,left:"auto",bottom:"auto"}},S=function(p,_,b,D){return{css:{position:"absolute",top:p,left:_,overflow:D||"hidden","z-index":b||"auto"}}},o=function(p,_,b,D,O){var V=1-O,ee=V*V*V,ne=O*O*O;return M(Math.round(ee*p.x+3*O*V*V*_.x+3*O*O*V*b.x+ne*D.x),Math.round(ee*p.y+3*O*V*V*_.y+3*O*O*V*b.y+ne*D.y))},w=function(p){return p/n*180},M=function(p,_){return{x:p,y:_}},y=function(p,_,b){return e&&b?" translate3d("+p+"px,"+_+"px, 0px) ":" translate("+p+"px, "+_+"px) "},F=function(p){return" rotate("+p+"deg) "},U=function(p,_){return Object.prototype.hasOwnProperty.call(_,p)},L=function(){for(var p=["Moz","Webkit","Khtml","O","ms"],_=p.length,b="";_--;)p[_]+"Transform"in document.body.style&&(b="-"+p[_].toLowerCase()+"-");return b},G=function(p,_,b,D,O){var V,ee=[];if(t=="-webkit-"){for(V=0;V<O;V++)ee.push("color-stop("+D[V][0]+", "+D[V][1]+")");p.css({"background-image":"-webkit-gradient(linear, "+_.x+"% "+_.y+"%,  "+b.x+"% "+b.y+"%, "+ee.join(",")+" )"})}else{_={x:_.x/100*p.width(),y:_.y/100*p.height()},b={x:b.x/100*p.width(),y:b.y/100*p.height()};var ne=b.x-_.x,ae=b.y-_.y,ie=Math.atan2(ae,ne),me=ie-Math.PI/2,Ee=Math.abs(p.width()*Math.sin(me))+Math.abs(p.height()*Math.cos(me)),Me=Math.sqrt(ae*ae+ne*ne),Be=M(b.x<_.x?p.width():0,b.y<_.y?p.height():0),Ze=Math.tan(ie),ce=-1/Ze,ve=(ce*Be.x-Be.y-Ze*_.x+_.y)/(ce-Ze),we={x:ve,y:ce*ve-ce*Be.x+Be.y},Te=Math.sqrt(Math.pow(we.x-_.x,2)+Math.pow(we.y-_.y,2));for(V=0;V<O;V++)ee.push(" "+D[V][1]+" "+(Te+Me*D[V][0])*100/Ee+"%");p.css({"background-image":t+"linear-gradient("+-ie+"rad,"+ee.join(",")+")"})}},k={init:function(p){e===void 0&&(e="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style,t=L());var _,b=this.data(),D=this.children();if(p=r.extend({width:this.width(),height:this.height()},f,p),b.opts=p,b.pageObjs={},b.pages={},b.pageWrap={},b.pagePlace={},b.pageMv=[],b.totalPages=p.pages||0,p.when)for(_ in p.when)U(_,p.when)&&this.bind(_,p.when[_]);for(this.css({position:"relative",width:p.width,height:p.height}),this.turn("display",p.display),e&&!s&&p.acceleration&&this.transform(y(0,0,!0)),_=0;_<D.length;_++)this.turn("addPage",D[_],_+1);return this.turn("page",p.page),c=r.extend({},c,p.corners),r(this).bind(l.start,function(O){for(var V in b.pages)if(U(V,b.pages)&&B._eventStart.call(b.pages[V],O)===!1)return!1}),r(document).bind(l.move,function(O){for(var V in b.pages)U(V,b.pages)&&B._eventMove.call(b.pages[V],O)}).bind(l.end,function(O){for(var V in b.pages)U(V,b.pages)&&B._eventEnd.call(b.pages[V],O)}),b.done=!0,this},addPage:function(p,_){var b=!1,D=this.data(),O=D.totalPages+1;if(_){if(_==O)_=O,b=!0;else if(_>O)throw new Error('It is impossible to add the page "'+_+'", the maximum value is: "'+O+'"')}else _=O,b=!0;return _>=1&&_<=O&&(D.done&&this.turn("stop"),_ in D.pageObjs&&k._movePages.call(this,_,1),b&&(D.totalPages=O),D.pageObjs[_]=r(p).addClass("turn-page p"+_),k._addPage.call(this,_),D.done&&this.turn("update"),k._removeFromDOM.call(this)),this},_addPage:function(p){var _=this.data(),b=_.pageObjs[p];if(b)if(k._necessPage.call(this,p)){if(!_.pageWrap[p]){var D=_.display=="double"?this.width()/2:this.width(),O=this.height();b.css({width:D,height:O}),_.pagePlace[p]=p,_.pageWrap[p]=r("<div/>",{class:"turn-page-wrapper",page:p,css:{position:"absolute",overflow:"hidden",width:D,height:O}}).css(v[_.display=="double"?p%2:0]),this.append(_.pageWrap[p]),_.pageWrap[p].prepend(_.pageObjs[p])}(!p||k._setPageLoc.call(this,p)==1)&&k._makeFlip.call(this,p)}else _.pagePlace[p]=0,_.pageObjs[p]&&_.pageObjs[p].remove()},hasPage:function(p){return p in this.data().pageObjs},_makeFlip:function(p){var _=this.data();if(!_.pages[p]&&_.pagePlace[p]==p){var b=_.display=="single",D=p%2;_.pages[p]=_.pageObjs[p].css({width:b?this.width():this.width()/2,height:this.height()}).flip({page:p,next:b&&p===_.totalPages?p-1:D||b?p+1:p-1,turn:this,duration:_.opts.duration,acceleration:_.opts.acceleration,corners:b?"all":D?"forward":"backward",backGradient:_.opts.gradients,frontGradient:_.opts.gradients}).flip("disable",_.disabled).bind("pressed",k._pressed).bind("released",k._released).bind("start",k._start).bind("end",k._end).bind("flip",k._flip)}return _.pages[p]},_makeRange:function(){var p;this.data();var _=this.turn("range");for(p=_[0];p<=_[1];p++)k._addPage.call(this,p)},range:function(p){var _,b,D,O=this.data();p=p||O.tpage||O.page;var V=k._view.call(this,p);if(p<1||p>O.totalPages)throw new Error('"'+p+'" is not a page for range');return V[1]=V[1]||V[0],V[0]>=1&&V[1]<=O.totalPages?(_=Math.floor((x-2)/2),O.totalPages-V[1]>V[0]?(b=Math.min(V[0]-1,_),D=2*_-b):(D=Math.min(O.totalPages-V[1],_),b=2*_-D)):(b=x-1,D=x-1),[Math.max(1,V[0]-b),Math.min(O.totalPages,V[1]+D)]},_necessPage:function(p){if(p===0)return!0;var _=this.turn("range");return p>=_[0]&&p<=_[1]},_removeFromDOM:function(){var p,_=this.data();for(p in _.pageWrap)U(p,_.pageWrap)&&!k._necessPage.call(this,p)&&k._removePageFromDOM.call(this,p)},_removePageFromDOM:function(p){var _=this.data();if(_.pages[p]){var b=_.pages[p].data();b.f&&b.f.fwrapper&&b.f.fwrapper.remove(),_.pages[p].remove(),delete _.pages[p]}_.pageObjs[p]&&_.pageObjs[p].remove(),_.pageWrap[p]&&(_.pageWrap[p].remove(),delete _.pageWrap[p]),delete _.pagePlace[p]},removePage:function(p){var _=this.data();return _.pageObjs[p]&&(this.turn("stop"),k._removePageFromDOM.call(this,p),delete _.pageObjs[p],k._movePages.call(this,p,-1),_.totalPages=_.totalPages-1,k._makeRange.call(this),_.page>_.totalPages&&this.turn("page",_.totalPages)),this},_movePages:function(p,_){var b,D=this.data(),O=D.display=="single",V=function(ee){var ne=ee+_,ae=ne%2;D.pageObjs[ee]&&(D.pageObjs[ne]=D.pageObjs[ee].removeClass("page"+ee).addClass("page"+ne)),D.pagePlace[ee]&&D.pageWrap[ee]&&(D.pagePlace[ne]=ne,D.pageWrap[ne]=D.pageWrap[ee].css(v[O?0:ae]).attr("page",ne),D.pages[ee]&&(D.pages[ne]=D.pages[ee].flip("options",{page:ne,next:O||ae?ne+1:ne-1,corners:O?"all":ae?"forward":"backward"})),_&&(delete D.pages[ee],delete D.pagePlace[ee],delete D.pageObjs[ee],delete D.pageWrap[ee],delete D.pageObjs[ee]))};if(_>0)for(b=D.totalPages;b>=p;b--)V(b);else for(b=p;b<=D.totalPages;b++)V(b)},display:function(p){var _=this.data(),b=_.display;if(p){if(r.inArray(p,h)==-1)throw new Error('"'+p+'" is not a value for display');if(p=="single"?_.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),_.pageObjs[0]=r("<div />",{class:"turn-page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this)):_.pageObjs[0]&&(this.turn("stop").css({overflow:""}),_.pageObjs[0].remove(),delete _.pageObjs[0]),_.display=p,b){var D=this.turn("size");k._movePages.call(this,1,0),this.turn("size",D.width,D.height).turn("update")}return this}else return b},animating:function(){return this.data().pageMv.length>0},disable:function(p){var _,b=this.data(),D=this.turn("view");b.disabled=p===void 0||p===!0;for(_ in b.pages)U(_,b.pages)&&b.pages[_].flip("disable",p?r.inArray(_,D):!1);return this},size:function(p,_){if(p&&_){var b=this.data(),D=b.display=="double"?p/2:p,O;this.css({width:p,height:_}),b.pageObjs[0]&&b.pageObjs[0].css({width:D,height:_});for(O in b.pageWrap)U(O,b.pageWrap)&&(b.pageObjs[O].css({width:D,height:_}),b.pageWrap[O].css({width:D,height:_}),b.pages[O]&&b.pages[O].css({width:D,height:_}));return this.turn("resize"),this}else return{width:this.width(),height:this.height()}},resize:function(){var p,_=this.data();for(_.pages[0]&&(_.pageWrap[0].css({left:-this.width()}),_.pages[0].flip("resize",!0)),p=1;p<=_.totalPages;p++)_.pages[p]&&_.pages[p].flip("resize",!0)},_removeMv:function(p){var _,b=this.data();for(_=0;_<b.pageMv.length;_++)if(b.pageMv[_]==p)return b.pageMv.splice(_,1),!0;return!1},_addMv:function(p){var _=this.data();k._removeMv.call(this,p),_.pageMv.push(p)},_view:function(p){var _=this.data();return p=p||_.page,_.display=="double"?p%2?[p-1,p]:[p,p+1]:[p]},view:function(p){var _=this.data(),b=k._view.call(this,p);return _.display=="double"?[b[0]>0?b[0]:0,b[1]<=_.totalPages?b[1]:0]:[b[0]>0&&b[0]<=_.totalPages?b[0]:0]},stop:function(p){var _,b,D=this.data(),O=D.pageMv;D.pageMv=[],D.tpage&&(D.page=D.tpage,delete D.tpage);for(_ in O)U(_,O)&&(b=D.pages[O[_]].data().f.opts,B._moveFoldingPage.call(D.pages[O[_]],null),D.pages[O[_]].flip("hideFoldedPage"),D.pagePlace[b.next]=b.next,b.force&&(b.next=b.page%2===0?b.page-1:b.page+1,delete b.force));return this.turn("update"),this},pages:function(p){var _=this.data();if(p){if(p<_.totalPages){for(var b=p+1;b<=_.totalPages;b++)this.turn("removePage",b);this.turn("page")>p&&this.turn("page",p)}return _.totalPages=p,this}else return _.totalPages},_fitPage:function(p,_){var b=this.data(),D=this.turn("view",p);b.page!=p&&(this.trigger("turning",[p,D]),r.inArray(1,D)!=-1&&this.trigger("first"),r.inArray(b.totalPages,D)!=-1&&this.trigger("last")),b.pageObjs[p]&&(b.tpage=p,this.turn("stop",_),k._removeFromDOM.call(this),k._makeRange.call(this),this.trigger("turned",[p,D]))},_turnPage:function(p){var _,b,D=this.data(),O=this.turn("view"),V=this.turn("view",p);if(D.page!=p&&(this.trigger("turning",[p,V]),r.inArray(1,V)!=-1&&this.trigger("first"),r.inArray(D.totalPages,V)!=-1&&this.trigger("last")),!!D.pageObjs[p]&&(D.tpage=p,this.turn("stop"),k._makeRange.call(this),D.display=="single"?(_=O[0],b=V[0]):O[1]&&p>O[1]?(_=O[1],b=V[0]):O[0]&&p<O[0]&&(_=O[0],b=V[1]),D.pages[_])){var ee=D.pages[_].data().f.opts;D.tpage=b,ee.next!=b&&(ee.next=b,D.pagePlace[b]=ee.page,ee.force=!0),D.display=="single"?D.pages[_].flip("turnPage",V[0]>O[0]?"br":"bl"):D.pages[_].flip("turnPage")}},page:function(p){p=parseInt(p,10);var _=this.data();return p>0&&p<=_.totalPages?(!_.done||r.inArray(p,this.turn("view"))!=-1?k._fitPage.call(this,p):k._turnPage.call(this,p),this):_.page},next:function(){var p=this.data();return this.turn("page",k._view.call(this,p.page).pop()+1)},previous:function(){var p=this.data();return this.turn("page",k._view.call(this,p.page).shift()-1)},_addMotionPage:function(){var p=r(this).data().f.opts,_=p.turn,b=_.data();p.pageMv=p.page,k._addMv.call(_,p.pageMv),b.pagePlace[p.next]=p.page,_.turn("update")},_start:function(p,_,b){var D=_.turn.data(),O=r.Event("start");if(p.stopPropagation(),_.turn.trigger(O,[_,b]),O.isDefaultPrevented()){p.preventDefault();return}if(D.display=="single"){var V=b.charAt(1)=="l";_.page==1&&V||_.page==D.totalPages&&!V?p.preventDefault():V?(_.next=_.next<_.page?_.next:_.page-1,_.force=!0):_.next=_.next>_.page?_.next:_.page+1}k._addMotionPage.call(this)},_end:function(p,_){var b=r(this),D=b.data().f,O=D.opts,V=O.turn,ee=V.data();p.stopPropagation(),_||ee.tpage?(ee.tpage==O.next||ee.tpage==O.page)&&(delete ee.tpage,k._fitPage.call(V,ee.tpage||O.next,!0)):(k._removeMv.call(V,O.pageMv),V.turn("update"))},_pressed:function(){var p,_=r(this),b=_.data().f,D=b.opts.turn,O=D.data().pages;for(p in O)p!=b.opts.page&&O[p].flip("disable",!0);return b.time=new Date().getTime()},_released:function(p,_){var b=r(this),D=b.data().f;p.stopPropagation(),(new Date().getTime()-D.time<200||_.x<0||_.x>r(this).width())&&(p.preventDefault(),D.opts.turn.data().tpage=D.opts.next,D.opts.turn.turn("update"),r(b).flip("turnPage"))},_flip:function(){var p=r(this).data().f.opts;p.turn.trigger("turn",[p.next])},calculateZ:function(p){var _,b,D,O,V,ee=this,ne=this.data(),ae=this.turn("view"),ie=ae[0]||ae[1],me={pageZ:{},partZ:{},pageV:{}},Ee=function(Me){var Be=ee.turn("view",Me);Be[0]&&(me.pageV[Be[0]]=!0),Be[1]&&(me.pageV[Be[1]]=!0)};for(_=0;_<p.length;_++)b=p[_],D=ne.pages[b].data().f.opts.next,O=ne.pagePlace[b],Ee(b),Ee(D),V=ne.pagePlace[D]==D?D:b,me.pageZ[V]=ne.totalPages-Math.abs(ie-V),me.partZ[O]=ne.totalPages*2+Math.abs(ie-V);return me},update:function(){var p,_=this.data();if(_.pageMv.length&&_.pageMv[0]!==0){var b=this.turn("calculateZ",_.pageMv),D=this.turn("view",_.tpage);_.pagePlace[D[0]]==D[0]?D[0]:_.pagePlace[D[1]]==D[1]&&D[1];for(p in _.pageWrap)U(p,_.pageWrap)&&(_.pageWrap[p].css({display:b.pageV[p]?"":"none","z-index":b.pageZ[p]||0}),_.pages[p]&&(_.pages[p].flip("z",b.partZ[p]||null),b.pageV[p]&&_.pages[p].flip("resize"),_.tpage&&_.pages[p].flip("disable",!0)))}else for(p in _.pageWrap)if(U(p,_.pageWrap)){var O=k._setPageLoc.call(this,p);_.pages[p]&&_.pages[p].flip("disable",_.disabled||O!=1).flip("z",null)}},_setPageLoc:function(p){var _=this.data(),b=this.turn("view");return p==b[0]||p==b[1]?(_.pageWrap[p].css({"z-index":_.totalPages,display:""}),1):_.display=="single"&&p==b[0]+1||_.display=="double"&&p==b[0]-2||p==b[1]+2?(_.pageWrap[p].css({"z-index":_.totalPages-1,display:""}),2):(_.pageWrap[p].css({"z-index":0,display:"none"}),0)}},B={init:function(p){return p.gradients&&(p.frontGradient=!0,p.backGradient=!0),this.data({f:{}}),this.flip("options",p),B._addPageWrapper.call(this),this},setData:function(p){var _=this.data();return _.f=r.extend(_.f,p),this},options:function(p){var _=this.data().f;return p?(B.setData.call(this,{opts:r.extend({},_.opts||g,p)}),this):_.opts},z:function(p){var _=this.data().f;return _.opts["z-index"]=p,_.fwrapper.css({"z-index":p||parseInt(_.parent.css("z-index"),10)||0}),this},_cAllowed:function(){return c[this.data().f.opts.corners]||this.data().f.opts.corners},_cornerActivated:function(p){if(p.originalEvent===void 0)return!1;p=s?p.originalEvent.touches:[p];var _=this.data().f,b=_.parent.offset(),D=this.width(),O=this.height(),V={x:Math.max(0,p[0].pageX-b.left),y:Math.max(0,p[0].pageY-b.top)},ee=_.opts.cornerSize,ne=B._cAllowed.call(this);if(V.x<=0||V.y<=0||V.x>=D||V.y>=O)return!1;if(V.y<ee)V.corner="t";else if(V.y>=O-ee)V.corner="b";else return!1;if(V.x<=ee)V.corner+="l";else if(V.x>=D-ee)V.corner+="r";else return!1;return r.inArray(V.corner,ne)==-1?!1:V},_c:function(p,_){return _=_||0,{tl:M(_,_),tr:M(this.width()-_,_),bl:M(_,this.height()-_),br:M(this.width()-_,this.height()-_)}[p]},_c2:function(p){return{tl:M(this.width()*2,0),tr:M(-this.width(),0),bl:M(this.width()*2,this.height()),br:M(-this.width(),this.height())}[p]},_foldingPage:function(p){var _=this.data().f.opts;if(_.folding)return _.folding;if(_.turn){var b=_.turn.data();return b.display=="single"?b.pageObjs[_.next]?b.pageObjs[0]:null:b.pageObjs[_.next]}},_backGradient:function(){var p=this.data().f,_=p.opts.turn,b=p.opts.backGradient&&(!_||_.data().display=="single"||p.opts.page!=2&&p.opts.page!=_.data().totalPages-1);return b&&!p.bshadow&&(p.bshadow=r("<div/>",S(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(p.parent)),b},resize:function(p){var _=this.data().f,b=this.width(),D=this.height(),O=Math.round(Math.sqrt(Math.pow(b,2)+Math.pow(D,2)));p&&(_.wrapper.css({width:O,height:O}),_.fwrapper.css({width:O,height:O}).children(":first-child").css({width:b,height:D}),_.fpage.css({width:D,height:b}),_.opts.frontGradient&&_.ashadow.css({width:D,height:b}),B._backGradient.call(this)&&_.bshadow.css({width:b,height:D})),_.parent.is(":visible")&&(_.fwrapper.css({top:_.parent.offset().top,left:_.parent.offset().left}),_.opts.turn&&_.fparent.css({top:-_.opts.turn.offset().top,left:-_.opts.turn.offset().left})),this.flip("z",_.opts["z-index"])},_addPageWrapper:function(){var p=this.data().f,_=this.parent();if(!p.wrapper){if(this.css("left"),this.css("top"),this.width(),this.height(),p.parent=_,p.fparent=p.opts.turn?p.opts.turn.data().fparent:r("#turn-fwrappers"),!p.fparent){var b=r("<div/>",{css:{"pointer-events":"none"}}).hide();b.data().flips=0,p.opts.turn?(b.css(S(-p.opts.turn.offset().top,-p.opts.turn.offset().left,"auto","visible").css).appendTo(p.opts.turn),p.opts.turn.data().fparent=b):b.css(S(0,0,"auto","visible").css).attr("id","turn-fwrappers").appendTo(r("body")),p.fparent=b}this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"}),p.wrapper=r("<div/>",S(0,0,this.css("z-index"))).appendTo(_).prepend(this),p.fwrapper=r("<div/>",S(_.offset().top,_.offset().left)).hide().appendTo(p.fparent),p.fpage=r("<div/>",{css:{cursor:"default"}}).appendTo(r("<div/>",S(0,0,0,"visible")).appendTo(p.fwrapper)),p.opts.frontGradient&&(p.ashadow=r("<div/>",S(0,0,1)).appendTo(p.fpage)),B.setData.call(this,p),B.resize.call(this,!0)}},_fold:function(p){var _=this,b=0,D=0,O,V,ee,ne,ae,ie,me=M(0,0),Ee=M(0,0),Me=M(0,0),Be=this.width(),Ze=this.height(),ce=B._foldingPage.call(this),ve=this.data().f,we=ve.opts.acceleration,Te=ve.wrapper.height(),je=B._c.call(this,p.corner),dt=p.corner.substr(0,1)=="t",We=p.corner.substr(1,1)=="l",It=function(){var qe=M(je.x?je.x-p.x:p.x,je.y?je.y-p.y:p.y),z=Math.atan2(qe.y,qe.x),Mt;D=i-z,b=w(D),Mt=M(We?Be-qe.x/2:p.x+qe.x/2,qe.y/2);var st=D-Math.atan2(Mt.y,Mt.x),at=Math.max(0,Math.sin(st)*Math.sqrt(Math.pow(Mt.x,2)+Math.pow(Mt.y,2)));if(Me=M(at*Math.sin(D),at*Math.cos(D)),D>i&&(Me.x=Me.x+Math.abs(Me.y*Math.tan(z)),Me.y=0,Math.round(Me.x*Math.tan(n-D))<Ze))return p.y=Math.sqrt(Math.pow(Ze,2)+2*Mt.x*qe.x),dt&&(p.y=Ze-p.y),It();if(D>i){var Ve=n-D,At=Te-Ze/Math.sin(Ve);me=M(Math.round(At*Math.cos(Ve)),Math.round(At*Math.sin(Ve))),We&&(me.x=-me.x),dt&&(me.y=-me.y)}O=Math.round(Me.y/Math.tan(D)+Me.x);var ze=Be-O,N=ze*Math.cos(D*2),R=ze*Math.sin(D*2);Ee=M(Math.round(We?ze-N:O+N),Math.round(dt?R:Ze-R)),ae=ze*Math.sin(D);var J=B._c2.call(_,p.corner),he=Math.sqrt(Math.pow(J.x-p.x,2)+Math.pow(J.y-p.y,2));return ie=he<Be?he/Be:1,ve.opts.frontGradient&&(ne=ae>100?(ae-100)/ae:0,V=M(ae*Math.sin(i-D)/Ze*100,ae*Math.cos(i-D)/Be*100),dt&&(V.y=100-V.y),We&&(V.x=100-V.x)),B._backGradient.call(_)&&(ee=M(ae*Math.sin(D)/Be*100,ae*Math.cos(D)/Ze*100),We||(ee.x=100-ee.x),dt||(ee.y=100-ee.y)),Me.x=Math.round(Me.x),Me.y=Math.round(Me.y),!0},Tt=function(qe,z,Mt,st){var at=["0","auto"],Ve=(Be-Te)*Mt[0]/100,At=(Ze-Te)*Mt[1]/100,ze={left:at[z[0]],top:at[z[1]],right:at[z[2]],bottom:at[z[3]]},N=st!=90&&st!=-90?We?-1:1:0;Mt=Mt[0]+"% "+Mt[1]+"%",_.css(ze).transform(F(st)+y(qe.x+N,qe.y,we),Mt),ve.fpage.parent().css(ze),ve.wrapper.transform(y(-qe.x+Ve-N,-qe.y+At,we)+F(-st),Mt),ve.fwrapper.transform(y(-qe.x+me.x+Ve,-qe.y+me.y+At,we)+F(-st),Mt),ve.fpage.parent().transform(F(st)+y(qe.x+Ee.x-me.x,qe.y+Ee.y-me.y,we),Mt),ve.opts.frontGradient&&G(ve.ashadow,M(We?100:0,dt?100:0),M(V.x,V.y),[[ne,"rgba(0,0,0,0)"],[(1-ne)*.8+ne,"rgba(0,0,0,"+.2*ie+")"],[1,"rgba(255,255,255,"+.2*ie+")"]],3),B._backGradient.call(_)&&G(ve.bshadow,M(We?0:100,dt?0:100),M(ee.x,ee.y),[[.8,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,"+.3*ie+")"],[1,"rgba(0,0,0,0)"]],3)};switch(p.corner){case"tl":p.x=Math.max(p.x,1),It(),Tt(Me,[1,0,0,1],[100,0],b),ve.fpage.transform(y(-Ze,-Be,we)+F(90-b*2),"100% 100%"),ce.transform(F(90)+y(0,-Ze,we),"0% 0%");break;case"tr":p.x=Math.min(p.x,Be-1),It(),Tt(M(-Me.x,Me.y),[0,0,0,1],[0,0],-b),ve.fpage.transform(y(0,-Be,we)+F(-90+b*2),"0% 100%"),ce.transform(F(270)+y(-Be,0,we),"0% 0%");break;case"bl":p.x=Math.max(p.x,1),It(),Tt(M(Me.x,-Me.y),[1,1,0,0],[100,100],-b),ve.fpage.transform(y(-Ze,0,we)+F(-90+b*2),"100% 0%"),ce.transform(F(270)+y(-Be,0,we),"0% 0%");break;case"br":p.x=Math.min(p.x,Be-1),It(),Tt(M(-Me.x,-Me.y),[0,1,1,0],[0,100],b),ve.fpage.transform(F(90-b*2),"0% 0%"),ce.transform(F(90)+y(0,-Ze,we),"0% 0%");break}ve.point=p},_moveFoldingPage:function(p){var _=this.data().f,b=B._foldingPage.call(this);b&&(p?_.fpage.children()[_.ashadow?"1":"0"]||(B.setData.call(this,{backParent:b.parent()}),_.fpage.prepend(b)):_.backParent&&_.backParent.prepend(b))},_showFoldedPage:function(p,_){var b=B._foldingPage.call(this),D=this.data(),O=D.f;if(!O.point||O.point.corner!=p.corner){var V=r.Event("start");if(this.trigger(V,[O.opts,p.corner]),V.isDefaultPrevented())return!1}if(b){if(_){var ee=this,ne=O.point&&O.point.corner==p.corner?O.point:B._c.call(this,p.corner,1);this.animatef({from:[ne.x,ne.y],to:[p.x,p.y],duration:500,frame:function(ae){p.x=Math.round(ae[0]),p.y=Math.round(ae[1]),B._fold.call(ee,p)}})}else B._fold.call(this,p),D.effect&&!D.effect.turning&&this.animatef(!1);return O.fwrapper.is(":visible")||(O.fparent.show().data().flips++,B._moveFoldingPage.call(this,!0),O.fwrapper.show(),O.bshadow&&O.bshadow.show()),!0}return!1},hide:function(){var p=this.data().f,_=B._foldingPage.call(this);return--p.fparent.data().flips===0&&p.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform("","0% 100%"),p.wrapper.transform("","0% 100%"),p.fwrapper.hide(),p.bshadow&&p.bshadow.hide(),_.transform("","0% 0%"),this},hideFoldedPage:function(p){var _=this.data().f;if(_.point){var b=this,D=_.point,O=function(){_.point=null,b.flip("hide"),b.trigger("end",[!1])};if(p){var V=B._c.call(this,D.corner),ee=D.corner.substr(0,1)=="t",ne=ee?Math.min(0,D.y-V.y)/2:Math.max(0,D.y-V.y)/2,ae=M(D.x,D.y+ne),ie=M(V.x,V.y-ne);this.animatef({from:0,to:1,frame:function(me){var Ee=o(D,ae,ie,V,me);D.x=Ee.x,D.y=Ee.y,B._fold.call(b,D)},complete:O,duration:800,hiding:!0})}else this.animatef(!1),O()}},turnPage:function(p){var _=this,b=this.data().f;p={corner:b.corner?b.corner.corner:p||B._cAllowed.call(this)[0]};var D=b.point||B._c.call(this,p.corner,b.opts.turn?b.opts.turn.data().opts.elevation:0),O=B._c2.call(this,p.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(V){var ee=o(D,D,O,O,V);p.x=ee.x,p.y=ee.y,B._showFoldedPage.call(_,p)},complete:function(){_.trigger("end",[!0])},duration:b.opts.duration,turning:!0}),b.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&this.data().effect.turning},_eventStart:function(p){var _=this.data().f;if(!_.disabled&&!this.flip("isTurning")){if(_.corner=B._cornerActivated.call(this,p),_.corner&&B._foldingPage.call(this,_.corner))return B._moveFoldingPage.call(this,!0),this.trigger("pressed",[_.point]),!1;_.corner=null}},_eventMove:function(p){var _=this.data().f;if(!_.disabled){if(p=s?p.originalEvent.touches:[p],_.corner){var b=_.parent.offset();_.corner.x=p[0].pageX-b.left,_.corner.y=p[0].pageY-b.top,B._showFoldedPage.call(this,_.corner)}else if(!this.data().effect&&this.is(":visible")){var D=B._cornerActivated.call(this,p[0]);if(D){var O=B._c.call(this,D.corner,_.opts.cornerSize/2);D.x=O.x,D.y=O.y,B._showFoldedPage.call(this,D,!0)}else B.hideFoldedPage.call(this,!0)}}},_eventEnd:function(){var p=this.data().f;if(!p.disabled&&p.point){var _=r.Event("released");this.trigger(_,[p.point]),_.isDefaultPrevented()||B.hideFoldedPage.call(this,!0)}p.corner=null},disable:function(p){return B.setData.call(this,{disabled:p}),this}},Z=function(p,_,b){if(!b[0]||typeof b[0]=="object")return _.init.apply(p,b);if(_[b[0]]&&b[0].toString().substr(0,1)!="_")return _[b[0]].apply(p,Array.prototype.slice.call(b,1));throw b[0]+" is an invalid value"};return r.extend(r.fn,{flip:function(p,_){return Z(this,B,arguments)},turn:function(p){return Z(this,k,arguments)},transform:function(p,_){var b={};return _&&(b[t+"transform-origin"]=_),b[t+"transform"]=p,this.css(b)},animatef:function(p){var _=this.data();if(_.effect&&clearInterval(_.effect.handle),p){p.to.length||(p.to=[p.to]),p.from.length||(p.from=[p.from]),p.easing||(p.easing=function(ie,me,Ee,Me,Be){return Me*Math.sqrt(1-(me=me/Be-1)*me)+Ee});var b,D=[],O=p.to.length,V=this,ee=p.fps||30,ne=-ee,ae=function(){var ie,me=[];for(ne=Math.min(p.duration,ne+ee),ie=0;ie<O;ie++)me.push(p.easing(1,ne,p.from[ie],D[ie],p.duration));p.frame(O==1?me[0]:me),ne==p.duration&&(clearInterval(_.effect.handle),delete _.effect,V.data(_),p.complete&&p.complete())};for(b=0;b<O;b++)D.push(p.to[b]-p.from[b]);_.effect=p,_.effect.handle=setInterval(ae,ee),this.data(_),ae()}else delete _.effect}}),r.isTouch=s,zu}Mx();function Sx(){const r=document.getElementById("flipbook");if(!r){console.error('No flipbook container with id "flipbook" found');return}const e=document.createElement("div");e.className="page";const t=document.createElement("img");t.src="./img/innovation-pages/01.jpg",t.alt="Front Cover",e.appendChild(t),r.appendChild(e);for(let h=2;h<=57;h++){const f=document.createElement("div");f.className="page";const g=document.createElement("img"),x=h<10?String(h).padStart(2,"0"):h.toString();g.src=`./img/innovation-pages/${x}.jpg`,g.alt=`Page ${h}`,f.appendChild(g),r.appendChild(f)}const n=document.createElement("div");n.className="page";const i=document.createElement("img");i.src="./img/innovation-pages/58.jpg",i.alt="Back Cover",n.appendChild(i),r.appendChild(n);const s=()=>window.innerWidth<=768,l=()=>{if(s()){const h=Math.min(window.innerWidth*.9,528),f=h*816/528;return{width:h,height:f}}return{width:528,height:816}},c=l();en("#flipbook").turn({width:s()?c.width:1056,height:c.height,autoCenter:!0,display:"single",when:{turning:function(h,f){const g=en("#flipbook").turn("pages"),x=l();f===1||f===g||s()?(en("#flipbook").turn("display","single"),en("#flipbook").turn("size",x.width,x.height)):(en("#flipbook").turn("display","double"),en("#flipbook").turn("size",x.width*2,x.height))},turned:function(h,f){const g=en("#flipbook").turn("pages");(f===1||f===g)&&(en("#flipbook").turn("display","single"),en("#flipbook").turn("size",528,816))},start:function(){const h=en("#flipbook").turn("page"),f=en("#flipbook").turn("pages"),g=l();(h===1||h===f||s())&&(en("#flipbook").turn("display","single"),en("#flipbook").turn("size",g.width,g.height))}}}),window.addEventListener("resize",()=>{const h=l(),f=en("#flipbook").turn("page"),g=en("#flipbook").turn("pages");s()?(en("#flipbook").turn("display","single"),en("#flipbook").turn("size",h.width,h.height)):f===1||f===g?en("#flipbook").turn("size",h.width,h.height):(en("#flipbook").turn("display","double"),en("#flipbook").turn("size",h.width*2,h.height))})}df();pf();Dh();window.location.pathname.endsWith("model.html")&&Dh();window.location.pathname.endsWith("about.html")&&mf();document.addEventListener("DOMContentLoaded",()=>{Sx()});
