<template>
  <div class="SecandStage">
    <div class="container">
      <div class="InfoAddress">
        <label> Recipient Details</label>
        <div class="name d-flex flex-column">
          <label for="Name">Name <span class="star">*</span></label>
          <input type="text" name="Name" id="" />
        </div>

        <div class="Mobile d-flex flex-column">
          <label for="Mobile">Mobile <span class="star">*</span></label>
          <input type="tel" name="Mobile" id="" />
        </div>

        <div class="Deliver">
          <label for="Deliver" class="d-block"
            >Deliver To <span class="star">*</span></label
          >

          <divc class="options mt-2 d-flex align-items-center">
            <div class="office d-flex align-content-center">
              <input
                type="radio"
                class="me-2"
                name="Deliver"
                value="Office"
                id=""
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
              />
              <label for="Home">Home</label>
            </div>
          </divc>
        </div>

        <div class="Area">
          <label for="Area">Area <span>*</span></label>
          <select name="Area" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <div class="Street">
          <div class="SName">
            <label for="SName">Street Name <span>*</span></label>
            <input type="text" name="SName" id="" />
          </div>

          <div class="Apartment">
            <label for="Apartment">Apartment No. <span>*</span></label>
            <input type="text" name="Apartment" id="" />
          </div>

          <div class="Floor">
            <label for="Floor ">Floor <span>*</span></label>
            <input type="text" name="Floor " id="" />
          </div>
        </div>

        <div class="Greeting">
          <label for="Greeting">Greeting Card Message </label>
          <textarea name="Greeting " id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.SecandStage {
  .InfoAddress {
    label {
      font-weight: 400;
      font-size: 12px;
      color: #202020;
      letter-spacing: 0;
      margin: 15px 0 4px 0;
    }
    .star {
      color: red;
    }
    .name,
    .Mobile {
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
  }
}
</style>
