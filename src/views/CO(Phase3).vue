<template>
  <div class="checkpout2">
    <div class="container">
      <div class="title text-center">
        <h1>Choose Delivery Service</h1>
        <p>We deliver same day or on the date you choose</p>
      </div>
      <div class="stages d-flex justify-content-between text-center">
        <div class="stage first">1</div>
        <div class="stage secand">2</div>
        <div class="stage thrid">3</div>
      </div>
      <div class="row">
        <div class="col-12- col-lg-9 SendrInfo">
          <div class="BtnRow d-flex my-5">
            <button
              class="btn p-4 BtnSomeOne d-flex flex-column justify-content-center align-items-center"
              @click="ToggleSender('ToSomeOne')"
            >
              <font-awesome-icon
                icon="fa-solid fa-check"
                class="my-3"
                v-if="SenderBox === 'ToSomeOne'"
              />
              <font-awesome-icon
                :icon="['far', 'circle']"
                v-else
                class="my-3"
              />
              <p class="mb-0">Ship to someone</p>
            </button>

            <button class="btn BtnMe" @click="ToggleSender('ToMe')">
              <font-awesome-icon
                icon="fa-solid fa-check"
                class="my-3"
                v-if="SenderBox === 'ToMe'"
              />
              <font-awesome-icon
                :icon="['far', 'circle']"
                v-else
                class="my-3"
              />
              <p class="mb-0">Ship to me</p>
            </button>
          </div>
          <div class="SenderArea">
            <ShipToSomeone v-if="SenderBox === 'ToSomeOne'" />
            <ShipToMe v-else />
          </div>
          <div class="NextStage my-3 d-flex flex-column">
            <span class="my-3">Any Extra Notes </span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Add your needs.."
            ></textarea>
            <button class="btn">Next</button>
          </div>
        </div>
        <div class="col-12- col-lg-3 total"></div>
        <div
          class="stage first"
          :class="{ active: phase >= 1 }"
          @click="phase = 1"
        >
          1
        </div>
        <div class="stage secand" :class="{ active: phase >= 2 }">2</div>
        <div class="stage thrid" :class="{ active: phase === 3 }">3</div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-9 Stages">
          <FristStage v-if="phase === 1" />
          <SecandStage v-else-if="phase === 2" />

          <button class="btn btn-next" @click="NextPhase">Next</button>
        </div>

        <div class="total col-12 col-lg-3">
          <router-link :to="{ name: 'Cart' }">Edit Cart</router-link>
          <div class="items my-3">
            <ul class="p-0">
              <li class="d-flex mb-3">
                <span>Hedya (100 Roses)</span> <span>7,390.00 EGP</span>
              </li>
              <li class="d-flex mb-3">
                <span>Shipping Fees </span> <span>Free shipping </span>
              </li>
            </ul>
          </div>
          <a
            role="button"
            class="PromoCode"
            @click="PromoCode = !PromoCode"
            v-if="!PromoCode"
            >Enter Promocode</a
          >
          <div
            class="PromoCodeFiled d-flex align-items-center"
            v-if="PromoCode"
          >
            <div class="d-flex">
              <input type="text" placeholder="Enter Promo Code " />
              <button>APPLY</button>
            </div>
            <font-awesome-icon
              icon="fa-regular fa-circle-xmark"
              @click="PromoCode = !PromoCode"
            />
          </div>
          <hr />
          <h5 class="d-flex">
            <span>Grand Total</span> <span>7,390.00 EGP</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShipToMe from "@/components/shipToMe.vue";
import ShipToSomeone from "@/components/ShipToSomeone.vue";
import { ref } from "vue";

const SenderBox = ref("ToSomeOne");
const ToggleSender = (to) => {
  SenderBox.value = to;
  console.log(SenderBox.value);
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
  .BtnRow {
    button {
      font-size: 18px;
      font-weight: 700;
      width: 210px;
      text-align: center;
      border: 2px solid #400a3f;
      background: #400a3f;
      border-radius: 4px;
      margin: 0 16px 0 0;
      transition: 0.1s all ease-in-out;
      cursor: pointer;
      color: #fff;
      height: 120px;
    }
  }
  .NextStage {
    textarea {
      resize: none;
      border-radius: 15px;
      padding: 15px;
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
}
</style>
