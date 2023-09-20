const categoryjson = [
    {
        "title" : "Concert"
    },
    {
        "title" : "Entreprises"
    },
    {
        "title" : "Mariages"
    },
    {
        "title" : "Portrait"
    }
]

const galleryjson = [
            {
                "tag" : "Concert",
                "source" : "./assets/images/gallery/concerts/aaron-paul-.webp",
                "sourcesmall" : "./assets/images/gallery/concerts/aaron-paul-small.webp",
                "alt" : "Photo d'un concert"
            },
            {
                "tag" : "Entreprises",
                "source" : "./assets/images/gallery/entreprise/ali-morshedlou.webp",
                "sourcesmall" : "./assets/images/gallery/entreprise/ali-morshedlou-small.webp",
                "alt" : "Photo d'un businessman"
            },
            {
                "tag" : "Entreprises",
                "source" : "./assets/images/gallery/entreprise/jason-goodman.webp",
                "sourcesmall" : "./assets/images/gallery/entreprise/jason-goodman-small.webp",
                "alt" : "Photo de femme en entreprise"
            },
            {
                "tag" : "Mariages",
                "source" : "./assets/images/gallery/mariage/hannah-busing.webp",
                "sourcesmall" : "./assets/images/gallery/mariage/hannah-busing-small.webp",
                "alt" : "Photo de main qui se rejoignent"
            },
            {
                "tag" : "Portrait",
                "source" : "./assets/images/gallery/portraits/ade-tunji.webp",
                "sourcesmall" : "./assets/images/gallery/portraits/ade-tunji-small.webp",
                "alt" : "Photo d'un homme"
            },
            {
                "tag" : "Mariages",
                "source" : "./assets/images/gallery/mariage/jakob-owens.webp",
                "sourcesmall" : "./assets/images/gallery/mariage/jakob-owens-small.webp",
                "alt" : "Photo d'un couple mariées"
            },
            {
                "tag" : "Portrait",
                "source" : "./assets/images/gallery/portraits/nino-van-prattenburg.webp",
                "sourcesmall" : "./assets/images/gallery/portraits/nino-van-prattenburg-small.webp",
                "alt" : "Photo d'une femme"
            },
            {
                "tag" : "Concert",
                "source" : "./assets/images/gallery/concerts/austin-neill-.webp",
                "sourcesmall" : "./assets/images/gallery/concerts/austin-neill-small.webp",
                "alt" : "Photo d'un chanteur"
            },
            {
                "tag" : "Entreprises",
                "source" : "./assets/images/gallery/entreprise/mateus-campos-felipe.webp",
                "sourcesmall" : "./assets/images/gallery/entreprise/mateus-campos-felipe-small.webp",
                "alt" : "Photo d'une femme sur son ordinateur"
            }      
]

createfilter();

function createfilter () {
    const ulcategories = document.querySelector(".nav-pills");
    let i = 0;
    for (i ; i < categoryjson.length; i++) {
        let pfiltre = `
            <li class="nav-item active">
                <span id="${"categorie" + [i+1]}" class="nav-link active-tag">${categoryjson[i].title}</span>
            </li>
            `
        ulcategories.insertAdjacentHTML("beforeend",pfiltre);
    };
};

creategallery(galleryjson);

function creategallery (galleryjson) {
    let i = 0;
    const divgallery = document.querySelector(".gallery-items-row");
    divgallery.innerHTML = "";
    for (i ; i < galleryjson.length; i++) {
        let photo = `
            <picture id="${[i]}" class="imgallery item-column mb-4 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <source srcset="${galleryjson[i].sourcesmall}" media="(max-width: 425px)" >
                <source srcset="${galleryjson[i].source}" >
                <img src="${galleryjson[i].source}" alt="${galleryjson[i].alt}" class="gallery-item img-fluid" >
            </picture>
            `
        divgallery.innerHTML += photo;
    };
    clickmodal(galleryjson);
};

