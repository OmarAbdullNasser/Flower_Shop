<template>
  <div class="ContentUs">
    <ContectForm :Data="ContectData" />
  </div>
</template>

<script setup>
import ContectForm from "@/components/ContectForm.vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { inject, onMounted, ref, watchEffect } from "vue";
name: "Conenctus";
const route = useRoute();
const ContectData = ref({});
const url = inject("url");

const fetchContentData = async (lang) => {
  try {
    const HomeResponse = await fetch(`${url}/home`, {
      method: "GET", // Specify the method if needed
      headers: {
        "Accept-Language": `${lang}`,
      },
    });
    const respons = await HomeResponse.json();
    const { contact_info } = respons.data;
    ContectData.value = contact_info;
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
  }
};
onMounted(async () => {
  await fetchContentData(route.params.lang);
  useHead({
    title:
      route.params.lang === "en"
        ? "Dalia ElHaggar | Contact Us"
        : "داليا الحجار | تواصل معنا",
  });
});
</script>

<style></style>
