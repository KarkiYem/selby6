(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{471:function(t,e,n){var content=n(628);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0205251c",content,!0,{sourceMap:!1})},627:function(t,e,n){"use strict";n(471)},628:function(t,e,n){var o=n(13)((function(i){return i[1]}));o.push([t.i,".header[data-v-403be3b8],.ppop[data-v-403be3b8]{display:none}.fle[data-v-403be3b8]{margin:2rem auto;width:60%}.h6[data-v-403be3b8]{font-size:16px;font-weight:700}.h6[data-v-403be3b8],.ptext[data-v-403be3b8]{margin:0;padding:0}.ptext[data-v-403be3b8]{font-size:12px;font-weight:400}.ppop[data-v-403be3b8]{display:block}.navi[data-v-403be3b8]{background-color:#fff;height:auto}.navii[data-v-403be3b8]{height:3.5rem;justify-content:space-between;margin:0 auto;padding-top:0;width:95%}.fle2[data-v-403be3b8],.navii[data-v-403be3b8]{align-items:center;display:flex}.fle2[data-v-403be3b8]{gap:5%}.img[data-v-403be3b8]{border-radius:50%;height:3rem;-o-object-fit:contain;object-fit:contain;width:3rem}.banner[data-v-403be3b8]{height:15rem;margin-top:1rem;overflow:hidden;width:100%}.bannerimg[data-v-403be3b8]{height:100%;-o-object-fit:fit;object-fit:fit;width:100%}@media screen and (max-width:1000px){.header[data-v-403be3b8]{display:block}.h6[data-v-403be3b8]{font-size:16px;font-weight:700}.h6[data-v-403be3b8],.ptext[data-v-403be3b8]{margin:0;padding:0}.ptext[data-v-403be3b8]{font-size:12px;font-weight:400}.ppop[data-v-403be3b8]{display:block}.navi[data-v-403be3b8]{background-color:#fff;height:auto}.navii[data-v-403be3b8]{align-items:center;display:flex;height:3.5rem;justify-content:space-between;margin:0 auto;padding-top:0;width:95%}.fle[data-v-403be3b8]{margin:0 auto 2rem;width:95%}.fle2[data-v-403be3b8]{align-items:center;display:flex;gap:5%}.img[data-v-403be3b8]{border-radius:50%;height:3rem;-o-object-fit:contain;object-fit:contain;width:3rem}.banner[data-v-403be3b8]{height:15rem;margin-top:1rem;overflow:hidden;width:100%}.bannerimg[data-v-403be3b8]{height:100%;-o-object-fit:fit;object-fit:fit;width:100%}}",""]),o.locals={},t.exports=o},870:function(t,e,n){"use strict";n.r(e);n(30);var o=n(7),r=(n(37),n(45)),c={layout:"default2",data:function(){return{name:"Notifications",path1:"",data:[]}},mounted:function(){this.getData()},methods:{seetime:function(t){var e=new Date,n=new Date(t),o=Math.floor((e-n)/1e3);if(o<60)return"".concat(o," second").concat(1!==o?"s":""," ago");var r=Math.floor(o/60);if(r<60)return"".concat(r," minute").concat(1!==r?"s":""," ago");var c=Math.floor(r/60);if(c<24)return"".concat(c," hour").concat(1!==c?"s":""," ago");var d=Math.floor(c/24);if(d<30)return"".concat(d," day").concat(1!==d?"s":""," ago");var l=Math.floor(d/30);if(l<12)return"".concat(l," month").concat(1!==l?"s":""," ago");var f=Math.floor(l/12);return"".concat(f," year").concat(1!==f?"s":""," ago")},bck:function(){history.back()},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.collection("notifications").getFullList({sort:"-created"});case 2:t.data=e.sent,console.log(t.data);case 4:case"end":return e.stop()}}),e)})))()}}},d=(n(627),n(9)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"ppop",staticStyle:{width:"100%",margin:"0 auto","padding-top":"0rem"}},[e("div",{staticClass:"navi"},[e("div",{staticClass:"navii"},[e("div",{staticStyle:{display:"flex","align-items":"center",color:"rgb(91 9 133)"},on:{click:function(e){return t.bck()}}},[e("mdicon",{staticStyle:{"font-size":"30px",color:"black"},attrs:{name:"arrow-left"}}),t._v(" "),e("h5",{staticStyle:{"margin-top":"10px","margin-left":"2rem","font-weight":"700"}},[t._v("\n              "+t._s(t.name)+"\n            ")])],1)])])])]),t._v(" "),t._l(t.data,(function(i,n){return e("div",{key:n,staticClass:"fle"},[e("div",{staticClass:"fle2"},[e("div",{staticClass:"left"},[e("img",{staticClass:"img",attrs:{src:i.user_img}})]),t._v(" "),e("div",{staticClass:"right"},[e("h6",{staticClass:"h6"},[t._v(t._s(i.title))]),t._v(" "),e("p",{staticClass:"ptext"},[t._v(t._s(t.seetime(i.date)))])])]),t._v(" "),e("div",{staticClass:"banner"},[e("img",{staticClass:"bannerimg",attrs:{src:i.notification}})])])}))],2)}),[],!1,null,"403be3b8",null);e.default=component.exports}}]);