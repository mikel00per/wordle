(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(e,t,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("5984cbd4",content,!0,{sourceMap:!1})},329:function(e,t,r){"use strict";r(324)},330:function(e,t,r){var n=r(27)(!1);n.push([e.i,".key[data-v-8de2c44c]{font-family:inherit;height:3rem;width:100%;max-width:3rem;display:flex;justify-content:center;align-items:center;flex:1 1 0%;background-color:var(--bg-keyboard);border:0;border-radius:4px;color:#003543;font-size:.875rem;line-height:1.25rem;font-weight:700;padding:.5rem;margin:0;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:color .3s linear,background-color .3s linear}.key--absent[data-v-8de2c44c]{background-color:#35495e;color:#fff}.key--present[data-v-8de2c44c]{background-color:#e5c94d;color:#fff}.key--correct[data-v-8de2c44c]{background-color:#41b883;color:#fff}.key--large[data-v-8de2c44c]{max-width:inherit;padding:.5rem 1.2rem}.key--colorblind.key--present[data-v-8de2c44c]{background-color:#85c0f9}.key--colorblind.key--correct[data-v-8de2c44c]{background-color:#f5793a}",""]),e.exports=n},333:function(e,t,r){"use strict";r.r(t);var n=r(3),o=r(0),c=r(5),l=o.a.extend({props:{value:{type:String,default:""},status:{type:String,default:""},size:{type:String,default:""},isColorBlindEnabled:{type:Boolean,default:!1}},computed:{hasValue:function(){return!!this.value},hasStatus:function(){return!!this.status},isSizeLarge:function(){return this.size===c.g.LARGE},keyClasses:function(){return Object(n.a)({key:!0,"key--large":this.isSizeLarge,"key--colorblind":this.isColorBlindEnabled},"key--".concat(this.status),this.hasStatus)}},methods:{handleClick:function(){this.$emit("clicked",this.value)}}}),d=(r(329),r(6)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{class:e.keyClasses,on:{click:e.handleClick}},[e._t("key-content"),e._v(" "),e.hasValue?[e._v(e._s(e.value))]:e._e()],2)}),[],!1,null,"8de2c44c",null);t.default=component.exports}}]);