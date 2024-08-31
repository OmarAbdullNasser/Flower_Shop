<template>
  <div class="feature mt-5">
    <div class="container">
      <div class="row text-start">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card-wrapper">
            <div class="card-box">
              <div class="iconfont-wrapper">
                <font-awesome-icon icon="fa-regular fa-face-smile" />
              </div>
              <h5 class="display2">Happiness</h5>
            </div>
            <h5 class="display4">
              Vis ne postulant principes accommodare ius modo
            </h5>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card-wrapper">
            <div class="card-box">
              <div class="iconfont-wrapper">
                <font-awesome-icon icon="fa-regular fa-heart" />
              </div>
              <h5 class="display2">Organic</h5>
            </div>
            <h5 class="display4">
              Vis ne postulant principes accommodare ius modo
            </h5>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card-wrapper">
            <div class="card-box">
              <div class="iconfont-wrapper">
                <font-awesome-icon icon="fa-regular fa-sun" />
              </div>
              <h5 class="display2">Freshness</h5>
            </div>
            <h5 class="display4">
              Vis ne postulant principes accommodare ius modo
            </h5>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card-wrapper">
            <div class="card-box">
              <div class="iconfont-wrapper">
                <font-awesome-icon icon="fa-solid fa-truck" />
              </div>
              <h5 class="display2">Delivery</h5>
            </div>
            <h5 class="display4">
              Vis ne postulant principes accommodare ius modo
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<stye lang="scss" scoped>
.feature {
  .card-wrapper {
    background: none;
    display: block;
    margin: 25px 0;
    .card-box {
      display: inline-flex;
      text-align: left;
      margin: 0;
      align-items: center;
      .iconfont-wrapper {
        color: #0c5b47;
        svg {
          font-size: 2.5rem;
          color: #1b745e;
          margin-right: 15px;
          margin-bottom: 8px;
        }
      }

    
    }
   
  }
}
</stye>
