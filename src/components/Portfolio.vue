<template>
  <div class="Portfolio">
    <div class="overlay"></div>
    <div class="container">
      <h3 class="subtitle display7">Devoted to wonderful beauty</h3>
      <h3 class="title display1">Our Portfolio</h3>
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/bg3.jpg" class="img-fluid" alt="" />
            </div>
            <div class="text">
              <div class="icon d-flex justify-content-center">
                <font-awesome-icon icon="fa-regular fa-heart" />
              </div>
              <h3 class="subtitle display5">Shop Flowers</h3>
              <h5 class="title display7">
                <em> summer sale under 50% </em>
              </h5>
              <div class="btns">
                <a class="Btn Btn-primary display4">Shop now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b4.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b2.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b4.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b3.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 item features-image">
          <div class="item-wrapper">
            <div class="item-img">
              <img src="../assets/b4.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Portfolio {
  background-image: url("../assets/bg4.jpg");
  padding-top: 3rem;
  padding-bottom: 5rem;
  .overlay {
    opacity: 0.3;
    background-color: rgb(255, 255, 255);
  }
  .subtitle {
    color: #1b745e;
    text-align: center;
    font-style: italic;
    padding-bottom: 12px;
  }
  .title {
    color: #0c5b47;
    text-align: center;
    padding-bottom: 60px;
  }

  .features-image > :nth-child(-n + 3) {
    padding-top: 0;
  }

  .features-image {
    padding-top: 32px;
  }
  .item-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .text {
      position: absolute;
      width: 100%;
      padding: 0 10%;

      svg {
        display: block;
        font-size: 3.5rem;
        color: #1b745e;
        padding-bottom: 7px;
      }
      .btns {
        white-space: nowrap;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 22px;
        .Btn-primary {
          background-color: #d8e3d5 !important;
          border-color: #d8e3d5 !important;
          color: #10634e !important;
        }
      }
    }
  }
}
</style>
