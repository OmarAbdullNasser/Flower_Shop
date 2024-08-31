<template>
  <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
    <div class="container d-flex flex-lg-column">
      <div class="social-block d-none d-lg-flex justify-content-between">
        <div class="social ms-4">
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-cart-plus" />
          </a>
        </div>

        <div class="social-2 me-4">
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>

          <a href="#" class="mx-3">
            <font-awesome-icon icon="fa-brands fa-tiktok" />
          </a>

          <a href="#">
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </a>
        </div>
      </div>

      <div class="navbar-brand mx-lg-auto mb-lg-4 text-center">
        <span class="navbar-logo">
          <a href="#">
            <img
              src="../assets/Flower-Logo.png"
              alt="Mobirise"
              style="height: 2.5rem"
            />
          </a>
        </span>
        <span class="navbar-caption-wrap"
          ><a class="text-info" href="#">Flower me</a></span
        >
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse text-center"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item mx-3">
            <a class="nav-link" href="">Homepage</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="">Shop</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="">Product</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="">Landscape</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="">Repair</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  transition: all 0.2s;

  .social-block {
    font-size: 35px;
    position: absolute;
    top: 2.5rem;
    width: 100%;
  }
  .navbar-logo {
    vertical-align: -4px;
    margin-right: 0.8rem;
  }
  .navbar-caption-wrap {
    vertical-align: -4px;
    font-size: 2rem;
    line-height: 1.1;
    a {
      transition: all 0.2s ease-in-out;
    }
  }
  .navbar-nav {
    font-size: 1.2rem;
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  nav {
    .navbar-caption-wrap {
      vertical-align: -4px;
      font-size: calc(1.35rem + (2 - 1.35) * ((100vw - 20rem) / (48 - 20)));
      line-height: calc(
        1.3 * (1.35rem + (2 - 1.35) * ((100vw - 20rem) / (48 - 20)))
      );
    }
  }
}
</style>
