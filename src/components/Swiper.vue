<template>
  <div class="slider my-0">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12">
          <Swiper
            :slides-per-view="1"
            :space-between="50"
            navigation
            :modules="modules"
          >
            <swiper-slide v-for="Img in initialImages" :key="Img.id">
              <img :src="Img.image" alt="" class="img-fluid" />

              <div class="carousel-caption">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
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
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { watchEffect, ref, onMounted } from "vue";

const props = defineProps({
  initialImages: {
    type: Array,
    required: true,
  },
});


const modules = [Navigation, Pagination, A11y, Autoplay];

onMounted(() => {});
</script>

<style lang="scss">
.slider {
  .swiper {
    position: relative;
  }

  .swiper-slide img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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

  .swiper-button-prev:hover::after {
    right: 30px;
  }
  .swiper-button-next:hover::after {
    left: 30px;
  }
  .swiper-button-prev[dir="rtl"]:hover::after {
    left: 30px;
  }
  .swiper-button-next[dir="rtl"]:hover::after {
    right: 30px;
  }
  .carousel-caption {
    z-index: 2 !important;
    left: 1rem !important;
    bottom: 1rem;
    width: fit-content;
    max-width: calc(68%);
    background: #33363b;
    padding: 8px;
  }
  .carousel-caption[dir="rtl"] {
    left: 0;
    right: 1 !important;
  }
  .carousel-caption p {
    margin-bottom: 0 !important;
    margin-top: 8px !important;
    color: #ffffff;
    text-align: left;
    font-family: "Quicksand", sans-serif;
    font-size: 2rem;
    line-height: 1.1;
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
