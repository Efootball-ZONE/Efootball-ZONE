// ===============================
// LANGUAGE SYSTEM
// ===============================

const translations = {

nav_home:{
en:"Home",
ar:"الرئيسية",
fr:"Accueil"
},

nav_news:{
en:"News",
ar:"الأخبار",
fr:"Actualités"
},

nav_leaks:{
en:"Leaks",
ar:"التسريبات",
fr:"Fuites"
},

nav_builds:{
en:"Builds",
ar:"البيلدات",
fr:"Builds"
},

nav_weekly:{
en:"Weekly Picks",
ar:"اختيارات الأسبوع",
fr:"Choix de la semaine"
},

nav_contact:{
en:"Contact",
ar:"اتصل بنا",
fr:"Contact"
},

nav_about:{
en:"About",
ar:"حول الموقع",
fr:"À propos"
},

weekly_title:{
en:"Weekly Picks",
ar:"اختيارات الأسبوع",
fr:"Choix de la semaine"
},

best_players:{
en:"Best Free Players To Use This Week",
ar:"أفضل اللاعبين المجانيين هذا الأسبوع",
fr:"Meilleurs joueurs gratuits cette semaine"
},

a_condition:{
en:"Players In A Condition This Week",
ar:"اللاعبون في حالة A هذا الأسبوع",
fr:"Joueurs en condition A cette semaine"
},

new_players:{
en:"New Players This Week",
ar:"اللاعبون الجدد هذا الأسبوع",
fr:"Nouveaux joueurs de la semaine"
},

contact_title:{
en:"Contact",
ar:"اتصل بنا",
fr:"Contact"
},

about_title:{
en:"About This Website",
ar:"حول هذا الموقع",
fr:"À propos du site"
},

footer_text:{
en:"Efootball ZONE - fan made website for eFootball news and content.",
ar:"Efootball ZONE - موقع جماهيري لأخبار eFootball.",
fr:"Efootball ZONE - site fan pour les news eFootball."
}

};


// ===============================
// CHANGE LANGUAGE
// ===============================

function setLanguage(lang){

localStorage.setItem("siteLanguage",lang)

document.querySelectorAll("[data-translate]").forEach(el=>{

const key = el.getAttribute("data-translate")

if(translations[key]){
el.textContent = translations[key][lang]
}

})

if(lang === "ar"){
document.documentElement.dir="rtl"
document.documentElement.lang="ar"
}else{
document.documentElement.dir="ltr"
document.documentElement.lang=lang
}

highlightLanguage(lang)

}


// ===============================
// LOAD SAVED LANGUAGE
// ===============================

function getSavedLanguage(){

return localStorage.getItem("siteLanguage") || "en"

}


// ===============================
// LANGUAGE BUTTON STYLE
// ===============================

function highlightLanguage(lang){

document.querySelectorAll(".lang-switcher button").forEach(btn=>{

btn.classList.remove("active-lang")

if(btn.textContent.toLowerCase().includes(lang)){
btn.classList.add("active-lang")
}

})

}


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu(){

const nav = document.getElementById("mobileNav")

if(nav){
nav.classList.toggle("open")
}

}


// ===============================
// SLIDER SYSTEM
// ===============================

let currentSlide = 0

function changeSlide(step){

const slides = document.querySelectorAll(".slide")

if(slides.length===0)return

currentSlide += step

if(currentSlide >= slides.length) currentSlide = 0
if(currentSlide < 0) currentSlide = slides.length-1

slides.forEach((s,i)=>{
s.classList.toggle("active",i===currentSlide)
})

}


// ===============================
// INIT
// ===============================

window.addEventListener("DOMContentLoaded",()=>{

const lang = getSavedLanguage()

setLanguage(lang)

})
