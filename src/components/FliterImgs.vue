<template>
  <div class="Fliter">
    <div class="container">
      <div class="Imgs">
        <div class="Img-wrapper">
          <!--Fliter-->
          <div class="gallery-filter">
            <ul class="list">
              <li
                class="me-1"
                :class="{ active: selectedCategory === 'all' }"
                @click="selectCategory('all')"
              >
                <span href="#" class="Btn display7"> {{ $t("All") }} </span>
              </li>

              <li
                v-for="(item, index) in Data"
                :key="index"
                :class="{ active: selectedCategory === item.title }"
                @click="selectCategory(item.title)"
              >
                <span class="Btn display7">{{ item.title }}</span>
              </li>
            </ul>
          </div>

          <!-- Gallery -->
          <div class="gallery-row">
            <div class="row">
              <div
                class="d-flex flex-wrap"
                v-for="item in filteredImages"
                :key="item.title"
              >
                <div
                  class="item"
                  v-for="(img, imgIndex) in item.gallery"
                  :key="imgIndex"
                  @click="openModal(imgIndex)"
                >
                  <img :src="img" alt="" class="img-fluid m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="overlay-container" v-if="isModalOpen">
    <div class="dark-layer"></div>

    <div class="modal fade show d-block" tabindex="-1">
      <button
        type="button"
        class="btn-close position-absolute top-0 end-0 m-3 text-white"
        @click="closeModal"
        aria-label="Close"
      ></button>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <Swiper
              ref="swiper"
              :modules="modules"
              :initial-slide="currentIndex"
              loop
              :slides-per-view="1"
              :space-between="50"
              navigation
            >
              <swiper-slide v-for="(image, index) in onlyImages" :key="index">
                <img
                  :src="image"
                  :alt="Image"
                  class="img-fluid mx-auto w-100"
                />
              </swiper-slide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, computed, watch, watchEffect, onMounted } from "vue";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Data = inject("OccassionData");
// Reactive state for the selected category
const selectedCategory = ref("all");
const isModalOpen = ref(false);
const currentIndex = ref(0);
// let Imgs = ref([]);
// Method to set the selected category
const selectCategory = (category) => {
  selectedCategory.value = category;
};

const openModal = (index) => {
  currentIndex.value = index;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  console.log("close");
};

// Computed property to filter images based on the selected category
const filteredImages = computed(() => {
  if (selectedCategory.value === "all") {
    // Return all images if "All" is selected
    return Data.value;
  } else {
    // Filter images based on the selected category
    return Data.value.filter((item) => item.title === selectedCategory.value);
  }
});
const onlyImages = computed(() => {
  return Data.value.map((item) => item.gallery).flat();
});

const modules = [Navigation, Pagination];
</script>

<style lang="scss">
.Fliter {
  padding-top: 90px;
  padding-bottom: 90px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #ffffff;
  .Text {
    h3 {
      color: #9e9e9e;
      margin-bottom: 0.4375rem;
    }
    .title {
      & strong:first-child {
        color: #000;
      }
    }
  }

  .Imgs {
    .gallery-filter {
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: left;
      padding-right: 0;
      padding-left: 0;
      text-align: center;
      .list {
        display: inline-block;

        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        text-align: left;
        li {
          display: inline-block;
          padding: 5px 0;
          transition: all 0.3s ease-out;
          &.active {
            // Target active li elements
            .Btn::after {
              border-color: #0c5b47; // Apply your styles here
            }
          }
          .Btn {
            position: relative;
            padding: 0.5rem 1rem 0.6rem;
            margin: 0;
            background-color: transparent;
            border-width: 0;
            color: #0c5b47;

            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              border: 1px solid transparent;
              border-radius: 100px;
              opacity: 0.5;
              &.active {
                border-color: #0c5b47 !important;
              }
            }
            &:hover::after {
              border-color: #0c5b47;
            }
          }
        }
      }
    }

    .gallery-row {
      position: relative;

      .item {
        position: relative;
        img {
          border-radius: 15px;
        }
        &:hover {
          &::before {
            opacity: 0.4; // Change opacity on hover
          }

          img,
          span {
            opacity: 1; // Full opacity on hover
          }

          .title {
            display: block; // Display title on hover
          }
        }
      }
    }
  }
}
.overlay-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  z-index: 1000;
}
.dark-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Black color with 50% opacity */
  z-index: 1; /* Behind the content */
}
.btn-close {
  z-index: 2;
  cursor: pointer;
}
.modal {
  position: relative;
  z-index: 3; /* Above the dark layer */
  .modal-content {
    background: none;
    border: none;
    outline: none;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    margin: 0 1rem;
    top: 50%;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: all 0.5s ease;
    opacity: 1;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    position: inherit;
    color: #24262b;
    font-size: 22px;
  }
}
</style>
