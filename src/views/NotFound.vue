<!-- src/views/NotFound.vue -->
<template>
  <div class="NotFound p-5">
    <div class="container text-center mt-5">
      <h1 class="my-4">404 - Page Not Found</h1>
      <p class="my-4">The page you are looking for does not exist.</p>
      <router-link to="/">Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
/* Add some styles if needed */
.NotFound {
  height: 300px;

  a {
    background-color: #400a3f;
    padding: 15px;
    border-radius: 15px;
    margin-top: 30px;
    color: #fff;
  }
}
</style>
