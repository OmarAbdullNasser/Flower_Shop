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
                <input
                  type="radio"
                  name="Payment"
                  id="Instapay"
                  @click="paymentMethod = 0"
                />
                <label for="Instapay">Instapay</label>
              </p>
            </div>

            <div
              class="CashOnHome"
              v-if="flag == 'vodafoneCash' || flag == 'Shiptosome'"
            >
              <p class="mb-0">
                <input
                  type="radio"
                  name="Payment"
                  id="vodafoneCash"
                  @click="paymentMethod = 2"
                />
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
        <input
          type="file"
          @change="handleFileChange"
          accept="image/*"
          name=""
          id=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";

const store = useStore();
const PaymentState = computed(() => store.getters.payment);
const props = defineProps(["state"]);
const senderObj = computed(() => store.getters.senderObj);
const emit = defineEmits(["Send"]);
const paymentMethod = ref(0);
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
};
const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const setpaymentMethod = () => {};
const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];

  // Validate file content
  const reader = new FileReader();
  reader.onload = (e) => {
    const arrayBuffer = e.target.result;
    const uint8Array = new Uint8Array(arrayBuffer);

    // Check headers for valid image content
    if (
      (selectedFile.type === "image/jpeg" &&
        uint8Array[0] === 0xff &&
        uint8Array[1] === 0xd8) ||
      (selectedFile.type === "image/png" &&
        uint8Array[0] === 0x89 &&
        uint8Array[1] === 0x50) ||
      (selectedFile.type === "image/gif" &&
        uint8Array[0] === 0x47 &&
        uint8Array[1] === 0x49) ||
      (selectedFile.type === "image/webp" &&
        uint8Array[8] === 0x57 &&
        uint8Array[9] === 0x45)
    ) {
      store.commit("SET_SENDER", { image: selectedFile });
      store.commit("SET_SENDER", { payment_method_id: paymentMethod.value });
      if (paymentMethod.value >= 0) {
        emit("Send", true);
      } else {
        Swal.fire({
          title: "Error",
          text: "Selcet Method",
          icon: "error",
          confirmButtonText: "Try Again!",
        });
      }
    }
  };

  reader.readAsArrayBuffer(selectedFile);
};
watchEffect(() => console.log(paymentMethod.value));
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
