import { createApp, watch } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";
import Vue3Toastify, { toast } from "vue3-toastify";
import { createI18n } from "vue-i18n";
import en from "./locale/en.json";
import ar from "./locale/ar.json";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap";

//Font awsome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "vue3-toastify/dist/index.css";
library.add(far, fab, fas);

const head = createHead();

const i18n = createI18n({
  locale: "en",
  messages: {
    en: en,
    ar: ar,
  },
});

console.log(router);
watch(
  () => router.currentRoute.value.params.lang, // Watch the "lang" route parameter
  (newLang) => {
    if (newLang && ["en", "ar"].includes(newLang)) {
      i18n.global.locale = newLang; // Set the new locale dynamically
    } else {
      i18n.global.locale = "en"; // Fallback to "ar" if no valid param
    }
  },
  { immediate: true } // Run immediately to set initial locale
);

//global css file
import "./global.css";
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(head)
  .use(Vue3Toastify, {
    autoClose: 2000,
  })
  .use(i18n)
  .mount("#app");
