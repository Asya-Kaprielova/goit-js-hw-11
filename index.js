import{a as f,S as d,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="56486035-b8f00db38e9e416252e8b1b7d",h="https://pixabay.com/api/";function g(s){const r={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:r}).then(i=>i.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader-container"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:n,comments:u,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <div class="info-wrapper">
          <p class="info-item"><b>Likes</b><br>${t}</p>
          <p class="info-item"><b>Views</b><br>${n}</p>
          <p class="info-item"><b>Comments</b><br>${u}</p>
          <p class="info-item"><b>Downloads</b><br>${m}</p>
        </div>
      </li>`).join("");c.innerHTML=r,y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",P);function P(s){s.preventDefault();const r=s.currentTarget,i=r.elements["search-text"].value.trim();if(i===""){a.warning({title:"Caution",message:"Please enter a valid search term!",position:"topRight"});return}L(),S(),g(i).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}b(o.hits)}).catch(o=>{a.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}).finally(()=>{w(),r.reset()})}
//# sourceMappingURL=index.js.map
