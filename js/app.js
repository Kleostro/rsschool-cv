"use strict";gsap.timeline().from(".hero__title",{duration:.6,x:300,opacity:0,scale:.6}).from(".hero__left",{duration:.7,x:-100,opacity:0,scale:.6}).from(".hero__descr",{duration:.6,x:300,opacity:0,scale:.6},"-=.5").from(".about-me__container",{duration:.8,opacity:0,scale:0,height:0},"-=.1").from(".contacts",{duration:.7,opacity:0,scale:.2},"-=.7").from(".summary",{duration:.7,opacity:0,scale:.2},"-=.7").from(".skills",{duration:.7,opacity:0,scale:.2},"-=.5").from(".code",{duration:.7,opacity:0,scale:.2},"-=.5").from(".courses",{duration:.7,opacity:0,scale:.2},"-=.5").from(".projects",{duration:.7,opacity:0,scale:.2},"-=.5").from(".education",{duration:.7,opacity:0,scale:.2},"-=.5").from(".english",{duration:.7,opacity:0,scale:.2},"-=.5").from(".footer",{duration:.7,opacity:0,scale:.2},"-=.5");var e=document.querySelector(".burger-block"),o=document.querySelector(".burger"),t=document.querySelector(".nav"),c=t.querySelectorAll(".nav__list-link");e.addEventListener("click",(function(){e.classList.toggle("burger--active"),t.classList.toggle("nav--active"),o.classList.toggle("burger__visible--active"),document.body.classList.toggle("stop-scroll")})),c.forEach((function(c){c.addEventListener("click",(function(){e.classList.remove("burger--active"),o.classList.remove("burger__visible--active"),t.classList.remove("nav--active"),document.body.classList.remove("stop-scroll")}))}));