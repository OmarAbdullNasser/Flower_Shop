<template>
  <div class="FeedBack">
    <div class="container">
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
                    :class="{ Rated: star <= item.rating }"
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

              <button
                type="button"
                class="btn btn-send"
                @click="SendFeedback(route.params.lang)"
              >
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
import { ref, computed, onMounted, inject } from "vue";
import { Modal } from "bootstrap";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
let bootstrapModal = null;
const store = useStore();
const modal = ref(null);
const Rates = [];
const url = inject("url");

const OrderId = computed(() => store.getters["Cart/OrederId"]);
const props = defineProps({
  items: Array,
});
import Swal from "sweetalert2";
const { order_id, product } = props.items;

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
const SendFeedback = async (lang) => {
  const FeddbackResponse = await fetch(`${url}/rating/add`, {
    method: "POST", // Specify the method if needed
    headers: {
      Accept: "application/json",
      "Accept-Language": `${lang}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rate: Rates,
      order_cookie: OrderId.value,
    }),
  });
  const respons = await FeddbackResponse.json();

  if (!respons.success) {
    throw new Error(
      FeddbackResponse.message || "Failed to update product in cart"
    );
  } else {
    Swal.fire({
      title: "Feedback",
      text: "Thanks for yout Time",
      icon: "success",
      confirmButtonText: "ok",
    });
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

        font-size: 2.5rem;
        transition: all 0.3s;
      }
      .Rated {
        color: #ecbc26;
      }
    }

    font-size: 1.8rem;
    transition: all 0.3s;
  }
}

.rate .star {
  cursor: pointer;
  transition: color 0.1s;
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

.modal-footer {
  .btn-send {
    background-color: #400a3f;
    color: #fff;
  }
}

.item {
  gap: 2rem;
}
</style>
