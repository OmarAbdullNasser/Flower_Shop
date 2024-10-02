import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "@/views/Products.vue";
import Landscape from "@/views/Landscape.vue";
import Events from "@/views/Events.vue";
import Repair from "@/views/Repair.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";
import ContentUs from "@/views/ContentUs.vue";
import NotFound from "@/views/NotFound.vue";
import store from "@/store";
import { computed, watchEffect } from "vue";

// const lang = computed(() => store.getters.lang);

const routes = [
  {
    path: "/",
    redirect: "/en",
  },
  {
    path: "/:lang(en|ar)",
    name: "home",
    component: Home,
  },
  {
    path: "/:lang(en|ar)/shop",
    name: "shop",
    component: Products,
  },
  {
    path: "/:lang(en|ar)/Landscape",
    name: "Landscape",
    component: Landscape,
  },
  {
    path: "/:lang(en|ar)/Events",
    name: "Events",
    component: Events,
  },
  {
    path: "/:lang(en|ar)/Repair",
    name: "Repair",
    component: Repair,
  },
  {
    path: "/Product/:slug",
    name: "Product",
    component: Product,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Conenctus",
    name: "Conenctus",
    component: ContentUs,
  },
  {
    path: "/:pathMatch(.*)*", // Catch-all route for not found pages
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const fetchNavbarData = async (lang) => {
  await store.dispatch("fetchNavbarData", lang);
};

router.beforeEach((to, from, next) => {
  // Check the path to see if it contains '/en' or '/ar'
  const lang = to.params.lang;
  if (to.path.startsWith("/en")) {
    document.dir = "ltr";
    fetchNavbarData("en");
  } else if (to.path.startsWith("/ar")) {
    document.dir = "rtl";
    fetchNavbarData("ar");
  }
  if (!lang || (lang !== "en" && lang !== "ar")) {
    next({ path: `/en${to.path.replace(/\/(en|ar)/, "")}` });
  } else {
    next(); // Continue with the route
  }
});
export default router;
