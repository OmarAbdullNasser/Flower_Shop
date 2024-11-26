import Cookies from "js-cookie";
import { toast } from "vue3-toastify";

const Cart = {
  namespaced: true,
  state: () => ({ cart: [], cart_cookie: null, OrederId: null }),
  getters: {
    cartItems: (state) => {
      return state.cart;
    },
    cartLength: (state) => {
      if (!state.cart) {
        return 0;
      }
      return state.cart.reduce((total, product) => total + product.quantity, 0);
    },
    TotalMoney: (state) => {
      if (!state.cart) {
        return 0;
      }
      return state.cart.reduce((total, product) => {
        const productTotal = Number(product.total) || 0; // Ensure it's a number
        return total + productTotal;
      }, 0);
    },
    Cookies: (state) => {
      return state.cart_cookie;
    },
    OrederId: (state) => {
      return state.OrederId;
    },
  },
  actions: {
    async addToCart({ commit, getters }, product) {
      const User_Cookie = getters.Cookies;

      if (User_Cookie) {
        product["cart_cookie"] = `${User_Cookie}`;
      }

      try {
        const response = await fetch(
          "https://flowerest.e1s.me/api/add-to-cart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        // Parse the JSON response
        const CartResponse = await response.json();
        const CartData = CartResponse.data;

        if (!response.ok || CartData.type !== "success") {
          throw new Error(
            CartResponse.message || "Failed to add/update product in cart"
          );
        }

        if (CartData.cookie_value) {
          commit("SET_COOKIE", CartData.cookie_value);
          commit("ADD_PRODUCT_TO_CART", product);
        }
        toast.success("Product added successfully!", {
          autoClose: 2000, // Close after 2 seconds
          position: "top-right",
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
        // Handle error appropriately (e.g., show notification)
      }
    },
  },

  mutations: {
    SET_CART(state, data) {
      state.cart = data;
    },
    CLEAR_CART(state) {
      state.cart = null;
    },
    DElETE_ITEM_CART(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    SET_COOKIE(state, data) {
      state.cart_cookie = data;
    },
    ADD_PRODUCT_TO_CART(state, product) {
      if (!Array.isArray(state.cart)) {
        state.cart = [];
      }
      // Check if the product already exists in the cart
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product already exists, increase its quantity
        existingProduct.quantity += product.quantity || 1;
      } else {
        // If the product is new, add it to the cart
        state.cart.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    UPDATE_PRODUCT_QUNITTY(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      console.log(product.quantity);
      if (existingProduct) {
        // If the product already exists, increase its quantity
        existingProduct.quantity = product.quantity || 1;
      } else {
        return;
      }
    },

    SET_ORDERID(state, data) {
      state.OrederId = data;
    },
    CLEAR_COOKIE(state) {
      state.cart_cookie = null;
    },
    CLEAR_ORDERID(state) {
      state.OrederId = null;
    },
  },
};
export default Cart;
