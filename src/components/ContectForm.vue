<template>
  <section class="form">
    <div class="container">
      <div class="row">
        <div class="title col-12 text-center my-5">
          <h3 class="mbr-section-subtitle">{{ $t("contact_us") }}</h3>
          <h3 class="mbr-section-title">Where to find</h3>
        </div>

        <div class="col-12 col-lg-5">
          <div class="items">
            <div class="item features-without-image item-mb">
              <div class="item-wrapper">
                <div class="card-box">
                  <h5 class="card-title">{{ $t("Location") }}</h5>
                  <ul class="list">
                    <li class="item-wrap">
                      {{ props.initialData?.address || props.Data?.address }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="item features-without-image item-mb">
              <div class="item-wrapper">
                <div class="card-box">
                  <h5 class="card-title mbr-fonts-style display-5">
                    {{ $t("Phone") }}
                  </h5>
                  <ul class="list mbr-fonts-style display-4">
                    <li class="item-wrap">
                      {{ props.Data?.mobile || props.Data?.mobile }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="item features-without-image item-mb">
              <div class="item-wrapper">
                <div class="card-box">
                  <h5 class="card-title mbr-fonts-style display-5">
                    {{ $t("Email") }}
                  </h5>
                  <ul class="list mbr-fonts-style display-4">
                    <li class="item-wrap">
                      {{ props.initialData?.email || props.Data?.email }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item soical_media_icons" v-if="false">
              <h5 class="card-title mbr-fonts-style display-5">
                {{ $t("Soical_Media") }}
              </h5>
              <ul class="list mbr-fonts-style display-4">
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-tiktok" class="mx-3" />
                <font-awesome-icon icon="fa-brands fa-facebook" />
              </ul>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <form @submit.prevent="submitForm">
            <div class="dragArea row p-3">
              <div class="col-12">
                <h2 class="mbr-section-title">{{ $t("SendEmail") }}</h2>
              </div>

              <div class="col-12 form-group" data-for="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  data-form-field="name"
                  class="form-control"
                  v-model="formData.name"
                  required
                  id="name-form01-c"
                />
              </div>

              <div
                data-for="email"
                class="col-lg-12 col-md-12 col-sm-12 form-group"
                style=""
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  data-form-field="email"
                  class="form-control"
                  v-model="formData.email"
                  required
                  id="email-form01-c"
                />
              </div>

              <div
                data-for="text"
                class="col-lg-12 col-md-12 col-sm-12 form-group"
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="010XXXXXXXXX"
                  data-form-field="text"
                  @input="validateNumberInput"
                  class="form-control"
                  v-model="formData.phone"
                  required
                  id="text-form01-c"
                />
              </div>

              <div
                class="col-lg-12 col-md-12 col-sm-12 form-group"
                data-for="textarea1"
              >
                <textarea
                  name="Message"
                  placeholder="Message"
                  data-form-field="textarea"
                  v-model="formData.message"
                  required
                  class="form-control"
                  id="textarea1-form01-c"
                ></textarea>
              </div>

              <div class="col-md-auto col mbr-section-btn">
                <button type="submit" class="btn">{{ $t("Send") }}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, ref, computed, watchEffect } from "vue";
import { toast } from "vue3-toastify";
import { useHead } from "@vueuse/head";
const url = inject("url");
const props = defineProps(["initialData", "Data"]);
console.log(props.initialData);
const validateNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Replace any non-digit character with an empty string
};

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const showSuccessPopup = ref(false);
const submitForm = async () => {
  try {
    // Prepare the data for the POST request
    const response = await fetch(`${url}/contact_us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    } else {
      toast.success("Thanks, Your order has been send successfully!", {
        autoClose: 2000, // Close after 2 seconds
        position: "top-right",
      });
    }

    // Optionally, reset the form after success
    formData.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    console.error("Error:", error);
  }
};
watchEffect(() => console.log(props.Data));
</script>

<style lang="scss" scoped>
.form {
  .title {
    .mbr-section-subtitle {
      color: var(--main-color);
      text-align: center;
      font-style: italic;
      padding-bottom: 12px;
      font-family: "Crimson Text", serif;
      font-size: 1.125rem;
      line-height: 1.5;
      font-weight: 400;
    }
    .mbr-section-title {
      color: var(--main-color);
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-size: 2.875rem;
      line-height: 1.1;
    }
  }

  .items {
    .item {
      margin-bottom: 40px;
      h5 {
        margin-bottom: 10px;
        color: #000;
        font-family: "Quicksand", sans-serif;
        font-size: 1.375rem;
        line-height: 1.5;
      }
      .list {
        color: #000;
        font-family: "Quicksand", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        list-style: none;
        li {
          opacity: 0.6;
          margin-bottom: 0;
          line-height: 180%;
          cursor: pointer;
        }
      }

      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
    .soical_media_icons {
      svg {
        font-size: 24px;
        color: var(--main-color);
      }
    }
  }

  .dragArea {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    textarea {
      resize: none;
    }
    h2 {
      margin-bottom: 45px;
      color: #000;
      font-family: "Quicksand", sans-serif;
      font-size: 1.375rem;
      line-height: 1.5;
    }
    .form-group {
      margin-bottom: 20px;
      .form-control {
        background-color: #ededed;
        padding: 20px;
        box-shadow: none;
        border: none;
        border-radius: 0;
        font-family: "Quicksand", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        font-weight: 400;
      }
    }
    .btn {
      padding: 0.6rem 1.5rem;
      border-radius: 0;
      background-color: var(--main-color);
      border-color: #d8e3d5;
      color: #fff;
      font-size: 1rem;
      line-height: 1.5;
      &:hover {
        background-color: #ffff;
        border-color: #c4d5c0;
        color: var(--main-color);
      }
    }
  }

  .map {
    background: #fff;
    height: 200px;
    border-radius: 15px;
  }
  &.iscompontent {
    padding-bottom: 60px;
  }
}
</style>
