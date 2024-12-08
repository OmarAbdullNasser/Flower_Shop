<template>
  <div class="loader mx-auto my-3" v-if="loading"></div>
  <div class="PaymentForm" v-else>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-center">Payment Method</h3>
          <div
            class="Methods d-flex align-items-center justify-content-evenly"
            v-if="senderObj.ship_to_me == 0"
          >
            <div class="vodafoneCash">
              <p class="mb-0">
                <input
                  type="radio"
                  name="Payment"
                  id="vodafoneCash"
                  @click="FindMethod(3, false, 2)"
                  :checked="MethodCode == 2"
                />
                <label for="vodafoneCash">vodafoneCash</label>
              </p>
            </div>

            <div class="Instapay my-3">
              <p class="mb-0">
                <input
                  type="radio"
                  name="Payment"
                  id="Instapay"
                  @click="FindMethod(2, true, 0)"
                  :checked="MethodCode == 0"
                />
                <label for="Instapay">Instapay</label>
              </p>
            </div>
          </div>
          <div
            class="Methods d-flex align-items-center justify-content-evenly"
            v-if="senderObj.ship_to_me == 1"
          >
            <div class="CashOnHome" v-if="senderObj.payment_method_id == 1">
              <p class="mb-0">
                <label for="CashHome">Cash Collect From Home</label>
              </p>
            </div>

            <div class="vodafoneCash" v-if="senderObj.payment_method_id == 2">
              <p class="mb-0">
                <label for="vodafoneCash">vodafoneCash</label>
              </p>
            </div>

            <div class="Instapay" v-if="senderObj.payment_method_id == 0">
              <p class="mb-0">
                <label for="Instapay">Instapay</label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="InfoForm text-center"
      v-if="
        senderObj.ship_to_me == 0 ||
        (senderObj.ship_to_me == 1 && senderObj.payment_method_id == 2) ||
        (senderObj.ship_to_me == 1 && senderObj.payment_method_id == 0)
      "
    >
      <div
        class="UserName"
        v-if="
          isUSERNAME ||
          (senderObj.ship_to_me == 1 && senderObj.payment_method_id == 0)
        "
      >
        <span>UserName : </span>
        <span>{{ SingleMethod.other_info.user_name }}</span>
      </div>

      <div class="phone">
        <span>phone : </span>
        <span>{{ SingleMethod.other_info.number }}</span>
      </div>

      <div class="Img mt-3">
        <img :src="SingleMethod.other_info.qr_image" alt="" />
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
import { onMounted, computed, ref, watchEffect, inject } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";

const store = useStore();

const props = defineProps(["state"]);
const senderObj = computed(() => store.getters.senderObj);
const MethodCode = ref(null);
const emit = defineEmits(["Send"]);
const isUSERNAME = ref(null);
const url = inject("url");
const Methods = ref([]);
const SingleMethod = ref({});
const loading = ref(true);
const fetchData = async () => {
  try {
    const PaymentRespons = await fetch(`${url}/payment-methods/list`, {
      method: "GET", // Specify the method if needed
    });
    const respons = await PaymentRespons.json();
    Methods.value = respons.data;
    loading.value = false;

    if (
      senderObj.value.ship_to_me == 1 &&
      senderObj.value.payment_method_id == 0
    ) {
      FindMethod(2, true, 0);
    } else if (
      senderObj.value.ship_to_me == 1 &&
      senderObj.value.payment_method_id == 2
    ) {
      FindMethod(3, false, 2);
    } else {
      FindMethod(3, false, 2);
    }
    
  } catch (e) {
    console.log(e);
  }
};
const FindMethod = (id, UserName, methodCode) => {
  isUSERNAME.value = UserName;
  MethodCode.value = methodCode;
  const paymentid = Methods.value.filter((item) => item.id == id);
  SingleMethod.value = paymentid[0];
  return paymentid;
};
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
      store.commit("SET_SENDER", { payment_method_id: MethodCode.value });
      if (MethodCode.value >= 0) {
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
onMounted(() => {
  if (senderObj.value.payment_method_id == 1) {
    loading.value = false;
    emit("Send", true);
  } else {
    fetchData();
  }
});
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
.loader {
  width: 60px;
  aspect-ratio: 1;
  border: 15px solid #ddd;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
}
.loader::before {
  content: "";
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 15px solid #514b82;
  animation: l18 2s infinite linear;
}
@keyframes l18 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
