<template>
  <div class="Fliter">
    <div class="container">
      <div class="Text">
        <h2 class="title display2 mb-2">
          <strong>Gallery</strong>
          <strong> With Tabs</strong>
        </h2>
      </div>

      <div class="Imgs">
        <div class="Img-wrapper">
          <!--Fliter-->
          <div class="gallery-filter">
            <ul class="list">
              <li
                class="me-1"
                :class="{ active: selectedCategory === 'all' }"
                @click="selectCategory('all')"
              >
                <span href="#" class="Btn display7"> All </span>
              </li>

              <li
                v-for="(item, index) in Data"
                :key="index"
                :class="{ active: selectedCategory === item.title }"
                @click="selectCategory(item.title)"
              >
                <span class="Btn display7">{{ item.title }}</span>
              </li>
            </ul>
          </div>

          <!-- Gallery -->
          <div class="gallery-row">
            <div class="row">
              <div
                :class="[
                  'p-3',
                  filteredImages.length > 1 ? 'col-lg-4' : 'col-12',
                  'd-flex',
                  'flex-wrap',
                ]"
                v-for="item in filteredImages"
                :key="item.title"
              >
                <div
                  class="item"
                  v-for="(img, imgIndex) in item.gallery"
                  :key="imgIndex"
                >
                  <img :src="img" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
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
import { inject, ref, computed } from "vue";

const Data = inject("OccassionData");
// Reactive state for the selected category
const selectedCategory = ref("all");

// Method to set the selected category
const selectCategory = (category) => {
  selectedCategory.value = category;
};

// Computed property to filter images based on the selected category
const filteredImages = computed(() => {
  if (selectedCategory.value === "all") {
    // Return all images if "All" is selected
    return Data.value;
  } else {
    // Filter images based on the selected category
    return Data.value.filter((item) => item.title === selectedCategory.value);
  }
});
</script>

<style lang="scss" scoped>
.Fliter {
  padding-top: 90px;
  padding-bottom: 90px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #ffffff;
  .Text {
    h3 {
      color: #9e9e9e;
      margin-bottom: 0.4375rem;
    }
    .title {
      & strong:first-child {
        color: #000;
      }
    }
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
            content: "+";
            border-radius: 100px;
            background: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
            padding-bottom: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
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
