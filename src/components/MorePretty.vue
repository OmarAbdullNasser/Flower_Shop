<template>
  <div class="MorePretty">
    <div class="container">
      <h4>Make Your Order Prettier</h4>

      <div class="Imgs">
        <div class="Img-wrapper">
          <!--Fliter-->

          <!-- Gallery -->
          <div class="gallery-row">
            <div class="row">
              <div
                class="col-12 col-lg-4 p-3"
                v-for="item in props.Data"
                :key="item.id"
                @click="addToCart(item)"
              >
                <div class="item">
                  <img :src="item.image" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7">
                    {{ item.price_after_sale }} EG</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Data: Array,
});
import { useStore } from "vuex";
const store = useStore();
const addToCart = async (item) => {
  await store.dispatch("Cart/addToCart", {
    product_id: item.id,
    product_name: item.title,
    quantity: 1, // Make sure quantity is a reactive property if needed
    price: item.price,
    product_image: item.image,
  });
};
const selectedCategory = ref("all");
const selectCategory = (category) => {
  selectedCategory.value = category;
};
</script>

<style lang="scss" scoped>
.MorePretty {
  .container {
    padding-top: 1rem;
    border-top: 1px solid gray;
  }
  .Imgs {
    .gallery-filter {
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: left;
      padding-right: 0;
      padding-left: 0;
      .list {
        display: inline-block;
        width: 100%;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        text-align: left;
        li {
          display: inline-block;
          padding: 5px 0;
          transition: all 0.3s ease-out;
          &.active {
            // Target active li elements
            .Btn::after {
              border-color: #0c5b47; // Apply your styles here
            }
          }
          .Btn {
            position: relative;
            padding: 0.5rem 1rem 0.6rem;
            margin: 0;
            background-color: transparent;
            border-width: 0;
            color: #0c5b47;

            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              border: 1px solid transparent;
              border-radius: 100px;
              opacity: 0.5;
              &.active {
                border-color: #0c5b47 !important;
              }
            }
            &:hover::after {
              border-color: #0c5b47;
            }
          }
        }
      }
    }

    .gallery-row {
      position: relative;

      .item {
        position: relative;
        &:hover {
          &::before {
            opacity: 0.4; // Change opacity on hover
          }

          img,
          span {
            opacity: 1; // Full opacity on hover
          }

          .title {
            display: block; // Display title on hover
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          -webkit-transition: 0.2s opacity ease-in-out;
          transition: 0.2s opacity ease-in-out;
          background: linear-gradient(180deg, #0c5b47, #338873);
        }
        .icon-focus {
          position: absolute;
          font-size: 2rem !important;
          width: 50px;
          height: 50px;
          top: calc(50% - 25px);
          left: calc(50% - 25px);
          transition: 0.2s opacity ease-in-out;
          z-index: 5;
          color: #fff;
          opacity: 0;

          &::before {
            font-family: "Font Awesome 6 Free";
            font-weight: 900;
            content: "\f217";
            border-radius: 100px;
            padding-top: 0.5rem;
            background: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
            padding-bottom: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
          }
        }
        .title {
          position: absolute;
          text-align: left;
          display: none;
          width: 100%;
          bottom: 0;
          right: 0;
          padding: 1rem;
          font-weight: bold;
          background: transparent;
          transition: all 0.5s ease;
        }
      }
    }
  }
}
</style>
