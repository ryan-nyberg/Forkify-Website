!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequire3a11;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequire3a11=a);var s=a.register;s("iE7OH",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e});var n,i=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)i.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,i={};n=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),a("iE7OH").register(a("aNJCr").getBundleURL("4ko55"),JSON.parse('["4ko55","index.1d30a188.js","hOerA","icons.c14567a0.svg"]'));let o="https://forkify-api.herokuapp.com/api/v2/recipes/",c="46666bde-8bf1-4630-a29e-a34ea79030ce",l=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},d={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},u=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},p=async function(e){try{let t=await l(`${o}${e}?key=${c}`);d.recipe=u(t),d.bookmarks.some(t=>t.id===e)?d.recipe.bookmarked=!0:d.recipe.bookmarked=!1,console.log(d.recipe)}catch(e){throw console.error(`${e} X`),e}},g=async function(e){try{d.search.query=e;let t=await l(`${o}?search=${e}&key=${c}`);console.log(t),d.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),d.search.page=1}catch(e){throw console.error(`${e} X`),e}},h=function(e=d.search.page){d.search.page=e;let t=(e-1)*d.search.resultsPerPage,r=e*d.search.resultsPerPage;return d.search.results.slice(t,r)},_=function(e){d.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/d.recipe.servings}),d.recipe.servings=e},f=function(){localStorage.setItem("bookmarks",JSON.stringify(d.bookmarks))},v=function(e){d.bookmarks.push(e),e.id===d.recipe.id&&(d.recipe.bookmarked=!0),f()},m=function(e){let t=d.bookmarks.findIndex(t=>t.id===e);d.bookmarks.splice(t,1),e===d.recipe.id&&(d.recipe.bookmarked=!1),f()};!function(){let e=localStorage.getItem("bookmarks");e&&(d.bookmarks=JSON.parse(e))}();let b=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await l(`${o}?key=${c}`,r);d.recipe=u(n),v(d.recipe)}catch(e){throw e}};var k={};k=a("aNJCr").getBundleURL("4ko55")+"icons.c14567a0.svg";class y{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
              <div class="spinner">
                <svg>
                  <use href="${t(k)}#icon-loader"></use>
                </svg>
              </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
        <div class="error">
            <div>
              <svg>
                <use href="${t(k)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
        <div class="message">
            <div>
              <svg>
                <use href="${t(k)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var $={};function w(e,t,r,n,i){var a,s,o;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let l=0,d=e,u=t;for(;l<=c.length;)d%c[l]==0&&u%c[l]==0?(c[l],d/=c[l],u/=c[l]):l++;return a=u,s=d,o=r,1===a&&1===s?(o=`${n}${(parseInt(o)+1).toString()}`,`${o}`):0===s?`${n}${o}`:"0"==o?`${n}${s}/${a}`:`${n}${o} ${s}/${a}`}$=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let s=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2)){var o,c;return o=r,c=t,w(parseInt(o,10),Math.pow(10,o.length),a,c,!1)}{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),o=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return w(Math.round((o*c-o)*Math.pow(10,a)),(c-1)*s,n,i,!0)}(r,n,e,a,t)}};class E extends y{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${t(k)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${t(k)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${t(k)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings"data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${t(k)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${t(k)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${t(k)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${t(k)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
      `}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${t(k)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?t($)(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
            pasta
          </div>
        </li>
        `}}var S=new E;class H{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var M=new H,q=new class extends y{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
         <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>            
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                <use href="${t(k)}#icon-user"></use>
                </svg>
              </div>
            </div>
            </a>
          </li>
        `}};class x extends y{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>q.render(e,!1)).join("")}}var L=new x;class P extends y{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&r>1?`
            <button data-goto="${e+1}"class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                        <use href="${t(k)}#icon-arrow-right"></use>
                </svg>
            </button>
            `:e===r&&r>1?`
            <button data-goto="${e-1}"class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${t(k)}#icon-arrow-left"></use>
                    </svg>
                <span>Page ${e-1}</span>
            </button>
            `:this._data.page<r?`
            <button data-goto="${e-1}"class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${t(k)}#icon-arrow-left"></use>
                    </svg>
                <span>Page ${e-1}</span>
            </button>
           <button data-goto="${e+1}"class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                        <use href="${t(k)}#icon-arrow-right"></use>
                </svg>
            </button>
            `:""}}var T=new P;class A extends y{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>q.render(e,!1)).join("")}}var j=new A;class N extends y{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}generateMarkup(){}}var O=new N;let R=async function(){try{let e=window.location.hash.slice(1);if(!e)return;S.renderSpinner(),L.update(h()),j.update(d.bookmarks),await p(e),S.render(d.recipe)}catch(e){S.renderError(),console.error(e)}},U=async function(){try{L.renderSpinner();let e=M.getQuery();if(!e)return;await g(e),L.render(h()),T.render(d.search)}catch(e){console.log(e)}},C=async function(e){try{O.renderSpinner(),await b(e),console.log(d.recipe),S.render(d.recipe),O.renderMessage(),j.render(d.bookmarks),window.history.pushState(null,"",`#${d.recipe.id}`),setTimeout(function(){O.toggleWindow()},2500)}catch(e){console.log("XXX",e),O.renderError(e.message)}};j.addHandlerRender(function(){j.render(d.bookmarks)}),S.addHandlerRender(R),S.addHandlerUpdateServings(function(e){_(e),S.update(d.recipe)}),S.addHandlerAddBookmark(function(){d.recipe.bookmarked?m(d.recipe.id):v(d.recipe),S.update(d.recipe),j.render(d.bookmarks)}),M.addHandlerSearch(U),T.addHandlerClick(function(e){L.render(h(e)),T.render(d.search)}),O.addHandlerUpload(C)}();
//# sourceMappingURL=index.1d30a188.js.map
