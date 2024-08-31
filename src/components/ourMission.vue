<template>
  <div class="ourMission mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="left-side col-12 col-md-6">
          <h5 class="display1 title">Our Mission</h5>
          <p class="display4 dec">
            Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
            dicunt an, ea civibus.
          </p>
          <div class="btnn">
            <a href="" class="btn btn-primary display4">Read more</a>
          </div>
        </div>

        <div class="right-side col-12 col-md-6 item-wrapper">
          <img src="../assets/b4.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ourMission {
  .row {
    align-items: center;
    background: #1b745e;
    padding: 0px;
    margin: 0;
  }
  .right-side {
    padding: 0;
    img {
      width: 100%;
    }
  }
  .left-side {
    padding-left: 150px;
    padding-right: 80px;
    text-align: left;
    .title {
      margin: 0 0 12px;
      color: #ffffff;
    }
    .dec {
      padding: 0 0px 20px;
      color: #ffffff;
    }
    .btnn {
      width: 100%;
      .btn-primary {
        padding: 0.5625rem 2.3125rem;
        border-radius: 0px;
        background-color: #d8e3d5 !important;
        border-color: #d8e3d5 !important;
        color: #10634e !important;
        font-family: "Quicksand", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        &:hover {
          color: #10634e !important;
          background-color: #c4d5c0 !important;
          border-color: #c4d5c0 !important;
        }
      }
    }
  }
  @media (max-width: 990px) {
    .left-side {
      padding: 25px 15px;
    }
  }
}
</style>
