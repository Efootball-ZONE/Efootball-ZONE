const translations = {
  en: {
    nav_home: "Home",
    nav_news: "News",
    nav_leaks: "Leaks",
    nav_players: "Players",
    nav_builds: "Builds",
    nav_contact: "Contact",

    home_title: "Welcome to eFootball Hub",
    home_desc: "Latest news, leaks, player builds, training tips, pictures, videos, and more.",
    card_news: "Latest News",
    card_news_desc: "Stay updated with the newest eFootball information.",
    card_leaks: "Leaks",
    card_leaks_desc: "Find rumors, upcoming content, and possible new updates.",
    card_builds: "Player Builds",
    card_builds_desc: "Discover training ideas and player development tips.",

    news_title: "Latest News",
    news_desc: "This page will contain the latest eFootball news and updates.",

    leaks_title: "Leaks",
    leaks_desc: "This page will contain eFootball leaks, rumors, and hidden content.",

    players_title: "Players",
    players_desc: "This page will contain player information, ratings, and analysis.",

    builds_title: "Player Builds",
    builds_desc: "This page will contain training builds, progression ideas, and tips.",

    contact_title: "Contact",
    contact_desc: "You can place your email or social media links here later."
  },

  ar: {
    nav_home: "الرئيسية",
    nav_news: "الأخبار",
    nav_leaks: "التسريبات",
    nav_players: "اللاعبون",
    nav_builds: "البنايات",
    nav_contact: "اتصل بنا",

    home_title: "مرحبًا بك في eFootball Hub",
    home_desc: "آخر الأخبار، التسريبات، تطويرات اللاعبين، نصائح التدريب، الصور، الفيديوهات، وأكثر.",
    card_news: "آخر الأخبار",
    card_news_desc: "ابقَ على اطلاع بأحدث معلومات eFootball.",
    card_leaks: "التسريبات",
    card_leaks_desc: "اكتشف الإشاعات والمحتوى القادم والتحديثات المحتملة.",
    card_builds: "تطويرات اللاعبين",
    card_builds_desc: "اكتشف أفكار التدريب ونصائح تطوير اللاعبين.",

    news_title: "آخر الأخبار",
    news_desc: "هذه الصفحة ستحتوي على آخر أخبار وتحديثات eFootball.",

    leaks_title: "التسريبات",
    leaks_desc: "هذه الصفحة ستحتوي على تسريبات eFootball والإشاعات والمحتوى المخفي.",

    players_title: "اللاعبون",
    players_desc: "هذه الصفحة ستحتوي على معلومات اللاعبين والتقييمات والتحليلات.",

    builds_title: "تطويرات اللاعبين",
    builds_desc: "هذه الصفحة ستحتوي على بنايات التدريب وأفكار التطوير والنصائح.",

    contact_title: "اتصل بنا",
    contact_desc: "يمكنك وضع بريدك الإلكتروني أو روابط مواقع التواصل هنا لاحقًا."
  },

  fr: {
    nav_home: "Accueil",
    nav_news: "Actualités",
    nav_leaks: "Leaks",
    nav_players: "Joueurs",
    nav_builds: "Builds",
    nav_contact: "Contact",

    home_title: "Bienvenue sur eFootball Hub",
    home_desc: "Dernières actualités, leaks, builds de joueurs, conseils d'entraînement, images, vidéos et plus.",
    card_news: "Dernières actualités",
    card_news_desc: "Restez à jour avec les dernières informations sur eFootball.",
    card_leaks: "Leaks",
    card_leaks_desc: "Découvrez les rumeurs, le contenu à venir et les mises à jour possibles.",
    card_builds: "Builds joueurs",
    card_builds_desc: "Découvrez des idées d'entraînement et des conseils de progression.",

    news_title: "Dernières actualités",
    news_desc: "Cette page contiendra les dernières actualités et mises à jour eFootball.",

    leaks_title: "Leaks",
    leaks_desc: "Cette page contiendra les leaks, rumeurs et contenus cachés de eFootball.",

    players_title: "Joueurs",
    players_desc: "Cette page contiendra les informations, notes et analyses des joueurs.",

    builds_title: "Builds joueurs",
    builds_desc: "Cette page contiendra des builds d'entraînement, des idées de progression et des conseils.",

    contact_title: "Contact",
    contact_desc: "Vous pourrez ajouter ici votre e-mail ou vos liens vers les réseaux sociaux plus tard."
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
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.lang = lang;
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
