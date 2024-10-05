<template>
  <div class="home">
    <Swiper />
    <Message />
    <Services />
    <Portfolio />
    <Articale />
    <ContectForm :isCompontent="false" />
  </div>
</template>

<script setup>
import Articale from "@/components/articale.vue";
import ContectForm from "@/components/ContectForm.vue";
import Message from "@/components/message.vue";
import Portfolio from "@/components/Portfolio.vue";
import Services from "@/components/Services.vue";
import Swiper from "@/components/Swiper.vue";
import { onMounted } from "vue";

name: "Home";
const url = "http://flowerest.e1s.me/api";

const fetchHomeData = async () => {
  try {
    const HomeResponse = await fetch(`${url}/main_page`);
    const respons = await HomeResponse.json();

    console.log(respons.data);
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
  }
};
onMounted(() => fetchHomeData());
</script>
<style></style>
