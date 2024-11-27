<template>
  <div class="checkpout2">
    <div class="container">
      <div class="title text-center">
        <h1>Choose Delivery Service</h1>
        <p>We deliver same day or on the date you choose</p>
      </div>
      <div class="stages d-flex justify-content-between text-center">
        <div
          class="stage first"
          :class="{ active: phase >= 1 }"
          @click="ShiftBetweenPhases($event, 1)"
        >
          1
        </div>
        <div
          class="stage secand"
          :class="{ active: phase >= 2 }"
          @click="ShiftBetweenPhases($event, 2)"
        >
          2
        </div>
        <div class="stage thrid" :class="{ active: phase === 3 }">3</div>
      </div>
      <div class="row">
        <!-- <div class="col-12- col-lg-9 SendrInfo">
          <FristStage v-if="phase === 1" />
          <SecandStage v-else-if="phase === 2" @vaild="test" />
          <ThirdStage v-else-if="phase === 3" />
          <button
            class="btn"
            @click="SetPhase"
            v-if="phase < 3"
            :disabled="isButtonDisabled"
          >
            <span>Next</span>
          </button>
          <button class="btn" @click="SendOrder(senderObj)" v-else>
            <span>Send</span>
          </button>
        </div> -->
        <div class="col-12 col-lg-9 SendrInfo">
          <!-- Dynamic Component -->
          <component
            :is="currentComponent"
            @validation-result="handleValidationResult"
            @SendImg="handlSend"
          />

          <!-- Next/Send Buttons -->
          <button
            class="btn"
            @click="SetPhase"
            v-if="phase < 3"
            :disabled="isButtonDisabled"
          >
            <span>Next</span>
          </button>
          <button
            class="btn"
            @click="SendOrder(senderObj)"
            :disabled="isSendBtnDisabled"
            v-else
          >
            <span>Send</span>
          </button>
        </div>
        <div class="total col-12- col-lg-3 p-3">
          <router-link :to="{ name: 'Cart' }"> Edit Cart </router-link>
          <div class="items my-3">
            <ul>
              <li
                v-for="item in Prodects"
                :key="item.id"
                class="d-flex justify-content-between mt-3"
              >
                <span>{{ item.product_name }} </span>
                <span>{{ item.total }} EGP</span>
              </li>
              <li class="d-flex justify-content-between my-3">
                <span>Shipping Fees</span> <span>Free shipping</span>
              </li>
            </ul>
          </div>
          <div class="promocode" v-if="false">
            <p role="button" v-if="!promocode" @click="promocode = !promocode">
              Enter Promocode
            </p>
            <div class="feild d-flex align-items-center" v-if="promocode">
              <input type="text" name="promocode" />
              <button>APPLY</button>
              <font-awesome-icon
                icon="fa-regular fa-circle-xmark"
                class="ms-3"
                @click="promocode = !promocode"
              />
            </div>
          </div>
          <hr />
          <div class="TotalMoney d-flex justify-content-between">
            <h5>Grand Total</h5>
            <h5>{{ TM }} EGP</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FristStage from "@/components/FristStage.vue";
import SecandStage from "@/components/SecandStage.vue";
import ThirdStage from "@/components/ThirdStage.vue";
import { ref, inject, computed, onMounted, provide } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";

import { useRouter } from "vue-router";
name: "checkout";
const store = useStore();
const router = useRouter();
const url = inject("url");
const phase = ref(1);
const isButtonDisabled = ref(true);
const isSendBtnDisabled = ref(true);
const currentComponent = computed(() => {
  switch (phase.value) {
    case 1:
      return FristStage;
    case 2:
      return SecandStage;
    case 3:
      return ThirdStage;
    default:
      return null;
  }
});

const promocode = ref(false);
const Prodects = ref([]);
const TM = ref(0);
const CartCookie = computed(() => store.getters["Cart/Cookies"]);
const senderObj = computed(() => store.getters.senderObj);
const SetPhase = () => {
  if (phase.value < 3) {
    phase.value += 1;
    isButtonDisabled.value = true; // Disable button until validated
  }
};

const handleValidationResult = (isValid) => {
  isButtonDisabled.value = !isValid; // Enable button if validation is successful
};
const handlSend = (isValid) => {
  isSendBtnDisabled.value = !isValid; // Enable button if validation is successful
};

