<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
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
</style>
