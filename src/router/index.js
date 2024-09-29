import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "@/views/Products.vue";
import Landscape from "@/views/Landscape.vue";
import Events from "@/views/Events.vue";
import Repair from "@/views/Repair.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";
import ContentUs from "@/views/ContentUs.vue";

const routes = [
  {
    path: "/",
    redirect: "/en/home",
  },
  {
    path: "/:lang(en|ar)/home",
    name: "home",
    component: Home,
  },
  {
    path: "/:lang(en|ar)/shop",
    name: "Products",
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
    path: "/:lang(en|ar)/Product/:slug",
    name: "Product",
    component: Product,
  },
  {
    path: "/:lang(en|ar)/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/:lang(en|ar)/Conenctus",
    name: "Conenctus",
    component: ContentUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { lang } = to.params;

  // If no language is specified or it's invalid, default to 'en'
  if (!lang || (lang !== "en" && lang !== "ar")) {
    next({ path: `/en${to.path.replace(/\/(en|ar)/, "")}` });
  } else {
    next(); // Continue with the route
  }
});

export default router;
