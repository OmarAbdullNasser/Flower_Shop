<template>
  <div class="loader mx-auto my-3" v-if="loading"></div>

  <div v-else>
    <Hero
      :imageUrl="bgUrl"
      :bgcolor="'rgb(0, 0,0)'"
      color="#fff"
      :op="0.5"
      :pt="8"
      :pb="8"
      height="133px"
    >
      <h1 style="margin: 0 auto; font-size: 5rem;">{{ HeroText }}</h1>
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
import { useHead } from "@vueuse/head";
name: "Events";
const url = inject("url");
const route = useRoute();
const loading = ref(true);
const EventsData = ref([]);
const bgUrl = ref("");
const HeroText = ref("");
const DescripationData = ref({});
const OccassionData = ref([]);
const Meta = ref(null);
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

    const {
      description,
      image: bgImg,
      meta,
      middle_content,
      middle_title,
      occasions,
      slug,
      title,
    } = EventsData.value;
    bgUrl.value = bgImg;
    Meta.value = meta;
    HeroText.value = title;
    DescripationData.value = { middle_title, middle_content };
    OccassionData.value = occasions;
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
  }
};

provide("DescripationData", DescripationData);
provide("OccassionData", OccassionData);
const checkLoader = () => {
  if (Object.keys(EventsData).length > 0) {
    loading.value = false;
  }
};

watchEffect(async () => {
  checkLoader();
});
onMounted(async () => {
  await fetchHomeData(route.params.lang);

  if (Meta.value) {
    // Use vue-meta to dynamically set meta tags based on the fetched metaData

    useHead({
      title: "Dalia ElHaggar | " + `${Meta.value.meta_title || "Events"}`,
      meta: [
        {
          name: "description",
          content: `${Meta.value.meta_desc}`,
        },
        { name: "keywords", content: `${Meta.value.meta_key}` },
      ],
    });
  }
});
</script>

<style scoped></style>
