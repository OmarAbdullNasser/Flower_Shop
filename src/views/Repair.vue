<template>
  <Hero
    :imageUrl="'Hero3.jpg'"
    :bgcolor="'rgb(24, 33,45)'"
    color="#fff"
    op="0.5"
    pt="5"
    pb="5"
    N_height="582px"
  >
    <div class="content-wrapper">
      <div class="desc-wrapper">
        <p class="display4">Wide Range</p>
      </div>
      <h1 class="section-title display1">
        Sport Blog: <br />
        Health and Sports Enthusiasts
      </h1>
      <div class="text-wrapper">
        <p class="text display7">
          At Sport Blog, we're dedicated to fueling your passion for fitness and
          empowering you to reach your peak performance.
        </p>
      </div>

      <div class="Btn text-center">
        <a href="" class="btn display4"> Read More </a>
      </div>
    </div>
  </Hero>

  <Description :bgcolor="'rgb(206, 205, 199)'" />
  <FliterImgs />
</template>

<script>
import Description from "@/components/Description.vue";
import FliterImgs from "@/components/FliterImgs.vue";
import Hero from "@/components/Hero.vue";

name: "Repair";

export default {
  components: {
    Hero,
    Description,
    FliterImgs,
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  .desc-wrapper {
    text-align: center;
    p {
      display: inline-flex;
      padding: 2px 10px;
      position: relative;
      margin-bottom: 16px;
      border-radius: 500px;
      color: #ffffff;
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 500px;
        border: 1px solid #ffffff;
        opacity: 0.12;
        pointer-events: none;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 500px;
        background-color: #ffffff;
        opacity: 0.09;
        pointer-events: none;
      }
    }
  }
  .section-title {
    margin-bottom: 16px;
    text-align: center;
    color: #ffffff;
  }
  .text-wrapper {
    text-align: center;
    color: #ffffff;
    .text {
      display: inline-flex;
      width: 45%;
      opacity: 0.5;
      margin-bottom: 22px;
    }
  }
  .Btn {
    a {
      background-color: #1b745e !important;
      border-color: #1b745e !important;
      color: #fff;
    }
  }
}
</style>
