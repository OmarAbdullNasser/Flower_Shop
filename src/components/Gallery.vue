<template>
  <div class="Gallery">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-4 item features-image">
          <div class="item-wrapper">
            <a href="#">
              <div class="item-img">
                <img src="../assets/Landscape/1.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div class="col-12 col-lg-4 item features-image">
          <div class="item-wrapper">
            <a href="#">
              <div class="item-img">
                <img src="../assets/Landscape/2.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div class="col-12 col-lg-4 item features-image">
          <div class="item-wrapper">
            <a href="#">
              <div class="item-img">
                <img src="../assets/Landscape/3.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div class="col-12 col-lg-4 item features-image">
          <div class="item-wrapper">
            <a href="#">
              <div class="item-img">
                <img src="../assets/Landscape/4.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div class="col-12 col-lg-4 item features-image">
          <div class="item-wrapper">
            <a href="#">
              <div class="item-img">
                <img src="../assets/Landscape/5.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div class="col-12 col-lg-4 item features-image">
          <div class="item-wrapper">
            <a href="#">
              <div class="item-img">
                <img src="../assets/Landscape/6.jpg" alt="" />
              </div>
            </a>
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
.Gallery {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #1b745e;
  .container-fluid {
    padding: 0 60px;
  }

  .item-wrapper {
    margin-bottom: 32px;
    overflow: hidden;
    .item-img img {
      height: 345px;
      object-fit: cover;
      margin-bottom: 15px;
      transform: scale(1.06) translateX(0);
      transition: all 0.3s ease-in-out;
      width: 100%;
      &:hover {
        transform: scale(1.06) translateX(6px);
      }
    }
  }
}
@media screen and (max-width: 991px) {
  .Gallery {
    .container-fluid {
      padding: 0 25px;
    }
  }
}
</style>
