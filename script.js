const translations = {

  en: {

    nav_home: "Home",
    nav_news: "News",
    nav_leaks: "Leaks",
    nav_players: "Players",
    nav_builds: "Builds",
    nav_contact: "Contact",

    home_badge: "Unofficial eFootball Fan Hub",
    home_title: "Welcome to Efootball ZONE",
    home_desc: "Latest news, leaks, player builds, training tips, pictures, videos, and more.",

    home_btn_news: "Explore News",
    home_btn_players: "View Players",

    home_banner_tag: "Latest News",
    home_banner_title: "New Team of the Week players are coming after maintenance",
    home_banner_desc: "Click here to discover the confirmed players and everything about the new Team of the Week.",

    home_cards_title: "Main Sections",
    home_cards_desc: "Jump quickly to the content you want.",

    card_news: "Latest News",
    card_news_desc: "Stay updated with the newest eFootball information.",

    card_leaks: "Leaks",
    card_leaks_desc: "Find rumors, upcoming content and possible new updates.",

    card_players: "Players",
    card_players_desc: "Explore players and discover useful information.",

    card_builds: "Player Builds",
    card_builds_desc: "Discover training ideas and player development tips.",

    footer_text: "Efootball ZONE - fan-made website for news, leaks, and player ideas."
  },

  ar: {

    nav_home: "الرئيسية",
    nav_news: "الأخبار",
    nav_leaks: "التسريبات",
    nav_players: "اللاعبون",
    nav_builds: "التطويرات",
    nav_contact: "اتصل بنا",

    home_badge: "موقع جماهيري غير رسمي لـ eFootball",
    home_title: "مرحبًا بك في Efootball ZONE",
    home_desc: "آخر الأخبار، التسريبات، تطويرات اللاعبين، نصائح التدريب، الصور، الفيديوهات، وأكثر.",

    home_btn_news: "استكشف الأخبار",
    home_btn_players: "عرض اللاعبين",

    home_banner_tag: "آخر الأخبار",
    home_banner_title: "لاعبو فريق الأسبوع الجدد قادمون بعد الصيانة",
    home_banner_desc: "اضغط هنا لاكتشاف اللاعبين المؤكدين وكل ما يتعلق بفريق الأسبوع الجديد.",

    home_cards_title: "الأقسام الرئيسية",
    home_cards_desc: "انتقل بسرعة إلى المحتوى الذي تريده.",

    card_news: "آخر الأخبار",
    card_news_desc: "ابقَ على اطلاع بأحدث معلومات eFootball.",

    card_leaks: "التسريبات",
    card_leaks_desc: "اكتشف الإشاعات والمحتوى القادم والتحديثات المحتملة.",

    card_players: "اللاعبون",
    card_players_desc: "استكشف اللاعبين واكتشف معلومات مفيدة.",

    card_builds: "تطويرات اللاعبين",
    card_builds_desc: "اكتشف أفكار التدريب ونصائح تطوير اللاعبين.",

    footer_text: "Efootball ZONE - موقع جماهيري للأخبار والتسريبات وأفكار تطوير اللاعبين."
  },

  fr: {

    nav_home: "Accueil",
    nav_news: "Actualités",
    nav_leaks: "Leaks",
    nav_players: "Joueurs",
    nav_builds: "Builds",
    nav_contact: "Contact",

    home_badge: "Site fan non officiel eFootball",
    home_title: "Bienvenue sur Efootball ZONE",
    home_desc: "Dernières actualités, leaks, builds de joueurs, conseils d'entraînement, images, vidéos et plus.",

    home_btn_news: "Voir les actualités",
    home_btn_players: "Voir les joueurs",

    home_banner_tag: "Dernière actualité",
    home_banner_title: "De nouveaux joueurs Team of the Week arrivent après la maintenance",
    home_banner_desc: "Cliquez ici pour découvrir les joueurs confirmés et tout sur la nouvelle Team of the Week.",

    home_cards_title: "Sections principales",
    home_cards_desc: "Accédez rapidement au contenu que vous voulez.",

    card_news: "Dernières actualités",
    card_news_desc: "Restez à jour avec les dernières informations sur eFootball.",

    card_leaks: "Leaks",
    card_leaks_desc: "Découvrez les rumeurs, le contenu à venir et les mises à jour possibles.",

    card_players: "Joueurs",
    card_players_desc: "Explorez les joueurs et découvrez des informations utiles.",

    card_builds: "Builds joueurs",
    card_builds_desc: "Découvrez des idées d'entraînement et des conseils de progression.",

    footer_text: "Efootball ZONE - site fan pour actualités, leaks et idées de builds joueurs."
  }

};


function applyTranslations(lang) {

  document.querySelectorAll("[data-key]").forEach((element) => {

    const key = element.getAttribute("data-key");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }

  });

  if (lang === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }

}


function setLanguage(lang) {

  localStorage.setItem("siteLanguage", lang);

  applyTranslations(lang);

}


window.addEventListener("DOMContentLoaded", () => {

  const savedLanguage = localStorage.getItem("siteLanguage") || "en";

  applyTranslations(savedLanguage);

});
