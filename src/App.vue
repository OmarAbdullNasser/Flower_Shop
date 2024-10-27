<template>
  <div>
    <Navbar />
    <div class="content">
      <router-view :key="$route.fullPath" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { provide } from "vue";
provide("url", "https://flowerest.e1s.me/api");
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&display=swap");

html,
body {
  font-family: "Alexandria", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

#app {
  font-family: "Alexandria", sans-serif;
}
.content {
  min-height: min(600px, 50vh);
}
</style>
