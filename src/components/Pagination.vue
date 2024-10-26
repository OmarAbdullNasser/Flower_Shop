<template>
  <nav aria-label="Page navigation">
    <ul class="pagination mb-0">
      <li

        class="page-item d-none d-lg-block"
        :class="{ disabled: props.meta.current_page === 1 }"
      >
        <button class="page-link" @click="goToPage(1)" aria-label="First">
          First
        </button>
      </li>
      <li
        class="page-item"
        :class="{ disabled: props.meta.current_page === 1 }"
      >
        <button
          class="page-link"
          @click="goToPage(props.meta.current_page - 1)"
          aria-label="Previous"
        >
          Previous
        </button>
      </li>

      <!-- Loop over page numbers -->
      <li
        v-for="page in pagesToShow"
        :key="page"
        :class="{ active: props.meta.current_page === page }"
        class="page-item"
      >
        <button class="page-link" @click="goToPage(page)">
          {{ page }}
        </button>
      </li>

      <li
        class="page-item"
        :class="{
          disabled: props.meta.current_page === props.meta.total_pages,
        }"
      >
        <button
          class="page-link"
          @click="goToPage(props.meta.current_page + 1)"
          aria-label="Next"
        >
          Next
        </button>
      </li>
      <li
        class="page-item d-none d-lg-block"
        :class="{
          disabled: props.meta.current_page === props.meta.total_pages,
        }"
      >
        <button
          class="page-link"
          @click="goToPage(props.meta.total_pages)"
          aria-label="Last"
        >
          Last
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";
const store = useStore();
// Props for the component
const props = defineProps({
  meta: {
    type: Object,
    required: true,
  },
});

// Emit event for page change
const emit = defineEmits(["pageChanged"]);
const currentPage = ref(0);

// Method to emit event to parent component
const goToPage = (page) => {
  if (page >= 1 && page <= props.meta.total_pages) {
    emit("pageChanged", page);
  }
  currentPage.value = page;
  // console.log("you cliked with page number " + currentPage.value);
};

// Computed property to calculate pages to show
const pagesToShow = computed(() => {
  const range = [];
  const start = Math.max(1, props.meta.current_page - 2);
  const end = Math.min(props.meta.total_pages, props.meta.current_page + 2);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
});

// watchEffect(() => {});
</script>

<style scoped>
.page-item {
  cursor: pointer;
}
.paginate {
  padding: 32px 64px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 64px;
  border: 4px solid rgb(255 222 210);
}
</style>
