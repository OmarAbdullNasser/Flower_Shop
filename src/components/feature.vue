<template>
  <div class="feature mt-5">
    <div class="container">
      <div class="row text-start">
        <div class="col-12 col-md-6 col-lg-3" v-for="tab in tabs" :key="tab.id">
          <div class="card-wrapper">
            <div class="card-box">
              <div class="iconfont-wrapper">
                <img :src="tab.image" alt="" class="mx-3" width="50px" />
              </div>
              <h5 class="display2">{{ tab.title }}</h5>
            </div>
            <h5 class="display4">
              {{ tab.description }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const tabs = inject("FeatureData");
</script>

<stye lang="scss" scoped>
.feature {
  .card-wrapper {
    background: none;
    display: block;
    margin: 25px 0;
    .card-box {
      display: inline-flex;
      text-align: left;
      margin: 0;
      align-items: center;
      .iconfont-wrapper {
        color: #0c5b47;
        svg {
          font-size: 2.5rem;
          color: var(--main-color);
          margin-right: 15px;
          margin-bottom: 8px;
        }
        svg[dir="rtl"] {
          margin-left: 15px;
        }
      }
    }
  }
}
</stye>
