<template>
  <div class="Products my-3">
    <Breadcrumb />
    <div class="container">
      <div class="row mx-0">
        <div class="col-12 col-lg-3 d-none d-lg-block">
          <fliter />
        </div>
        <!-- Loader -->

        <!-- <div v-if="loading" class="col-12">
          <div class="d-flex justify-content-center">
            <div class="loader text-primary" role="status"></div>
          </div>
        </div> -->

        <div class="col-12 col-lg-9 row justify-content-evenly">
          <SearchBar
            class="col-12"
            :initialSort="sortOption"
            @sortChanged="handleSortChange"
          />

          <Card
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
import loader from "sass-loader";

import { ref, onMounted, computed, watch, watchEffect } from "vue";

name: "Products";

const flowers = ref([]);
const sortOption = ref("name-asc");
const loading = ref(true);

const meta = ref({
  totalItems: "",
  itemsPerPage: 9,
  currentPage: "",
  totalPages: "",
});

// Computed property for items displayed on the current page
const paginatedItems = computed(() => {
  const start = (meta.value.currentPage - 1) * meta.value.itemsPerPage;
  const end = start + meta.value.itemsPerPage;

  return flowers.value.slice(start, end);
});

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

const fetchFlowers = async () => {
  loading.value = true;
  try {
    // Replace this URL with your actual endpoint or local JSON file path

    const FlowerResponse = await fetch("http://localhost:3000/items");
    flowers.value = await FlowerResponse.json();

    //Pagination
    const MetaResponse = await fetch("http://localhost:3000/meta");
    meta.value = await MetaResponse.json();
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
  } finally {
    loading.value = false; // Hide loader once data is fetched
  }
};
watchEffect(() => {
  sortItems();
  console.log(loading.value);
});

onMounted(() => {
  fetchFlowers();
});
</script>

<style scoped></style>
