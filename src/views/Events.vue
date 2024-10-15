<template>
  <div class="loader mx-auto my-3" v-if="loading"></div>

  <div v-else>
    <Hero
      :imageUrl="'Hero2.jpg'"
      :bgcolor="'rgb(0, 0,0)'"
      color="#fff"
      op="0.5"
      pt="8"
      pb="8"
      height="133px"
    >
      <h1>Professional construction company for projects of any complexity</h1>
    </Hero>

    <Description :bgcolor="'rgb(206, 205, 199)'" />
    <FliterImgs />
  </div>
</template>

<script setup>
import Description from "@/components/Description.vue";
import FliterImgs from "@/components/FliterImgs.vue";
import Hero from "@/components/Hero.vue";
import { inject, ref, onMounted, watchEffect, provide } from "vue";
import { useRoute } from "vue-router";
name: "Events";
const url = inject("url");
const route = useRoute();
const loading = ref(true);
const EventsData = ref([]);
const bgUrl = ref("");
const HeroText = ref("");
const DescripationData = ref({});
const ImgGallery = ref([]);

const fetchHomeData = async (lang) => {
  try {
    const HomeResponse = await fetch(`${url}/events`, {
      method: "GET",
      headers: {
        "Accept-Language": `${lang}`,
      },
    });

    const respons = await HomeResponse.json();
    EventsData.value = respons.data;

    const { gallery, service } = LandscapeData.value;
    const {
      description,
      image: bgImg,
      meta,
      middle_content,
      middle_title,
      slug,
      title,
    } = service;
    bgUrl.value = bgImg;
    console.log();
    HeroText.value = title;
    DescripationData.value = { middle_title, middle_content };
    ImgGallery.value = gallery;
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
  }
};

provide("DescripationData", DescripationData);
provide("GalleryData", ImgGallery);
const checkLoader = () => {
  if (Object.keys(EventsData).length > 0) {
    loading.value = false;
  }
};

watchEffect(async () => {
  checkLoader();
});
</script>

<style scoped></style>
