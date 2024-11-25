<template>
  <div class="ThrideStage">
    <div class="conatiner">
      <div class="row">
        <div class="col-12">
          <PaymentFormVue />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import PaymentFormVue from "./PaymentForm.vue";

const store = useStore();
const PaymentState = computed(() => store.getters.payment);
const toggleMethod = (method) => {
  store.commit("SET_PAYMENT", method);
};
onMounted(() => console.log(PaymentState.value));
</script>

<style lang="scss" scoped>
.ThrideStage {
}
</style>
