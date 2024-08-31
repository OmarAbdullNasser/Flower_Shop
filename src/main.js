import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//Font awsome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far, fab ,fas);

//Fonts
import "@fontsource/quicksand"; // Defaults to weight 400.
import "@fontsource/crimson-text"; // Defaults to weight 400.
// Importing specific weights for Quicksand
import "@fontsource/quicksand/300.css"; // Weight 300
import "@fontsource/quicksand/400.css"; // Weight 400
import "@fontsource/quicksand/500.css"; // Weight 500
import "@fontsource/quicksand/600.css"; // Weight 600
import "@fontsource/quicksand/700.css"; // Weight 700

// Importing specific styles for Crimson Text
import "@fontsource/crimson-text/400.css"; // Normal weight
import "@fontsource/crimson-text/400-italic.css"; // Italic
import "@fontsource/crimson-text/600.css"; // Semi-bold
import "@fontsource/crimson-text/600-italic.css"; // Semi-bold italic
import "@fontsource/crimson-text/700.css"; // Bold
import "@fontsource/crimson-text/700-italic.css"; // Bold italic

//smaooth scroll
import VueSmoothScroll from "vue3-smooth-scroll";

//global css file
import "./global.css";
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueSmoothScroll)
  .use(store)
  .use(router)
  .mount("#app");
