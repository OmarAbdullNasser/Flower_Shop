import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "@/views/Products.vue";
import Landscape from "@/views/Landscape.vue";
import Events from "@/views/Events.vue";
import Repair from "@/views/Repair.vue";
import Product from "@/views/Product.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Products",
    component: Products,
  },
  {
    path: "/Landscape",
    name: "Landscape",
    component: Landscape,
  },
  {
    path: "/Events",
    name: "Events",
    component: Events,
  },
  {
    path: "/Repair",
    name: "Repair",
    component: Repair,
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
