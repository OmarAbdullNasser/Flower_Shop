<template>
  <div class="SinglePage my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <h2 class="display-3">{{ DataPage.title }}</h2>
        </div>
        <div class="content col-12 row">
          <div class="Right col-12 col-lg-6 text-center">
            <img :src="DataPage.image" class="img-fluid rounded" alt="" />
          </div>
          <div
            class="Left col-12 col-lg-6 d-flex align-items-center text-center"
            v-html="DataPage.description"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { inject, watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";

name: "SinglePage";
const route = useRoute();
const url = inject("url");
const DataPage = ref({
  title: "",
  description: "",
  image: "",
});
const Meta = ref(null);
const fetchHomeData = async (lang, pagename) => {
  try {
    const HomeResponse = await fetch(`${url}/pages?slug=${pagename}`, {
      method: "GET", // Specify the method if needed
      headers: {
        "Accept-Language": `${lang}`,
      },
    });

    const PageRespons = await HomeResponse.json();
    const Data = PageRespons.data;

    const { title, description, image, meta } = Data;
    DataPage.value.title = title;
    DataPage.value.description = description;
    DataPage.value.image = image;
    Meta.value = meta;
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
  }
};
onMounted(async () => {
  await fetchHomeData(route.params.lang, route.params.Pagename);
  if (Meta.value) {
    // Use vue-meta to dynamically set meta tags based on the fetched metaData

    useHead({
      title: `${Meta.value.title || "Dalia ElHaggar"}`,
      meta: [
        {
          name: "description",
          content: `${Meta.value.description}`,
        },
        { name: "keywords", content: `${Meta.value.key}` },
      ],
    });
  }
});
</script>

<style lang="scss" scoped>
.SinglePage {
  h2 {
    color: #400a3f;
  }
  P {
    line-height: 3;
  }
}
</style>
