<template>
  <div class="FristStage">
    <div class="BtnRow d-flex my-5">
      <button
        class="btn p-4 BtnSomeOne d-flex flex-column justify-content-center align-items-center"
        @click="ToggleSender('ToSomeOne')"
      >
        <font-awesome-icon
          icon="fa-solid fa-check"
          class="my-3"
          v-if="SenderBox === 'ToSomeOne'"
        />
        <font-awesome-icon :icon="['far', 'circle']" v-else class="my-3" />
        <p class="mb-0">Ship to someone</p>
      </button>

      <button class="btn BtnMe" @click="ToggleSender('ToMe')">
        <font-awesome-icon
          icon="fa-solid fa-check"
          class="my-3"
          v-if="SenderBox === 'ToMe'"
        />
        <font-awesome-icon :icon="['far', 'circle']" v-else class="my-3" />
        <p class="mb-0">Ship to me</p>
      </button>
    </div>
    <div class="SenderArea">
      <ShipToSomeone v-if="SenderBox === 'ToSomeOne'" />
      <ShipToMe v-else />
    </div>
    <div class="NextStage my-3 d-flex flex-column">
      <span class="my-3">Any Extra Notes </span>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="Add your needs.."
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import ShipToMe from "@/components/shipToMe.vue";
import ShipToSomeone from "@/components/ShipToSomeone.vue";
import { ref } from "vue";
const SenderBox = ref("ToSomeOne");
const ToggleSender = (to) => {
  SenderBox.value = to;
  console.log(SenderBox.value);
};
</script>

<style lang="scss" scoped>
.FristStage {
  .BtnRow {
    button {
      font-size: 18px;
      font-weight: 700;
      width: 210px;
      text-align: center;
      border: 2px solid #400a3f;
      background: #400a3f;
      border-radius: 4px;
      margin: 0 16px 0 0;
      transition: 0.1s all ease-in-out;
      cursor: pointer;
      color: #fff;
      height: 120px;
    }
  }
  .NextStage {
    textarea {
      resize: none;
      border-radius: 15px;
      padding: 15px;
    }
  }
}
@media screen and (max-width: 991.9px) {
  .FristStage {
    .NextStage {
      button {
        width: 100%;
      }
    }
  }
}
</style>
