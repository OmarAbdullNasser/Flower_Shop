<template>
  <div class="section product">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-3 mb-lg-0">
          <img
            src="../assets/singlePageImg.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-12 col-md-6">
          <div class="right">
            <div class="Card">
              <p class="desc1 display4">SALE</p>
            </div>
            <p class="display2 name">
              <strong>Diamond Ring</strong>
            </p>
            <div class="price-line d-flex">
              <p class="desc2 display5">
                <s>$145.00</s>
              </p>
              <p class="plus1 display5">
                <strong>&nbsp;</strong>
                $135.00
              </p>
            </div>
            <p class="display4 text">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
              aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor.
              <br />
              <br />
              Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt
              labore et dolore magna aliquyam.erat, sed diam voluptua. At vero
              accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut
              labore eirmod tempor invidunt magna aliquyam. Stet clitain vidunt
              ut labore.
            </p>
            <div class="btn-section">
              <a href="#" class="display7">Buy Now</a>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong> Category:</strong>
              </p>
              <p class="plus display4">&nbsp; Rings</p>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong> Tags:</strong>
              </p>
              <p class="plus display4">&nbsp; ring</p>
            </div>

            <div class="price-line1 d-flex">
              <p class="dec display7">
                <strong>Product ID:</strong>
              </p>
              <p class="plus display4">&nbsp; 2234</p>
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
.product {
  padding-top: 75px;
  padding-bottom: 75px;
  background-color: #ffffff;
  .img-fluid {
    height: 614px;
    max-width: 100%;
    margin-left: 10rem;
  }

  .right {
    padding-left: 10px;
    .Card {
      margin-bottom: 30px;
      .desc1 {
        padding: 0px 10px;
        background: #3f37c9;
        display: inline;
        width: auto;
        color: #ffffff;
      }
    }
    .name {
      margin-bottom: 20px;
      color: #000;
    }
    .price-line {
      margin-bottom: 27px;
      .desc2 {
        color: #909190;
      }
      .plus1 {
        color: #3f37c9;
      }
    }
    .text {
      margin-bottom: 40px;
      color: #52586a;
    }
    .btn-section {
      margin-bottom: 34px;
      color: #52586a;
      a {
        padding: 0.5625rem 2.3125rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 10px;
        cursor: pointer;
        background-color: #fef1e6;
        border-color: #fef1e6;
        color: #10634e;
      }
    }
    .price-line1 {
      margin-bottom: 10px;
      color: #111213;
      .plus {
        color: #52586a;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .product {
    .img-fluid {
      max-width: 100%;
      height: auto;
      margin-left:0 ;
    }
  }
}
</style>