const ftous = document.getElementById("categorie0");
const fconcert = document.getElementById("categorie1");
const fentreprise = document.getElementById("categorie2");
const fmariage = document.getElementById("categorie3");
const fportrait = document.getElementById("categorie4");

ftous.addEventListener("click", () => {
	creategallery(galleryjson);
    resetclass();
    ftous.classList.add("active");
});

fconcert.addEventListener("click", () => {
	let tabconcert = galleryjson.filter(function(itemphoto) {
        return itemphoto.tag == "Concert";
    });
    resetclass();
    fconcert.classList.add("active");
    creategallery(tabconcert);
});

fentreprise.addEventListener("click", () => {
	let tabentreprise = galleryjson.filter(function(itemphoto) {
        return itemphoto.tag == "Entreprises";
    });
    resetclass();
    fentreprise.classList.add("active");
    creategallery(tabentreprise);
});

fmariage.addEventListener("click", () => {
	let tabmariage = galleryjson.filter(function(itemphoto) {
        return itemphoto.tag == "Mariages";
    });
    resetclass();
    fmariage.classList.add("active");
    creategallery(tabmariage);
});

fportrait.addEventListener("click", () => {
	let tabportrait = galleryjson.filter(function(itemphoto) {
        return itemphoto.tag == "Portrait";
    });
    resetclass();
    fportrait.classList.add("active");
    creategallery(tabportrait);
});

function resetclass () {
    ftous.classList.remove("active");
    fconcert.classList.remove("active");
    fentreprise.classList.remove("active");
    fmariage.classList.remove("active");
    fportrait.classList.remove("active");
};

function clickmodal (galleryjson) {
    let imgallery = document.querySelectorAll(".imgallery");
    imgallery.forEach(element => {
        element.addEventListener("click", () => {
            let idimg = new Number(element.getAttribute("id"));
            openmodal(idimg, galleryjson);
        });
    });
};

const modal = document.querySelector(".fade");
const modalback = document.querySelector(".modal-backdrop");
const body = document.querySelector("body");
function openmodal (idimg, galleryjson) {
    body.classList.add("modal-open");
    body.style.overflow = "hidden";
    modalback.style.display = "block";
    imgview(idimg, galleryjson);
    modal.classList.add("show");
    modal.style.display = "block";
    modal.ariaHidden = "false";
    modal.ariaModal = "true";
};

modal.addEventListener("click", () => {
    body.classList.remove("modal-open");
    body.style.removeProperty("overflow");
    modal.classList.remove("show");
    modal.style.display = "none";
    modal.ariaHidden = "true";
    modal.ariaModal = "false";
    modalback.style.display = "none";
});

const divmodal = document.querySelector(".modal-dialog");
divmodal.addEventListener("click", (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
});

function imgview (idimg, galleryjson) {
    const modalimg = document.querySelector(".lightboxImage");
    modalimg.innerHTML ="";
    let photo = `
            <source srcset="${galleryjson[idimg].sourcesmall}" media="(max-width: 425px)" >
            <source srcset="${galleryjson[idimg].source}" >
            <img class="lightboxImage img-fluid" src="${galleryjson[idimg].source}" alt="${galleryjson[idimg].alt}">
            `
    modalimg.innerHTML += photo;
    slicerleft(idimg, galleryjson);
    slicerright(idimg, galleryjson);
}

function slicerleft(idimg, galleryjson) {
    const btnleft = document.querySelector(".mg-prev");
    btnleft.addEventListener("click", (event) => {
        const idimgmax = galleryjson.length - 1;
        if (idimg > 0) {
            idimg -= 1;
        } else {
            idimg = idimgmax;
        };
        imgview(idimg, galleryjson);
    });
};

function slicerright(idimg, galleryjson) {
	const btnright = document.querySelector(".mg-next");
    btnright.addEventListener("click", (event) => {
        const idimgmax = galleryjson.length - 1;
        if (idimg < idimgmax) {
            idimg += 1;
        } else {
            idimg = 0;
        };
        imgview(idimg, galleryjson);
    });
};
