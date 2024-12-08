import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";

const routes = [
  {
    path: "/",
    redirect: "/en",
  },
  {
    path: "/:lang(en|ar)",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/:lang(en|ar)/shop",
    name: "shop",
    component: () => import("@/views/Products.vue"),
  },
  {
    path: "/:lang(en|ar)/Landscape",
    name: "Landscape",
    component: () => import("@/views/Landscape.vue"),
  },
  {
    path: "/:lang(en|ar)/Events",
    name: "Events",
    component: () => import("@/views/Events.vue"),
  },

  {
    path: "/:lang(en|ar)/Product/:slug",
    name: "Product",
    component: () => import("@/views/Product.vue"),
  },

  {
    path: "/:lang(en|ar)/Shipping",
    name: "Shipping",
    component: () => import("@/views/ShippingPage.vue"),
  },
  {
    path: "/:lang(en|ar)/Cart",
    name: "Cart",
    component: () => import("@/views/Cart.vue"),
  },
  {
    path: "/:lang(en|ar)/contact-us",
    name: "Conenctus",
    component: () => import("@/views/ContentUs.vue"),
  },
  {
    path: "/:lang(en|ar)/checkout",
    name: "checkout",
    // component: Chechout,

    component: () => import("@/views/CO(Phase3).vue"),

 
  },
  {
    path: "/:lang(en|ar)/pages/:Pagename",
    name: "SinglePage",
    component: () => import("@/views/SinglePage.vue"),
  },
  {
    path: "/:lang(en|ar)/Shipping/:id",
    name: "Shipping",
    component: () => import("@/views/ShippingPage.vue"),
  },
  {
    path: "/:lang(en|ar)?/:pathMatch(.*)*", // Catch-all route for not found pages
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
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
  // base: process.env.BASE_URL || "/",
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
