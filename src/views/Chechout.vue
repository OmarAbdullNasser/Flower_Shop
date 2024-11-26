<template>
  <div class="checkout">
    <div class="container my-5">
      <div class="row">
        <div class="product_list col-12 col-lg-8">
          <div class="path d-flex">
            <h4 class="past-location">Home</h4>
            <h5 class="mx-3">/</h5>
            <h4 class="current-location">Checkout</h4>
          </div>

          <div class="proudect_list">
            <div
              class="total_price px-4 py-3 d-flex justify-content-between align-items-center my-3"
            >
              <h4>Total</h4>
              <h4>{{ TM }} L.E</h4>
            </div>
            <hr />
            <ul class="p-0">
              <li
                v-for="item in Prodects"
                :key="item.id"
                class="product p-3 mb-3 d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="img-box mb-3 mb-lg-0">
                  <img :src="item.product_image" class="img-fluid" alt="" />
                </div>

                <div
                  class="product_info mx-auto d-flex flex-column align-items-center justify-content-center mx-lg-2 my-3 my-lg-0"
                >
                  <h5>
                    <a href="#"> {{ item.product_name }}</a>
                  </h5>
                  <span class="my-3">{{ item.quantity }}</span>
                  <span> {{ item.price }}</span>
                </div>

                <div class="total my-3 my-lg-0">
                  <h4 class="mx-auto">{{ item.total }}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="payment col-12 col-lg-4">
          <div class="Phone_Number p-4 d-flex flex-column">
            <label for="FullName" class="my-3"> الاسم بالكامل </label>
            <input
              type="text"
              class="p-2"
              name="FullName"
              v-model="FullName"
              required
              minlength="2"
              maxlength="50"
            />

            <label class="my-3">رقم الهاتف</label>
            <input
              type="tel"
              class="p-2"
              @input="validateNumberInput"
              placeholder="010XXXXXXXXX"
              v-model="phone"
              minlength="10"
              maxlength="15"
              required
            />
            <label for="email" class="my-3"> البريد الالكتروني </label>
            <input type="email" class="p-2" name="email" v-model="email" />

            <label for="adders" class="my-3"> العنوان</label>
            <textarea
              name="adders"
              id="adders"
              class="p-2"
              minlength="5"
              maxlength="50"
              required
              v-model="adders"
            ></textarea>
            <div class="payment_method d-flex flex-column my-5 p-3">
              <span class="my-3">وسيلة الدفع </span>
              <ul
                class="p-0 method d-flex flex-wrap justify-content-evenly align-items-center"
              >
                <li class="cash" :class="{ selected: selectedMethod === 1 }">
                  <button @click="selectMethod(1)">
                    <img
                      src="../assets/CashOnDrivley.png"
                      class="img-fluid"
                      alt=""
                    />
                  </button>
                </li>
                <li
                  class="v-cash mx-3 p-3"
                  :class="{ selected: selectedMethod === 2 }"
                >
                  <button @click="selectMethod(2)">
                    <img src="../assets/Asset.png" class="img-fluid" alt="" />
                  </button>
                </li>
                <li
                  class="instapay"
                  :class="{ selected: selectedMethod === 3 }"
                >
                  <button @click="selectMethod(3)">
                    <img
                      src="../assets/instapay.png"
                      class="img-fluid"
                      alt=""
                    />
                  </button>
                </li>
              </ul>
              <PaymentMethodVue
                v-if="selectedMethod >= 2"
                @imageValidated="handleImage"
                :Data="PaymentData"
              />
            </div>
            <button
              class="buy-btn btn w-100"
              @click="
                SendOrder(
                  FullName,
                  phone,
                  adders,
                  email,
                  selectedMethod,
                  PaymentImg
                )
              "
            >
              ادفع
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modalRef"
    >
      <div class="modal-dialog">
        <div class="loader text-primary mx-auto" role="status"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import PaymentMethodVue from "@/components/PaymentMethod.vue";
import Swal from "sweetalert2";
name: "checkout";

const store = useStore();
const url = inject("url");
const selectedMethod = ref(1); // Holds the currently selected method
const CartCookie = computed(() => store.getters["Cart/Cookies"]);
const Prodects = ref([]);
const TM = ref(0);
const FullName = ref("");
const phone = ref("");
const adders = ref("");
const email = ref("");
const router = useRouter();
const PaymentMethod = ref([]);
const PaymentImg = ref(null);
const modalRef = ref(null);

const PaymentData = ref(null);

let bootstrapModal = null;

const handleImage = (imageFile) => {
  PaymentImg.value = imageFile;
};
// Function to select a payment method
const PopupMessage = (title, Text, icon, BtnText) => {
  Swal.fire({
    title: title,
    text: Text,
    icon: icon,
    confirmButtonText: BtnText,
  });
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

const FetchPaymentData = async () => {
  try {
    // Use the fetch API to send a GET request

    const response = await fetch(`${url}/payment-methods/list`);

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const PaymentData = await response.json();
    const data = PaymentData.data;

    // Display the fetched data in the console
    PaymentMethod.value = data;
    console.log(PaymentMethod.value, "list");
  } catch (error) {
    // Handle and log any errors
    console.error("Error fetching data:", error);
  }
};

const selectMethod = (method) => {
  selectedMethod.value = method; // Update the selected method
  toggleProps();
};

const toggleProps = () => {
  if (selectedMethod.value == 2) {
    PaymentData.value = PaymentMethod.value[2];
  } else if (selectedMethod.value == 3) {
    PaymentData.value = PaymentMethod.value[1];
  } else {
    PaymentData.value = PaymentMethod.value[0];
  }
};
const validateNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Replace any non-digit character with an empty string
};

