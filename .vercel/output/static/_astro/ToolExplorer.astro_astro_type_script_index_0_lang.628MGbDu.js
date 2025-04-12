import{s as w}from"./supabase.DT4R6HVW.js";async function x({title:e="",category:t="",page:a=1,pageSize:c=10}){try{let r=w.from("t_nav_website").select("*",{count:"exact"}),l=[];e&&l.push(`title.ilike.%${e}%`),t&&l.push(`category.ilike.%${t}%`),l.length>0&&(r=r.or(l.join(",")));const p=(a-1)*c;r=r.range(p,p+c-1).order("id",{ascending:!1}),console.log("Supabase query:",r);const{data:b,error:h,count:m}=await r;if(h)throw h;return{data:b,total:m,currentPage:a,pageSize:c,totalPages:Math.ceil(m/c)}}catch(r){throw console.error("Search error:",r),r}}const i=document.getElementById("tools-grid"),g=document.getElementById("pagination"),f=document.getElementById("search-form"),y=document.getElementById("search-input");let n=1,o="",s="";const L=10;async function u(e={}){try{console.log("Searching with params:",e);const t=await x({...e,page:n,pageSize:L});if(!t.data){console.error("No data received");return}console.log("Search results:",t),E(t)}catch(t){console.error("Search error:",t)}}function E(e){if(!i||!e.data.length){i.innerHTML='<p class="col-span-full text-center text-gray-500">没有找到相关结果</p>';return}const t=e.data.map(a=>`
      <a href="/tool/${a.id}" class="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img src="${a.image}" alt="${a.tiitle}" class="w-full aspect-video object-cover" />
        <div class="p-4">
          <h3 class="font-medium text-gray-900">${a.title}</h3>
          <p class="text-sm text-gray-500">${a.description}</p>
        </div>
      </a>
    `).join("");i.innerHTML=t,S(e.totalPages)}function S(e){if(!g)return;const t=Array.from({length:e}).map((a,c)=>`
      <button
        class="px-3 py-1 rounded ${c+1===n?"bg-purple-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}"
        data-page="${c+1}"
      >
        ${c+1}
      </button>
    `).join("");g.innerHTML=`<div class="flex space-x-2">${t}</div>`}function d(e){document.querySelectorAll(".category-btn").forEach(t=>{const a=t.dataset.category,c=t.querySelector("div"),r=t.querySelector("span");a===e||a==="全部"&&e===""?(c.classList.add("bg-purple-100"),r.classList.add("text-purple-600"),t.classList.add("selected")):(c.classList.remove("bg-purple-100"),r.classList.remove("text-purple-600"),t.classList.remove("selected"))})}document.querySelectorAll(".category-btn").forEach(e=>{e.addEventListener("click",async()=>{const t=e.dataset.category;t==="全部"||o===t?(o="",d("全部")):(o=t,d(o)),n=1,console.log("Category clicked:",o),await u({title:s,category:o})})});d("全部");f&&f.addEventListener("submit",async e=>{e.preventDefault(),s=y?.value.trim()||"",n=1,console.log("Form submitted:",{title:s,category:o}),await u({title:s,category:o})});g&&g.addEventListener("click",async e=>{e.target.tagName==="BUTTON"&&(n=parseInt(e.target.dataset.page),await u({title:s,category:o}),i?.scrollIntoView({behavior:"smooth"}))});document.querySelectorAll(".search-tag").forEach(e=>{e.addEventListener("click",async()=>{s=e.dataset.tag,y&&(y.value=s),n=1,console.log("Tag clicked:",{title:s,category:o}),await u({title:s,category:o})})});const v=document.createElement("style");v.textContent=`
    .category-btn.selected div {
      background-color: rgb(243 232 255);
      transform: scale(1.1);
    }
    .category-btn.selected span {
      color: rgb(147 51 234);
    }
  `;document.head.appendChild(v);
