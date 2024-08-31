<template>
  <div class="Products my-5">
    <Breadcrumb />
    <div class="container">
      <div class="row mx-0">
        <div class="col-12 col-lg-3 d-none d-lg-block">
          <fliter />
        </div>
        <div class="col-12 col-lg-9 row justify-content-evenly">
          <SearchBar class="col-12" />

          <Card
            v-for="i in 9"
            :key="i"
            class="mx-2 col-12 col-md-6 col-lg-4 p-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb.vue";
import Card from "@/components/Card.vue";
import Fliter from "@/components/Fliter.vue";
import SearchBar from "@/components/SearchBar.vue";

name: "Products";

export default {
  components: {
    Fliter,
    Breadcrumb,
    SearchBar,
    Card,
  },
};
</script>

<style lang="scss" scoped>
.Products {
}
</style>
