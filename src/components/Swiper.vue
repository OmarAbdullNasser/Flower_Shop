<template>
  <div class="slider my-0">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            navigation
            loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <img src="../assets/Swiper/1.jpg" alt="" class="img-fluid" />

              <div class="carousel-caption">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/Swiper/2.jpg" alt="" class="img-fluid" />
              <div class="carousel-caption">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/Swiper/3.jpg" alt="" class="img-fluid" />
              <div class="carousel-caption">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.slider {
  .swiper {
    position: relative;
  }
  .swiper-slide img {
    max-height: 800px;
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
  .carousel-caption {
    z-index: 2 !important;
    left: 1rem !important;
    bottom: 1rem;
    width: fit-content;
    max-width: calc(68%);
    background: #33363b;
    padding: 8px;
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
