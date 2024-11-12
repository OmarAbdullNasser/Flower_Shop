<template>
  <div class="checkpout2">
    <div class="container">
      <div class="title text-center">
        <h1>Choose Delivery Service</h1>
        <p>We deliver same day or on the date you choose</p>
      </div>
      <div class="stages d-flex justify-content-between text-center">
        <div class="stage first" :class="{ active: phase >= 1 }">1</div>
        <div class="stage secand" :class="{ active: phase >= 2 }">2</div>
        <div class="stage thrid" :class="{ active: phase === 3 }">3</div>
      </div>
      <div class="row">
        <div class="col-12- col-lg-9 SendrInfo">
          <FristStage v-if="phase === 1" />
          <SecandStage v-else-if="phase === 2" />
          <button class="btn" @click="SetPhase">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FristStage from "@/components/FristStage.vue";
import SecandStage from "@/components/SecandStage.vue";
const phase = ref(1);
const SenderBox = ref("ToSomeOne");
const ToggleSender = (to) => {
  SenderBox.value = to;
};
const SetPhase = () => {
  if (phase.value < 3) {
    phase.value += 1;
  } else {
    phase.value = 3;
  }
};
</script>

<style lang="scss" scoped>
.checkpout2 {
  .title {
    p {
      font-weight: 300;
      font-size: 18px;
      color: #080c1c;
      margin: 10px 0;
      line-height: 25px;
    }
  }
  .stages {
    max-width: 180px;
    margin: 10px auto;

    .stage {
      position: relative;
      background: #400a3f;
      font-style: initial;
      font-weight: 600;
      border-radius: 130px;
      color: #ffffff;
      padding: 7px 15px 10px 15px;
      line-height: initial;
      cursor: pointer;
      &.active {
        background-color: #28a52c;
      }
      &::before {
        content: "";
        position: absolute;
        top: 18px;
        left: 42px;
        width: 23px;
        height: 2px;
        background-color: #927091;
      }
      &:last-child::before {
        content: "";
        width: 0;
        height: 0;
      }
    }
  }

  button {
    padding: 20px;
    background: #28a52c;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    width: 25%;
    text-align: left;
    color: #ffffff;
    letter-spacing: 0;
    border-radius: 4px;
    background-image: url(../assets/arrow-right.png);
    background-position-x: 85%;
    background-position-y: center;
    background-size: 8px 15px;
    background-repeat: no-repeat;
    margin: 40px 0 20px 0px;
    transition: 0.2s all ease-in-out;
  }
}
@media screen and (max-width: 991.9px) {
  .checkpout2 {
    .NextStage {
      button {
        width: 100%;
      }
    }
  }
}
</style>
