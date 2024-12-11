<template>
  <div class="ShipToSomeOne">
    <div class="container">
      <label>Recipient’s address</label>
      <div class="opations">
        <p class="mb-0">
          <input
            type="radio"
            name="Know"
            id="Know"
            @click="HasAdress"
            :checked="Know === 1"
          />
          <label for="Know">{{ $t("know") }}</label>
        </p>
        <p class="mb-0 d-flex align-items-center">
          <input
            type="radio"
            name="Know"
            id="NotKnow"
            @click="NoAdress"
            :checked="Know === 0"
          />
          <label for="NotKnow">{{ $t("NotKnow") }}</label>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, onUpdated, watchEffect, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const Know = ref(1);

const NoAdress = () => {
  store.commit("SET_ADDRESS", "NoAddress");
  store.commit("SET_SENDER", { know_receipent_address: 0 });
};
const HasAdress = () => {
  store.commit("SET_ADDRESS", "HasAdress");
  store.commit("SET_SENDER", { know_receipent_address: 1 });
};
const SetPaymentMethod = () => {
  store.commit("SET_PAYMENT", "Shiptosome");
};
const senderObj = computed(() => store.getters.senderObj);

onMounted(() => {
  SetPaymentMethod();
  // store.commit("CLEAR_SENDER");
  store.commit("SET_SENDER", { ship_to_me: 0 });
  store.commit("SET_SENDER", { know_receipent_address: Know.value });
});
</script>

<style lang="scss" scoped>
.ShipToSomeOne {
  .opations {
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
}
</style>
