<template>
  <div class="Fliter">
    <aside class="sidebar-wrarpper">
      <div class="sidebar-item">
        <h3 class="sidebar-title">Extra Products</h3>
        <div class="sidebar-body">
          <ul>
            <li>
              <div class="custom-control custom-checkbox mb-2">
                <input
                  type="checkbox"
                  id="isNotExtraProducts"
                  class="custom-control-input checkmark"
                />
                <label for="isNotExtraProducts" class="custom-control-label">
                  Is Not Extra Products
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="isNotSpecialDeals_Desktop"
                  class="custom-control-input checkmark"
                />
                <label
                  for="isNotSpecialDeals_Desktop"
                  class="custom-control-label"
                >
                  Is Not Special Deal
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-item">
        <h3 class="sidebar-title">Extra Products</h3>
        <div class="sidebar-body">
          <ul>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="isNotExtraProducts"
                  class="custom-control-input checkmark"
                />
                <label for="isNotExtraProducts" class="custom-control-label">
                  Is Not Extra Products
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-item">
        <h3 class="sidebar-title">Categories</h3>
        <div class="sidebar-body">
          <ul>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="isNotExtraProducts"
                  class="custom-control-input checkmark"
                />
                <label for="vases" class="custom-control-label"> vases </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-item">
        <h3 class="sidebar-title">Brands</h3>
        <div class="sidebar-body">
          <ul>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="Dumerah"
                  class="custom-control-input checkmark"
                />
                <label for="Dumerah" class="custom-control-label">
                  Dumerah
                </label>
              </div>

              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="Fleur"
                  class="custom-control-input checkmark"
                />
                <label for="Fleur" class="custom-control-label"
                  >Fleur Chocolates
                </label>
              </div>

              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="Voila"
                  class="custom-control-input checkmark"
                />
                <label for="Voila" class="custom-control-label"> Voila </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-item">
        <h3 class="sidebar-title">Price</h3>
        <div class="sidebar-body">
          <ul>
            <li>
              <div class="range-slider">
                <div class="start"></div>
                <input
                  type="range"
                  :min="min"
                  :max="max"
                  v-model="sliderValue"
                  @input="updateBackground"
                  id="myinput"
                />

                <div
                  class="range-values d-flex justify-content-center align-items-center"
                >
                  <h5 class="amount">
                    <span id="minValue">840</span> -
                    <span id="maxValue">20554</span>
                  </h5>
                  <h5 class="ms-3 mt-1">EGP</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p class="reset-price clear my-3">Reset</p>

      <div class="sidebar-item">
        <h3 class="sidebar-title">Occasions</h3>
        <div class="sidebar-body">
          <ul>
            <li>
              <div class="custom-control custom-checkbox mb-2">
                <input
                  type="checkbox"
                  id="Anniversary"
                  class="custom-control-input checkmark"
                />
                <label for="Anniversary" class="custom-control-label">
                  Anniversary
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Birthdays"
                  class="custom-control-input checkmark"
                />
                <label for="Birthdays" class="custom-control-label">
                  Birthdays
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Easter"
                  class="custom-control-input checkmark"
                />
                <label for="Easter" class="custom-control-label">
                  Easter
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Eid_elAdha"
                  class="custom-control-input checkmark"
                />
                <label for="Eid_elAdha" class="custom-control-label">
                  Eid el Adha
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Eid_El-Fitr"
                  class="custom-control-input checkmark"
                />
                <label for="Eid_El-Fitr" class="custom-control-label">
                  Eid El-Fitr
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Father_Day"
                  class="custom-control-input checkmark"
                />
                <label for="Father_Day" class="custom-control-label">
                  Father's Day
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="GetWell"
                  class="custom-control-input checkmark"
                />
                <label for="GetWell" class="custom-control-label">
                  Get Well
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Mother_Day"
                  class="custom-control-input checkmark"
                />
                <label for="Mother_Day" class="custom-control-label">
                  Mother's Day
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="New_Baby"
                  class="custom-control-input checkmark"
                />
                <label for="New_Baby" class="custom-control-label">
                  New Baby
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Ramadan"
                  class="custom-control-input checkmark"
                />
                <label for="Ramadan" class="custom-control-label">
                  Ramadan
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="New_Baby"
                  class="custom-control-input checkmark"
                />
                <label for="New_Baby" class="custom-control-label">
                  New Baby
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Thank_you"
                  class="custom-control-input checkmark"
                />
                <label for="Thank_you" class="custom-control-label">
                  Thank you
                </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="Valentine_Day"
                  class="custom-control-input checkmark"
                />
                <label for="Valentine_Day" class="custom-control-label">
                  Valentine's Day
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-item">
        <h3 class="sidebar-title">Color</h3>
        <div class="sidebar-body">
          <ul>
            <li>
              <div class="custom-control custom-checkbox mb-2">
                <input
                  type="checkbox"
                  id="Pink"
                  class="custom-control-input checkmark"
                  value="Pink"
                  @click="printValue"
                />
                <label for="Pink" class="custom-control-label"> Pink </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox my-2">
                <input
                  type="checkbox"
                  id="Red"
                  class="custom-control-input checkmark"
                  value="Red"
                  @click="printValue"
                />
                <label for="Red" class="custom-control-label"> Red </label>
              </div>
            </li>

            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="White"
                  class="custom-control-input checkmark"
                  value="White"
                  @click="printValue"
                />
                <label for="White" class="custom-control-label"> White </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
