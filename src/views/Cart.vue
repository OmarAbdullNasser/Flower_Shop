<template>
  <div class="heaader p-3">
    <h2 class="text-center">Your Cart</h2>
  </div>
  <div class="container my-5" v-if="!isLoading">
    <div class="row" v-if="cartLength">
      <div class="product_list col-12 col-lg-8">
        <ul class="m-0 px-0">
          <li
            v-for="Prodect in Prodects"
            :key="Prodect.id"
            class="product p-3 mb-3 d-flex g-2 flex-column flex-lg-row justify-content-between align-items-center flex-wrap"
          >
            <div class="img-box mb-3 mb-lg-0">
              <img :src="Prodect.product_image" class="img-fluid" alt="" />
            </div>

            <div
              class="product_info mx-auto d-flex flex-column align-items-center justify-content-center mx-lg-2 my-3 my-lg-0"
            >
              <h5>
                <span> {{ Prodect.product_name }} </span>
              </h5>
              <!-- <span class="my-3">كل يوم 3 ريال</span> -->
              <span> {{ Prodect.price }}</span>
            </div>

            <div class="product_amounts text-center">
              <input
                type="number"
                min="1"
                class="mx-3"
                :value="Prodect.quantity"
                @input="ChangeQuintity($event)"
                @change="ChangeQuintity($event)"
              />
              <button
                class="btn btn-secondary"
                @click="updateItemQuantity(Prodect.id, quantity)"
              >
                Edit
              </button>
            </div>

            <div class="total my-3 my-lg-0">
              <h4 class="mx-auto">{{ Prodect.quantity * Prodect.price }}</h4>
            </div>
            <div class="remove_producet d-flex align-items-center">
              <button @click="DeletItem(Prodect.id)" class="btn btn-danger">
                X
              </button>
            </div>
          </li>
        </ul>

        <div class="d-flex justify-content-end align-items-center my-3">
          <button
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#confirmDeleteModal"
          >
            Remove All Products
          </button>
          <div
            class="modal fade"
            id="confirmDeleteModal"
            tabindex="-1"
            aria-labelledby="confirmDeleteModalLabel"
            aria-hidden="true"
            ref="modalRef"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="confirmDeleteModalLabel">
                    Confirm Deletion
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Are you sure you want to remove all products from the cart?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="removeAllProducts"
                  >
                    Sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="total_price col-12 col-lg-4">
        <div class="total d-flex flex-column p-5">
          <div class="total_product d-flex justify-content-between">
            <h4>Total</h4>
            <h4>{{ TM }} L.E</h4>
          </div>
          <hr />
          <button class="btn btn-checkout w-50 mx-auto mt-1">
            <router-link :to="{ path: `/${route.params.lang}/checkout` }">
              Checkout
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column justify-content-center align-items-center empty-card"
      v-else
    >
      <h1 class="mb-4">Your card is empty</h1>
      <router-link
        :to="{
          name: 'home',
        }"
        class="btn"
        >Return to Home Page</router-link
      >
    </div>
  </div>
  <div v-if="isLoading" class="col-12 my-5">
    <div class="d-flex justify-content-center">
      <div class="loader text-primary" role="status"></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, inject, onMounted, watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import { Modal } from "bootstrap";
import { toast } from "vue3-toastify";

name = "Cart";
// Access Vuex store
const store = useStore();
const route = useRoute();
const url = inject("url");
const Prodects = ref([]);
const CartCookie = computed(() => store.getters["Cart/Cookies"]);
const cartLength = computed(() => store.getters["Cart/cartLength"]);
const TM = ref(0);
const quantity = ref(0);
const isLoading = ref(true);

const modalRef = ref(null);
const closeModal = () => Modal.getInstance(modalRef.value)?.hide();

const ChangeQuintity = (e) => {
  if (e.target.value > 0) {
    quantity.value = e.target.value;
  } else {
    e.target.value = 1;
  }
};

// Create an asynchronous function to perform the GET request
const FetchDataCart = async () => {
  try {
    // Use the fetch API to send a GET request

    const response = await fetch(
      `${url}/show-cart?cart_cookie=${CartCookie.value}`
    );

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const CartData = await response.json();
    const data = CartData.data;

    // Display the fetched data in the console
    Prodects.value = data.cart;
    TM.value = data.total_sum;

    store.commit("Cart/SET_CART", Prodects.value);
  } catch (error) {
    // Handle and log any errors
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false; // Set loading to false after fetching
  }
};

