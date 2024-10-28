<template>
  <div class="loader mx-auto my-3" v-if="loading"></div>
  <div class="home" v-else>
    <Swiper :initialImages="SwiperImg" />
    <Message />
    <Services :initialData="ServiceData" />
    <ReviewSwiper />
    <Portfolio :initialData="PortfolioData" />
    <Articale :initialData="ArticaleData" />
    <ContectForm />
  </div>
</template>

<script setup>
import Articale from "@/components/articale.vue";
import ContectForm from "@/components/ContectForm.vue";
import Message from "@/components/message.vue";
import Portfolio from "@/components/Portfolio.vue";
import Services from "@/components/Services.vue";
import Swiper from "@/components/Swiper.vue";
import { onMounted, ref, watchEffect, watch, computed } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";
import ReviewSwiper from "@/components/ReviewSwiper.vue";

name: "Home";
const url = "https://flowerest.e1s.me/api";

const route = useRoute();
const loading = ref(true);
const SwiperImg = ref([]);
const ServiceData = ref({});
const PortfolioData = ref({});
const ArticaleData = ref({});
const metaData = ref(null);

const fetchHomeData = async (lang) => {
  try {
    const HomeResponse = await fetch(`${url}/home`, {
      method: "GET", // Specify the method if needed
      headers: {
        "Accept-Language": `${lang}`,
      },
    });

    const respons = await HomeResponse.json();
    const {
      sliders,
      contact_us,
      makers,
      meta,
      mission,
      portfolio,
      tabs,
      service,
    } = respons.data;

    SwiperImg.value = sliders;
    ServiceData.value = { service, mission, tabs };
    PortfolioData.value = portfolio;
    ArticaleData.value = makers;
    metaData.value = meta;
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
  }
};

const checkLoader = () => {
  if (SwiperImg.value.length > 0) {
    loading.value = false;
  }
};

// Watch for changes in the route's lang parameter and refetch the data
watch(
  () => route.params.lang, // Watch the 'lang' parameter in the route
  async (newLang) => {
    loading.value = true; // Set loading state to true while fetching
    await fetchHomeData(newLang); // Call fetchHomeData with the new language
  },
  { immediate: true } // Call the watcher immediately upon component mount
);

watchEffect(async () => {
  checkLoader();
});
onMounted(async () => {
  await fetchHomeData(route.params.lang);

  if (metaData.value) {
    // Use vue-meta to dynamically set meta tags based on the fetched metaData

    useHead({
      title: metaData.title,
      meta: [
        {
          name: "description",
          content: `${metaData.value.description}`,
        },
        { name: "keywords", content: `${metaData.value.key}` },
      ],
    });
  }
});
</script>
<style>
.loader {
  width: 60px;
  aspect-ratio: 1;
  border: 15px solid #ddd;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
}
.loader::before {
  content: "";
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 15px solid #514b82;
  animation: l18 2s infinite linear;
}
@keyframes l18 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
