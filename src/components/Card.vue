<template>
  <div class="card mb-3">
    <router-link
      :to="{
        name: 'Product',
        params: { slug: props.flower.slug },
      }"
    >
      <img :src="props.flower.image" class="card-img-top" alt="..." />
    </router-link>
    <div class="card-body text-center p-0">
      <h5 class="card-title m-3 title">
        <a href="">{{ props.flower.title }}</a>
      </h5>
      <p class="card-text">
        <span class="mx-1" v-if="props.flower.price_after_sale">
          EGP {{ props.flower.price_after_sale }}
          <small>
            <span> {{ props.flower.price }}</span>
          </small>
        </span>

        <span class="mx-1" v-else> EGP {{ props.flower.price }} </span>
      </p>
      <a class="btn w-100" @click="addToCart(props.flower)">Add To cart </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  flower: Object,
  require: true,
});

const addToCart = async (item) => {
  console.log(item);

  await store.dispatch("Cart/addToCart", {
    product_id: item.id,
    product_name: item.title,
    quantity: 1, // Make sure quantity is a reactive property if needed
    price: item.price,
  });
};
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  width: 18rem;
  cursor: pointer;
  height: fit-content;

  img {
    opacity: 85%;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 100%;
    }
  }
  .card-title a {
    color: #784b77;
  }
  .card-text {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.125rem;
    color: #968896;
    small span {
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
      position: relative;
    }
    small span::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: #f00;
      transform: rotate(-15deg) translate(0, 50%);
    }
  }
  .btn {
    border: 0;
    font-size: 1rem;
    color: #784b77;
    outline: none;
    border-radius: 0;
    background: #ccaccc 0% 0% no-repeat padding-box;
    &:hover {
      background-color: #784b77;
      color: #fcf5fc;
    }
  }
}
</style>
