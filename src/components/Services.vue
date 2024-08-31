<template>
  <div class="services">
    <div class="container text-center">
      <h3 class="display5">Services</h3>
      <h3 class="display1">
        We offer a variety of floral services, from unique bouquets to event
        decoration.
      </h3>
      <Cursol />
      <OurMission />
      <Feature />
    </div>
  </div>
</template>

<script>
import Cursol from "./Cursol.vue";
import OurMission from "@/components/ourMission.vue";
import Feature from "./feature.vue";

export default {
  components: {
    Cursol,
    OurMission,
    Feature,
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url("../assets/background2.jpg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
