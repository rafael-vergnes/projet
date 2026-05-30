let filter = document.body.querySelector(".bouton_filtre");
console.log(filter);

let insideFilter = document.body.querySelector("#theInsideFilter");
console.log(insideFilter);

filter.addEventListener("click",(clickEvent)=>{
    insideFilter.style.display = "flex";
})

let theBoutonFinance = document.body.querySelector(".bouton_finance");
console.log(theBoutonFinance);

let theBoutonEducation = document.body.querySelector(".bouton_education");
console.log(theBoutonEducation);

let theBoutonProfessionnel = document.body.querySelector(".bouton_professionnel");
console.log(theBoutonProfessionnel);

let theBoutonPersonnel = document.body.querySelector(".bouton_personnel");
console.log(theBoutonPersonnel);

let theBoutonLogement = document.body.querySelector(".bouton_logement");
console.log(theBoutonLogement);

let docsFinance = document.body.querySelector(".Finance");
console.log(docsFinance);

let docsÉducation = document.body.querySelector(".Éducation");
console.log(docsÉducation);

let docsProfessionnel = document.body.querySelector(".Professionnel");
console.log(docsProfessionnel);

let docsPersonnel = document.body.querySelector(".Personnel");
console.log(docsPersonnel);

let docsLogement = document.body.querySelector(".Logement");
console.log(docsLogement);

theBoutonFinance.addEventListener("click",(clickEvent)=>{
    docsFinance.style.display = "flex";
    docsÉducation.style.display = "none";
    docsProfessionnel.style.display = "none";
    docsPersonnel.style.display = "none";
    docsLogement.style.display = "none";
})

theBoutonEducation.addEventListener("click",(clickEvent)=>{
    docsFinance.style.display = "none";
    docsÉducation.style.display = "flex";
    docsProfessionnel.style.display = "none";
    docsPersonnel.style.display = "none";
    docsLogement.style.display = "none";
})

theBoutonProfessionnel.addEventListener("click",(clickEvent)=>{
    docsFinance.style.display = "none";
    docsÉducation.style.display = "none";
    docsProfessionnel.style.display = "flex";
    docsPersonnel.style.display = "none";
    docsLogement.style.display = "none";
})

theBoutonPersonnel.addEventListener("click",(clickEvent)=>{
    docsFinance.style.display = "none";
    docsÉducation.style.display = "none";
    docsProfessionnel.style.display = "none";
    docsPersonnel.style.display = "flex";
    docsLogement.style.display = "none";
})

theBoutonLogement.addEventListener("click",(clickEvent)=>{
    docsFinance.style.display = "none";
    docsÉducation.style.display = "none";
    docsProfessionnel.style.display = "none";
    docsPersonnel.style.display = "none";
    docsLogement.style.display = "flex";
})