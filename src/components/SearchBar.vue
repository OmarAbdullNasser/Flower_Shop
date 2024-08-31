<template>
  <div class="searchbar px-0">
    <div class="row align-items-center justify-content-evenly">
      <div
        class="col-12 col-lg-6 col-md-6 order-2 order-md-1 d-flex align-items-center justify-content-between"
      >
        <div class="icons">
          <font-awesome-icon icon="fa-solid fa-table-cells" class="active" />
          <font-awesome-icon icon="fa-solid fa-list-ul" />
        </div>
        <div class="pages pt-3">
          <p>Showing 1 - 3</p>
        </div>
      </div>

      <div class="col-12 col-lg-6 col-md-6 order-1 order-md-2">
        <div class="FliterBar d-flex align-items-center">
          <label for="products-sort">
            <span>Sort by:</span>
          </label>
          <select name="sortby" id="products-sort">
            <option value="1">Recommended</option>
            <option value="2" class="">Name (A - Z)</option>
            <option value="3">Name (Z - A)</option>
            <option value="4">Price (Low to High)</option>
            <option value="5">Price (High to Low)</option>
            <option value="6">Latest Arrival</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    select {
      font-family: Sansation, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75rem;
      border: 1px solid #eed8ea;
      border-radius: 3px;
      padding: 10px;
      text-align: left;
      width: 75%;
      text-align: left;
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
    }
  }
}
</style>
