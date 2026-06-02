let filter = document.body.querySelector(".bouton_filtre");
console.log(filter);

let insideFilter = document.body.querySelector("#theInsideFilter");
console.log(insideFilter);

let isClicked_filter = false;

filter.addEventListener("click",(clickEvent)=>{
    insideFilter.style.display = isClicked_filter ? "flex" : "none"
    isClicked_filter = !isClicked_filter;
})

let theBoutonFinance = document.body.querySelector(".bouton_finance");
console.log(theBoutonFinance);

let isClicked_finance = false;

let theBoutonEducation = document.body.querySelector(".bouton_education");
console.log(theBoutonEducation);

let isClicked_education = false;

let theBoutonProfessionnel = document.body.querySelector(".bouton_professionnel");
console.log(theBoutonProfessionnel);

let isClicked_professionnel = false;

let theBoutonPersonnel = document.body.querySelector(".bouton_personnel");
console.log(theBoutonPersonnel);

let isClicked_personnel = false;

let theBoutonLogement = document.body.querySelector(".bouton_logement");
console.log(theBoutonLogement);

let isClicked_logement = false;

let docsFinance = document.body.querySelector(".Finance");
console.log(docsFinance);

let docsEducation = document.body.querySelector(".Education");
console.log(docsEducation);

let docsProfessionnel = document.body.querySelector(".Professionnel");
console.log(docsProfessionnel);

let docsPersonnel = document.body.querySelector(".Personnel");
console.log(docsPersonnel);

let docsLogement = document.body.querySelector(".Logement");
console.log(docsLogement);

theBoutonFinance.addEventListener("click",(clickEvent)=>{
    docsFinance.style.display = "flex";
    theBoutonFinance.style.backgroundColor = isClicked_finance ? "white" : "#004BD7"
    theBoutonFinance.style.color = isClicked_finance ? "black" : "white"
    theBoutonFinance.style.border = isClicked_finance ? "1px solid black" : "2px solid white"
    docsEducation.style.display = isClicked_finance ? "flex" : "none"
    docsProfessionnel.style.display = isClicked_finance ? "flex" : "none"
    docsPersonnel.style.display = isClicked_finance ? "flex" : "none"
    docsLogement.style.display = isClicked_finance ? "flex" : "none"
    isClicked_finance = !isClicked_finance;
})

theBoutonEducation.addEventListener("click",(clickEvent)=>{
    docsEducation.style.display = "flex";
    theBoutonEducation.style.backgroundColor = isClicked_education ? "white" : "#004BD7"
    theBoutonEducation.style.color = isClicked_education ? "black" : "white"
    theBoutonEducation.style.border = isClicked_education ? "1px solid black" : "2px solid white"
    docsFinance.style.display = isClicked_education ? "flex" : "none"
    docsProfessionnel.style.display = isClicked_education ? "flex" : "none"
    docsPersonnel.style.display = isClicked_education ? "flex" : "none"
    docsLogement.style.display = isClicked_education ? "flex" : "none"
    isClicked_education = !isClicked_education;
})

theBoutonProfessionnel.addEventListener("click",(clickEvent)=>{
    docsProfessionnel.style.display = "flex";
    theBoutonProfessionnel.style.backgroundColor = isClicked_professionnel ? "white" : "#004BD7"
    theBoutonProfessionnel.style.color = isClicked_professionnel ? "black" : "white"
    theBoutonProfessionnel.style.border = isClicked_professionnel ? "1px solid black" : "2px solid white"
    docsFinance.style.display = isClicked_professionnel ? "flex" : "none"
    docsEducation.style.display = isClicked_professionnel ? "flex" : "none"
    docsPersonnel.style.display = isClicked_professionnel ? "flex" : "none"
    docsLogement.style.display = isClicked_professionnel ? "flex" : "none"
    isClicked_professionnel = !isClicked_professionnel;
})

theBoutonPersonnel.addEventListener("click",(clickEvent)=>{
    docsPersonnel.style.display = "flex";
    theBoutonPersonnel.style.backgroundColor = isClicked_personnel ? "white" : "#004BD7"
    theBoutonPersonnel.style.color = isClicked_personnel ? "black" : "white"
    theBoutonPersonnel.style.border = isClicked_personnel ? "1px solid black" : "2px solid white"
    docsFinance.style.display = isClicked_personnel ? "flex" : "none"
    docsEducation.style.display = isClicked_personnel ? "flex" : "none"
    docsProfessionnel.style.display = isClicked_personnel ? "flex" : "none"
    docsLogement.style.display = isClicked_personnel ? "flex" : "none"
    isClicked_personnel = !isClicked_personnel;
})

theBoutonLogement.addEventListener("click",(clickEvent)=>{
    docsLogement.style.display = "flex";
    theBoutonLogement.style.backgroundColor = isClicked_logement ? "white" : "#004BD7"
    theBoutonLogement.style.color = isClicked_logement ? "black" : "white"
    theBoutonLogement.style.border = isClicked_logement ? "1px solid black" : "2px solid white"
    docsFinance.style.display = isClicked_logement ? "flex" : "none"
    docsEducation.style.display = isClicked_logement ? "flex" : "none"
    docsProfessionnel.style.display = isClicked_logement ? "flex" : "none"
    docsPersonnel.style.display = isClicked_logement ? "flex" : "none"
    isClicked_logement = !isClicked_logement;
})