<template>
  <div class="heaader p-3">
    <h2 class="text-center">Your Cart</h2>
  </div>
  <div class="container my-5">
    <div class="row">
      <div class="product_list col-12 col-lg-8">
        <ul class="m-0 px-0">
          <li
            v-for="Prodect in Prodects"
            :key="Prodect.id"
            class="product p-3 mb-3 d-flex g-2 flex-column flex-lg-row justify-content-between align-items-center flex-wrap"
          >
            <div class="img-box mb-3 mb-lg-0">
              <img src="../assets/flower-img.jpg" class="img-fluid" alt="" />
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
                readonly
              />
              <button class="btn btn-secondary">تعديل</button>
            </div>

            <div class="total my-3 my-lg-0">
              <h4 class="mx-auto">{{ Prodect.total }}</h4>
            </div>
            <div class="remove_producet d-flex align-items-center">
              <button @click="DeletItem(Prodect.id)" class="btn btn-danger">
                X
              </button>
            </div>
          </li>

          <!-- <li
            class="product p-3 mb-3 d-flex g-2 flex-column flex-lg-row justify-content-between align-items-center flex-wrap"
          >
            <div class="img-box mb-3 mb-lg-0">
              <img src="../assets/flower-img.jpg" class="img-fluid" alt="" />
            </div>

            <div
              class="product_info mx-auto d-flex flex-column align-items-center justify-content-center mx-lg-2 my-3 my-lg-0"
            >
              <h5>
                <a href="#"> كل يوم صدقة </a>
              </h5>
              <span class="my-3">كل يوم 3 ريال</span>
              <span> 1095 ريال </span>
            </div>

            <div class="product_amounts text-center">
              <input type="number" min="1" class="mx-3" />
              <button class="btn btn-secondary">تعديل</button>
            </div>

            <div class="total my-3 my-lg-0">
              <h4 class="mx-auto">1095 ريال</h4>
            </div>
            <div class="remove_producet d-flex align-items-center">
              <button class="btn btn-danger">X</button>
            </div>
          </li> -->
        </ul>
      </div>

      <div class="total_price col-12 col-lg-4">
        <div class="total d-flex flex-column p-5">
          <div class="total_product d-flex justify-content-between">
            <span>المجموع</span>
            <span>2095 ريال </span>
          </div>
          <hr />
          <button class="btn btn-success w-50 mx-auto mt-1">
            <router-link :to="{ path: `/${route.params.lang}/checkout` }">
              المتابعه للدفع
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, inject, onMounted, watchEffect, ref } from "vue";
import { useRoute } from "vue-router";

name = "Cart";
// Access Vuex store
const store = useStore();
const route = useRoute();
const url = inject("url");
const Prodects = ref([]);
const CartCookie = computed(() => store.getters["Cart/Cookies"]);
// Create an asynchronous function to perform the GET request
const FetchDataCart = async () => {
  try {
    // Use the fetch API to send a GET request

    const response = await fetch(`${url}/cart-items?cart=${CartCookie.value}`);

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const CartData = await response.json();
    const data = CartData.data;
    // Display the fetched data in the console
    Prodects.value = data;
    console.log("Fetched Data:", data);
  } catch (error) {
    // Handle and log any errors
    console.error("Error fetching data:", error);
  }
};

const DeletItem = async (id) => {
  try {
    const response = await fetch(
      `${url}/delete-item?cart_cookie=${CartCookie}`,
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

    if (!response.ok) {
      throw new Error(
        DeletResponse.message || "Failed to add/update product in cart"
      );
    }

    console.log(DeletResponse);
  } catch (error) {
    console.error("Error remove from cart:", error);
    // Handle error appropriately (e.g., show notification)
  }
};
onMounted(() => console.log(FetchDataCart()));
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
</style>
