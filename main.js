(()=>{"use strict";var t=function(t,e,r,n){e.textContent=r.length,function(t,e){return t.some((function(t){return t._id===e}))}(r,n)?t.classList.add("card__like-button_is-active"):t.classList.remove("card__like-button_is-active")},e=function(e,r,n,o,i,u){var c=n.content.cloneNode(!0),a=c.querySelector(".places__item"),l=c.querySelector(".card__title"),s=c.querySelector(".card__image"),p=c.querySelector(".card__like-button"),d=c.querySelector(".card__like-count"),f=c.querySelector(".card__delete-button");return a.dataset.id=e._id,l.textContent=e.name,s.src=e.link,s.alt=e.name,d.textContent=e.likes.length,t(p,d,e.likes,r),e.owner._id===r?f.addEventListener("click",(function(){return o(a)})):f.remove(),p.addEventListener("click",(function(){return i(p,d,a,r)})),e.owner._id===r?f.addEventListener("click",(function(){return o(a)})):f.remove(),s.addEventListener("click",(function(){return u(e.link,e.name)})),c},r=function(t){t.classList.add("popup_is-animated"),setTimeout((function(){t.classList.add("popup_is-opened")}),0),t.addEventListener("click",o),document.addEventListener("keydown",i)},n=function(t){t.classList.remove("popup_is-opened"),setTimeout((function(){t.classList.remove("popup_is-animated")}),600),t.removeEventListener("click",o),document.removeEventListener("keydown",i)},o=function(t){var e=t.target;e.classList.contains("popup_is-opened")?n(e):e.classList.contains("popup__close")&&n(e.closest(".popup_is-opened"))},i=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");n(e)}},u={authorization:"50207ec3-1fe4-40ba-a9bc-1d372b7c0f5f","Content-Type":"application/json"},c=function(t,e){return t.startsWith("https://")||t.startsWith("http://")||(t=new URL(t,"https://nomoreparties.co/v1/cohort-magistr-2/")),void 0===e&&(e={}),void 0===e.headers&&(e.headers=u),void 0===e.method&&(e.method="GET"),fetch(t,e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.error(t)}))};function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"},p=function(t,e,r){t.addEventListener("submit",(function(o){o.preventDefault();var i=t.querySelector(".popup__button");s(!0,i),r().finally((function(){return s(!1,i)})),void 0!==e&&n(e)}))},d=function(t,e){var r=e.inputSelector,n=e.submitButtonSelector,o=Array.from(t.querySelectorAll(r)),i=t.querySelector(n);o.forEach((function(r){y(t,r,e)})),m(o,i,e)},f=function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?y(t,e,r):_(t,e,e.validationMessage,r)},_=function(t,e,r,n){var o=n.inputErrorClass,i=n.errorClass,u=t.querySelector(".".concat(e.id,"_error"));e.classList.add(o),u.textContent=r,u.classList.add(i)},y=function(t,e,r){var n=r.inputErrorClass,o=r.errorClass,i=t.querySelector(".".concat(e.id,"_error"));e.classList.remove(n),i.classList.remove(o),i.textContent=""},m=function(t,e,r){var n=r.inactiveButtonClass;!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(n)):(e.disabled=!0,e.classList.add(n))};function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var S=document.querySelector("#card-template"),h=document.querySelector(".places__list"),b=document.querySelector(".profile__add-button"),q=document.querySelector(".popup_type_image"),L=document.querySelector(".popup__image"),E=document.querySelector(".popup__caption"),g=document.querySelector(".profile__info"),k=g.querySelector(".profile__title"),C=g.querySelector(".profile__description"),A=g.querySelector(".profile__edit-button"),x=document.querySelector(".profile__image"),w=document.querySelector(".popup_type_edit"),j=w.querySelector(".popup__form"),O=j.querySelector("#popup__input_type_name"),T=j.querySelector("#popup__input_type_description"),I=document.querySelector(".popup_type_avatar"),P=I.querySelector(".popup__form"),B=P.querySelector("#popup__input_type_avatar-url"),M=document.querySelector(".popup_type_new-card"),D=M.querySelector(".popup__form"),N=D.querySelector("#popup__input_type_card-name"),U=D.querySelector("#popup__input_type_url"),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__help-text_error_visible"},H=function(t,e){L.src=t,L.alt=e,E.textContent=e,r(q)},V=function(t){var e;(e=t.dataset.id,c("cards/".concat(e),{method:"DELETE"})).then((function(e){t.remove()}))},W=function(e,r,n,o){var i,u=function(n){t(e,r,n.likes,o)};e.classList.contains("card__like-button_is-active")?(i=n.dataset.id,c("cards/likes/".concat(i),{method:"DELETE"})).then((function(t){u(t)})):function(t){return c("cards/likes/".concat(t),{method:"PUT"})}(n.dataset.id).then((function(t){u(t)}))};Promise.all([c("users/me"),c("cards")]).then((function(t){var r,n,o=(n=2,function(t){if(Array.isArray(t))return t}(r=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(r,n)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1],c=i._id;return function(t){k.textContent=t.name,C.textContent=t.about,x.style="background-image: url('".concat(t.avatar,"')")}(i),function(t,r){t.forEach((function(t){h.append(e(t,r,S,V,W,H))}))}(u,c),{profileData:i,cards:u,userId:c}})).catch((function(t){return console.error(t)})).then((function(t){var n,o,i,u,l,s,_,y,v,q=t.userId;b.addEventListener("click",(function(){d(D,J),r(M)})),A.addEventListener("click",(function(){d(j,J),r(w),O.value=k.textContent,T.value=C.textContent})),x.addEventListener("click",(function(){d(j,J),r(I)})),n=j,o=[C,T],i=w,u=a([k,O],2),l=u[0],s=u[1],_=a(o,2),y=_[0],v=_[1],p(n,i,(function(){return(t=s.value,e=v.value,c("users/me",{method:"PATCH",body:JSON.stringify({name:t,about:e})})).then((function(t){l.textContent=t.name,y.textContent=t.about}));var t,e})),function(t,e,r,n){p(t,n,(function(){return(t=e.value,c("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:t})})).then((function(t){r.style="background-image: url('".concat(t.avatar,"')")}));var t}))}(P,B,x,I),function(t,r,n,o,i,u,a,l,s,d){p(t,u,(function(){return(u=r.value,p=n.value,c("cards",{method:"POST",body:JSON.stringify({name:u,link:p})})).then((function(r){i.prepend(e(r,d,o,a,l,s)),t.reset()}));var u,p}))}(D,N,U,S,h,M,V,W,H,q),function(t){var e=t.formSelector;Array.from(document.querySelectorAll(e)).forEach((function(e){return function(t,e){var r=e.inputSelector,n=e.submitButtonSelector,o=Array.from(t.querySelectorAll(r)),i=t.querySelector(n);o.forEach((function(r){r.addEventListener("input",(function(){f(t,r,e),m(o,i,e)}))}))}(e,t)}))}(J)}))})();