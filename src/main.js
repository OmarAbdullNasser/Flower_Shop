import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";
import Toaster from "@meforma/vue-toaster";
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

library.add(far, fab, fas);

const head = createHead();

const i18n = createI18n({
  locale: router.currentRoute.value.params.lang,
  messages: {
    en: en,
    ar: ar,
  },
});

//global css file
import "./global.css";
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(head)
  .use(Toaster)
  .use(i18n)
  .mount("#app");
