const categoryjson=[{title:"Concert"},{title:"Entreprises"},{title:"Mariages"},{title:"Portrait"}],galleryjson=[{tag:"Concert",source:"./assets/images/gallery/concerts/aaron-paul-.webp",sourcesmall:"./assets/images/gallery/concerts/aaron-paul-small.webp",alt:"Photo d'un concert"},{tag:"Entreprises",source:"./assets/images/gallery/entreprise/ali-morshedlou.webp",sourcesmall:"./assets/images/gallery/entreprise/ali-morshedlou-small.webp",alt:"Photo d'un businessman"},{tag:"Entreprises",source:"./assets/images/gallery/entreprise/jason-goodman.webp",sourcesmall:"./assets/images/gallery/entreprise/jason-goodman-small.webp",alt:"Photo de femme en entreprise"},{tag:"Mariages",source:"./assets/images/gallery/mariage/hannah-busing.webp",sourcesmall:"./assets/images/gallery/mariage/hannah-busing-small.webp",alt:"Photo de main qui se rejoignent"},{tag:"Portrait",source:"./assets/images/gallery/portraits/ade-tunji.webp",sourcesmall:"./assets/images/gallery/portraits/ade-tunji-small.webp",alt:"Photo d'un homme"},{tag:"Mariages",source:"./assets/images/gallery/mariage/jakob-owens.webp",sourcesmall:"./assets/images/gallery/mariage/jakob-owens-small.webp",alt:"Photo d'un couple mariées"},{tag:"Portrait",source:"./assets/images/gallery/portraits/nino-van-prattenburg.webp",sourcesmall:"./assets/images/gallery/portraits/nino-van-prattenburg-small.webp",alt:"Photo d'une femme"},{tag:"Concert",source:"./assets/images/gallery/concerts/austin-neill-.webp",sourcesmall:"./assets/images/gallery/concerts/austin-neill-small.webp",alt:"Photo d'un chanteur"},{tag:"Entreprises",source:"./assets/images/gallery/entreprise/mateus-campos-felipe.webp",sourcesmall:"./assets/images/gallery/entreprise/mateus-campos-felipe-small.webp",alt:"Photo d'une femme sur son ordinateur"}];function createfilter(){const e=document.querySelector(".nav-pills");let a=0;for(;a<categoryjson.length;a++){let t=`\n            <li class="nav-item active">\n                <span id="${"categorie"+[a+1]}" class="nav-link active-tag">${categoryjson[a].title}</span>\n            </li>\n            `;e.insertAdjacentHTML("beforeend",t)}}function creategallery(e){let a=0;const t=document.querySelector(".gallery-items-row");for(t.innerHTML="";a<e.length;a++){let s=`\n            <picture id="${[a]}" class="imgallery item-column mb-4 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">\n                <source srcset="${e[a].sourcesmall}" media="(max-width: 375px)" >\n                <source srcset="${e[a].source}" >\n                <img src="${e[a].source}" alt="${e[a].alt}" class="gallery-item img-fluid" >\n            </picture>\n            `;t.innerHTML+=s}clickmodal(e)}createfilter(),creategallery(galleryjson);const ftous=document.getElementById("categorie0"),fconcert=document.getElementById("categorie1"),fentreprise=document.getElementById("categorie2"),fmariage=document.getElementById("categorie3"),fportrait=document.getElementById("categorie4");function resetclass(){ftous.classList.remove("active"),fconcert.classList.remove("active"),fentreprise.classList.remove("active"),fmariage.classList.remove("active"),fportrait.classList.remove("active")}function clickmodal(e){document.querySelectorAll(".imgallery").forEach((a=>{a.addEventListener("click",(()=>{openmodal(new Number(a.getAttribute("id")),e)}))}))}ftous.addEventListener("click",(()=>{creategallery(galleryjson),resetclass(),ftous.classList.add("active")})),fconcert.addEventListener("click",(()=>{let e=galleryjson.filter((function(e){return"Concert"==e.tag}));resetclass(),fconcert.classList.add("active"),creategallery(e)})),fentreprise.addEventListener("click",(()=>{let e=galleryjson.filter((function(e){return"Entreprises"==e.tag}));resetclass(),fentreprise.classList.add("active"),creategallery(e)})),fmariage.addEventListener("click",(()=>{let e=galleryjson.filter((function(e){return"Mariages"==e.tag}));resetclass(),fmariage.classList.add("active"),creategallery(e)})),fportrait.addEventListener("click",(()=>{let e=galleryjson.filter((function(e){return"Portrait"==e.tag}));resetclass(),fportrait.classList.add("active"),creategallery(e)}));const modal=document.querySelector(".fade"),modalback=document.querySelector(".modal-backdrop"),body=document.querySelector("body");function openmodal(e,a){body.classList.add("modal-open"),body.style.overflow="hidden",modalback.style.display="block",imgview(e,a),modal.classList.add("show"),modal.style.display="block",modal.ariaHidden="false",modal.ariaModal="true"}modal.addEventListener("click",(()=>{body.classList.remove("modal-open"),body.style.removeProperty("overflow"),modal.classList.remove("show"),modal.style.display="none",modal.ariaHidden="true",modal.ariaModal="false",modalback.style.display="none"}));const divmodal=document.querySelector(".modal-dialog");function imgview(e,a){const t=document.querySelector(".lightboxImage");t.innerHTML="";let s=`\n            <source srcset="${a[e].sourcesmall}" media="(max-width: 425px)" >\n            <source srcset="${a[e].source}" >\n            <img class="lightboxImage img-fluid" src="${a[e].source}" alt="${a[e].alt}">\n            `;t.innerHTML+=s,slicerleft(e,a),slicerright(e,a)}function slicerleft(e,a){document.querySelector(".mg-prev").addEventListener("click",(t=>{const s=a.length-1;e>0?e-=1:e=s,imgview(e,a)}))}function slicerright(e,a){document.querySelector(".mg-next").addEventListener("click",(t=>{const s=a.length-1;e<s?e+=1:e=0,imgview(e,a)}))}divmodal.addEventListener("click",(e=>{e.stopPropagation(),e.stopImmediatePropagation()}));