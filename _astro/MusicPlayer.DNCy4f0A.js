import{o as za,a as Ia,i as $a}from"./lifecycle.B1Ut42jt.js";import{ag as Ra,a7 as Na,aI as Wa,aJ as Oa,aK as ze,u as Ie,aL as Ya,ab as $e,aM as qa,U as Re,aN as bt,a4 as Ua,aO as Ka,c as rt,f as V,a as W,p as Ha,b as Xa,s as c,m as T,ak as q,h as t,d as ut,g as d,e as n,r as i,n as Ga,t as At}from"./template.DHN_XKOa.js";import{a as Ja,s as X}from"./render.CDT1IvHl.js";import{e as Va,i as Qa}from"./each.BxF7e-Ws.js";import{i as z}from"./if.qyqwM9yo.js";import{a as O,s as Q,c as Ae}from"./props.U9FQYtTo.js";import{e as x}from"./utils.DAml_p4U.js";import{I as f}from"./Icon.SA6aOPw-.js";import{m as Bt}from"./config.BguNRlfw.js";import{I as Za}from"./zh_TW.12WzXWON.js";import{i as tr}from"./translation.2ovPxq0f.js";const er=()=>performance.now(),G={tick:l=>requestAnimationFrame(l),now:()=>er(),tasks:new Set};function Ne(){const l=G.now();G.tasks.forEach(r=>{r.c(l)||(G.tasks.delete(r),r.f())}),G.tasks.size!==0&&G.tick(Ne)}function ar(l){let r;return G.tasks.size===0&&G.tick(Ne),{promise:new Promise(y=>{G.tasks.add(r={c:l,f:y})}),abort(){G.tasks.delete(r)}}}function Dt(l,r){$e(()=>{l.dispatchEvent(new CustomEvent(r))})}function rr(l){if(l==="float")return"cssFloat";if(l==="offset")return"cssOffset";if(l.startsWith("--"))return l;const r=l.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(y=>y[0].toUpperCase()+y.slice(1)).join("")}function Be(l){const r={},y=l.split(";");for(const L of y){const[k,p]=L.split(":");if(!k||p===void 0)break;const m=rr(k.trim());r[m]=p.trim()}return r}const ir=l=>l;function nr(l,r,y,L){var k=(l&Ya)!==0,p="both",m,E=r.inert,B=r.style.overflow,h,g;function S(){return $e(()=>m??=y()(r,L?.()??{},{direction:p}))}var D={is_global:k,in(){r.inert=E,Dt(r,"introstart"),h=Qt(r,S(),g,1,()=>{Dt(r,"introend"),h?.abort(),h=m=void 0,r.style.overflow=B})},out(M){r.inert=!0,Dt(r,"outrostart"),g=Qt(r,S(),h,0,()=>{Dt(r,"outroend"),M?.()})},stop:()=>{h?.abort(),g?.abort()}},R=Ra;if((R.transitions??=[]).push(D),Ja){var u=k;if(!u){for(var v=R.parent;v&&(v.f&Na)!==0;)for(;(v=v.parent)&&(v.f&Wa)===0;);u=!v||(v.f&Oa)!==0}u&&ze(()=>{Ie(()=>D.in())})}}function Qt(l,r,y,L,k){var p=L===1;if(qa(r)){var m,E=!1;return Re(()=>{if(!E){var M=r({direction:p?"in":"out"});m=Qt(l,M,y,L,k)}}),{abort:()=>{E=!0,m?.abort()},deactivate:()=>m.deactivate(),reset:()=>m.reset(),t:()=>m.t()}}if(y?.deactivate(),!r?.duration)return k(),{abort:bt,deactivate:bt,reset:bt,t:()=>L};const{delay:B=0,css:h,tick:g,easing:S=ir}=r;var D=[];if(p&&y===void 0&&(g&&g(0,1),h)){var R=Be(h(0,1));D.push(R,R)}var u=()=>1-L,v=l.animate(D,{duration:B,fill:"forwards"});return v.onfinish=()=>{v.cancel();var M=y?.t()??1-L;y?.abort();var C=L-M,K=r.duration*Math.abs(C),I=[];if(K>0){var _=!1;if(h)for(var F=Math.ceil(K/16.666666666666668),a=0;a<=F;a+=1){var J=M+C*S(a/F),Z=Be(h(J,1-J));I.push(Z),_||=Z.overflow==="hidden"}_&&(l.style.overflow="hidden"),u=()=>{var it=v.currentTime;return M+C*S(it/K)},g&&ar(()=>{if(v.playState!=="running")return!1;var it=u();return g(it,1-it),!0})}v=l.animate(I,{duration:K,fill:"forwards"}),v.onfinish=()=>{u=()=>L,g?.(L,1-L),k()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=bt)},deactivate:()=>{k=bt},reset:()=>{L===0&&g?.(1,0)},t:()=>u()}}function De(l,r){return l===r||l?.[Ka]===r}function je(l={},r,y,L){return ze(()=>{var k,p;return Ua(()=>{k=p,p=[],Ie(()=>{l!==y(...p)&&(r(l,...p),k&&De(y(...k),l)&&r(null,...k))})}),()=>{Re(()=>{p&&De(y(...p),l)&&r(null,...p)})}}),l}function Pe(l){return function(...r){var y=r[0];return y.stopPropagation(),l?.apply(this,r)}}function sr(l){const r=l-1;return r*r*r+1}function lr(l,{delay:r=0,duration:y=400,easing:L=sr,axis:k="y"}={}){const p=getComputedStyle(l),m=+p.opacity,E=k==="y"?"height":"width",B=parseFloat(p[E]),h=k==="y"?["top","bottom"]:["left","right"],g=h.map(C=>`${C[0].toUpperCase()}${C.slice(1)}`),S=parseFloat(p[`padding${g[0]}`]),D=parseFloat(p[`padding${g[1]}`]),R=parseFloat(p[`margin${g[0]}`]),u=parseFloat(p[`margin${g[1]}`]),v=parseFloat(p[`border${g[0]}Width`]),M=parseFloat(p[`border${g[1]}Width`]);return{delay:r,duration:y,easing:L,css:C=>`overflow: hidden;opacity: ${Math.min(C*20,1)*m};${E}: ${C*B}px;padding-${h[0]}: ${C*S}px;padding-${h[1]}: ${C*D}px;margin-${h[0]}: ${C*R}px;margin-${h[1]}: ${C*u}px;border-${h[0]}-width: ${C*v}px;border-${h[1]}-width: ${C*M}px;min-${E}: 0`}}var or=ut('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),cr=ut('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),dr=ut('<span class="text-sm text-[var(--content-meta)]"></span>'),ur=ut('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),vr=ut('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),fr=ut(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0" aria-label="展开音乐播放器"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Fr(l,r){Xa(r,!1);let y=Bt.meting_api,L=Bt.id,k=Bt.server,p=Bt.type,m=T(!1),E=T(!1),B=T(!1),h=T(!1),g=T(0),S=T(0),D=T(.7),R=T(!1),u=T(!1),v=T(!1),M=T(0),C=T(""),K=T(!1),I=T({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),_=T([]),F=T(0),a=T(),J=T(),Z=T();async function it(){c(u,!0);const s=y.replace(":server",k).replace(":type",p).replace(":id",L).replace(":auth","").replace(":r",Date.now().toString());try{const j=await fetch(s);if(!j.ok)throw new Error("meting api error");const H=await j.json();c(_,H.map(N=>{let vt=N.name??N.title??"未知歌曲",_t=N.artist??N.author??"未知艺术家",$=N.duration??0;return $>1e4&&($=Math.floor($/1e3)),(!Number.isFinite($)||$<=0)&&($=0),{id:N.id,title:vt,artist:_t,cover:N.pic??"",url:N.url??"",duration:$}})),t(_).length>0&&te(t(_)[0]),c(u,!1)}catch{zt("Meting 歌单获取失败"),c(u,!1)}}function jt(){!t(a)||!t(I).url||(t(m)?t(a).pause():t(a).play())}function ht(){c(E,!t(E)),t(E)&&(c(h,!1),c(B,!1))}function gt(){c(B,!t(B)),t(B)&&(c(E,!1),c(h,!1))}function Zt(){c(h,!t(h))}function We(){c(v,!t(v))}function Oe(){c(M,(t(M)+1)%3)}function Ye(){if(t(_).length<=1)return;const s=t(F)>0?t(F)-1:t(_).length-1;xt(s)}function Pt(){if(t(_).length<=1)return;let s;if(t(v))do s=Math.floor(Math.random()*t(_).length);while(s===t(F)&&t(_).length>1);else s=t(F)<t(_).length-1?t(F)+1:0;xt(s)}function xt(s){if(s<0||s>=t(_).length)return;const j=t(m);c(F,s),t(a)&&t(a).pause(),te(t(_)[t(F)]),(j||!t(m))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function yt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function te(s){!s||!t(a)||(c(I,{...s}),s.url?(c(u,!0),t(a).pause(),q(a,t(a).currentTime=0),c(g,0),c(S,s.duration??0),t(a).removeEventListener("loadeddata",ee),t(a).removeEventListener("error",ae),t(a).removeEventListener("loadstart",re),t(a).addEventListener("loadeddata",ee,{once:!0}),t(a).addEventListener("error",ae,{once:!0}),t(a).addEventListener("loadstart",re,{once:!0}),q(a,t(a).src=yt(s.url)),t(a).load()):c(u,!1))}function ee(){c(u,!1),t(a)?.duration&&t(a).duration>1&&(c(S,Math.floor(t(a).duration)),t(_)[t(F)]&&q(_,t(_)[t(F)].duration=t(S)),q(I,t(I).duration=t(S)))}function ae(s){c(u,!1),zt(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(_).length>1?setTimeout(()=>Pt(),1e3):zt("播放列表中没有可用的歌曲")}function re(){}function zt(s){c(C,s),c(K,!0),setTimeout(()=>{c(K,!1)},3e3)}function qe(){c(K,!1)}function Ue(s){if(!t(a)||!t(J))return;const j=t(J).getBoundingClientRect(),N=(s.clientX-j.left)/j.width*t(S);q(a,t(a).currentTime=N),c(g,N)}function Ke(s){if(!t(a)||!t(Z))return;const j=t(Z).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-j.left)/j.width));c(D,H),q(a,t(a).volume=t(D)),c(R,t(D)===0)}function ie(){t(a)&&(c(R,!t(R)),q(a,t(a).muted=t(R)))}function ne(s){if(!Number.isFinite(s)||s<0)return"0:00";const j=Math.floor(s/60),H=Math.floor(s%60);return`${j}:${H.toString().padStart(2,"0")}`}function He(){t(a)&&(t(a).addEventListener("play",()=>{c(m,!0)}),t(a).addEventListener("pause",()=>{c(m,!1)}),t(a).addEventListener("timeupdate",()=>{c(g,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(M)===1?(q(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(M)===2||t(F)<t(_).length-1||t(v)?Pt():c(m,!1)}),t(a).addEventListener("error",s=>{c(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}za(()=>{c(a,new Audio),q(a,t(a).volume=t(D)),He(),it()}),Ia(()=>{t(a)&&(t(a).pause(),q(a,t(a).src=""))}),$a();var se=rt(),Xe=V(se);{var Ge=s=>{var j=fr(),H=V(j);{var N=e=>{var b=or(),w=n(b),A=n(w);f(A,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var P=d(A,2),o=n(P,!0);i(P);var et=d(P,2),Mt=n(et);f(Mt,{icon:"material-symbols:close",class:"text-lg"}),i(et),i(w),i(b),At(()=>X(o,t(C))),x("click",et,qe),W(e,b)};z(H,e=>{t(K)&&e(N)})}var vt=d(H,2);let _t;var $=n(vt);let le;var Je=n($);{var Ve=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var b=rt(),w=V(b);{var A=o=>{var et=cr();W(o,et)},P=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(w,o=>{t(m)?o(A):o(P,!1)},!0)}W(e,b)};z(Je,e=>{t(u)?e(Ve):e(Qe,!1)})}i($);var wt=d($,2);let oe;var ce=n(wt),nt=n(ce),It=n(nt);let de;var ue=d(It,2),Ze=n(ue);{var ta=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var b=rt(),w=V(b);{var A=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(w,o=>{t(m)?o(A):o(P,!1)},!0)}W(e,b)};z(Ze,e=>{t(u)?e(ta):e(ea,!1)})}i(ue),i(nt);var ft=d(nt,2),$t=n(ft),aa=n($t,!0);i($t);var ve=d($t,2),ra=n(ve,!0);i(ve),i(ft);var fe=d(ft,2),kt=n(fe),ia=n(kt);f(ia,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(kt);var Rt=d(kt,2),na=n(Rt);f(na,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Rt),i(fe),i(ce),i(wt);var Et=d(wt,2);let pe;var Nt=n(Et),Wt=n(Nt),me=n(Wt);let be;i(Wt);var Ot=d(Wt,2),Yt=n(Ot),sa=n(Yt,!0);i(Yt);var qt=d(Yt,2),la=n(qt,!0);i(qt);var he=d(qt,2),oa=n(he);i(he),i(Ot);var ge=d(Ot,2),Ft=n(ge),ca=n(Ft);f(ca,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ft);var Ut=d(Ft,2),da=n(Ut);f(da,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Ut),i(ge),i(Nt);var Kt=d(Nt,2),st=n(Kt),ua=n(st);i(st),je(st,e=>c(J,e),()=>t(J)),i(Kt);var Ht=d(Kt,2),lt=n(Ht);let xe;var va=n(lt);f(va,{icon:"material-symbols:shuffle",class:"text-lg"}),i(lt);var pt=d(lt,2),fa=n(pt);f(fa,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ot=d(pt,2);let ye;var pa=n(ot);{var ma=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ba=e=>{var b=rt(),w=V(b);{var A=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(w,o=>{t(m)?o(A):o(P,!1)},!0)}W(e,b)};z(pa,e=>{t(u)?e(ma):e(ba,!1)})}i(ot);var mt=d(ot,2),ha=n(mt);f(ha,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Lt=d(mt,2);let _e;var ga=n(Lt);{var xa=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var b=rt(),w=V(b);{var A=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(w,o=>{t(M)===2?o(A):o(P,!1)},!0)}W(e,b)};z(ga,e=>{t(M)===1?e(xa):e(ya,!1)})}i(Lt),i(Ht);var we=d(Ht,2),St=n(we),_a=n(St);{var wa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ka=e=>{var b=rt(),w=V(b);{var A=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(w,o=>{t(D)<.5?o(A):o(P,!1)},!0)}W(e,b)};z(_a,e=>{t(R)||t(D)===0?e(wa):e(ka,!1)})}i(St);var tt=d(St,2),Ea=n(tt);i(tt),je(tt,e=>c(Z,e),()=>t(Z));var Tt=d(tt,2);let ke;var Fa=n(Tt);f(Fa,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Tt),i(we),i(Et);var La=d(Et,2);{var Sa=e=>{var b=vr(),w=n(b),A=n(w),P=n(A,!0);i(A);var o=d(A,2),et=n(o);f(et,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(w);var Mt=d(w,2);Va(Mt,5,()=>t(_),Qa,(Xt,ct,U)=>{var at=ur();let Ee;var Gt=n(at),Ta=n(Gt);{var Ma=Y=>{f(Y,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ca=Y=>{var Me=rt(),Da=V(Me);{var ja=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Pa=dt=>{var Ce=dr();Ce.textContent=U+1,W(dt,Ce)};z(Da,dt=>{U===t(F)?dt(ja):dt(Pa,!1)},!0)}W(Y,Me)};z(Ta,Y=>{U===t(F)&&t(m)?Y(Ma):Y(Ca,!1)})}i(Gt);var Jt=d(Gt,2),Fe=n(Jt);i(Jt);var Le=d(Jt,2),Ct=n(Le);let Se;var Aa=n(Ct,!0);i(Ct);var Vt=d(Ct,2);let Te;var Ba=n(Vt,!0);i(Vt),i(Le),i(at),At(Y=>{Ee=O(at,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Ee,{"bg-[var(--btn-plain-bg)]":U===t(F),"text-[var(--primary)]":U===t(F)}),Q(at,"aria-label",`播放 ${t(ct).title??""} - ${t(ct).artist??""}`),Q(Fe,"src",Y),Q(Fe,"alt",t(ct).title),Se=O(Ct,1,"font-medium truncate",null,Se,{"text-[var(--primary)]":U===t(F),"text-90":U!==t(F)}),X(Aa,t(ct).title),Te=O(Vt,1,"text-sm text-[var(--content-meta)] truncate",null,Te,{"text-[var(--primary)]":U===t(F)}),X(Ba,t(ct).artist)},[()=>yt(t(ct).cover)]),x("click",at,()=>xt(U)),x("keydown",at,Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),xt(U))}),W(Xt,at)}),i(Mt),i(b),At(Xt=>X(P,Xt),[()=>tr(Za.playlist)]),x("click",o,Zt),nr(3,b,()=>lr,()=>({duration:300,axis:"y"})),W(e,b)};z(La,e=>{t(h)&&e(Sa)})}i(vt),Ga(2),At((e,b,w,A)=>{_t=O(vt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,_t,{expanded:t(E),"hidden-mode":t(B)}),le=O($,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,le,{"opacity-0":!t(B),"scale-0":!t(B),"pointer-events-none":!t(B)}),oe=O(wt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,oe,{"opacity-0":t(E)||t(B),"scale-95":t(E)||t(B),"pointer-events-none":t(E)||t(B)}),Q(nt,"aria-label",t(m)?"暂停":"播放"),Q(It,"src",e),de=O(It,1,"w-full h-full object-cover transition-transform duration-300",null,de,{spinning:t(m)&&!t(u),"animate-pulse":t(u)}),X(aa,t(I).title),X(ra,t(I).artist),pe=O(Et,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,pe,{"opacity-0":!t(E),"scale-95":!t(E),"pointer-events-none":!t(E)}),Q(me,"src",b),be=O(me,1,"w-full h-full object-cover transition-transform duration-300",null,be,{spinning:t(m)&&!t(u),"animate-pulse":t(u)}),X(sa,t(I).title),X(la,t(I).artist),X(oa,`${w??""} / ${A??""}`),Q(st,"aria-valuenow",t(S)>0?t(g)/t(S)*100:0),Ae(ua,`width: ${t(S)>0?t(g)/t(S)*100:0}%`),xe=O(lt,1,"w-10 h-10 rounded-lg",null,xe,{"btn-regular":t(v),"btn-plain":!t(v)}),lt.disabled=t(_).length<=1,pt.disabled=t(_).length<=1,ye=O(ot,1,"btn-regular w-12 h-12 rounded-full",null,ye,{"opacity-50":t(u)}),ot.disabled=t(u),mt.disabled=t(_).length<=1,_e=O(Lt,1,"w-10 h-10 rounded-lg",null,_e,{"btn-regular":t(M)>0,"btn-plain":t(M)===0}),Q(tt,"aria-valuenow",t(D)*100),Ae(Ea,`width: ${t(D)*100}%`),ke=O(Tt,1,"btn-plain w-8 h-8 rounded-lg",null,ke,{"text-[var(--primary)]":t(h)})},[()=>yt(t(I).cover),()=>yt(t(I).cover),()=>ne(t(g)),()=>ne(t(S))]),x("click",$,gt),x("keydown",$,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),gt())}),x("click",nt,jt),x("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),jt())}),x("click",ft,ht),x("keydown",ft,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),ht())}),x("click",kt,Pe(gt)),x("click",Rt,Pe(ht)),x("click",Ft,gt),x("click",Ut,ht),x("click",st,Ue),x("keydown",st,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(J).getBoundingClientRect();const w=.5*t(S);t(a)&&(q(a,t(a).currentTime=w),c(g,w))}}),x("click",lt,We),x("click",pt,Ye),x("click",ot,jt),x("click",mt,Pt),x("click",Lt,Oe),x("click",St,ie),x("click",tt,Ke),x("keydown",tt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ie())}),x("click",Tt,Zt),W(s,j)};z(Xe,s=>{s(Ge)})}W(l,se),Ha()}export{Fr as default};
