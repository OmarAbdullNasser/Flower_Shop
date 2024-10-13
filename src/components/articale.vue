<template>
  <div class="articale mb-5">
    <div class="container">
      <div class="row">
        <div class="left-side col-12 col-lg">
          <div class="card-box">
            <h5 class="title display1">{{ initialData.title }}</h5>

            <div class="si">
              <img :src="initialData.image" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="right-side col-12 col-lg-6 d-flex align-items-center">
          <p class="display4">
            {{ initialData.description }}
          </p>
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
</script>

<style lang="scss" scoped>
.articale {
  padding-top: 9rem;
  padding-bottom: 5rem;
  background-color: #ffffff;
  .left-side {
    text-align: left;
    padding-left: 9rem;
    .title {
      margin: 0;
      color: var(--main-color);
      padding: 0;
    }
    .card-box {
      .si {
        width: 250px;
      }
    }
  }
  .right-side {
    color: #1b745e;
  }
}
@media screen and (max-width: 990px) {
  .articale {
    .left-side {
      padding-right: 15px;
      padding-left: 15px;
      padding-top: 20px;
      h5 {
        font-size: calc(
          1.65625rem + (2.875 - 1.65625) * ((100vw - 20rem) / (48 - 20))
        );
        line-height: calc(
          1.1 * (1.65625rem + (2.875 - 1.65625) * ((100vw - 20rem) / (48 - 20)))
        );
      }
    }
  }
}
</style>
