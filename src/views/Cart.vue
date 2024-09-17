<template>
  <div class="container mt-5">
    <h2>Your Cart</h2>
    <ul class="list-group mb-3">
      <li
        class="list-group-item"
        v-for="item in $store.state.cart"
        :key="item.slug"
      >
        {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
        <button
          class="btn btn-danger float-end"
          @click="removeFromCart(item.slug)"
        >
          Remove
        </button>
      </li>
    </ul>
    <h4>Total: ${{ cartTotal }}</h4>
  </div>
</template>

<script setup>
import { useStore } from "vuex"; // Import Vuex store
import { computed, watchEffect } from "vue";

name = "Cart";
// Access Vuex store
const store = useStore();

// Use computed properties to get the cart items and total from Vuex
const cartItems = computed(() => store.getters.cartItems);
const cartTotal = computed(() => store.getters.cartTotal);

// Function to remove an item from the cart
const removeFromCart = (itemId) => {
  store.commit("REMOVE_FROM_CART", itemId);
};
</script>
