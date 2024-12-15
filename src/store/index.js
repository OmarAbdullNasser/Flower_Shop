import { createStore } from "vuex";
import Cart from "./Cart";
import VuexPersist from "vuex-persist";

// const url = inject("url");
const url = "https://dashboard.daliaelhaggar.com/api";

const vuexLocalStorage = new VuexPersist({
  key: "Cart", // Name of the key in storage
  storage: window.localStorage, // Use localStorage to store state
  modules: ["Cart"], // Specify which modules to persist
});

export default createStore({
  state: {
    flowers: [],
    Meta: {},
    ids: [],
    occasions: [],
    sortby: "",
    priceFrom: 0,
    priceto: 0,
    menu: [],
    footer: [],
    CartNum: 0,
    locale: "",
    AddressState: "HasAdress",
    PaymentMethod: "CashHome",
    SenderObj: {},
    Links: [],
    PageNum: 0,
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
    SET_SORT(state, sort) {
      state.sortby = sort;
    },

    SET_META(state, meta) {
      state.Meta = meta;
    },

    SET_PRICE_FROM(state, pf) {
      state.priceFrom = pf;
    },

    SET_PRICE_TO(state, pt) {
      state.priceto = pt;
    },

    SET_IDS(state, id) {
      if (state.ids.includes(id)) {
        // If the id exists, remove it
        state.ids = state.ids.filter((existingId) => existingId !== id);
      } else if (id) {
        // If the id doesn't exist, add it
        state.ids.push(id);
      }
    },
    SET_OCCASIONS(state, id) {
      if (state.occasions.includes(id)) {
        // If the id exists, remove it
        state.occasions = state.occasions.filter(
          (existingId) => existingId !== id
        );
      } else if (id) {
        // If the id doesn't exist, add it
        state.occasions.push(id);
      }
    },

    SET_MENU(state, data) {
      state.menu = data;
    },
    SET_FOOTER(state, data) {
      state.footer = data;
    },
    SET_CART(state, data) {
      state.CartNum = data;
    },
    SET_LOCALE(state, data) {
      state.locale = data;
    },
    SET_ADDRESS(state, data) {
      state.AddressState = data;
    },
    SET_PAYMENT(state, data) {
      state.PaymentMethod = data;
    },
    SET_SENDER(state, data) {
      state.SenderObj = { ...state.SenderObj, ...data };
      localStorage.setItem("SenderObj", JSON.stringify(state.SenderObj));
    },
    SET_LINKS(state, data) {
      state.Links = data;
    },
    CLEAR_SENDER(state) {
      state.SenderObj = {};
    },
    updateSenderObj(state, { key: newValue }) {
      state.SenderObj[key] = newValue;
    },
    SET_PAGE(state, data) {
      state.PageNum = data;
    },
  },

  actions: {
    //Get all Producsts
    async fetchProducts({ commit }, key = 1) {
      try {
        const FlowerResponse = await fetch(`${url}/products?page=${key}`);
        const respons = await FlowerResponse.json();

        const { items, pagination } = respons.data;

        commit("SET_PRODUCTS", items);
        commit("SET_META", pagination);
      } catch (error) {
        console.error("Failed to fetch flowers:", error);
      }
    },

    //Get  Category
    async fetchFliter(
      { commit },
      { catid, occasionid, sort, priceFrom, pricertTo, page },
      lang = "en"
    ) {
      commit("SET_IDS", catid);
      commit("SET_OCCASIONS", occasionid);
      commit("SET_SORT", sort);
      commit("SET_PRICE_FROM", priceFrom);
      commit("SET_PRICE_TO", pricertTo);

      // Constructing the individual query parts
      const categoriesQuery = this.getters.ids.length
        ? `categories=[${this.getters.ids.join(",")}]`
        : "";
      const occasionsQuery = this.getters.occasions.length
        ? `occasions=[${this.getters.occasions.join(",")}]`
        : "";
      const sortbyQuery = this.getters.sortby
        ? `sort=${this.getters.sortby}`
        : "";
      const pf = this.getters.pf ? `from_price=${this.getters.pf}` : "";
      const pt = this.getters.pt ? `to_price=${this.getters.pt}` : "";

      // Joining the queries
      let query = "";

      if (categoriesQuery) {
        query += categoriesQuery; // No need to wrap it again
      }
      if (occasionsQuery) {
        query += query ? `&${occasionsQuery}` : occasionsQuery;
      }
      if (sortbyQuery) {
        query += query ? `&${sortbyQuery}` : sortbyQuery;
      }
      if (pf) {
        query += query ? `&${pf}` : pf;
      }
      if (pt) {
        query += query ? `&${pt}` : pt;
      }

      if (query) {
        try {
          const FlowerResponse = await fetch(
            `${url}/products?${query}&page=${page}`
          );
          const respons = await FlowerResponse.json();

          const { items, pagination } = respons.data;

          commit("SET_PRODUCTS", items);
          commit("SET_META", pagination);
        } catch (error) {
          console.error("Failed to fetch flowers:", error);
        }
      } else {
        try {
          const FlowerResponse = await fetch(`${url}/products?page=${page}`);
          const respons = await FlowerResponse.json();

          const { items, pagination } = respons.data;

          commit("SET_PRODUCTS", items);
          commit("SET_META", pagination);
        } catch (error) {
          console.error("Failed to fetch flowers:", error);
        }
      }
    },

    //Search for produect
    SEARCH(state, slug) {
      const flower = state.getters.allProducts.find(
        (flower) => flower.slug == slug
      );
      return flower;
    },

    //Fetch Navbar data
    async fetchNavbarData({ commit }, lang = "en") {
      try {
        const FlowerResponse = await fetch(`${url}/menu`, {
          headers: {
            "Accept-Language": `${lang}`,
          },
        });
        const respons = await FlowerResponse.json();

        const { main, footer, cart_num, site_setting } = respons.data;

        commit("SET_MENU", main);
        commit("SET_FOOTER", footer);
        commit("SET_CART", cart_num);
        commit("SET_LINKS", site_setting);
      } catch (error) {
        console.error("Failed to fetch flowers:", error);
      }
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
    cartquantity: (state) => {
      return state.cart.reduce(
        (acc, curretValue) => acc + curretValue.quantity,
        0
      );
    },
    ids: (state) => {
      return state.ids;
    },
    occasions: (state) => {
      return state.occasions;
    },
    sortby: (state) => {
      return state.sortby;
    },
    pf: (state) => {
      return state.priceFrom;
    },
    pt: (state) => {
      return state.priceto;
    },
    menu: (state) => {
      return state.menu;
    },
    footer: (state) => {
      return state.footer;
    },
    cart: (state) => {
      return state.CartNum;
    },
    locale: (state) => {
      return state.locale;
    },
    address: (state) => {
      return state.AddressState;
    },
    payment: (state) => {
      return state.PaymentMethod;
    },
    senderObj: (state) => {
      return state.SenderObj;
    },
    SiteLinks: (state) => {
      return state.Links;
    },
    PgNum: (state) => {
      return state.PageNum;
    },
  },

  modules: {
    Cart,
  },
  plugins: [vuexLocalStorage.plugin],
});
