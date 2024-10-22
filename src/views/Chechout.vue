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
            <ul class="p-0">
              <li
                v-for="item in CartItem"
                :key="item.id"
                class="product p-3 mb-3 d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="img-box mb-3 mb-lg-0">
                  <img
                    src="../assets/flower-img.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>

                <div
                  class="product_info mx-auto d-flex flex-column align-items-center justify-content-center mx-lg-2 my-3 my-lg-0"
                >
                  <h5>
                    <a href="#"> {{ item.product_name }}</a>
                  </h5>
                  <span class="my-3">كل يوم 3 ريال</span>
                  <span> {{ item.price }}</span>
                </div>

                <div class="total my-3 my-lg-0">
                  <h4 class="mx-auto">{{ item.total }}</h4>
                </div>
              </li>

              <hr />
            </ul>

            <div
              class="total_price px-4 py-3 d-flex justify-content-between align-items-center"
            >
              <h4>Total</h4>
              <h4>{{ TotalMoney }} L.E</h4>
            </div>
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
            />

            <label class="my-3">رقم الهاتف</label>
            <input
              type="tel"
              class="p-2"
              @input="validateNumberInput"
              placeholder="010XXXXXXXXX"
              v-model="phone"
              required
            />
            <label for="email" class="my-3"> البريد الالكتروني </label>
            <input type="email" class="p-2" name="email" v-model="email" />

            <label for="adders" class="my-3"> العنوان</label>
            <textarea
              name="adders"
              id="adders"
              class="p-2"
              required
              v-model="adders"
            ></textarea>
            <div class="payment_method d-flex flex-column my-5 p-3">
              <span class="my-3">وسيلة الدفع </span>
              <ul
                class="p-0 method d-flex flex-wrap justify-content-evenly align-items-center"
              >
                <li class="cash" :class="{ selected: selectedMethod === 0 }">
                  <button @click="selectMethod(0)">
                    <img
                      src="../assets/CashOnDrivley.png"
                      class="img-fluid"
                      alt=""
                    />
                  </button>
                </li>
                <li
                  class="v-cash mx-3 p-3"
                  :class="{ selected: selectedMethod === 1 }"
                >
                  <button @click="selectMethod(1)">
                    <img src="../assets/Asset.png" class="img-fluid" alt="" />
                  </button>
                </li>
                <li
                  class="instapay"
                  :class="{ selected: selectedMethod === 2 }"
                >
                  <button @click="selectMethod(2)">
                    <img
                      src="../assets/instapay.png"
                      class="img-fluid"
                      alt=""
                    />
                  </button>
                </li>
              </ul>
            </div>
            <button
              class="buy-btn btn w-100"
              @click="SendOrder(FullName, phone, adders, email)"
            >
              ادفع
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
name: "checkout";
const store = useStore();
const url = inject("url");
const selectedMethod = ref(0); // Holds the currently selected method
const CartCookie = computed(() => store.getters["Cart/Cookies"]);
const CartItem = computed(() => store.getters["Cart/cartItems"]);
const TotalMoney = computed(() => store.getters["Cart/TotalMoney"]);
const FullName = ref("");
const phone = ref();
const adders = ref("");
const email = ref("");
const router = useRouter();

// Function to select a payment method
const selectMethod = (method) => {
  selectedMethod.value = method; // Update the selected method
};

// Create an asynchronous function to perform the GET request

const validateNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Replace any non-digit character with an empty string
};
const SendOrder = async (name, phone, adders, email) => {
  try {
    const response = await fetch(`${url}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_cookie: CartCookie.value,
        customer_name: name,
        customer_mobile: phone,
        customer_email: email,
        address: adders,
        payment_method_id: 1,
      }),
    });

    // Parse the JSON response
    const OrderResponse = await response.json();
    // Prodects.value = Prodects.value.filter((item) => item.id !== id);
    console.log(OrderResponse);
    if (!response.ok) {
      throw new Error(
        OrderResponse.message || "Failed to update product in cart"
      );
    } else {
      toast.success("Product Ordered successfully!", {
        autoClose: 4000, // Close after 2 seconds
        position: "top-right",
      });
    }
    setTimeout(() => router.push("/"), 5000);
  } catch (error) {
    console.error("Error make order from cart:", error);
    // Handle error appropriately (e.g., show notification)
  }
};
onMounted(() => console.log(CartItem.value));
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
</style>
