<template>
  <Hero
    :imageUrl="'HeroImg.jpg'"
    :bgcolor="'rgb(255, 255, 255)'"
    op="0.3"
    color="#000"
    pt="5"
    pb="8"
    height="133px"
  >
    <h1><strong>An Environmentally Friendly</strong></h1>
  </Hero>
  <Description :bgcolor="'rgb(255, 255, 255)'" />
  <Gallery />
</template>

<script>
import Description from "@/components/Description.vue";
import Gallery from "@/components/Gallery.vue";
import Hero from "@/components/Hero.vue";

name: "Landscape";

export default {
  components: {
    Hero,
    Description,
    Gallery,
  },
};
</script>

<style></style>
