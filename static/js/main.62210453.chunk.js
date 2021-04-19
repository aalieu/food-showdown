(this["webpackJsonpfood-world-cup"]=this["webpackJsonpfood-world-cup"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t.n(r),s=t(4),c=t.n(s),o=(t(9),t(2)),a=t(0),d=function(){return Object(a.jsx)("div",{className:"loader"})},l=function(e){var n=e.onZipCodeChange,t=e.onZipCodeSubmit,r=e.handleKeyPress,i=e.isLoading;return Object(a.jsxs)("header",{children:[Object(a.jsx)("a",{href:"https://aalieu.github.io/food-showdown/",children:"Food Showdown \ud83c\udf7d\ufe0f"}),Object(a.jsx)("input",{type:"text",placeholder:"Enter Zip Code",onChange:n,onKeyDown:r}),Object(a.jsx)("button",{onClick:t,children:"Submit"}),i?Object(a.jsx)(d,{}):null]})},u=function(e){var n=e.id,t=e.name,r=e.image,i=e.rating,s=e.url,c=e.determineWinner,o=e.businessFaceOff,d=e.round;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"cardImage",src:r,alt:"restaurant"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"cardTitle",children:t}),Object(a.jsxs)("p",{className:"cardRating",children:["Rating: ",i,"/5"]}),Object(a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:s,className:"cardLink",children:s.split("?")[0]}),Object(a.jsx)("div",{children:"WINNER"!==d?Object(a.jsx)("button",{className:"likeBtn",onClick:function(){return c(n,o,d)},children:"\u2764\ufe0f"}):null})]})]})},h=function(e){var n=e.businesses,t=e.determineWinner,r=e.round,i=n.slice(0,2);return Object(a.jsxs)("div",{className:"cardList",children:["WINNER"===r?Object(a.jsx)("h1",{children:"WINNER!!!"}):"FINALS"===r?Object(a.jsxs)("h1",{children:[r,": SELECT YOUR WINNER"]}):Object(a.jsxs)("h1",{children:[r,": Select ",n.length/2," more winner(s)!"]}),n[1]?i.map((function(e,s){return Object(a.jsx)(u,{id:n[s].id,name:n[s].name,image:n[s].image_url,url:n[s].url,rating:n[s].rating,determineWinner:t,businessFaceOff:i,round:r},s)})):Object(a.jsx)(u,{id:n[0].id,name:n[0].name,image:n[0].image_url,url:n[0].url,rating:n[0].rating,determineWinner:t,businessFaceOff:i,round:r},n[0].id)]})},j=function(e){var n=e.businesses,t=e.determineWinner,r=e.round;return Object(a.jsx)("div",{children:Object(a.jsx)(h,{businesses:n,determineWinner:t,round:r})})},b=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("h2",{children:"What is Food Showdown about?"}),Object(a.jsx)("p",{children:'Everyone has had those moments where they think to themselves \u2013 "Hmm, what should I eat today?"'}),Object(a.jsxs)("p",{children:["Then they go on Yelp and search for food within their area. Everything looks good... But at the same time ",Object(a.jsx)("em",{children:"nothing"})," looks good. Food Showdown was created to help those who are indecisive take control of their lives and pick what they're really feeling like eating."]}),Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"May the best food win."})}),Object(a.jsx)("h2",{children:"Tell Me More"}),Object(a.jsx)("p",{children:"Food Showdown utilizes the Yelp Fusion API to randomly select 16 businesses located near the zip code provided. From there, two businesses will be pit against each other until only one more business remains."}),Object(a.jsx)("p",{children:"Site is still a work in progress and thus some bugs do exist:"}),Object(a.jsx)("li",{children:"Works in mobile, but design is not fully responsive"}),Object(a.jsx)("p",{children:"*Only shows businesses currently open at time of search"})]})})},m=(t(11),[]),f=function(){var e=Object(r.useState)(""),n=Object(o.a)(e,2),t=n[0],i=n[1],s=Object(r.useState)(!1),c=Object(o.a)(s,2),d=c[0],u=c[1],h=Object(r.useState)([]),f=Object(o.a)(h,2),O=f[0],g=f[1],p=Object(r.useState)([]),x=Object(o.a)(p,2),N=x[0],S=x[1],E=Object(r.useState)("SWEET 16"),v=Object(o.a)(E,2),w=v[0],I=v[1],F=Object(r.useRef)();Object(r.useEffect)((function(){F.current?O.length<1&&"SWEET 16"===w?(m=[],g(N),I("QUARTERFINALS")):O.length<1&&"QUARTERFINALS"===w?(m=[],g(N),I("SEMIFINALS")):O.length<1&&"SEMIFINALS"===w?(m=[],g(N),I("FINALS")):O.length<2&&"FINALS"===w&&(m=[],g(N),I("WINNER")):F.current=!0}),[O,w,N]);var A=function(){u((function(e){return!e}))},W=function(){A(),I("SWEET 16");var e="Bearer ".concat("3mXJisot7PHD5BZmI08JKBC1EpdF64krK_Ar-N9LsJg6Tl5klAumo2SMiHwVArjdF9z4j6tu5x35mQZmoStY5I8nWIeciHUwEaNOfDlb0RzCfAwVWdpLDYCG2-hLYHYx"),n="".concat("https://dry-anchorage-26620.herokuapp.com/"),r=Math.floor(26*Math.random());!function(e){return/^\d{5}[-\s]?(?:\d{4})?$/gm.test(e)}(t)?alert("Not a valid zip code."):fetch("".concat(n,"https://api.yelp.com/v3/businesses/search?limit=48&offset=").concat(r,"&location=").concat(t,"&open_now=true&term=food"),{method:"get",headers:{Authorization:e}}).then((function(e){return e.json()})).then((function(e){return L(e.businesses,3)})).then((function(e){return g(e)})).then((function(){return A()}))},L=function(e,n){for(var t=e.length/n,r=e.length-1;r>0;r--){var i=Math.floor(Math.random()*(r+1)),s=[e[i],e[r]];e[r]=s[0],e[i]=s[1]}return e.splice(0,t)},k=function(e){return O.filter((function(n){return!e.includes(n.id)}))},y=function(e,n,t){var r=O.filter((function(n){return n.id===e})),i=n.map((function(e){return e.id}));switch(m.push(r[0]),t){case"SWEET 16":case"QUARTERFINALS":case"SEMIFINALS":O.length>3?g(k(i)):O.length<3&&(g(k(i)),S(L(m,1)));break;case"FINALS":g(k(i)),S(m);break;case"WINNER":g(N);break;default:return null}};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{onZipCodeChange:function(e){return i(e.target.value)},onZipCodeSubmit:W,handleKeyPress:function(e){13===e.keyCode&&W()},isLoading:d}),O[0]||"SWEET 16"!==w?O[1]&&"SWEET 16"===w||O[1]&&"QUARTERFINALS"===w||O[1]&&"SEMIFINALS"===w||O[1]&&"FINALS"===w||O[0]&&"WINNER"===w?Object(a.jsx)(j,{businesses:O,determineWinner:y,round:w}):void 0:Object(a.jsx)(b,{})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),s(e),c(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),O()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.62210453.chunk.js.map