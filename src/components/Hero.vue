<template>
  <div
    class="section Hero"
    :style="{
      ...backgroundImgStyle,
    }"
  >
    <div
      class="overlay"
      :style="{ backgroundColor: bgcolor, opacity: op }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-wrapper display1 d-flex" :style="{ color: color }">
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
});

const backgroundImgStyle = computed(() => ({
  backgroundImage: `url(${props.imageUrl})`,
  paddingTop: `${props.pt}rem`,
  paddingBottom: `${props.pb}rem`,
}));
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.Hero {
  height: 300px;
  z-index: 0;
  position: relative;
  .title-wrapper {
    margin-bottom: 660px;
  }
  .title-wrapper {
    text-align: center;
    font-size: 5rem;
    ::v-deep(*) {
      color: inherit; /* Default to inherit */
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}
@media screen and (max-width: 991px) {
  .Hero {
    max-height: var(--custom-height);
  }
}
</style>
