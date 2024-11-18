<template>
  <div class="FeedBack">
    <div class="container">
      <!-- Button trigger modal -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="modal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fs-5" id="exampleModalLabel">
                Help Us Bloom! 🌺
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h3>Give Your Feedback</h3>
              <p>
                Thank you for taking the time to share your thought, your
                feedback helps us bloom!
              </p>
              <div
                class="d-flex align-items-center justify-content-between"
                v-for="item in product"
                :key="item.id"
              >
                <div class="item d-flex align-items-center">
                  <img
                    :src="item.image"
                    alt=""
                    style="width: 50px; height: 50px"
                  />
                  <p class="mb-0">{{ item.title }}</p>
                </div>

                <div class="rate d-flex justify-content-evenly my-1">
                  <font-awesome-icon
                    v-for="(star, index) in 5"
                    :key="index"
                    class="star"
                    icon="star"
                    :class="{ selected: star <= item.rating }"
                    @click="setRating(item.id, star)"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-send" @click="SendFeedback">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Modal } from "bootstrap";
import { useStore } from "vuex";
let bootstrapModal = null;
const store = useStore();
const modal = ref(null);
const Rates = [];
const url = "https://flowerest.e1s.me/api";
const OrderId = computed(() => store.getters["Cart/OrederId"]);
const props = defineProps({
  items: Array,
});
const { order_id, product } = props.items;
console.log(product, "products");

// Update rating for a specific item on click
const setRating = (itemId, rating) => {
  const item = product.find((item) => item.id === itemId);
  const RatedItem = Rates.find((item) => item.id === itemId);
  if (item) {
    item.rating = rating; // Set the permanent rating
  }
  if (RatedItem) {
    item.rating = rating;
  } else {
    Rates.push({ id: itemId, rate: item.rating });
  }
};
const SendFeedback = async () => {
  const FeddbackResponse = await fetch(`${url}/rating/add`, {
    method: "POST", // Specify the method if needed
    headers: {
      Accept: "application/json",
      "Accept-Language": `ar`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rate: Rates,
      order_cookie: OrderId.value,
    }),
  });
  const respons = await FeddbackResponse.json();
  console.log(respons);
  if (!respons.success) {
    throw new Error(
      FeddbackResponse.message || "Failed to update product in cart"
    );
  } else {
    alert("Thank can for your feedback");
    store.commit("Cart/CLEAR_ORDERID");
    bootstrapModal.hide();
  }
};

onMounted(() => {
  bootstrapModal = new Modal(modal.value, {
    backdrop: "static",
    keyboard: false,
  });

  bootstrapModal.show();
});
</script>

<style lang="scss" scoped>
.FeedBack {
  .modal-content {
    background-color: #fcf5fc;
  }
  .modal-body {
    h3 {
      font-weight: bold;
      color: #784b77;
    }
    p {
      color: #52525b;
      font-size: 16px;
      line-height: 2;
    }
    .rate {
      .star {
        color: gray;
        cursor: pointer;
        font-size: 1.8rem;
        transition: all 0.3s;
      }
    }
    // .star.active,
    // .star:hover ~ .star.active {
    //   color: gold;
    // }

    // .star:hover,
    // .star.active ~ .star {
    //   color: gold;
    // }
    .rate .star {
      cursor: pointer;
      transition: color 0.1s;
    }

    // .rate .star:hover,
    // .rate .star:hover ~ .star {
    //   color: #ecbc26;
    // }
    .star.highlighted,
    .star.selected {
      color: gold;
    }
    /* Add transition delay for each star */
    .rate .star:nth-of-type(1) {
      transition-delay: 0s;
    }

    .rate .star:nth-of-type(2) {
      transition-delay: 0.05s;
    }

    .rate .star:nth-of-type(3) {
      transition-delay: 0.1s;
    }

    .rate .star:nth-of-type(4) {
      transition-delay: 0.15s;
    }

    .rate .star:nth-of-type(5) {
      transition-delay: 0.2s;
    }

    .Feedback {
      border-radius: 12px;
      resize: none;
      width: 100%;
      padding: 1rem;
    }
  }
  .modal-footer {
    .btn-send {
      background-color: #400a3f;
      color: #fff;
    }
  }
}
.item {
  gap: 2rem;
}
</style>
