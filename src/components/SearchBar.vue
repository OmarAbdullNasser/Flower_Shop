<template>
  <div class="searchbar px-0">
    <div class="row align-items-center justify-content-evenly">
      <div
        class="col-12 col-lg-6 col-md-6 order-2 order-md-1 d-flex align-items-center justify-content-between"
      >
        <div class="icons">
          <font-awesome-icon icon="fa-solid fa-table-cells" class="active" />
          <!-- <font-awesome-icon icon="fa-solid fa-list-ul" /> -->
        </div>
        <!-- <div class="pages pt-3">
          <p>Showing {{ meta.currentPage }} - {{ meta.totalPages }}</p>
        </div> -->
      </div>

      <div class="col-12 col-lg-6 col-md-6 order-1 order-md-2">
        <div class="FliterBar d-flex align-items-center">
          <label for="products-sort">
            <span>Sort by:</span>
          </label>
          <select
            name="sortby"
            v-model="selectedOption"
            id="sortBy"
            @change="updateSort"
          >
            <!-- <option value="1">Recommended</option> -->
            <option value="low_price">Price (Low to High)</option>
            <option value="high_price">Price (High to Low)</option>
            <option value="newest">Latest Arrival</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props for initial sort option
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  initialSort: {
    type: String,
    required: true,
  },
});

// Emit event for sorting
const emit = defineEmits(["sortChanged"]);

// Local state for the selected option
const selectedOption = ref(props.initialSort);

// Emit the selected sort option to the parent component
const updateSort = async (e) => {
  // emit("sortChanged", selectedOption.value);
  let sort = e.target.value;
  await store.dispatch("fetchFliter", {
    catid: undefined,
    occasionid: undefined,
    sort: sort,
  });
};

const meta = computed(() => store.getters.Meta);
// const handlePageChange = (page) => {
//   meta.value.currentPage = page;
// };
</script>

<style lang="scss" scoped>
.searchbar {
  margin-bottom: 1.87rem;
  .icons {
    margin-right: 60px;
    svg {
      font-size: 20px;
      margin-top: 6px;
      color: #b6b6b6;
      display: inline-block;
      text-align: center;
      margin-right: 10px;
      cursor: pointer;
    }

    .active {
      color: #ad559c;
    }
  }
  .pages {
    p {
      color: #777;
      font-size: 14px;
      text-transform: capitalize;
    }
  }
  .FliterBar {
    label {
      padding-right: 0.9375rem;
    }
    label span:lang(ar) {
      background: red;
    }
    select {
      font-family: Sansation, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75rem;
      border: 1px solid #eed8ea;
      border-radius: 3px;
      padding: 10px;
      // text-align: left;
      width: 75%;

      &:focus {
        border: 2px solid #ad559c;
        background-color: #fff;
      }
    }
  }
}
@media screen and (max-width: 991px) {
  .searchbar {
    .FliterBar {
      label {
        white-space: nowrap;
        padding-right: 0.9375rem;
      }
      select {
        width: 100%;
      }
    }
  }
}
</style>
