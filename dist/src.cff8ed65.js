parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FaWJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.products=void 0;var i={product_1:{name:"Продукт 1",price:"1200",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi. ",img:"./img/bravo-10.png"},product_2:{name:"Продукт 2",price:"1400",text:"Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ",img:"./img/bravo-20.png"},product_3:{name:"Продукт 3",price:"1600",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ",img:"./img/bravo-30.png"}};exports.products=i;
},{}],"FOZT":[function(require,module,exports) {
"use strict";function c(c){return c.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}function t(t,a){Object.keys(t).forEach(function(d){var r='\n     <div class="col-lg-4 col-sm-12 col-md-6 mb-3">\n       <div class="product-card js-product-card" data-id="'.concat(d,'">\n         <div class="product-card__body">\n          <h5 class="product-card__title">').concat(t[d].name,'</h5>\n          <img src="').concat(t[d].img,'" alt="').concat(t[d].name,'" class="product-card__img" />\n          <p class="product-card__text">').concat(t[d].text,'</p>\n          <p class="product-card__price">').concat(c(t[d].price),' руб.</p>\n          <a href="#" class="product-card__btn add-to-cart-btn"><span>Добавить в корзину</span></a>\n         </div>\n       </div>\n     </div>\n    ');a.insertAdjacentHTML("beforeend",r)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.prettifyPrice=c,exports.productsToHtml=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=require("./products"),e=require("./utils"),r=document.querySelector(".js-cart-price"),c=document.querySelector(".js-catalog");(0,e.productsToHtml)(t.products,c);var i=0;function s(t){i+=t,r.innerHTML=(0,e.prettifyPrice)(i)}c.addEventListener("click",function(e){e.preventDefault();var r=e.target.closest(".add-to-cart-btn");if(r){var c=r.closest(".js-product-card").getAttribute("data-id");s(+t.products[c].price),r.classList.add("disabled-btn"),r.firstChild.innerHTML="Добавлено",r.style.pointerEvents="none"}});
},{"./products":"FaWJ","./utils":"FOZT"}]},{},["Focm"], null)
//# sourceMappingURL=/src.cff8ed65.js.map