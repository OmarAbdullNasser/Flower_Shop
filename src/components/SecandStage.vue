<template>
  <div class="SecandStage">
    <div class="container">
      <div class="InfoAddress text-center text-lg-start">
        <label> Recipient Details</label>
        <div class="name d-flex flex-column">
          <label for="Name"
            >{{ $t("FormName") }} <span class="star">*</span></label
          >
          <input
            type="text"
            name="Name"
            id=""
            v-model="formFields.Name"
            required
          />
        </div>

        <div class="Mobile d-flex flex-column">
          <label for="Mobile"
            >{{ $t("FormMobile") }} <span class="star">*</span></label
          >
          <input
            type="tel"
            name="Mobile"
            id=""
            v-model="formFields.phone"
            oninput="this.value = this.value.replace(/[^0-9]/g, '');"
            @input="validatePhone"
            required
            minlength="11"
            maxlength="13"
          />
          <span class="mt-2" v-if="flag" :class="{ red: flag == 'Phone' }">{{
            $t("FormMobileValidation")
          }}</span>
        </div>

        <div class="Deliver" v-if="addresState == 'HasAdress'">
          <label for="Deliver" class="d-block"
            >{{ $t("FormDeliver") }} <span class="star">*</span></label
          >

          <div
            class="options mt-2 d-flex align-items-center justify-content-center justify-content-lg-start"
          >
            <label class="office d-flex align-content-center">
              <input
                type="radio"
                class="me-2"
                name="Deliver"
                value="0"
                id="Office"
                v-model="formFields.Deliver"
              />
              <span>{{ $t("FormOffice") }}</span>
            </label>
            <div class="Home d-flex align-content-center ms-2">
              <label class="Home d-flex align-content-center">
                <input
                  type="radio"
                  class="me-2"
                  name="Deliver"
                  value="1"
                  id="Home"
                  v-model="formFields.Deliver"
                />
                <span>{{ $t("FormHome") }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="Area" v-if="addresState == 'HasAdress'">
          <label for="Area">Area <span class="star">*</span></label>
          <select name="Area" v-model="formFields.Area" id="">
            <option value="Cairo">{{ $t("FormCity1") }}</option>
            <option value="Giza">{{ $t("FormCity2") }}</option>
          </select>
        </div>

        <div
          class="Street d-flex justify-content-between flex-wrap"
          v-if="addresState == 'HasAdress'"
        >
          <div class="SName d-flex flex-column">
            <label for="SName"
              >{{ $t("FormStreet") }} <span class="star">*</span></label
            >
            <input
              type="text"
              name="SName"
              id=""
              v-model="formFields.SName"
              required
            />
            <span>{{ $t("FormStreetValiadition") }} </span>
          </div>

          <div class="Apartment d-flex flex-column">
            <label for="Apartment"
              >{{ $t("FormApartment") }} <span class="star">*</span></label
            >
            <input
              type="text"
              name="Apartment"
              id=""
              v-model="formFields.ApartName"
            />
          </div>

          <div class="Floor d-flex flex-column">
            <label for="Floor "
              >{{ $t("FormFloor") }} <span class="star">*</span></label
            >
            <input
              type="text"
              name="Floor"
              id=""
              @input="validateFloor"
              v-model="formFields.Floor"
              required
            />
            <span class="mt-2 red small" v-if="Flooer_flag"
              >{{ $t("FormFloorVailadtion") }}
            </span>
          </div>
        </div>

        <div
          class="NoAddreess d-flex flex-column my-3"
          v-if="addresState == 'NoAddress'"
        >
          <span>{{ $t("FormNotKnow") }} </span>
          <div class="satges">
            <div class="StageOne">
              <span class="number me-2">1</span>
              <span>{{ $t("StageOne") }}</span>
            </div>
            <div class="StageTwo my-3">
              <span class="number me-2">2</span>
              <span>{{ $t("StageTwo") }}.</span>
            </div>
            <div class="StageThree">
              <span class="number me-2">3</span>
              <span>{{ $t("StageThree") }}</span>
            </div>
          </div>
        </div>
        <div class="Greeting d-flex flex-column mt-3">
          <label for="Greeting">{{ $t("Greeting") }} </label>
          <textarea
            name="Greeting "
            id=""
            cols="5"
            rows="2"
            v-model="formFields.Greeting"
          ></textarea>
        </div>
        <hr />
      </div>
      <div class="SenderInfo py-3">
        <h4>Sender Information</h4>

        <div class="FullName d-flex flex-wrap">
          <div class="FristName d-flex flex-column">
            <label for="FName"
              >{{ $t("FirstName") }} <span class="star">*</span></label
            >
            <input
              type="text"
              name="FName"
              id=""
              v-model="formFields.SenderFName"
              required
            />
          </div>

          <div class="LastName d-flex flex-column">
            <label for="LName ">
              {{ $t("LastName") }}<span class="star">*</span></label
            >
            <input
              type="text"
              name="LName"
              id=""
              v-model="formFields.SenderLName"
              required
            />
          </div>
        </div>

        <div class="PhoneNmber d-flex flex-column">
          <label for="phone">
            {{ $t("PhoneSender") }} <span class="star">*</span></label
          >
          <input
            type="tel"
            name="phone"
            id=""
            v-model="formFields.SenderPhone"
            oninput="this.value = this.value.replace(/[^0-9]/g, '');"
            @input="validateSenderPhone"
            required
            minlength="11"
            maxlength="13"
          />
          <span
            class="mt-2"
            v-if="Sender_flag"
            :class="{
              red: Sender_flag == 'SenderPhone',
              small: Sender_flag == 'SenderPhone',
            }"
            >{{ $t("PhoneSenderVailation") }}</span
          >
        </div>

        <div class="Email d-flex flex-column">
          <label for="email">
            {{ $t("EmailSender") }} <span class="star">*</span></label
          >
          <input
            type="email"
            name="email"
            id=""
            v-model="formFields.SenderEmail"
            required
          />
          <!-- <span
            class="mt-2"
            v-if="flag"
            :class="{ red: flag == 'Phone', small: flag == 'Phone' }"
            >the email must be vaild</span
          > -->
        </div>

        <div class="opations">
          <p class="mb-0">
            <input
              type="radio"
              name="Sender"
              id="ShowName"
              value="0"
              v-model="formFields.SenderNameState"
              checked
            />
            <label for="ShowName">{{ $t("ShowName") }} </label>
          </p>
          <p class="mb-0">
            <input
              type="radio"
              name="Sender"
              id="HideName"
              value="1"
              v-model="formFields.SenderNameState"
            />
            <label for="HideName">{{ $t("HidenName") }}</label>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch, defineEmits, watchEffect } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";
