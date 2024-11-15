<template>
  <div class="FeedBack">
    <div class="container">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
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
              <div class="rate d-flex justify-content-evenly my-1">
                <font-awesome-icon
                  v-for="(star, index) in 5"
                  :key="index"
                  class="star"
                  :class="{
                    Rated: index < rating,
                    HoverRated: index < HoverIndex,
                  }"
                  icon="star"
                  @click="SetRate(index + 1)"
                  @mouseenter="handleMouseEnter(index + 1)"
                  @mouseleave="handleMouseLeave"
                ></font-awesome-icon>
              </div>
              <textarea
                name="Feedback"
                class="Feedback mt-3"
                placeholder="Penny for your thoughts?"
              ></textarea>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-send">Send Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const rating = ref(0);
const HoverIndex = ref(-1);
const SetRate = (index) => {
  rating.value = index;
  console.log(index);
};
const handleMouseEnter = (index) => {
  HoverIndex.value = index;
};
const handleMouseLeave = () => {
  HoverIndex.value = -1;
};
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
      .HoverRated {
        color: #ecbc26;
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
  }
  .modal-footer {
    .btn-send {
      background-color: #400a3f;
      color: #fff;
    }
  }
}
</style>
