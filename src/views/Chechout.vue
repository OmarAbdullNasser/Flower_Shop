<template>
  <div class="checkout">
    <div class="container my-5">
      <div class="row">
        <div class="product_list col-12 col-lg-8">
          <div class="path  d-flex ">
            <h4 class="past-location">Home</h4>
            <h5 class="mx-3">/</h5>
            <h4 class="current-location">Checkout</h4>
          </div>
          <div class="proudect_list">
            <ul class="p-0">
              <li
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
                    <a href="#"> كل يوم صدقة </a>
                  </h5>
                  <span class="my-3">كل يوم 3 ريال</span>
                  <span> 1095 ريال </span>
                </div>

                <div class="total my-3 my-lg-0">
                  <h4 class="mx-auto">1095 ريال</h4>
                </div>
              </li>
              <hr />

              <li
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
                    <a href="#"> كل يوم صدقة </a>
                  </h5>
                  <span class="my-3">كل يوم 3 ريال</span>
                  <span> 1095 ريال </span>
                </div>

                <div class="total my-3 my-lg-0">
                  <h4 class="mx-auto">1095 ريال</h4>
                </div>
              </li>
            </ul>

            <div
              class="total_price px-4 py-3 d-flex justify-content-between align-items-center"
            >
              <h4>إجمالي</h4>
              <h4>300 ﷼</h4>
            </div>
          </div>
        </div>
        <div class="payment col-12 col-lg-4">
          <div class="Phone_Number p-4 d-flex flex-column">
            <label class="my-3">رقم الهاتف</label>
            <input
              type="tel"
              class="p-2"
              @input="validateNumberInput"
              placeholder="010XXXXXXXXX"
            />
          </div>

          <div class="payment_method d-flex flex-column my-5 p-3">
            <span class="my-3">وسيلة الدفع </span>
            <ul
              class="p-0 method d-flex justify-content-evenly align-items-center"
            >
              <li class="cash">
                <img
                  src="../assets/CashOnDrivley.png"
                  class="img-fluid"
                  alt=""
                />
              </li>
              <li class="v-cash mx-3 p-3">
                <img src="../assets/Asset.png" class="img-fluid" alt="" />
              </li>
              <li class="instapay">
                <img src="../assets/instapay.png" class="img-fluid" alt="" />
              </li>
            </ul>
          </div>

          <div class="payment_info d-flex flex-column my-5 p-3">
            <label for="FullName" class="my-3"> الاسم بالكامل </label>
            <input type="text" class="p-2" name="FullName" />
            <label for="adders" class="my-3"> العنوان</label>
            <input type="text" class="p-2" name="addders" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "checkout";

const validateNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Replace any non-digit character with an empty string
};
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
      input {
        border-radius: 10px;
      }
    }

    .payment_method {
      background: #fff;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      ul {
        list-style: none;
        li {
          width: 120px;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 15px;
        }
      }
    }

    .payment_info {
      background: #fff;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      input {
        border-radius: 10px;
      }
    }
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
