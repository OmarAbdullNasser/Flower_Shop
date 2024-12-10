<template>
  <div class="Gallery">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-12 col-lg-4 item features-image"
          v-for="img in Data"
          :key="img.id"
        >
          <div class="item-wrapper">
            <div class="item-img">
              <img :src="img.image" alt="" class-="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, watchEffect } from "vue";

const Data = inject("GalleryData");
</script>

<style lang="scss" scoped>
.Gallery {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #fff;
  .container-fluid {
    padding: 0 60px;
  }

  .item-wrapper {
    margin-bottom: 32px;
    overflow: hidden;
    .item-img {
      position: relative; /* Ensure proper layering */
      overflow: hidden; /* Ensures border-radius works with scaling */
      border-radius: 15px;
      img {
        height: 345px;
        object-fit: cover;
        margin-bottom: 15px;
        transform: scale(1.06) translateX(0);
        transition: all 0.3s ease-in-out;
        width: 100%;

        &:hover {
          transform: scale(1.06) translateX(6px);
        }
      }
    }
  }
}
@media screen and (max-width: 991px) {
  .Gallery {
    .container-fluid {
      padding: 0 25px;
    }
  }
}
</style>
