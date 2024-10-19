import Cookies from "js-cookie";

const Cart = {
  namespaced: true,
  state: () => ({ cart: null }),
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
  },
  actions: {
    // async addToCart({ commit }, product) {
    //   try {
    //     // Make the POST request to add the product to the cart

    //     const response = await fetch(
    //       "https://flowerest.e1s.me/api/add-to-cart",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           Cookies: "cart=jj11ezRHmHxWeJiRnWrOrr7Fx23LsQ",
    //         },

    //         body: JSON.stringify(product),
    //       }
    //     );

    //     // Parse the JSON response
    //     const CartRespons = await response.json();

    //     if (!response.ok || !CartRespons.success) {
    //       throw new Error(
    //         data.message || "Failed to add/update product in cart"
    //       );
    //     }
    //     console.log(CartRespons);
    //     // Fetch the existing cart from the cookie
    //     const existingCartCookie = Cookies.get("cart");
    //     let existingCart = existingCartCookie
    //       ? JSON.parse(existingCartCookie)
    //       : [];

    //     // Find if the product already exists in the cart
    //     const existingProductIndex = existingCart.findIndex(
    //       (item) => item.product_id === product.product_id
    //     );

    //     // If the product already exists, update the quantity and price
    //     if (existingProductIndex !== -1) {
    //       existingCart[existingProductIndex].quantity =
    //         CartRespons.data.cart.quantity;
    //       existingCart[existingProductIndex].price =
    //         CartRespons.data.cart.price;
    //       existingCart[existingProductIndex].total =
    //         CartRespons.data.cart.total;
    //     } else {
    //       // Otherwise, add the new product to the cart
    //       existingCart.push(CartRespons.data.cart);
    //     }
    //     // Save the updated cart back to the cookie
    //     Cookies.set("cart", JSON.stringify(existingCart), {
    //       path: "/",
    //       sameSite: "Lax",
    //       secure: true,
    //     });

    //     // Commit the updated cart to Vuex
    //     commit("SET_CART2", existingCart);
    //   } catch (error) {
    //     console.error("Error adding to cart:", error);
    //     // Handle error appropriately (e.g., show notification)
    //   }
    // },

    async addToCart({ commit }, product) {
      const headers = {
        "Content-Type": "application/json",
        // Cookie: "cart=DPSjVe1O0CB6JZebCGiIJkfm4f1rfY",
      };
      try {
        // const cartCookieValue = Cookies.get("cart");
        // if (cartCookieValue) {
        //   headers["Cookie"] = `cart=DPSjVe1O0CB6JZebCGiIJkfm4f1rfY`;
        // // }
        // console.log(cartCookieValue);

        console.log(headers);
        const response = await fetch(
          "https://flowerest.e1s.me/api/add-to-cart",
          {
            method: "POST",
            credentials: "include",
            headers: headers,
            body: JSON.stringify({
              ...product,
              cart: "DPSjVe1O0CB6JZebCGiIJkfm4f1rfY",
            }),
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
          Cookies.set("cart", CartData.cookie_value, {
            path: "/",
            sameSite: "Lax",
            secure: true,
          });
        }

        console.log(CartData);
      } catch (error) {
        console.error("Error adding to cart:", error);
        // Handle error appropriately (e.g., show notification)
      }
    },

    initializeCart({ commit }) {
      // Retrieve the cart from cookies when the app initializes
      const cookieName = "cart"; // Replace with your actual cookie name
      const cartCookie = Cookies.get(cookieName);

      if (cartCookie) {
        try {
          const cartData = JSON.parse(cartCookie);
          // commit("SET_CART2", cartData);
        } catch (error) {
          console.error("Error parsing cart cookie:", error);
          // Handle parsing error (e.g., clear invalid cookie)
          Cookies.remove(cookieName, { path: "/" });
        }
      }
    },
  },

  mutations: {
    SET_CART2(state, cart) {
      state.cart = cart;
    },
    CLEAR_CART(state) {
      state.cart = null;
    },
  },
};
export default Cart;
