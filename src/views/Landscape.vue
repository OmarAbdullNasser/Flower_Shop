<template>
  <div class="loader mx-auto my-3" v-if="loading"></div>
  <div v-else>
    <Hero
      :imageUrl="bgUrl"
      :bgcolor="'rgb(255, 255, 255)'"
      :op="0.3"
      color="#000"
      :pt="5"
      :pb="8"
      height="133px"
    >
      <h1>
        <strong>{{ HeroText }}</strong>
      </h1>
    </Hero>
    <Description :bgcolor="'rgb(255, 255, 255)'" />
    <Gallery />
  </div>
</template>

<script setup>
import Description from "@/components/Description.vue";
import Gallery from "@/components/Gallery.vue";
import Hero from "@/components/Hero.vue";
import { inject, ref, onMounted, watchEffect, provide } from "vue";
import { useRoute } from "vue-router";

name: "Landscape";
const url = inject("url");
const route = useRoute();

const loading = ref(true);
const LandscapeData = ref([]);
const bgUrl = ref("");
const HeroText = ref("");
const DescripationData = ref({});
const ImgGallery = ref([]);
const fetchHomeData = async (lang) => {
  try {
    const HomeResponse = await fetch(`${url}/service/landscape`, {
      method: "GET",
      headers: {
        "Accept-Language": `${lang}`,
      },
    });

    const respons = await HomeResponse.json();
    LandscapeData.value = respons.data;

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
  if (Object.keys(LandscapeData).length > 0) {
    loading.value = false;
  }
};

watchEffect(async () => {
  checkLoader();
});
onMounted(async () => {
  await fetchHomeData(route.params.lang);
});
</script>

<style></style>
