import{a as h,S as L,i as n}from"./assets/vendor-DjDxajEQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();h.defaults.baseURL="https://pixabay.com/api/";function y(r,e,i){const s={params:{key:"45706921-daf09135eb1f07c679e77f1a2",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:i}};return h.get("",s)}const b=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function u(r){const e=document.querySelector(".gallery");let i=r.data.hits.map(s=>`<li class="gallery-card">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
      class="gallery-img"
      src="${s.webformatURL}"
      data-source="${s.largeImageURL}"
      alt="${s.tags}"
    />
  </a>
  <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${s.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${s.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${s.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${s.downloads}</span>
      </li>
    </ul>
  </div>
</li>    `).join("");e.insertAdjacentHTML("beforeend",i),b.refresh()}function v(){const r=document.querySelector(".gallery");r.innerHTML=""}const w=document.querySelector(".gallery-form"),f=document.querySelector(".input-for-gallery"),o=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let c=1,d="";const m=15,S=async r=>{try{if(r.preventDefault(),v(),o.classList.remove("hidden"),l.classList.add("hidden"),d=f.value.trim(),c=1,d===""){n.error({position:"topRight",message:"Please fill the input"}),o.classList.add("hidden");return}const e=await y(d,c,m);if(e.data.hits.length===0){n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o.classList.add("hidden");return}if(e.data.totalHits<=m){u(e),n.info({message:"We`re sorry, but you`ve reached the end of search results.",position:"bottomRight"}),o.classList.add("hidden");return}else o.classList.add("hidden"),u(e),l.classList.remove("hidden"),p()}catch(e){console.log(e),n.error({message:"An error occurred. Please try again later.",position:"bottomRight"})}finally{o.classList.add("hidden"),f.value=""}};w.addEventListener("submit",S);const R=async r=>{try{c++,o.classList.remove("hidden"),l.classList.add("hidden");const e=await y(d,c,m),i=e.data;if(Math.ceil(i.totalHits/m)===c){l.classList.add("hidden"),o.classList.add("hidden"),n.info({message:"We`re sorry, but you`ve reached the end of search results.",position:"bottomRight"}),u(e),p();return}u(e),l.classList.remove("hidden"),o.classList.add("hidden"),p()}catch(e){console.log(e),n.error({message:"An error occurred. Please try again later.",position:"bottomRight"})}};l.addEventListener("click",R);function p(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