let flag = null;
let Sender_flag = null;
let Flooer_flag = ref(null);
const store = useStore();
const emit = defineEmits(["vaild"]);
const PopupMessage = (title, Text, icon, BtnText) => {
  Swal.fire({
    title: title,
    text: Text,
    icon: icon,
    confirmButtonText: BtnText,
  });
};

const addresState = computed(() => store.getters.address);
const senderObj = computed(() => store.getters.senderObj);
const HassAddress = computed(() => store.getters.address);

const areFieldsValid = computed(() => {
  // Exclude fields from validation
  const fieldsToValidate = { ...formFields.value };
  if ((senderObj.value.ship_to_me == 0) & (HassAddress.value == "NoAddress")) {
    delete fieldsToValidate.SName;
    delete fieldsToValidate.ApartName;
    delete fieldsToValidate.Floor;
    delete fieldsToValidate.Area;
    delete fieldsToValidate.Deliver;
  }
  delete fieldsToValidate.Greeting;
  delete fieldsToValidate.SenderNameState;

  const allFieldsFilled = Object.values(fieldsToValidate).every(
    (field) =>
      field !== null && field !== undefined && field.toString().trim() !== ""
  );

  // Additional validation for phone number and email
  const isSenderPhoneValid =
    formFields.value.SenderPhone.length >= 11 &&
    formFields.value.SenderPhone.length < 13;
  const isPhoneValid =
    formFields.value.phone.length >= 11 && formFields.value.phone.length < 13;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    formFields.value.SenderEmail
  );

  return allFieldsFilled && isPhoneValid && isEmailValid && isSenderPhoneValid;
});

const AlertValue = (errortype = null) => {
  if (errortype && areFieldsValid) {
    emit("validation-result", areFieldsValid.value);
  } else if (errortype) {
    if (errortype == "Phone") {
      PopupMessage(
        "Info",
        "The Phone must be 11 to 13 number",
        "error",
        "Try gain"
      );
    } else if (errortype == "email") {
      PopupMessage(
        "Info",
        "The email must be valid format",
        "error",
        "Try gain"
      );
    }
  }
};
const formFields = ref({
  Name: "",
  phone: "",
  Deliver: "",
  Area: "",
  SName: "",
  ApartName: "",
  Floor: "",
  Greeting: "",
  SenderFName: "",
  SenderLName: "",
  SenderPhone: "",
  SenderEmail: "",
  SenderNameState: "",
});
function syncFormWithVuex() {
  const senderObj = store.getters.senderObj;
  for (const key in formFields.value) {
    // Check if key exists in Vuex object and set the value
    if (key in senderObj) {
      formFields.value[key] = senderObj[key];
    } else {
      formFields.value[key] = ""; // Set to empty string if not present in Vuex
    }
  }
}

