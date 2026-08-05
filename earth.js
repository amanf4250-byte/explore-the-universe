const translations = {
    en: {
        title: "Earth",
        subtitle: "Our home planet",
        aboutTitle: "🌎 About Earth",
        aboutText: "Earth is the third planet from the Sun and the only known planet where life exists. It has liquid water, an atmosphere rich in nitrogen and oxygen, and a wide variety of ecosystems.",
        factsTitle: "🔭 Earth Facts",
        historyTitle: "🕰️ Earth Before Humans",
        funTitle: "✨ Interesting Facts"
    },

    ur: {
        title: "زمین",
        subtitle: "ہمارا گھر سیارہ",
        aboutTitle: "🌎 زمین کے بارے میں",
        aboutText: "زمین سورج سے تیسرا سیارہ ہے اور اب تک معلوم واحد سیارہ ہے جہاں زندگی موجود ہے۔ یہاں مائع پانی، نائٹروجن اور آکسیجن سے بھرپور فضا اور مختلف ماحولیاتی نظام موجود ہیں۔",
        factsTitle: "🔭 زمین کے بارے میں معلومات",
        historyTitle: "🕰️ انسانوں سے پہلے زمین",
        funTitle: "✨ دلچسپ معلومات"
    },

    fa: {
        title: "زمین",
        subtitle: "سیاره خانه ما",
        aboutTitle: "🌎 درباره زمین",
        aboutText: "زمین سومین سیاره از خورشید و تنها سیاره شناخته‌شده‌ای است که در آن حیات وجود دارد.",
        factsTitle: "🔭 حقایق زمین",
        historyTitle: "🕰️ زمین پیش از انسان‌ها",
        funTitle: "✨ حقایق جالب"
    },

    fr: {
        title: "La Terre",
        subtitle: "Notre planète",
        aboutTitle: "🌎 À propos de la Terre",
        aboutText: "La Terre est la troisième planète à partir du Soleil et la seule planète connue où existe la vie.",
        factsTitle: "🔭 Faits sur la Terre",
        historyTitle: "🕰️ La Terre avant les humains",
        funTitle: "✨ Faits intéressants"
    },

    es: {
        title: "La Tierra",
        subtitle: "Nuestro planeta",
        aboutTitle: "🌎 Sobre la Tierra",
        aboutText: "La Tierra es el tercer planeta desde el Sol y el único planeta conocido donde existe vida.",
        factsTitle: "🔭 Datos sobre la Tierra",
        historyTitle: "🕰️ La Tierra antes de los humanos",
        funTitle: "✨ Datos interesantes"
    },

    pt: {
        title: "Terra",
        subtitle: "O nosso planeta",
        aboutTitle: "🌎 Sobre a Terra",
        aboutText: "A Terra é o terceiro planeta a partir do Sol e o único planeta conhecido onde existe vida.",
        factsTitle: "🔭 Factos sobre a Terra",
        historyTitle: "🕰️ A Terra antes dos humanos",
        funTitle: "✨ Factos interessantes"
    }
};


function changeLanguage() {

    const language = document.getElementById("language").value;
    const text = translations[language];

    document.getElementById("title").textContent = text.title;
    document.getElementById("subtitle").textContent = text.subtitle;
    document.getElementById("about-title").textContent = text.aboutTitle;
    document.getElementById("about-text").textContent = text.aboutText;
    document.getElementById("facts-title").textContent = text.factsTitle;
    document.getElementById("history-title").textContent = text.historyTitle;
    document.getElementById("fun-title").textContent = text.funTitle;

    document.documentElement.lang = language;
}