const DeletItem = async (id) => {
  try {
    const response = await fetch(
      `${url}/delete-item?cart_cookie=${CartCookie.value}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart_id: id,
        }),
      }
    );

    // Parse the JSON response
    const DeletResponse = await response.json();
    const data = DeletResponse.data;
    Prodects.value = Prodects.value.filter((item) => item.id !== id);
    TM.value = data.total;
    store.commit("Cart/DElETE_ITEM_CART", id);
    if (!response.ok) {
      throw new Error(
        DeletResponse.message || "Failed to remove product in cart"
      );
    }
  } catch (error) {
    console.error("Error remove from cart:", error);
    // Handle error appropriately (e.g., show notification)
  }
};

const updateItemQuantity = async (id, q) => {
  try {
    const response = await fetch(`${url}/update-quantity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_cookie: CartCookie.value,
        cart_id: id,
        quantity: q,
      }),
    });

    // Parse the JSON response
    const UpdateResponse = await response.json();
    TM.value = UpdateResponse.data.total;
    const Prodect = Prodects.value.filter((item) => item.id == id);
    Prodect[0].quantity = Number(q);
    store.commit("Cart/ADD_PRODUCT_TO_CART", Prodect[0]);
    if (!response.ok) {
      throw new Error(
        DeletResponse.message || "Failed to update product in cart"
      );
    } else {
      toast.success("Product Updated successfully!", {
        autoClose: 4000, // Close after 2 seconds
        position: "top-right",
      });
    }
  } catch (error) {
    console.error("Error remove from cart:", error);
    // Handle error appropriately (e.g., show notification)
  }
};
const removeAllProducts = async () => {
  try {
    const response = await fetch(
      `${url}/empty-cart?cart_cookie=${CartCookie.value}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Parse the JSON response
    const RemoveAllResponse = await response.json();
    console.log(RemoveAllResponse);
    store.commit("Cart/CLEAR_CART");
    closeModal();
    const modalBackdrops = document.querySelectorAll(".modal-backdrop");
    modalBackdrops.forEach((backdrop) => backdrop.remove());
    if (!response.ok) {
      throw new Error(
        RemoveAllResponse.message || "Failed to remove product in cart"
      );
    }
  } catch (error) {
    console.error("Error Empty  cart:", error);
    // Handle error appropriately (e.g., show notification)
  }
};
onMounted(() => FetchDataCart());
</script>

<style lang="scss" scoped>
.heaader {
  background: #e7d4e7;
  color: #784b77;
}

.product {
  background: #e7d4e7;
  border-radius: 15px;

  .img-box {
    img {
      border-radius: 0 15px 15px 0;
      margin-top: 0.5rem;
    }
  }

  .product_info {
    white-space: nowrap;
  }

  .product_amounts {
    width: 250px;

    input {
      border-radius: 5px;
      width: 100px;
    }
  }

  .remove_producet {
    margin: 0 9px;
  }
}

.total_price {
  .total {
    background: #e7d4e7;
    border-radius: 15px;
  }
  button {
    a {
      color: #fff;
    }
  }
  .btn-checkout {
    background-color: #400a3f;
  }
}

.empty-card {
  a {
    background-color: #400a3f;
    color: #fff;
    padding: 0.5rem;
  }
}
.modal-dialog {
  .modal-header {
    button {
      margin-left: 16rem;
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 998.1px) {
  .product {
    .img-box {
      width: 100%;

      img {
        border-radius: 0 15px 15px 0;
      }
    }
  }
}

@media screen and (min-width: 999px) {
  .product {
    .img-box {
      width: 20%;

      img {
        border-radius: 0 15px 15px 0;
      }
    }
  }
}

.loader {
  width: 60px;
  aspect-ratio: 1;
  border: 15px solid #ddd;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
}
.loader::before {
  content: "";
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 15px solid #514b82;
  animation: l18 2s infinite linear;
}
@keyframes l18 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
