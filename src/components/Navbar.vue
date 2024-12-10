<template>
  <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
    <div class="container">
      <div class="navbar-brand text-center">
        <span class="navbar-logo">
          <router-link :to="{ name: 'home' }">
            <img :src="Logo" alt="Mobirise" style="height: 5rem" />
          </router-link>
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
          <li
            class="nav-item mx-xl-3"
            v-for="nav in NavbarData"
            :key="nav.id"
            :class="{ dropdown: nav.children.length > 0 }"
          >
            <router-link
              :to="{
                path: `/${route.params.lang}${nav.url}`,
              }"
              class="nav-link"
              :class="{ 'dropdown-toggle': nav.children.length > 0 }"
              v-if="nav.children.length == 0"
            >
              <span>{{ nav.title }}</span>
            </router-link>

            <a
              v-else
              class="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{{ nav.title }}</span>
            </a>

            <ul class="dropdown-menu subMenu" v-if="nav.children.length > 0">
              <li
                class="nav-item"
                v-for="child in nav.children"
                :key="child.id"
              >
                <router-link
                  :to="`/${route.params.lang}${child.url}`"
                  class="dropdown-item"
                >
                  <span>{{ child.title }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav text-center align-items-center">
          <li class="nav-item mx-3">
            <router-link
              :to="{ path: `/${route.params.lang}/Cart` }"
              class="cart d-flex align-items-center"
            >
              <font-awesome-icon icon="fa-solid fa-cart-plus" />
              <span class="badge text-bg-secondary ms-2">{{
                TotalProduct
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
              <font-awesome-icon icon="fa-solid fa-globe" class="mx-2" />
              <span v-if="route.params.lang === 'ar'">AR</span>
              <span v-else>EN</span>
            </a>

            <ul class="dropdown-menu text-center">
              <router-link
                v-if="route.params.lang === 'en'"
                :to="{
                  name: route.name,
                }"
                @click="toggleDirection"
                class="nav-link"
                >AR</router-link
              >
              <router-link
                v-else
                :to="{
                  name: route.name,
                }"
                class="nav-link"
                @click="toggleDirection"
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
import { computed, inject, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const url = inject("url");
const store = useStore();
const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const Links = computed(() => store.getters.SiteLinks);
const Logo = ref(null);
const icon = ref(null);
// Logo.value = Links.value[16].setting_value;
// const Logo = ref("");
// const getLogo = () => {
//   Logo.value = Links.value[16];
// };
const getLogo = () => {};
const NavbarData = computed(() => store.getters.menu);
const TotalProduct = computed(() => store.getters["Cart/cartLength"]);
const toggleDirection = () => {
  if (document.dir === "rtl") {
    document.dir = "ltr";
    router.push({ name: route.name, params: { lang: "en" } });
    fetchNavbarData("en");
    store.commit("SET_LOCALE", "en");
  } else {
    document.dir = "rtl";
    router.push({ name: route.name, params: { lang: "ar" } });
    fetchNavbarData("ar");
    store.commit("SET_LOCALE", "ar");
  }
};

const fetchNavbarData = async (lang) => {
  await store.dispatch("fetchNavbarData", lang);
  // getLogo();
};
const setFavicon = (url) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
};
onMounted(() => {
  fetchNavbarData();
  watchEffect(() => {
    if (Links.value && Links.value[16] && Links.value[18]) {
      icon.value = Links.value[18].setting_value;
      Logo.value = Links.value[16].setting_value;
      setFavicon(icon.value);
    }
  });
});
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  transition: all 0.2s;

  margin: 12px 0;
  // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .nav-item a span {
    color: #968896;
    &:hover {
      color: #784b77;
    }
  }
  border-radius: 20px;
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
    .centerNavbar[dir="rtl"] {
      margin-right: 48px;
    }
    .leftNavbar[dir="rtl"] {
      margin-right: 48px;
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
  .subMenu {
    a {
      font-size: 18px;
    }
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
