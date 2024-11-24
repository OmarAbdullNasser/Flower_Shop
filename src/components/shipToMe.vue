<template>
  <div class="ShipToSomeOne">
    <div class="container">
      <label>Choose delivery date <span class="freelogo">Free</span></label>
      <div class="opations">
        <p class="mb-0">
          <input
            type="radio"
            name="Date"
            id="SameDay"
            @click="isDateVisible = false"
          />
          <label for="SameDay">Same day delivery ( Last order at 6 PM)</label>
        </p>
        <p class="mb-0">
          <input
            type="radio"
            name="Date"
            id="specificDate"
            @click="isDateVisible = true"
          />
          <label for="specificDate">Choose specific date</label>
        </p>
        <div class="date mb-3" ref="date" v-if="isDateVisible">
          <input type="date" ref="dateInput" />
        </div>
      </div>

      <label for="">Payment Method </label>
      <div class="paymentMethods">
        <p class="mb-0">
          <input type="radio" name="Payment" id="CreditCard" />
          <label for="CreditCard">Instapay</label>
        </p>

        <p class="mb-0">
          <input type="radio" name="Payment" id="CashHome" />
          <label for="CashHome">Cash Collect From Home</label>
        </p>

        <p class="mb-0">
          <input type="radio" name="Payment" id="CreditCardHome" />
          <label for="CreditCardHome">Vodfone Cash</label>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";

const dateInput = ref(null);
const date = ref(null);
const isDateVisible = ref(false);

// watchEffect(() => console.log(specificDate?.value.checked));
onMounted(() => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  if (dateInput.value) {
    dateInput.value.value = formattedDate;
  }
});
</script>

<style lang="scss" scoped>
.ShipToSomeOne {
  .freelogo {
    font-size: 12px;
    font-weight: 900;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    letter-spacing: 0.4px;
    background: #927091;
    margin-left: 5px;
  }
  .opations,
  .paymentMethods {
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
    .date {
      width: fit-content;
      border: 1px solid #927091;
      input {
        padding: 16px;
      }
    }
  }
}
</style>