import { ref } from "vue";
import { defineEmits } from "vue";

// Define emit event
const emit = defineEmits(["value"]);

const sliderValue = ref(100); // Initial value of the slider
const min = ref(0); // Minimum value of the slider
const max = ref(100); // Maximum value of the slider
let presentage = ref(0);

const updateBackground = () => {
  const inputElement = document.getElementById("myinput");
  const minValue = document.getElementById("minValue");
  const maxValue = document.getElementById("maxValue");
  const value = inputElement.value;

  inputElement.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`;
  minValue.textContent = 840;
  presentage = value / max.value;
  maxValue.textContent =
    Math.round(22529 * presentage) == 0 ? 840 : Math.round(22529 * presentage);
};

const printValue = (e) => {
  emit("color", e);
};

watchEffect(sliderValue, updateBackground);
</script>

<style lang="scss" scoped>
.Fliter {
  .sidebar-title {
    font-family: Sansation, sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.25rem;
  }
  .sidebar-body {
    ul {
      list-style: none;
      input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
        width: 23px;
        height: 23px;
        margin-right: 8px;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #eed8ea;
        outline: 0;
        accent-color: #eed8ea;
        &:checked {
          width: 23px;
          height: 23px;
          border: 2px solid #eed8ea;
          accent-color: #b35fa2;
        }
      }
      label {
        font-family: Sansation, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        cursor: pointer;
      }
    }
  }
  .range-slider {
    position: relative;
    text-align: center;
    position: relative;
    vertical-align: middle;
  }

  /* Style the range input */
  .range-slider input[type="range"] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    outline: none;
    opacity: 0.9;
    transition: opacity 0.2s;
    position: relative;
    background: linear-gradient(
      to right,
      #82cfd0 0%,
      #82cfd0 100%,
      #fff 50%,
      #fff 100%
    );
  }

  .start {
    -webkit-appearance: none;
    text-align: center;
    position: absolute;
    left: -25px;
    z-index: 1;
    appearance: none;
    width: 32px;
    height: 26px;
    background: white;
    border: 2px solid #9b59b6;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;
    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 14px;
      width: 1px;
      background: #e8e7e6;
      left: 14px;
      top: 6px;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 14px;
      width: 1px;
      background: #e8e7e6;
      left: 17px;
      top: 6px;
    }
  }

  .range-slider input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    text-align: center;
    appearance: none;
    width: 32px;
    height: 26px;
    background: white;
    border: 2px solid #9b59b6;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    z-index: 4 !important;
    box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;
  }

  .range-slider input[type="range"]::-moz-range-thumb {
    z-index: 2;
    width: 20px;
    height: 20px;
    background: white;
    border: 2px solid #9b59b6;
    // border-radius: 50%;
    cursor: pointer;
    z-index: 0;
  }

  /* Style the output text */
  .range-slider .range-values {
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: #4a4a4a;
    margin-top: 10px;
  }
  .amount {
    border: 1px solid #b35fa2;
    outline: 0;
    max-width: 60%;
    pointer-events: none;
    text-align: center;
    padding: 9px 20px;
    border-radius: 5px;
  }
  .reset-price {
    font-size: 1.3rem;
    line-height: 1.75rem;
    font-weight: 600;
    cursor: pointer;
    color: #b35fa2;
  }
}
</style>
