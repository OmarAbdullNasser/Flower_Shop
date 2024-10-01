<template>
  <div>
    <button @click="toggleDirection">
      {{ isRTL ? "Switch to LTR" : "Switch to RTL" }}
    </button>
    <div class="content">
      <!-- Example content to demonstrate direction -->
      <p class="text-primary">This is some sample text for RTL/LTR testing.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    // Track whether RTL is active
    const isRTL = ref(false);

    // Function to load stylesheet
    const loadStylesheet = (href) => {
      let linkElement = document.getElementById("bootstrap-stylesheet");
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.id = "bootstrap-stylesheet";
        linkElement.rel = "stylesheet";
        document.head.appendChild(linkElement);
      }
      linkElement.herf = href;
    };

    // Function to toggle between RTL and LTR styles
    const toggleDirection = () => {
      isRTL.value = !isRTL.value;
      const stylesheetPath = isRTL.value ? "public/bootstrap.rtl.min.css" : "";
      loadStylesheet(stylesheetPath);

      // Set the `dir` attribute on the `body` element to ensure the correct direction
      document.body.setAttribute("dir", isRTL.value ? "rtl" : "ltr");
    };

    // Ensure that the default direction is set on load

    return {
      isRTL,
      toggleDirection,
    };
  },
};
</script>
