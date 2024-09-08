<template>
  <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg mb-3">
    <div class="container">
      <div class="paret mx-auto d-flex">
        <div class="navbar-brand text-center">
          <span class="navbar-logo">
            <a href="#">
              <img
                src="../assets/logo_brand.png"
                alt="Mobirise"
                style="height: 5rem"
              />
            </a>
          </span>
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
          <div class="centerNavbar">
            <ul class="navbar-nav mx-auto text-center align-items-center">
              <li class="nav-item mx-3">
                <router-link :to="{ name: 'home' }" class="nav-link"
                  >Home</router-link
                >
              </li>
              <li class="nav-item mx-3">
                <router-link :to="{ name: 'Products' }" class="nav-link"
                  >Shop</router-link
                >
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

          <div class="leftNavbar">
            <ul class="navbar-nav mx-auto text-center align-items-center">
              <li class="nav-item mx-3">
                <a href="#" class="cart">
                  <font-awesome-icon icon="fa-solid fa-cart-plus " />
                </a>
              </li>

              <li class="lang nav-item dropdown d-flex align-items-center ms-2">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <font-awesome-icon icon="fa-solid fa-globe" />
                  EN
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">AR</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
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
  margin: 12px 0;
  #navbarTogglerDemo02 {
    svg {
      font-size: 24px;
      color: var(--main-color);
    }
    .centerNavbar {
      margin-left: 48px;
    }
    .leftNavbar {
      margin-left: 48px;
    }
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
