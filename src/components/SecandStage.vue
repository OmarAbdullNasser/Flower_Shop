<template>
  <div class="SecandStage">
    <div class="container">
      <div class="InfoAddress">
        <label> Recipient Details</label>
        <div class="name d-flex flex-column">
          <label for="Name">Name <span class="star">*</span></label>
          <input type="text" name="Name" id="" v-model="formFields.Name" />
        </div>

        <div class="Mobile d-flex flex-column">
          <label for="Mobile">Mobile <span class="star">*</span></label>
          <input
            type="tel"
            name="Mobile"
            id=""
            oninput="this.value = this.value.replace(/[^0-9]/g, '');"
            v-model="formFields.phone"
          />
        </div>

        <div class="Deliver" v-if="addresState == 'HasAdress'">
          <label for="Deliver" class="d-block"
            >Deliver To <span class="star">*</span></label
          >

          <div class="options mt-2 d-flex align-items-center">
            <div class="office d-flex align-content-center">
              <input
                type="radio"
                class="me-2"
                name="Deliver"
                value="Office"
                id=""
                v-model="formFields.Deliver"
              />
              <label for="Office">Office</label>
            </div>
            <div class="Home d-flex align-content-center">
              <input
                type="radio"
                class="mx-2"
                name="Deliver"
                value="Home"
                id=""
                v-model="formFields.Deliver"
              />
              <label for="Home">Home</label>
            </div>
          </div>
        </div>

        <div class="Area" v-if="addresState == 'HasAdress'">
          <label for="Area">Area <span class="star">*</span></label>
          <select name="Area" v-model="formFields.Area" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <div
          class="Street d-flex justify-content-between flex-wrap"
          v-if="addresState == 'HasAdress'"
        >
          <div class="SName d-flex flex-column">
            <label for="SName">Street Name <span class="star">*</span></label>
            <input type="text" name="SName" id="" v-model="formFields.SName" />
            <span>Preferably in Arabic if possible for more accuracy </span>
          </div>

          <div class="Apartment d-flex flex-column">
            <label for="Apartment"
              >Apartment No. <span class="star">*</span></label
            >
            <input
              type="text"
              name="Apartment"
              id=""
              v-model="formFields.ApartName"
            />
          </div>

          <div class="Floor d-flex flex-column">
            <label for="Floor ">Floor <span class="star">*</span></label>
            <input type="text" name="Floor" id="" v-model="formFields.Floor" />
          </div>
        </div>

        <div
          class="NoAddreess d-flex flex-column my-3"
          v-if="addresState == 'NoAddress'"
        >
          <span>Attention: This is only available in Cairo and Giza. </span>
          <div class="satges">
            <div class="StageOne">
              <span class="number me-2">1</span>
              <span
                >Upon checkout, we will send an SMS to your recipient to collect
                their address and preferred delivery date.</span
              >
            </div>
            <div class="StageTwo my-3">
              <span class="number me-2">2</span>
              <span
                >Your recipient must accept the gift delivery before we prepare
                your bouquet.</span
              >
            </div>
            <div class="StageThree">
              <span class="number me-2">3</span>
              <span
                >You will get notified once we deliver your gift to your
                recipient.</span
              >
            </div>
          </div>
        </div>
        <div class="Greeting d-flex flex-column mt-3">
          <label for="Greeting">Greeting Card Message </label>
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
            <label for="FName">First Name <span class="star">*</span></label>
            <input
              type="text"
              name="FName"
              id=""
              v-model="formFields.SenderFName"
            />
          </div>

          <div class="LastName d-flex flex-column">
            <label for="LName "> Last Name <span class="star">*</span></label>
            <input
              type="text"
              name="LName"
              id=""
              v-model="formFields.SenderLName"
            />
          </div>
        </div>

        <div class="PhoneNmber d-flex flex-column">
          <label for="phone"> Phone <span class="star">*</span></label>
          <input
            type="tel"
            oninput="this.value = this.value.replace(/[^0-9]/g, '');"
            name="phone"
            id=""
            v-model="formFields.SenderPhone"
          />
        </div>

        <div class="Email d-flex flex-column">
          <label for="email"> Email <span class="star">*</span></label>
          <input
            type="email"
            name="email"
            id=""
            v-model="formFields.SenderEmail"
          />
        </div>

        <div class="opations">
          <p class="mb-0">
            <input
              type="radio"
              name="Sender"
              id="ShowName"
              value="0"
              v-model="formFields.SenderNameState"
            />
            <label for="ShowName">Show my name on delivery</label>
          </p>
          <p class="mb-0">
            <input
              type="radio"
              name="Sender"
              id="HideName"
              value="1"
              v-model="formFields.SenderNameState"
            />
            <label for="HideName">Hide my name on delivery</label>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const addresState = computed(() => store.getters.address);
const senderObj = computed(() => store.getters.senderObj);
const debounceTimeouts = {};
const formFields = ref({
  Name: "",
  phone: "",
  address: "",
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
watch(
  formFields,
  (newValues) => {
    for (const field in newValues) {
      if (debounceTimeouts[field]) {
        clearTimeout(debounceTimeouts[field]); // Clear previous timeout
      }
      debounceTimeouts[field] = setTimeout(() => {
        store.commit("SET_SENDER", { [field]: newValues[field] });
      }, 1500); // Adjust debounce delay as needed
    }
  },
  { deep: true }
);
const test = () => {
  console.log(senderObj.value);
};
onMounted(() => console.log(senderObj.value));
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
      width: 18%;
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
    .SenderInfo {
      .PhoneNmber {
        width: 80%;
      }
    }
  }
}
</style>
