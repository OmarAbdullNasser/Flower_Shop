<template>
  <div class="ourMission mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="left-side col-12 col-md-6">
          <h5 class="display1 title">{{ MissionData.title }}</h5>
          <p class="display4 dec">
            {{ MissionData.description }}
          </p>
          <div class="btnn">
            <router-link
              :to="{
                name: 'SinglePage',
                params: { lang: route.params.lang, Pagename: `about-us` },
              }"
              class="btn btn-primary display4"
              >{{ $t("ReadMore") }}</router-link
            >
          </div>
        </div>

        <div class="right-side col-12 col-md-6 item-wrapper">
          <img :src="MissionData.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const MissionData = inject("MissionData");
</script>

<style lang="scss" scoped>
.ourMission {
  .row {
    border-radius: 15px;
    align-items: center;
    background: var(--main-color);
    padding: 0px;
    margin: 0;
  }
  .right-side {
    padding: 0;
    img {
      width: 100%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .left-side {
    padding-left: 150px;
    padding-right: 80px;
    text-align: left;
    .title {
      margin: 0 0 12px;
      color: #ffffff;
    }
    .dec {
      padding: 0 0px 20px;
      color: #ffffff;
    }
    .btnn {
      width: 100%;
      .btn-primary {
        padding: 0.5625rem 2.3125rem;
        border-radius: 0px;
        background-color: var(--main-color) !important;
        border-color: #d8e3d5 !important;
        color: #ffff !important;
        font-family: "Quicksand", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        &:hover {
          color: var(--main-color) !important;
          background-color: #c4d5c0 !important;
          border-color: #c4d5c0 !important;
        }
      }
    }
  }
  @media (max-width: 990px) {
    .left-side {
      padding: 25px 15px;
    }
  }
}
</style>
