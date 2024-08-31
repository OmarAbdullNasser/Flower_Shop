<template>
  <div class="card mb-3">
    <img src="../assets/flower-img.jpg" class="card-img-top" alt="..." />
    <div class="card-body text-center p-0">
      <h5 class="card-title m-3">
        <a href="">Hi Lilies</a>
      </h5>
      <p class="card-text">
        EGP 1801
        <small>
          <span>3298</span>
        </small>
      </p>
      <a href="#" class="btn w-100">Add To cart </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  width: 18rem;
  cursor: pointer;
  img {
    opacity: 85%;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 100%;
    }
  }
  .card-title a {
    color: #000;
  }
  .card-text {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.125rem;
    small span {
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
      position: relative;
    }
    small span::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: #f00;
      transform: rotate(-15deg) translate(0, 50%);
    }
  }
  .btn {
    border: 0;
    font-size: 1rem;
    color: #fff;
    outline: none;
    border-radius: 0;
    background: #843e78 0% 0% no-repeat padding-box;
    &:hover {
      background-color: #000;
    }
  }
}
</style>
