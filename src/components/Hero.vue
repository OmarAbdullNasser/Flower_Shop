<template>
  <div
    class="section Hero"
    :style="{
      ...backgroundImgStyle,
      '--custom-height': height,
      '--normal-height': N_height,
    }"
  >
    <div
      class="overlay"
      :style="{ backgroundColor: bgcolor, opacity: op }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-wrapper display1" :style="{ color: color }">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  bgcolor: {
    type: String,
    required: true,
  },
  op: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  pt: {
    type: Number,
    required: true,
  },
  pb: {
    type: Number,
    required: true,
  },
  height: {
    type: String,
    required: true,
    default: "auto",
  },
  N_height: {
    type: String,
    required: true,
    default:"auto"
  },
});

const imgSrc = computed(() => require(`@/assets/${props.imageUrl}`));
const backgroundImgStyle = computed(() => ({
  backgroundImage: `url(${imgSrc.value})`,
  paddingTop: `${props.pt}rem`,
  paddingBottom: `${props.pb}rem`,
}));
</script>

<style lang="scss" >
html {
  scroll-behavior: smooth;
}
.Hero {
  height: var(--normal-height);
  z-index: 0;
  position: relative;
  .title-wrapper {
    margin-bottom: 660px;
  }
}
@media screen and (max-width: 991px) {
  .Hero {
    max-height: var(--custom-height);
  }
}
</style>
