(()=>{"use strict";console.log("dom file");var e,m=document.querySelector("body");m.style.background="peachpuff",(e=document.createElement("h1")).textContent="Hello world from the dom file",m.appendChild(e);var n=[{name:"mario",premium:!0},{name:"jade",premium:!1},{name:"wendy",premium:!0},{name:"marcus",premium:!0},{name:"janet",premium:!1}],r=function(e){return e.filter((function(e){return e.premium}))}(n);console.log(n,r)})();