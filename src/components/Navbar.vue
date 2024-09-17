<template>
  <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg mb-4">
    <div class="container">
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
        <ul class="navbar-nav mx-auto text-center align-items-center">
          <li class="nav-item mx-3">
            <router-link
              :to="{
                name: 'home',
                params: { lang: route.params.lang || 'en' },
              }"
              class="nav-link"
            >
              <span v-if="$route.params.lang === 'ar'">الرئيسية</span>
              <span v-else>Home</span>
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              :to="{
                name: 'Products',
                params: { lang: route.params.lang || 'en' },
              }"
              class="nav-link"
            >
              <span v-if="$route.params.lang === 'ar'">المتجر</span>
              <span v-else>Shop</span>
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              :to="{
                name: 'Landscape',
                params: { lang: route.params.lang || 'en' },
              }"
              class="nav-link"
            >
              <span v-if="$route.params.lang === 'ar'">الاراضي الواسعة</span>
              <span v-else>Landscape</span>
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              :to="{
                name: 'Events',
                params: { lang: route.params.lang || 'en' },
              }"
              class="nav-link"
            >
              <span v-if="$route.params.lang === 'ar'">مناسبات</span>
              <span v-else>Events</span>
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              :to="{
                name: 'Repair',
                params: { lang: route.params.lang || 'en' },
              }"
              class="nav-link"
            >
              <span v-if="$route.params.lang === 'ar'">اصلاح</span>
              <span v-else>Repair</span>
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav text-center align-items-center">
          <li class="nav-item mx-3">
            <router-link
              :to="{
                name: 'Cart',
                params: { lang: route.params.lang || 'en' },
              }"
              class="cart d-flex align-items-center"
            >
              <font-awesome-icon icon="fa-solid fa-cart-plus" />
              <span class="badge text-bg-secondary ms-2">{{
                $store.state.cart.length
              }}</span>
            </router-link>
            
          </li>

          <li class="lang nav-item dropdown d-flex align-items-center ms-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <font-awesome-icon icon="fa-solid fa-globe" class="me-2" />
              <span v-if="$route.params.lang === 'ar'">AR</span>
              <span v-else>EN</span>
            </a>
            <ul class="dropdown-menu">
              <router-link
                v-if="$route.params.lang === 'en'"
                :to="{ name: route.name, params: { lang: 'ar' } }"
                class="nav-link"
                >AR</router-link
              >
              <router-link
                v-else
                :to="{ name: route.name, params: { lang: 'en' } }"
                class="nav-link"
                >EN</router-link
              >
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div class="col-12 mx-md-auto justify-content-between"></div> -->
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
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
