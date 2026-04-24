(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="160",hi={ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hd=0,Fo=1,fd=2,jc=1,pd=2,Mn=3,zn=0,Pt=1,cn=2,En=0,Gi=1,hn=2,Bo=3,zo=4,md=5,Qn=100,gd=101,_d=102,Go=103,Ho=104,vd=200,xd=201,Md=202,Sd=203,Ua=204,Na=205,yd=206,Ed=207,bd=208,Td=209,wd=210,Ad=211,Rd=212,Pd=213,Cd=214,Ld=0,Dd=1,Id=2,ps=3,Ud=4,Nd=5,Od=6,Fd=7,Kc=0,Bd=1,zd=2,Fn=0,Gd=1,Hd=2,Vd=3,Zc=4,kd=5,Wd=6,$c=300,Vi=301,ki=302,Oa=303,Fa=304,As=306,ms=1e3,$t=1001,Ba=1002,Ut=1003,Vo=1004,Xs=1005,Kt=1006,Xd=1007,mr=1008,Bn=1009,qd=1010,Yd=1011,to=1012,Jc=1013,Nn=1014,On=1015,bn=1016,Qc=1017,eu=1018,ii=1020,jd=1021,rn=1023,Kd=1024,Zd=1025,ri=1026,Wi=1027,$d=1028,tu=1029,Jd=1030,nu=1031,iu=1033,qs=33776,Ys=33777,js=33778,Ks=33779,ko=35840,Wo=35841,Xo=35842,qo=35843,ru=36196,Yo=37492,jo=37496,Ko=37808,Zo=37809,$o=37810,Jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,al=37819,ol=37820,ll=37821,Zs=36492,cl=36494,ul=36495,Qd=36283,dl=36284,hl=36285,fl=36286,su=3e3,si=3001,eh=3200,th=3201,au=0,nh=1,Jt="",mt="srgb",Rn="srgb-linear",no="display-p3",Rs="display-p3-linear",gs="linear",rt="srgb",_s="rec709",vs="p3",pi=7680,pl=519,ih=512,rh=513,sh=514,ou=515,ah=516,oh=517,lh=518,ch=519,za=35044,uh=35048,ml="300 es",Ga=1035,yn=2e3,xs=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gl=1234567;const dr=Math.PI/180,gr=180/Math.PI;function Tn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function io(n,e){return(n%e+e)%e}function dh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function hh(n,e,t){return n!==e?(t-n)/(e-n):0}function hr(n,e,t){return(1-t)*n+t*e}function fh(n,e,t,i){return hr(n,e,1-Math.exp(-t*i))}function ph(n,e=1){return e-Math.abs(io(n,e*2)-e)}function mh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _h(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vh(n,e){return n+Math.random()*(e-n)}function xh(n){return n*(.5-Math.random())}function Mh(n){n!==void 0&&(gl=n);let e=gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sh(n){return n*dr}function yh(n){return n*gr}function Ha(n){return(n&n-1)===0&&n!==0}function Eh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ms(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bh(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const st={DEG2RAD:dr,RAD2DEG:gr,generateUUID:Tn,clamp:yt,euclideanModulo:io,mapLinear:dh,inverseLerp:hh,lerp:hr,damp:fh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:vh,randFloatSpread:xh,seededRandom:Mh,degToRad:Sh,radToDeg:yh,isPowerOfTwo:Ha,ceilPowerOfTwo:Eh,floorPowerOfTwo:Ms,setQuaternionFromProperEuler:bh,normalize:Je,denormalize:un};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],M=r[1],x=r[4],E=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*_+a*M+l*C,s[3]=o*m+a*x+l*R,s[6]=o*d+a*E+l*A,s[1]=c*_+u*M+f*C,s[4]=c*m+u*x+f*R,s[7]=c*d+u*E+f*A,s[2]=h*_+p*M+g*C,s[5]=h*m+p*x+g*R,s[8]=h*d+p*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($s.makeScale(e,t)),this}rotate(e){return this.premultiply($s.makeRotation(-e)),this}translate(e,t){return this.premultiply($s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new We;function lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Th(){const n=Ss("canvas");return n.style.display="block",n}const _l={};function fr(n){n in _l||(_l[n]=!0,console.warn(n))}const vl=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xl=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[Rn]:{transfer:gs,primaries:_s,toReference:n=>n,fromReference:n=>n},[mt]:{transfer:rt,primaries:_s,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Rs]:{transfer:gs,primaries:vs,toReference:n=>n.applyMatrix3(xl),fromReference:n=>n.applyMatrix3(vl)},[no]:{transfer:rt,primaries:vs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xl),fromReference:n=>n.applyMatrix3(vl).convertLinearToSRGB()}},wh=new Set([Rn,Rs]),Qe={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Pr[e].toReference,r=Pr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Pr[n].primaries},getTransfer:function(n){return n===Jt?gs:Pr[n].transfer}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mi;class cu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Ss("canvas")),mi.width=e.width,mi.height=e.height;const i=mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ah=0;class uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qs(r[o].image)):s.push(Qs(r[o]))}else s=Qs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rh=0;class Bt extends ci{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=$t,r=$t,s=Kt,o=mr,a=rn,l=Bn,c=Bt.DEFAULT_ANISOTROPY,u=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Tn(),this.name="",this.source=new uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===si?mt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?si:su}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===si?mt:Jt}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=$c;Bt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(p+1)/2,C=(d+1)/2,R=(u+h)/4,A=(f+_)/4,D=(g+m)/4;return x>E&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=A/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=D/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===si?mt:Jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends Ph{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class du extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ch extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),R=Math.atan2(C,d*M);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const E=a*M;if(l=l*m+h*E,c=c*m+p*E,u=u*m+g*E,f=f*m+_*E,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new b,Ml=new Gn;class ui{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Lr.subVectors(this.max,Ji),gi.subVectors(e.a,Ji),_i.subVectors(e.b,Ji),vi.subVectors(e.c,Ji),Pn.subVectors(_i,gi),Cn.subVectors(vi,_i),Yn.subVectors(gi,vi);let t=[0,-Pn.z,Pn.y,0,-Cn.z,Cn.y,0,-Yn.z,Yn.y,Pn.z,0,-Pn.x,Cn.z,0,-Cn.x,Yn.z,0,-Yn.x,-Pn.y,Pn.x,0,-Cn.y,Cn.x,0,-Yn.y,Yn.x,0];return!ta(t,gi,_i,vi,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,gi,_i,vi,Lr))?!1:(Dr.crossVectors(Pn,Cn),t=[Dr.x,Dr.y,Dr.z],ta(t,gi,_i,vi,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new b,new b,new b,new b,new b,new b,new b,new b],en=new b,Cr=new ui,gi=new b,_i=new b,vi=new b,Pn=new b,Cn=new b,Yn=new b,Ji=new b,Lr=new b,Dr=new b,jn=new b;function ta(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){jn.fromArray(n,s);const a=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=i.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lh=new ui,Qi=new b,na=new b;class di{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(na)),this.expandByPoint(Qi.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new b,ia=new b,Ir=new b,Ln=new b,ra=new b,Ur=new b,sa=new b;class yr{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ia.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=Ln.dot(this.direction),l=-Ln.dot(Ir),c=Ln.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ia).addScaledVector(Ir,h),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){ra.subVectors(t,e),Ur.subVectors(i,e),sa.crossVectors(ra,Ur);let o=this.direction.dot(sa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const l=a*this.direction.dot(Ur.crossVectors(Ln,Ur));if(l<0)return null;const c=a*this.direction.dot(ra.cross(Ln));if(c<0||l+c>o)return null;const u=-a*Ln.dot(sa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,g,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dh,e,Ih)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Dn.crossVectors(i,Ht),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Dn.crossVectors(i,Ht)),Dn.normalize(),Nr.crossVectors(Ht,Dn),r[0]=Dn.x,r[4]=Nr.x,r[8]=Ht.x,r[1]=Dn.y,r[5]=Nr.y,r[9]=Ht.y,r[2]=Dn.z,r[6]=Nr.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],M=i[3],x=i[7],E=i[11],C=i[15],R=r[0],A=r[4],D=r[8],v=r[12],y=r[1],B=r[5],V=r[9],te=r[13],I=r[2],O=r[6],k=r[10],K=r[14],Y=r[3],j=r[7],Z=r[11],ie=r[15];return s[0]=o*R+a*y+l*I+c*Y,s[4]=o*A+a*B+l*O+c*j,s[8]=o*D+a*V+l*k+c*Z,s[12]=o*v+a*te+l*K+c*ie,s[1]=u*R+f*y+h*I+p*Y,s[5]=u*A+f*B+h*O+p*j,s[9]=u*D+f*V+h*k+p*Z,s[13]=u*v+f*te+h*K+p*ie,s[2]=g*R+_*y+m*I+d*Y,s[6]=g*A+_*B+m*O+d*j,s[10]=g*D+_*V+m*k+d*Z,s[14]=g*v+_*te+m*K+d*ie,s[3]=M*R+x*y+E*I+C*Y,s[7]=M*A+x*B+E*O+C*j,s[11]=M*D+x*V+E*k+C*Z,s[15]=M*v+x*te+E*K+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+_*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,E=u*_*c-g*f*c+g*a*p-o*_*p-u*a*d+o*f*d,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=t*M+i*x+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=M*A,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*A,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*A,e[8]=E*A,e[9]=(g*f*s-u*_*s-g*i*p+t*_*p+u*i*d-t*f*d)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*d+t*a*d)*A,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,_=o*u,m=o*f,d=a*f,M=l*c,x=l*u,E=l*f,C=i.x,R=i.y,A=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+E)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(h+d))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+x)*A,r[9]=(m-M)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=xi.set(r[0],r[1],r[2]).length();const o=xi.set(r[4],r[5],r[6]).length(),a=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/s,u=1/o,f=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=yn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===yn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xs)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,_;if(a===yn)g=(o+s)*f,_=-2*f;else if(a===xs)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xi=new b,tn=new $e,Dh=new b(0,0,0),Ih=new b(1,1,1),Dn=new b,Nr=new b,Ht=new b,Sl=new $e,yl=new Gn;class Ki{constructor(e=0,t=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yl.setFromEuler(this),this.setFromQuaternion(yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uh=0;const El=new b,Mi=new Gn,_n=new $e,Or=new b,er=new b,Nh=new b,Oh=new Gn,bl=new b(1,0,0),Tl=new b(0,1,0),wl=new b(0,0,1),Fh={type:"added"},Bh={type:"removed"};class et extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const e=new b,t=new Ki,i=new Gn,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new We}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(er,Or,this.up):_n.lookAt(Or,er,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(_n),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Nh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}et.DEFAULT_UP=new b(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new b,vn=new b,aa=new b,xn=new b,Si=new b,yi=new b,Al=new b,oa=new b,la=new b,ca=new b;let Fr=!1;class Zt{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),vn.subVectors(i,t),aa.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(vn),l=nn.dot(aa),c=vn.dot(vn),u=vn.dot(aa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),vn.subVectors(e,t),nn.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Si.subVectors(r,i),yi.subVectors(s,i),oa.subVectors(e,i);const l=Si.dot(oa),c=yi.dot(oa);if(l<=0&&c<=0)return t.copy(i);la.subVectors(e,r);const u=Si.dot(la),f=yi.dot(la);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Si,o);ca.subVectors(e,s);const p=Si.dot(ca),g=yi.dot(ca);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(yi,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Al.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Al,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Si,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=io(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ua(o,s,e+1/3),this.g=ua(o,s,e),this.b=ua(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=hu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Qe.fromWorkingColorSpace(Rt.copy(this),e),Math.round(yt(Rt.r*255,0,255))*65536+Math.round(yt(Rt.g*255,0,255))*256+Math.round(yt(Rt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=mt){Qe.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Br);const i=hr(In.h,Br.h,t),r=hr(In.s,Br.s,t),s=hr(In.l,Br.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Pe;Pe.NAMES=hu;let zh=0;class kn extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Gi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ps extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new b,zr=new ge;class bt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),e}}class fu extends bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pu extends bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gh=0;const Yt=new $e,da=new et,Ei=new b,Vt=new ui,tr=new ui,St=new b;class pt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lu(e)?pu:fu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Vt.min,tr.min),Vt.expandByPoint(St),St.addVectors(Vt.max,tr.max),Vt.expandByPoint(St)):(Vt.expandByPoint(tr.min),Vt.expandByPoint(tr.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),St.add(Ei)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new b,u[y]=new b;const f=new b,h=new b,p=new b,g=new ge,_=new ge,m=new ge,d=new b,M=new b;function x(y,B,V){f.fromArray(r,y*3),h.fromArray(r,B*3),p.fromArray(r,V*3),g.fromArray(o,y*2),_.fromArray(o,B*2),m.fromArray(o,V*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const te=1/(_.x*m.y-m.x*_.y);isFinite(te)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(te),M.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(te),c[y].add(d),c[B].add(d),c[V].add(d),u[y].add(M),u[B].add(M),u[V].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let y=0,B=E.length;y<B;++y){const V=E[y],te=V.start,I=V.count;for(let O=te,k=te+I;O<k;O+=3)x(i[O+0],i[O+1],i[O+2])}const C=new b,R=new b,A=new b,D=new b;function v(y){A.fromArray(s,y*3),D.copy(A);const B=c[y];C.copy(B),C.sub(A.multiplyScalar(A.dot(B))).normalize(),R.crossVectors(D,B);const te=R.dot(u[y])<0?-1:1;l[y*4]=C.x,l[y*4+1]=C.y,l[y*4+2]=C.z,l[y*4+3]=te}for(let y=0,B=E.length;y<B;++y){const V=E[y],te=V.start,I=V.count;for(let O=te,k=te+I;O<k;O+=3)v(i[O+0]),v(i[O+1]),v(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new b,s=new b,o=new b,a=new b,l=new b,c=new b,u=new b,f=new b;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new bt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new $e,Kn=new yr,Gr=new di,Pl=new b,bi=new b,Ti=new b,wi=new b,ha=new b,Hr=new b,Vr=new ge,kr=new ge,Wr=new ge,Cl=new b,Ll=new b,Dl=new b,Xr=new b,qr=new b;class ft extends et{constructor(e=new pt,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ha.fromBufferAttribute(f,e),o?Hr.addScaledVector(ha,u):Hr.addScaledVector(ha.sub(t),u))}t.add(Hr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),!(Gr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Gr,Pl)===null||Kn.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Rl.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,C=x;E<C;E+=3){const R=a.getX(E),A=a.getX(E+1),D=a.getX(E+2);r=Yr(this,d,e,i,c,u,f,R,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);r=Yr(this,o,e,i,c,u,f,M,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,C=x;E<C;E+=3){const R=E,A=E+1,D=E+2;r=Yr(this,d,e,i,c,u,f,R,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,x=m+1,E=m+2;r=Yr(this,o,e,i,c,u,f,M,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Hh(n,e,t,i,r,s,o,a){let l;if(e.side===Pt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zn,a),l===null)return null;qr.copy(a),qr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:n}}function Yr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,bi),n.getVertexPosition(l,Ti),n.getVertexPosition(c,wi);const u=Hh(n,e,t,i,bi,Ti,wi,Xr);if(u){r&&(Vr.fromBufferAttribute(r,a),kr.fromBufferAttribute(r,l),Wr.fromBufferAttribute(r,c),u.uv=Zt.getInterpolation(Xr,bi,Ti,wi,Vr,kr,Wr,new ge)),s&&(Vr.fromBufferAttribute(s,a),kr.fromBufferAttribute(s,l),Wr.fromBufferAttribute(s,c),u.uv1=Zt.getInterpolation(Xr,bi,Ti,wi,Vr,kr,Wr,new ge),u.uv2=u.uv1),o&&(Cl.fromBufferAttribute(o,a),Ll.fromBufferAttribute(o,l),Dl.fromBufferAttribute(o,c),u.normal=Zt.getInterpolation(Xr,bi,Ti,wi,Cl,Ll,Dl,new b),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new b,materialIndex:0};Zt.getNormal(bi,Ti,wi,f.normal),u.face=f}return u}class Er extends pt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function g(_,m,d,M,x,E,C,R,A,D,v){const y=E/A,B=C/D,V=E/2,te=C/2,I=R/2,O=A+1,k=D+1;let K=0,Y=0;const j=new b;for(let Z=0;Z<k;Z++){const ie=Z*B-te;for(let ae=0;ae<O;ae++){const X=ae*y-V;j[_]=X*M,j[m]=ie*x,j[d]=I,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[d]=R>0?1:-1,u.push(j.x,j.y,j.z),f.push(ae/A),f.push(1-Z/D),K+=1}}for(let Z=0;Z<D;Z++)for(let ie=0;ie<A;ie++){const ae=h+ie+O*Z,X=h+ie+O*(Z+1),N=h+(ie+1)+O*(Z+1),se=h+(ie+1)+O*Z;l.push(ae,X,se),l.push(X,N,se),Y+=6}a.addGroup(p,Y,v),p+=Y,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Xi(n[t]);for(const r in i)e[r]=i[r]}return e}function Vh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mu(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const ys={clone:Xi,merge:It};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gu extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends gu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,Ri=1;class Xh extends et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(Ai,Ri,e,t);r.layers=this.layers,this.add(r);const s=new kt(Ai,Ri,e,t);s.layers=this.layers,this.add(s);const o=new kt(Ai,Ri,e,t);o.layers=this.layers,this.add(o);const a=new kt(Ai,Ri,e,t);a.layers=this.layers,this.add(a);const l=new kt(Ai,Ri,e,t);l.layers=this.layers,this.add(l);const c=new kt(Ai,Ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _u extends Bt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qh extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===si?mt:Jt),this.texture=new _u(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:En});s.uniforms.tEquirect.value=t;const o=new ft(r,s),a=t.minFilter;return t.minFilter===mr&&(t.minFilter=Kt),new Xh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const fa=new b,Yh=new b,jh=new We;class Un{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fa.subVectors(i,t).cross(Yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jh.getNormalMatrix(e),r=this.coplanarPoint(fa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new di,jr=new b;class so{constructor(e=new Un,t=new Un,i=new Un,r=new Un,s=new Un,o=new Un){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],M=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-d).normalize(),i[1].setComponents(l+s,h+c,m+p,E+d).normalize(),i[2].setComponents(l+o,h+u,m+g,E+M).normalize(),i[3].setComponents(l-o,h-u,m-g,E-M).normalize(),i[4].setComponents(l-a,h-f,m-_,E-x).normalize(),t===yn)i[5].setComponents(l+a,h+f,m+_,E+x).normalize();else if(t===xs)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jr.x=r.normal.x>0?e.max.x:e.min.x,jr.y=r.normal.y>0?e.max.y:e.min.y,jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Kh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),p.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class ao extends pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let x=0;x<c;x++){const E=x*f-s;g.push(E,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const x=M+c*d,E=M+c*(d+1),C=M+1+c*(d+1),R=M+1+c*d;p.push(x,E,R),p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mf=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
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
}`,zf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
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
#endif`,Zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,$f=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,op=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,rm=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hm=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
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
}`,xm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ym=`#define TOON
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
}`,Em=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bm=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Am=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Pm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ze={alphahash_fragment:Zh,alphahash_pars_fragment:$h,alphamap_fragment:Jh,alphamap_pars_fragment:Qh,alphatest_fragment:ef,alphatest_pars_fragment:tf,aomap_fragment:nf,aomap_pars_fragment:rf,batching_pars_vertex:sf,batching_vertex:af,begin_vertex:of,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:hf,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:vf,color_vertex:xf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Ef,displacementmap_vertex:bf,emissivemap_fragment:Tf,emissivemap_pars_fragment:wf,colorspace_fragment:Af,colorspace_pars_fragment:Rf,envmap_fragment:Pf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Wf,envmap_vertex:If,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:Of,fog_pars_fragment:Ff,gradientmap_pars_fragment:Bf,lightmap_fragment:zf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Vf,lights_pars_begin:kf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Zf,lights_fragment_begin:$f,lights_fragment_maps:Jf,lights_fragment_end:Qf,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:sp,map_particle_fragment:ap,map_particle_pars_fragment:op,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:hp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ep,opaque_fragment:bp,packing:Tp,premultiplied_alpha_fragment:wp,project_vertex:Ap,dithering_fragment:Rp,dithering_pars_fragment:Pp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Up,shadowmask_pars_fragment:Np,skinbase_vertex:Op,skinning_pars_vertex:Fp,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:Gp,specularmap_pars_fragment:Hp,tonemapping_fragment:Vp,tonemapping_pars_fragment:kp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:jp,worldpos_vertex:Kp,background_vert:Zp,background_frag:$p,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:em,cube_frag:tm,depth_vert:nm,depth_frag:im,distanceRGBA_vert:rm,distanceRGBA_frag:sm,equirect_vert:am,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:hm,meshlambert_frag:fm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:xm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:ym,meshtoon_frag:Em,points_vert:bm,points_frag:Tm,shadow_vert:wm,shadow_frag:Am,sprite_vert:Rm,sprite_frag:Pm},he={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ln={basic:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:It([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:It([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:It([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:It([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:It([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:It([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:It([he.common,he.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:It([he.lights,he.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ln.physical={uniforms:It([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Kr={r:0,b:0,g:0};function Cm(n,e,t,i,r,s,o){const a=new Pe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===As)?(u===void 0&&(u=new ft(new Er(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Xi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==rt,(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ft(new ao(2,2),new Et({name:"BackgroundMaterial",uniforms:Xi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Kr,mu(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Lm(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(I,O,k,K,Y){let j=!1;if(o){const Z=_(K,k,O);c!==Z&&(c=Z,p(c.object)),j=d(I,K,k,Y),j&&M(I,K,k,Y)}else{const Z=O.wireframe===!0;(c.geometry!==K.id||c.program!==k.id||c.wireframe!==Z)&&(c.geometry=K.id,c.program=k.id,c.wireframe=Z,j=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,D(I,O,k,K),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,O,k){const K=k.wireframe===!0;let Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let j=Y[O.id];j===void 0&&(j={},Y[O.id]=j);let Z=j[K];return Z===void 0&&(Z=m(h()),j[K]=Z),Z}function m(I){const O=[],k=[],K=[];for(let Y=0;Y<r;Y++)O[Y]=0,k[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:K,object:I,attributes:{},index:null}}function d(I,O,k,K){const Y=c.attributes,j=O.attributes;let Z=0;const ie=k.getAttributes();for(const ae in ie)if(ie[ae].location>=0){const N=Y[ae];let se=j[ae];if(se===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),N===void 0||N.attribute!==se||se&&N.data!==se.data)return!0;Z++}return c.attributesNum!==Z||c.index!==K}function M(I,O,k,K){const Y={},j=O.attributes;let Z=0;const ie=k.getAttributes();for(const ae in ie)if(ie[ae].location>=0){let N=j[ae];N===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(N=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(N=I.instanceColor));const se={};se.attribute=N,N&&N.data&&(se.data=N.data),Y[ae]=se,Z++}c.attributes=Y,c.attributesNum=Z,c.index=K}function x(){const I=c.newAttributes;for(let O=0,k=I.length;O<k;O++)I[O]=0}function E(I){C(I,0)}function C(I,O){const k=c.newAttributes,K=c.enabledAttributes,Y=c.attributeDivisors;k[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),Y[I]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),Y[I]=O)}function R(){const I=c.newAttributes,O=c.enabledAttributes;for(let k=0,K=O.length;k<K;k++)O[k]!==I[k]&&(n.disableVertexAttribArray(k),O[k]=0)}function A(I,O,k,K,Y,j,Z){Z===!0?n.vertexAttribIPointer(I,O,k,Y,j):n.vertexAttribPointer(I,O,k,K,Y,j)}function D(I,O,k,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=K.attributes,j=k.getAttributes(),Z=O.defaultAttributeValues;for(const ie in j){const ae=j[ie];if(ae.location>=0){let X=Y[ie];if(X===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const N=X.normalized,se=X.itemSize,W=t.get(X);if(W===void 0)continue;const Q=W.buffer,fe=W.type,me=W.bytesPerElement,xe=i.isWebGL2===!0&&(fe===n.INT||fe===n.UNSIGNED_INT||X.gpuType===Jc);if(X.isInterleavedBufferAttribute){const De=X.data,F=De.stride,ut=X.offset;if(De.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ae.locationSize;Ee++)C(ae.location+Ee,De.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)E(ae.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Ee=0;Ee<ae.locationSize;Ee++)A(ae.location+Ee,se/ae.locationSize,fe,N,F*me,(ut+se/ae.locationSize*Ee)*me,xe)}else{if(X.isInstancedBufferAttribute){for(let De=0;De<ae.locationSize;De++)C(ae.location+De,X.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let De=0;De<ae.locationSize;De++)E(ae.location+De);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let De=0;De<ae.locationSize;De++)A(ae.location+De,se/ae.locationSize,fe,N,se*me,se/ae.locationSize*De*me,xe)}}else if(Z!==void 0){const N=Z[ie];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(ae.location,N);break;case 3:n.vertexAttrib3fv(ae.location,N);break;case 4:n.vertexAttrib4fv(ae.location,N);break;default:n.vertexAttrib1fv(ae.location,N)}}}}R()}function v(){V();for(const I in a){const O=a[I];for(const k in O){const K=O[k];for(const Y in K)g(K[Y].object),delete K[Y];delete O[k]}delete a[I]}}function y(I){if(a[I.id]===void 0)return;const O=a[I.id];for(const k in O){const K=O[k];for(const Y in K)g(K[Y].object),delete K[Y];delete O[k]}delete a[I.id]}function B(I){for(const O in a){const k=a[O];if(k[I.id]===void 0)continue;const K=k[I.id];for(const Y in K)g(K[Y].object),delete K[Y];delete k[I.id]}}function V(){te(),u=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:te,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:E,disableUnusedAttributes:R}}function Dm(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Im(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,E=o||e.has("OES_texture_float"),C=x&&E,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:R}}function Um(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Un,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,x=M*4;let E=d.clippingState||null;l.value=E,E=u(g,h,x,p);for(let C=0;C!==x;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,E=p;x!==_;++x,E+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Nm(n){let e=new WeakMap;function t(o,a){return a===Oa?o.mapping=Vi:a===Fa&&(o.mapping=ki),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oa||a===Fa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class oo extends gu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,Il=[.125,.215,.35,.446,.526,.582],ei=20,pa=new oo,Ul=new Pe;let ma=null,ga=0,_a=0;const Jn=(1+Math.sqrt(5))/2,Pi=1/Jn,Nl=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Jn,Pi),new b(0,Jn,-Pi),new b(Pi,0,Jn),new b(-Pi,0,Jn),new b(Jn,Pi,0),new b(-Jn,Pi,0)];class Ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:bn,format:rn,colorSpace:Rn,depthBuffer:!1},r=Fl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(s)),this._blurMaterial=Fm(s,e,t)}return r}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,i,r){const a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ul),u.toneMapping=Fn,u.autoClear=!1;const p=new Ps({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new ft(new Er,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ul),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;Zr(r,M*x,d>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nl[(r-1)%Nl.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ft(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ei-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ei;m>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);const d=[];let M=0;for(let A=0;A<ei;++A){const D=A/_,v=Math.exp(-D*D/2);d.push(v),A===0?M+=v:A<m&&(M+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const E=this._sizeLods[r],C=3*E*(r>x-Oi?r-x+Oi:0),R=4*(this._cubeSize-E);Zr(t,C,R,3*E,2*E),l.setRenderTarget(t),l.render(f,pa)}}function Om(n){const e=[],t=[],i=[];let r=n;const s=n-Oi+1+Il.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Oi?l=Il[o-n+Oi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),x=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];M.set(v,_*g*R),x.set(h,m*g*R);const y=[R,R,R,R,R,R];E.set(y,d*g*R)}const C=new pt;C.setAttribute("position",new bt(M,_)),C.setAttribute("uv",new bt(x,m)),C.setAttribute("faceIndex",new bt(E,d)),e.push(C),r>Oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fl(n,e,t){const i=new an(n,e,t);return i.texture.mapping=As,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fm(n,e,t){const i=new Float32Array(ei),r=new b(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lo(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Bl(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function zl(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}function Bm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oa||l===Fa,u=l===Vi||l===ki;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ol(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ol(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gm(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,E=M.length;x<E;x+=3){const C=M[x+0],R=M[x+1],A=M[x+2];h.push(C,R,R,A,A,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const C=x+0,R=x+1,A=x+2;h.push(C,R,R,A,A,C)}}else return;const m=new(lu(h)?pu:fu)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Hm(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function f(p,g,_){if(_===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,p*l,_),t.update(g,s,_)}function h(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let d=0;for(let M=0;M<_;M++)d+=g[M];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Vm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function km(n,e){return n[0]-e[0]}function Wm(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Xm(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let O=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),E===!0&&(v=2),C===!0&&(v=3);let y=u.attributes.position.count*v,B=1;y>e.maxTextureSize&&(B=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const V=new Float32Array(y*B*4*_),te=new du(V,y,B,_);te.type=On,te.needsUpdate=!0;const I=v*4;for(let k=0;k<_;k++){const K=R[k],Y=A[k],j=D[k],Z=y*B*4*k;for(let ie=0;ie<K.count;ie++){const ae=ie*I;x===!0&&(o.fromBufferAttribute(K,ie),V[Z+ae+0]=o.x,V[Z+ae+1]=o.y,V[Z+ae+2]=o.z,V[Z+ae+3]=0),E===!0&&(o.fromBufferAttribute(Y,ie),V[Z+ae+4]=o.x,V[Z+ae+5]=o.y,V[Z+ae+6]=o.z,V[Z+ae+7]=0),C===!0&&(o.fromBufferAttribute(j,ie),V[Z+ae+8]=o.x,V[Z+ae+9]=o.y,V[Z+ae+10]=o.z,V[Z+ae+11]=j.itemSize===4?o.w:1)}}m={count:_,texture:te,size:new ge(y,B)},s.set(u,m),u.addEventListener("dispose",O)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const M=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];i[u.id]=_}for(let E=0;E<g;E++){const C=_[E];C[0]=E,C[1]=h[E]}_.sort(Wm);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(km);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const C=a[E],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+E)!==m[R]&&u.setAttribute("morphTarget"+E,m[R]),d&&u.getAttribute("morphNormal"+E)!==d[R]&&u.setAttribute("morphNormal"+E,d[R]),r[E]=A,M+=A):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const x=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function qm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class xu extends Bt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ri&&(i=Nn),i===void 0&&u===Wi&&(i=ii),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mu=new Bt,Su=new xu(1,1);Su.compareFunction=ou;const yu=new du,Eu=new Ch,bu=new _u,Gl=[],Hl=[],Vl=new Float32Array(16),kl=new Float32Array(9),Wl=new Float32Array(4);function Zi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gl[r];if(s===void 0&&(s=new Float32Array(r),Gl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cs(n,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ym(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function $m(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Wl.set(i),n.uniformMatrix2fv(this.addr,!1,Wl),vt(t,i)}}function Jm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;kl.set(i),n.uniformMatrix3fv(this.addr,!1,kl),vt(t,i)}}function Qm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Vl.set(i),n.uniformMatrix4fv(this.addr,!1,Vl),vt(t,i)}}function eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function rg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function lg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Su:Mu;t.setTexture2D(e||s,r)}function cg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Eu,r)}function ug(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bu,r)}function dg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yu,r)}function hg(n){switch(n){case 5126:return Ym;case 35664:return jm;case 35665:return Km;case 35666:return Zm;case 35674:return $m;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return rg;case 36294:return sg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function fg(n,e){n.uniform1fv(this.addr,e)}function pg(n,e){const t=Zi(e,this.size,2);n.uniform2fv(this.addr,t)}function mg(n,e){const t=Zi(e,this.size,3);n.uniform3fv(this.addr,t)}function gg(n,e){const t=Zi(e,this.size,4);n.uniform4fv(this.addr,t)}function _g(n,e){const t=Zi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vg(n,e){const t=Zi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xg(n,e){const t=Zi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mg(n,e){n.uniform1iv(this.addr,e)}function Sg(n,e){n.uniform2iv(this.addr,e)}function yg(n,e){n.uniform3iv(this.addr,e)}function Eg(n,e){n.uniform4iv(this.addr,e)}function bg(n,e){n.uniform1uiv(this.addr,e)}function Tg(n,e){n.uniform2uiv(this.addr,e)}function wg(n,e){n.uniform3uiv(this.addr,e)}function Ag(n,e){n.uniform4uiv(this.addr,e)}function Rg(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Mu,s[o])}function Pg(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Eu,s[o])}function Cg(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bu,s[o])}function Lg(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yu,s[o])}function Dg(n){switch(n){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return yg;case 35669:case 35673:return Eg;case 5125:return bg;case 36294:return Tg;case 36295:return wg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Lg}}class Ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Ug{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dg(t.type)}}class Ng{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Xl(n,e){n.seq.push(e),n.map[e.id]=e}function Og(n,e,t){const i=n.name,r=i.length;for(va.lastIndex=0;;){const s=va.exec(i),o=va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xl(t,c===void 0?new Ig(a,n,e):new Ug(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Ng(a),Xl(t,f)),t=f}}}class us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Og(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ql(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Fg=37297;let Bg=0;function zg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Gg(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===vs&&t===_s?i="LinearDisplayP3ToLinearSRGB":e===_s&&t===vs&&(i="LinearSRGBToLinearDisplayP3"),n){case Rn:case Rs:return[i,"LinearTransferOETF"];case mt:case no:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zg(n.getShaderSource(e),o)}else return r}function Hg(n,e){const t=Gg(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vg(n,e){let t;switch(e){case Gd:t="Linear";break;case Hd:t="Reinhard";break;case Vd:t="OptimizedCineon";break;case Zc:t="ACESFilmic";break;case Wd:t="AgX";break;case kd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fi).join(`
`)}function Wg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fi).join(`
`)}function Xg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fi(n){return n!==""}function jl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(n){return n.replace(Yg,Kg)}const jg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kg(n,e){let t=ze[e];if(t===void 0){const i=jg.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(n){return n.replace(Zg,$g)}function $g(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $l(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vi:case ki:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function t0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case Bd:e="ENVMAP_BLENDING_MIX";break;case zd:e="ENVMAP_BLENDING_ADD";break}return e}function n0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function i0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jg(t),c=Qg(t),u=e0(t),f=t0(t),h=n0(t),p=t.isWebGL2?"":kg(t),g=Wg(t),_=Xg(s),m=r.createProgram();let d,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),d.length>0&&(d+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),M.length>0&&(M+=`
`)):(d=[$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),M=[p,$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Hg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),o=Va(o),o=jl(o,t),o=Kl(o,t),a=Va(a),a=jl(a,t),a=Kl(a,t),o=Zl(o),a=Zl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=x+d+o,C=x+M+a,R=ql(r,r.VERTEX_SHADER,E),A=ql(r,r.FRAGMENT_SHADER,C);r.attachShader(m,R),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(V){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(R).trim(),O=r.getShaderInfoLog(A).trim();let k=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,A);else{const Y=Yl(r,R,"vertex"),j=Yl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+Y+`
`+j)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||O==="")&&(K=!1);K&&(V.diagnostics={runnable:k,programLog:te,vertexShader:{log:I,prefix:d},fragmentShader:{log:O,prefix:M}})}r.deleteShader(R),r.deleteShader(A),v=new us(r,m),y=qg(r,m)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(m,Fg)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let r0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new a0(e),t.set(e,i)),i}}class a0{constructor(e){this.id=r0++,this.code=e,this.usedTimes=0}}function o0(n,e,t,i,r,s,o){const a=new ro,l=new s0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,y,B,V,te){const I=V.fog,O=te.geometry,k=v.isMeshStandardMaterial?V.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),Y=K&&K.mapping===As?K.image.height:null,j=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ie=Z!==void 0?Z.length:0;let ae=0;O.morphAttributes.position!==void 0&&(ae=1),O.morphAttributes.normal!==void 0&&(ae=2),O.morphAttributes.color!==void 0&&(ae=3);let X,N,se,W;if(j){const Ct=ln[j];X=Ct.vertexShader,N=Ct.fragmentShader}else X=v.vertexShader,N=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),W=l.getFragmentShaderID(v);const Q=n.getRenderTarget(),fe=te.isInstancedMesh===!0,me=te.isBatchedMesh===!0,xe=!!v.map,De=!!v.matcap,F=!!K,ut=!!v.aoMap,Ee=!!v.lightMap,Ce=!!v.bumpMap,Me=!!v.normalMap,nt=!!v.displacementMap,Ie=!!v.emissiveMap,w=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,re=v.clearcoat>0,ee=v.iridescence>0,ne=v.sheen>0,Se=v.transmission>0,pe=z&&!!v.anisotropyMap,ve=re&&!!v.clearcoatMap,Ae=re&&!!v.clearcoatNormalMap,Oe=re&&!!v.clearcoatRoughnessMap,J=ee&&!!v.iridescenceMap,Xe=ee&&!!v.iridescenceThicknessMap,P=ne&&!!v.sheenColorMap,$=ne&&!!v.sheenRoughnessMap,de=!!v.specularMap,oe=!!v.specularColorMap,ye=!!v.specularIntensityMap,Ve=Se&&!!v.transmissionMap,qe=Se&&!!v.thicknessMap,Ge=!!v.gradientMap,ue=!!v.alphaMap,L=v.alphaTest>0,le=!!v.alphaHash,ce=!!v.extensions,we=!!O.attributes.uv1,be=!!O.attributes.uv2,Ye=!!O.attributes.uv3;let je=Fn;return v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(je=n.toneMapping),{isWebGL2:u,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:N,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:me,instancing:fe,instancingColor:fe&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Rn,map:xe,matcap:De,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:Y,aoMap:ut,lightMap:Ee,bumpMap:Ce,normalMap:Me,displacementMap:h&&nt,emissiveMap:Ie,normalMapObjectSpace:Me&&v.normalMapType===nh,normalMapTangentSpace:Me&&v.normalMapType===au,metalnessMap:w,roughnessMap:S,anisotropy:z,anisotropyMap:pe,clearcoat:re,clearcoatMap:ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Oe,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Xe,sheen:ne,sheenColorMap:P,sheenRoughnessMap:$,specularMap:de,specularColorMap:oe,specularIntensityMap:ye,transmission:Se,transmissionMap:Ve,thicknessMap:qe,gradientMap:Ge,opaque:v.transparent===!1&&v.blending===Gi,alphaMap:ue,alphaTest:L,alphaHash:le,combine:v.combine,mapUv:xe&&_(v.map.channel),aoMapUv:ut&&_(v.aoMap.channel),lightMapUv:Ee&&_(v.lightMap.channel),bumpMapUv:Ce&&_(v.bumpMap.channel),normalMapUv:Me&&_(v.normalMap.channel),displacementMapUv:nt&&_(v.displacementMap.channel),emissiveMapUv:Ie&&_(v.emissiveMap.channel),metalnessMapUv:w&&_(v.metalnessMap.channel),roughnessMapUv:S&&_(v.roughnessMap.channel),anisotropyMapUv:pe&&_(v.anisotropyMap.channel),clearcoatMapUv:ve&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:P&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:$&&_(v.sheenRoughnessMap.channel),specularMapUv:de&&_(v.specularMap.channel),specularColorMapUv:oe&&_(v.specularColorMap.channel),specularIntensityMapUv:ye&&_(v.specularIntensityMap.channel),transmissionMapUv:Ve&&_(v.transmissionMap.channel),thicknessMapUv:qe&&_(v.thicknessMap.channel),alphaMapUv:ue&&_(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Me||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:be,vertexUv3s:Ye,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(xe||ue),fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===Pt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ce&&v.extensions.derivatives===!0,extensionFragDepth:ce&&v.extensions.fragDepth===!0,extensionDrawBuffers:ce&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)y.push(B),y.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(M(y,v),x(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function E(v){const y=g[v.type];let B;if(y){const V=ln[y];B=ys.clone(V.uniforms)}else B=v.uniforms;return B}function C(v,y){let B;for(let V=0,te=c.length;V<te;V++){const I=c[V];if(I.cacheKey===y){B=I,++B.usedTimes;break}}return B===void 0&&(B=new i0(n,y,v,s),c.push(B)),B}function R(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:D}}function l0(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function c0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ql(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||c0),i.length>1&&i.sort(h||Jl),r.length>1&&r.sort(h||Jl)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function u0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ql,n.set(i,[o])):r>=s.length?(o=new Ql,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function d0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Pe};break;case"SpotLight":t={position:new b,direction:new b,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function h0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let f0=0;function p0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m0(n,e){const t=new d0,i=h0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new b);const s=new b,o=new $e,a=new $e;function l(u,f){let h=0,p=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let _=0,m=0,d=0,M=0,x=0,E=0,C=0,R=0,A=0,D=0,v=0;u.sort(p0);const y=f===!0?Math.PI:1;for(let V=0,te=u.length;V<te;V++){const I=u[V],O=I.color,k=I.intensity,K=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*k*y,p+=O.g*k*y,g+=O.b*k*y;else if(I.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(I.sh.coefficients[j],k);v++}else if(I.isDirectionalLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const Z=I.shadow,ie=i.get(I);ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=Y,r.directionalShadowMatrix[_]=I.shadow.matrix,E++}r.directional[_]=j,_++}else if(I.isSpotLight){const j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(O).multiplyScalar(k*y),j.distance=K,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,r.spot[d]=j;const Z=I.shadow;if(I.map&&(r.spotLightMap[A]=I.map,A++,Z.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[d]=Z.matrix,I.castShadow){const ie=i.get(I);ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.spotShadow[d]=ie,r.spotShadowMap[d]=Y,R++}d++}else if(I.isRectAreaLight){const j=t.get(I);j.color.copy(O).multiplyScalar(k),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=j,M++}else if(I.isPointLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*y),j.distance=I.distance,j.decay=I.decay,I.castShadow){const Z=I.shadow,ie=i.get(I);ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,r.pointShadow[m]=ie,r.pointShadowMap[m]=Y,r.pointShadowMatrix[m]=I.shadow.matrix,C++}r.point[m]=j,m++}else if(I.isHemisphereLight){const j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(k*y),j.groundColor.copy(I.groundColor).multiplyScalar(k*y),r.hemi[x]=j,x++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const B=r.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==d||B.rectAreaLength!==M||B.hemiLength!==x||B.numDirectionalShadows!==E||B.numPointShadows!==C||B.numSpotShadows!==R||B.numSpotMaps!==A||B.numLightProbes!==v)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=M,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=v,B.directionalLength=_,B.pointLength=m,B.spotLength=d,B.rectAreaLength=M,B.hemiLength=x,B.numDirectionalShadows=E,B.numPointShadows=C,B.numSpotShadows=R,B.numSpotMaps=A,B.numLightProbes=v,r.version=f0++)}function c(u,f){let h=0,p=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const E=u[M];if(E.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),h++}else if(E.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function ec(n,e){const t=new m0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function g0(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ec(n,e),t.set(s,[l])):o>=a.length?(l=new ec(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class _0 extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v0 extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function S0(n,e,t){let i=new so;const r=new ge,s=new ge,o=new at,a=new _0({depthPacking:th}),l=new v0,c={},u=t.maxTextureSize,f={[zn]:Pt,[Pt]:zn,[cn]:cn},h=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:x0,fragmentShader:M0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let d=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=n.getRenderTarget(),y=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),V=n.state;V.setBlending(En),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const te=d!==Mn&&this.type===Mn,I=d===Mn&&this.type!==Mn;for(let O=0,k=R.length;O<k;O++){const K=R[O],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const j=Y.getFrameExtents();if(r.multiply(j),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,Y.mapSize.y=s.y)),Y.map===null||te===!0||I===!0){const ie=this.type!==Mn?{minFilter:Ut,magFilter:Ut}:{};Y.map!==null&&Y.map.dispose(),Y.map=new an(r.x,r.y,ie),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const Z=Y.getViewportCount();for(let ie=0;ie<Z;ie++){const ae=Y.getViewport(ie);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),V.viewport(o),Y.updateMatrices(K,ie),i=Y.getFrustum(),E(A,D,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Mn&&M(Y,D),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(v,y,B)};function M(R,A){const D=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new an(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,D,h,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,D,p,_,null)}function x(R,A,D,v){let y=null;const B=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)y=B;else if(y=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=y.uuid,te=A.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let O=I[te];O===void 0&&(O=y.clone(),I[te]=O,A.addEventListener("dispose",C)),y=O}if(y.visible=A.visible,y.wireframe=A.wireframe,v===Mn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=n.properties.get(y);V.light=D}return y}function E(R,A,D,v,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Mn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const te=e.update(R),I=R.material;if(Array.isArray(I)){const O=te.groups;for(let k=0,K=O.length;k<K;k++){const Y=O[k],j=I[Y.materialIndex];if(j&&j.visible){const Z=x(R,j,v,y);R.onBeforeShadow(n,R,A,D,te,Z,Y),n.renderBufferDirect(D,null,te,Z,R,Y),R.onAfterShadow(n,R,A,D,te,Z,Y)}}}else if(I.visible){const O=x(R,I,v,y);R.onBeforeShadow(n,R,A,D,te,O,null),n.renderBufferDirect(D,null,te,O,R,null),R.onAfterShadow(n,R,A,D,te,O,null)}}const V=R.children;for(let te=0,I=V.length;te<I;te++)E(V[te],A,D,v,y)}function C(R){R.target.removeEventListener("dispose",C);for(const D in c){const v=c[D],y=R.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function y0(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const le=new at;let ce=null;const we=new at(0,0,0,0);return{setMask:function(be){ce!==be&&!L&&(n.colorMask(be,be,be,be),ce=be)},setLocked:function(be){L=be},setClear:function(be,Ye,je,xt,Ct){Ct===!0&&(be*=xt,Ye*=xt,je*=xt),le.set(be,Ye,je,xt),we.equals(le)===!1&&(n.clearColor(be,Ye,je,xt),we.copy(le))},reset:function(){L=!1,ce=null,we.set(-1,0,0,0)}}}function s(){let L=!1,le=null,ce=null,we=null;return{setTest:function(be){be?me(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(be){le!==be&&!L&&(n.depthMask(be),le=be)},setFunc:function(be){if(ce!==be){switch(be){case Ld:n.depthFunc(n.NEVER);break;case Dd:n.depthFunc(n.ALWAYS);break;case Id:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case Ud:n.depthFunc(n.EQUAL);break;case Nd:n.depthFunc(n.GEQUAL);break;case Od:n.depthFunc(n.GREATER);break;case Fd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=be}},setLocked:function(be){L=be},setClear:function(be){we!==be&&(n.clearDepth(be),we=be)},reset:function(){L=!1,le=null,ce=null,we=null}}}function o(){let L=!1,le=null,ce=null,we=null,be=null,Ye=null,je=null,xt=null,Ct=null;return{setTest:function(tt){L||(tt?me(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(tt){le!==tt&&!L&&(n.stencilMask(tt),le=tt)},setFunc:function(tt,Lt,on){(ce!==tt||we!==Lt||be!==on)&&(n.stencilFunc(tt,Lt,on),ce=tt,we=Lt,be=on)},setOp:function(tt,Lt,on){(Ye!==tt||je!==Lt||xt!==on)&&(n.stencilOp(tt,Lt,on),Ye=tt,je=Lt,xt=on)},setLocked:function(tt){L=tt},setClear:function(tt){Ct!==tt&&(n.clearStencil(tt),Ct=tt)},reset:function(){L=!1,le=null,ce=null,we=null,be=null,Ye=null,je=null,xt=null,Ct=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,x=null,E=null,C=null,R=null,A=null,D=null,v=new Pe(0,0,0),y=0,B=!1,V=null,te=null,I=null,O=null,k=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=j>=2);let ie=null,ae={};const X=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),se=new at().fromArray(X),W=new at().fromArray(N);function Q(L,le,ce,we){const be=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(L,Ye),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<ce;je++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(le+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Ye}const fe={};fe[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(fe[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(n.DEPTH_TEST),l.setFunc(ps),Ie(!1),w(Fo),me(n.CULL_FACE),Me(En);function me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function xe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function De(L,le){return p[L]!==le?(n.bindFramebuffer(L,le),p[L]=le,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function F(L,le){let ce=_,we=!1;if(L)if(ce=g.get(le),ce===void 0&&(ce=[],g.set(le,ce)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(ce.length!==be.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,je=be.length;Ye<je;Ye++)ce[Ye]=n.COLOR_ATTACHMENT0+Ye;ce.length=be.length,we=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,we=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,we=!0);we&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function ut(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Ee={[Qn]:n.FUNC_ADD,[gd]:n.FUNC_SUBTRACT,[_d]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Go]=n.MIN,Ee[Ho]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[Go]=L.MIN_EXT,Ee[Ho]=L.MAX_EXT)}const Ce={[vd]:n.ZERO,[xd]:n.ONE,[Md]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[wd]:n.SRC_ALPHA_SATURATE,[bd]:n.DST_COLOR,[yd]:n.DST_ALPHA,[Sd]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[Td]:n.ONE_MINUS_DST_COLOR,[Ed]:n.ONE_MINUS_DST_ALPHA,[Ad]:n.CONSTANT_COLOR,[Rd]:n.ONE_MINUS_CONSTANT_COLOR,[Pd]:n.CONSTANT_ALPHA,[Cd]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(L,le,ce,we,be,Ye,je,xt,Ct,tt){if(L===En){d===!0&&(xe(n.BLEND),d=!1);return}if(d===!1&&(me(n.BLEND),d=!0),L!==md){if(L!==M||tt!==B){if((x!==Qn||R!==Qn)&&(n.blendEquation(n.FUNC_ADD),x=Qn,R=Qn),tt)switch(L){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hn:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,C=null,A=null,D=null,v.set(0,0,0),y=0,M=L,B=tt}return}be=be||le,Ye=Ye||ce,je=je||we,(le!==x||be!==R)&&(n.blendEquationSeparate(Ee[le],Ee[be]),x=le,R=be),(ce!==E||we!==C||Ye!==A||je!==D)&&(n.blendFuncSeparate(Ce[ce],Ce[we],Ce[Ye],Ce[je]),E=ce,C=we,A=Ye,D=je),(xt.equals(v)===!1||Ct!==y)&&(n.blendColor(xt.r,xt.g,xt.b,Ct),v.copy(xt),y=Ct),M=L,B=!1}function nt(L,le){L.side===cn?xe(n.CULL_FACE):me(n.CULL_FACE);let ce=L.side===Pt;le&&(ce=!ce),Ie(ce),L.blending===Gi&&L.transparent===!1?Me(En):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const we=L.stencilWrite;c.setTest(we),we&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){V!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),V=L)}function w(L){L!==hd?(me(n.CULL_FACE),L!==te&&(L===Fo?n.cullFace(n.BACK):L===fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),te=L}function S(L){L!==I&&(Y&&n.lineWidth(L),I=L)}function z(L,le,ce){L?(me(n.POLYGON_OFFSET_FILL),(O!==le||k!==ce)&&(n.polygonOffset(le,ce),O=le,k=ce)):xe(n.POLYGON_OFFSET_FILL)}function re(L){L?me(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function ee(L){L===void 0&&(L=n.TEXTURE0+K-1),ie!==L&&(n.activeTexture(L),ie=L)}function ne(L,le,ce){ce===void 0&&(ie===null?ce=n.TEXTURE0+K-1:ce=ie);let we=ae[ce];we===void 0&&(we={type:void 0,texture:void 0},ae[ce]=we),(we.type!==L||we.texture!==le)&&(ie!==ce&&(n.activeTexture(ce),ie=ce),n.bindTexture(L,le||fe[L]),we.type=L,we.texture=le)}function Se(){const L=ae[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){se.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function Ve(L){W.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function qe(L,le){let ce=f.get(le);ce===void 0&&(ce=new WeakMap,f.set(le,ce));let we=ce.get(L);we===void 0&&(we=n.getUniformBlockIndex(le,L.name),ce.set(L,we))}function Ge(L,le){const we=f.get(le).get(L);u.get(le)!==we&&(n.uniformBlockBinding(le,we,L.__bindingPointIndex),u.set(le,we))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,ae={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,x=null,E=null,C=null,R=null,A=null,D=null,v=new Pe(0,0,0),y=0,B=!1,V=null,te=null,I=null,O=null,k=null,se.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:xe,bindFramebuffer:De,drawBuffers:F,useProgram:ut,setBlending:Me,setMaterial:nt,setFlipSided:Ie,setCullFace:w,setLineWidth:S,setPolygonOffset:z,setScissorTest:re,activeTexture:ee,bindTexture:ne,unbindTexture:Se,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:de,texImage3D:oe,updateUBOMapping:qe,uniformBlockBinding:Ge,texStorage2D:P,texStorage3D:$,texSubImage2D:Ae,texSubImage3D:Oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Xe,scissor:ye,viewport:Ve,reset:ue}}function E0(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):Ss("canvas")}function _(w,S,z,re){let ee=1;if((w.width>re||w.height>re)&&(ee=re/Math.max(w.width,w.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ne=S?Ms:Math.floor,Se=ne(ee*w.width),pe=ne(ee*w.height);f===void 0&&(f=g(Se,pe));const ve=z?g(Se,pe):f;return ve.width=Se,ve.height=pe,ve.getContext("2d").drawImage(w,0,0,Se,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Se+"x"+pe+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Ha(w.width)&&Ha(w.height)}function d(w){return a?!1:w.wrapS!==$t||w.wrapT!==$t||w.minFilter!==Ut&&w.minFilter!==Kt}function M(w,S){return w.generateMipmaps&&S&&w.minFilter!==Ut&&w.minFilter!==Kt}function x(w){n.generateMipmap(w)}function E(w,S,z,re,ee=!1){if(a===!1)return S;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=S;if(S===n.RED&&(z===n.FLOAT&&(ne=n.R32F),z===n.HALF_FLOAT&&(ne=n.R16F),z===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.R8UI),z===n.UNSIGNED_SHORT&&(ne=n.R16UI),z===n.UNSIGNED_INT&&(ne=n.R32UI),z===n.BYTE&&(ne=n.R8I),z===n.SHORT&&(ne=n.R16I),z===n.INT&&(ne=n.R32I)),S===n.RG&&(z===n.FLOAT&&(ne=n.RG32F),z===n.HALF_FLOAT&&(ne=n.RG16F),z===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RGBA){const Se=ee?gs:Qe.getTransfer(re);z===n.FLOAT&&(ne=n.RGBA32F),z===n.HALF_FLOAT&&(ne=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ne=Se===rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(w,S,z){return M(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==Ut&&w.minFilter!==Kt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){return w===Ut||w===Vo||w===Xs?n.NEAREST:n.LINEAR}function A(w){const S=w.target;S.removeEventListener("dispose",A),v(S),S.isVideoTexture&&u.delete(S)}function D(w){const S=w.target;S.removeEventListener("dispose",D),B(S)}function v(w){const S=i.get(w);if(S.__webglInit===void 0)return;const z=w.source,re=h.get(z);if(re){const ee=re[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(w),Object.keys(re).length===0&&h.delete(z)}i.remove(w)}function y(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const z=w.source,re=h.get(z);delete re[S.__cacheKey],o.memory.textures--}function B(w){const S=w.texture,z=i.get(w),re=i.get(S);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let ne=0;ne<z.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(z.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)n.deleteFramebuffer(z.__webglFramebuffer[ee]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,ne=S.length;ee<ne;ee++){const Se=i.get(S[ee]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(w)}let V=0;function te(){V=0}function I(){const w=V;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),V+=1,w}function O(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function k(w,S){const z=i.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,w,S);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function K(w,S){const z=i.get(w);if(w.version>0&&z.__version!==w.version){se(z,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function Y(w,S){const z=i.get(w);if(w.version>0&&z.__version!==w.version){se(z,w,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function j(w,S){const z=i.get(w);if(w.version>0&&z.__version!==w.version){W(z,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const Z={[ms]:n.REPEAT,[$t]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},ie={[Ut]:n.NEAREST,[Vo]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Xd]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},ae={[ih]:n.NEVER,[ch]:n.ALWAYS,[rh]:n.LESS,[ou]:n.LEQUAL,[sh]:n.EQUAL,[lh]:n.GEQUAL,[ah]:n.GREATER,[oh]:n.NOTEQUAL};function X(w,S,z){if(z?(n.texParameteri(w,n.TEXTURE_WRAP_S,Z[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Z[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Z[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ie[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ie[S.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==$t||S.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,R(S.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Ut&&S.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ut||S.minFilter!==Xs&&S.minFilter!==mr||S.type===On&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===bn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(w,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function N(w,S){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const re=S.source;let ee=h.get(re);ee===void 0&&(ee={},h.set(re,ee));const ne=O(S);if(ne!==w.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[ne].usedTimes++;const Se=ee[w.__cacheKey];Se!==void 0&&(ee[w.__cacheKey].usedTimes--,Se.usedTimes===0&&y(S)),w.__cacheKey=ne,w.__webglTexture=ee[ne].texture}return z}function se(w,S,z){let re=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=n.TEXTURE_3D);const ee=N(w,S),ne=S.source;t.bindTexture(re,w.__webglTexture,n.TEXTURE0+z);const Se=i.get(ne);if(ne.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const pe=Qe.getPrimaries(Qe.workingColorSpace),ve=S.colorSpace===Jt?null:Qe.getPrimaries(S.colorSpace),Ae=S.colorSpace===Jt||pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Oe=d(S)&&m(S.image)===!1;let J=_(S.image,Oe,!1,r.maxTextureSize);J=Ie(S,J);const Xe=m(J)||a,P=s.convert(S.format,S.colorSpace);let $=s.convert(S.type),de=E(S.internalFormat,P,$,S.colorSpace,S.isVideoTexture);X(re,S,Xe);let oe;const ye=S.mipmaps,Ve=a&&S.isVideoTexture!==!0&&de!==ru,qe=Se.__version===void 0||ee===!0,Ge=C(S,J,Xe);if(S.isDepthTexture)de=n.DEPTH_COMPONENT,a?S.type===On?de=n.DEPTH_COMPONENT32F:S.type===Nn?de=n.DEPTH_COMPONENT24:S.type===ii?de=n.DEPTH24_STENCIL8:de=n.DEPTH_COMPONENT16:S.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ri&&de===n.DEPTH_COMPONENT&&S.type!==to&&S.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Nn,$=s.convert(S.type)),S.format===Wi&&de===n.DEPTH_COMPONENT&&(de=n.DEPTH_STENCIL,S.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ii,$=s.convert(S.type))),qe&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,de,J.width,J.height,0,P,$,null));else if(S.isDataTexture)if(ye.length>0&&Xe){Ve&&qe&&t.texStorage2D(n.TEXTURE_2D,Ge,de,ye[0].width,ye[0].height);for(let ue=0,L=ye.length;ue<L;ue++)oe=ye[ue],Ve?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,oe.width,oe.height,P,$,oe.data):t.texImage2D(n.TEXTURE_2D,ue,de,oe.width,oe.height,0,P,$,oe.data);S.generateMipmaps=!1}else Ve?(qe&&t.texStorage2D(n.TEXTURE_2D,Ge,de,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,P,$,J.data)):t.texImage2D(n.TEXTURE_2D,0,de,J.width,J.height,0,P,$,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,de,ye[0].width,ye[0].height,J.depth);for(let ue=0,L=ye.length;ue<L;ue++)oe=ye[ue],S.format!==rn?P!==null?Ve?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,oe.width,oe.height,J.depth,P,oe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,de,oe.width,oe.height,J.depth,0,oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,oe.width,oe.height,J.depth,P,$,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,de,oe.width,oe.height,J.depth,0,P,$,oe.data)}else{Ve&&qe&&t.texStorage2D(n.TEXTURE_2D,Ge,de,ye[0].width,ye[0].height);for(let ue=0,L=ye.length;ue<L;ue++)oe=ye[ue],S.format!==rn?P!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,oe.width,oe.height,P,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,oe.width,oe.height,P,$,oe.data):t.texImage2D(n.TEXTURE_2D,ue,de,oe.width,oe.height,0,P,$,oe.data)}else if(S.isDataArrayTexture)Ve?(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,de,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,P,$,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,P,$,J.data);else if(S.isData3DTexture)Ve?(qe&&t.texStorage3D(n.TEXTURE_3D,Ge,de,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,P,$,J.data)):t.texImage3D(n.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,P,$,J.data);else if(S.isFramebufferTexture){if(qe)if(Ve)t.texStorage2D(n.TEXTURE_2D,Ge,de,J.width,J.height);else{let ue=J.width,L=J.height;for(let le=0;le<Ge;le++)t.texImage2D(n.TEXTURE_2D,le,de,ue,L,0,P,$,null),ue>>=1,L>>=1}}else if(ye.length>0&&Xe){Ve&&qe&&t.texStorage2D(n.TEXTURE_2D,Ge,de,ye[0].width,ye[0].height);for(let ue=0,L=ye.length;ue<L;ue++)oe=ye[ue],Ve?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,P,$,oe):t.texImage2D(n.TEXTURE_2D,ue,de,P,$,oe);S.generateMipmaps=!1}else Ve?(qe&&t.texStorage2D(n.TEXTURE_2D,Ge,de,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,P,$,J)):t.texImage2D(n.TEXTURE_2D,0,de,P,$,J);M(S,Xe)&&x(re),Se.__version=ne.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function W(w,S,z){if(S.image.length!==6)return;const re=N(w,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);const ne=i.get(ee);if(ee.version!==ne.__version||re===!0){t.activeTexture(n.TEXTURE0+z);const Se=Qe.getPrimaries(Qe.workingColorSpace),pe=S.colorSpace===Jt?null:Qe.getPrimaries(S.colorSpace),ve=S.colorSpace===Jt||Se===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,J=[];for(let ue=0;ue<6;ue++)!Ae&&!Oe?J[ue]=_(S.image[ue],!1,!0,r.maxCubemapSize):J[ue]=Oe?S.image[ue].image:S.image[ue],J[ue]=Ie(S,J[ue]);const Xe=J[0],P=m(Xe)||a,$=s.convert(S.format,S.colorSpace),de=s.convert(S.type),oe=E(S.internalFormat,$,de,S.colorSpace),ye=a&&S.isVideoTexture!==!0,Ve=ne.__version===void 0||re===!0;let qe=C(S,Xe,P);X(n.TEXTURE_CUBE_MAP,S,P);let Ge;if(Ae){ye&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,oe,Xe.width,Xe.height);for(let ue=0;ue<6;ue++){Ge=J[ue].mipmaps;for(let L=0;L<Ge.length;L++){const le=Ge[L];S.format!==rn?$!==null?ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,le.width,le.height,$,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,oe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,le.width,le.height,$,de,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,oe,le.width,le.height,0,$,de,le.data)}}}else{Ge=S.mipmaps,ye&&Ve&&(Ge.length>0&&qe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,oe,J[0].width,J[0].height));for(let ue=0;ue<6;ue++)if(Oe){ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,J[ue].width,J[ue].height,$,de,J[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,oe,J[ue].width,J[ue].height,0,$,de,J[ue].data);for(let L=0;L<Ge.length;L++){const ce=Ge[L].image[ue].image;ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,ce.width,ce.height,$,de,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,oe,ce.width,ce.height,0,$,de,ce.data)}}else{ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,$,de,J[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,oe,$,de,J[ue]);for(let L=0;L<Ge.length;L++){const le=Ge[L];ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,$,de,le.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,oe,$,de,le.image[ue])}}}M(S,P)&&x(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,z,re,ee,ne){const Se=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),ve=E(z.internalFormat,Se,pe,z.colorSpace);if(!i.get(S).__hasExternalTextures){const Oe=Math.max(1,S.width>>ne),J=Math.max(1,S.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,ve,Oe,J,S.depth,0,Se,pe,null):t.texImage2D(ee,ne,ve,Oe,J,0,Se,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,i.get(z).__webglTexture,0,Ce(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,i.get(z).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(w,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||Me(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===On?re=n.DEPTH_COMPONENT32F:ee.type===Nn&&(re=n.DEPTH_COMPONENT24));const ne=Ce(S);Me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,re,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,re,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const re=Ce(S);z&&Me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<re.length;ee++){const ne=re[ee],Se=s.convert(ne.format,ne.colorSpace),pe=s.convert(ne.type),ve=E(ne.internalFormat,Se,pe,ne.colorSpace),Ae=Ce(S);z&&Me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ve,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ve,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ve,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const re=i.get(S.depthTexture).__webglTexture,ee=Ce(S);if(S.depthTexture.format===ri)Me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(S.depthTexture.format===Wi)Me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(w){const S=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");me(S.__webglFramebuffer,w)}else if(z){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=n.createRenderbuffer(),fe(S.__webglDepthbuffer[re],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),fe(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(w,S,z){const re=i.get(w);S!==void 0&&Q(re.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&xe(w)}function F(w){const S=w.texture,z=i.get(w),re=i.get(S);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=S.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,Se=m(w)||a;if(ee){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let ve=0;ve<S.mipmaps.length;ve++)z.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)z.__webglFramebuffer[pe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const pe=w.texture;for(let ve=0,Ae=pe.length;ve<Ae;ve++){const Oe=i.get(pe[ve]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Me(w)===!1){const pe=ne?S:[S];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<pe.length;ve++){const Ae=pe[ve];z.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);const Oe=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),Xe=E(Ae.internalFormat,Oe,J,Ae.colorSpace,w.isXRRenderTarget===!0),P=Ce(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,P,Xe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),X(n.TEXTURE_CUBE_MAP,S,Se);for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Q(z.__webglFramebuffer[pe][ve],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else Q(z.__webglFramebuffer[pe],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(S,Se)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const pe=w.texture;for(let ve=0,Ae=pe.length;ve<Ae;ve++){const Oe=pe[ve],J=i.get(Oe);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),X(n.TEXTURE_2D,Oe,Se),Q(z.__webglFramebuffer,w,Oe,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),M(Oe,Se)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?pe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),X(pe,S,Se),a&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Q(z.__webglFramebuffer[ve],w,S,n.COLOR_ATTACHMENT0,pe,ve);else Q(z.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,pe,0);M(S,Se)&&x(pe),t.unbindTexture()}w.depthBuffer&&xe(w)}function ut(w){const S=m(w)||a,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0,ee=z.length;re<ee;re++){const ne=z[re];if(M(ne,S)){const Se=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(ne).__webglTexture;t.bindTexture(Se,pe),x(Se),t.unbindTexture()}}}function Ee(w){if(a&&w.samples>0&&Me(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,re=w.height;let ee=n.COLOR_BUFFER_BIT;const ne=[],Se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(w),ve=w.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){ne.push(n.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&ne.push(Se);const Oe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Oe===!1&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]),Oe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),ve){const J=i.get(S[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,z,re,0,0,z,re,ee,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]);const Oe=i.get(S[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ce(w){return Math.min(r.maxSamples,w.samples)}function Me(w){const S=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function Ie(w,S){const z=w.colorSpace,re=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ga||z!==Rn&&z!==Jt&&(Qe.getTransfer(z)===rt?a===!1?e.has("EXT_sRGB")===!0&&re===rn?(w.format=Ga,w.minFilter=Kt,w.generateMipmaps=!1):S=cu.sRGBToLinear(S):(re!==rn||ee!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=De,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Me}function b0(n,e,t){const i=t.isWebGL2;function r(s,o=Jt){let a;const l=Qe.getTransfer(o);if(s===Bn)return n.UNSIGNED_BYTE;if(s===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===qd)return n.BYTE;if(s===Yd)return n.SHORT;if(s===to)return n.UNSIGNED_SHORT;if(s===Jc)return n.INT;if(s===Nn)return n.UNSIGNED_INT;if(s===On)return n.FLOAT;if(s===bn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jd)return n.ALPHA;if(s===rn)return n.RGBA;if(s===Kd)return n.LUMINANCE;if(s===Zd)return n.LUMINANCE_ALPHA;if(s===ri)return n.DEPTH_COMPONENT;if(s===Wi)return n.DEPTH_STENCIL;if(s===Ga)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$d)return n.RED;if(s===tu)return n.RED_INTEGER;if(s===Jd)return n.RG;if(s===nu)return n.RG_INTEGER;if(s===iu)return n.RGBA_INTEGER;if(s===qs||s===Ys||s===js||s===Ks)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ko||s===Wo||s===Xo||s===qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ru)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yo||s===jo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yo)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jo)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ko||s===Zo||s===$o||s===Jo||s===Qo||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===al||s===ol||s===ll)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ko)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zo)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$o)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jo)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qo)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===el)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tl)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nl)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===il)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rl)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sl)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===al)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ol)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ll)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zs||s===cl||s===ul)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zs)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ul)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===dl||s===hl||s===fl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Zs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===dl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ii?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class T0 extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nt extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w0={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class A0 extends ci{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const M=[],x=[],E=new ge;let C=null;const R=new kt;R.layers.enable(1),R.viewport=new at;const A=new kt;A.layers.enable(2),A.viewport=new at;const D=[R,A],v=new T0;v.layers.enable(1),v.layers.enable(2);let y=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let N=M[X];return N===void 0&&(N=new xa,M[X]=N),N.getTargetRaySpace()},this.getControllerGrip=function(X){let N=M[X];return N===void 0&&(N=new xa,M[X]=N),N.getGripSpace()},this.getHand=function(X){let N=M[X];return N===void 0&&(N=new xa,M[X]=N),N.getHandSpace()};function V(X){const N=x.indexOf(X.inputSource);if(N===-1)return;const se=M[N];se!==void 0&&(se.update(X.inputSource,X.frame,c||o),se.dispatchEvent({type:X.type,data:X.inputSource}))}function te(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",I);for(let X=0;X<M.length;X++){const N=x[X];N!==null&&(x[X]=null,M[X].disconnect(N))}y=null,B=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",te),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new an(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let N=null,se=null,W=null;_.depth&&(W=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=_.stencil?Wi:ri,se=_.stencil?ii:Nn);const Q={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Q),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new an(h.textureWidth,h.textureHeight,{format:rn,type:Bn,depthTexture:new xu(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const fe=e.properties.get(d);fe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(X){for(let N=0;N<X.removed.length;N++){const se=X.removed[N],W=x.indexOf(se);W>=0&&(x[W]=null,M[W].disconnect(se))}for(let N=0;N<X.added.length;N++){const se=X.added[N];let W=x.indexOf(se);if(W===-1){for(let fe=0;fe<M.length;fe++)if(fe>=x.length){x.push(se),W=fe;break}else if(x[fe]===null){x[fe]=se,W=fe;break}if(W===-1)break}const Q=M[W];Q&&Q.connect(se)}}const O=new b,k=new b;function K(X,N,se){O.setFromMatrixPosition(N.matrixWorld),k.setFromMatrixPosition(se.matrixWorld);const W=O.distanceTo(k),Q=N.projectionMatrix.elements,fe=se.projectionMatrix.elements,me=Q[14]/(Q[10]-1),xe=Q[14]/(Q[10]+1),De=(Q[9]+1)/Q[5],F=(Q[9]-1)/Q[5],ut=(Q[8]-1)/Q[0],Ee=(fe[8]+1)/fe[0],Ce=me*ut,Me=me*Ee,nt=W/(-ut+Ee),Ie=nt*-ut;N.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(nt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=me+nt,S=xe+nt,z=Ce-Ie,re=Me+(W-Ie),ee=De*xe/S*w,ne=F*xe/S*w;X.projectionMatrix.makePerspective(z,re,ee,ne,w,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,N){N===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(N.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;v.near=A.near=R.near=X.near,v.far=A.far=R.far=X.far,(y!==v.near||B!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,B=v.far);const N=X.parent,se=v.cameras;Y(v,N);for(let W=0;W<se.length;W++)Y(se[W],N);se.length===2?K(v,R,A):v.projectionMatrix.copy(R.projectionMatrix),j(X,v,N)};function j(X,N,se){se===null?X.matrix.copy(N.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(N.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(N.projectionMatrix),X.projectionMatrixInverse.copy(N.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let Z=null;function ie(X,N){if(u=N.getViewerPose(c||o),g=N,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let W=!1;se.length!==v.cameras.length&&(v.cameras.length=0,W=!0);for(let Q=0;Q<se.length;Q++){const fe=se[Q];let me=null;if(p!==null)me=p.getViewport(fe);else{const De=f.getViewSubImage(h,fe);me=De.viewport,Q===0&&(e.setRenderTargetTextures(d,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let xe=D[Q];xe===void 0&&(xe=new kt,xe.layers.enable(Q),xe.viewport=new at,D[Q]=xe),xe.matrix.fromArray(fe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(fe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(me.x,me.y,me.width,me.height),Q===0&&(v.matrix.copy(xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),W===!0&&v.cameras.push(xe)}}for(let se=0;se<M.length;se++){const W=x[se],Q=M[se];W!==null&&Q!==void 0&&Q.update(W,N,c||o)}Z&&Z(X,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),g=null}const ae=new vu;ae.setAnimationLoop(ie),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}}function R0(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,mu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function P0(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const E=x.program;i.uniformBlockBinding(M,E)}function c(M,x){let E=r[M.id];E===void 0&&(g(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(M,C);const R=e.render.frame;s[M.id]!==R&&(h(M),s[M.id]=R)}function u(M){const x=f();M.__bindingPointIndex=x;const E=n.createBuffer(),C=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=r[M.id],E=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,A=E.length;R<A;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,y=D.length;v<y;v++){const B=D[v];if(p(B,R,v,C)===!0){const V=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let I=0;for(let O=0;O<te.length;O++){const k=te[O],K=_(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,V+I,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,x,E,C){const R=M.value,A=x+"_"+E;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const D=C[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(M){const x=M.uniforms;let E=0;const C=16;for(let A=0,D=x.length;A<D;A++){const v=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,B=v.length;y<B;y++){const V=v[y],te=Array.isArray(V.value)?V.value:[V.value];for(let I=0,O=te.length;I<O;I++){const k=te[I],K=_(k),Y=E%C;Y!==0&&C-Y<K.boundary&&(E+=C-Y),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=K.storage}}}const R=E%C;return R>0&&(E+=C-R),M.__size=E,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Tu{constructor(e={}){const{canvas:t=Th(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let E=!1,C=0,R=0,A=null,D=-1,v=null;const y=new at,B=new at;let V=null;const te=new Pe(0);let I=0,O=t.width,k=t.height,K=1,Y=null,j=null;const Z=new at(0,0,O,k),ie=new at(0,0,O,k);let ae=!1;const X=new so;let N=!1,se=!1,W=null;const Q=new $e,fe=new ge,me=new b,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return A===null?K:1}let F=i;function ut(T,U){for(let H=0;H<T.length;H++){const q=T[H],G=t.getContext(q,U);if(G!==null)return G}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eo}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=ut(U,T),F===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Ce,Me,nt,Ie,w,S,z,re,ee,ne,Se,pe,ve,Ae,Oe,J,Xe,P,$,de,oe,ye,Ve;function qe(){Ee=new zm(F),Ce=new Im(F,Ee,e),Ee.init(Ce),oe=new b0(F,Ee,Ce),Me=new y0(F,Ee,Ce),nt=new Vm(F),Ie=new l0,w=new E0(F,Ee,Me,Ie,Ce,oe,nt),S=new Nm(x),z=new Bm(x),re=new Kh(F,Ce),ye=new Lm(F,Ee,re,Ce),ee=new Gm(F,re,nt,ye),ne=new qm(F,ee,re,nt),P=new Xm(F,Ce,w),Oe=new Um(Ie),Se=new o0(x,S,z,Ee,Ce,ye,Oe),pe=new R0(x,Ie),ve=new u0,Ae=new g0(Ee,Ce),Xe=new Cm(x,S,z,Me,ne,h,l),J=new S0(x,ne,Ce),Ve=new P0(F,nt,Ce,Me),$=new Dm(F,Ee,nt,Ce),de=new Hm(F,Ee,nt,Ce),nt.programs=Se.programs,x.capabilities=Ce,x.extensions=Ee,x.properties=Ie,x.renderLists=ve,x.shadowMap=J,x.state=Me,x.info=nt}qe();const Ge=new A0(x,F);this.xr=Ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(O,k,!1))},this.getSize=function(T){return T.set(O,k)},this.setSize=function(T,U,H=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,k=U,t.width=Math.floor(T*K),t.height=Math.floor(U*K),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(O*K,k*K).floor()},this.setDrawingBufferSize=function(T,U,H){O=T,k=U,K=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,U,H,q){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,U,H,q),Me.viewport(y.copy(Z).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,U,H,q){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,U,H,q),Me.scissor(B.copy(ie).multiplyScalar(K).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){Me.setScissorTest(ae=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(T=!0,U=!0,H=!0){let q=0;if(T){let G=!1;if(A!==null){const _e=A.texture.format;G=_e===iu||_e===nu||_e===tu}if(G){const _e=A.texture.type,Te=_e===Bn||_e===Nn||_e===to||_e===ii||_e===Qc||_e===eu,Re=Xe.getClearColor(),Le=Xe.getClearAlpha(),He=Re.r,Ue=Re.g,Fe=Re.b;Te?(p[0]=He,p[1]=Ue,p[2]=Fe,p[3]=Le,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=He,g[1]=Ue,g[2]=Fe,g[3]=Le,F.clearBufferiv(F.COLOR,0,g))}else q|=F.COLOR_BUFFER_BIT}U&&(q|=F.DEPTH_BUFFER_BIT),H&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ve.dispose(),Ae.dispose(),Ie.dispose(),S.dispose(),z.dispose(),ne.dispose(),ye.dispose(),Ve.dispose(),Se.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Ct),Ge.removeEventListener("sessionend",tt),W&&(W.dispose(),W=null),Lt.stop()};function ue(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=nt.autoReset,U=J.enabled,H=J.autoUpdate,q=J.needsUpdate,G=J.type;qe(),nt.autoReset=T,J.enabled=U,J.autoUpdate=H,J.needsUpdate=q,J.type=G}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const U=T.target;U.removeEventListener("dispose",ce),we(U)}function we(T){be(T),Ie.remove(T)}function be(T){const U=Ie.get(T).programs;U!==void 0&&(U.forEach(function(H){Se.releaseProgram(H)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,q,G,_e){U===null&&(U=xe);const Te=G.isMesh&&G.matrixWorld.determinant()<0,Re=ld(T,U,H,q,G);Me.setMaterial(q,Te);let Le=H.index,He=1;if(q.wireframe===!0){if(Le=ee.getWireframeAttribute(H),Le===void 0)return;He=2}const Ue=H.drawRange,Fe=H.attributes.position;let dt=Ue.start*He,Gt=(Ue.start+Ue.count)*He;_e!==null&&(dt=Math.max(dt,_e.start*He),Gt=Math.min(Gt,(_e.start+_e.count)*He)),Le!==null?(dt=Math.max(dt,0),Gt=Math.min(Gt,Le.count)):Fe!=null&&(dt=Math.max(dt,0),Gt=Math.min(Gt,Fe.count));const Mt=Gt-dt;if(Mt<0||Mt===1/0)return;ye.setup(G,q,Re,H,Le);let pn,ot=$;if(Le!==null&&(pn=re.get(Le),ot=de,ot.setIndex(pn)),G.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*De()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(G.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),Me.setLineWidth(ke*De()),G.isLineSegments?ot.setMode(F.LINES):G.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else G.isPoints?ot.setMode(F.POINTS):G.isSprite&&ot.setMode(F.TRIANGLES);if(G.isBatchedMesh)ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ot.renderInstances(dt,Mt,G.count);else if(H.isInstancedBufferGeometry){const ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Hs=Math.min(H.instanceCount,ke);ot.renderInstances(dt,Mt,Hs)}else ot.render(dt,Mt)};function Ye(T,U,H){T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=Pt,T.needsUpdate=!0,Rr(T,U,H),T.side=zn,T.needsUpdate=!0,Rr(T,U,H),T.side=cn):Rr(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),m=Ae.get(H),m.init(),M.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==H&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);const q=new Set;return T.traverse(function(G){const _e=G.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Re=_e[Te];Ye(Re,H,G),q.add(Re)}else Ye(_e,H,G),q.add(_e)}),M.pop(),m=null,q},this.compileAsync=function(T,U,H=null){const q=this.compile(T,U,H);return new Promise(G=>{function _e(){if(q.forEach(function(Te){Ie.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){G(T);return}setTimeout(_e,10)}Ee.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let je=null;function xt(T){je&&je(T)}function Ct(){Lt.stop()}function tt(){Lt.start()}const Lt=new vu;Lt.setAnimationLoop(xt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(T){je=T,Ge.setAnimationLoop(T),T===null?Lt.stop():Lt.start()},Ge.addEventListener("sessionstart",Ct),Ge.addEventListener("sessionend",tt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(U),U=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,A),m=Ae.get(T,M.length),m.init(),M.push(m),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Q),se=this.localClippingEnabled,N=Oe.init(this.clippingPlanes,se),_=ve.get(T,d.length),_.init(),d.push(_),on(T,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,j),this.info.render.frame++,N===!0&&Oe.beginShadows();const H=m.state.shadowsArray;if(J.render(H,T,U),N===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(_,T),m.setupLights(x._useLegacyLights),U.isArrayCamera){const q=U.cameras;for(let G=0,_e=q.length;G<_e;G++){const Te=q[G];Lo(_,T,Te,Te.viewport)}}else Lo(_,T,U);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(x,T,U),ye.resetDefaultState(),D=-1,v=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function on(T,U,H,q){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){q&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Te=ne.update(T),Re=T.material;Re.visible&&_.push(T,Te,Re,H,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Te=ne.update(T),Re=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),me.copy(Te.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(Re)){const Le=Te.groups;for(let He=0,Ue=Le.length;He<Ue;He++){const Fe=Le[He],dt=Re[Fe.materialIndex];dt&&dt.visible&&_.push(T,Te,dt,H,me.z,Fe)}}else Re.visible&&_.push(T,Te,Re,H,me.z,null)}}const _e=T.children;for(let Te=0,Re=_e.length;Te<Re;Te++)on(_e[Te],U,H,q)}function Lo(T,U,H,q){const G=T.opaque,_e=T.transmissive,Te=T.transparent;m.setupLightsView(H),N===!0&&Oe.setGlobalState(x.clippingPlanes,H),_e.length>0&&od(G,_e,U,H),q&&Me.viewport(y.copy(q)),G.length>0&&Ar(G,U,H),_e.length>0&&Ar(_e,U,H),Te.length>0&&Ar(Te,U,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function od(T,U,H,q){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const _e=Ce.isWebGL2;W===null&&(W=new an(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?bn:Bn,minFilter:mr,samples:_e?4:0})),x.getDrawingBufferSize(fe),_e?W.setSize(fe.x,fe.y):W.setSize(Ms(fe.x),Ms(fe.y));const Te=x.getRenderTarget();x.setRenderTarget(W),x.getClearColor(te),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Fn,Ar(T,H,q),w.updateMultisampleRenderTarget(W),w.updateRenderTargetMipmap(W);let Le=!1;for(let He=0,Ue=U.length;He<Ue;He++){const Fe=U[He],dt=Fe.object,Gt=Fe.geometry,Mt=Fe.material,pn=Fe.group;if(Mt.side===cn&&dt.layers.test(q.layers)){const ot=Mt.side;Mt.side=Pt,Mt.needsUpdate=!0,Do(dt,H,q,Gt,Mt,pn),Mt.side=ot,Mt.needsUpdate=!0,Le=!0}}Le===!0&&(w.updateMultisampleRenderTarget(W),w.updateRenderTargetMipmap(W)),x.setRenderTarget(Te),x.setClearColor(te,I),x.toneMapping=Re}function Ar(T,U,H){const q=U.isScene===!0?U.overrideMaterial:null;for(let G=0,_e=T.length;G<_e;G++){const Te=T[G],Re=Te.object,Le=Te.geometry,He=q===null?Te.material:q,Ue=Te.group;Re.layers.test(H.layers)&&Do(Re,U,H,Le,He,Ue)}}function Do(T,U,H,q,G,_e){T.onBeforeRender(x,U,H,q,G,_e),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,U,H,q,T,_e),G.transparent===!0&&G.side===cn&&G.forceSinglePass===!1?(G.side=Pt,G.needsUpdate=!0,x.renderBufferDirect(H,U,q,G,T,_e),G.side=zn,G.needsUpdate=!0,x.renderBufferDirect(H,U,q,G,T,_e),G.side=cn):x.renderBufferDirect(H,U,q,G,T,_e),T.onAfterRender(x,U,H,q,G,_e)}function Rr(T,U,H){U.isScene!==!0&&(U=xe);const q=Ie.get(T),G=m.state.lights,_e=m.state.shadowsArray,Te=G.state.version,Re=Se.getParameters(T,G.state,_e,U,H),Le=Se.getProgramCacheKey(Re);let He=q.programs;q.environment=T.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(T.isMeshStandardMaterial?z:S).get(T.envMap||q.environment),He===void 0&&(T.addEventListener("dispose",ce),He=new Map,q.programs=He);let Ue=He.get(Le);if(Ue!==void 0){if(q.currentProgram===Ue&&q.lightsStateVersion===Te)return Uo(T,Re),Ue}else Re.uniforms=Se.getUniforms(T),T.onBuild(H,Re,x),T.onBeforeCompile(Re,x),Ue=Se.acquireProgram(Re,Le),He.set(Le,Ue),q.uniforms=Re.uniforms;const Fe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=Oe.uniform),Uo(T,Re),q.needsLights=ud(T),q.lightsStateVersion=Te,q.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Ue,q.uniformsList=null,Ue}function Io(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=us.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Uo(T,U){const H=Ie.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ld(T,U,H,q,G){U.isScene!==!0&&(U=xe),w.resetTextureUnits();const _e=U.fog,Te=q.isMeshStandardMaterial?U.environment:null,Re=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Rn,Le=(q.isMeshStandardMaterial?z:S).get(q.envMap||Te),He=q.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!H.morphAttributes.position,dt=!!H.morphAttributes.normal,Gt=!!H.morphAttributes.color;let Mt=Fn;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const pn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=pn!==void 0?pn.length:0,ke=Ie.get(q),Hs=m.state.lights;if(N===!0&&(se===!0||T!==v)){const qt=T===v&&q.id===D;Oe.setState(q,T,qt)}let ct=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Hs.state.version||ke.outputColorSpace!==Re||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||ke.envMap!==Le||q.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Oe.numPlanes||ke.numIntersection!==Oe.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Ue||ke.morphTargets!==Fe||ke.morphNormals!==dt||ke.morphColors!==Gt||ke.toneMapping!==Mt||Ce.isWebGL2===!0&&ke.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,ke.__version=q.version);let Xn=ke.currentProgram;ct===!0&&(Xn=Rr(q,U,G));let No=!1,$i=!1,Vs=!1;const wt=Xn.getUniforms(),qn=ke.uniforms;if(Me.useProgram(Xn.program)&&(No=!0,$i=!0,Vs=!0),q.id!==D&&(D=q.id,$i=!0),No||v!==T){wt.setValue(F,"projectionMatrix",T.projectionMatrix),wt.setValue(F,"viewMatrix",T.matrixWorldInverse);const qt=wt.map.cameraPosition;qt!==void 0&&qt.setValue(F,me.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&wt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,$i=!0,Vs=!0)}if(G.isSkinnedMesh){wt.setOptional(F,G,"bindMatrix"),wt.setOptional(F,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(Ce.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),wt.setValue(F,"boneTexture",qt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(wt.setOptional(F,G,"batchingTexture"),wt.setValue(F,"batchingTexture",G._matricesTexture,w));const ks=H.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&Ce.isWebGL2===!0)&&P.update(G,H,Xn),($i||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,wt.setValue(F,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qn.envMap.value=Le,qn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),$i&&(wt.setValue(F,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&cd(qn,Vs),_e&&q.fog===!0&&pe.refreshFogUniforms(qn,_e),pe.refreshMaterialUniforms(qn,q,K,k,W),us.upload(F,Io(ke),qn,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(us.upload(F,Io(ke),qn,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&wt.setValue(F,"center",G.center),wt.setValue(F,"modelViewMatrix",G.modelViewMatrix),wt.setValue(F,"normalMatrix",G.normalMatrix),wt.setValue(F,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const qt=q.uniformsGroups;for(let Ws=0,dd=qt.length;Ws<dd;Ws++)if(Ce.isWebGL2){const Oo=qt[Ws];Ve.update(Oo,Xn),Ve.bind(Oo,Xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xn}function cd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function ud(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,H){Ie.get(T.texture).__webglTexture=U,Ie.get(T.depthTexture).__webglTexture=H;const q=Ie.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=H===void 0,q.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const H=Ie.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){A=T,C=U,R=H;let q=!0,G=null,_e=!1,Te=!1;if(T){const Le=Ie.get(T);Le.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(F.FRAMEBUFFER,null),q=!1):Le.__webglFramebuffer===void 0?w.setupRenderTarget(T):Le.__hasExternalTextures&&w.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ue=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?G=Ue[U][H]:G=Ue[U],_e=!0):Ce.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?G=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[H]:G=Ue,y.copy(T.viewport),B.copy(T.scissor),V=T.scissorTest}else y.copy(Z).multiplyScalar(K).floor(),B.copy(ie).multiplyScalar(K).floor(),V=ae;if(Me.bindFramebuffer(F.FRAMEBUFFER,G)&&Ce.drawBuffers&&q&&Me.drawBuffers(T,G),Me.viewport(y),Me.scissor(B),Me.setScissorTest(V),_e){const Le=Ie.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,H)}else if(Te){const Le=Ie.get(T.texture),He=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.__webglTexture,H||0,He)}D=-1},this.readRenderTargetPixels=function(T,U,H,q,G,_e,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){Me.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Le=T.texture,He=Le.format,Ue=Le.type;if(He!==rn&&oe.convert(He)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===bn&&(Ee.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==Bn&&oe.convert(Ue)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===On&&(Ce.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-q&&H>=0&&H<=T.height-G&&F.readPixels(U,H,q,G,oe.convert(He),oe.convert(Ue),_e)}finally{const Le=A!==null?Ie.get(A).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(T,U,H=0){const q=Math.pow(2,-H),G=Math.floor(U.image.width*q),_e=Math.floor(U.image.height*q);w.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,T.x,T.y,G,_e),Me.unbindTexture()},this.copyTextureToTexture=function(T,U,H,q=0){const G=U.image.width,_e=U.image.height,Te=oe.convert(H.format),Re=oe.convert(H.type);w.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,T.x,T.y,G,_e,Te,Re,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Te,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,q,T.x,T.y,Te,Re,U.image),q===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H,q,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Le=oe.convert(q.format),He=oe.convert(q.type);let Ue;if(q.isData3DTexture)w.setTexture3D(q,0),Ue=F.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)w.setTexture2DArray(q,0),Ue=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Fe=F.getParameter(F.UNPACK_ROW_LENGTH),dt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Gt=F.getParameter(F.UNPACK_SKIP_PIXELS),Mt=F.getParameter(F.UNPACK_SKIP_ROWS),pn=F.getParameter(F.UNPACK_SKIP_IMAGES),ot=H.isCompressedTexture?H.mipmaps[G]:H.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D(Ue,G,U.x,U.y,U.z,_e,Te,Re,Le,He,ot.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ue,G,U.x,U.y,U.z,_e,Te,Re,Le,ot.data)):F.texSubImage3D(Ue,G,U.x,U.y,U.z,_e,Te,Re,Le,He,ot),F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pn),G===0&&q.generateMipmaps&&F.generateMipmap(Ue),Me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,Me.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===no?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Rs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?si:su}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===si?mt:Rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class C0 extends Tu{}C0.prototype.isWebGL1Renderer=!0;class co{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class L0 extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class D0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new b;class Es{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Es(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wu extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ci;const nr=new b,Li=new b,Di=new b,Ii=new ge,ir=new ge,Au=new $e,$r=new b,rr=new b,Jr=new b,tc=new ge,Ma=new ge,nc=new ge;class I0 extends et{constructor(e=new wu){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new D0(t,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new Es(i,3,0,!1)),Ci.setAttribute("uv",new Es(i,2,3,!1))}this.geometry=Ci,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),Au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Qr($r.set(-.5,-.5,0),Di,o,Li,r,s),Qr(rr.set(.5,-.5,0),Di,o,Li,r,s),Qr(Jr.set(.5,.5,0),Di,o,Li,r,s),tc.set(0,0),Ma.set(1,0),nc.set(1,1);let a=e.ray.intersectTriangle($r,rr,Jr,!1,nr);if(a===null&&(Qr(rr.set(-.5,.5,0),Di,o,Li,r,s),Ma.set(0,1),a=e.ray.intersectTriangle($r,Jr,rr,!1,nr),a===null))return;const l=e.ray.origin.distanceTo(nr);l<e.near||l>e.far||t.push({distance:l,point:nr.clone(),uv:Zt.getInterpolation(nr,$r,rr,Jr,tc,Ma,nc,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qr(n,e,t,i,r,s){Ii.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ir.x=s*Ii.x-r*Ii.y,ir.y=r*Ii.x+s*Ii.y):ir.copy(Ii),n.copy(e),n.x+=ir.x,n.y+=ir.y,n.applyMatrix4(Au)}class ic extends bt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ui=new $e,rc=new $e,es=[],sc=new ui,U0=new $e,sr=new ft,ar=new di;class N0 extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,U0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ui),sc.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ui),ar.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),e.ray.intersectsSphere(ar)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ui),rc.multiplyMatrices(i,Ui),sr.matrixWorld=rc,sr.raycast(e,es);for(let o=0,a=es.length;o<a;o++){const l=es[o];l.instanceId=s,l.object=this,t.push(l)}es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new b,oc=new b,lc=new $e,Sa=new yr,ts=new di;class uo extends et{constructor(e=new pt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ac.fromBufferAttribute(t,r-1),oc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(r),ts.radius+=s,e.ray.intersectsSphere(ts)===!1)return;lc.copy(r).invert(),Sa.copy(e.ray).applyMatrix4(lc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new b,u=new b,f=new b,h=new b,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=d,E=M-1;x<E;x+=p){const C=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,R),Sa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let x=d,E=M-1;x<E;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Sa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class O0 extends uo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ds extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cc=new $e,ka=new yr,ns=new di,is=new b;class ho extends et{constructor(e=new pt,t=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(r),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;cc.copy(r).invert(),ka.copy(e.ray).applyMatrix4(cc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);is.fromBufferAttribute(f,m),uc(is,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)is.fromBufferAttribute(f,g),uc(is,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uc(n,e,t,i,r,s,o){const a=ka.distanceSqToPoint(n);if(a<t){const l=new b;ka.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ru extends Bt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class F0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new b,r=[],s=[],o=[],a=new b,l=new $e;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new b)}s[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(yt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(yt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class B0 extends F0{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ge,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fo extends pt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new b,E=new b,C=new b;for(let R=0;R<t.length;R+=3)p(t[R+0],x),p(t[R+1],E),p(t[R+2],C),l(x,E,C,M)}function l(M,x,E,C){const R=C+1,A=[];for(let D=0;D<=R;D++){A[D]=[];const v=M.clone().lerp(E,D/R),y=x.clone().lerp(E,D/R),B=R-D;for(let V=0;V<=B;V++)V===0&&D===R?A[D][V]=v:A[D][V]=v.clone().lerp(y,V/B)}for(let D=0;D<R;D++)for(let v=0;v<2*(R-D)-1;v++){const y=Math.floor(v/2);v%2===0?(h(A[D][y+1]),h(A[D+1][y]),h(A[D][y])):(h(A[D][y+1]),h(A[D+1][y+1]),h(A[D+1][y]))}}function c(M){const x=new b;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(M),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function u(){const M=new b;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];const E=m(M)/2/Math.PI+.5,C=d(M)/Math.PI+.5;o.push(E,1-C)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const x=o[M+0],E=o[M+2],C=o[M+4],R=Math.max(x,E,C),A=Math.min(x,E,C);R>.9&&A<.1&&(x<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function p(M,x){const E=M*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){const M=new b,x=new b,E=new b,C=new b,R=new ge,A=new ge,D=new ge;for(let v=0,y=0;v<s.length;v+=9,y+=6){M.set(s[v+0],s[v+1],s[v+2]),x.set(s[v+3],s[v+4],s[v+5]),E.set(s[v+6],s[v+7],s[v+8]),R.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),C.copy(M).add(x).add(E).divideScalar(3);const B=m(C);_(R,y+0,M,B),_(A,y+2,x,B),_(D,y+4,E,B)}}function _(M,x,E,C){C<0&&M.x===1&&(o[x]=M.x-1),E.x===0&&E.z===0&&(o[x]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.vertices,e.indices,e.radius,e.details)}}class po extends fo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new po(e.radius,e.detail)}}class mo extends pt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,p=new b,g=new ge;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const M=d+m,x=M,E=M+i+1,C=M+i+2,R=M+1;a.push(x,E,R),a.push(E,C,R)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wn extends pt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new b,h=new b,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const M=[],x=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const R=C/t;f.x=-e*Math.cos(r+R*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(R+E,1-x),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const x=u[d][M+1],E=u[d][M],C=u[d+1][M],R=u[d+1][M+1];(d!==0||o>0)&&p.push(x,E,R),(d!==i-1||l<Math.PI)&&p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Is extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class z0 extends Is{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ya=new $e,dc=new b,hc=new b;class Pu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hc),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fc=new $e,or=new b,Ea=new b;class G0 extends Pu{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),i.position.copy(or),Ea.copy(i.position),Ea.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ea),i.updateMatrixWorld(),r.makeTranslation(-or.x,-or.y,-or.z),fc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc)}}class H0 extends Is{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new G0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class V0 extends Pu{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new V0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class k0 extends Is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pc(){return(typeof performance>"u"?Date:performance).now()}class W0{constructor(e,t,i=0,r=1/0){this.ray=new yr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Wa(e,this,i,t),i.sort(mc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wa(e[r],this,i,t);return i.sort(mc),i}}function mc(n,e){return n.distance-e.distance}function Wa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Wa(r[s],e,t,!0)}}class gc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);const lr=new et,_c=new Pe;let cr=null;function vc(n,e,t){const i=(n-e)/t;return Math.exp(-(i*i))}function X0(){if(cr||typeof document>"u")return cr;const n=document.createElement("canvas");n.width=48,n.height=48;const e=n.getContext("2d"),t=e.createRadialGradient(24,24,1,24,24,24);return t.addColorStop(0,"rgba(255, 255, 255, 1)"),t.addColorStop(.42,"rgba(255, 255, 255, 0.88)"),t.addColorStop(.78,"rgba(255, 255, 255, 0.24)"),t.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=t,e.fillRect(0,0,48,48),cr=new Ru(n),cr.needsUpdate=!0,cr}function q0(n,e={}){const t=e.count??n.count,i=new po(1,0),r=new _r({color:n.color,roughness:.92,metalness:0,emissive:"#4a3d2d",emissiveIntensity:.12,flatShading:!0,vertexColors:!0}),s=new N0(i,r,t);s.instanceMatrix.setUsage(uh);const o=new Pe,a=[],l=new Float32Array(t*3),c=new Float32Array(t*3);for(let d=0;d<t;d+=1){const M=Math.random(),x=Math.random()<.72?st.clamp(.5+st.randFloatSpread(.34),0,1):Math.random(),E=st.lerp(n.innerRadius,n.outerRadius,x),C=Math.random()*Math.PI*2,R=vc(Math.sin(C*5+x*4),.55,.42)*.32+vc(Math.cos(C*9),-.25,.5)*.18,A=C+st.randFloatSpread(.012+R*.018),D=st.randFloatSpread(n.thickness)*(.18+M*.48),v=st.lerp(.08,.44,Math.pow(Math.random(),2.2)),y=Math.random()<.035?st.lerp(.42,.92,Math.random()):0,B=Math.max(v,y),V={x:st.lerp(.7,1.55,Math.random()),y:st.lerp(.42,1,Math.random()),z:st.lerp(.7,1.65,Math.random())},te=n.rotationSpeed*st.lerp(.75,1.3,Math.random()),I=st.lerp(-1.8,1.8,Math.random()),O=new Ki(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);a.push({radius:E,angle:A,height:D,scale:B,squash:V,orbitSpeed:te,spinSpeed:I,tilt:O});const k=st.lerp(.54,.96,Math.pow(Math.random(),.72)),K=st.lerp(.05,.12,Math.random());o.setHSL(K,st.lerp(.05,.18,Math.random()),k),_c.set("#ffffff").lerp(o,st.lerp(.72,.96,Math.random())),o.copy(_c),s.setColorAt(d,o),l[d*3]=Math.cos(A)*E,l[d*3+1]=D,l[d*3+2]=Math.sin(A)*E,c[d*3]=o.r,c[d*3+1]=o.g,c[d*3+2]=o.b}s.instanceColor.needsUpdate=!0;const u=new pt;u.setAttribute("position",new bt(l,3)),u.setAttribute("color",new bt(c,3));const f=new ho(u,new Ds({size:.58,color:"#fff2d7",map:X0(),vertexColors:!0,transparent:!0,opacity:.62,alphaTest:.04,depthWrite:!1,sizeAttenuation:!0})),h=new Nt,p=new et,g=new et,_=(n.innerRadius+n.outerRadius)*.5;p.position.set(_,n.thickness*.16,0),g.position.set(n.outerRadius+6,n.thickness*.3,0),h.add(p,g),h.add(f,s);function m(d,M){const x=u.attributes.position.array;for(let E=0;E<t;E+=1){const C=a[E],R=C.angle+M*C.orbitSpeed,A=Math.sin(M*C.spinSpeed+E)*.12,D=Math.cos(R)*C.radius,v=C.height+A,y=Math.sin(R)*C.radius;lr.position.set(D,v,y),lr.rotation.set(C.tilt.x+M*C.spinSpeed*.6,C.tilt.y+M*C.spinSpeed,C.tilt.z+M*C.spinSpeed*.3),lr.scale.set(C.scale*C.squash.x,C.scale*C.squash.y,C.scale*C.squash.z),lr.updateMatrix(),s.setMatrixAt(E,lr.matrix),x[E*3]=D,x[E*3+1]=v,x[E*3+2]=y}s.instanceMatrix.needsUpdate=!0,u.attributes.position.needsUpdate=!0}return{...n,id:n.id,config:n,type:n.type,name:n.name,label:n.label,displayRadius:n.focusDisplayRadius??Math.max(n.thickness*1.7,10),orbitEnabled:!1,spinEnabled:!1,root:h,object3d:p,orbitPivot:h,translationGroup:h,meshGroup:h,mesh:s,labelAnchor:g,focusAnchor:p,focusTarget:p,orbitLine:null,update:m}}function xc(n){const e=new Nt,t=new ft(new wn(.45,12,12),new Ps({color:n})),i=[new b(0,0,0),new b(-2.5,.14,0),new b(-5.4,.1,0),new b(-8.2,.06,0)],r=new uo(new pt().setFromPoints(i),new Ls({color:n,transparent:!0,opacity:.32}));return e.add(t,r),e}function Y0(){const n=new Nt,e=[{group:xc("#a9d2ff"),radiusX:210,radiusZ:162,height:22,speed:.06,phase:.4},{group:xc("#ffd6a8"),radiusX:172,radiusZ:232,height:-18,speed:.05,phase:2.2}];for(const i of e)n.add(i.group);function t(i,r){for(const s of e){const o=r*s.speed+s.phase,a=Math.cos(o)*s.radiusX,l=Math.sin(o)*s.radiusZ,c=o+.02,u=Math.cos(c)*s.radiusX,f=Math.sin(c)*s.radiusZ;s.group.position.set(a,s.height+Math.sin(o*2)*5,l),s.group.lookAt(u,s.height,f)}}return{root:n,update:t}}function j0(n){let e=1779033703^n.length;for(let t=0;t<n.length;t+=1)e=Math.imul(e^n.charCodeAt(t),3432918353),e=e<<13|e>>>19;return()=>(e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^=e>>>16)>>>0)}function go(n){let t=j0(n)();return()=>{t+=1831565813;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function ba(n,e,t){return e+(t-e)*n()}function K0(n,e){return e[Math.floor(n()*e.length)]}function Qt(n,e,t){return Math.min(Math.max(n,e),t)}const Z0=Math.PI*2;function Us(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const r=i.getContext("2d");t(r,n,e);const s=new Ru(i);return s.colorSpace=mt,s.wrapS=ms,s.wrapT=$t,s.needsUpdate=!0,s}function $0(n){const e=go(n),t=new Map;function i(o,a){const l=`${o}:${a}`;if(!t.has(l)){const c=e()*Math.PI*2;t.set(l,[Math.cos(c),Math.sin(c)])}return t.get(l)}function r(o){return o*o*o*(o*(o*6-15)+10)}function s(o,a,l){return o+(a-o)*l}return(o,a)=>{const l=Math.floor(o),c=Math.floor(a),u=l+1,f=c+1,h=r(o-l),p=r(a-c),g=i(l,c),_=i(u,c),m=i(l,f),d=i(u,f),M=o-l,x=a-c,E=o-u,C=a-f,R=g[0]*M+g[1]*x,A=_[0]*E+_[1]*x,D=m[0]*M+m[1]*C,v=d[0]*E+d[1]*C;return s(s(R,A,h),s(D,v,h),p)}}function Du(n,e,t,i=4){let r=.5,s=1,o=0,a=0;for(let l=0;l<i;l+=1)o+=r*n(e*s,t*s),a+=r,r*=.5,s*=2;return o/a}function J0(n,e,t,i=2,r=4,s=4,o=0){const a=(e+o)*Z0,l=Math.cos(a)*i,c=Math.sin(a)*i+t*r;return Du(n,l,c,s)}function br({width:n,height:e,seed:t,drawPixel:i}){const r=$0(t);return Us(n,e,s=>{const o=s.createImageData(n,e),{data:a}=o;for(let l=0;l<e;l+=1)for(let c=0;c<n;c+=1){const u=(l*n+c)*4,f=c/n,h=l/e,p=i({x:c,y:l,u:f,v:h,noise:r,fbm:(g,_,m)=>Du(r,g,_,m),wrappedFbm:(g,_,m,d=0)=>J0(r,f,h,g,_,m,d)});a[u]=p[0],a[u+1]=p[1],a[u+2]=p[2],a[u+3]=p[3]??255}s.putImageData(o,0,0)})}function pr(n){const e=n.replace("#",""),t=Number.parseInt(e,16);return[t>>16&255,t>>8&255,t&255]}function dn(n,e,t){return[Math.round(n[0]+(e[0]-n[0])*t),Math.round(n[1]+(e[1]-n[1])*t),Math.round(n[2]+(e[2]-n[2])*t)]}function Ft(n,e,t){const i=(n-e)/t;return Math.exp(-(i*i))}function Mc(n,e,t){const i=Qt((t-n)/(e-n),0,1);return i*i*(3-2*i)}function rs(n,e,t,i=.02){return Mc(e,e+i,n)*(1-Mc(t-i,t,n))}function _o(n,e,t=1){const i=Math.max(0,Math.abs(n-.5)*2-.72)/.28,r=Qt(i*t,0,1);return dn(e,[245,248,255],r)}function Q0(n,e,t){const i=pr(t.dark),r=pr(t.mid),s=pr(t.light);return br({width:e,height:Math.floor(e/2),seed:n,drawPixel:({u:o,v:a,fbm:l})=>{const c=l(o*8,a*8,5)*.5+.5,u=l(o*2.4,a*2.4,3)*.5+.5,f=l(o*18,a*18,2)*.5+.5,h=Qt(.15+u*.7+c*.3-f*.22,0,1),p=h<.42?dn(i,r,h/.42):dn(r,s,(h-.42)/.58);return[..._o(a,p,.25),255]}})}function e_(n,e="clouds"){return br({width:n,height:Math.floor(n/2),seed:e,drawPixel:({wrappedFbm:t})=>{const i=t(1.7,16,5,.13)*.5+.5,r=t(.75,5.2,3,.37)*.5+.5,s=t(3.2,22,3,.62)*.5+.5,o=Qt((i*.72+r*.54+s*.18-.58)*1.65,0,1);return[255,255,255,Math.round(o*190)]}})}function t_(n){const e=[22,55,118],t=[76,146,214],i=[74,100,54],r=[104,138,72],s=[166,170,119];return br({width:n,height:Math.floor(n/2),seed:"earth-day",drawPixel:({u:o,v:a,wrappedFbm:l})=>{const c=Math.abs(a-.5)*2,u=l(.85,3.2,4,.08)*.5+.5;let f=dn(e,t,Qt(u,0,1));const h=l(1.7,3.4,5,.24)*.5+.5,p=l(4.6,8.5,3,.61)*.5+.5,g=h*.78+p*.22;if(g>.58||o>.84&&g>.5||o<.08&&g>.52){const _=l(5.2,12.2,3,.43)*.5+.5;f=_>.66?dn(r,s,(_-.66)/.34):dn(i,r,_/.66)}return[..._o(a,f,c>.68?1:.8),255]}})}function n_(n){return br({width:n,height:Math.floor(n/2),seed:"earth-night",drawPixel:({wrappedFbm:e})=>{const t=e(1.8,3.2,5,.24)*.5+.5,i=e(7.5,18,2,.66)*.5+.5,s=(t>.56?1:0)*Qt((i-.66)*5.4,0,1),o=e(10,28,3,.81)*.5+.5,a=Math.round(120+135*o);return[a,Math.round(a*.74),48,Math.round(s*255)]}})}function ur({seed:n,resolution:e,colors:t,frequency:i=14,turbulence:r=.18,storm:s}){const o=t.map(pr);return br({width:e,height:Math.floor(e/2),seed:n,drawPixel:({u:a,v:l,fbm:c})=>{const h=Math.sin((l+c(a*3,l*8,3)*r)*i*Math.PI)*.5+.5,p=Math.min(o.length-2,Math.floor(h*(o.length-1))),g=h*(o.length-1)-p;let _=dn(o[p],o[p+1],g);const m=c(a*12,l*28,4)*.5+.5;if(_=dn(_,[255,255,255],Qt((m-.76)*.34,0,.22)),s){const d=a-s.u,M=l-s.v,x=d*d/(s.rx*s.rx)+M*M/(s.ry*s.ry);if(x<1){const E=1-x;_=dn(_,pr(s.color),Qt(E,0,1))}}return[..._o(l,_,.12),255]}})}function i_(n,e=1024,t=32){const i=n==="uranus";return Us(e,t,r=>{const s=r.createImageData(e,t),{data:o}=s,a=go(`ring-${n}`),l=i?[[92,118,132],[154,184,197],[222,239,246]]:[[54,45,36],[122,103,80],[188,169,133],[238,229,204]];for(let c=0;c<e;c+=1){const u=c/(e-1),f=Math.sin(u*Math.PI*(i?28:16)+a()*.2)*.5+.5,h=Math.sin(u*Math.PI*(i?124:104)+a()*.5)*.5+.5;let p;if(i){const x=Ft(u,.2,.011)*.34,E=Ft(u,.36,.014)*.3,C=Ft(u,.52,.016)*.46,R=Ft(u,.72,.018)*.28,A=Ft(u,.52,.18)*.035,D=Ft(u,.28,.018)*.08+Ft(u,.62,.02)*.07;p=Qt(.01+A+x+E+C+R+f*.025+h*.018-D,0,.58)}else{const x=rs(u,.04,.2,.024)*.46,E=rs(u,.235,.53,.026)*.84+Ft(u,.38,.12)*.22,C=rs(u,.6,.82,.024)*.78,R=Ft(u,.9,.028)*.42+Ft(u,.968,.007)*.32,A=rs(u,.548,.586,.006)*.9+Ft(u,.566,.012)*.54,D=Ft(u,.218,.011)*.44,v=Ft(u,.742,.008)*.38,y=Ft(u,.932,.018)*.32,B=(f-.5)*.12+(h-.5)*.1+(a()-.5)*.035;p=Qt(.04+x+E+C+R+B-A-D-v-y,0,1)}const g=p,_=Math.min(l.length-2,Math.floor(g*(l.length-1))),m=g*(l.length-1)-_,d=dn(l[_],l[_+1],m),M=i?Qt(.012+g*.28,.012,.22):Qt(.045+g*.9,.035,.98);for(let x=0;x<t;x+=1){const E=(x*e+c)*4;o[E]=d[0],o[E+1]=d[1],o[E+2]=d[2],o[E+3]=Math.round(M*255)}}r.putImageData(s,0,0)})}function Iu(n=64){return Us(n,n,(e,t,i)=>{const r=e.createRadialGradient(t/2,i/2,t*.02,t/2,i/2,t/2);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.22,"rgba(255,249,230,0.9)"),r.addColorStop(.46,"rgba(160,205,255,0.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,0,t,i)})}function r_(n=256,e="nebula"){const t=go(e);return Us(n,n,(i,r,s)=>{i.clearRect(0,0,r,s);const o=["rgba(80, 180, 190, 0.18)","rgba(122, 89, 209, 0.12)","rgba(66, 116, 204, 0.1)"];for(let a=0;a<12;a+=1){const l=ba(t,r*.15,r*.85),c=ba(t,s*.15,s*.85),u=ba(t,r*.1,r*.28),f=i.createRadialGradient(l,c,0,l,c,u);f.addColorStop(0,K0(t,o)),f.addColorStop(1,"rgba(0,0,0,0)"),i.globalCompositeOperation="lighter",i.fillStyle=f,i.beginPath(),i.arc(l,c,u,0,Math.PI*2),i.fill()}i.globalCompositeOperation="source-over"})}function s_(n,e={}){const t=e.count??n.count,i=new Float32Array(t*3),r=new Float32Array(t*3),s=new Pe;for(let h=0;h<t;h+=1){const p=Math.random()*Math.PI*2,g=st.lerp(n.innerRadius,n.outerRadius,Math.random()),_=(Math.random()-.5)*n.thickness;i[h*3]=Math.cos(p)*g,i[h*3+1]=_,i[h*3+2]=Math.sin(p)*g,s.setHSL(.56+Math.random()*.06,.4,st.lerp(.45,.8,Math.random())),r[h*3]=s.r,r[h*3+1]=s.g,r[h*3+2]=s.b}const o=new pt;o.setAttribute("position",new bt(i,3)),o.setAttribute("color",new bt(r,3));const a=new Ds({size:.95,map:Iu(48),transparent:!0,opacity:.38,vertexColors:!0,depthWrite:!1,blending:hn}),l=new ho(o,a),c=new Nt;c.add(l);const u=new et;u.position.set(n.orbitRadius,n.thickness*.25,0),c.add(u);function f(h){c.rotation.y+=n.rotationSpeed*h}return{...n,id:n.id,config:n,type:n.type,name:n.name,label:n.label,root:c,object3d:u,orbitPivot:c,translationGroup:c,meshGroup:c,mesh:l,labelAnchor:u,focusTarget:u,orbitLine:null,update:f}}const a_=`
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,o_=`
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uSunPosition;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 lightDir = normalize(uSunPosition - vWorldPosition);
    float rim = pow(1.0 - max(dot(viewDir, normalize(vWorldNormal)), 0.0), 2.4);
    float lit = pow(max(dot(normalize(vWorldNormal), lightDir), 0.0), 0.8);
    vec3 color = mix(uColorA, uColorB, lit);
    float alpha = clamp(rim * (0.35 + lit * 0.65), 0.0, 1.0);
    gl_FragColor = vec4(color, alpha * 0.8);
  }
`;function l_(n="#2d63ff",e="#7bd4ff"){return new Et({uniforms:{uColorA:{value:new Pe(n)},uColorB:{value:new Pe(e)},uSunPosition:{value:new b(0,0,0)}},vertexShader:a_,fragmentShader:o_,transparent:!0,side:Pt,depthWrite:!1,blending:hn})}const c_=`
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,u_=`
  uniform sampler2D uNightMap;
  uniform vec3 uSunPosition;
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec4 map = texture2D(uNightMap, vUv);
    vec3 lightDir = normalize(uSunPosition - vWorldPosition);
    float lit = max(dot(normalize(vWorldNormal), lightDir), 0.0);
    float night = smoothstep(0.4, 0.02, lit);
    float alpha = map.a * night * 0.95;
    gl_FragColor = vec4(map.rgb, alpha);
  }
`;function d_(n={}){const e=n.textureResolution??1024,t=t_(e),i=e_(e,"earth-clouds"),r=n_(e),s=new _r({map:t,roughness:.78,metalness:.02,color:"#f1f7ff"}),o=new _r({map:i,alphaMap:i,transparent:!0,opacity:.58,alphaTest:.035,depthWrite:!1,roughness:.24,metalness:0}),a=new Et({uniforms:{uNightMap:{value:r},uSunPosition:{value:new b(0,0,0)}},vertexShader:c_,fragmentShader:u_,transparent:!0,depthWrite:!1,blending:hn});return{surfaceMaterial:s,cloudMaterial:o,nightLightsMaterial:a}}const Sc={mercury:{dark:"#4f4d50",mid:"#888284",light:"#bdb8b1"},moon:{dark:"#67686d",mid:"#a4a29b",light:"#e1ddd6"},phobos:{dark:"#5d4c41",mid:"#8c7766",light:"#b9a48c"},deimos:{dark:"#6c5d50",mid:"#a79583",light:"#c9baa6"},mars:{dark:"#7a2e1d",mid:"#b55533",light:"#d79860"},io:{dark:"#90703a",mid:"#d1ac58",light:"#ecd58c"},europa:{dark:"#8695a6",mid:"#bcccdc",light:"#edf4ff"},ganymede:{dark:"#5b5f59",mid:"#8e9489",light:"#c0c4bc"},callisto:{dark:"#423f3b",mid:"#706a62",light:"#b3ab9d"},titan:{dark:"#6e4f2c",mid:"#b28145",light:"#d8b06f"},enceladus:{dark:"#7d95aa",mid:"#d3e6f4",light:"#f6fbff"},rhea:{dark:"#718293",mid:"#b6c0cc",light:"#e2e9f0"},iapetus:{dark:"#312a22",mid:"#c6b9a2",light:"#ede5d8"},titania:{dark:"#8b9ca6",mid:"#cdd6dc",light:"#eff4f7"},oberon:{dark:"#61574d",mid:"#9f978d",light:"#ddd4cb"},triton:{dark:"#6f87a4",mid:"#c5d2e2",light:"#edf5fb"},pluto:{dark:"#5f554f",mid:"#a89683",light:"#d8c7b6"},charon:{dark:"#777474",mid:"#bdb9b7",light:"#e5e1df"}},yc={venus:n=>ur({seed:"venus",resolution:n,colors:["#7d6332","#d9c081","#efe1b1","#c8ac6a"],frequency:10,turbulence:.08}),jupiter:n=>ur({seed:"jupiter",resolution:n,colors:["#58351f","#9a6542","#e0ac74","#bf7b57","#f3ddbf","#77503a"],frequency:20,turbulence:.14,storm:{u:.74,v:.57,rx:.1,ry:.07,color:"#d58557"}}),saturn:n=>ur({seed:"saturn",resolution:n,colors:["#6d5e47","#b99563","#e7d2aa","#d3ae73","#f4e8d0"],frequency:15,turbulence:.06}),uranus:n=>ur({seed:"uranus",resolution:n,colors:["#7fb9c7","#a9dbe3","#d7f3f7","#b7dfe6"],frequency:7,turbulence:.03}),neptune:n=>ur({seed:"neptune",resolution:n,colors:["#142a66","#2448a4","#5478ff","#86a4ff"],frequency:11,turbulence:.07})};function Ec(n,e={}){return new _r({map:n,roughness:e.roughness??.96,metalness:e.metalness??.02,color:e.color??16777215})}function h_(n,e={}){const t=e.textureResolution??1024;return n in Sc?Ec(Q0(n,t,Sc[n]),{roughness:n==="europa"||n==="enceladus"?.65:.92}):n in yc?Ec(yc[n](t),{roughness:n==="venus"?.84:n==="jupiter"?.62:n==="saturn"?.68:n==="uranus"?.58:n==="neptune"?.63:.78}):new _r({color:e.color??"#cccccc",roughness:.9,metalness:.02})}const f_=`
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vLocalPosition;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vLocalPosition = position;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,p_=`
  uniform sampler2D uBandTexture;
  uniform vec3 uLightPosition;
  uniform vec2 uShadowDirection;
  uniform float uInnerRadius;
  uniform float uOuterRadius;
  uniform float uPlanetRadius;
  uniform float uOpacity;
  uniform float uRingKind;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vLocalPosition;

  float radialGaussian(float value, float center, float spread) {
    float distance = (value - center) / spread;
    return exp(-(distance * distance));
  }

  void main() {
    float radius = length(vLocalPosition.xz);
    float radial = clamp((radius - uInnerRadius) / (uOuterRadius - uInnerRadius), 0.0, 1.0);
    vec4 band = texture2D(uBandTexture, vec2(radial, 0.5));
    float kind = clamp(uRingKind, 0.0, 1.0);

    vec3 lightDir = normalize(uLightPosition - vWorldPosition);
    float diffuse = clamp(dot(normalize(vWorldNormal), lightDir) * 0.82 + 0.28, 0.1, 1.0);
    diffuse = mix(diffuse, diffuse * 0.8 + 0.08, kind);

    vec2 localDirection = normalize(vLocalPosition.xz + vec2(0.0001));
    vec2 shadowDirection = normalize(uShadowDirection + vec2(0.0001));
    float alignment = smoothstep(0.15, 0.9, dot(localDirection, shadowDirection));
    float radiusMask = 1.0 - smoothstep(uPlanetRadius * 0.25, uPlanetRadius * 1.9, radius);
    float shadow = mix(1.0, mix(0.34, 0.56, kind), alignment * radiusMask);
    float bandLum = dot(band.rgb, vec3(0.299, 0.587, 0.114));
    float contrast = mix(1.45, 0.88, kind);
    float density = clamp(0.5 + (bandLum - 0.5) * contrast, 0.0, 1.0);
    float saturn = 1.0 - kind;
    float cassiniGap = radialGaussian(radial, 0.566, 0.012) * 0.9 + radialGaussian(radial, 0.582, 0.006) * 0.42;
    float innerGap = radialGaussian(radial, 0.218, 0.011) * 0.42;
    float enckeGap = radialGaussian(radial, 0.742, 0.007) * 0.34;
    float darkGap = clamp((cassiniGap + innerGap + enckeGap) * saturn, 0.0, 1.0);
    density = clamp(density - darkGap * 0.4, 0.0, 1.0);

    vec3 tint = mix(vec3(0.94, 0.82, 0.65), vec3(0.84, 0.92, 0.97), kind);
    vec3 color = mix(band.rgb, band.rgb * tint, 0.36);
    color *= mix(0.84 + density * 0.34, 0.9 + density * 0.1, kind);
    color *= diffuse * shadow * mix(1.0, 0.9, kind);
    color *= 1.0 - darkGap * 0.68;

    float opacity = band.a * uOpacity * mix(1.0, 0.52, kind);
    opacity *= mix(0.78 + density * 0.42, 0.52 + density * 0.16, kind);
    opacity *= 1.0 - darkGap * 0.64;

    gl_FragColor = vec4(color, opacity);
  }
`;function m_({type:n="saturn",innerRadius:e,outerRadius:t,planetRadius:i,opacity:r=1}){return new Et({uniforms:{uBandTexture:{value:i_(n)},uLightPosition:{value:new b(0,0,0)},uShadowDirection:{value:new ge(1,0)},uInnerRadius:{value:e},uOuterRadius:{value:t},uPlanetRadius:{value:i},uOpacity:{value:r},uRingKind:{value:n==="uranus"?1:0}},vertexShader:f_,fragmentShader:p_,transparent:!0,side:cn,depthWrite:!1})}const Ta=new b;function g_(n,e){const t=new mo(n.innerRadius,n.outerRadius,160,8);t.rotateX(-Math.PI/2);const i=m_({type:n.textureType,innerRadius:n.innerRadius,outerRadius:n.outerRadius,planetRadius:e,opacity:n.opacity}),r=new ft(t,i);r.name=`${n.textureType}-ring`,r.renderOrder=2;function s(){r.worldToLocal(Ta.set(0,0,0)),i.uniforms.uShadowDirection.value.set(-Ta.x,-Ta.z).normalize(),i.uniforms.uLightPosition.value.set(0,0,0)}return{mesh:r,updateLighting:s}}function bc(n,e){return new ft(new wn(n*1.08,48,48),l_(e[0],e[1]))}function __(n){const e=new Nt;e.name=`${n.id}-pivot`,e.rotation.y=n.orbitPhase??0,e.rotation.z=n.orbitInclination??0;const t=new Nt;t.name=`${n.id}-translation`,t.position.x=n.orbitRadius??0,e.add(t);const i=new Nt;return i.name=`${n.id}-meshGroup`,i.rotation.z=n.axialTilt??0,t.add(i),{root:e,orbitPivot:e,translationGroup:t,meshGroup:i}}function Uu(n,e={}){const t=e.segments??56,i=new wn(n.displayRadius,t,t),{root:r,orbitPivot:s,translationGroup:o,meshGroup:a}=__(n);let l,c=null,u=null,f=null,h=null;if(n.appearance==="earth"){const _=d_({textureResolution:e.textureResolution});l=new ft(i,_.surfaceMaterial),h=new ft(new wn(n.displayRadius*1.006,t,t),_.nightLightsMaterial),u=new ft(new wn(n.displayRadius*1.02,t,t),_.cloudMaterial),f=bc(n.displayRadius,["#2044ac","#68caff"]),a.add(l,h,u,f)}else if(l=new ft(i,h_(n.appearance,{color:n.color,textureResolution:e.textureResolution})),a.add(l),n.hasAtmosphere&&n.appearance!=="earth"){const _=n.appearance==="venus"?["#796134","#f0d391"]:n.appearance==="uranus"?["#6a9ca8","#d2f3f8"]:["#2f4f93","#7ec7ff"];f=bc(n.displayRadius,_),a.add(f)}l.castShadow=!1,l.receiveShadow=!1,l.userData.bodyId=n.id,n.ring&&(c=g_(n.ring,n.displayRadius),a.add(c.mesh));const p=new et;p.position.set(0,n.displayRadius*1.35,0),a.add(p);function g(_,m){var d;u&&(u.rotation.y=l.rotation.y*1.08+m*.06),h&&(h.rotation.y=l.rotation.y),c&&c.updateLighting(),(d=l.material.uniforms)!=null&&d.uTime&&(l.material.uniforms.uTime.value=m)}return{...n,id:n.id,config:n,type:n.type,name:n.name,label:n.label,root:r,object3d:o,orbitPivot:s,translationGroup:o,meshGroup:a,mesh:l,ringMesh:(c==null?void 0:c.mesh)??null,labelAnchor:p,focusTarget:o,orbitLine:null,update:g}}function v_(n,e={}){return Uu(n,e)}function x_(n,e={}){return Uu(n,{...e,segments:e.segments??32})}function M_(n,e=0,t="#54637d"){const r=new B0(0,0,n,n,0,Math.PI*2,!1,0).getPoints(180).map(l=>new b(l.x,0,l.y)),s=new pt().setFromPoints(r),o=new Ls({color:t,transparent:!0,opacity:.22}),a=new O0(s,o);return a.rotation.z=e,a}function wa(n,e,t,i,r){const s=new Float32Array(n*3),o=new Float32Array(n*3),a=new Pe;for(let c=0;c<n;c+=1){const u=Math.acos(st.randFloatSpread(2)),f=Math.random()*Math.PI*2,h=e*st.lerp(.75,1,Math.random());s[c*3]=Math.sin(u)*Math.cos(f)*h,s[c*3+1]=Math.cos(u)*h,s[c*3+2]=Math.sin(u)*Math.sin(f)*h,a.set(r).offsetHSL(Math.random()*.03,0,st.randFloatSpread(.12)),o[c*3]=a.r,o[c*3+1]=a.g,o[c*3+2]=a.b}const l=new pt;return l.setAttribute("position",new bt(s,3)),l.setAttribute("color",new bt(o,3)),new ho(l,new Ds({size:t,map:Iu(),transparent:!0,opacity:i,vertexColors:!0,depthWrite:!1,blending:hn,sizeAttenuation:!0}))}function Aa(n,e,t){const i=new I0(new wu({map:r_(256,t),color:"#7be1ff",opacity:.34,transparent:!0,depthWrite:!1,blending:hn}));return i.position.copy(n),i.scale.setScalar(e),i}function S_(n={}){const e=new Nt,t=n.count??5200;e.add(wa(Math.floor(t*.55),820,2,.98,"#f8f8ff"),wa(Math.floor(t*.28),1040,2.7,.68,"#d6e5ff"),wa(Math.floor(t*.17),1320,3.6,.46,"#9bc7ff")),e.add(Aa(new b(-180,110,-460),360,"nebula-a"),Aa(new b(240,-70,-520),420,"nebula-b"),Aa(new b(110,180,-620),300,"nebula-c"));function i(r){e.rotation.y+=r*.004}return{root:e,update:i}}const y_=`
  varying vec3 vPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  void main() {
    vPosition = position;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vViewNormal = normalize(normalMatrix * normal);
    vViewDirection = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`,E_=`
  uniform float uTime;
  varying vec3 vPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash(i + vec3(1.0, 1.0, 1.0));

    float n00 = mix(n000, n100, f.x);
    float n10 = mix(n010, n110, f.x);
    float n01 = mix(n001, n101, f.x);
    float n11 = mix(n011, n111, f.x);
    float n0 = mix(n00, n10, f.y);
    float n1 = mix(n01, n11, f.y);
    return mix(n0, n1, f.z);
  }

  float fbm(vec3 p) {
    float total = 0.0;
    float amplitude = 0.55;
    float frequency = 1.0;
    for (int i = 0; i < 5; i++) {
      total += noise(p * frequency) * amplitude;
      amplitude *= 0.55;
      frequency *= 2.0;
    }
    return total;
  }

  float ridgedFbm(vec3 p) {
    float ridge = 1.0 - abs(fbm(p) * 1.72 - 0.86);
    return clamp(ridge, 0.0, 1.0);
  }

  void main() {
    vec3 dir = normalize(vPosition);
    float lat = dir.y * 0.5 + 0.5;
    float differentialSpin = uTime * mix(0.18, 0.34, smoothstep(-0.7, 0.82, dir.y));
    vec3 warp = vec3(
      fbm(dir * 2.2 + vec3(0.0, uTime * 0.06, differentialSpin)),
      fbm(dir.zxy * 2.7 - vec3(uTime * 0.05, 0.0, differentialSpin * 0.7)),
      fbm(dir.yzx * 3.1 + vec3(differentialSpin * 0.6, uTime * 0.04, 0.0))
    ) - 0.58;
    vec3 flow = normalize(dir + warp * 0.3);

    float swirl = sin((flow.x + flow.z) * 8.8 + differentialSpin * 2.8) * 0.5 + 0.5;
    float plasma = fbm(flow * 3.8 + vec3(0.0, uTime * 0.16, uTime * 0.1));
    float convection = fbm(flow.zyx * 7.6 - vec3(uTime * 0.3, 0.0, uTime * 0.2));
    float filaments = ridgedFbm(flow * 14.0 + vec3(uTime * 0.16, uTime * 0.08, -uTime * 0.11));
    float granules = fbm(flow * 19.0 - vec3(uTime * 0.24, uTime * 0.15, 0.0));
    float cellWalls = smoothstep(0.38, 0.82, filaments * 0.62 + (1.0 - granules) * 0.34);
    float spotField = fbm(flow * 2.1 + vec3(1.7, -uTime * 0.035, 0.6));
    float spotDetail = fbm(flow * 8.8 - vec3(uTime * 0.09, 0.3, uTime * 0.06));
    float sunspots = smoothstep(0.78, 1.04, spotField + spotDetail * 0.34) * smoothstep(0.08, 0.42, 1.0 - abs(dir.y));
    float heat = clamp(
      plasma * 0.48 + convection * 0.3 + swirl * 0.18 + filaments * 0.12 - cellWalls * 0.2 - sunspots * 0.36,
      0.0,
      1.0
    );
    float flare = smoothstep(0.45, 0.92, swirl * 0.62 + filaments * 0.38);
    float ember = smoothstep(0.22, 0.84, 1.0 - granules);

    vec3 color = mix(vec3(0.34, 0.055, 0.012), vec3(0.86, 0.24, 0.035), smoothstep(0.08, 0.58, heat));
    color = mix(color, vec3(1.0, 0.52, 0.08), smoothstep(0.42, 0.88, heat) * 0.52);
    color = mix(color, vec3(1.0, 0.78, 0.25), flare * 0.22);
    color = mix(color, vec3(0.17, 0.028, 0.008), clamp(cellWalls * 0.32 + sunspots * 0.58, 0.0, 0.72));
    color += vec3(0.11, 0.035, 0.0) * ember * (1.0 - sunspots) * 0.46;
    color += vec3(0.1, 0.03, 0.0) * pow(max(swirl, 0.0), 2.2) * 0.36;

    float rim = pow(1.0 - clamp(dot(normalize(vViewNormal), normalize(vViewDirection)), 0.0, 1.0), 1.8);
    color += vec3(0.18, 0.065, 0.012) * rim * 0.55;
    color *= 0.72 + heat * 0.24 + rim * 0.06;
    color = clamp(color, 0.0, 0.9);

    gl_FragColor = vec4(color, 1.0);
  }
`;function b_(){return new Et({uniforms:{uTime:{value:0}},vertexShader:y_,fragmentShader:E_})}const T_=`
  varying vec3 vLocalPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  void main() {
    vLocalPosition = position;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vViewNormal = normalize(normalMatrix * normal);
    vViewDirection = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`,w_=`
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uPulse;
  varying vec3 vLocalPosition;
  varying vec3 vViewNormal;
  varying vec3 vViewDirection;

  void main() {
    vec3 dir = normalize(vLocalPosition);
    float rim = 1.0 - abs(dot(normalize(vViewNormal), normalize(vViewDirection)));
    float feather = pow(smoothstep(0.02, 0.96, rim), 1.7);
    float rays = sin(atan(dir.z, dir.x) * 18.0 + uTime * uPulse) * 0.5 + 0.5;
    float breathing = sin((dir.y * 7.0 + dir.x * 4.0) + uTime * (uPulse * 0.7)) * 0.5 + 0.5;
    float wisps = 0.82 + rays * 0.1 + breathing * 0.08;
    vec3 color = uColor * (0.62 + feather * 0.38);

    gl_FragColor = vec4(color, uOpacity * feather * wisps);
  }
`;function ss(n,e,t,i=96,r=.25){return new ft(new wn(n,i,i),new Et({uniforms:{uColor:{value:new Pe(e)},uOpacity:{value:t},uTime:{value:0},uPulse:{value:r}},vertexShader:T_,fragmentShader:w_,transparent:!0,blending:hn,side:Pt,depthWrite:!1}))}function Ra(n,e,t){const i=[],s=n*.22,o=n*1.05;for(let a=0;a<48;a+=1){const l=a/47,c=e+(l-.5)*.62,u=Math.sin(l*Math.PI)*s;i.push(new b(Math.cos(c)*o,u,Math.sin(c)*o))}return new uo(new pt().setFromPoints(i),new Ls({color:t,transparent:!0,opacity:.36,blending:hn}))}function A_(n){const e=new Nt,t=new Nt;e.add(t);const i=new wn(n.displayRadius,96,96),r=b_(),s=new ft(i,r);s.name="sun",t.add(s);const o=ss(n.displayRadius*1.1,"#fff2bd",.3,96,.32),a=ss(n.displayRadius*1.24,"#ffc861",.2,96,.24),l=ss(n.displayRadius*1.45,"#ff873c",.12,96,.18),c=ss(n.displayRadius*1.72,"#f45a2e",.07,96,.13);t.add(o,a,l,c);const u=new Nt;u.add(Ra(n.displayRadius,.35,"#ff7567"),Ra(n.displayRadius,2.55,"#ff8c78"),Ra(n.displayRadius,4.6,"#ff6144")),t.add(u);const f=new H0("#fff1c8",18,820,.85);f.position.set(0,0,0),e.add(f);const h=new et;h.position.set(0,n.displayRadius*1.5,0),e.add(h);function p(g,_){r.uniforms.uTime.value=_,o.material.uniforms.uTime.value=_,a.material.uniforms.uTime.value=_,l.material.uniforms.uTime.value=_,c.material.uniforms.uTime.value=_,o.scale.setScalar(1+Math.sin(_*.95)*.02),a.scale.setScalar(1+Math.sin(_*.74+1.2)*.03),l.scale.setScalar(1+Math.sin(_*.58+2)*.04),c.scale.setScalar(1+Math.sin(_*.42+2.8)*.05),u.rotation.y=_*.08}return{...n,id:n.id,config:n,type:n.type,name:n.name,label:n.label,root:e,object3d:e,orbitPivot:e,translationGroup:e,meshGroup:t,mesh:s,labelAnchor:h,focusTarget:e,orbitLine:null,update:p}}const R_=Math.PI/180,vo=new b(0,1,0),Pa={star:new b(.72,.28,.64).normalize(),planet:new b(.72,.22,.66).normalize(),moon:new b(.54,.2,.82).normalize(),belt:new b(.78,.16,.6).normalize(),deepSpace:new b(-1,.3,.4).normalize()},Tc={saturn:new b(-.42,.1,.9).normalize(),uranus:new b(.98,.16,.12).normalize(),earth:new b(-.36,.18,.92).normalize(),jupiter:new b(-.3,.14,.94).normalize()},vr=Object.freeze({x:.18,y:0,fov:42,aspect:16/9}),wc=new Ki(0,0,0,"XYZ"),Xa=new Gn,P_=new b,as=new b,C_=new b,xr=new b,bs=new b;function ti(n,e,t){return Math.max(e,Math.min(t,n))}function L_(n,e,t){return n+(e-n)*t}function D_(n){return ti(n,0,1)}function Ns(n){const e=D_(n);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function An(n,e,t=0){return e&&e.isVector3?n.copy(e):Array.isArray(e)?n.set(e[0]??t,e[1]??t,e[2]??t):e&&typeof e.x=="number"?n.set(e.x,e.y??t,e.z??t):typeof e=="number"?n.set(e,e,e):n.set(t,t,t)}function Tt(n,e){return!n||!e||(e.position&&An(n.position,e.position,0),e.target&&An(n.target,e.target,0),e.up&&An(n.up,e.up,0),n.fov=e.fov??n.fov??null,n.distance=e.distance??n.distance??0,n.followTargetId=e.followTargetId??n.followTargetId??null,n.mode=e.mode??n.mode??"free",n.keepFollowing=e.keepFollowing??n.keepFollowing??!1),n}function xo(){return{position:new b,target:new b,up:new b(0,1,0),fov:null,distance:0,followTargetId:null,mode:"free",keepFollowing:!1}}function Ke(){return xo()}function I_(n={},e=0){return(n.orbitPhase??0)+(n.orbitSpeed??0)*e}function U_(n={},e=Xa){const t=n.orbitInclination??n.orbitTilt??0,i=n.orbitLongitude??n.orbitAscendingNode??0,r=n.orbitPlaneRotation??0;return wc.set(t,i,r,"XYZ"),e.setFromEuler(wc)}function N_(n,e={},t=0,i=null){const r=e.orbitRadius??e.outerRadius??0,s=I_(e,t);return n.set(Math.cos(s)*r,0,Math.sin(s)*r),U_(e,Xa),n.applyQuaternion(Xa),i&&n.add(i),n}function ai(n,e,t={}){if(!e)return n.set(0,0,0);const i=e.object3d||e.mesh||e.node||e.bodyMesh||e;return i&&i.isObject3D?(i.updateMatrixWorld(!0),i.getWorldPosition(n),n):e.worldPosition&&e.worldPosition.isVector3?n.copy(e.worldPosition):e.position&&e.position.isVector3?n.copy(e.position):e.position&&Array.isArray(e.position)?n.set(e.position[0]??0,e.position[1]??0,e.position[2]??0):e.position&&typeof e.position.x=="number"?n.set(e.position.x,e.position.y??0,e.position.z??0):t.fallbackPosition?An(n,t.fallbackPosition,0):n.set(0,0,0)}function Nu(n){return n?typeof n.displayRadius=="number"?n.displayRadius:typeof n.radius=="number"?n.radius:typeof n.outerRadius=="number"?n.outerRadius:typeof n.orbitRadius=="number"?Math.max(n.orbitRadius*.02,1):1:1}function O_(n,e={}){const t=(n==null?void 0:n.type)??"planet",i=Math.max(Nu(n),e.minRadius??0),r={star:14,planet:9,moon:5,belt:4}[t]??9,s=e.distanceMultiplier??(n==null?void 0:n.focusDistanceMultiplier)??r,o=i*s+(e.distanceOffset??0);return Math.max(e.minDistance??.001,o)}function F_(n,e={},t=P_){if(e.viewDirection)return An(t,e.viewDirection,0).normalize();if(!e.deepSpace&&(n!=null&&n.focusViewDirection)){An(t,n.focusViewDirection,0).normalize();const o=n!=null&&n.id?Tc[n.id]:null;return o&&n.id==="uranus"&&t.lerp(o,.68),t.normalize()}if(e.preserveCurrentView&&e.camera&&e.target&&(t.copy(e.camera.position).sub(e.target),t.lengthSq()>1e-8))return t.normalize();const i=(n==null?void 0:n.type)??"planet",r=n!=null&&n.id?Tc[n.id]:null,s=e.deepSpace?Pa.deepSpace:r??Pa[i]??Pa.planet;if(!e.deepSpace&&i!=="star"&&e.sunPosition){ai(xr,n,e),ai(bs,e.sunPosition,{fallbackPosition:[0,0,0]});const o=bs.sub(xr);if(o.lengthSq()>1e-6)return o.normalize(),t.copy(o).lerp(s,.42),t.normalize()}return t.copy(s)}function B_(n,e={}){if(e.disableFrameOffset)return null;const t=(n==null?void 0:n.focusFrameOffset)||null,i=e.frameOffset||null,r=e.mode??"focus";return i||t||r==="focus"||r==="tour"?{x:e.frameOffsetX??(i==null?void 0:i.x)??(t==null?void 0:t.x)??vr.x,y:e.frameOffsetY??(i==null?void 0:i.y)??(t==null?void 0:t.y)??vr.y}:null}function z_(n,e,t,i,r={}){var h;const s=B_(i,r);if(!s||s.x===0&&s.y===0)return n;const o=r.fov??(i==null?void 0:i.focusFov)??vr.fov,a=r.aspect??((h=r.camera)==null?void 0:h.aspect)??vr.aspect,l=Math.tan(o*R_*.5)*t,c=l*a,u=An(xr,r.up||vo,0).normalize(),f=bs.copy(e).negate().cross(u);return f.lengthSq()<1e-8?f.set(1,0,0):f.normalize(),n.addScaledVector(f,-c*s.x).addScaledVector(u,-l*s.y),n}function Mo(n,e={},t=xo()){const i=t.target;ai(i,n,e),n!=null&&n.focusTargetOffset&&(An(as,n.focusTargetOffset,0),i.add(as)),e.targetOffset&&(An(as,e.targetOffset,0),i.add(as));const r=F_(n,{...e,target:i},C_),s=O_(n,e);return z_(i,r,s,n,e),t.position.copy(i).addScaledVector(r,s),t.up.copy(e.up||vo),t.distance=s,t.followTargetId=(n==null?void 0:n.id)??(n==null?void 0:n.name)??null,t.mode=e.mode??"focus",t.keepFollowing=e.keepFollowing??!0,t.fov=e.fov??(n==null?void 0:n.focusFov)??vr.fov,t}function G_(n){return n&&(n.moons||n.childrenBodies||n.satellites||n.orbitChildren)||null}function qa(n,e,t){if(!n)return t;const i=n.orbitRadius??0,r=e+i,s=Math.max(Nu(n),n.outerRadius??0);t.maxRadius=Math.max(t.maxRadius,r+s);const o=G_(n);if(Array.isArray(o))for(let a=0;a<o.length;a+=1)qa(o[a],r,t);return t}function So(n,e=120){const t={maxRadius:0};if(Array.isArray(n))for(let i=0;i<n.length;i+=1)qa(n[i],0,t);else if(n&&typeof n=="object")for(const i of Object.keys(n))qa(n[i],0,t);return t.maxRadius>0?t.maxRadius:e}const jt=Object.freeze({distanceMultiplier:1.12,heightRatio:.3,minHeightRatio:.26,forwardBias:.4,minForwardBias:.36,horizontalSign:-1,targetShift:-.6,targetLift:.06,rightAnchorScale:.6,fov:27,minFov:27,mode:"deep-space"});function H_(n){const e=n.targetShift??jt.targetShift;return e>0&&n.rightAnchored!==!1?-e*(n.rightAnchorScale??jt.rightAnchorScale):e}function Hn(n={},e={},t=xo()){const i=n||{},r=e.bodies||i.bodies||null,s=Math.max(i.systemRadius??So(r,e.fallbackRadius??120),i.radius??0,1),o=ai(xr,i.sunPosition||i.center||e.sunPosition||e.center||null,{fallbackPosition:i.center||e.center||xr.set(0,0,0)}),a={...jt,...e.deepSpaceView||{},...i.deepSpaceView||{}},l=s*(a.distanceMultiplier??jt.distanceMultiplier),c=Math.max(Math.abs(a.heightRatio??jt.heightRatio),a.minHeightRatio??jt.minHeightRatio),u=a.forwardBias??jt.forwardBias,h=(Math.sign(u)||1)*Math.max(Math.abs(u),a.minForwardBias??jt.minForwardBias),p=a.horizontalSign??jt.horizontalSign,g=bs.set(p,c,h).normalize();return t.target.copy(o),t.target.x+=s*H_(a),t.target.y+=s*(a.targetLift??jt.targetLift),t.target.z+=s*(a.targetForwardShift??0),t.position.copy(t.target).addScaledVector(g,l),t.up.copy(e.up||vo),t.distance=l,t.fov=Math.max(a.fov??jt.fov,a.minFov??jt.minFov),t.followTargetId=i.sunId??e.sunId??"sun",t.mode=a.mode??"deep-space",t.keepFollowing=!1,t}function V_(n){return n?Array.isArray(n)?n:n instanceof Map?Array.from(n.values()):typeof n=="object"?Object.values(n):[]:[]}const Ou=7.5,Fu=1.05,k_=new b,W_=new b,Ac=new b;function X_(...n){for(let e=0;e<n.length;e+=1){const t=n[e];if(t&&!(Array.isArray(t)&&t.length===0)&&!(t instanceof Map&&t.size===0)&&!(typeof t=="object"&&!Array.isArray(t)&&!(t instanceof Map)&&Object.keys(t).length===0))return t}return null}function Rc(n){return(n==null?void 0:n.moons)||(n==null?void 0:n.childrenBodies)||(n==null?void 0:n.satellites)||(n==null?void 0:n.orbitChildren)||null}function Ya(n,e){if(!e||!n)return null;if(n instanceof Map)return n.get(e)||null;if(Array.isArray(n)){for(let t=0;t<n.length;t+=1){const i=n[t];if(i&&(i.id===e||i.name===e||i.label===e))return i;const r=Rc(i),s=Ya(r,e);if(s)return s}return null}if(typeof n=="object"){if(n[e])return n[e];for(const t of Object.keys(n)){const i=n[t];if(i&&(i.id===e||i.name===e||i.label===e))return i;const r=Rc(i),s=Ya(r,e);if(s)return s}}return null}function yo(n,e){return e?typeof e=="string"?Ya(X_(n.bodyMap,n.bodies,n.rootBodies,n.sceneBodies),e):e:null}function q_(n,e,t=k_,i=W_){t.set(0,0,0),i.set(0,0,0);let r=0,s=0;for(let o=0;o<e.length;o+=1){const a=yo(n,e[o]);a&&(ai(Ac,a,n),t.add(Ac),s=Math.max(s,a.displayRadius??a.radius??a.outerRadius??a.orbitRadius??1),r+=1)}return r>0&&t.multiplyScalar(1/r),{target:t,radius:s||1}}function Y_(n,e,t={},i=Ke()){const r=Array.isArray(n)?n:[n],s=q_(e,r),o=yo(e,r[0]);i.target.copy(s.target);const a=o||{id:r.join("|"),type:t.type||"planet",displayRadius:t.displayRadius??s.radius,focusDistanceMultiplier:t.distanceMultiplier};return a.worldPosition=i.target,Mo(a,{...e,targetOffset:t.targetOffset,viewDirection:t.viewDirection,distanceMultiplier:t.distanceMultiplier,distanceOffset:t.distanceOffset,minDistance:t.minDistance,fov:t.fov,frameOffset:t.frameOffset,frameOffsetX:t.frameOffsetX,frameOffsetY:t.frameOffsetY,disableFrameOffset:t.disableFrameOffset,mode:t.mode||"tour",keepFollowing:!0},i),i}function Ts(n,e,t,i,r){const s={...t,systemBounds:t.systemBounds||e.systemBounds||null,bodies:t.bodies||e.bodies||null,bodyMap:t.bodyMap||e.bodyMap||null};if(typeof n.buildPose=="function")return n.buildPose(s,e,i,r);if(n.type==="deep-space")return Hn(s.systemBounds||{},s,r);if(n.targetIds)return Y_(n.targetIds,s,n,r);if(n.targetId){const o=yo(s,n.targetId);if(o)return Mo(o,{...s,...n,mode:n.mode||"tour",keepFollowing:!0},r)}return Hn(s.systemBounds||{},s,r)}function $n(n){return{duration:n.duration??Ou,transition:n.transition??Fu,mode:n.mode||"tour",...n,buildPose(e,t,i,r){if(typeof n.buildPose=="function")return n.buildPose(e,t,i,r);const s=Ts(n.from||n,t,e,0,Ke()),o=Ts(n.to||n,t,e,1,Ke()),a=Ns(i);return r.position.copy(s.position).lerp(o.position,a),r.target.copy(s.target).lerp(o.target,a),r.up.copy(s.up).lerp(o.up,a),r.fov=o.fov??s.fov??r.fov??null,r.distance=s.distance+(o.distance-s.distance)*a,r.followTargetId=o.followTargetId??s.followTargetId??null,r.mode=n.mode||"tour",r.keepFollowing=!0,r}}}const Bu=Object.freeze([$n({id:"sun-close",duration:7,targetId:"sun",distanceMultiplier:10.8,frameOffsetX:.14,viewDirection:new b(.78,.26,.56),from:{targetId:"sun",distanceMultiplier:12.4,frameOffsetX:.12,viewDirection:new b(.72,.28,.62)},to:{targetId:"sun",distanceMultiplier:9.8,frameOffsetX:.16,viewDirection:new b(.84,.24,.5)}}),$n({id:"inner-planets-pass",duration:8,targetIds:["mercury","venus","earth","mars"],distanceMultiplier:11.5,frameOffsetX:.12,viewDirection:new b(.86,.18,.5),from:{targetIds:["mercury","venus"],distanceMultiplier:10.5,frameOffsetX:.1,viewDirection:new b(.9,.16,.4)},to:{targetIds:["earth","mars"],distanceMultiplier:12.2,frameOffsetX:.14,viewDirection:new b(.8,.2,.56)}}),$n({id:"asteroid-belt",duration:7,targetId:"asteroidBelt",distanceMultiplier:6.6,frameOffsetX:.12,viewDirection:new b(.9,.14,.42),from:{targetId:"asteroidBelt",distanceMultiplier:7.4,frameOffsetX:.1,viewDirection:new b(.92,.12,.36)},to:{targetId:"asteroidBelt",distanceMultiplier:6,frameOffsetX:.14,viewDirection:new b(.86,.16,.48)}}),$n({id:"jupiter-system",duration:8,targetId:"jupiter",distanceMultiplier:10.6,viewDirection:new b(.8,.2,.54),from:{targetId:"jupiter",distanceMultiplier:11.8,viewDirection:new b(.82,.18,.48)},to:{targetId:"jupiter",distanceMultiplier:9.8,viewDirection:new b(.76,.22,.58)}}),$n({id:"saturn-rings",duration:8,targetId:"saturn",distanceMultiplier:11.4,viewDirection:new b(.72,.2,.66),from:{targetId:"saturn",distanceMultiplier:12.6,viewDirection:new b(.78,.2,.56)},to:{targetId:"saturn",distanceMultiplier:10.2,viewDirection:new b(.66,.22,.72)}}),$n({id:"uranus-ring",duration:8,targetId:"uranus",distanceMultiplier:9.6,viewDirection:new b(.96,.16,.16),from:{targetId:"uranus",distanceMultiplier:10.7,viewDirection:new b(.98,.14,.08)},to:{targetId:"uranus",distanceMultiplier:9,viewDirection:new b(.92,.18,.24)}}),$n({id:"deep-space-overview",duration:8,type:"deep-space",buildPose(n,e,t,i){var a;const r=Hn(n.systemBounds||{},n,i),s=Hn({...n.systemBounds,systemRadius:Math.max(((a=n.systemBounds)==null?void 0:a.systemRadius)??So(n.bodies||e.bodies||[],120),1)*.82},{...n,deepSpaceView:{...n.deepSpaceView,distanceMultiplier:1.45}},Ke()),o=Ns(t);return r.position.copy(s.position).lerp(r.position,o),r.target.copy(s.target).lerp(r.target,o),r.up.copy(s.up).lerp(r.up,o),r.distance=s.distance+(r.distance-s.distance)*o,r.mode="deep-space",r.followTargetId=r.followTargetId||"sun",r}})]);function j_(n={}){return{active:!1,completed:!1,looping:!1,shotIndex:0,shotElapsed:0,elapsed:0,returnMode:"free",shots:Bu.slice(),currentPose:Ke(),previousPose:Ke(),currentShot:null,_blendPoseA:Ke(),_blendPoseB:Ke(),...n}}function K_(n,e={}){return n?(n.active=!0,n.completed=!1,n.shotIndex=0,n.shotElapsed=0,n.elapsed=0,n.returnMode=e.returnMode||n.returnMode||"free",n.currentShot=n.shots[0]||null,typeof e.onStart=="function"&&e.onStart(n),n.currentShot):null}function qi(n,e={}){n&&(n.active=!1,n.currentShot=null,n.shotElapsed=0,typeof e.onStop=="function"&&e.onStop(n))}function Z_(n,e,t,i){return n.position.copy(e.position).lerp(t.position,i),n.target.copy(e.target).lerp(t.target,i),n.up.copy(e.up).lerp(t.up,i),n.fov=t.fov??e.fov??n.fov??null,n.distance=e.distance+(t.distance-e.distance)*i,n.followTargetId=t.followTargetId??e.followTargetId??null,n.mode=t.mode??e.mode??"tour",n.keepFollowing=!0,n}function $_(n,e=0,t={}){if(!n||!n.active)return null;const i=n.shots||Bu;if(i.length===0)return qi(n,t),null;n.elapsed+=e,n.shotElapsed+=e;const r=i[Math.min(n.shotIndex,i.length-1)];n.currentShot=r;const s=Math.max(r.duration??Ou,1e-4),o=Math.max(r.transition??Fu,1e-4),a=ti(n.shotElapsed/s,0,1),l=Ts(r,n,t,a,n.currentPose||Ke());if(n.currentPose||(n.currentPose=Ke()),n.shotElapsed<=o){const c=Ns(ti(n.shotElapsed/o,0,1));if(n.shotIndex>0){const u=i[n.shotIndex-1],f=Ts(u,n,t,1,n.previousPose||Ke());Z_(n.currentPose,f,l,c)}else Tt(n.currentPose,l)}else Tt(n.currentPose,l);return typeof t.onShot=="function"&&t.onShot({shot:r,index:n.shotIndex,progress:a,pose:n.currentPose}),n.shotElapsed>=s&&(n.previousPose=Tt(n.previousPose||Ke(),n.currentPose),n.shotIndex+=1,n.shotElapsed=0,n.shotIndex>=i.length?n.looping?(n.shotIndex=0,n.shotElapsed=0,n.currentShot=i[0]):(n.active=!1,n.completed=!0,n.currentShot=null,n.currentPose.mode=n.returnMode||"free",typeof t.onComplete=="function"&&t.onComplete(n.currentPose,n)):typeof t.onAdvance=="function"&&t.onAdvance(i[n.shotIndex],n)),n.currentPose}function J_(n={},e=Ke()){return Hn(n.systemBounds||{},n,e)}const Eo=.9,zu=6.5,Gu=7.5,Hu=6,Q_=.18,ev=Ke(),Pc=Ke();new b;const tv=new b;new b;function nv(...n){for(let e=0;e<n.length;e+=1){const t=n[e];if(t&&!(Array.isArray(t)&&t.length===0)&&!(t instanceof Map&&t.size===0)&&!(typeof t=="object"&&!Array.isArray(t)&&!(t instanceof Map)&&Object.keys(t).length===0))return t}return null}function Tr(n){return n._cameraFollowScratch||(n._cameraFollowScratch={poseA:Ke(),poseB:Ke(),desired:Ke(),current:Ke(),world:new b,worldB:new b,worldC:new b,direction:new b(0,1,0)}),n.followTransition||(n.followTransition={active:!1,elapsed:0,duration:Eo,from:Ke(),to:Ke(),easing:"cubic"}),n._cameraFollowScratch}function Cc(n){return(n==null?void 0:n.moons)||(n==null?void 0:n.childrenBodies)||(n==null?void 0:n.satellites)||(n==null?void 0:n.orbitChildren)||null}function ja(n,e){if(!e||!n)return null;if(n instanceof Map)return n.get(e)||null;if(Array.isArray(n)){for(let t=0;t<n.length;t+=1){const i=n[t];if(i&&(i.id===e||i.name===e||i.label===e))return i;const r=Cc(i),s=ja(r,e);if(s)return s}return null}if(typeof n=="object"){if(n[e])return n[e];for(const t of Object.keys(n)){const i=n[t];if(i&&(i.id===e||i.name===e||i.label===e))return i;const r=Cc(i),s=ja(r,e);if(s)return s}}return null}function bo(n,e,t={}){return e?typeof e=="string"?ja(nv(t.bodyMap,n.bodyMap,t.bodies,n.bodies,n.rootBodies),e):e.isObject3D||e.object3d||e.mesh||e.worldPosition||e.id||e.name||e.label||e.position?e:null:null}function Ca(n,e,t,i){return n.copy(e).lerp(t,i)}function Bi(n,e,t,i={}){const r=n.camera,s=n.controls;Tr(n);const o=i.positionDamping??n.positionDamping??zu,a=i.targetDamping??n.targetDamping??Gu,l=i.upDamping??n.upDamping??Hu,c=i.instant===!0,u=ti(1-Math.exp(-o*Math.max(t,0)),0,1),f=ti(1-Math.exp(-a*Math.max(t,0)),0,1),h=ti(1-Math.exp(-l*Math.max(t,0)),0,1);if(n.currentPose||(n.currentPose=Ke()),n.lastPose||(n.lastPose=Ke()),n.followTransition.active){n.followTransition.elapsed+=t;const p=Math.max(n.followTransition.duration,1e-4),g=Ns(ti(n.followTransition.elapsed/p,0,1));Ca(n.currentPose.position,n.followTransition.from.position,n.followTransition.to.position,g),Ca(n.currentPose.target,n.followTransition.from.target,n.followTransition.to.target,g),Ca(n.currentPose.up,n.followTransition.from.up,n.followTransition.to.up,g),n.currentPose.distance=L_(n.followTransition.from.distance,n.followTransition.to.distance,g),n.currentPose.fov=n.followTransition.to.fov??n.followTransition.from.fov??n.currentPose.fov,n.currentPose.followTargetId=n.followTransition.to.followTargetId??n.followTransition.from.followTargetId??null,n.currentPose.mode=n.followTransition.to.mode??n.followTransition.from.mode??n.mode??"focus",n.currentPose.keepFollowing=n.followTransition.to.keepFollowing??n.followTransition.from.keepFollowing??!1,n.followTransition.elapsed>=p&&(n.followTransition.active=!1,Tt(n.currentPose,n.followTransition.to))}else e&&Tt(n.currentPose,e);return r&&(typeof r.fov=="number"&&n.currentPose.fov!==null&&n.currentPose.fov!==void 0&&r.fov!==n.currentPose.fov&&(r.fov=n.currentPose.fov,typeof r.updateProjectionMatrix=="function"&&r.updateProjectionMatrix()),n.currentPose.position&&r.position&&(n.mode==="free"||c?r.position.copy(n.currentPose.position):r.position.lerp(n.currentPose.position,u)),r.up&&n.currentPose.up&&(n.mode==="free"||c?r.up.copy(n.currentPose.up):r.up.lerp(n.currentPose.up,h),r.up.normalize())),s?(s.enabled=n.mode==="free"||n.lockControlsWhileFollowing===!1&&n.mode!=="tour",s.target&&n.currentPose.target&&(n.mode==="free"||c?s.target.copy(n.currentPose.target):s.target.lerp(n.currentPose.target,f)),typeof s.update=="function"&&i.updateControls!==!1&&s.update()):r&&typeof r.lookAt=="function"&&n.currentPose.target&&r.lookAt(n.currentPose.target),n.currentPose}function Ka(n,e,t,i,r){const s=bo(n,e,t);if(!s)return Hn(t.systemBounds||{},t,r);const o={camera:n.camera,target:tv.copy(r.target),viewDirection:i.viewDirection||t.viewDirection,preserveCurrentView:i.preserveCurrentView??t.preserveCurrentView??!1,distanceMultiplier:i.distanceMultiplier,distanceOffset:i.distanceOffset,minDistance:i.minDistance,keepFollowing:i.keepFollowing??!0,mode:i.mode||"focus",fov:i.fov,up:i.up||t.up,sunPosition:t.sunPosition,deepSpace:i.deepSpace||!1};return Mo(s,o,r)}function iv(n={}){return{camera:null,controls:null,mode:"free",targetId:null,target:null,currentPose:Ke(),lastPose:Ke(),positionDamping:zu,targetDamping:Gu,upDamping:Hu,lookAhead:Q_,lockControlsWhileFollowing:!0,cameraOffset:new b,bodyMap:null,systemBounds:null,followTransition:null,_cameraFollowScratch:null,...n}}function Vu(n,e,t={},i={}){if(!n)return null;Tr(n),n.target=bo(n,e,i)||e,n.targetId=typeof e=="string"?e:(e==null?void 0:e.id)||(e==null?void 0:e.name)||(e==null?void 0:e.label)||null,n.mode=t.mode||(n.mode==="deep-space"?"deep-space":"focus");const r=Tt(n.followTransition.from,n.currentPose||Ke()),s=Ka(n,n.target,i,t,n.followTransition.to);return t.deepSpace&&(Hn(i.systemBounds||n.systemBounds||{},i,s),n.mode="deep-space"),t.instant?(Tt(n.currentPose,s),n.followTransition.active=!1,n.lastPose=Tt(n.lastPose,n.currentPose),Bi(n,n.currentPose,0,{updateControls:!1,instant:!0}),n.currentPose):(n.followTransition.active=!0,n.followTransition.elapsed=0,n.followTransition.duration=t.duration??n.focusTransitionDuration??Eo,Tt(r,n.currentPose||Ke()),Tt(s,n.followTransition.to),s)}function rv(n,e,t={}){return!n||!e?null:(Tr(n),Tt(n.followTransition.from,n.currentPose||Ke()),Tt(n.followTransition.to,e),n.followTransition.active=!0,n.followTransition.elapsed=0,n.followTransition.duration=t.duration??n.focusTransitionDuration??Eo,n.mode=t.mode||e.mode||n.mode||"focus",t.instant&&(Tt(n.currentPose,e),n.followTransition.active=!1,Bi(n,n.currentPose,0,{updateControls:!1,instant:!0})),e)}function To(n,e={}){n&&(Tr(n),n.mode="free",n.target=null,n.targetId=null,n.followTransition.active=!1,e.resetPose&&Tt(n.currentPose,e.resetPose),n.controls&&(n.controls.enabled=!0))}function sv(n,e=0,t={}){if(!n)return null;if(Tr(n),n.mode==="deep-space"&&!n.followTransition.active){const i=Hn(t.systemBounds||n.systemBounds||{},t,ev);return n.currentPose=Tt(n.currentPose||Ke(),i),Bi(n,n.currentPose,e,t)}if(n.followTransition.active)return Bi(n,null,e,t);if(n.mode!=="free"&&n.target){const i=Ka(n,n.target,t,{distanceMultiplier:t.distanceMultiplier,distanceOffset:t.distanceOffset,minDistance:t.minDistance,keepFollowing:!0,mode:n.mode,fov:t.fov,preserveCurrentView:!0,up:t.up,viewDirection:t.viewDirection},Pc);return n.currentPose=Tt(n.currentPose||Ke(),i),Bi(n,n.currentPose,e,t)}if(t.target){const i=bo(n,t.target,t);if(i){n.target=i,n.targetId=i.id||i.name||i.label||n.targetId,n.mode=t.mode||"focus";const r=Ka(n,i,t,t,Pc);return n.currentPose=Tt(n.currentPose||Ke(),r),Bi(n,n.currentPose,e,t)}}return n.camera&&n.controls&&(n.controls.enabled=!0,typeof n.controls.update=="function"&&n.controls.update()),n.currentPose||null}const av=[new b,new b,new b,new b,new b,new b,new b,new b];function ov(n){return n._animationScratch||(n._animationScratch={worldPositions:av}),n._animationScratch}function lv(...n){for(let e=0;e<n.length;e+=1){const t=n[e];if(t&&!(Array.isArray(t)&&t.length===0)&&!(t instanceof Map&&t.size===0)&&!(typeof t=="object"&&!Array.isArray(t)&&!(t instanceof Map)&&Object.keys(t).length===0))return t}return null}function cv(n){return(n==null?void 0:n.moons)||(n==null?void 0:n.childrenBodies)||(n==null?void 0:n.satellites)||(n==null?void 0:n.orbitChildren)||null}function os(n,e){if(!n||!n.rotation)return 0;n.userData||(n.userData={});const t=`__animationBase${e.toUpperCase()}`;return n.userData[t]===void 0&&(n.userData[t]=n.rotation[e]??0),n.userData[t]}function uv(n){return(n==null?void 0:n.orbitNode)||(n==null?void 0:n.orbitPivot)||(n==null?void 0:n.orbitGroup)||(n==null?void 0:n.orbitObject)||(n==null?void 0:n.pivot)||null}function dv(n){return(n==null?void 0:n.spinNode)||(n==null?void 0:n.spinPivot)||(n==null?void 0:n.spinGroup)||(n==null?void 0:n.mesh)||(n==null?void 0:n.object3d)||(n==null?void 0:n.node)||null}function ls(n,e,t){!n||!n.rotation||(n.rotation[e]=t)}function ku(n,e,t,i,r,s){if(!n)return;const o=r.orbitEnabled!==!1&&n.orbitEnabled!==!1,a=r.spinEnabled!==!1&&n.spinEnabled!==!1,l=uv(n),c=dv(n),u=n.spinAxis||"y",f=n.axialTiltAxis||"z",h=n.orbitAxis||"y",p=n.orbitPhase??0,g=o?n.orbitSpeed??0:0,_=a?n.rotationSpeed??0:0,m=n.orbitInclination??n.orbitTilt??0;n.orbitRadius;const d=r._animationScratch.worldPositions,M=d[Math.min(s,d.length-1)];l&&l.rotation?(ls(l,"x",os(l,"x")+m),ls(l,h,os(l,h)+p+g*e)):(n.position||n.worldPosition||n.object3d||n.mesh||n.node)&&N_(M,n,e,i||null),c&&c.rotation&&(ls(c,u,os(c,u)+(n.rotationPhase??0)+_*e),n.axialTilt!==void 0&&n.axialTilt!==null&&ls(c,f,os(c,f)+n.axialTilt));const x=n.object3d||n.mesh||n.node||n.bodyMesh||null;x&&x.isObject3D&&(x.updateMatrixWorld(!0),x.getWorldPosition(M)),x&&x.position&&!l&&x.position.copy(M),!l&&!x&&(n.position||n.worldPosition)&&(n.position&&n.position.isVector3?n.position.copy(M):n.position&&Array.isArray(n.position)?(n.position[0]=M.x,n.position[1]=M.y,n.position[2]=M.z):n.position&&typeof n.position.x=="number"&&(n.position.x=M.x,n.position.y=M.y,n.position.z=M.z)),n.worldPosition&&n.worldPosition.isVector3?n.worldPosition.copy(M):n.worldPosition||(n.worldPosition=M.clone()),typeof r.onBodyUpdated=="function"&&r.onBodyUpdated(n,{time:e,deltaTime:t,worldPosition:n.worldPosition});const E=cv(n);if(Array.isArray(E))for(let C=0;C<E.length;C+=1)ku(E[C],e,t,n.worldPosition,r,s+1)}function hv(n={}){return{elapsed:0,timeScale:1,paused:!1,orbitEnabled:!0,spinEnabled:!0,bodies:[],bodyMap:null,onBodyUpdated:null,_animationScratch:null,...n}}function fv(n,e=0,t={}){if(!n)return 0;const i=t.paused??n.paused??!1,r=t.timeScale??n.timeScale??1;n.paused=i,n.timeScale=r;const s=i?0:e*r;n.deltaTime=s,n.elapsed=(n.elapsed??0)+s,n.simulationTime=n.elapsed,n.lastUpdateDelta=e,ov(n);const o=lv(n.bodies,n.bodyMap,n.rootBodies),a=V_(o);for(let l=0;l<a.length;l+=1)ku(a[l],n.simulationTime,s,null,n,0);return s}function pv(){const n=new kt(42,window.innerWidth/window.innerHeight,.1,8e3);return n.position.set(-140,68,160),n.lookAt(0,0,0),n}const Wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mv=new oo(-1,1,1,-1,0,1);class gv extends pt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const _v=new gv;class Xu{constructor(e){this._mesh=new ft(_v,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vv extends wr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ys.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lc extends wr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class xv extends wr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Mv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ge);this._width=i.width,this._height=i.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vv(Wu),this.copyPass.material.blending=En,this.clock=new Lu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lc!==void 0&&(o instanceof Lc?i=!0:o instanceof xv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sv extends wr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const yv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Yi extends wr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new an(s,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new an(s,o,{type:bn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new an(s,o,{type:bn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=yv;this.highPassUniforms=ys.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ge(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Wu;this.copyUniforms=ys.clone(u.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new Ps,this.fsQuad=new Xu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ge(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Yi.BlurDirectionX=new ge(1,0);Yi.BlurDirectionY=new ge(0,1);function Ev(n,e,t,i={}){const r=new Mv(n),s=new Sv(e,t),o=new Yi(new ge(window.innerWidth,window.innerHeight),i.strength??1.38,i.radius??.48,i.threshold??.38);return r.addPass(s),r.addPass(o),{composer:r,bloomPass:o}}const Dc={type:"change"},La={type:"start"},Ic={type:"end"},cs=new yr,Uc=new Un,bv=Math.cos(70*st.DEG2RAD);class Tv extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",ne),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Dc),i.update(),s=r.NONE},this.update=function(){const P=new b,$=new Gn().setFromUnitVectors(e.up,new b(0,1,0)),de=$.clone().invert(),oe=new b,ye=new Gn,Ve=new b,qe=2*Math.PI;return function(ue=null){const L=i.object.position;P.copy(L).sub(i.target),P.applyQuaternion($),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&B(v(ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(le)&&isFinite(ce)&&(le<-Math.PI?le+=qe:le>Math.PI&&(le-=qe),ce<-Math.PI?ce+=qe:ce>Math.PI&&(ce-=qe),le<=ce?a.theta=Math.max(le,Math.min(ce,a.theta)):a.theta=a.theta>(le+ce)/2?Math.max(le,a.theta):Math.min(ce,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(de),L.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let we=!1;if(i.zoomToCursor&&R){let be=null;if(i.object.isPerspectiveCamera){const Ye=P.length();be=j(Ye*c);const je=Ye-be;i.object.position.addScaledVector(E,je),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ye=new b(C.x,C.y,0);Ye.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),we=!0;const je=new b(C.x,C.y,0);je.unproject(i.object),i.object.position.sub(je).add(Ye),i.object.updateMatrixWorld(),be=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;be!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(be).add(i.object.position):(cs.origin.copy(i.object.position),cs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(cs.direction))<bv?e.lookAt(i.target):(Uc.setFromNormalAndCoplanarPoint(i.object.up,i.target),cs.intersectPlane(Uc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),we=!0);return c=1,R=!1,we||oe.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o||Ve.distanceToSquared(i.target)>0?(i.dispatchEvent(Dc),oe.copy(i.object.position),ye.copy(i.object.quaternion),Ve.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",S),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",S),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new gc,l=new gc;let c=1;const u=new b,f=new ge,h=new ge,p=new ge,g=new ge,_=new ge,m=new ge,d=new ge,M=new ge,x=new ge,E=new b,C=new ge;let R=!1;const A=[],D={};function v(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function y(P){const $=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*$)}function B(P){l.theta-=P}function V(P){l.phi-=P}const te=function(){const P=new b;return function(de,oe){P.setFromMatrixColumn(oe,0),P.multiplyScalar(-de),u.add(P)}}(),I=function(){const P=new b;return function(de,oe){i.screenSpacePanning===!0?P.setFromMatrixColumn(oe,1):(P.setFromMatrixColumn(oe,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(de),u.add(P)}}(),O=function(){const P=new b;return function(de,oe){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Ve=i.object.position;P.copy(Ve).sub(i.target);let qe=P.length();qe*=Math.tan(i.object.fov/2*Math.PI/180),te(2*de*qe/ye.clientHeight,i.object.matrix),I(2*oe*qe/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(te(de*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),I(oe*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(P,$){if(!i.zoomToCursor)return;R=!0;const de=i.domElement.getBoundingClientRect(),oe=P-de.left,ye=$-de.top,Ve=de.width,qe=de.height;C.x=oe/Ve*2-1,C.y=-(ye/qe)*2+1,E.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function Z(P){f.set(P.clientX,P.clientY)}function ie(P){Y(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function ae(P){g.set(P.clientX,P.clientY)}function X(P){h.set(P.clientX,P.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const $=i.domElement;B(2*Math.PI*p.x/$.clientHeight),V(2*Math.PI*p.y/$.clientHeight),f.copy(h),i.update()}function N(P){M.set(P.clientX,P.clientY),x.subVectors(M,d),x.y>0?k(y(x.y)):x.y<0&&K(y(x.y)),d.copy(M),i.update()}function se(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),O(m.x,m.y),g.copy(_),i.update()}function W(P){Y(P.clientX,P.clientY),P.deltaY<0?K(y(P.deltaY)):P.deltaY>0&&k(y(P.deltaY)),i.update()}function Q(P){let $=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),$=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),$=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),$=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),$=!0;break}$&&(P.preventDefault(),i.update())}function fe(P){if(A.length===1)f.set(P.pageX,P.pageY);else{const $=Xe(P),de=.5*(P.pageX+$.x),oe=.5*(P.pageY+$.y);f.set(de,oe)}}function me(P){if(A.length===1)g.set(P.pageX,P.pageY);else{const $=Xe(P),de=.5*(P.pageX+$.x),oe=.5*(P.pageY+$.y);g.set(de,oe)}}function xe(P){const $=Xe(P),de=P.pageX-$.x,oe=P.pageY-$.y,ye=Math.sqrt(de*de+oe*oe);d.set(0,ye)}function De(P){i.enableZoom&&xe(P),i.enablePan&&me(P)}function F(P){i.enableZoom&&xe(P),i.enableRotate&&fe(P)}function ut(P){if(A.length==1)h.set(P.pageX,P.pageY);else{const de=Xe(P),oe=.5*(P.pageX+de.x),ye=.5*(P.pageY+de.y);h.set(oe,ye)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const $=i.domElement;B(2*Math.PI*p.x/$.clientHeight),V(2*Math.PI*p.y/$.clientHeight),f.copy(h)}function Ee(P){if(A.length===1)_.set(P.pageX,P.pageY);else{const $=Xe(P),de=.5*(P.pageX+$.x),oe=.5*(P.pageY+$.y);_.set(de,oe)}m.subVectors(_,g).multiplyScalar(i.panSpeed),O(m.x,m.y),g.copy(_)}function Ce(P){const $=Xe(P),de=P.pageX-$.x,oe=P.pageY-$.y,ye=Math.sqrt(de*de+oe*oe);M.set(0,ye),x.set(0,Math.pow(M.y/d.y,i.zoomSpeed)),k(x.y),d.copy(M);const Ve=(P.pageX+$.x)*.5,qe=(P.pageY+$.y)*.5;Y(Ve,qe)}function Me(P){i.enableZoom&&Ce(P),i.enablePan&&Ee(P)}function nt(P){i.enableZoom&&Ce(P),i.enableRotate&&ut(P)}function Ie(P){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",S)),Ae(P),P.pointerType==="touch"?Se(P):z(P))}function w(P){i.enabled!==!1&&(P.pointerType==="touch"?pe(P):re(P))}function S(P){Oe(P),A.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",S)),i.dispatchEvent(Ic),s=r.NONE}function z(P){let $;switch(P.button){case 0:$=i.mouseButtons.LEFT;break;case 1:$=i.mouseButtons.MIDDLE;break;case 2:$=i.mouseButtons.RIGHT;break;default:$=-1}switch($){case hi.DOLLY:if(i.enableZoom===!1)return;ie(P),s=r.DOLLY;break;case hi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;ae(P),s=r.PAN}else{if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}break;case hi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}else{if(i.enablePan===!1)return;ae(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(La)}function re(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(P);break;case r.DOLLY:if(i.enableZoom===!1)return;N(P);break;case r.PAN:if(i.enablePan===!1)return;se(P);break}}function ee(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(La),W(P),i.dispatchEvent(Ic))}function ne(P){i.enabled===!1||i.enablePan===!1||Q(P)}function Se(P){switch(J(P),A.length){case 1:switch(i.touches.ONE){case fi.ROTATE:if(i.enableRotate===!1)return;fe(P),s=r.TOUCH_ROTATE;break;case fi.PAN:if(i.enablePan===!1)return;me(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(P),s=r.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(La)}function pe(P){switch(J(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ut(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(P),i.update();break;default:s=r.NONE}}function ve(P){i.enabled!==!1&&P.preventDefault()}function Ae(P){A.push(P.pointerId)}function Oe(P){delete D[P.pointerId];for(let $=0;$<A.length;$++)if(A[$]==P.pointerId){A.splice($,1);return}}function J(P){let $=D[P.pointerId];$===void 0&&($=new ge,D[P.pointerId]=$),$.set(P.pageX,P.pageY)}function Xe(P){const $=P.pointerId===A[0]?A[1]:A[0];return D[$]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",S),i.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}function wv(n,e){const t=new Tv(n,e);return t.enableDamping=!0,t.dampingFactor=.065,t.rotateSpeed=.65,t.zoomSpeed=.8,t.panSpeed=.75,t.minDistance=6,t.maxDistance=1600,t.target=new b(0,0,0),t.update(),t}const Ni=new b,Nc=new $e,Oc=new $e,Fc=new b,Bc=new b;class Av{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Nc.copy(g.matrixWorldInverse),Oc.multiplyMatrices(g.projectionMatrix,Nc),c(p,p,g),h(p)},this.setSize=function(p,g){i=p,r=g,s=i/2,o=r/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p,g,_){if(p.isCSS2DObject){Ni.setFromMatrixPosition(p.matrixWorld),Ni.applyMatrix4(Oc);const m=p.visible===!0&&Ni.z>=-1&&Ni.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,g,_);const M=p.element;M.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Ni.x*s+s)+"px,"+(-Ni.y*o+o)+"px)",M.parentNode!==l&&l.appendChild(M),p.onAfterRender(t,g,_)}const d={distanceToCameraSquared:u(_,p)};a.objects.set(p,d)}for(let m=0,d=p.children.length;m<d;m++)c(p.children[m],g,_)}function u(p,g){return Fc.setFromMatrixPosition(p.matrixWorld),Bc.setFromMatrixPosition(g.matrixWorld),Fc.distanceToSquared(Bc)}function f(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function h(p){const g=f(p).sort(function(m,d){if(m.renderOrder!==d.renderOrder)return d.renderOrder-m.renderOrder;const M=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(d).distanceToCameraSquared;return M-x}),_=g.length;for(let m=0,d=g.length;m<d;m++)g[m].element.style.zIndex=_-m}}}function Rv(){const n=new Tu({antialias:!0,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=mt,n.toneMapping=Zc,n.toneMappingExposure=1.28,n.shadowMap.enabled=!1,n.domElement.style.display="block";const e=new Av;return e.setSize(window.innerWidth,window.innerHeight),e.domElement.style.position="fixed",e.domElement.style.inset="0",e.domElement.style.pointerEvents="none",e.domElement.style.zIndex="2",{renderer:n,labelRenderer:e}}function Pv(){const n=new L0;return n.background=new Pe("#050914"),n.fog=new co("#071226",12e-5),n}function Cv({camera:n,renderer:e,composer:t,labelRenderer:i}){const r=()=>{const s=window.innerWidth,o=window.innerHeight,a=Math.min(window.devicePixelRatio,2);n.aspect=s/o,n.updateProjectionMatrix(),e.setPixelRatio(a),e.setSize(s,o),t.setSize(s,o),t.setPixelRatio(a),i.setSize(s,o)};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)}const Za={sun:"程序化生成的恒星，包含分层等离子体纹理、叠加日冕、循环喷发和强辉光镜头效果，是整个场景的主光源。",mercury:"被强烈日照灼烧的灰色岩质行星，地表有坑洼和高对比阴影。",venus:"被厚重大气和缓慢云带包裹的黄白色行星。",earth:"包含海洋、陆地、冰盖、动态云层、蓝色大气边缘，以及只在夜侧出现的城市灯光。",moon:"环绕地球运行的坑洼岩质卫星，会随太阳角度呈现清晰明暗相位。",mars:"尘土感强烈的红色岩质行星，周围有两颗快速运行的小卫星。",phobos:"贴近火星运行的不规则小卫星，表面昏暗且布满撞击痕迹。",deimos:"火星外侧较小的卫星，亮度更弱，轨道更平缓。",jupiter:"巨大的气态行星，拥有风暴云带、暖棕色条纹和主要卫星系统。",io:"木星附近的火山卫星，带有硫黄色斑块和暖色地貌。",europa:"明亮的冰壳卫星，表面有蓝白色裂纹和干净反射感。",ganymede:"体量最大的卫星之一，表面有低饱和脊线和撞击坑区域。",callisto:"外侧暗色卫星，覆盖古老撞击痕迹和深色岩质表面。",saturn:"淡金色气态巨行星，被多层环带包围，并拥有一组冰质卫星。",titan:"带厚重大气的橙色雾霾卫星，表面色调柔和。",enceladus:"明亮的冰质卫星，带有蓝白裂纹，靠近土星环运行。",rhea:"浅色冰质卫星，表面轻微坑洼，明暗过渡柔和。",iapetus:"明暗两侧对比明显的土星外侧卫星。",uranus:"几乎横躺自转的冰巨星，带浅青色条带和纤细环系。",titania:"天王星的明亮冰质卫星，表面干净、色调冷淡。",oberon:"天王星外侧较暗卫星，色调更沉静，远离环平面。",neptune:"深蓝色冰巨星，拥有柔和条带、冷色辉光和遥远轨道。",triton:"海王星附近的蓝灰色冰质卫星，带有清晰冰纹。",pluto:"太阳系远端的小型矮行星，带有低饱和冰质区域和柔和夜侧。",charon:"冥王星的伴星，浅色岩冰表面，与冥王星形成紧密双天体系统。",asteroidBelt:"位于火星和木星之间的程序化岩石碎片带。",kuiperVeil:"海王星和冥王星外侧更稀疏、更寒冷的冰质碎片带。",comet:"带有明亮彗核和淡尾迹的冰质旅行者，穿过外层空间。",starfield:"由远处恒星和低对比星云雾组成的深空背景。"};function it({id:n,name:e,type:t,typeLabel:i,appearance:r,parentId:s=null,displayRadius:o,orbitRadius:a,orbitSpeed:l,rotationSpeed:c,axialTilt:u=0,orbitInclination:f=0,orbitPhase:h=0,color:p="#ffffff",focusDistanceMultiplier:g,focusTargetOffset:_,focusViewDirection:m,ring:d,hasClouds:M=!1,hasAtmosphere:x=!1,hasNightLights:E=!1}){return{id:n,name:e,label:e,type:t,typeLabel:i,selectLabel:`${i} · ${e}`,appearance:r,parentId:s,displayRadius:o,orbitRadius:a,orbitSpeed:l,rotationSpeed:c,axialTilt:u,orbitInclination:f,orbitPhase:h,color:p,focusDistanceMultiplier:g,focusTargetOffset:_,focusViewDirection:m,ring:d,hasClouds:M,hasAtmosphere:x,hasNightLights:E,description:Za[n]}}const Wn=[it({id:"sun",name:"太阳",type:"star",typeLabel:"恒星",appearance:"sun",displayRadius:18,orbitRadius:0,orbitSpeed:0,rotationSpeed:.05,axialTilt:.12,color:"#ffcc66",focusDistanceMultiplier:4.1}),it({id:"mercury",name:"水星",type:"planet",typeLabel:"行星",appearance:"mercury",displayRadius:2.1,orbitRadius:26,orbitSpeed:1.18,rotationSpeed:.18,axialTilt:.02,orbitInclination:.05,orbitPhase:6.04,color:"#a7a1a0"}),it({id:"venus",name:"金星",type:"planet",typeLabel:"行星",appearance:"venus",displayRadius:3.5,orbitRadius:36,orbitSpeed:.82,rotationSpeed:-.03,axialTilt:3.1,orbitInclination:.03,orbitPhase:5.86,color:"#e6c986",hasAtmosphere:!0}),it({id:"earth",name:"地球",type:"planet",typeLabel:"行星",appearance:"earth",displayRadius:4.15,orbitRadius:48,orbitSpeed:.64,rotationSpeed:.42,axialTilt:.409,orbitInclination:.01,orbitPhase:5.66,color:"#5ea7ff",hasClouds:!0,hasAtmosphere:!0,hasNightLights:!0}),it({id:"moon",name:"月球",type:"moon",typeLabel:"地球卫星",appearance:"moon",parentId:"earth",displayRadius:.95,orbitRadius:8.1,orbitSpeed:2.6,rotationSpeed:.08,axialTilt:.08,orbitInclination:.16,orbitPhase:.3,color:"#d8d4cd",focusDistanceMultiplier:6.6}),it({id:"mars",name:"火星",type:"planet",typeLabel:"行星",appearance:"mars",displayRadius:3.1,orbitRadius:62,orbitSpeed:.5,rotationSpeed:.33,axialTilt:.44,orbitInclination:.03,orbitPhase:5.46,color:"#d46d43"}),it({id:"phobos",name:"火卫一",type:"moon",typeLabel:"火星卫星",appearance:"phobos",parentId:"mars",displayRadius:.42,orbitRadius:5.2,orbitSpeed:3.8,rotationSpeed:.18,axialTilt:.15,orbitInclination:.18,orbitPhase:1.1,color:"#8e7a66",focusDistanceMultiplier:7.2}),it({id:"deimos",name:"火卫二",type:"moon",typeLabel:"火星卫星",appearance:"deimos",parentId:"mars",displayRadius:.36,orbitRadius:7.8,orbitSpeed:2.9,rotationSpeed:.14,axialTilt:.1,orbitInclination:.08,orbitPhase:4.2,color:"#a0917f",focusDistanceMultiplier:7.5}),it({id:"jupiter",name:"木星",type:"planet",typeLabel:"行星",appearance:"jupiter",displayRadius:10.2,orbitRadius:84,orbitSpeed:.28,rotationSpeed:.66,axialTilt:.055,orbitInclination:.012,orbitPhase:5.18,color:"#ddb38a",focusDistanceMultiplier:6.8}),it({id:"io",name:"木卫一",type:"moon",typeLabel:"木星卫星",appearance:"io",parentId:"jupiter",displayRadius:.86,orbitRadius:10.4,orbitSpeed:2.2,rotationSpeed:.18,orbitInclination:.05,orbitPhase:.2,color:"#d9bf6f"}),it({id:"europa",name:"木卫二",type:"moon",typeLabel:"木星卫星",appearance:"europa",parentId:"jupiter",displayRadius:.9,orbitRadius:13.2,orbitSpeed:1.7,rotationSpeed:.12,orbitInclination:.12,orbitPhase:1.7,color:"#c9d8ec"}),it({id:"ganymede",name:"木卫三",type:"moon",typeLabel:"木星卫星",appearance:"ganymede",parentId:"jupiter",displayRadius:1.18,orbitRadius:16.9,orbitSpeed:1.35,rotationSpeed:.1,orbitInclination:.08,orbitPhase:2.9,color:"#9da49d"}),it({id:"callisto",name:"木卫四",type:"moon",typeLabel:"木星卫星",appearance:"callisto",parentId:"jupiter",displayRadius:1.08,orbitRadius:20.4,orbitSpeed:1.02,rotationSpeed:.09,orbitInclination:.16,orbitPhase:4.4,color:"#8b877c"}),it({id:"saturn",name:"土星",type:"planet",typeLabel:"行星",appearance:"saturn",displayRadius:8.7,orbitRadius:112,orbitSpeed:.18,rotationSpeed:.58,axialTilt:.466,orbitInclination:.018,orbitPhase:4.98,color:"#dfbe84",focusDistanceMultiplier:9.8,focusTargetOffset:[0,-1.2,0],focusViewDirection:[.7,.25,.67],ring:{innerRadius:12.4,outerRadius:20.3,tilt:.74,opacity:.92,textureType:"saturn"}}),it({id:"titan",name:"土卫六",type:"moon",typeLabel:"土星卫星",appearance:"titan",parentId:"saturn",displayRadius:1.25,orbitRadius:22,orbitSpeed:.84,rotationSpeed:.08,orbitInclination:.06,orbitPhase:2.1,color:"#d4a761"}),it({id:"enceladus",name:"土卫二",type:"moon",typeLabel:"土星卫星",appearance:"enceladus",parentId:"saturn",displayRadius:.74,orbitRadius:14.6,orbitSpeed:1.95,rotationSpeed:.11,orbitInclination:.1,orbitPhase:.7,color:"#dff1ff"}),it({id:"rhea",name:"土卫五",type:"moon",typeLabel:"土星卫星",appearance:"rhea",parentId:"saturn",displayRadius:.96,orbitRadius:18.2,orbitSpeed:1.16,rotationSpeed:.09,orbitInclination:.09,orbitPhase:3.4,color:"#c8d3de"}),it({id:"iapetus",name:"土卫八",type:"moon",typeLabel:"土星卫星",appearance:"iapetus",parentId:"saturn",displayRadius:.88,orbitRadius:26.4,orbitSpeed:.62,rotationSpeed:.07,orbitInclination:.17,orbitPhase:4.7,color:"#e2d5c6"}),it({id:"uranus",name:"天王星",type:"planet",typeLabel:"行星",appearance:"uranus",displayRadius:7.9,orbitRadius:144,orbitSpeed:.12,rotationSpeed:.36,axialTilt:1.707,orbitInclination:.01,orbitPhase:4.8,color:"#c9f5ff",focusDistanceMultiplier:8.8,focusTargetOffset:[0,-.35,0],focusViewDirection:[.74,.26,.62],ring:{innerRadius:9.6,outerRadius:14.1,tilt:1.706,opacity:.56,textureType:"uranus"}}),it({id:"titania",name:"天卫三",type:"moon",typeLabel:"天王星卫星",appearance:"titania",parentId:"uranus",displayRadius:.9,orbitRadius:13.4,orbitSpeed:.96,rotationSpeed:.08,orbitInclination:.04,orbitPhase:.9,color:"#d7dde2"}),it({id:"oberon",name:"天卫四",type:"moon",typeLabel:"天王星卫星",appearance:"oberon",parentId:"uranus",displayRadius:.84,orbitRadius:16.3,orbitSpeed:.72,rotationSpeed:.07,orbitInclination:.11,orbitPhase:3.1,color:"#b7b0a9"}),it({id:"neptune",name:"海王星",type:"planet",typeLabel:"行星",appearance:"neptune",displayRadius:7.2,orbitRadius:174,orbitSpeed:.085,rotationSpeed:.44,axialTilt:.49,orbitInclination:.016,orbitPhase:4.62,color:"#6a8fff",focusDistanceMultiplier:5.95}),it({id:"triton",name:"海卫一",type:"moon",typeLabel:"海王星卫星",appearance:"triton",parentId:"neptune",displayRadius:.94,orbitRadius:12.8,orbitSpeed:.82,rotationSpeed:.09,orbitInclination:.17,orbitPhase:1.4,color:"#bfd0f6"}),it({id:"pluto",name:"冥王星",type:"planet",typeLabel:"矮行星",appearance:"pluto",displayRadius:2.45,orbitRadius:210,orbitSpeed:.052,rotationSpeed:.09,axialTilt:.26,orbitInclination:.11,orbitPhase:4.46,color:"#d0bea9"}),it({id:"charon",name:"卡戎",type:"moon",typeLabel:"冥王星卫星",appearance:"charon",parentId:"pluto",displayRadius:.74,orbitRadius:5.4,orbitSpeed:.9,rotationSpeed:.06,orbitInclination:.09,orbitPhase:3.2,color:"#d0cdc9"}),{id:"asteroidBelt",name:"小行星带",label:"小行星带",selectLabel:"带状结构 · 小行星带",type:"belt",typeLabel:"带状结构",appearance:"asteroidBelt",innerRadius:67,outerRadius:77,thickness:5.8,count:1800,orbitRadius:72,rotationSpeed:.03,focusDistanceMultiplier:4.8,color:"#efe9dc",description:Za.asteroidBelt},{id:"kuiperVeil",name:"柯伊伯带",label:"柯伊伯带",selectLabel:"带状结构 · 柯伊伯带",type:"belt",typeLabel:"带状结构",appearance:"kuiperVeil",innerRadius:230,outerRadius:282,thickness:20,count:1800,orbitRadius:256,rotationSpeed:.014,focusDistanceMultiplier:5,color:"#8eb4d4",description:Za.kuiperVeil}];new Map(Wn.map(n=>[n.id,n]));Wn.map(n=>n.id);const Lv=Wn;Wn.filter(n=>n.type==="planet");Wn.filter(n=>n.type==="moon");Wn.filter(n=>n.type==="belt");Wn.filter(n=>n.focusDistanceMultiplier!==void 0);Wn.map(n=>({id:n.id,label:n.selectLabel,type:n.type,parentId:n.parentId??null}));const Ze=(n,e,t,i=[])=>({eyebrow:n,title:e,body:t,chips:i}),Dv=Object.freeze({"free-flight":Ze("相机模式","自由飞行","不锁定任何天体，可手动拖拽、缩放和穿行，用来观察整个太阳系结构。",["手动相机","轨道控制","未聚焦"]),sun:Ze("恒星","太阳","程序化生成的恒星，包含流动等离子体纹理、多层日冕、弧形喷发和辉光，也是整个系统的主光源。",["程序化","主光源","辉光"]),mercury:Ze("行星","水星","小型灰色岩质行星，表面粗糙、有坑洼感，轨道非常靠近太阳。",["岩质","内行星"]),venus:Ze("行星","金星","明亮的金黄色云层行星，拥有浓厚大气和柔和的暖色阴影。",["浓厚大气","云层"]),earth:Ze("行星","地球","包含海洋、陆地、冰盖、动态云层、蓝色大气边缘，以及只在夜侧出现的城市灯光。",["云层","海洋","夜侧灯光"]),moon:Ze("卫星","月球","环绕地球的浅灰色岩质卫星，会随太阳方向呈现明暗变化。",["卫星","昼夜明暗"]),mars:Ze("行星","火星","红橙色岩质行星，带有暗色地貌和干燥尘土质感。",["岩质","红色"]),phobos:Ze("卫星","火卫一","贴近火星运行的小型不规则卫星，轨道速度较快。",["火星卫星","不规则"]),deimos:Ze("卫星","火卫二","距离火星更远的小卫星，以较平缓的轨道运行。",["火星卫星","外侧卫星"]),jupiter:Ze("行星","木星","巨大的气态行星，拥有条纹云带、风暴斑块和四颗主要伽利略卫星。",["气态巨行星","风暴云带","卫星"]),io:Ze("卫星","木卫一","火山活动感较强的明亮卫星，贴近木星运行。",["木星卫星","火山"]),europa:Ze("卫星","木卫二","冰壳卫星，表面浅亮、反射感较干净。",["木星卫星","冰壳"]),ganymede:Ze("卫星","木卫三","体量较大的伽利略卫星，呈现寒冷厚重的岩冰质感。",["木星卫星","大型卫星"]),callisto:Ze("卫星","木卫四","外侧卫星，表面较暗，带有古老撞击痕迹。",["木星卫星","外侧卫星"]),saturn:Ze("行星","土星","金黄色气态巨行星，环带由多层条纹和暗缝组成，带有明显空间层次。",["环带","气态巨行星","卫星"]),titan:Ze("卫星","土卫六","土星的大型卫星，带有厚重橙色雾霾感和较宽的轨道。",["土星卫星","浓厚大气"]),enceladus:Ze("卫星","土卫二","明亮的冰质卫星，靠近土星环运行。",["土星卫星","冰裂纹"]),rhea:Ze("卫星","土卫五","浅色土星卫星，表面干净，轨道较稳定。",["土星卫星","明亮卫星"]),iapetus:Ze("卫星","土卫八","外侧卫星，具有较强明暗对比，绕土星缓慢运行。",["土星卫星","外侧卫星"]),uranus:Ze("行星","天王星","几乎横躺自转的冰巨星，带有浅青色条带和纤细淡环。",["冰巨星","横躺轴向"]),titania:Ze("卫星","天卫三","天王星的主要卫星之一，在聚焦模式下位于倾斜环系附近。",["天王星卫星","主要卫星"]),oberon:Ze("卫星","天卫四","较远的天王星卫星，轨道平缓，色调更沉静。",["天王星卫星","外侧卫星"]),neptune:Ze("行星","海王星","深蓝色冰巨星，带有细微条纹和遥远寒冷的观感。",["冰巨星","深蓝"]),triton:Ze("卫星","海卫一","围绕海王星运行的明亮冰冷卫星。",["海王星卫星","冰质"]),pluto:Ze("矮行星","冥王星","太阳系边缘的小型天体，体积虽小但可聚焦观察。",["矮行星","外太阳系"]),charon:Ze("卫星","卡戎","冥王星的伴星，距离较近，呈现双天体系统的感觉。",["冥王星卫星","双天体"]),asteroidBelt:Ze("带状结构","小行星带","位于火星和木星之间的岩石碎片环，由实例化小天体组成。",["实例化","岩石碎片"]),kuiperVeil:Ze("带状结构","柯伊伯带","海王星与冥王星外侧更冷、更稀疏的外层碎冰带。",["外层带","稀疏"])});function ds(n){const e=String(n||"object").replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase());return Ze("对象",e,"当前对象暂无详细说明，但仍可作为聚焦目标进行观察。",["选择项","聚焦目标"])}function $a(n){if(n&&typeof n=="object")return n.description||n.displayName||n.name?Ze(n.type??"对象",n.displayName??n.name??"对象",n.description??ds(n.id??n.name??"object").body,n.chips??n.tags??[]):ds(n.id??n.name??"object");const t={freeFlight:"free-flight","asteroid-belt":"asteroidBelt","kuiper-veil":"kuiperVeil"}[n]||n;return Dv[t]||ds(n)}function Iv(n="free-flight"){const e=document.createElement("section");return e.className="solar-info-card",e.innerHTML=`
    <p class="solar-info-card__eyebrow" data-role="eyebrow"></p>
    <h3 class="solar-info-card__title" data-role="title"></h3>
    <p class="solar-info-card__body" data-role="body"></p>
    <div class="solar-info-card__meta" data-role="meta"></div>
  `,hs(e,n),e}function hs(n,e="free-flight"){if(!n)return null;const i=e&&typeof e=="object"&&!Array.isArray(e)&&("eyebrow"in e||"title"in e||"body"in e||"chips"in e)?{...ds(e.id??"object"),...e}:$a(e),r=n.querySelector('[data-role="eyebrow"]'),s=n.querySelector('[data-role="title"]'),o=n.querySelector('[data-role="body"]'),a=n.querySelector('[data-role="meta"]');if(r&&(r.textContent=i.eyebrow||"对象"),s&&(s.textContent=i.title||"对象"),o&&(o.textContent=i.body||""),a){a.textContent="";for(const l of i.chips||[]){const c=document.createElement("span");c.className="solar-info-card__chip",c.textContent=l,a.appendChild(c)}}return n.dataset.eyebrow=i.eyebrow||"",n.dataset.title=i.title||"",n}const zc=Object.freeze([{id:"free-flight",label:"自由飞行 / 手动相机"},{id:"sun",label:"恒星 - 太阳"},{id:"mercury",label:"行星 - 水星"},{id:"venus",label:"行星 - 金星"},{id:"earth",label:"行星 - 地球"},{id:"moon",label:"地月系 - 月球"},{id:"mars",label:"行星 - 火星"},{id:"phobos",label:"火星卫星 - 火卫一"},{id:"deimos",label:"火星卫星 - 火卫二"},{id:"jupiter",label:"行星 - 木星"},{id:"io",label:"木星卫星 - 木卫一"},{id:"europa",label:"木星卫星 - 木卫二"},{id:"ganymede",label:"木星卫星 - 木卫三"},{id:"callisto",label:"木星卫星 - 木卫四"},{id:"saturn",label:"行星 - 土星"},{id:"titan",label:"土星卫星 - 土卫六"},{id:"enceladus",label:"土星卫星 - 土卫二"},{id:"rhea",label:"土星卫星 - 土卫五"},{id:"iapetus",label:"土星卫星 - 土卫八"},{id:"uranus",label:"行星 - 天王星"},{id:"titania",label:"天王星卫星 - 天卫三"},{id:"oberon",label:"天王星卫星 - 天卫四"},{id:"neptune",label:"行星 - 海王星"},{id:"triton",label:"海王星卫星 - 海卫一"},{id:"pluto",label:"矮行星 - 冥王星"},{id:"charon",label:"冥王星卫星 - 卡戎"},{id:"asteroidBelt",label:"带状结构 - 小行星带"},{id:"kuiperVeil",label:"带状结构 - 柯伊伯带"}]),Uv=Object.freeze({selectedId:"free-flight",timeScale:1,orbits:!0,labels:!0,bloom:!0,pause:!1});function wo(n,e,t){return Math.max(e,Math.min(t,n))}function Gc(n){return{freeFlight:"free-flight","asteroid-belt":"asteroidBelt","kuiper-veil":"kuiperVeil"}[n]||n}function Hc(n){const e=Number(n);return!Number.isFinite(e)||e<=0?"0x":e<1?`${e.toFixed(2)}x`:e<10?`${e.toFixed(1)}x`:`${Math.round(e)}x`}function Nv(n){const e=wo(Number(n),0,100);if(e<=0)return 0;const t=-1+(e-1)/99*3;return Number((10**t).toFixed(4))}function Vc(n){const e=Number(n);if(!Number.isFinite(e)||e<=0)return 0;const t=Math.log10(e);return wo(Math.round((t+1)/3*99+1),0,100)}function Ov(n,e,t){const i=document.createElement("div");i.className="solar-dropdown";const r=document.createElement("button");r.type="button",r.className="solar-dropdown__button",r.setAttribute("aria-haspopup","listbox"),r.setAttribute("aria-expanded","false");const s=document.createElement("span");s.className="solar-dropdown__label";const o=document.createElement("span");o.className="solar-dropdown__chevron";const a=document.createElement("div");a.className="solar-dropdown__menu",a.setAttribute("role","listbox");const l=new Map;let c=e,u=!1;function f(_){u=!!_,i.classList.toggle("is-open",u),r.setAttribute("aria-expanded",String(u))}function h(_,{emit:m=!1}={}){if(!l.has(_))return c;c=_;const d=l.get(c);s.textContent=(d==null?void 0:d.label)||c;for(const[M,x]of l.entries())x.el.classList.toggle("is-selected",M===c),x.el.setAttribute("aria-selected",String(M===c));return m&&typeof t=="function"&&t(c),c}for(const _ of n){const m=document.createElement("button");m.type="button",m.className="solar-dropdown__option",m.dataset.value=_.id,m.textContent=_.label,m.setAttribute("role","option"),m.setAttribute("aria-selected","false"),m.addEventListener("click",()=>{h(_.id,{emit:!0}),f(!1),r.focus()}),a.appendChild(m),l.set(_.id,{..._,el:m})}r.addEventListener("click",()=>{f(!u)}),r.addEventListener("keydown",_=>{var m;if(_.key==="ArrowDown"||_.key==="Enter"||_.key===" "){_.preventDefault(),f(!0);const d=((m=l.get(c))==null?void 0:m.el)||a.querySelector(".solar-dropdown__option");d==null||d.focus()}});const p=_=>{i.contains(_.target)||f(!1)},g=_=>{_.key==="Escape"&&(f(!1),r.focus())};return document.addEventListener("click",p),document.addEventListener("keydown",g),r.append(s,o),i.append(r,a),h(e,{emit:!1}),{root:i,button:r,menu:a,get value(){return c},setValue:h,setOpen:f,destroy(){document.removeEventListener("click",p),document.removeEventListener("keydown",g),i.remove()}}}function Fv(n,e,t,i){const r=document.createElement("label");r.className="solar-toggle";const s=document.createElement("input");s.type="checkbox",s.className="solar-toggle__control",s.checked=t,s.dataset.key=e;const o=document.createElement("span");return o.className="solar-toggle__label",o.textContent=n,s.addEventListener("change",()=>{i(e,s.checked)}),r.append(s,o),{row:r,control:s}}function Bv({mount:n=null,onEvent:e=null,initialState:t={},selectedId:i,timeScale:r,orbits:s,labels:o,bloom:a,pause:l}={}){const c={...Uv,...t};i!=null&&(c.selectedId=Gc(i)),r!=null&&(c.timeScale=Number(r)),s!=null&&(c.orbits=!!s),o!=null&&(c.labels=!!o),a!=null&&(c.bloom=!!a),l!=null&&(c.pause=!!l);const u=new Set,f=document.createElement("section");f.className="solar-ui-shell";const h=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(max-width: 720px)"):null;let p=!!(h!=null&&h.matches);const g=document.createElement("button");g.type="button",g.className="solar-panel-toggle",g.setAttribute("aria-controls","solar-control-panel"),g.innerHTML=`
    <span class="solar-panel-toggle__icon" aria-hidden="true"><span></span><span></span><span></span></span>
    <span class="solar-panel-toggle__label">控制</span>
  `;const _=document.createElement("div");_.id="solar-control-panel",_.className="solar-control-panel";const m=document.createElement("div");m.className="solar-control-panel__body";const d=document.createElement("div");d.className="solar-brand",d.innerHTML=`
    <h1 class="solar-brand__title">太阳系模拟</h1>
    <p class="solar-brand__subtitle">程序化行星、环带、云层、城市灯光、小行星带、星云、彗星与聚焦飞行镜头。</p>
  `;const M=document.createElement("div");M.className="solar-group";const x=document.createElement("div");x.className="solar-group__label",x.textContent="聚焦目标";const E=Ov(zc,c.selectedId,W=>{c.selectedId=W,k&&hs(k,$a(W)),N("selection",W,"dropdown"),j()});M.append(x,E.root);const C=document.createElement("div");C.className="solar-action-row";const R=document.createElement("button");R.type="button",R.className="solar-button solar-button--primary",R.textContent="电影巡游",R.addEventListener("click",()=>{N("action","cinematic-tour","button"),j()});const A=document.createElement("button");A.type="button",A.className="solar-button solar-button--secondary",A.textContent="深空总览",A.addEventListener("click",()=>{N("action","deep-space-view","button"),j()}),C.append(R,A);const D=document.createElement("div");D.className="solar-slider";const v=document.createElement("div");v.className="solar-slider__header";const y=document.createElement("span");y.textContent="时间倍率";const B=document.createElement("span");B.className="solar-slider__value";const V=document.createElement("input");V.type="range",V.min="0",V.max="100",V.step="1",V.className="solar-slider__control",v.append(y,B),D.append(v,V),V.addEventListener("input",()=>{ie(V.value,{emitEvent:!0})}),V.addEventListener("change",()=>{ie(V.value,{emitEvent:!0})});const te=document.createElement("div");te.className="solar-toggle-grid";const I={},O=[["轨道","orbits",c.orbits],["标签","labels",c.labels],["辉光","bloom",c.bloom],["暂停","pause",c.pause]];for(const[W,Q,fe]of O){const{row:me,control:xe}=Fv(W,Q,fe,(De,F)=>{c[De]=F,N("toggle",{key:De,value:F},"toggle")});I[Q]=xe,te.append(me)}const k=Iv(c.selectedId);m.append(d,M,C,D,te,k),_.append(m),f.append(g,_);function K(){return h?h.matches:typeof window<"u"&&window.innerWidth<=720}function Y(W,{focusToggle:Q=!1}={}){return p=K()?!!W:!1,f.classList.toggle("is-collapsed",p),g.setAttribute("aria-expanded",String(!p)),g.setAttribute("aria-label",p?"展开控制菜单":"收起控制菜单"),g.querySelector(".solar-panel-toggle__label").textContent=p?"控制":"收起",_.setAttribute("aria-hidden",String(p)),p&&E.setOpen(!1),Q&&g.focus(),p}function j(){K()&&Y(!0)}g.addEventListener("click",()=>{Y(!p)});const Z=W=>{Y(W.matches)};h!=null&&h.addEventListener?h.addEventListener("change",Z):h!=null&&h.addListener&&h.addListener(Z);function ie(W,{emitEvent:Q=!1}={}){const fe=wo(Number(W),0,100);V.value=String(fe);const me=Nv(fe);return c.timeScale=me,B.textContent=Hc(me),V.style.setProperty("--slider-progress",`${fe}%`),Q&&N("time-scale",me,"slider"),me}function ae(W,{emitEvent:Q=!1}={}){const fe=Gc(W);return zc.some(me=>me.id===fe)?(c.selectedId=fe,E.setValue(fe,{emit:!1}),hs(k,$a(fe)),Q&&N("selection",fe,"programmatic"),fe):c.selectedId}function X(W,Q,{emitEvent:fe=!1}={}){if(!Object.prototype.hasOwnProperty.call(c,W))return!1;c[W]=!!Q;const me=I[W];return me&&(me.checked=c[W]),fe&&N("toggle",{key:W,value:c[W]},"programmatic"),c[W]}function N(W,Q,fe){const me={type:W,value:Q,source:fe,state:{...c},panel:se};typeof e=="function"&&e(me);for(const xe of u)xe(me)}const se={root:f,panel:_,body:m,dropdown:E.root,dropdownButton:E.button,infoCard:k,state:c,setSelectedObject(W,Q={}){return ae(W,Q)},setTimeScale(W,Q={}){if(typeof W=="number"&&W>0){const fe=Vc(W);return V.value=String(fe),c.timeScale=W,B.textContent=Hc(W),Q.emitEvent&&N("time-scale",W,"programmatic"),W}return ie(W,Q)},setToggle(W,Q,fe={}){return X(W,Q,fe)},setState(W={},Q={}){return W.selectedId&&ae(W.selectedId,Q),W.timeScale!=null&&se.setTimeScale(W.timeScale,Q),W.orbits!=null&&X("orbits",W.orbits,Q),W.labels!=null&&X("labels",W.labels,Q),W.bloom!=null&&X("bloom",W.bloom,Q),W.pause!=null&&X("pause",W.pause,Q),{...c}},setInfo(W){return hs(k,W),k},setCollapsed(W,Q={}){return Y(W,Q)},get isCollapsed(){return p},setDisabled(W=!0){E.button.disabled=W,E.setOpen(!1),R.disabled=W,A.disabled=W,V.disabled=W;for(const Q of Object.values(I))Q.disabled=W},onEvent(W){return typeof W!="function"?()=>{}:(u.add(W),()=>u.delete(W))},destroy(){h!=null&&h.removeEventListener?h.removeEventListener("change",Z):h!=null&&h.removeListener&&h.removeListener(Z),E.destroy(),f.remove(),u.clear()}};ae(c.selectedId,{emitEvent:!1}),ie(Vc(c.timeScale),{emitEvent:!1});for(const W of["orbits","labels","bloom","pause"])X(W,c[W],{emitEvent:!1});return Y(p),n&&n.appendChild(f),se}const zv="translate(-50%, -100%) translate(-9999px, -9999px)",qu=8,kc=Object.freeze({ax:.5,ay:1,dx:0,dy:0}),Be=Object.freeze({top:{ax:.5,ay:1,dx:0,dy:-10},topLeft:{ax:1,ay:1,dx:-12,dy:-10},topRight:{ax:0,ay:1,dx:12,dy:-10},right:{ax:0,ay:.5,dx:12,dy:0},left:{ax:1,ay:.5,dx:-12,dy:0},bottom:{ax:.5,ay:0,dx:0,dy:10},bottomLeft:{ax:1,ay:0,dx:-12,dy:10},bottomRight:{ax:0,ay:0,dx:12,dy:10}});function Wc(n,e=0,t=0,i=0){return n instanceof b?n.clone():Array.isArray(n)?new b(n[0]??e,n[1]??t,n[2]??i):n&&typeof n=="object"?new b(n.x??e,n.y??t,n.z??i):new b(e,t,i)}function Gv(n){return Math.max(0,Math.min(1,n))}function Hv(n,e){return n.left<e.right&&n.right>e.left&&n.top<e.bottom&&n.bottom>e.top}function Da(n,e=qu){return{left:n.left-e,top:n.top-e,right:n.right+e,bottom:n.bottom+e}}function Xc(n,e,t,i=qu){return Math.max(0,i-n.left)+Math.max(0,i-n.top)+Math.max(0,n.right-(e-i))+Math.max(0,n.bottom-(t-i))}function Vv(n,e){let t=0;for(const i of e){const r=Math.max(0,Math.min(n.right,i.right)-Math.max(n.left,i.left)),s=Math.max(0,Math.min(n.bottom,i.bottom)-Math.max(n.top,i.top));t+=r*s}return t}function kv(n,e,t,i){const r=t*.5,s=i*.5,o=Math.abs(n-r)<t*.12,a=Math.abs(e-s)<i*.16;return o&&a?[Be.top,Be.topLeft,Be.topRight,Be.left,Be.right,Be.bottomLeft,Be.bottomRight,Be.bottom]:n<r&&e<s?[Be.topLeft,Be.left,Be.top,Be.bottomLeft,Be.right,Be.topRight,Be.bottom,Be.bottomRight]:n>=r&&e<s?[Be.topRight,Be.right,Be.top,Be.bottomRight,Be.left,Be.topLeft,Be.bottom,Be.bottomLeft]:n<r&&e>=s?[Be.bottomLeft,Be.left,Be.bottom,Be.topLeft,Be.right,Be.bottomRight,Be.top,Be.topRight]:[Be.bottomRight,Be.right,Be.bottom,Be.topRight,Be.left,Be.bottomLeft,Be.top,Be.topLeft]}function Wv({parent:n=document.body,camera:e=null,onLabelClick:t=null,className:i="",visible:r=!0}={}){const s=document.createElement("div");s.className=["solar-label-layer",i].filter(Boolean).join(" "),s.hidden=!r,n.appendChild(s);const o=new Map,a=new b,l=new b,c=new b;function u(D){D.el.classList.remove("is-visible"),D.el.style.opacity="0",D.el.style.transform=zv}function f(D){const v=D.el.getBoundingClientRect();return{width:v.width||D.el.offsetWidth||Math.max(48,D.text.length*8+20),height:v.height||D.el.offsetHeight||24}}function h(D,v=kc){const y=D.x-D.width*v.ax+v.dx,B=D.y-D.height*v.ay+v.dy;return{slot:v,x:D.x+v.dx,y:D.y+v.dy,rect:{left:y,top:B,right:y+D.width,bottom:B+D.height}}}function p(D,v){const{item:y}=D,{slot:B}=v;y.el.classList.add("is-visible"),y.el.style.opacity=D.opacity.toFixed(3),y.el.style.transform=`translate(${(-B.ax*100).toFixed(0)}%, ${(-B.ay*100).toFixed(0)}%) translate(${v.x.toFixed(2)}px, ${v.y.toFixed(2)}px)`,y.el.style.zIndex=String(Math.round((1-D.z)*1e3)),y.el.dataset.state=y.id===y.activeId?"focused":y.id===y.hoveredId?"hovered":"idle"}function g(D){const v=D.id===D.activeId,y=D.id===D.hoveredId;D.el.classList.toggle("is-focused",v),D.el.classList.toggle("solar-label--dim",D.dimmed&&!v&&!y)}function _({id:D,text:v,object3D:y,offset:B=c,fadeStart:V=160,fadeEnd:te=320,minOpacity:I=.22,alwaysVisible:O=!1,dimmed:k=!1,ariaLabel:K=v}){if(!D)throw new Error("Label id is required.");if(!y)throw new Error(`Label "${D}" requires an attached object3D.`);const Y=document.createElement("button");Y.type="button",Y.className="solar-label",Y.textContent=v,Y.setAttribute("aria-label",K||v);const j={id:D,text:v,object3D:y,el:Y,offset:Wc(B),fadeStart:V,fadeEnd:te,minOpacity:I,alwaysVisible:O,dimmed:k,order:o.size,layoutPriority:0,activeId:null,hoveredId:null,visible:!0};return Y.addEventListener("click",Z=>{typeof t=="function"&&t(j,Z)}),s.appendChild(Y),o.set(D,j),g(j),j}function m(D){const v=o.get(D);return v?(v.el.remove(),o.delete(D),!0):!1}function d(D,v={}){const y=o.get(D);return y?(Object.prototype.hasOwnProperty.call(v,"text")&&(y.text=v.text,y.el.textContent=v.text),Object.prototype.hasOwnProperty.call(v,"visible")&&(y.visible=!!v.visible),Object.prototype.hasOwnProperty.call(v,"dimmed")&&(y.dimmed=!!v.dimmed),Object.prototype.hasOwnProperty.call(v,"offset")&&(y.offset=Wc(v.offset)),Object.prototype.hasOwnProperty.call(v,"fadeStart")&&(y.fadeStart=Number(v.fadeStart)),Object.prototype.hasOwnProperty.call(v,"fadeEnd")&&(y.fadeEnd=Number(v.fadeEnd)),Object.prototype.hasOwnProperty.call(v,"minOpacity")&&(y.minOpacity=Number(v.minOpacity)),Object.prototype.hasOwnProperty.call(v,"alwaysVisible")&&(y.alwaysVisible=!!v.alwaysVisible),Object.prototype.hasOwnProperty.call(v,"layoutPriority")&&(y.layoutPriority=Number(v.layoutPriority)),g(y),y):null}function M(D=null){for(const v of o.values())v.activeId=D,g(v)}function x(D=null){for(const v of o.values())v.hoveredId=D,g(v)}function E(D){s.hidden=!D}function C({camera:D=e,width:v,height:y,viewport:B=null,activeId:V=null,hoveredId:te=null}={}){var X;if(!D)return 0;const I=B||s.getBoundingClientRect(),O=v??I.width??window.innerWidth,k=y??I.height??window.innerHeight;let K=0;const Y=[],j=[];if(s.hidden){for(const N of o.values())N.activeId=V,N.hoveredId=te,g(N),u(N);return 0}(X=D.updateMatrixWorld)==null||X.call(D,!0);for(const N of o.values()){if(N.activeId=V,N.hoveredId=te,g(N),!N.visible||s.hidden){u(N);continue}if(N.object3D.getWorldPosition(a),a.add(N.offset),l.copy(a).project(D),l.z<-1||l.z>1){u(N);continue}const se=(l.x+1)*.5*O,W=(1-l.y)*.5*k;if(!(se>-48&&se<O+48&&W>-48&&W<k+48)){u(N);continue}const fe=D.position.distanceTo(a);let me=1;if(!N.alwaysVisible){const F=Math.max(1,N.fadeEnd-N.fadeStart);fe<=N.fadeStart?me=1:fe>=N.fadeEnd?me=0:me=1-(fe-N.fadeStart)/F}if(N.dimmed&&N.id!==V&&N.id!==te&&(me*=.72),me<=0){u(N);continue}me=Gv(Math.max(N.minOpacity,me));const xe=f(N),De={item:N,x:se,y:W,z:l.z,opacity:me,width:xe.width,height:xe.height,active:N.id===V,hovered:N.id===te,layoutPriority:N.layoutPriority??0,order:N.order??0};N.alwaysVisible?Y.push(De):j.push(De)}const Z=Y.length>=2,ie=[];if(Z){Y.sort((N,se)=>{const W=Number(se.active||se.hovered)-Number(N.active||N.hovered);if(W!==0)return W;const Q=(se.layoutPriority??0)-(N.layoutPriority??0);return Q!==0?Q:(N.order??0)-(se.order??0)});for(const N of Y){const se=kv(N.x,N.y,O,k);let W=null,Q=null,fe=Number.POSITIVE_INFINITY;for(const me of se){const xe=h(N,me),De=Da(xe.rect),F=Xc(xe.rect,O,k),ut=Vv(De,ie),Ee=F*1e3+ut;if(Ee<fe&&(fe=Ee,Q=xe),F===0&&ut===0){W=xe;break}}if(!W&&(N.active||N.hovered)&&(W=Q),!W){u(N.item);continue}p(N,W),ie.push(Da(W.rect)),K+=1}}const ae=Z?j:[...Y,...j];for(const N of ae){const se=h(N,kc),W=Da(se.rect),Q=Xc(se.rect,O,k),fe=Z&&ie.some(me=>Hv(W,me));if(Q>0||fe){u(N.item);continue}p(N,se),K+=1}return K}function R(){for(const D of o.values())D.el.remove();o.clear()}function A(){R(),s.remove()}return{root:s,addLabel:_,removeLabel:m,setLabelState:d,setActiveLabel:M,setHoveredLabel:x,setVisible:E,update:C,clear:R,destroy:A,items:o}}const Xv="点击行星或卫星进行聚焦。拖拽旋转视角，滚轮缩放。可以重点观察地球夜侧、土星环、木星风暴和小行星带。";function qv({parent:n=document.body,text:e=Xv,className:t="",hidden:i=!1}={}){const r=document.createElement("div");return r.className=["solar-tooltip",t].filter(Boolean).join(" "),r.textContent=e,i&&r.classList.add("is-hidden"),n.appendChild(r),{el:r,setText(s){return r.textContent=s,r},show(){return r.classList.remove("is-hidden"),r},hide(){return r.classList.add("is-hidden"),r},setVisible(s){return r.classList.toggle("is-hidden",!s),r},destroy(){r.remove()}}}function Yv(){const n=window.innerWidth,e=window.innerHeight,t=n<768,i=n*e>2e6;return{mobile:t,asteroidCount:t?2200:4200,kuiperCount:t?1100:1800,starCount:t?3e3:6200,bloomStrength:i?1.12:1.38,textureResolution:t?512:1024}}const jv=document.querySelector("#app"),Ao=document.querySelector("#ui"),ni=Yv(),oi=Pv(),Ot=pv(),{renderer:fn,labelRenderer:Os}=Rv(),{composer:Yu,bloomPass:Kv}=Ev(fn,oi,Ot,{strength:ni.bloomStrength,threshold:.38,radius:.48}),Wt=wv(Ot,fn.domElement);Wt.enablePan=!0;fn.domElement.style.touchAction="none";jv.appendChild(fn.domElement);Ao.appendChild(Os.domElement);qv({parent:Ao});const Vn=Bv({mount:Ao,initialState:{selectedId:"free-flight",timeScale:1,orbits:!0,labels:!0,bloom:!0,pause:!1}}),Xt=Wv({parent:Os.domElement,visible:!0,onLabelClick:n=>{zs(n.id,{})}}),Zv=new k0("#2c477a",.2),$v=new z0("#9ab8f2","#071226",.62),Ro=new et,ws=new Cu("#fff0c8",.56);ws.target=Ro;const Po=new et,Sn=new Cu("#dce7ff",0);Sn.target=Po;oi.add(Zv,$v,ws,Ro,Sn,Po);const lt={view:new b,right:new b,up:new b,sun:new b,target:new b},zt=new Map,ji=[],ju=[],Fs=[],Ja=[],Ku=new Map;let li=null;function Jv(n){return n.type==="star"?A_(n):n.type==="planet"?v_(n,{textureResolution:ni.textureResolution}):n.type==="moon"?x_(n,{textureResolution:Math.max(384,Math.floor(ni.textureResolution*.72))}):n.id==="asteroidBelt"?q0(n,{count:ni.asteroidCount}):s_(n,{count:ni.kuiperCount})}function Qv(n,e){var i,r;if(e.childrenBodies=e.childrenBodies??[],n.parentId){const s=zt.get(n.parentId);s.translationGroup.add(e.root),s.childrenBodies.push(e)}else oi.add(e.root),ji.push(e);if(n.orbitRadius>0){const s=M_(n.orbitRadius,n.orbitInclination??0,n.type==="moon"?"#4e5a74":"#566685");n.parentId?zt.get(n.parentId).translationGroup.add(s):oi.add(s),e.orbitLine=s,ju.push(s)}(i=e.mesh)!=null&&i.userData&&(e.mesh.userData.bodyId=n.id),(r=e.ringMesh)!=null&&r.userData&&(e.ringMesh.userData.bodyId=n.id),e.mesh&&Ja.push(e.mesh),e.ringMesh&&Ja.push(e.ringMesh);const t=n.type==="star"?{fadeStart:420,fadeEnd:920,alwaysVisible:!0}:n.type==="belt"?{fadeStart:520,fadeEnd:960}:n.type==="moon"?{fadeStart:140,fadeEnd:310,minOpacity:.18}:{fadeStart:200,fadeEnd:420};Xt.addLabel({id:n.id,text:n.name,object3D:e.labelAnchor,...t}),Ku.set(n.id,t),typeof e.update=="function"&&Fs.push(e.update),n.id==="sun"&&(li=e)}for(const n of Lv){const e=Jv(n);zt.set(n.id,e),Qv(n,e)}const Zu=S_({count:ni.starCount});oi.add(Zu.root);Fs.push(Zu.update);const $u=Y0();oi.add($u.root);Fs.push($u.update);function ex(){var e,t,i;const n=new Map;for(const[r,s]of zt.entries()){const o=`${s.typeLabel} - ${s.name}`,a=s.selectLabel,l=[r,s.name,s.label,(e=s.config)==null?void 0:e.name,(t=s.config)==null?void 0:t.label,(i=s.config)==null?void 0:i.selectLabel,a,o].filter(Boolean);for(const c of l)n.set(c,s)}return n.set("free-flight",null),n.set("Free flight / manual camera",null),n}const Bs=ex(),Qa={bodies:ji,center:li,sunPosition:li,sunId:"sun",systemRadius:So(ji,320),deepSpaceView:{distanceMultiplier:.96,heightRatio:.14,forwardBias:.16,targetShift:-.42,fov:25}},zi=hv({bodies:ji,bodyMap:Bs,timeScale:1,paused:!1}),Ne=iv({camera:Ot,controls:Wt,bodyMap:Bs,systemBounds:Qa,lockControlsWhileFollowing:!1,focusTransitionDuration:1.15}),sn=j_();function Mr(){return{camera:Ot,controls:Wt,bodies:ji,rootBodies:ji,bodyMap:Bs,systemBounds:Qa,sunPosition:li,sunId:"sun",center:li,target:Wt.target,up:Ot.up,deepSpaceView:Qa.deepSpaceView}}function fs(n){for(const e of ju)e.visible=n}const qc=new Set(["sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","pluto","asteroidBelt","kuiperVeil"]),tx={sun:100,earth:96,saturn:94,jupiter:92,uranus:90,neptune:88,venus:86,mars:84,mercury:82,pluto:80,asteroidBelt:24,kuiperVeil:18},nx={sun:new b(-28,40,0),mercury:new b(-22,-22,0),venus:new b(10,20,0),earth:new b(24,-28,0),mars:new b(18,20,0),jupiter:new b(-18,28,0),saturn:new b(18,34,0),uranus:new b(-18,18,0),neptune:new b(16,-4,0),pluto:new b(34,16,0),asteroidBelt:new b(-24,-24,0),kuiperVeil:new b(44,-18,0)};function Sr(n){return n==="focus"||n==="inspect"}function Ju(n){var e;return((e=n==null?void 0:n.config)==null?void 0:e.type)==="belt"||(n==null?void 0:n.type)==="belt"}function Co(n){var r;const e=new Set,t=zt.get(n);if(!t)return e;e.add(n);const i=(r=t.config)==null?void 0:r.parentId;if(i){e.add(i);const s=zt.get(i);for(const o of(s==null?void 0:s.childrenBodies)??[])e.add(o.id)}else for(const s of t.childrenBodies??[])e.add(s.id);return e}function Qu(n){const e=Sr(n)&&Ne.targetId?Co(Ne.targetId):null;for(const[t,i]of Ku.entries()){if(n==="deep-space"||n==="tour"){const r=t!=="asteroidBelt"&&t!=="kuiperVeil"&&qc.has(t);qc.has(t)?Xt.setLabelState(t,{...i,alwaysVisible:!0,fadeStart:9999,fadeEnd:1e4,layoutPriority:tx[t]??0,minOpacity:n==="tour"?.72:.88,offset:nx[t]??[0,0,0],visible:n==="tour"?!0:r}):Xt.setLabelState(t,{...i,alwaysVisible:!1,layoutPriority:0,minOpacity:i.minOpacity??.22,offset:[0,0,0],visible:n!=="deep-space"});continue}if(Sr(n)&&e){Xt.setLabelState(t,{...i,alwaysVisible:!1,layoutPriority:0,minOpacity:i.minOpacity??.22,offset:[0,0,0],visible:e.has(t)});continue}Xt.setLabelState(t,{...i,alwaysVisible:!1,layoutPriority:0,minOpacity:i.minOpacity??.22,offset:[0,0,0],visible:!0})}}function ed(){var t,i,r;if(!Vn.state.orbits){fs(!1);return}if(!Sr(Ne.mode)||!Ne.targetId){fs(!0);return}const n=Co(Ne.targetId),e=zt.get(Ne.targetId);if((t=e==null?void 0:e.config)!=null&&t.ring){fs(!1);return}(((i=e==null?void 0:e.config)==null?void 0:i.type)==="planet"||((r=e==null?void 0:e.config)==null?void 0:r.type)==="belt")&&n.delete(Ne.targetId);for(const s of zt.values())s.orbitLine&&(s.orbitLine.visible=n.has(s.id))}function ix(){if(!Sr(Ne.mode)||!Ne.targetId){for(const e of zt.values())e.root.visible=!0;return}const n=Co(Ne.targetId);for(const e of zt.values())e.root.visible=n.has(e.id)}function rx(n){var s,o,a,l,c;const e=Sr(Ne.mode)&&Ne.targetId?zt.get(Ne.targetId):null;ai(lt.sun,li,{fallbackPosition:[0,0,0]}),e&&e.id!=="sun"?ai(lt.target,e,{fallbackPosition:Wt.target}):Ne.mode==="deep-space"?lt.target.set(90,-8,18):(lt.target.copy(Wt.target),lt.target.distanceToSquared(lt.sun)<16&&lt.target.set(80,0,24)),ws.position.copy(lt.sun),Ro.position.copy(lt.target),ws.intensity=e?e.id==="sun"?.38:(s=e.config)!=null&&s.ring?1.8:((o=e.config)==null?void 0:o.type)==="moon"?1.05:1.38:.68;const t=e?(a=e.config)!=null&&a.ring?.38:((l=e.config)==null?void 0:l.type)==="moon"?.18:.24:0,i=st.clamp(n*4.5,0,1);if(Sn.intensity=st.lerp(Sn.intensity,t,i),Sn.visible=Sn.intensity>.001,!e||!Sn.visible)return;Sn.color.set(e.id==="saturn"?"#f1dcc2":"#dce7ff"),Po.position.copy(Wt.target),lt.view.subVectors(Ot.position,Wt.target),lt.view.lengthSq()<1e-4&&lt.view.set(.66,.22,.72),lt.view.normalize(),lt.up.copy(Ot.up).normalize(),lt.right.crossVectors(lt.view,lt.up),lt.right.lengthSq()<1e-4?lt.right.set(1,0,0):lt.right.normalize();const r=Math.max(e.displayRadius??((c=e.config)==null?void 0:c.displayRadius)??6,3);Sn.position.copy(Ot.position).addScaledVector(lt.right,r*1.8).addScaledVector(lt.up,r*1.2).addScaledVector(lt.view,r*.65)}function td(n){Kv.strength=n?ni.bloomStrength:0}function sx(n){return Bs.get(n)??zt.get(n)??null}function zs(n,e={}){if(n==="free-flight"){qi(sn),To(Ne),Xt.setActiveLabel(null),e.syncPanel!==!1&&Vn.setSelectedObject("free-flight");return}const t=sx(n);if(!t)return;qi(sn);const i={duration:e.duration??1.2,instant:e.instant??!1,mode:e.mode??"focus"};Vu(Ne,t,i,Mr()),Xt.setActiveLabel(t.id),e.syncPanel!==!1&&Vn.setSelectedObject(t.id)}function ax(){var e;const n=Ne.targetId?zt.get(Ne.targetId):null;return Ne.mode!=="focus"||!Ju(n)||(e=Ne.followTransition)!=null&&e.active?!1:(Ne.mode="inspect",Ne.target=null,Wt.enabled=!0,!0)}function nd(n={}){qi(sn),Vu(Ne,li,{duration:n.duration??1.35,instant:n.instant??!1,deepSpace:!0,mode:"deep-space"},Mr()),Xt.setActiveLabel(null)}function ox(){qi(sn),Ne.target=null,Ne.targetId=null,Ne.mode="tour",K_(sn,{returnMode:"free"}),Xt.setActiveLabel(null)}Vn.onEvent(n=>{if(n.type==="selection"&&zs(n.value,{syncPanel:!1}),n.type==="action"&&(n.value==="cinematic-tour"&&ox(),n.value==="deep-space-view"&&nd()),n.type==="time-scale"&&(zi.timeScale=n.value),n.type==="toggle"){const{key:e,value:t}=n.value;e==="orbits"&&ed(),e==="labels"&&Xt.setVisible(t),e==="bloom"&&td(t),e==="pause"&&(zi.paused=t)}});fs(Vn.state.orbits);td(Vn.state.bloom);const Ia=new ge,Yc=new W0;let id=null;function rd(n){id=n,Xt.setHoveredLabel(n)}function sd(n){var r;const e=fn.domElement.getBoundingClientRect();Ia.x=(n.clientX-e.left)/e.width*2-1,Ia.y=-((n.clientY-e.top)/e.height)*2+1,Yc.setFromCamera(Ia,Ot);const i=Yc.intersectObjects(Ja,!1).find(s=>{var o;return(o=s.object.userData)==null?void 0:o.bodyId});return((r=i==null?void 0:i.object.userData)==null?void 0:r.bodyId)??null}fn.domElement.addEventListener("pointermove",n=>{rd(sd(n))});fn.domElement.addEventListener("pointerleave",()=>{rd(null)});fn.domElement.addEventListener("click",n=>{const e=sd(n);e&&zs(e)});fn.domElement.addEventListener("contextmenu",n=>n.preventDefault());Wt.addEventListener("start",()=>{if(sn.active&&(qi(sn),Ne.mode="free"),Ne.targetId){const n=zt.get(Ne.targetId);Ju(n)&&(Ne.followTransition&&(Ne.followTransition.active=!1),Ne.mode="inspect",Ne.target=null,Wt.enabled=!0)}});const Gs=J_(Mr());Ot.position.copy(Gs.position);Ot.up.copy(Gs.up);Wt.target.copy(Gs.target);Wt.update();Ot.lookAt(Gs.target);To(Ne);Vn.setSelectedObject("free-flight");Qu("free");function lx(){const n=new URLSearchParams(window.location.search),e=n.get("focus");if((n.get("mode")??n.get("view"))==="deep-space"){nd({instant:!0});return}e&&zs(e,{instant:!0})}lx();Cv({camera:Ot,renderer:fn,composer:Yu,labelRenderer:Os});const cx=new Lu;function ad(){const n=cx.getDelta(),e=fv(zi,n,{paused:zi.paused,timeScale:zi.timeScale}),t=zi.simulationTime??0;for(const i of Fs)i(e,t);if(sn.active){const i=$_(sn,n,Mr());i&&(Ne.mode="tour",Ne.target=null,Ne.targetId=null,rv(Ne,i,{instant:!0,mode:"tour"}))}else sv(Ne,n,Mr()),ax(),sn.completed&&(sn.completed=!1,To(Ne),Vn.setSelectedObject("free-flight"),Xt.setActiveLabel(null));Qu(Ne.mode),ed(),ix(),rx(n),Yu.render(),Os.render(oi,Ot),Xt.update({camera:Ot,activeId:Ne.targetId,hoveredId:id}),requestAnimationFrame(ad)}ad();