const ShiftBetweenPhases = (e, num) => {
  if (e.target.classList.contains("active")) {
    phase.value = num;
  }
};
// Create an asynchronous function to perform the GET request
const FetchDataCart = async () => {
  try {
    // Use the fetch API to send a GET request

    const response = await fetch(
      `${url}/show-cart?cart_cookie=${CartCookie.value}`
    );

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const CartData = await response.json();
    const data = CartData.data;
    // Display the fetched data in the console
    Prodects.value = data.cart;
    TM.value = data.total_sum;
  } catch (error) {
    // Handle and log any errors
    console.error("Error fetching data:", error);
  }
};
const PopupMessage = (title, Text, icon, BtnText) => {
  Swal.fire({
    title: title,
    text: Text,
    icon: icon,
    confirmButtonText: BtnText,
  });
};

const SendOrder = async (obj) => {
  try {
    Swal.fire({
      title: "Making your Order",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });
    const formData = new FormData();
    formData.append("cart_cookie", CartCookie.value);
    formData.append("image", obj.image); // Assuming an empty string for now
    formData.append("ship_to_me", obj.ship_to_me);
    formData.append("know_receipent_address", obj.know_receipent_address);
    formData.append("same_day", ""); // Assuming an empty string for now
    formData.append("delivery_date", ""); // Assuming an empty string for now
    formData.append("recepient_name", obj.Name);
    formData.append("recepient_mobile", obj.phone);
    formData.append("delivery_place", 1);
    formData.append("area", obj.Area);
    formData.append("st_name", obj.SName);
    formData.append("apartment", obj.ApartName);
    formData.append("floor", obj.Floor);
    formData.append("greeting_card", obj.Greeting);
    formData.append("extra_instructions", obj.extra_instructions);
    formData.append("customer_first_name", obj.SenderFName);
    formData.append("customer_second_name", obj.SenderLName);
    formData.append("customer_mobile", obj.SenderPhone);
    formData.append("customer_email", obj.SenderEmail);
    formData.append("hide_my_name_status", obj.SenderNameState);
    formData.append("payment_method_id", 1);

    const response = await fetch(`${url}/order-checkout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData, // Use FormData instead of JSON
    });
    console.log(response);
    // Parse the JSON response
    const OrderResponse = await response.json();
    // Prodects.value = Prodects.value.filter((item) => item.id !== id);
    console.log(OrderResponse);
    if (!response.ok) {
      throw new Error(
        OrderResponse.message || "Failed to update product in cart"
      );
    } else {
      Swal.close();
      const data = OrderResponse.data;
      const { cookie_value2: OrderId } = data;
      store.commit("Cart/SET_ORDERID", OrderId);
      PopupMessage("Done Checkout", "Thank you!", "success", "Done");
      store.commit("Cart/CLEAR_CART");
      store.commit("Cart/CLEAR_COOKIE");
      router.push("/"), 5000;
    }
    setTimeout(() => router.push("/"), 5000);
  } catch (error) {
    Swal.close();
    Swal.fire("Error", error.message, "error");
    console.error("Error make order from cart:", error);
    // Handle error appropriately (e.g., show notification)
  }
};

onMounted(() => FetchDataCart());
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
  .SendrInfo {
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

  .total {
    background: #ffffff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: fit-content;
    a {
      text-decoration: underline;
      color: #400a3f;
    }
    ul {
      padding: 0;
      list-style: none;
      li {
      }
    }
    .promocode {
      p {
        text-decoration: underline;
        color: #400a3f;
      }
      .feild {
        input {
          border: 2px solid rgba(64, 10, 63, 0.7);
          border-right: 0;
          border-radius: 2px 0 0 2px;
          line-height: 41px;
          outline: none;
        }
        button {
          background-color: #400a3f;
          color: #fff;
          opacity: 0.7;
          height: 45px;
          border: none;
          transition: opacity 0.3s ease-in-out;
          &:hover {
            opacity: 1;
          }
        }
        svg {
          height: 1.3rem;
          color: #400a3f;
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
    .TotalMoney {
      color: #28a52c;
    }
  }
}
@media screen and (max-width: 991.9px) {
  .checkpout2 {
    .SendrInfo {
      button {
        width: 100%;
      }
    }
  }
}
</style>
