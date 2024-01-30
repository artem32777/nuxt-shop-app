import{r as V,i as L,n as Y,j as G,k as H,f as m,l as M,v as Q,h as t,o as u,c as x,m as D,q as z,g as b,w as i,s as y,x as R,y as q,b as d,z as U,a as c,d as O,A as X,t as N,F as E,B as Z}from"./entry.PMburjjp.js";import{c as v,d as J,y as ee,O as te,a as W,I as se,g as oe,C as ae,S as le,b as ne,$ as re,x as ie,B as de,E as ce,P as ue,e as P,u as K}from"./product.store.GJTSXnIA.js";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const pe=o=>typeof o<"u";function fe(o){return JSON.parse(JSON.stringify(o))}function me(o,e,s,n={}){var a,l,r;const{clone:h=!1,passive:_=!1,eventName:T,deep:w=!1,defaultValue:S,shouldEmit:$}=n,p=H(),B=s||(p==null?void 0:p.emit)||((a=p==null?void 0:p.$emit)==null?void 0:a.bind(p))||((r=(l=p==null?void 0:p.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(p==null?void 0:p.proxy));let g=T;e||(e="modelValue"),g=g||`update:${e.toString()}`;const F=f=>h?typeof h=="function"?h(f):fe(f):f,j=()=>pe(o[e])?F(o[e]):S,A=f=>{$?$(f)&&B(g,f):B(g,f)};if(_){const f=j(),I=V(f);let C=!1;return L(()=>o[e],k=>{C||(C=!0,I.value=F(k),Y(()=>C=!1))}),L(I,k=>{!C&&(k!==o[e]||w)&&A(k)},{deep:w}),I}else return G({get(){return j()},set(f){A(f)}})}const _e=m({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(o,{emit:e}){const s=o,a=me(s,"modelValue",e,{passive:!0,defaultValue:s.defaultValue});return(l,r)=>M((u(),x("input",{"onUpdate:modelValue":r[0]||(r[0]=h=>D(a)?a.value=h:null),class:z(t(v)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s.class??""))},null,2)),[[Q,t(a)]])}}),ge=m({__name:"Select",props:{open:{type:Boolean},defaultOpen:{type:Boolean},defaultValue:{},modelValue:{},orientation:{},dir:{},name:{},autocomplete:{},disabled:{type:Boolean},required:{type:Boolean}},emits:["update:modelValue","update:open"],setup(o,{emit:e}){const a=J(o,e);return(l,r)=>(u(),b(t(ee),R(q(t(a))),{default:i(()=>[y(l.$slots,"default")]),_:3},16))}}),he=m({__name:"SelectValue",props:{placeholder:{},asChild:{type:Boolean},as:{}},setup(o){const e=o;return(s,n)=>(u(),b(t(te),R(q(e)),{default:i(()=>[y(s.$slots,"default")]),_:3},16))}});/**
 * @license lucide-vue-next v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=W("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=W("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),ye=m({__name:"SelectTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{default:""},invalid:{type:Boolean,default:!1}},setup(o){const e=o;return(s,n)=>(u(),b(t(oe),U(e,{class:[t(v)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap [&>span]:truncate [&>span]:min-w-0",e.class),e.invalid?"!ring-destructive ring-2 placeholder:!text-destructive":""]}),{default:i(()=>[y(s.$slots,"default"),d(t(se),{"as-child":""},{default:i(()=>[d(t(ve),{class:"w-4 h-4 opacity-50"})]),_:1})]),_:3},16,["class"]))}}),xe=m({__name:"SelectContent",props:{forceMount:{type:Boolean},position:{default:"popper"},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean,default:!0},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},onPlaced:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["closeAutoFocus","escapeKeyDown","pointerDownOutside"],setup(o,{emit:e}){const s=o,a=J(s,e);return(l,r)=>(u(),b(t(ne),null,{default:i(()=>[d(t(ae),U({...t(a),...l.$attrs},{class:t(v)("relative z-50 min-w-[10rem] overflow-hidden rounded-md bg-background border border-border text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-[--radix-popper-available-height]",l.position==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s.class)}),{default:i(()=>[d(t(le),{class:z(t(v)("p-1",l.position==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"))},{default:i(()=>[y(l.$slots,"default")]),_:3},8,["class"])]),_:3},16,["class"])]),_:3}))}}),Ve=m({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const e=o;return(s,n)=>(u(),b(t(re),U({class:t(v)("p-1 w-full",e.class)},e),{default:i(()=>[y(s.$slots,"default")]),_:3},16,["class"]))}}),we={class:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},Se=m({__name:"SelectItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},setup(o){const e=o;return(s,n)=>(u(),b(t(ce),U(e,{class:t(v)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e.class)}),{default:i(()=>[c("span",we,[d(t(ie),null,{default:i(()=>[d(t(be),{class:"h-4 w-4"})]),_:1})]),d(t(de),null,{default:i(()=>[y(s.$slots,"default")]),_:3})]),_:3},16,["class"]))}}),$e=m({__name:"SelectLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(o){const e=o;return(s,n)=>(u(),b(t(ue),{class:z(t(v)("py-1.5 pl-8 pr-2 text-sm font-semibold",e.class))},{default:i(()=>[y(s.$slots,"default")]),_:3},8,["class"]))}}),Be=""+globalThis.__publicAssetsURL("search.svg"),Ce={class:"relative mb-2 flex items-center gap-2"},ke=c("img",{src:Be,alt:"search",class:"absolute left-4"},null,-1),Pe=m({__name:"ProductSort",emits:["searchValue","sortValue"],setup(o,{emit:e}){const s=e,n=V(""),a=V(P.default);return(l,r)=>{const h=_e,_=he,T=ye,w=$e,S=Se,$=Ve,p=xe,B=ge;return u(),x("div",null,[c("label",Ce,[d(h,{onInput:r[0]||(r[0]=g=>s("searchValue",t(n))),modelValue:t(n),"onUpdate:modelValue":r[1]||(r[1]=g=>D(n)?n.value=g:null),class:"w-[300px] pl-10"},null,8,["modelValue"]),ke]),d(B,{modelValue:t(a),"onUpdate:modelValue":[r[2]||(r[2]=g=>D(a)?a.value=g:null),r[3]||(r[3]=g=>s("sortValue",t(a)))]},{default:i(()=>[d(T,null,{default:i(()=>[d(_,{placeholder:"Сортировать по:"})]),_:1}),d(p,null,{default:i(()=>[d($,null,{default:i(()=>[d(w,null,{default:i(()=>[O("Сортировать по:")]),_:1}),d(S,{value:t(P).minPrice},{default:i(()=>[O(" По цене (дешевые) ")]),_:1},8,["value"]),d(S,{value:t(P).maxPrice},{default:i(()=>[O(" По цене (дорогие) ")]),_:1},8,["value"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),Ue={class:"relative h-full cursor-pointer rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"},Te=["src"],Ie=["src"],Oe={class:"mt-2 min-h-[150px] text-lg"},Le={class:"mt-5 flex justify-between"},De={class:"flex flex-col text-lg"},Ne=c("span",{class:"text-slate-400"},"Цена:",-1),ze=["title"],Fe=["src"],je=m({__name:"ProductCard",props:{card:{},searchValue:{}},setup(o){const e=K(),s=o,n=G(()=>s.searchValue===""?!0:s.card.title.toLowerCase().includes(s.searchValue.toLowerCase().trim()));return(a,l)=>M((u(),x("article",Ue,[c("button",{onClick:l[0]||(l[0]=r=>t(e).favoriteToggle(a.card)),class:"absolute left-5 top-5 rounded-full bg-gray-50 p-3",title:"Добавить в избранное"},[c("img",{src:a.card.isFavorite?"/like-2.svg":"/like-1.svg",alt:"Like 1"},null,8,Te)]),c("img",{src:a.card.imageUrl,alt:"Sneaker",class:"m-auto h-[200px] w-[200px]"},null,8,Ie),c("p",Oe,N(a.card.title),1),c("div",Le,[c("div",De,[Ne,c("b",null,N(a.card.price),1)]),c("button",{onClick:l[1]||(l[1]=r=>t(e).cartToggle(a.card)),title:a.card.isAdded?"Удалить":"Добавить"},[c("img",{src:a.card.isAdded?"/checked.svg":"/plus.svg",alt:"add to cart"},null,8,Fe)],8,ze)])],512)),[[X,t(n)]])}}),Ae={class:"mb-10 flex justify-between"},Ee={class:"flex-grow text-3xl font-bold"},Ge={class:"products-list"},Me={key:1},Je=m({__name:"ProductsList",props:{listTitle:{},products:{}},setup(o){const e=K(),s=V(""),n=V(P.default);return L(n,()=>{e.sort(n.value)}),(a,l)=>{const r=Pe,h=je;return u(),x(E,null,[c("div",Ae,[c("h2",Ee,N(a.listTitle),1),d(r,{onSearchValue:l[0]||(l[0]=_=>s.value=_),onSortValue:l[1]||(l[1]=_=>n.value=_)})]),c("div",Ge,[a.products?(u(!0),x(E,{key:0},Z(a.products,_=>(u(),b(h,{key:_.id,"search-value":t(s),card:_},null,8,["search-value","card"]))),128)):(u(),x("p",Me,"No products"))])],64)}}});export{Je as _};