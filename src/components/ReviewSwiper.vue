<template>
  <div class="Review">
    <div class="container">
      <div class="HeaderText text-center">
        <h4 class="my-4">{{ $t("ReviewTitle") }}</h4>
        <h2 class="my-4">{{ $t("Reviewsubtitle") }}</h2>
      </div>
      <div class="row ReviewSwiper">
        <div class="col-12">
          <Swiper
            :slides-per-view="3"
            :space-between="80"
            navigation
            :modules="modules"
            :breakpoints="breakpoints"
            loop="true"
          >
            <swiper-slide v-for="item in props.initialData" :key="item.id">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="Img col-md-3 d-flex flex-wrap align-content-center"
                  >
                    <img
                      :src="item.image"
                      class="img-fluid rounded-start ms-2"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h6 class="card-title">{{ item.customer_name }}</h6>
                      <p class="card-text">
                        {{ item.description }}
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
const props = defineProps({
  initialData: Array,
});
const breakpoints = {
  // When window width is >= 0px (small screens)
  0: {
    slidesPerView: 1,
    // spaceBetween: 20,
  },
  // When window width is >= 768px (medium screens)
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  // When window width is >= 1024px (large screens)
  1024: {
    slidesPerView: 3,
    spaceBetween: 80,
  },
};
const modules = [Navigation];
</script>

<style lang="scss">
.Review {
  background: #fff;
  padding-top: 3rem;
  padding-bottom: 5rem;
  direction: ltr;
  .HeaderText {
    h2 {
      font-style: italic;
    }
  }
  .ReviewSwiper {
    .swiper {
      padding: 5rem;
      background-color: #eee1ee;
      border-radius: 15px;
      .swiper-button-next,
      .swiper-button-prev {
        background-color: white;
        padding: 20px;
        border-radius: 50%;
        color: #400a3f !important;
        fill: #400a3f !important;
        stroke: #400a3f !important;
        &::after {
          font-size: 1.5rem;
        }
      }
      .swiper-button-next {
        right: 10px;
      }
      .card {
        .card-title {
          color: black;
        }
        .card-text {
          color: #400a3f;
          font-size: 16px;
          margin: 15px 0;
          line-height: 1.5;
        }
      }
    }
  }
}
@media screen and (max-width: 991.9px) {
  .Review {
    .ReviewSwiper {
      .swiper {
        padding: 2rem;
        .card {
          .Img {
            width: 60%;
            margin: 0 auto;
            margin-top: 1rem;
          }
        }
      }
    }
  }
}
</style>