const validatePhone = () => {
  const phoneLength = formFields.value.phone.length;
  if (phoneLength < 11 || phoneLength > 13) {
    flag = "Phone";
  } else {
    flag = null; // Reset the flag if validation passes
  }
};
const validateSenderPhone = () => {
  const phoneLength = formFields.value.SenderPhone.length;

  if (phoneLength < 11 || phoneLength > 13) {
    Sender_flag = "SenderPhone";
  } else {
    Sender_flag = null; // Reset the flag if validation passes
  }
};
const validateFloor = () => {
  const phoneLength = formFields.value.Floor.length;

  if (phoneLength >= 1) {
    Flooer_flag.value = null; // Hide span
  } else {
    Flooer_flag.value = "1"; // Show span
  }
};

watch(
  formFields,
  (newValues) => {
    // Commit each field to the store
    for (const field in newValues) {
      const value = newValues[field];
      store.commit("SET_SENDER", { [field]: value });
    }

    // Emit true or false based on validity

    emit("validation-result", areFieldsValid.value);
  },
  { deep: true }
);

onMounted(() => {
  emit("valid", areFieldsValid.value);
  syncFormWithVuex();
});
</script>

<style lang="scss" scoped>
.SecandStage {
  .star {
    color: red;
  }
  .InfoAddress {
    label {
      font-weight: 400;
      font-size: 12px;
      color: #202020;
      letter-spacing: 0;
      margin: 15px 0 4px 0;
    }

    .name,
    .Mobile,
    .Street {
      input {
        border: 1px solid #400a3f;
        line-height: 35px;
        padding: 0 16px;
        border-radius: 4px;
        font-size: 12px;
        transition: 0.2s all;
        background-color: #fefefd;
        height: auto;
        width: 80%;
        outline: none;
      }
    }
    .Deliver {
      label:first-child {
        font-weight: 400;
        font-size: 12px;
        color: #202020;
        letter-spacing: 0;
        margin: 15px 0 4px 0;
      }
      .options {
        label {
          color: #400a3f;
          font-size: 14px;
          font-weight: 700;
          margin: 0;
        }
        input {
          accent-color: #400a3f;
        }
      }
    }
    .Area {
      select {
        display: block;
        padding: 10px 15px;
        border-radius: 4px;
        transition: 0.2s all;
        background-color: #fefefd;
        width: 80%;
      }
    }
    .Street {
      width: 80%;
      gap: 1.2rem;
      .SName {
        flex-grow: 2;
        span {
          font-size: 13px;
        }
      }
      input {
        width: auto;
        outline: none;
      }
    }

    .Greeting {
      width: 80%;
      textarea {
        resize: none;
        line-height: 1.5;
        padding: 10px 16px;
        height: 90px;
        outline: none;
        border: 1px solid #400a3f;
        border-radius: 4px;
        font-size: 12px;
        transition: 0.2s all;
        background-color: #fefefd;
      }
    }
    hr {
      width: 80%;
    }
    .NoAddreess {
      gap: 1rem;
      width: 80%;
      .number {
        border-radius: 4px;
        background: #400a3f;
        font-size: 14px;
        font-weight: 900;
        color: #ffffff;
        padding: 0px 7px 0px 6px;
        line-height: 20px;
      }
    }
  }
  .SenderInfo {
    h4 {
      color: #1d1d1b;
      font-size: 14px;
      margin: 0 3px 15px;
      font-weight: bold;
    }
    label {
      font-weight: 400;
      font-size: 12px;
      color: #202020;
      letter-spacing: 0;
      margin: 15px 0 4px 0;
    }
    input {
      border: 1px solid #400a3f;
      line-height: 35px;
      padding: 0 16px;
      border-radius: 4px;
      font-size: 12px;
      transition: 0.2s all;
      background-color: #fefefd;
      height: auto;
      outline: none;
    }
    .FullName {
      gap: 1.5rem;
      width: 80%;
      .FristName,
      .LastName {
        flex-grow: 1;
      }
    }
    .PhoneNmber {
      width: 25%;
    }
    .Email {
      width: 80%;
    }
    .opations {
      p {
        label {
          color: #927091;
          padding: 20px 0 10px 5px;

          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }
        input[type="radio"] {
          width: 1rem;
          height: 1rem;
          &:checked {
            accent-color: var(--main-color);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 999.9px) {
  .SecandStage {
    .InfoAddress {
      .name,
      .Mobile,
      .Street {
        input {
          width: 100%;
        }
      }
      .Area {
        select {
          width: 100%;
        }
      }
      .Street {
        width: 100%;
      }
      .Apartment {
        width: 100%;
      }
      .Floor {
        width: 100%;
      }
      .Greeting {
        width: 100%;
      }
    }
    .SenderInfo {
      .FullName {
        width: 100%;
      }
      .PhoneNmber {
        width: 100%;
      }
      .Email {
        width: 100%;
      }
    }
  }
}
.red {
  color: red;
  &.small {
    font-size: 15px;
  }
}
</style>
