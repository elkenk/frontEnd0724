import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {

        "admin.maintain-categories" : "Maintain categories",
        "admin.maintain-shops" : "Maintain shops",
        "admin.add-product" : "Add product",
        "admin.maintain-product" : "Maintain product",
       
        "admin.book-supplier" : "Our books supplier",
        "admin.supplier" : "Our products supplier",

        "nav.main-page" : "Main page",
        "nav.admin" : "Admin",
        "nav.shops" : "Our shops",
        "nav.contact" : "Contact us",
        "nav.cart" : "To cart",
        "nav.login" : "Login",
        "nav.signup" : "Sign up",

        "con.name" : "name",
        "con.message" : "message",
        "con.send" : "send"
    }
  },
  ee: {
    translation: {
        "admin.maintain-categories" : "Halda kategooriaid",
        "admin.maintain-shops" : "Halda poode",
        "admin.add-product" : "Lisa toode",
        "admin.maintain-product" : "Halda toodet",
     
        "admin.supplier" : "Meie toodete tarnija",
       "admin.book-supplier" : "Meie raamatute tarnija",

       "nav.main-page" : "Pealeht",
       "nav.admin" : "Admin",
       "nav.shops" : "Meie poed",
       "nav.contact" : "Võta ühendust",
       "nav.cart" : "Ostukorvi",
       "nav.login" : "Logi sisse",
       "nav.signup" : "Registreeru",

       "con.name" : "nimi",
        "con.message" : "sõnum",
        "con.send" : "saada"
    }
  },
  no: {
    translation: {
        "admin.maintain-categories" : "Oppretthold kategorier",
        "admin.maintain-shops" : "Vedlikeholde butikker",
        "admin.add-product" : "Legg til produkt",
        "admin.maintain-product" : "Vedlikeholde produktet",
       
        "admin.book-supplier" : "Vår bokleverandør",
        "admin.supplier" : "Våre produkter leverandør",

        "nav.main-page" : "Hovedside",
        "nav.admin" : "Admin",
        "nav.shops" : "Butikkene våre",
        "nav.contact" : "Kontakt oss",
        "nav.cart" : "Til handlevogn",
        "nav.login" : "Logg Inn",
        "nav.signup" : "Melde deg på"
    }
  },
  fi: {
    translation: {
        "admin.maintain-categories" : "Säilytä luokkia",
        "admin.maintain-shops" : "Ylläpidä kauppoja",
        "admin.add-product" : "Lisää tuote",
        "admin.maintain-product" : "Ylläpidä tuotetta",
       
        "admin.book-supplier" : "Kirjatoimittajamme",
        "admin.supplier" : "Tuotteidemme toimittaja",

        "nav.main-page" : "Pääsivu",
        "nav.admin" : "Admin",
        "nav.shops" : "Meidän kaupat",
        "nav.contact" : "Ota meihin yhteyttä",
        "nav.cart" : "Kärryyn",
        "nav.login" : "Kirjaudu sisään",
        "nav.signup" : "Kirjaudu"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "ee" ||"no" || "fi",// language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;