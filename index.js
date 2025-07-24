import{S as U,N as F,K as G,i as he,a as ke,P as re}from"./assets/vendor-CT7EhRfQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();new U(".hero-swiper",{loop:!1,speed:600,grabCursor:!0,slidesPerView:1,spaceBetween:20,modules:[F,G],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{speed:700},1440:{speed:800}},on:{init:function(){X(this)},slideChange:function(){X(this)}}});function X(e){const t=document.querySelector(".swiper-btn-prev"),o=document.querySelector(".swiper-btn-next");e.isBeginning?t.classList.add("button-dis"):t.classList.remove("button-dis"),e.isEnd?o.classList.add("button-dis"):o.classList.remove("button-dis")}const Le=document.querySelectorAll(".hero-btn");Le.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".books");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const s={BASE_URL:"https://books-backend.p.goit.global",END_CATEGORIES:"/books/category-list",END_TOP_BOOKS:"/books/top-books",END_CATEGORIE_ID:"/books/category?category=",END_BOOK_ID:"/books/",API_ERROR:"ApiError",NO_BOOKS:"NoBooks",ALL_CATEGORIES:"All categories",BOOK_LIST:"bookList",BOOK_CARD_LIST:"bookCardList",currentCategory:"",itemsPerView:24,viewedBooks:0,itemsToAdd:4,body:document.body,mobile_menu:document.querySelector(".modal-menu"),cart_products:document.querySelector(".cart-products"),cart_modal:document.querySelector("#cart-modal"),cart_close:document.querySelector("#cart-close-btn"),cart_buy:document.querySelector(".cart-buy-btn"),main_loader:document.querySelector(".loader"),btn_loader:document.querySelector(".btn-loader"),scr_btn_burger_close:"ico-sprite.svg#icon-x",scr_btn_burger_normal:"ico-sprite.svg#icon-menu-alt-right"};function Q(e){const t=c.count(e)||0,o=document.querySelectorAll("[data-cart-count]");for(const n of o)n.textContent=t}const c={add(e,t){localStorage.setItem(e,JSON.stringify(t))},get(e){return JSON.parse(localStorage.getItem(e))||[]},addToCard(e,t,o,n=1,r=null){const a=this.get(e),i=a.findIndex(d=>d.id===t);if(i===-1)a.push({id:t,price:o,qty:n});else{const d=a[i];d.qty=n}localStorage.setItem(e,JSON.stringify(a))},removeItemFromStorage(e,t){const n=this.get(e).filter(r=>r.id!==t);localStorage.setItem(e,JSON.stringify(n))},setTotalCard(e){const t=this.get(s.BOOK_CARD_LIST);let o=0;t.length&&(o=t.reduce((n,r)=>n+r.price*r.qty,0)),console.log(o),e.textContent=`${o.toFixed(2)} $`},count(e){return this.get(e).length},countItems(e){return this.get(e).reduce((o,n)=>o+Number(n.qty),0)},getItem(e,t){return this.get(e).find(n=>n.id===t)},isInCardList(e,t){return this.get(e).find(o=>o.id===t)!==void 0},setCountTo(e,t){e.textContent=this.count(t)||0}};function B(e){e.innerHTML=""}function u(e,t){e.classList.remove(t)}function f(e,t){e.classList.add(t)}function b(e,t){e.classList.toggle(t)}function ae(){window.scrollTo({top:0,behavior:"smooth"})}async function I(e,t,o,n=!1){n&&B(e),e.insertAdjacentHTML("beforeend",o(t))}function ie(e){return e.map(({_id:o,list_name:n,author:r,price:a,title:i,book_image:d,book_image_width:l,book_image_height:m})=>`<li class="books-data-itm" data-id="${o}">
          <div class="books-data-img-container">
            <img
              src="${d}"
              alt="${i}"
              class="books-data-img"
            />
          </div>
          <div class="books-data-info">
						<div class="books-data-texts">
							<h3 class="books-data-title">${i}</h3>
							<p class="books-data-author">${r}</p>
						</div>
						<p class="books-data-price">$${a}</p>
					</div>
          <button type="button" class="secondary-button books-data-button">Learn More</button>
        </li>`).join("")}function Se(e){const t=e.filter(o=>o.list_name.trim()!=="").map(({list_name:o})=>`<li class="b-categories-itm" data-category="${o}">
          	<p class="b-categories-itm-text">${o}</p>
        	</li>`).join("");return`<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm-text">${s.ALL_CATEGORIES}</p>
					</li> ${t}`}function _e({_id:e,list_name:t,author:o,book_image:n,description:r,price:a,title:i}){let d=r.trim()!==""?r:i;return`
		<img id="book-image" src="${n}" alt="${i}" class="modal-card-image" />
		<div class="modal-card-right">
			<div class="modal-card-info">
				<h2 id="book-title" class="modal-card-title">${i}</h2>
				<p id="book-author" class="modal-card-author">${o}</p>
				<p id="book-price" class="modal-card-price">$${a}</p>
			</div>
			<form id="book-form" class="modal-card-form">
				<div class="modal-card-quantity">
					<button id="decrease-quantity" type="button">-</button>
					<input id="book-quantity" type="number" min="1" value="1" />
					<button id="increase-quantity" type="button">+</button>
				</div>
				<div class="modal-card-buttons">
					<button
						type="button"
						id="add-to-cart"
						class="modal-card-btn main-button"
					>
					
						Add to Cart
					</button>
					<button type="submit" class="modal-card-btn secondary-button">
						Buy Now
					</button>
				</div>
			</form>
			<div class="accordion-container">
				<div class="ac">
					<h2 class="ac-header">
						<button type="button" class="ac-trigger">
							Details
							<svg class="accordion-icon" width="16" height="16">
								<use href="ico-sprite.svg#icon-chevron-down"></use>
							</svg>
						</button>
					</h2>
					<div class="ac-panel">
						<p id="book-details">${d}</p>
					</div>
				</div>
				<div class="ac">
					<h2 class="ac-header">
						<button type="button" class="ac-trigger">
							Shipping
							<svg class="accordion-icon" width="16" height="16">
								<use href="ico-sprite.svg#icon-chevron-down"></use>
							</svg>
						</button>
					</h2>
					<div class="ac-panel">
						<p id="book-shipping">
							We ship across the United States within 2–5 business days. All
							orders are processed through USPS or a reliable courier service.
							Enjoy free standard shipping on orders over $50.
						</p>
					</div>
				</div>
				<div class="ac">
					<h2 class="ac-header">
						<button type="button" class="ac-trigger">
							Returns
							<svg class="accordion-icon" width="16" height="16">
								<use href="ico-sprite.svg#icon-chevron-down"></use>
							</svg>
						</button>
					</h2>
					<div class="ac-panel">
						<p id="book-returns">
							You can return an item within 14 days of receiving your order,
							provided it hasn’t been used and is in its original condition.
							To start a return, please contact our support team — we’ll guide
							you through the process quickly and hassle-free.
						</p>
					</div>
				</div>
			</div>
		</div>`}function we(e){const t=c.get(s.BOOK_CARD_LIST);return e.map(({_id:n,list_name:r,author:a,price:i,title:d,book_image:l})=>{const m=t.find($=>$.id===n),p=m?m.qty:1;return`<li class="cart-item" data-id="${n}">
							<div class="cart-item-wrapper">
								<div class="cart-item-thumb">
									<img src="${l}" alt="${d}" class="cart-item-img" />
								</div>
								<div class="cart-item-info">
									<h3 class="cart-item-title">${d}</h3>
									<p class="cart-item-author">${a}</p>
								</div>
							</div>
								<div class="cart-item-meta">
									<span class="cart-item-price">Price: $${i}</span>
									<span class="cart-item-qty"> Q-ty: ${p}</span>
									<span class="cart-item-total">Total: $${(i*p).toFixed(2)}</span>
									
								</div>
								<button class="cart-item-btn secondary-button">remove from cart</button>

						</li>`}).join("")}function E(e,t,o="green"){setTimeout(()=>{he.success({title:t,message:e,color:o,position:"topRight",class:"custom-toast"})},300)}function T(e){u(e,"hidden")}function S(e){f(e,"hidden")}async function x(e){var t;try{return await ke.get(e)}catch(o){const n=((t=o.response)==null?void 0:t.status)??null;throw new H({message:`API error: ${o.message}`,name:s.API_ERROR,statusCode:n,error:o})}}class H extends Error{constructor({message:t,secondaryMessage:o="",name:n="CustomError",error:r=null,statusCode:a=null}){super(t),this.name=n,this.secondaryMessage=o,this.statusCode=a,this.originalError=r}}const _=document.querySelector("#modal-backdrop"),K=_.querySelector(".modal"),y=_.querySelector(".modal-card");function Ee(e,t,o){t&&o&&e&&(t.addEventListener("click",()=>{let n=parseInt(e.value,10);!isNaN(n)&&n>1&&(e.value=n-1)}),o.addEventListener("click",()=>{let n=parseInt(e.value,10);const r=parseInt(e.dataset.max,10);!isNaN(n)&&!isNaN(r)&&n<r&&(e.value=n+1)}))}function Z(){_.addEventListener("click",e=>{(e.target===_||e.target.closest(".modal-close"))&&A()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&A()})}async function Ce(e){var t;try{B(y),b(_,"is-hidden"),b(s.body,"locked"),T(s.btn_loader);const o=`${s.BASE_URL}${s.END_BOOK_ID}${e}`,n=await x(o);await new Promise(m=>setTimeout(m,400)),S(s.btn_loader),await I(y,n.data,_e,!0),Ee(y.querySelector("#book-quantity"),y.querySelector("#decrease-quantity"),y.querySelector("#increase-quantity"));const r=y.querySelector("#book-quantity"),a=((t=n==null?void 0:n.data)==null?void 0:t.quantity)||100;r&&(r.dataset.max=a,r.value=1);const i=K.querySelector("#book-form");i&&i.addEventListener("submit",m=>{m.preventDefault(),m.currentTarget.blur(),E("Good choise","Thanks for your purchase!"),c.removeItemFromStorage(e),A()});const d=K.querySelector("#add-to-cart");d&&d.addEventListener("click",m=>{m.currentTarget.blur(),Oe(r.value,n.data),A()}),Z();const l=y.querySelector(".accordion-container");l&&l.querySelectorAll(".ac").forEach(p=>{const $=p.querySelector(".ac-trigger"),C=p.querySelector(".ac-panel");!$||!C||($.addEventListener("click",()=>{p.classList.contains("is-active")?(C.style.height="0px",p.classList.remove("is-active")):(p.classList.add("is-active"),C.style.height=C.scrollHeight+"px")}),C.style.height="0px")})}catch(o){Z(),S(s.btn_loader),B(y),y.innerHTML=`Sorry!!! Book unavailable!! <br/> ID = ${e} <br/>${o.message}`,f(K,"modal-error")}}function Oe(e,t){c.addToCard(s.BOOK_CARD_LIST,t._id,t.price,e),E(`In cart ${e} books ${t.title}`,"Cart")}function A(){_.classList.add("is-hidden"),u(s.body,"locked"),Q(s.BOOK_CARD_LIST)}const D=document.querySelector(".books-data-list"),v=document.querySelector(".b-categories-list"),w=document.querySelector(".categories-dropdown"),g=document.querySelector(".books-show-more"),ce=document.querySelector(".not-found"),Be=document.querySelector(".not-found-description"),ee=document.querySelector(".not-found-title"),qe=document.querySelector(".b-categories-_text");async function Ie(){try{const e=`${s.BASE_URL}${s.END_CATEGORIES}`,t=await x(e);return I(v,t.data,Se,!0),!0}catch(e){return ue(e),!1}}async function j(e,t=!1){var o;B(D),T(s.main_loader),s.currentCat=e;try{const n=s.currentCat===s.ALL_CATEGORIES?`${s.BASE_URL}${s.END_TOP_BOOKS}`:`${s.BASE_URL}${s.END_CATEGORIE_ID}${s.currentCat}`,r=await x(n);let a,i=[];if(!((o=r==null?void 0:r.data)!=null&&o.length))throw new H({message:`No books found in "${s.currentCat}"`,secondaryMessage:"We couldn't find any books in this category.<br />Please try a different one.",name:s.NO_BOOKS});s.currentCat===s.ALL_CATEGORIES?i=r.data.map(l=>l.books).reduce((l,m)=>l.concat(m),[]):i=r.data,a=[...new Map(i.map(l=>{var m,p;return[`${(m=l.title)==null?void 0:m.trim().toLowerCase()}|${(p=l.author)==null?void 0:p.trim().toLowerCase()}`,l]})).values()],c.add(s.BOOK_LIST,a),s.viewedBooks=Math.min(c.count(s.BOOK_LIST),s.itemsPerView);let d=a.slice(0,s.viewedBooks);W(s.viewedBooks,a.length),I(D,d,ie,!0),t||(b(v,"is-open"),b(w,"is-open")),S(s.main_loader),de()}catch(n){ue(n)}}function de(){s.viewedBooks<c.count(s.BOOK_LIST)?u(g,"display-none"):f(g,"display-none")}function le(){s.itemsPerView=window.innerWidth>=1440?24:10,s.itemsPerView===10&&(u(v,"is-open"),u(w,"is-open"))}function W(e,t){qe.textContent=`Showing ${e} of ${t}`}function ue(e){console.log(e),e instanceof H?(ee.textContent=e.message,Be.innerHTML=e.secondaryMessage):ee.textContent="Unexpected error occurred.",u(v,"is-open"),u(w,"is-open"),u(ce,"hidden"),f(g,"display-none"),W(0,0),S(s.main_loader),console.log("Error:",e.stack)}document.addEventListener("DOMContentLoaded",async()=>{Q(s.BOOK_CARD_LIST),T(s.main_loader),le(),await Ie()&&j(s.ALL_CATEGORIES,!0)});window.addEventListener("resize",()=>{le()});D.addEventListener("click",e=>{const t=e.target.closest(".books-data-button");if(!t)return;const o=t.closest(".books-data-itm");o&&Ce(o.dataset.id)});w.addEventListener("click",()=>{b(v,"is-open"),b(w,"is-open")});v.addEventListener("click",e=>{f(g,"display-none"),v.querySelectorAll(".b-categories-itm").forEach(r=>{u(r,"is-active")});const o=e.target.closest("p");if(!o)return;const n=e.target.closest(".b-categories-itm");n&&f(n,"is-active"),f(ce,"hidden"),j(o.textContent)});g.addEventListener("click",async()=>{T(s.main_loader),f(g,"display-none"),await new Promise(a=>setTimeout(a,400)),g.disabled=!0;const e=c.count(s.BOOK_LIST),t=s.viewedBooks,o=s.viewedBooks+s.itemsToAdd,n=c.get(s.BOOK_LIST);if(!n.length){E("Data is unavailable. Please, try later","Error!!!","red"),j(s.currentCat,!0),te(),ae();return}const r=n.slice(t,o);s.viewedBooks=Math.min(o,e),W(s.viewedBooks,n.length),I(D,r,ie,!1),te()});function te(){u(v,"is-open"),u(w,"is-open"),de(),S(s.main_loader),g.disabled=!1}new U(".feedbacks-swiper",{modules:[F,G,re],loop:!1,grabCursor:!0,spaceBetween:20,slidesPerView:1,navigation:{prevEl:".feedbacks-swiper-button-left",nextEl:".feedbacks-swiper-button-right"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:".feedbacks-custom-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{init:function(){oe(this)},slideChange:function(){oe(this)}}});function oe(e){const t=document.querySelector(".feedbacks-swiper-button-left"),o=document.querySelector(".feedbacks-swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const Te=document.querySelector(".header-nav-list"),me=s.cart_modal.querySelector(".cart-empty"),z=document.querySelector(".buy-now"),$e=document.querySelector(".shop-more"),se=document.querySelector(".cart-loader"),pe=document.querySelector(".cart-summary-section"),J=document.querySelector("[data-count]"),Y=document.querySelector("[data-price]");async function be(e){e.preventDefault(),B(s.cart_products),f(me,"display-none"),b(s.cart_modal,"is-open"),b(s.body,"locked"),!fe()&&(T(se),await new Promise(t=>setTimeout(t,400)),S(se),await Ae(s.BOOK_CARD_LIST),u(pe,"hidden"),J.textContent=c.countItems(s.BOOK_CARD_LIST),c.setTotalCard(Y),z.disabled=!1)}async function Ae(e){const t=c.get(e);console.log(e,t);const o=t.map(a=>{const i=a.id,d=`${s.BASE_URL}${s.END_BOOK_ID}${i}`;return x(d).then(l=>l.data).catch(l=>(console.log("Помилка для id:",prodId,l),null))}),r=(await Promise.all(o)).filter(Boolean);I(s.cart_products,r,we,!0)}function R(){Q(s.BOOK_CARD_LIST),u(s.cart_modal,"is-open"),u(s.body,"locked")}document.addEventListener("DOMContentLoaded",async()=>{});Te.addEventListener("click",e=>{e.target.closest(".cart-trigger")&&be(e)});s.cart_modal.addEventListener("click",e=>{(e.target===s.cart_modal||e.target===s.cart_close)&&R()});document.addEventListener("keydown",e=>{e.key==="Escape"&&R()});z.addEventListener("click",e=>{localStorage.removeItem(s.BOOK_CARD_LIST),E("Good choise","Thanks for your purchase!"),R(),c.setQuantityFromLocalStorage(s.BOOK_CARD_LIST)});$e.addEventListener("click",e=>{R()});s.cart_products.addEventListener("click",De);function fe(){return c.count(s.BOOK_CARD_LIST)===0?(u(me,"display-none"),u(pe,"hidden"),J.textContent=c.countItems(s.BOOK_CARD_LIST),c.setTotalCard(Y),z.disabled=!0,!0):!1}function De(e){const t=e.target.closest(".cart-item-btn");if(!t)return;const o=t.closest(".cart-item");if(!o)return;const n=o.dataset.id;c.removeItemFromStorage(s.BOOK_CARD_LIST,n),o.remove(),J.textContent=c.countItems(s.BOOK_CARD_LIST),c.setTotalCard(Y),fe()}const k=document.querySelector(".burger-menu"),xe=k.querySelector("use");k.addEventListener("click",e=>{k.disabled=!0,ye()});s.mobile_menu.addEventListener("click",e=>{const t=e.target.closest(".nav-link");t&&(ye(),t.classList.contains("cart-trigger")&&be(e))});function ye(){b(k,"is-open"),b(s.mobile_menu,"is-open"),b(s.body,"locked"),xe.setAttribute("href",k.classList.contains("is-open")?s.scr_btn_burger_close:s.scr_btn_burger_normal),k.disabled=!1}const M=document.querySelector("#back-to-top");window.addEventListener("scroll",()=>{window.scrollY>600?u(M,"hidden"):f(M,"hidden")});M.addEventListener("click",e=>{e.currentTarget.blur(),ae()});const h=document.querySelector(".form"),Re=h.querySelectorAll(".form-input, .form-user-comment"),Ne=document.querySelector(".modal-close-btn"),q=document.querySelector("#event-modal"),Ke=document.querySelector(".events-list");let V="";Ke.addEventListener("click",e=>{const t=e.target.closest(".events-item");!t||!e.target.closest(".card-btn")||(V=t.querySelector(".events-card-heading").textContent.trim(),Pe(V))});h.addEventListener("submit",Me);q.addEventListener("click",Ue);Ne.addEventListener("click",Ve);function Pe(e){q.classList.add("is-open");const t=q.querySelector(".form-subtitle");t.textContent=e,document.body.classList.add("locked"),window.addEventListener("keydown",ge)}function N(){q.classList.remove("is-open"),document.body.classList.remove("locked"),window.removeEventListener("keydown",ge)}function Me(e){e.preventDefault();let t=!0;Re.forEach(o=>{const n=o.nextElementSibling,r=o.value.trim();!o.checkValidity()||r===""?(o.classList.add("error"),n&&n.classList.contains("error-text")&&(n.style.display="block"),t=!1):(o.classList.remove("error"),n&&n.classList.contains("error-text")&&(n.style.display="none"))}),t&&(h.elements.fullname.value.trim(),h.elements.email.value.trim(),h.elements.comment.value.trim(),setTimeout(()=>{E(`You successfully registered on event ${V}`,"Thank you"),h.reset(),N()},500))}function Ve(){N()}function Ue(e){e.target===q&&N()}function ge(e){e.key==="Escape"&&N()}let O=null;function Fe(){O=new U(".events-swiper",{modules:[F,re,G],loop:!1,grabCursor:!0,spaceBetween:24,slidesPerView:1,navigation:{prevEl:".swiper-button-left",nextEl:".swiper-button-right"},pagination:{el:".custom-swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24}},on:{init:function(){ne(this)},slideChange:function(){ne(this)}}})}function Ge(){O&&(O.destroy(!0,!0),O=null)}function ve(){const e=window.innerWidth,t=document.querySelector(".events-control-cont"),o=document.querySelector(".swiper-pagination");e>=1440?(Ge(),t==null||t.classList.add("hidden"),o==null||o.classList.add("hidden")):(O||Fe(),t==null||t.classList.remove("hidden"),o==null||o.classList.remove("hidden"))}ve();window.addEventListener("resize",ve);function ne(e){const t=document.querySelector(".swiper-button-left"),o=document.querySelector(".swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const L=document.querySelector(".footer-form"),P=L==null?void 0:L.querySelector(".footer-input");L&&L.addEventListener("submit",function(e){if(e.preventDefault(),!P.checkValidity()||P.value.trim()===""){P.classList.add("error");return}setTimeout(()=>{E("You subscribed successfully","Thank you"),L.reset()},500)});
//# sourceMappingURL=index.js.map
