<template>
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 right">
          <div class="col-12 col-md-3 padd px-lg-5">
            <img href="https://mobiri.se/" src="../assets/signature.png" />
          </div>

          <div class="mbr-form px-lg-5 mx-auto" data-form-type="formoid">
            <form class="mbr-form d-flex mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                data-form-field="email"
                class="form-control"
                value=""
                id="email-footer5-15"
              />
              <div class="button">
                <button type="submit" class="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>

        <div
          class="col-12 col-md-6 col-lg small my-4 my-lg-0 text-center"
          v-for="Data in DatatFooter"
          :key="Data.id"
        >
          <h5 class="lin mbr-fonts-style display-5">
            <p class="bottom">{{ Data.title }}</p>
          </h5>

          <ul class="px-0">
            <li
              class="text-center"
              v-for="link in Data.children"
              :key="link.id"
            >
              <h5
                class="small-bottom lin mbr-fonts-style display-7 text-center"
              >
                <router-link
                  class="nav-link it"
                  :to="{
                    path: `/${route.params.lang}${link.url}`,
                  }"
                >
                  {{ link.title }}
                </router-link>
              </h5>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg top small text-center mt-4 mt-lg-0">
          <h5 class="lin mbr-fonts-style display-5">
            <p class="bottom">Follow Us</p>
          </h5>
          <div
            class="social-block d-flex flex-lg-column justify-content-between"
          >
            <a @click="goToUrl('instagram')">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>

            <a @click="goToUrl('tiktok')" class="my-lg-4">
              <font-awesome-icon icon="fa-brands fa-tiktok" />
            </a>

            <a @click="goToUrl('facebook')">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, watchEffect, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
const DatatFooter = computed(() => store.getters.footer);

const soicallink = ref([]);
const Links = computed(() => store.getters.SiteLinks);
const SocialLinks = () => {
  // Filter the links based on the key
  const link = Links.value.filter((item) =>
    ["instagram", "facebook", "tiktok"].includes(item.setting_key)
  );

  // Debugging logs
  soicallink.value.push(...link);
};

function goToUrl(url) {
  // Ensure soicallink has valid data before proceeding
  if (!soicallink.value || soicallink.value.length === 0) {
    console.error("Social links are not yet loaded.");
    return;
  }

  const mapping = soicallink.value.find((item) => item.setting_key === url);
  if (mapping && mapping.setting_value) {
    window.location.href = mapping.setting_value; // Navigate to the specified URL
  } else {
    console.error("Invalid URL or mapping not found.");
  }
}

onMounted(() => {
  if (Links.value && Links.value.length > 0) {
    SocialLinks();
  } else {
    // Watch for changes in Links and populate social links when data arrives
    watchEffect(() => {
      if (Links.value && Links.value.length > 0) {
        SocialLinks();
      }
    });
  }
});
</script>

<style scoped lang="scss">
.footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #400a3f;
  .form-control {
    border-radius: 0;
  }
  svg {
    font-size: 24px;
    color: #968896;
    &:hover {
      color: #fff;
    }
  }
  .right {
    padding-right: 70px;
    .padd {
      padding-bottom: 10px;
      img {
        width: 100px;
      }
    }
  }
  .lin {
    color: #fff;
  }
  .mbr-form {
    margin-right: 10px;
    form {
      border-bottom: 1px solid #0c5b47;
      input {
        background-color: #e0ecdc;
        border: none;
        box-shadow: none;
      }
      input:focus {
        background-color: #fff;
      }
      .button {
        button {
          padding: 0.6rem 1.5rem;
          border-radius: 0;
          background-color: #d8e3d5;
          border-color: #d8e3d5;
          color: #10634e;
          font-size: 1rem;
          line-height: 1.5;
          &:hover {
            background-color: #c4d5c0;
            border-color: #c4d5c0;
          }
        }
      }
    }
  }
  .small {
    font-size: 80%;
    font-weight: 800;
    .display-5 {
      font-size: 1.375rem;
      line-height: 1.5;
    }
    .small-bottom {
      margin-bottom: 20px;
    }
    .it {
      position: relative;
      width: fit-content;
      margin: 0 auto;
    }
    .it::after {
      content: "";
      position: absolute;
      width: auto;
      height: 2px;
      background-color: #fff;
      bottom: -4px;
      left: 0;

      transition: all 0.2s ease-out;
    }
    a:hover {
      color: #fff !important;
    }
    a {
      color: #968896 !important;
    }
    .it:hover::after {
      width: 100%; /* Line expands to full width on hover */
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .right {
      padding: 10px;
    }
  }
}
</style>
