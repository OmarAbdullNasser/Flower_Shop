<template>
  <div class="ContentUs">
    <ContectForm />
  </div>
</template>

<script setup>
import ContectForm from "@/components/ContectForm.vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { onMounted } from "vue";
name: "Conenctus";
const route = useRoute();
onMounted(() => {
  useHead({
    title: route.params.lang === "en" ? "Contact Us" : "تواصل معنا",
  });
});
</script>

<style></style>
