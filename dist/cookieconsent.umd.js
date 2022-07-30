/*!
* CookieConsent 3.0.0-rc.1
* https://github.com/orestbida/cookieconsent.git
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(){'use strict';const e='opt-in',t='opt-out',a='show--consent',n='show--preferences',r='disable--interaction',o='data-category',i='div',c='button',l='consentModal',s='preferencesModal',d=(e,t)=>{const a={cookie:f.o.t};if(t)return e===f.l.i?r(f._.i)&&f._.i(t):r(f._.p)&&f._.p(t),n(e,t);function n(e,t){window.dispatchEvent(new CustomEvent(e,{detail:o(t)}))}function r(e){return'function'==typeof e}function o(e){return JSON.parse(JSON.stringify(e))}e===f.l.u?r(f._.u)&&f._.u(o(a)):e===f.l.v?r(f._.v)&&f._.v(o(a)):e===f.l.m&&(a.changedCategories=f.o.g,a.changedServices=f.o.h,r(f._.m)&&f._.m(o(a))),n(e,a)};class _{constructor(){this.C=!1,this.S={mode:e,revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={k:null,M:'',T:{},A:null,t:null,N:null,D:null,B:null,O:'',H:!0,J:!1,V:!1,j:!1,F:!1,I:!1,P:[],G:!1,U:!0,g:[],L:!1,R:'',q:!1,K:[],W:[],X:[],Y:[],Z:!1,$:!1,ee:!1,te:[],ae:[],ne:[],re:{},oe:{},ie:{},h:{},ce:{},le:[],se:[]},this.de={_e:0,fe:0,pe:0,ue:0,ve:0,me:0,ge:0,be:0,he:0,ye:0,we:0,Ce:0,Se:0,ke:0,Me:0,xe:0,Te:0,Ae:0,Ne:0,De:0,Be:0,Oe:0,He:0,Ee:0,Je:0,Ve:0,je:0,Fe:0,Ie:0,Pe:{},Ge:{}},this._={u:0,v:0,m:0,i:0,p:0},this.l={u:'cc:onFirstConsent',v:'cc:onConsent',m:'cc:onChange',i:'cc:onModalShow',p:'cc:onModalHide'}}}const f=new _,p=(e,t)=>-1!==e.indexOf(t),u=e=>{var t=document.createElement(e);return e===c&&v(t,'type',e),t},v=(e,t,a)=>{e.setAttribute(t,a)},m=(e,t)=>{e.appendChild(t)},g=(e,t,a,n)=>{e.addEventListener(t,a,!0===n&&{passive:!0})},b=e=>{if('object'==typeof e)return Object.keys(e)},h=(e,t)=>{e.classList.add(t)},y=(e,t)=>{e.classList.remove(t)},w=()=>{var e=f.S.cookie.expiresAfterDays;return'function'==typeof e?e(f.o.R):e},C=(e,t)=>e.filter((e=>!p(t,e))).concat(t.filter((t=>!p(e,t)))),S=e=>{var t='custom';return e.accepted.length===f.o.K.length?t='all':e.accepted.length===f.o.X.length&&(t='necessary'),t},k=()=>{f.o.R=S(x())},M=(e,t)=>{for(var a='accept-',n=s('show-preferencesModal'),r=s('show-consentModal'),o=s(a+'all'),i=s(a+'necessary'),c=s(a+'custom'),l=0;l<n.length;l++)v(n[l],'aria-haspopup','dialog'),g(n[l],'click',(e=>{e.preventDefault(),t.showPreferences()}));for(l=0;l<r.length;l++)v(r[l],'aria-haspopup','dialog'),g(r[l],'click',(e=>{e.preventDefault(),t.show(!0)}));for(l=0;l<o.length;l++)g(o[l],'click',(e=>{d(e,'all')}));for(l=0;l<c.length;l++)g(c[l],'click',(e=>{d(e)}));for(l=0;l<i.length;l++)g(i[l],'click',(e=>{d(e,[])}));function s(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function d(e,a){e.preventDefault(),t.acceptCategory(a),t.hidePreferences(),t.hide()}},x=()=>{var e=f.o.K.filter((e=>!p(f.o.W,e)));return{accepted:f.o.W,rejected:e}},T=()=>{var e=['[href]',c,'input','details','[tabindex="0"]'];function t(t,a){var n=!1,r=!1;try{for(var o,i=t&&t.querySelectorAll(e.join(':not([tabindex="-1"]), ')),c=i.length,l=0;l<c;)o=i[l].getAttribute('data-focus'),r||'1'!==o?'0'===o&&(n=i[l],r||'0'===i[l+1].getAttribute('data-focus')||(r=i[l+1])):r=i[l],l++}catch(e){return[]}a[0]=i[0],a[1]=i[i.length-1],a[2]=n,a[3]=r}t(f.de.Ne,f.o.ae),f.o.J&&t(f.de.me,f.o.te)},A=e=>{var t=f.o.oe;if(f.o.K.forEach((e=>{(f.o.h[e]||f.o.oe[e]||[]).forEach((t=>{const a=f.o.re[e][t];!a.enabled&&p(f.o.oe[e],t)&&'function'==typeof a.onAccept?(a.enabled=!0,a.onAccept()):a.enabled&&!p(f.o.oe[e],t)&&'function'==typeof a.onAccept&&(a.enabled=!1,a.onReject())}))})),f.S.manageScriptTags){var a=f.o.le,n=e||f.o.t.categories||[],r=(e,a)=>{if(a<e.length){var i=e[a],c=f.o.se[a],l=c.Ue,s=c.Le,d=p(n,l),_=!!s&&p(t[l],s);if(!c.Re){var m=!c.qe&&d,g=!c.qe&&_,b=c.qe&&!d&&p(f.o.g,l),h=c.qe&&!_&&p(f.o.h[l]||[],s);if(m||b||g||h){c.Re=!0,i.removeAttribute('type'),i.removeAttribute(o);var y=i.getAttribute('data-src');y&&i.removeAttribute('data-src');var w=u('script');if(w.textContent=i.innerHTML,((e,t)=>{for(var a=t.attributes,n=a.length,r=0;r<n;r++){var o=a[r].nodeName;v(e,o,t[o]||t.getAttribute(o))}})(w,i),y?w.src=y:y=i.src,y&&(w.onload=w.onerror=()=>{w.onload=w.onerror=null,r(e,++a)}),i.parentNode.replaceChild(w,i),y)return}}r(e,++a)}};r(a,0)}},N=e=>{var t=f.o.k.guiOptions,a=t&&t.consentModal,n=t&&t.preferencesModal;function r(e,t,a,n,r,o){var i=a&&a.layout,c=a&&a.position,l=a&&!0===a.flipButtons,s=a&&!1===a.equalWeightButtons,d=i&&i.split(' ')||[],_=c&&c.split(' ')||[],u=d[0],v=d[1],m=_[0],g='pm--'===n?_[0]:_[1],b=u,w=t[u];w||(w=t[r],b=r);var C=p(w.ze,v)&&v,S=p(w.Ke,m)?m:w.Qe,k=p(w.We,g)?g:w.Xe;e.className=o,h(e,n+b),C&&h(e,n+C),S&&h(e,n+S),k&&h(e,n+k),l&&h(e,n+'flip');var M='btn--secondary',x=o+'__';'cm'===o?(f.de.Me&&y(f.de.Me,x+M),f.de.Ae&&y(f.de.Ae,x+M),s&&(f.de.Me&&h(f.de.Me,x+M),f.de.Ae&&h(f.de.Ae,x+M))):(f.de.Fe&&y(f.de.Fe,x+M),s&&f.de.Fe&&h(f.de.Fe,x+M))}if(0===e&&f.o.J){var o=['middle','top','bottom'],i=['left','center','right'],c={box:{ze:['wide','inline'],Ke:o,We:i,Qe:'bottom',Xe:'right'},cloud:{ze:['inline'],Ke:o,We:i,Qe:'bottom',Xe:'center'},bar:{ze:['inline'],Ke:o.slice(1),We:[],Qe:'bottom',Xe:''}};r(f.de.me,c,a,'cm--','box','cm')}1===e&&r(f.de.Ne,{box:{ze:[],Ke:[],We:[],Qe:'',Xe:''},bar:{ze:['wide'],Ke:[],We:['left','right'],Qe:'',Xe:'left'}},n,'pm--','box','pm')},D=e=>{var t=f.o.A&&f.o.A.consentModal;if(t){!0===f.o.k.disablePageInteraction&&h(f.de.fe,r);var a=t.acceptAllBtn,n=t.acceptNecessaryBtn,o=t.showPreferencesBtn,l=t.closeIconLabel,s=t.footer;f.de.ue||(f.de.ue=u(i),f.de.me=u(i),f.de.ge=u(i),f.de.be=u(i),f.de.we=u(i),h(f.de.ue,'cm-wrapper'),h(f.de.me,'cm'),h(f.de.ge,'cm__body'),h(f.de.be,'cm__texts'),h(f.de.we,'cm__btns'),v(f.de.me,'role','dialog'),v(f.de.me,'aria-modal','true'),v(f.de.me,'aria-hidden','false'),v(f.de.me,'aria-labelledby','cm__title'),v(f.de.me,'aria-describedby','cm__desc'),f.de.me.style.visibility='hidden',l&&(f.de.Ae||(f.de.Ae=u(c),f.de.Ae.className='cm__btn cm__btn--close',g(f.de.Ae,'click',(()=>{e.hide(),e.acceptCategory([])})),m(f.de.ge,f.de.Ae)),v(f.de.Ae,'aria-label',l)),m(f.de.ge,f.de.be),(a||n||o)&&m(f.de.ge,f.de.we),m(f.de.me,f.de.ge),m(f.de.ue,f.de.me),m(f.de.pe,f.de.ue));var d=t.title;d&&(f.de.he||(f.de.he=u(i),f.de.he.className=f.de.he.id='cm__title',v(f.de.he,'role','heading'),v(f.de.he,'aria-level','2'),m(f.de.be,f.de.he)),f.de.he.innerHTML=d);var _=t.description;if(_&&(f.o.G&&(_=_.replace('{{revisionMessage}}',f.o.U?'':t.revisionMessage||'')),f.de.ye||(f.de.ye=u(i),f.de.ye.className=f.de.ye.id='cm__desc',m(f.de.be,f.de.ye)),f.de.ye.innerHTML=_),a&&(f.de.ke||(f.de.ke=u(c),h(f.de.ke,'cm__btn'),g(f.de.ke,'click',(()=>{e.hide(),e.acceptCategory('all')}))),f.de.ke.innerHTML=a),n&&(f.de.Me||(f.de.Me=u(c),h(f.de.Me,'cm__btn'),g(f.de.Me,'click',(()=>{e.hide(),e.acceptCategory([])}))),f.de.Me.innerHTML=n),o&&(f.de.xe||(f.de.xe=u(c),f.de.xe.className='cm__btn cm__btn--secondary',g(f.de.xe,'click',(()=>{e.showPreferences()}))),f.de.xe.innerHTML=o),!f.de.Se&&o&&(f.de.Se=u(i),h(f.de.Se,'cm__btn-group'),m(f.de.Se,f.de.xe),m(f.de.we,f.de.Se)),f.de.Ce||(f.de.Ce=u(i),h(f.de.Ce,'cm__btn-group'),n&&m(f.de.Ce,f.de.Me),a&&m(f.de.Ce,f.de.ke),(a||n)&&m(f.de.ge,f.de.Ce),m(f.de.we,f.de.Ce)),s){if(!f.de.Te){var p=u(i),b=u(i);f.de.Te=u(i),h(p,'cm__footer'),h(b,'cm__links'),h(f.de.Te,'cm__link-group'),m(b,f.de.Te),m(p,b),m(f.de.me,p)}f.de.Te.innerHTML=s}f.o.J=!0,N(0)}},B=e=>{var t=f.o.A&&f.o.A.preferencesModal;if(t){var a=t.title,n=t.closeIconLabel,r=t.acceptAllBtn,o=t.acceptNecessaryBtn,l=t.savePreferencesBtn,s=t.sections;if(f.de.ve)f.de.Ee=u(i),h(f.de.Ee,'pm__body');else{f.de.ve=u(i),h(f.de.ve,'pm-wrapper'),f.de.Ne=u(i),f.de.Ne.style.visibility='hidden',h(f.de.Ne,'pm'),v(f.de.Ne,'role','dialog'),v(f.de.Ne,'aria-hidden',!0),v(f.de.Ne,'aria-modal',!0),g(f.de.fe,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()}),!0),f.de.De=u(i),h(f.de.De,'pm__header'),f.de.Be=u(i),h(f.de.Be,'pm__title'),v(f.de.Be,'role','heading'),f.de.Oe=u(c),h(f.de.Oe,'pm__close-btn'),v(f.de.Oe,'aria-label',t.closeIconLabel||''),g(f.de.Oe,'click',(()=>{e.hidePreferences()})),f.de.He=u(i),h(f.de.He,'pm__body'),f.de.Ve=u(i),h(f.de.Ve,'pm__footer');var d=u(i);h(d,'pm__btns');var _=u(i),p=u(i);h(_,'pm__btn-group'),h(p,'pm__btn-group'),m(f.de.Ve,p),m(f.de.Ve,_),m(f.de.De,f.de.Be),m(f.de.De,f.de.Oe),m(f.de.Ne,f.de.De),m(f.de.Ne,f.de.He),m(f.de.Ne,f.de.Ve),m(f.de.ve,f.de.Ne),m(f.de.pe,f.de.ve)}a&&(f.de.Be.innerHTML=a,n&&v(f.de.Oe,'aria-label',n)),s&&s.forEach((e=>{var a=e.title,n=e.description,r=e.linkedCategory,o=r&&f.o.q[r],l=e.cookieTable,s=l&&l.body,d=s&&s.length>0,_=!!o,p=_&&f.o.re[r]||!1,w=p&&b(p)||[],C=_&&(!!n||!!d||b(p).length>0),S=u(i);if(h(S,'pm__section'),C||n){var k=u(i);h(k,'pm__section-desc-wrapper')}if(C&&w.length>0){var M=u(i);h(M,'pm__section-services'),w.forEach((e=>{var t=p[e].label||e,a=u(i),n=u(i),c=u(i),l=u('span'),s=u(i);h(a,'pm__service'),h(s,'pm__service-title'),h(l,'gg-code-slash'),h(n,'pm__service-header'),h(c,'pm__service-icon');var d=O(t,e,o,0,!0,r);s.innerHTML=t,m(c,l),m(n,c),m(n,s),m(a,n),m(a,d),m(M,a)})),m(k,M)}if(a){var x=u(i),T=u(_?c:i);if(h(x,'pm__section-title-wrapper'),h(T,'pm__section-title'),T.innerHTML=a,m(x,T),_){S.className+='--toggle';var A=O(a,r,o);if(w.length>0){var N=u('span');h(N,'pm__service-counter'),v(N,'aria-hidden',!0),v(N,'data-servicecounter',w.length);var D=t.serviceCounterLabel;D&&'string'==typeof D&&v(N,'data-counterlabel',D),m(T,N)}if(C){h(S,'pm__section--expandable');var B=r+'-desc';v(T,'aria-expanded',!1),v(T,'aria-controls',B)}m(x,A)}else v(T,'role','heading'),v(T,'aria-level','3');m(S,x)}if(n){var H=u(i);h(H,'pm__section-desc'),H.innerHTML=n,m(k,H)}if(C&&(v(k,'aria-hidden','true'),k.id=B,((e,t,a)=>{g(T,'click',(()=>{t.classList.contains('is-expanded')?(y(t,'is-expanded'),v(a,'aria-expanded','false'),v(e,'aria-hidden','true')):(h(t,'is-expanded'),v(a,'aria-expanded','true'),v(e,'aria-hidden','false'))}),!1)})(k,S,T),d)){var E=u('table'),J=u('thead'),V=u('tbody');h(E,'pm__section-table'),h(J,'pm__table-head'),h(V,'pm__table-body');var j=l.headers,F=b(j),I=f.de._e.createDocumentFragment(),P=u('tr');v(P,'role','row');for(var G=0;G<F.length;G++){var U=j[F[G]],L=u('th');L.id='cc__row-'+U,v(L,'role','columnheader'),v(L,'scope','col'),h(L,'pm__table-th'),L.innerHTML=U,m(I,L)}m(P,I),m(J,P);var R=f.de._e.createDocumentFragment();for(G=0;G<s.length;G++){var q=s[G],z=u('tr');v(z,'role','row'),h(z,'pm__table-tr');for(var K=0;K<F.length;K++){var Q=F[K],W=j[Q],X=q[Q],Y=u('td'),Z=u(i);h(Y,'pm__table-td'),v(Y,'data-column',W),v(Y,'headers','cc__row-'+W),Z.insertAdjacentHTML('beforeend',X),m(Y,Z),m(z,Y)}m(R,z)}m(V,R),m(E,J),m(E,V),m(k,E)}(C||n)&&m(S,k),m(f.de.He,S),f.de.Ee?m(f.de.Ee,S):m(f.de.He,S)})),(r||o)&&(o&&(f.de.Fe||(f.de.Fe=u(c),h(f.de.Fe,'pm__btn'),m(_,f.de.Fe),g(f.de.Fe,'click',(()=>{w([])}))),f.de.Fe.innerHTML=o),r&&(f.de.je||(f.de.je=u(c),h(f.de.je,'pm__btn'),m(_,f.de.je),g(f.de.je,'click',(()=>{w('all')}))),f.de.je.innerHTML=r)),l&&(f.de.Ie||(f.de.Ie=u(c),f.de.Ie.className='pm__btn pm__btn--secondary',m(p,f.de.Ie),g(f.de.Ie,'click',(()=>{w()}))),f.de.Ie.innerHTML=l),f.de.Ee&&(f.de.Ne.replaceChild(f.de.Ee,f.de.He),f.de.He=f.de.Ee),N(1)}function w(t){e.acceptCategory(t),e.hidePreferences(),e.hide()}};function O(e,t,a,n,r,i){var c=u('label'),l=u('input'),s=u('span'),d=u('span'),_=u('span'),b=u('span');if(l.type='checkbox',h(c,'section__toggle-wrapper'),h(l,'section__toggle'),h(_,'toggle__icon-on'),h(b,'toggle__icon-off'),h(s,'toggle__icon'),h(d,'toggle__label'),v(s,'aria-hidden','true'),r?(h(c,'toggle-service'),h(l,'toggle-service'),v(l,o,i),f.de.Ge[i][t]=l):f.de.Pe[t]=l,r?(e=>{g(l,'change',(()=>{var t=f.de.Ge[e],a=f.de.Pe[e];for(var n in f.o.ie[e]=[],t){const a=t[n];a.checked&&f.o.ie[e].push(a.value)}f.o.ie[e].length>0?a.checked=!0:a.checked=!1}))})(i):(e=>{g(l,'click',(()=>{var t=f.de.Ge[e];if(f.o.ie[e]=[],l.checked)for(var a in t)t[a].checked=!0;else for(a in t)t[a].checked=!1}))})(t),l.value=t,d.textContent=e,m(s,b),m(s,_),f.o.H)(a.enabled||a.readOnly)&&(l.checked=!0);else if(r){var y=f.o.oe[i];y&&p(y,t)&&(l.checked=!0)}else p(f.o.t.categories,t)&&(l.checked=!0);return a.readOnly&&(l.disabled=!0),m(c,l),m(c,s),m(c,d),c}const H=e=>{var t=b(f.o.T);return p(t,e)?e:p(t,f.o.M)?f.o.M:t[0]},E=async e=>{let t=f.o.M;if(e&&(t=H(e)),f.o.A=f.o.T[t],!f.o.A)return!1;if('string'==typeof f.o.A){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(f.o.A);if(!e)return!1;f.o.A=e,f.o.T[t]=e}else f.o.A=f.o.T[t];return f.o.M=t,!0},J=e=>{var t=f.S.cookie.domain;f.o.L=!1;var a=P(),n=[t,'.'+t];if('www.'===t.slice(0,4)){var r=t.substring(4);n.push(r,'.'+r)}var o,i=e?f.o.K:f.o.g;i=i.filter((e=>{var t=f.o.q[e];return!!t&&!t.readOnly&&!!t.autoClear}));for(var c=0;c<i.length;c++){var l=i[c],s=f.o.q[l].autoClear,d=s&&s.cookies||[],_=p(f.o.g,l),u=!p(f.o.W,l),v=_&&u;if(e&&u||!e&&v){var m=d.length;!0===s.reloadPage&&v&&(f.o.L=!0);for(var g=0;g<m;g++){var b=[],h=d[g].name,y=!!h&&'string'!=typeof h,w=d[g].domain||null,C=d[g].path||!1;if(w&&(n=[w,'.'+w]),y)for(var S=0;S<a.length;S++)h.test(a[S])&&b.push(a[S]);else{var k=(o=h,a.indexOf(o));k>-1&&b.push(a[k])}b.length>0&&F(b,C,n)}}}},V=(e,t,a)=>{var n,r=encodeURIComponent(t),o=a?(n=f.o.B?new Date-f.o.B:0,864e5*w()-n):864e5*w(),i=new Date;i.setTime(i.getTime()+o);var c=e+'='+(r||'')+(0!==o?'; expires='+i.toUTCString():'')+'; Path='+f.S.cookie.path+';';c+=' SameSite='+f.S.cookie.sameSite+';',p(window.location.hostname,'.')&&(c+=' Domain='+f.S.cookie.domain+';'),'https:'===window.location.protocol&&(c+=' Secure;'),document.cookie=c,JSON.parse(decodeURIComponent(r))},j=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},F=(e,t,a)=>{for(var n=t||f.S.cookie.path,r=0;r<e.length;r++){for(var o=0;o<a.length;o++)document.cookie=e[r]+'=; path='+n+(p(a[o],'.')?'; domain='+a[o]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';e[r]}},I=(e,t)=>{let a=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return a=a?t?a.pop():e:'',a},P=e=>{const t=document.cookie.split(/;\s*/);let a=[];for(var n=0;n<t.length;n++){let r=t[n].split('=')[0];if(e)try{e.test(r)&&a.push(r)}catch(e){}else a.push(r)}return a},G=()=>{f.S.cookie.domain=window.location.hostname,f.de._e=document,f.de.fe=f.de._e.documentElement},U={acceptCategory:(e,a)=>{var n=e||void 0,r=a||[],o=!1,i=[];if(n)if('object'==typeof n&&'number'==typeof n.length)for(var c=0;c<n.length;c++)p(f.o.K,n[c])&&i.push(n[c]);else'string'==typeof n&&('all'===n?i=f.o.K.slice():p(f.o.K,n)&&i.push(n));else i=(()=>{var e=f.de.Pe,t=[];for(var a in e)e[a].checked&&t.push(e[a].value);return t})(),o=!0;if(r.length>=1)for(c=0;c<r.length;c++)i=i.filter((e=>e!==r[c]));for(c=0;c<f.o.X.length;c++)p(i,f.o.X[c])||i.push(f.o.X[c]);f.o.W=i,k(),o||(f.o.ie={}),f.o.ce=JSON.parse(JSON.stringify(f.o.oe)),f.o.K.forEach((e=>{var t=f.de.Ge[e];if(0===b(t).length)return;const a=f.o.re[e],n=b(a);if(f.o.oe[e]=[],p(f.o.X,e))n.forEach((t=>{f.o.oe[e].push(t)}));else if('all'===f.o.R)o&&f.o.ie[e]&&f.o.ie[e].length>0?f.o.ie[e].forEach((t=>{f.o.oe[e].push(t)})):n.forEach((t=>{f.o.oe[e].push(t)}));else if('necessary'===f.o.R)f.o.oe[e]=[];else if(o&&f.o.ie[e]&&f.o.ie[e].length>0)f.o.ie[e].forEach((t=>{f.o.oe[e].push(t)}));else for(let a in t){const n=t[a];n.checked&&f.o.oe[e].push(n.value)}})),(()=>{f.S.mode===t&&f.o.H?f.o.g=C(f.o.Y,f.o.W):f.o.g=C(f.o.W,f.o.t.categories||[]);var e=f.o.g.length>0,a=!1;f.o.K.forEach((e=>{f.o.h[e]=C(f.o.oe[e]||[],f.o.ce[e]||[]),f.o.h[e].length>0&&(a=!0)}));var n=f.de.Pe;for(var r in n)p(f.o.W,r)?n[r].checked=!0:n[r].checked=!1;f.o.K.forEach((e=>{var t=f.de.Ge[e],a=f.o.oe[e];for(var n in t){const e=t[n];p(a,n)?e.checked=!0:e.checked=!1}})),!f.o.H&&f.S.autoClearCookies&&e&&J(),f.o.D||(f.o.D=new Date),f.o.O||(f.o.O=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),f.o.t={categories:JSON.parse(JSON.stringify(f.o.W)),revision:f.S.revision,data:f.o.N,consentTimestamp:f.o.D.toISOString(),consentId:f.o.O,services:JSON.parse(JSON.stringify(f.o.oe))};var o=!1;(f.o.H||e||a)&&(f.o.H&&(f.o.H=!1,o=!0),k(),f.o.B?f.o.B=new Date:f.o.B=f.o.D,f.o.t.lastConsentTimestamp=f.o.B.toISOString(),V(f.S.cookie.name,JSON.stringify(f.o.t)),A()),o&&(f.S.autoClearCookies&&J(!0),d(f.l.u),d(f.l.v),'opt-in'===f.S.mode)||((e||a)&&d(f.l.m),f.o.L&&window.location.reload())})()},acceptService:(e,t)=>{if(!e||!t||'string'!=typeof t||!p(f.o.K,t))return!1;const a=f.de.Ge[t]||{};if(f.o.ie[t]=[],'string'==typeof e)if('all'===e)for(var n in a)a[n].checked=!0,r(a[n]);else for(n in a)a[n].checked=e===n,r(a[n]);else if('object'==typeof e&&Array.isArray(e))for(n in a)p(e,n)?a[n].checked=!0:a[n].checked=!1,r(a[n]);function r(e){e.dispatchEvent(new Event('change'))}U.acceptCategory()},validCookie:e=>''!==I(e,!0),eraseCookies:(e,t,a)=>{var n=[],r=f.S.cookie.domain,o=a?[a,'.'+a]:[r,'.'+r];if(Array.isArray(e))for(var i=0;i<e.length;i++)c(e[i]);else c(e);function c(e){if('string'==typeof e){let t=I(e);''!==t&&n.push(t)}else n=n.concat(P(e))}F(n,t,o)},setLanguage:async(e,t)=>{var a=H(e);return!(e!==a||a===f.o.M&&!0!==t||!await E(a)||(f.o.M=a,f.o.J&&(D(U),M(f.de.Ye,U)),B(U),0))},getUserPreferences:()=>{var e,t=!f.o.H&&x();return{acceptType:f.o.R,acceptedCategories:f.o.H?[]:t.accepted,rejectedCategories:f.o.H?[]:t.rejected,acceptedServices:f.o.H?{}:f.o.oe,rejectedServices:f.o.H?{}:(e={},f.o.K.forEach((t=>{e[t]=C(f.o.oe[t]||[],b(f.o.re[t])||[])})),e)}},loadScript:(e,t)=>{let a=document.querySelector('script[src="'+e+'"]');return new Promise(((n,r)=>{if(a)return n(!0);a=u('script'),Array.isArray(t)&&t.forEach((e=>{v(a,e.name,e.value)})),a.onload=()=>n(!0),a.onerror=()=>{a.remove(),r(!1)},a.src=e,m(document.head,a)}))},setCookieData:e=>{var t=e.value,a=!1;if('update'===e.mode){f.o.N=U.getCookie('data');var n=typeof f.o.N==typeof t;if(n&&'object'==typeof f.o.N)for(var r in!f.o.N&&(f.o.N={}),t)f.o.N[r]!==t[r]&&(f.o.N[r]=t[r],a=!0);else!n&&f.o.N||f.o.N===t||(f.o.N=t,a=!0)}else f.o.N=t,a=!0;return a&&(f.o.t.data=f.o.N,V(f.S.cookie.name,JSON.stringify(f.o.t),!0)),a},getCookie:(e,t)=>{var a=j(I(t||f.S.cookie.name,!0));return e?a[e]:a},getConfig:e=>e?f.S[e]||f.o.k[e]:{...f.S,...f.o.k,cookie:{...f.S.cookie}},show:e=>{f.C&&(e&&!f.o.J&&(D(U),T(),M(f.de.me,U)),f.o.J&&(h(f.de.fe,a),v(f.de.me,'aria-hidden','false'),f.o.V=!0,setTimeout((()=>{f.o.$=f.de._e.activeElement,f.o.P=f.o.te}),200),d(f.l.i,l)))},hide:()=>{f.o.J&&(y(f.de.fe,a),v(f.de.me,'aria-hidden','true'),f.o.V=!1,setTimeout((()=>{f.o.$.focus(),f.o.P=null}),200),d(f.l.p,l))},showPreferences:()=>{f.C&&(h(f.de.fe,n),v(f.de.Ne,'aria-hidden','false'),f.o.j=!0,setTimeout((()=>{f.o.I=!0}),1),setTimeout((()=>{f.o.V?f.o.ee=f.de._e.activeElement:f.o.$=f.de._e.activeElement,0!==f.o.ae.length&&(f.o.ae[3]?f.o.ae[3].focus():f.o.ae[0].focus(),f.o.P=f.o.ae)}),200),d(f.l.i,s))},hidePreferences:()=>{f.C&&(y(f.de.fe,n),f.o.j=!1,v(f.de.Ne,'aria-hidden','true'),setTimeout((()=>{f.o.I=!1}),1),f.o.V?(f.o.ee&&f.o.ee.focus(),f.o.P=f.o.te):(f.o.$&&f.o.$.focus(),f.o.P=null),f.o.F=!1,d(f.l.p,s))},acceptedCategory:t=>{var a;return a=f.o.H&&f.S.mode!==e?f.o.Y:x().accepted||[],p(a,t)},acceptedService:(e,t)=>p(f.o.oe[t]||[],e),validConsent:()=>!f.o.H,run:async e=>{if(!f.de.pe){if((e=>{G(),f.C=!0,f.o.k=e,f.o.T=e.language.translations,f.o.q=f.o.k.categories,'boolean'==typeof e.autoShow&&(f.S.autoShow=e.autoShow);var a=e.cookie;if(a&&'object'==typeof a){var n=a.name,r=a.domain,i=a.path,c=a.sameSite,l=a.expiresAfterDays;n&&(f.S.cookie.name=n),r&&(f.S.cookie.domain=r),i&&(f.S.cookie.path=i),c&&(f.S.cookie.sameSite=c),l&&(f.S.cookie.expiresAfterDays=l)}f._.u=e.onFirstConsent,f._.v=e.onConsent,f._.m=e.onChange,f._.p=e.onModalHide,f._.i=e.onModalShow;var s=e.mode,d=e.revision,_=e.autoClearCookies,u=e.manageScriptTags,v=e.hideFromBots;s===t&&(f.S.mode=s),'number'==typeof d&&(d>-1&&(f.S.revision=d),f.o.G=!0),'boolean'==typeof _&&(f.S.autoClearCookies=_),'boolean'==typeof u&&(f.S.manageScriptTags=u),!1===v&&(f.S.hideFromBots=!1),!0===f.S.hideFromBots&&(f.o.Z=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),f.S.autoClearCookies,f.o.G,f.S.manageScriptTags;var m=f.o.k.language.default;m&&(f.o.M=m),f.o.M=function(){var e,t=f.o.k.language.autoDetect;if(t){if('browser'===t)return H(((e=navigator.language||navigator.browserLanguage).length>2&&(e=e[0]+e[1]),e.toLowerCase()));if('document'===t)return H(f.de._e.documentElement.lang)}return H(f.o.k.language.default)}(),f.o.A=f.o.T[f.o.M],f.o.M,f.o.K=b(f.o.q),f.o.K.forEach((e=>{const t=f.o.q[e].services||{},a=t&&!!(n=t)&&'object'==typeof n&&!Array.isArray(n)&&b(t)||[];var n;f.o.re[e]={},f.o.oe[e]=[],f.de.Ge[e]={},0!==a.length&&a.forEach((a=>{const n=t[a];n.enabled=!1,f.o.re[e][a]=n}))}));for(var g=0;g<f.o.K.length;g++)!0===f.o.q[f.o.K[g]].readOnly&&f.o.X.push(f.o.K[g]);f.S.manageScriptTags&&(f.o.le=f.de._e.querySelectorAll('script[data-category]'),f.o.se=[],f.o.le.forEach((e=>{let t=e.getAttribute(o)||'',a=e.dataset.service||'',n=!1;if('!'===t.charAt(0)&&(t=t.slice(1),n=!0),'!'===a.charAt(0)&&(a=a.slice(1),n=!0),p(f.o.K,t)&&(f.o.se.push({Re:!1,qe:n,Ue:t,Le:a}),a)){const e=f.o.re[t];e[a]||(e[a]={enabled:!1})}})))})(e),f.o.Z)return;f.o.t=j(I(f.S.cookie.name,!0)),f.o.O=f.o.t.consentId;var a=void 0!==f.o.O;f.o.D=f.o.t.consentTimestamp,f.o.D&&(f.o.D=new Date(f.o.D)),f.o.B=f.o.t.lastConsentTimestamp,f.o.B&&(f.o.B=new Date(f.o.B));var n=f.o.t.data;if(f.o.N=void 0!==n?n:null,f.o.G&&a&&f.o.t.revision!==f.S.revision&&(f.o.U=!1),f.o.J=f.o.H=!(a&&f.o.U&&f.o.D&&f.o.B&&f.o.O),f.o.H,f.o.H?f.S.mode===t&&f.o.K.forEach((e=>{if(f.o.q[e].enabled){f.o.Y.push(e);const a=f.o.re[e]||{};for(var t in a)f.o.oe[e].push(t)}})):(f.o.W=f.o.t.categories,f.o.R=S(x()),f.o.oe=f.o.t.services||{}),!await E(null))return;(e=>{f.de.pe||(f.de.pe=u(i),f.de.pe.id='cc-main',f.de.pe.style.position='fixed',f.de.pe.style.zIndex='1000000',f.o.J&&D(e),B(e),m(f.o.k.root||f.de._e.body,f.de.pe))})(U),T(),M(null,U),f.S.autoShow&&f.o.J&&U.show(),setTimeout((()=>{h(f.de.pe,'c--anim')}),100),(e=>{var t=!1,a=!1;g(f.de.fe,'keydown',(e=>{'Tab'===e.key&&(f.o.P&&(e.shiftKey?f.de._e.activeElement===f.o.P[0]&&(f.o.P[1].focus(),e.preventDefault()):f.de._e.activeElement===f.o.P[1]&&(f.o.P[0].focus(),e.preventDefault()),a||f.o.F||(a=!0,!t&&e.preventDefault(),e.shiftKey?f.o.P[3]?f.o.P[2]?f.o.P[2].focus():f.o.P[0].focus():f.o.P[1].focus():f.o.P[3]?f.o.P[3].focus():f.o.P[0].focus())),!a&&(t=!0))})),g(f.de.pe,'click',(t=>{f.o.I?f.de.Ne.contains(t.target)?f.o.F=!0:(e.hidePreferences(0),f.o.F=!1):f.o.V&&f.de.me.contains(t.target)&&(f.o.F=!0)}),!0)})(U),f.o.H?f.S.mode===t&&(f.S.mode,f.o.Y,A(f.o.Y)):(A(),d(f.l.v))}},reset:e=>{if(!f.C)return;f.C=!1,!0===e&&U.eraseCookies(f.S.cookie.name,f.S.cookie.path,f.S.cookie.domain),f.de.pe&&f.de.pe.remove(),y(f.de.fe,r),y(f.de.fe,n),y(f.de.fe,a);const t=new _;f.o=t.o,f.de=t.de,f.S=t.S,f._=t._,f.l=t.l}};return{init:()=>(G(),U)}},'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):(e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent=t();
