<template>
  <div class="cursol my-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <swiper
            :modules="modules"
            :slides-per-view="3"
            :breakpoints="{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }"
            :space-between="20"
            :pagination="{ clickable: true }"
            :loop="true"
            class="row"
          >
            <swiper-slide v-for="img in items" :key="img.id">
              <div class="card">
                <img :src="img.image" alt="" class="img-fluid" />
                <div class="card-body">
                  <h5 class="card-title">{{ img.title }}</h5>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
import { inject } from "vue";

const items = inject("CursolData");

const modules = [Navigation, Pagination, A11y, Autoplay];
</script>

<style scoped>
.swiper-wrapper {
  margin-bottom: 3rem;
  height: auto;
}
.card {
  background: #fcf5fc;
}
.card-body {
  padding: 32px 35px 40px !important;
  border-radius: 0;
  background-color: #ffffff;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  display: flex;
}
.card-body h5 {
  padding-bottom: 10px;
  width: 100%;
  text-align: left;
  color: #0c5b47;
}

@media screen and (max-width: 767px) {
  .swiper-wrapper {
    height: auto !important;
  }
}
</style>
