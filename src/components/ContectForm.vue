<template>
  <section class="form">
    <div class="container">
      <div class="row">
        <div class="title col-12 text-center my-5">
          <h3 class="mbr-section-subtitle">Contacts</h3>
          <h3 class="mbr-section-title">Where to find</h3>
        </div>

        <div class="col-12 col-lg-5">
          <div class="items">
            <div class="item features-without-image item-mb">
              <div class="item-wrapper">
                <div class="card-box">
                  <h5 class="card-title">Location</h5>
                  <ul class="list">
                    <li class="item-wrap">Paris 75001, France</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="item features-without-image item-mb">
              <div class="item-wrapper">
                <div class="card-box">
                  <h5 class="card-title mbr-fonts-style display-5">Phone</h5>
                  <ul class="list mbr-fonts-style display-4">
                    <li class="item-wrap">+098 765 432</li>
                    <li class="item-wrap">+123 456 789</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="item features-without-image item-mb">
              <div class="item-wrapper">
                <div class="card-box">
                  <h5 class="card-title mbr-fonts-style display-5">Email</h5>
                  <ul class="list mbr-fonts-style display-4">
                    <li class="item-wrap">mobi@rise.com</li>
                    <li class="item-wrap">markm5@theme.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-7 mb-5">
          <form>
            <div class="dragArea row">
              <div class="col-12">
                <h2 class="mbr-section-title">Send your messages</h2>
              </div>

              <div class="col-12 form-group" data-for="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  data-form-field="name"
                  class="form-control"
                  value=""
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
                  value=""
                  id="email-form01-c"
                />
              </div>

              <div
                data-for="text"
                class="col-lg-12 col-md-12 col-sm-12 form-group"
              >
                <input
                  type="text"
                  name="text"
                  placeholder="Brand"
                  data-form-field="text"
                  class="form-control"
                  value=""
                  id="text-form01-c"
                />
              </div>

              <div
                class="col-lg-12 col-md-12 col-sm-12 form-group"
                data-for="textarea1"
              >
                <textarea
                  name="textarea1"
                  placeholder="Message"
                  data-form-field="textarea"
                  class="form-control"
                  id="textarea1-form01-c"
                ></textarea>
              </div>

              <div class="col-md-auto col mbr-section-btn">
                <button type="submit" class="btn">SEND</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  .title {
    .mbr-section-subtitle {
      color: #1b745e;
      text-align: center;
      font-style: italic;
      padding-bottom: 12px;
      font-family: "Crimson Text", serif;
      font-size: 1.125rem;
      line-height: 1.5;
      font-weight: 400;
    }
    .mbr-section-title {
      color: #0c5b47;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-size: 2.875rem;
      line-height: 1.1;
    }
  }

  .items {
    .item {
      margin-bottom: 60px;
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
    }
  }

  .dragArea {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
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
</style>
