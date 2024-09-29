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
              <div
                class="custom-control custom-checkbox"
                v-for="cat in Categories"
                :key="cat.id"
              >
                <input
                  type="checkbox"
                  id="isNotExtraProducts"
                  class="custom-control-input checkmark"
                  :value="cat.title"
                  @click="fetchFliter(cat.id, undefined)"
                />
                <label for="vases" class="custom-control-label">
                  {{ cat.title }}
                </label>
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
                <div class="wrapper">
                  <div class="slider">
                    <div class="progress"></div>
                  </div>
                  <div class="range-input">
                    <input
                      type="range"
                      class="range-min"
                      min="0"
                      max="10000"
                      value="2500"
                      @input="getRang"
                    />

                    <input
                      type="range"
                      class="range-max"
                      min="0"
                      max="10000"
                      value="7500"
                      @input="getRang"
                    />
                  </div>
                </div>

                <div
                  class="range-values d-flex justify-content-center align-items-center"
                >
                  <h5 class="amount">
                    <span id="minValue">{{ range1 }}</span> -
                    <span id="maxValue">{{ range2 }}</span>
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
              <div
                class="custom-control custom-checkbox mb-2"
                v-for="occasion in Occasions"
                :key="occasion.id"
              >
                <input
                  type="checkbox"
                  id="Anniversary"
                  :value="occasion.title"
                  class="custom-control-input checkmark"
                  @click="fetchFliter(undefined, occasion.id)"
                />
                <label for="Anniversary" class="custom-control-label">
                  {{ occasion.title }}
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
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="White"
                  class="custom-control-input checkmark"
                  value="Pink"
                  @change="HandleClick"
                />
                <label for="White" class="custom-control-label"> Pink </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { watch, onMounted, ref, defineEmits, computed, watchEffect } from "vue";
import { useStore } from "vuex";
const store = useStore();
const emit = defineEmits(["value"]);

//Fliter paramter
const Categories = ref([]);
const Occasions = ref([]);

//Price paramter
const range1 = ref(2500);
const range2 = ref(7500);
const getRang = () => {
  const rangeInput = document.querySelectorAll(".range-input input");
  const range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap && priceGap <= maxVal) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;

          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
      // range1.value = minVal;
      // range2.value = maxVal;
    });
  });
};
const HandleClick = (e) => {
  if (e.target.checked) {
    emit("colorname", e.target.value);
  } else {
    emit("removecolor", e.target.value);
  }
};

const fetchFliter = async (catid = "", occasionid = "") => {
  await store.dispatch("fetchFliter", { catid, occasionid });
};

const getAllCategories = async () => {
  const CategoriesResonse = await fetch(
    `http://flowerest.e1s.me/api/categories`
  );
  const jsonResponse = await CategoriesResonse.json();
  Categories.value = jsonResponse.data;
};
const getAllOccasions = async () => {
  const OccasionsResonse = await fetch(`http://flowerest.e1s.me/api/occasions`);
  const jsonResponse = await OccasionsResonse.json();
  Occasions.value = jsonResponse.data;
};
onMounted(() => {
  getAllCategories();
  getAllOccasions();
});

watchEffect(() => getRang);
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

.wrapper {
  background: #fff;
  border-radius: 10px;
  padding: 20px 25px 40px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
}
.slider {
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress {
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #17a2b8;
}

.range-input {
  position: relative;
}

.range-input input {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #17a2b8;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #17a2b8;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
</style>
