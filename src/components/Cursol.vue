<template>
  <div class="cursol my-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 px-0">
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
            :space-between="10"
            :pagination="{ clickable: true }"
            :loop="true"
            class="row"
          >
            <swiper-slide v-for="img in ItemsWithImgs" :key="img.slug">
              <div class="card">
                <router-link
                  :to="{
                    path: `/${route.params.lang}/${img.slug}`,
                  }"
                >
                  <img :src="img.image" alt="" class="img-fluid" />
                  <div class="card-body">
                    <h5 class="card-title">{{ img.title }}</h5>
                  </div>
                </router-link>
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
import { useRoute } from "vue-router";

const route = useRoute();
const {
  items,
  events_image: events,
  landscape_image: landscape,
  shop_image: shop,
} = inject("CursolData");

// items.push({ image: events_image });
// items[0].image = shop_image;
// items[1].image = landscape_image;
// items[2].image = events_image;
// const ItemsWithImgs = items.map((item) => {
//   if (item && item.slug) {
//     if (item.slug === "events") {
//       item.image = events;
//     }
//     if (item.slug === "landscape") {
//       item.image = landscape;
//     }
//     if (item.slug === "shop") {
//       item.image = shop;
//     }
//   }
// });
const ItemsWithImgs = items.map((item) => {
  if (!item || !item.slug) {
    return item; // If item is undefined or doesn't have slug, return it as-is
  }
  return {
    ...item,
    image:
      item.slug === "events"
        ? events
        : item.slug === "landscape"
        ? landscape
        : item.slug === "shop"
        ? shop
        : item.image, // Keep the existing image if slug doesn't match
  };
});

const modules = [Navigation, Pagination, A11y, Autoplay];
</script>

<style lang="scss">
.cursol {
  .swiper {
    .swiper-wrapper {
      height: auto;
      margin-bottom: 3rem;
      padding: 0 !important;
    }
  }
  // .swiper-slide {
  //   border-radius: 15px;
  // }
  .card {
    background: #fcf5fc;
    border-radius: 15px;
    overflow: hidden;
    img {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
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
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .card-body h5 {
    padding-bottom: 10px;
    width: 100%;
    text-align: left;
    color: #0c5b47;
  }
}

@media screen and (max-width: 767px) {
  .swiper-wrapper {
    height: auto !important;
  }
}
</style>
