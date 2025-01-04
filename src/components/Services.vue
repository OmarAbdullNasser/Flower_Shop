<template>
  <div class="services">
    <div class="container text-center">
      <h3 class="display1">{{ info.title }}</h3>
      <h3 class="display5">
        {{ info.sub_title }}
      </h3>
      <Cursol />
      <OurMission />
      <Feature />
    </div>
  </div>
</template>

<script setup>
import Cursol from "./Cursol.vue";
import OurMission from "@/components/ourMission.vue";
import Feature from "./feature.vue";
import { provide, watchEffect } from "vue";

const props = defineProps({
  initialData: {
    type: Object,
    required: true,
  },
});
const { service, mission, tabs } = props.initialData;

const {
  info,
  items,
  services_events_image: events_image,
  services_landscape_image: landscape_image,
  services_shop_image: shop_image,
} = service;

provide("CursolData", { items, events_image, landscape_image, shop_image });
provide("MissionData", mission);
provide("FeatureData", tabs);
</script>

<style lang="scss" scoped>
.services {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #e7d4e7;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
