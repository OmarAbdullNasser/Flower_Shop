<template>
  <div class="section product">
    <div class="container">
      <div v-if="loading" class="col-12">
        <div class="d-flex justify-content-center">
          <div class="loader text-primary" role="status"></div>
        </div>
      </div>

      <div v-else class="row">
        <div class="col-12 col-lg-6 mb-3 mb-lg-0">
          <img :src="SingleProduct.image" class="img-fluid" alt="" />
        </div>

        <div class="col-12 col-md-6">
          <div class="right">
            <div class="Card" v-if="SingleProduct.price_after_sale">
              <p class="desc1 display4">SALE</p>
            </div>
            <p class="display2 name">
              <strong>{{ SingleProduct.title }}</strong>
            </p>
            <div class="price-line d-flex">
              <p class="desc2 display5" v-if="SingleProduct.price_after_sale">
                <s>$ {{ SingleProduct.price_after_sale }}</s>
              </p>
              <p class="plus1 display5">
                <strong>&nbsp;</strong>
                $ {{ SingleProduct.price }}
              </p>
            </div>
            <p class="display4 text" v-html="SingleProduct.description"></p>
            <div class="btn-section d-flex flex-column">
              <div class="counter mx-3 my-3">
                <button
                  @click="decrement"
                  class="btn-decrement"
                  :disabled="quantity === 1"
                >
                  -
                </button>
                <span class="QuantityValue">{{ quantity }}</span>
                <button @click="increment" class="btn-increment">+</button>
              </div>
              <button
                class="buy-btn btn display7 mx-3 mb-0"
                @click="addToCart2(SingleProduct)"
              >
                Buy Now
              </button>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong> Category:</strong>
              </p>
              <p class="plus display4">&nbsp; {{ SingleProduct.category }}</p>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong> occasions:</strong>
              </p>
              <span
                class="plus display4"
                v-for="occasion in SingleProduct.occasions"
                :key="occasion"
                >&nbsp; , {{ occasion }}
              </span>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong>Product ID:</strong>
              </p>
              <p class="plus display4">&nbsp; {{ SingleProduct.slug }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";

const url = inject("url");
const route = useRoute();
const store = useStore();
const SingleProduct = ref(null);
const loading = ref(true);
const quantity = ref(1);
const slugparam = route.params.slug;
const isToastVisible = ref(false);
const TotalProduct = computed(() => store.getters["Cart/cartLength"]);

const ProductData = ref({
  product_id: 0,
  product_name: "",
  quantity: 0,
  price: 0,
});
const getSingleProductByFliter = async (lang) => {
  try {
    const result = await fetch(`${url}/products/${slugparam}`, {
      method: "GET", // Specify the method if needed
      headers: {
        "Accept-Language": `${lang}`,
      },
    });
    const respons = await result.json();
    SingleProduct.value = respons.data;

    if (result) {
      loading.value = false;
    } else {
      console.log("Product not found");
    }
  } catch (error) {
    console.error("Error during search:", error);
  }
};

// const addToCart = async (item) => {
//   try {
//     ProductData.value = {
//       product_id: item.id,
//       product_name: item.title,
//       quantity: quantity.value, // Make sure quantity is a reactive property if needed
//       price: item.price,
//     };
//     const response = await fetch(`${url}/add-to-cart`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(ProductData.value),
//     });
//     console.log(await response.json());
//     if (!response.ok) {
//       throw new Error("Failed to send message");
//     }

//     toaster.success("Prodect Added to Cart successfully!", {
//       duration: 3000,
//       position: "top",
//     });

//     // Optionally, reset the form after success
//     ProductData.value = {
//       product_id: 0,
//       product_name: "",
//       quantity: 0,
//       price: 0,
//     };
//   } catch (error) {
//     console.error("Error:", error);
//     toaster.error(
//       "There was an issue sending your message. Please try again.",
//       {
//         duration: 3000, // Optional duration for the toast
//         position: "top",
//       }
//     );
//   }
// };

const addToCart2 = async (item) => {
  ProductData.value = {
    product_id: item.id,
    product_name: item.title,
    quantity: quantity.value, // Make sure quantity is a reactive property if needed
    price: item.price,
  };

  await store.dispatch("Cart/addToCart", ProductData.value);


  ProductData.value = {
    product_id: 0,
    product_name: "",
    quantity: 0,
    price: 0,
  };
};

const increment = () => {
  quantity.value += 1;
};
const decrement = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

watch(
  () => route.params.lang, // Watch the 'lang' parameter in the route
  async (newLang) => {
    loading.value = true; // Set loading state to true while fetching
    await getSingleProductByFliter(newLang); // Call fetchHomeData with the new language
  },
  { immediate: true } // Call the watcher immediately upon component mount
);

onMounted(() => {
  getSingleProductByFliter(route.params.lang);
});
</script>

<style lang="scss" scoped>
.product {
  padding-top: 75px;
  padding-bottom: 75px;
  background-color: #ffffff;

  .img-fluid {
    height: 614px;
    max-width: 100%;
  }

  .right {
    padding-left: 10px;
    .Card {
      margin-bottom: 30px;
      .desc1 {
        padding: 0px 10px;
        background: #3f37c9;
        display: inline;
        width: auto;
        color: #ffffff;
      }
    }
    .name {
      margin-bottom: 20px;
      color: #000;
    }
    .price-line {
      margin-bottom: 27px;
      .desc2 {
        color: #909190;
      }
      .plus1 {
        color: #3f37c9;
      }
    }
    .text {
      margin-bottom: 40px;
      color: #52586a;
    }
    .btn-section {
      margin-bottom: 34px;
      color: #52586a;
      .QuantityValue {
        color: blue;
      }
      .buy-btn {
        border: 2px solid #400a3f;
        background-color: #fedadc;
        width: 107px;
      }
      a {
        padding: 0.5625rem 2.3125rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 10px;
        cursor: pointer;
        background-color: #fef1e6;
        border-color: #fef1e6;
        color: #10634e;
      }
    }
    .price-line1 {
      margin-bottom: 10px;
      color: #111213;
      .plus {
        color: #52586a;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .product {
    .img-fluid {
      max-width: 100%;
      height: auto;
      margin-left: 0;
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

.counter {
  display: flex;
  align-items: center;

  .btn-decrement,
  .btn-increment {
    width: 30px;
    height: 30px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
