<template>
  <div class="Products my-3">
    <Breadcrumb />
    <div class="container">
      <div class="row mx-0">
        <div class="col-12 col-lg-3 d-none d-lg-block">
          <fliter @color="handleColorChange" />
        </div>
        <!-- Loader -->

        <div class="col-12 col-lg-9 row justify-content-evenly">
          <SearchBar
            class="col-12"
            :initialSort="sortOption"
            @sortChanged="handleSortChange"
          />

          <div v-if="loading" class="col-12">
            <div class="d-flex justify-content-center">
              <div class="loader text-primary" role="status"></div>
            </div>
          </div>

          <Card
            v-else
            v-for="flower in paginatedItems"
            :key="flower.slug"
            :flower="flower"
            class="mx-2 col-12 col-md-6 col-lg-4 p-0"
          />
          <div class="mt-3 d-flex align-items-center justify-content-center">
            <Pagination :meta="meta" @pageChanged="handlePageChange" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/breadcrumb.vue";
import Card from "@/components/Card.vue";
import Fliter from "@/components/Fliter.vue";
import Pagination from "@/components/Pagination.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useStore } from "vuex";

import { ref, onMounted, computed, watchEffect } from "vue";

name: "Products";
const store = useStore();

let flowers = computed(() => store.getters.allProducts);
const meta = computed(() => store.getters.Meta);
const sortOption = ref("name-asc");
const loading = ref(true);
const ColorOfFlower = ref(null);
const SearchObj = ref({});

const handleColorChange = (color) => {
  ColorOfFlower.value = color;
  SearchObj[color].value = color;
};

// Computed property for items displayed on the current page

const paginatedItems = computed(() => {
  const start = (meta.value.currentPage - 1) * meta.value.itemsPerPage;
  const end = start + meta.value.itemsPerPage;

  if (ColorOfFlower.value?.target.checked) {
    // Return the filtered result
    return flowers.value
      .filter((flower) => flower.color == ColorOfFlower.value?.target.value)
      .slice(start, end); // Apply pagination after filtering
  } else {
    return flowers.value.slice(start, end); // Apply pagination without filterin
  }
});

const checkLoader = () => {
  if (flowers.value.length > 0) {
    loading.value = false;
  }
};

// Handle page change

const handlePageChange = (page) => {
  meta.value.currentPage = page;
};

// Handle the sort change event emitted from FilterBar
const handleSortChange = (newSortOption) => {
  sortOption.value = newSortOption;
};

// Sort the items based on the selected option
const sortItems = () => {
  if (sortOption.value === "name-asc") {
    paginatedItems.value.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === "name-desc") {
    paginatedItems.value.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOption.value === "price-asc") {
    paginatedItems.value.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === "price-desc") {
    paginatedItems.value.sort((a, b) => b.price - a.price);
  }
};

watchEffect(() => {
  sortItems();
  checkLoader();
  console.log(SearchObj.value);
});

onMounted(() => {
  store.dispatch("fetchProducts");
});
</script>

<style lang="scss" scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 60px;
  aspect-ratio: 1;
  border: 15px solid #ddd;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
}
.loader::before {
  content: "";
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 15px solid #514b82;
  animation: l18 2s infinite linear;
}
@keyframes l18 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
