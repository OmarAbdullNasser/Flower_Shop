import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "@/views/Products.vue";
import Landscape from "@/views/Landscape.vue";
import Events from "@/views/Events.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";
import ContentUs from "@/views/ContentUs.vue";
import NotFound from "@/views/NotFound.vue";
import store from "@/store";

import Chechout from "@/views/Chechout.vue";
import SinglePage from "@/views/SinglePage.vue";
import Router from "vue-router";

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
    path: "/:lang(en|ar)/Product/:slug",
    name: "Product",
    component: Product,
  },

  {
    path: "/:lang(en|ar)/Shipping",
    name: "Shipping",
    component: () => import("@/views/ShippingPage.vue"),
  },
  {
    path: "/:lang(en|ar)/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/:lang(en|ar)/contact-us",
    name: "Conenctus",
    component: ContentUs,
  },
  {
    path: "/:lang(en|ar)/checkout",
    name: "checkout",
<<<<<<< Updated upstream
    // component: Chechout,

    component: () => import("@/views/CO(Phase3).vue"),

=======
    component: () => import("@/views/Chechout.vue"),
>>>>>>> Stashed changes
    // beforeEnter: (to, from, next) => {
    //   // Check if the cart is empty using Vuex state
    //   const isCartEmpty = store.getters["Cart/cartItems"];
    //   console.log(isCartEmpty);
    //   // if (isCartEmpty) {
    //   //   // Allow access if the cart has items
    //   //   next();
    //   // } else {
    //   //   // Redirect to the cart page if empty
    //   //   next({ path: "/" });
    //   // }
    // },
  },
  {
    path: "/:lang(en|ar)/pages/:Pagename",
    name: "SinglePage",
    component: SinglePage,
  },
  {
    path: "/:lang(en|ar)?/:pathMatch(.*)*", // Catch-all route for not found pages
    name: "NotFound",
    component: NotFound,
    beforeEnter: (to, from, next) => {
      // If lang is not specified, redirect to default ('en')
      if (!to.params.lang) {
        next({ path: `/en/${to.params.pathMatch || ""}`, replace: true });
      } else {
        next(); // Continue to the NotFound component
      }
    },
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
  if (to.path.startsWith("/en")) {
    document.dir = "ltr";
    fetchNavbarData("en");
  } else if (to.path.startsWith("/ar")) {
    document.dir = "rtl";
    fetchNavbarData("ar");
  }

  next();
});

export default router;
