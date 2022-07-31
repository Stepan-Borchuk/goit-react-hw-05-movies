"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{4985:function(n,e,t){t.d(e,{O:function(){return x}});var r,o,c,i,a=t(168),u=t(501),s=t(6444),p=(0,s.ZP)(u.rU)(r||(r=(0,a.Z)(["\n  margin: ","px;\n  padding-left: ","px;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent})),h=s.ZP.img(o||(o=(0,a.Z)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),f=s.ZP.li(c||(c=(0,a.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),m=t(184),l=function(n){var e=n.id,t=n.title,r=n.path,o="".concat("https://image.tmdb.org/t/p/w500").concat(r);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{children:(0,m.jsxs)(p,{to:"/movies/".concat(e),children:[(0,m.jsx)("h3",{children:t}),(0,m.jsx)(h,{src:r?o:"https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-fashion-movie-film-theme-background-poster-image_196478.jpg",alt:t})]})})})},d=s.ZP.ul(i||(i=(0,a.Z)(["\n  padding-left: ","px;\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: ","px;\n\n  margin-bottom: ","px;\n\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]})),x=function(n){var e=n.movies;return(0,m.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.original_title,r=n.poster_path;return(0,m.jsx)(l,{title:t,id:e,path:r},e)}))})}},7158:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,o,c,i=t(5861),a=t(885),u=t(7757),s=t.n(u),p=t(501),h=t(6066),f=t(2791),m=t(4985),l=t(168),d=t(6444),x=t(5705),g=(0,d.ZP)(x.l0)(r||(r=(0,l.Z)(["\n  margin-left: ","px;\n"])),(function(n){return n.theme.space[3]})),b=(0,d.ZP)(x.gN)(o||(o=(0,l.Z)(["\n  margin-right: ","px;\n  width: ","px;\n  height: ","px;\n  border-radius: ",";\n  :hover,\n  :focus {\n    border: "," ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[8]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.accent})),v=d.ZP.button(c||(c=(0,l.Z)(["\n  height: ","px;\n  padding: ","px;\n  border-radius: ",";\n  :hover,\n  :focus {\n    border: "," ",";\n    background-color: ",";\n    font-weight: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.bold})),w=t(652),Z=t(184),j=function(){var n,e=(0,f.useState)([]),t=(0,a.Z)(e,2),r=t[0],o=t[1],c=(0,p.lr)(),u=(0,a.Z)(c,2),l=u[0],d=u[1],j=null!==(n=l.get("query"))&&void 0!==n?n:"";return(0,f.useEffect)((function(){function n(){return n=(0,i.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,w.v)("/search/movie?query=".concat(e));case 3:if((t=n.sent).results.length){n.next=6;break}throw new Error("No results found");case 6:o(t.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),h.Am.error("No results found",{duration:3e3});case 13:case"end":return n.stop()}}),n,null,[[0,9]])}))),n.apply(this,arguments)}""!==j&&function(e){n.apply(this,arguments)}(j)}),[j]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(x.J9,{initialValues:{query:""},onSubmit:function(n,e){var t=n.query,r=e.resetForm;d({query:t}),r()},children:(0,Z.jsxs)(g,{children:[(0,Z.jsx)(b,{name:"query",type:"text",placeholder:"Search movies"}),(0,Z.jsx)(v,{type:"submit",children:"Search"})]})}),Object.keys(r).length>0&&(0,Z.jsx)(m.O,{movies:r})]})}},652:function(n,e,t){t.d(e,{v:function(){return u}});var r=t(5861),o=t(7757),c=t.n(o),i=t(4569),a=t.n(i);a().defaults.baseURL="https://api.themoviedb.org/3";a().defaults.params={api_key:"fb3b1d607bdb2048b1877f4514177cf6"};var u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a().get(e);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=158.b2a91e45.chunk.js.map