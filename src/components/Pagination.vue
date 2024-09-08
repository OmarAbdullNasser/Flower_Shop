<template>
  <nav aria-label="Page navigation">
    <ul class="pagination mb-0">
      <li class="page-item" :class="{ disabled: props.meta.currentPage === 1 }">
        <button class="page-link" @click="goToPage(1)" aria-label="First">
          First
        </button>
      </li>
      <li class="page-item" :class="{ disabled: props.meta.currentPage === 1 }">
        <button
          class="page-link"
          @click="goToPage(props.meta.currentPage - 1)"
          aria-label="Previous"
        >
          Previous
        </button>
      </li>

      <!-- Loop over page numbers -->
      <li
        v-for="page in pagesToShow"
        :key="page"
        :class="{ active: props.meta.currentPage === page }"
        class="page-item"
      >
        <button class="page-link" @click="goToPage(page)">
          {{ page }}
        </button>
      </li>

      <li
        class="page-item"
        :class="{ disabled: props.meta.currentPage === props.meta.totalPages }"
      >
        <button
          class="page-link"
          @click="goToPage(props.meta.currentPage + 1)"
          aria-label="Next"
        >
          Next
        </button>
      </li>
      <li
        class="page-item"
        :class="{ disabled: props.meta.currentPage === props.meta.totalPages }"
      >
        <button
          class="page-link"
          @click="goToPage(props.meta.totalPages)"
          aria-label="Last"
        >
          Last
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";

// Props for the component
const props = defineProps({
  meta: {
    type: Object,
    required: true,
  },
});

// Emit event for page change
const emit = defineEmits(["pageChanged"]);

// Method to emit event to parent component
const goToPage = (page) => {
  if (page >= 1 && page <= props.meta.totalPages) {
    emit("pageChanged", page);
  }
};

// Computed property to calculate pages to show
const pagesToShow = computed(() => {
  const range = [];
  const start = Math.max(1, props.meta.currentPage - 2);
  const end = Math.min(props.meta.totalPages, props.meta.currentPage + 2);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
});
</script>

<style scoped>
.page-item {
  cursor: pointer;
}
</style>
