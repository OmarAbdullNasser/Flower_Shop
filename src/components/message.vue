<template>
  <div class="message mb-5">
    <div class="container">
      <div class="row">
        <div class="right-side col-12 col-lg-6 text-center">
          <div class="card-wrapper">
            <div class="card-box text-center">
              <h5 class="art">{{ props.initialData.section.title }}</h5>
              <p class="display4">
                {{ props.initialData.section.description }}
              </p>
              <p class="display7">
                <em> {{ props.initialData.section.sub_title }}</em>
              </p>
              <div class="si">
                <img :src="initialData.section.image" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="left-side col-12 col-lg text-center mt-3">
          <img :src="initialData.left_image" alt="" class="img-fluid first" />
          <img
            :src="initialData.right_image"
            alt=""
            class="img-fluid secand d-none d-lg-block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";

const props = defineProps(["initialData"]);
watchEffect(() => console.log(props.initialData));
</script>

<style lang="scss" scoped>
.message {
  .left-side {
    position: relative;
    .frist {
      position: relative;
      display: inline-block;
    }
    .secand {
      position: absolute;
      top: 15%;
      right: 50%;
    }
  }
  .right-side {
    .card-wrapper {
      padding: 10%;
      .art {
        padding-bottom: 12px;
        text-align: left;
        color: var(--main-color);
        font-family: "Quicksand", sans-serif;
        font-size: 2.875rem;
        line-height: 1.1;
      }
      p {
        text-align: left;
        color: var(--main-color);
      }

      .si {
        text-align: left;
        img {
          width: 200px;
          padding-top: 10px;
          display: inline;
        }
      }
    }
  }
}
</style>
