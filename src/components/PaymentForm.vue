<template>
  <div class="PaymentForm">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-center">Payment Method</h3>
          <div class="Methods d-flex align-items-center justify-content-evenly">
            <div class="CashOnHome" v-if="flag == 'CashHome'">
              <p class="mb-0">
                <!-- <input type="radio" name="Payment" id="CashHome" checked /> -->
                <label for="CashHome">Cash Collect From Home</label>
              </p>
            </div>

            <div
              class="Instapay my-3"
              v-if="flag === 'Shiptosome' || flag == 'Instapay'"
            >
              <p class="mb-0">
                <!-- <input type="radio" name="Payment" id="Instapay" /> -->
                <label for="Instapay">Instapay</label>
              </p>
            </div>

            <div
              class="CashOnHome"
              v-if="flag == 'vodafoneCash' || flag == 'Shiptosome'"
            >
              <p class="mb-0">
                <!-- <input type="radio" name="Payment" id="vodafoneCash" /> -->
                <label for="vodafoneCash">vodafoneCash</label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="InfoForm text-center"
      v-if="
        flag == 'vodafoneCash' || flag == 'Shiptosome' || flag == 'Instapay'
      "
    >
      <div class="UserName" v-if="flag == 'Instapay' || flag == 'Shiptosome'">
        <span>UserName : </span>
        <span>Omar93917</span>
      </div>

      <div class="phone">
        <span>phone : </span>
        <span>0123456789</span>
      </div>

      <div class="Img mt-3">
        <img src="../assets/qr.svg" alt="" />
      </div>

      <div class="PaymentBill myt-3 d-flex flex-column mt-3 text-start">
        <label for="Bill" class="my-2">Payment Bill</label>
        <input type="file" name="" id="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const PaymentState = computed(() => store.getters.payment);
const props = defineProps(["state"]);
let flag = ref("");
const SetState = () => {
  switch (PaymentState.value) {
    case "Shiptosome": {
      flag.value = "Shiptosome";
      break;
    }
    case "CashHome": {
      flag.value = "CashHome";
      break;
    }
    case "Instapay": {
      flag.value = "Instapay";
      break;
    }
    case "vodafoneCash": {
      flag.value = "vodafoneCash";
      break;
    }
  }
  console.log(PaymentState.value, flag);
};
onMounted(() => SetState());
</script>

<style lang="scss" scoped>
.PaymentForm {
  .Methods {
    p {
      label {
        color: #927091;
        padding: 0 0 0 11px;
        margin: 20px 0 23px 0;
        cursor: pointer;
      }
      input[type="radio"] {
        width: 1rem;
        height: 1rem;
        &:checked {
          accent-color: var(--main-color);
        }
      }
    }
  }

  .InfoForm {
    background-color: var(--main-color);
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 0 auto;
    width: fit-content;
    color: #fff;
    .Img {
      border-radius: 15px;
      background: #fff;
      width: fit-content;
      margin: 0 auto;
    }
  }
}
</style>
