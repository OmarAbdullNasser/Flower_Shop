<template>
  <div class="VerticalSlider my-0">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="d-flex">
          <div class="paginationImg">
            <img
              v-for="(Img, index) in props.initialImages"
              :key="index"
              :src="Img.image"
              alt=""
              class="img-fluid p-3 my-3"
              :class="{ active: activeSlide === index }"
              @click="handleClick(index)"
            />
          </div>

          <Swiper
            :slides-per-view="1"
            :space-between="50"
            :modules="modules"
            navigation
            @swiper="onSwiper"
          >
            <swiper-slide v-for="Img in props.initialImages" :key="Img.id">
              <img :src="Img.image" alt="" class="img-fluid" />
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { watchEffect, ref, onMounted } from "vue";

const props = defineProps({
  initialImages: {
    type: Array,
    required: true,
  },
});
const modules = [Navigation, Pagination];
const swiperRef = ref(null);
const activeSlide = ref(0);
const handleClick = (index) => {
  activeSlide.value = index; // Update the active slide index
  slideTo(index + 1); // Navigate to the selected slide (adjust for 0-based index)
};

const slideTo = (index) => {
  if (swiperRef.value) {
    swiperRef.value.slideTo(index - 1, 0); // Correct method is `slideTo`
  } else {
    console.error("Swiper instance is not initialized");
  }
};
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
</script>

<style lang="scss">
.VerticalSlider {
  .swiper {
    position: relative;
    width: 407px;
    height: 705px;
  }

  .paginationImg {
    width: 100px;
    height: fit-content;

    img {
      border: 2px solid transparent;
      cursor: pointer;
      transition: border 0.3s ease;
      border-radius: 15px;

      &.active {
        border: 2px solid #400a3f; /* Black border for the active image */
      }

      &:hover {
        border: 2px solid gray; /* Optional hover effect */
      }
    }
  }

  .swiper-slide img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
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

  @media screen and (max-width: 767px) {
    .swiper-slide img {
      max-height: 360px;
      width: auto;
    }
    .swiper-wrapper {
      width: 395px;
      height: 360px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 38%;
    }
    .carousel-caption {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .carousel-caption p {
      font-size: calc(1.35rem + (2 - 1.35) * ((100vw - 20rem) / (48 - 20)));
      line-height: calc(
        1.3 * (1.35rem + (2 - 1.35) * ((100vw - 20rem) / (48 - 20)))
      );
    }
  }
  @media screen and (width: 768px) {
    .swiper-slide img {
      max-height: 464px;
      width: auto;
    }
  }
}
</style>
