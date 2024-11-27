<template>
  <div class="Portfolio">
    <div class="overlay"></div>
    <div class="container">
      <h3 class="subtitle display7">{{ info.sub_title }}</h3>
      <h3 class="title display1">{{ info.title }}</h3>
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 item features-image p-5">
          <div class="item-wrapper">
            <div class="text">
              <div class="icon d-flex justify-content-center">
                <font-awesome-icon icon="fa-regular fa-heart" />
              </div>
              <h3 class="subtitle display5">Shop Flowers</h3>

              <div class="btns">
                <router-link
                  :to="{
                    // path: `/pages/about-us`,
                    name: 'shop',
                    params: { lang: route.params.lang },
                  }"
                  class="Btn Btn-primary display4"
                  >Shop now</router-link
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-sm-6 col-lg-4 item features-image"
          v-for="item in items"
          :key="item.id"
        >
          <div class="item-wrapper">
            <div class="item-img">
              <img :src="item.image" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b2.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b4.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b3.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b4.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  initialData: {
    type: Object,
    required: true,
  },
});
const { info, items } = props.initialData;
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
.item:nth-child(1) {
  background: #400a3f;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.Portfolio {
  padding-top: 3rem;
  padding-bottom: 5rem;
  .overlay {
    opacity: 0.3;
    background-color: rgb(255, 255, 255);
  }
  .subtitle {
    color: #968896;
    text-align: center;
    font-style: italic;
    padding-bottom: 12px;
  }
  .title {
    color: #968896;
    text-align: center;
    padding-bottom: 60px;
  }

  .features-image > :nth-child(-n + 3) {
    padding-top: 0;
  }

  .features-image {
    margin-bottom: 32px;
  }
  .item-wrapper {
    position: relative;
    display: contents;

    .text {
      // position: absolute;
      // width: 100%;
      // padding: 0 10%;

      svg {
        display: block;
        font-size: 3.5rem;
        color: #968896;
        padding-bottom: 7px;
      }
      .btns {
        white-space: nowrap;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 22px;
        .Btn-primary {
          background-color: #fcf5fc !important;
          border-color: #fcf5fc !important;
          color: #968896 !important;
        }
      }
    }
  }
}
</style>
