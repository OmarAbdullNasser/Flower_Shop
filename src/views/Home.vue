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

<script>
import Articale from "@/components/articale.vue";
import ContectForm from "@/components/ContectForm.vue";
import Message from "@/components/message.vue";
import Portfolio from "@/components/Portfolio.vue";
import Services from "@/components/Services.vue";
import Swiper from "@/components/Swiper.vue";

export default {
  name: "Home",
  components: {
    Swiper,
    Message,
    Services,
    Portfolio,
    Articale,
    ContectForm,
  },
};
</script>
<style></style>