const CheckValues = (type, value) => {
  value = value.trim(); // Trim whitespace once for better performance

  switch (type) {
    case "name":
      if (value.length < 2 || value.length > 50) {
        return "The Full Name is required and must be between 2 and 50 characters.";
      }
      break;

    case "phone":
      if (value.length < 10 || value.length > 15) {
        return "The Phone Number is required and must be between 10 and 15 digits.";
      }
      break;

    case "adders":
      if (value.length < 5 || value.length > 50) {
        return "The Address is required and must be between 5 and 50 characters.";
      }
      break;

    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "The Email is required and must be in a valid email format.";
      }
      break;

    // default:
    //   return "Invalid validation type.";
  }

  return true; // Return true if all validations pass
};
const SendOrder = async (
  name,
  phone,
  adders,
  email,
  paymentmethod,
  img = null
) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  let result = "";
  let flag = false;
  // console.log(img);

  if (typeof CheckValues("name", name) === "string") {
    result = CheckValues("name", name);
    PopupMessage("Flied to Checkout", result, "error", "Try Again");
  } else if (typeof CheckValues("phone", phone) === "string") {
    result = CheckValues("phone", phone);
    PopupMessage("Flied to Checkout", result, "error", "Try Again");
  } else if (typeof CheckValues("adders", adders) === "string") {
    result = CheckValues("adders", adders);
    PopupMessage("Flied to Checkout", result, "error", "Try Again");
  } else if (typeof CheckValues("email", email) === "string") {
    result = CheckValues("email", email);
    PopupMessage("Flied to Checkout", result, "error", "Try Again");
  } else {
    flag = true;
  }

  if (flag) {
    try {
      const formData = new FormData();
      formData.append("cart_cookie", CartCookie.value);
      formData.append("customer_name", name);
      formData.append("customer_mobile", phone);
      formData.append("customer_email", email);
      formData.append("address", adders);
      formData.append("payment_method_id", paymentmethod);
      formData.append("image", img);
      const response = await fetch(`https://flowerest.e1s.me/api/checkout`, {
        method: "POST",

        // body: JSON.stringify({
        //   cart_cookie: CartCookie.value,
        //   customer_name: name,
        //   customer_mobile: phone,
        //   customer_email: email,
        //   address: adders,
        //   payment_method_id: paymentmethod,
        //   image: img,
        // }),
        body: formData,
      });
      const OrderResponse = await response.json();
      console.log(OrderResponse);
      // Parse the JSON response.
      // bootstrapModal.show();
      // Errors.push(OrderResponse.)
      if (!response.ok) {
        throw new Error(OrderResponse.message || "Failed to Make Checkout!");
      } else {
        // bootstrapModal.hide();
        const data = OrderResponse.data;
        const { cookie_value2: OrderId } = data;
        store.commit("Cart/SET_ORDERID", OrderId);
        PopupMessage("Done Checkout", "Thank you!", "success", "Done");
        store.commit("Cart/CLEAR_CART");
        store.commit("Cart/CLEAR_COOKIE");
        router.push("/"), 5000;
      }
      toast.success("Product Ordered successfully!", {
        autoClose: 4000, // Close after 2 seconds
        position: "top-right",
      });
    } catch (error) {
      console.error("Error make order from cart:", error);
      // Handle error appropriately (e.g., show notification)
    }
  }
};
onMounted(() => {
  FetchDataCart();
  bootstrapModal = new Modal(modalRef.value, {
    backdrop: "static",
    keyboard: false,
  });
  FetchPaymentData();
});
</script>

<style lang="scss" scoped>
.checkout {
  .product_list {
    .path {
      .past-location {
        color: #6c757d;
      }
      .current-location {
        color: #784b77;
      }
    }
    .product {
      background: #e7d4e7;
      border-radius: 15px;

      .img-box {
        img {
          border-radius: 15px;
          margin-top: 0.5rem;
        }
      }

      .product_info {
        white-space: nowrap;
      }

      .product_amounts {
        width: 250px;

        input {
          border-radius: 5px;
          width: 100px;
        }
      }

      .remove_producet {
        margin: 0 9px;
      }
    }
    .total_price {
      border-radius: 15px;
      color: #fff;
      background: #927091;
    }
  }

  .payment {
    .Phone_Number {
      margin-top: 2rem;
      background: #fff;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      label {
        color: #400a3f;
      }
      input,
      textarea {
        border-radius: 10px;
        border-color: none !important;
        resize: none;
      }
    }

    .payment_method {
      background: #fff;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      ul {
        list-style: none;
        width: fit-content;
        li button {
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 15px;
          background-color: transparent;
          width: 90px;
        }
        li.selected button {
          border: 2px solid #400a3f; /* Add a blue border to indicate selection */
          background-color: #e4d0e3; /* Change background color on selection */
        }
      }
    }
  }
  .buy-btn {
    background: #927091;
    color: #fff;
  }
}

@media screen and (max-width: 998.1px) {
  .product {
    .img-box {
      width: 100%;

      img {
        border-radius: 0 15px 15px 0;
      }
    }
  }
}

@media screen and (min-width: 999px) {
  .product {
    .img-box {
      width: 20%;

      img {
        border-radius: 0 15px 15px 0;
      }
    }
  }
}
.modal-dialog {
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
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
