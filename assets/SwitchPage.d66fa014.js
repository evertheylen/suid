var _=Object.defineProperty;var r=(e,t)=>_(e,"name",{value:t,configurable:!0});import{c as U,u as q,e as $,g,d as w,m as s,a as i,h as L,i as I,s as E,k as G,r as S,t as J}from"./vendor.37d14b95.js";import{i as R,j as B,k as P,l as m,s as b,O as K,a0 as Q,n as M,y as Y,x as Z,T}from"./index.ed1b30b4.js";import{C as ee}from"./ComponentInfo.009186fa.js";import"./Link.9b4d9d27.js";import"./copyText.ca51de91.js";import"./PaperCode.3f9a0c8e.js";const O=U();function A(){return q(O)}r(A,"useFormControl");const V=U();function te(){return q(V)}r(te,"useFormControlLabel");function ne(e){const t=e.controlled()!==void 0,[o,n]=$(e.default()),l=g(()=>t?e.controlled():o());return t&&w(()=>{n(()=>l())}),[l,r(u=>{t||n(u)},"setValueIfUncontrolled")]}r(ne,"useControlled");function oe(e){return B("PrivateSwitchBase",e)}r(oe,"getSwitchBaseUtilityClass");R("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const D=P()({name:"MuiSwitchBase",selfPropNames:["autoFocus","checked","checkedIcon","classes","defaultChecked","disableFocusRipple","disableRipple","disabled","edge","icon","id","inputProps","inputRef","name","onChange","readOnly","required","tabIndex","type","value"],autoCallUseClasses:!1,propDefaults:({set:e})=>e({disableFocusRipple:!1,edge:!1}),utilityClass:oe,slotClasses:e=>({root:["root",!!e.checked&&"checked",!!e.disabled&&"disabled",e.edge&&`edge${m(e.edge)}`],input:["input"]})}),le=b(K)(({ownerState:e})=>({padding:9,borderRadius:"50%",...e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},...e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}})),ae=b("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),re=D.component(r(function({allProps:t,otherProps:o,props:n}){const l=te(),[d,u]=ne({controlled:()=>n.checked??l?.checked,default:()=>Boolean(n.defaultChecked),name:"SwitchBase",state:"checked"}),f=A(),h=g(()=>typeof l?.disabled<"u"?l.disabled:f&&typeof n.disabled>"u"?f.disabled:n.disabled);w(()=>{l&&l.setDisabled(!!h())});const z=g(()=>n.type==="checkbox"||n.type==="radio"),p=s(t,()=>({checked:d(),disabled:h()})),k=D.useClasses(p),v=Q(()=>n.inputRef),N=g(()=>{if(n.type==="checkbox")return n.value??l?.value});return w(()=>{typeof n.defaultChecked=="boolean"&&(v.ref.defaultChecked=n.defaultChecked)}),w(()=>{const a=d();typeof a=="boolean"&&(v.ref.checked=a)}),i(le,s(o,{component:"span",get className(){return L(k.root,o.className)},centerRipple:!0,get focusRipple(){return!n.disableFocusRipple},get disabled(){return h()},tabIndex:null,role:void 0,onFocus:a=>{typeof o.onFocus=="function"&&o.onFocus(a),f?.onFocus?.()},onBlur:a=>{typeof o.onBlur=="function"&&o.onBlur(a),f?.onBlur?.()},ownerState:p,get children(){return[i(ae,s({component:"input",get autofocus(){return n.autoFocus},get className(){return k.input},get disabled(){return h()},get id(){return z()?n.id:void 0},get name(){return n.name??l?.name},onClick:a=>{if(a.defaultPrevented)return;const y=a.currentTarget.checked;a.currentTarget.checked=!y,u(y),typeof n.onChange=="function"?n.onChange(a,y):l?.onChange?.(a,y),typeof o.onClick=="function"&&o.onClick(a)},get readOnly(){return n.readOnly},ref:a=>{v(a),n.inputRef||l?.inputRef?.(a)},get required(){return n.required},ownerState:p,get tabIndex(){return n.tabIndex},get type(){return n.type}},()=>({value:N()}),()=>n.inputProps||{})),I(()=>d()?n.checkedIcon:n.icon)]}}))},"SwitchBase"));function ie(e){return B("MuiSwitch",e)}r(ie,"getSwitchUtilityClass");const c=R("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),ce=P()({name:"MuiSwitch",selfPropNames:["checkedIcon","classes","color","disabled","icon","size","value"],propDefaults:({set:e})=>e({color:"primary",size:"medium"}),utilityClass:ie,slotClasses:e=>({root:["root",!!e.edge&&`edge${m(e.edge)}`,`size${m(e.size)}`],switchBase:["switchBase",`color${m(e.color)}`,!!e.checked&&"checked",!!e.disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]})}),se=b("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${m(o.edge)}`],t[`size${m(o.size)}`]]}})(({ownerState:e})=>({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},...e.edge==="start"&&{marginLeft:-8},...e.edge==="end"&&{marginRight:-8},...e.size==="small"&&{width:40,height:24,padding:7,[`& .${c.thumb}`]:{width:16,height:16},[`& .${c.switchBase}`]:{padding:4,[`&.${c.checked}`]:{transform:"translateX(16px)"}}}})),de=b(re,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${c.input}`]:t.input},o.color!=="default"&&t[`color${m(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${c.checked}`]:{transform:"translateX(20px)"},[`&.${c.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${c.checked} + .${c.track}`]:{opacity:.5},[`&.${c.disabled} + .${c.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${c.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>({"&:hover":{backgroundColor:M(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...t.color!=="default"&&{[`&.${c.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:M(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.disabled}`]:{color:e.palette.mode==="light"?Y(e.palette[t.color].main,.62):Z(e.palette[t.color].main,.55)}},[`&.${c.checked} + .${c.track}`]:{backgroundColor:e.palette[t.color].main}}})),ue=b("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),me=b("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),C=ce.component(r(function({allProps:t,props:o,classes:n,otherProps:l}){const d=g(()=>i(me,{get className(){return n.thumb},ownerState:t})),u=s(n,()=>({root:n.switchBase})),[,f]=E(l,["sx"]),h=s(()=>({icon:d(),checkedIcon:d()}),()=>({checkedIcon:o.checkedIcon,disabled:o.disabled,icon:o.icon,value:o.value}),f);return i(se,{get className(){return L(n.root,l.className)},get sx(){return l.sx},ownerState:t,get children(){return[i(de,s({type:"checkbox",ownerState:t},h,{classes:u})),i(ue,{get className(){return n.track},ownerState:t})]}})},"Switch"));function fe(e){return B("MuiFormControl",e)}r(fe,"getFormControlUtilityClasses");R("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const he=P()({name:"MuiFormControl",selfPropNames:["children","classes","color","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],propDefaults:({set:e})=>e({color:"primary",component:"div",disabled:!1,error:!1,fullWidth:!1,hiddenLabel:!1,margin:"none",required:!1,size:"medium",variant:"outlined"}),utilityClass:fe,slotClasses:e=>({root:["root",e.margin!=="none"&&`margin${m(e.margin)}`,e.fullWidth&&"fullWidth"]})}),ge=b("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>({...t.root,...t[`margin${m(e.margin)}`],...e.fullWidth&&t.fullWidth})})(({ownerState:e})=>({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",...e.margin==="normal"&&{marginTop:16,marginBottom:8},...e.margin==="dense"&&{marginTop:8,marginBottom:4},...e.fullWidth&&{width:"100%"}}));he.component(r(function({allProps:t,classes:o,otherProps:n,props:l}){const[d,u]=$(!1);w(()=>{l.disabled&&d()&&u(!1)});const f=g(()=>l.focused!==void 0&&!l.disabled?l.focused:d());let h;return i(O.Provider,{value:{get adornedStart(){return!1},setAdornedStart:()=>{},get margin(){return l.margin},get color(){return l.color},get disabled(){return l.disabled},get error(){return l.error},get filled(){return!1},get focused(){return f()},get fullWidth(){return l.fullWidth},get hiddenLabel(){return l.hiddenLabel},get size(){return l.size},onBlur:()=>{u(!1)},onEmpty:()=>{},onFilled:()=>{},onFocus:()=>{u(!0)},registerEffect:h,get required(){return l.required},get variant(){return l.variant}},get children(){return i(ge,s(n,{ownerState:t,get className(){return L(o.root,n.className)},get children(){return l.children}}))}})},"FormControl"));function be(e){return g(()=>e.states.reduce((t,o)=>(t[o]=e.props[o],e.muiFormControl&&typeof e.props[o]>"u"&&(t[o]=e.muiFormControl[o]),t),{}))}r(be,"formControlState");function Ce(e){return B("MuiFormControlLabel",e)}r(Ce,"getFormControlLabelUtilityClasses");const x=R("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),W=P()({name:"MuiFormControlLabel",propDefaults:({set:e})=>e({componentsProps:{},labelPlacement:"end"}),selfPropNames:["checked","classes","componentsProps","control","disableTypography","disabled","inputRef","label","labelPlacement","name","onChange","value"],autoCallUseClasses:!1,utilityClass:Ce,slotClasses:e=>({root:["root",!!e.disabled&&"disabled",`labelPlacement${m(e.labelPlacement)}`,!!e.error&&"error"],label:["label",!!e.disabled&&"disabled"]})}),pe=b("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${x.label}`]:t.label},t.root,t[`labelPlacement${m(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${x.disabled}`]:{cursor:"default"},...t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},...t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},...t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},[`& .${x.label}`]:{[`&.${x.disabled}`]:{color:e.palette.text.disabled}}})),ke=W.component(r(function({allProps:t,otherProps:o,props:n}){const l=A(),[d]=E(n,["checked","name","onChange","value","inputRef","disabled"]),[u,f]=$(n.disabled),h=s(d,{setDisabled:a=>f(a)}),z=be({props:n,muiFormControl:l,states:["error"]}),p=s(t,()=>({error:z().error}),()=>({disabled:u()})),k=W.useClasses(p),v=r(a=>a instanceof HTMLElement&&a.classList.contains(T.toString()),"isTypography"),N=g(()=>{const a=G(()=>n.label)();return v(a)||n.disableTypography?a:i(T,s({component:"span",get className(){return k.label}},()=>n.componentsProps.typography||{},{get children(){return n.label}}))});return i(V.Provider,{value:h,get children(){return i(pe,s(o,{get className(){return L(k.root,o.className)},ownerState:p,get children(){return[I(()=>n.control),I(()=>N())]}}))}})},"FormControlLabel"));function j(){return i(ke,{disabled:!0,get control(){return i(C,{defaultChecked:!0})},label:"Label"})}r(j,"Label");j.code=`import FormControlLabel from "@suid/material/FormControlLabel";
import Switch from "@suid/material/Switch";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const ve=J("<div></div>"),F={inputProps:{"aria-label":"Switch demo"}};function H(){return(()=>{const e=ve.cloneNode(!0);return S(e,i(C,s(F,{defaultChecked:!0})),null),S(e,i(C,F),null),S(e,i(C,s(F,{disabled:!0,defaultChecked:!0})),null),S(e,i(C,s(F,{disabled:!0})),null),e})()}r(H,"BasicSwitches");H.code=`import Switch from "@suid/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}
`;function X(){const[e,t]=$(!1);return i(C,{get checked(){return e()},onChange:(o,n)=>{t(n)},inputProps:{"aria-label":"controlled"}})}r(X,"ControlledSwitch");X.code=`import Switch from "@suid/material/Switch";
import { createSignal } from "solid-js";

export default function ControlledSwitch() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Switch
      checked={checked()}
      onChange={(event, value) => {
        setChecked(value);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
`;function Re(){return i(ee,{get name(){return C.name},docsName:"switches",examples:[H,X,j]})}r(Re,"SwitchPage");export{Re as default};
