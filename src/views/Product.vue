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
          <img :src="imgSrc" class="img-fluid" alt="" />
        </div>
        <div class="col-12 col-md-6">
          <div class="right">
            <div class="Card" v-if="SingleProduct.price_after_sale">
              <p class="desc1 display4">SALE</p>
            </div>
            <p class="display2 name">
              <!-- <strong>Diamond Ring</strong> -->
              <strong>{{ SingleProduct.name }}</strong>
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
            <p class="display4 text">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
              aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor.
              <br />
              <br />
              Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt
              labore et dolore magna aliquyam.erat, sed diam voluptua. At vero
              accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut
              labore eirmod tempor invidunt magna aliquyam. Stet clitain vidunt
              ut labore.
            </p>
            <div class="btn-section d-flex">
              <a href="#" class="display7" @click="addToCart(SingleProduct)"
                >Buy Now</a
              >
              <div class="counter mx-3">
                <button
                  @click="decrement"
                  class="btn-decrement"
                  :disabled="quantity === 1"
                >
                  -
                </button>
                <span>{{ quantity }}</span>
                <button @click="increment" class="btn-increment">+</button>
              </div>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong> Category:</strong>
              </p>
              <p class="plus display4">&nbsp; {{ SingleProduct.color }}</p>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong> Tags:</strong>
              </p>
              <p class="plus display4">&nbsp; ring</p>
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
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
const SingleProduct = ref(null);
const loading = ref(true);
const quantity = ref(1);
const imgSrc = computed(() =>
  require(`@/assets/flowers/${SingleProduct.value.img}`)
);

//OPTIMIZE get elemnt by new requst
let slug = route.params.slug;

// const getSingleProductByLink = async () => {
//   try {
//     const FlowerResponse = await fetch(
//       `http://localhost:3000/items?slug=${slug}`
//     );
//     SingleProduct.value = await FlowerResponse.json();
//   } catch (error) {
//     console.error("Failed to fetch flower:", error);
//   } finally {
//     loading.value = false;
//   }
// };
const getSingleProductByFliter = async () => {
  try {
    const result = await store.dispatch("SEARCH", slug);
    if (result) {
      SingleProduct.value = result;
      console.log("Found:", result);
      loading.value = false;
    } else {
      console.log("Product not found");
    }
  } catch (error) {
    console.error("Error during search:", error);
  }
};

const addToCart = (item) => {
  store.commit("ADD_TO_CART", { item, q: quantity.value });
};

const increment = () => {
  quantity.value += 1;
};
const decrement = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

onMounted(() => {
  getSingleProductByFliter();
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
