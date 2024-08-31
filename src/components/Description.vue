<template>
  <div class="Description" :style="backgroundImgStyle">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="content-wrapper">
            <h2>
              <strong>Intuitive Rental Process </strong>
            </h2>
            <p>
              Simply download our mobile app, locate the nearest scooter using
              GPS technology, and unlock it with just a tap of your smartphone.
              With adjustable speed settings and user-friendly controls, our
              scooters are suitable for riders of all experience levels.
            </p>

            <div class="logo-wrapper">
              <div class="logo-wrap d-inline-flex align-items-center">
                <div class="img-wrap me-3">
                  <img src="../assets/logo-Gallery.png" alt="" />
                </div>
                <p><strong>Ride</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  bgcolor: {
    type: String,
    required: true,
  },
});
const backgroundImgStyle = computed(() => ({
  backgroundColor: `${props.bgcolor}`,
}));
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
