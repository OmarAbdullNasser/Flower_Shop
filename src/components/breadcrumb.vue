<template>
  <div class="breadcrumb-area">
    <div class="container breadcrumb-wrap">
      <nav aria-label="breadcrumb">
        <h1 class="breadcrumb-title">
          The Best Gifts To Pair With Your Bouquet
        </h1>
        <ul class="breadcrumb mt-3">
          <li class="breadcrumb-item">
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-house" />
              Home</a
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">vases</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.breadcrumb-area {
  color: #323232;
  font-family: Montserrat-Arabic, sans-serif;
  font-weight: 300;
  .breadcrumb-wrap {
    padding-top: 20px;
    padding-bottom: 20px;

    .breadcrumb-title {
      font-size: 26px;
      font-weight: 500;
    }

    .breadcrumb-item {
      font-family: Montserrat-Arabic, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.125rem;
      line-height: 1;
      a {
        outline: 0;
        text-decoration: none !important;
        color: #323232;
        &:hover {
          color: #843e78;
        }
      }
      &.active {
        color: #843e78;
      }
      &::before {
        float: none;
      }
    }
  }
}
</style>
