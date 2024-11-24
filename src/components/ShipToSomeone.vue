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
            checked
          />
          <label for="Know">I know the recipient address</label>
        </p>
        <p class="mb-0">
          <input type="radio" name="Know" id="NotKnow" @click="NoAdress" />
          <label for="NotKnow"
            >I don't know the recipient address(Shipping fees will be
            applied)</label
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const addresState = computed(() => store.getters.address);
const NoAdress = () => {
  store.commit("SET_ADDRESS", "NoAddress");
};
const HasAdress = () => {
  store.commit("SET_ADDRESS", "HasAdress");
};
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
