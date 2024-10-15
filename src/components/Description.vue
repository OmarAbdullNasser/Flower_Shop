<template>
  <div class="Description" :style="backgroundImgStyle">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="content-wrapper">
            <h2>
              <strong>{{ data.middle_title }} </strong>
            </h2>
            <p v-html="data.middle_content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, inject } from "vue";
const props = defineProps({
  bgcolor: {
    type: String,
    required: true,
  },
});
const backgroundImgStyle = computed(() => ({
  backgroundColor: `${props.bgcolor}`,
}));
const data = inject("DescripationData");
</script>

<style lang="scss" scoped>
.Description {
  padding-top: 5rem;
  padding-bottom: 5rem;

  .content-wrapper {
    padding: 0 105px;
    h2 {
      margin-bottom: 50px;
      font-family: "Quicksand", sans-serif;
      font-size: 2rem;
      line-height: 1.1;
    }
    p {
      font-family: "Crimson Text", serif;
      font-size: 1.125rem;
      line-height: 1.5;
      margin-bottom: 50px;
      color: #000;
      word-break: break-word;
      word-wrap: break-word;
      font-weight: 400;
    }
  }
  .logo-wrapper {
    .img-wrap img {
      width: 56px;
      height: 56px;
      object-fit: contain;
    }
    p {
      margin: 0;
    }
  }
}

@media screen and (max-width: 991px) {
  .Description {
    .content-wrapper {
      padding: 0;
    }
  }
}
</style>
