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

let docsFinance = document.body.getElementsByClassName("Finance");
let tabDocsFinance = Array.from(docsFinance);
console.log(tabDocsFinance);

let docsEducation = document.body.getElementsByClassName("Education");
let tabDocsEducation = Array.from(docsEducation);
console.log(tabDocsEducation);

let docsProfessionnel = document.body.getElementsByClassName("Professionnel");
let tabDocsProfessionnel = Array.from(docsProfessionnel);
console.log(tabDocsProfessionnel);

let docsPersonnel = document.body.getElementsByClassName("Personnel");
let tabDocsPersonnel = Array.from(docsPersonnel);
console.log(tabDocsPersonnel);

let docsLogement = document.body.getElementsByClassName("Logement");
let tabDocsLogement = Array.from(docsLogement);
console.log(tabDocsLogement);

theBoutonFinance.addEventListener("click",(clickEvent)=>{
    theBoutonFinance.style.backgroundColor = isClicked_finance ? "white" : "#004BD7"
    theBoutonFinance.style.color = isClicked_finance ? "black" : "white"
    theBoutonFinance.style.border = isClicked_finance ? "1px solid black" : "2px solid white"

    tabDocsFinance.map((document) => document.style.display = "flex");
    tabDocsEducation.map((document) => document.style.display = isClicked_finance ? "flex" : "none");
    tabDocsProfessionnel.map((document) => document.style.display = isClicked_finance ? "flex" : "none");
    tabDocsPersonnel.map((document) => document.style.display = isClicked_finance ? "flex" : "none");
    tabDocsLogement.map((document) => document.style.display = isClicked_finance ? "flex" : "none");

    isClicked_finance = !isClicked_finance;
})

theBoutonEducation.addEventListener("click",(clickEvent)=>{
    theBoutonEducation.style.backgroundColor = isClicked_education ? "white" : "#004BD7"
    theBoutonEducation.style.color = isClicked_education ? "black" : "white"
    theBoutonEducation.style.border = isClicked_education ? "1px solid black" : "2px solid white"

    tabDocsEducation.map((document) => document.style.display = "flex");
    tabDocsFinance.map((document) => document.style.display = isClicked_education ? "flex" : "none");
    tabDocsProfessionnel.map((document) => document.style.display = isClicked_education ? "flex" : "none");
    tabDocsPersonnel.map((document) => document.style.display = isClicked_education ? "flex" : "none");
    tabDocsLogement.map((document) => document.style.display = isClicked_education ? "flex" : "none");

    isClicked_education = !isClicked_education;
})

theBoutonProfessionnel.addEventListener("click",(clickEvent)=>{
    theBoutonProfessionnel.style.backgroundColor = isClicked_professionnel ? "white" : "#004BD7"
    theBoutonProfessionnel.style.color = isClicked_professionnel ? "black" : "white"
    theBoutonProfessionnel.style.border = isClicked_professionnel ? "1px solid black" : "2px solid white"

    tabDocsProfessionnel.map((document) => document.style.display = "flex");
    tabDocsFinance.map((document) => document.style.display = isClicked_professionnel ? "flex" : "none");
    tabDocsEducation.map((document) => document.style.display = isClicked_professionnel ? "flex" : "none");
    tabDocsPersonnel.map((document) => document.style.display = isClicked_professionnel ? "flex" : "none");
    tabDocsLogement.map((document) => document.style.display = isClicked_professionnel ? "flex" : "none");

    isClicked_professionnel = !isClicked_professionnel;
})

theBoutonPersonnel.addEventListener("click",(clickEvent)=>{
    theBoutonPersonnel.style.backgroundColor = isClicked_personnel ? "white" : "#004BD7"
    theBoutonPersonnel.style.color = isClicked_personnel ? "black" : "white"
    theBoutonPersonnel.style.border = isClicked_personnel ? "1px solid black" : "2px solid white"

    tabDocsPersonnel.map((document) => document.style.display = "flex");
    tabDocsFinance.map((document) => document.style.display = isClicked_personnel ? "flex" : "none");
    tabDocsEducation.map((document) => document.style.display = isClicked_personnel ? "flex" : "none");
    tabDocsProfessionnel.map((document) => document.style.display = isClicked_personnel ? "flex" : "none");
    tabDocsLogement.map((document) => document.style.display = isClicked_personnel ? "flex" : "none");

    isClicked_personnel = !isClicked_personnel;
})

theBoutonLogement.addEventListener("click",(clickEvent)=>{
    theBoutonLogement.style.backgroundColor = isClicked_logement ? "white" : "#004BD7"
    theBoutonLogement.style.color = isClicked_logement ? "black" : "white"
    theBoutonLogement.style.border = isClicked_logement ? "1px solid black" : "2px solid white"

    tabDocsLogement.map((document) => document.style.display = "flex");
    tabDocsFinance.map((document) => document.style.display = isClicked_logement ? "flex" : "none");
    tabDocsEducation.map((document) => document.style.display = isClicked_logement ? "flex" : "none");
    tabDocsProfessionnel.map((document) => document.style.display = isClicked_logement ? "flex" : "none");
    tabDocsPersonnel.map((document) => document.style.display = isClicked_logement ? "flex" : "none");

    isClicked_logement = !isClicked_logement;
})