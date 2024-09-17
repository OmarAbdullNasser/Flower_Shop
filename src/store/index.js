import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    cart: [],
    flowers: [],
    Meta: {},
  },

  mutations: {
    ADD_TO_CART(state, { item, q = 1 }) {
      // Check if the item is already in the cart
      const existingItem = state.cart.find(
        (cartItem) => cartItem.slug === item.slug
      );

      if (existingItem) {
        existingItem.quantity += q; // If it exists, just increase the quantity
      } else {
        state.cart.push({ ...item, quantity: q }); // Add new item to cart with quantity 1
      }
    },

    REMOVE_FROM_CART(state, slug) {
      state.cart = state.cart.filter((cartItem) => cartItem.slug !== slug);
    },

    SET_PRODUCTS(state, products) {
      state.flowers = products;
    },

    SET_META(state, meta) {
      state.Meta = meta;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        const FlowerResponse = await fetch("http://localhost:3000/items");
        const flowers = await FlowerResponse.json();

        commit("SET_PRODUCTS", flowers);
        //Pagination
        const MetaResponse = await fetch("http://localhost:3000/meta");
        const meta = await MetaResponse.json();
        commit("SET_META", meta);
      } catch (error) {
        console.error("Failed to fetch flowers:", error);
      }
    },
    SEARCH(state, slug) {
      const flower = state.getters.allProducts.find(
        (flower) => flower.slug == slug
      );
      return flower;
    },
  },

  getters: {
    cartItems: (state) => {
      return state.cart;
    },
    cartTotal: (state) => {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    allProducts: (state) => {
      return state.flowers;
    },

    Meta: (state) => {
      return state.Meta;
    },
  },

  modules: {},
  plugins: [vuexLocal.plugin],
});
