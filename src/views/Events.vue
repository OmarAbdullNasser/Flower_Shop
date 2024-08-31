<template>
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
</template>

<script>
import Description from "@/components/Description.vue";
import FliterImgs from "@/components/FliterImgs.vue";
import Hero from "@/components/Hero.vue";

name: "Landscape";

export default {
  components: {
    Hero,
    Description,
    FliterImgs,
  },
};
</script>

<style scoped></style>
