<template>
  <div class="Fliter">
    <div class="container">
      <div class="Text">
        <h3 class="display7">LOREM</h3>
        <h2 class="title display2 mb-2">
          <strong>Gallery</strong>
          <strong> With Tabs</strong>
        </h2>
        <h3 class="display5">
          <em>Lorem Ipsum Dolor Sit Amet</em>
        </h3>
      </div>

      <div class="Imgs">
        <div class="Img-wrapper">
          <!--Fliter-->
          <div class="gallery-filter">
            <ul class="list">
              <li class="active me-1">
                <a href="#" class="Btn display7"> All </a>
              </li>

              <li class="mx-1">
                <a href="#" class="Btn display7"> Awesome </a>
              </li>

              <li class="mx-1">
                <a href="#" class="Btn display7"> Responsive </a>
              </li>

              <li class="mx-1">
                <a href="#" class="Btn display7"> Creative </a>
              </li>

              <li class="mx-1">
                <a href="#" class="Btn display7"> Animated </a>
              </li>
            </ul>
          </div>

          <!-- Gallery -->
          <div class="gallery-row">
            <div class="row">
              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/1.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>
              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/2.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>
              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/3.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>

              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/4.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>

              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/5.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>

              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/6.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>

              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/7.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>

              <div class="col-12 col-lg-4 p-3">
                <div class="item">
                  <img src="../assets/Evenets/8.jpg" alt="" class="img-fluid" />
                  <span class="icon-focus"></span>
                  <span class="title display7"> Type caption here </span>
                </div>
              </div>
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
.Fliter {
  padding-top: 90px;
  padding-bottom: 90px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #ffffff;
  .Text {
    h3 {
      color: #9e9e9e;
      margin-bottom: 0.4375rem;
    }
    .title {
      & strong:first-child {
        color: #000;
      }
    }
  }

  .Imgs {
    .gallery-filter {
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: left;
      padding-right: 0;
      padding-left: 0;
      .list {
        display: inline-block;
        width: 100%;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        text-align: left;
        li {
          display: inline-block;
          padding: 5px 0;
          transition: all 0.3s ease-out;
          &.active {
            // Target active li elements
            .Btn::after {
              border-color: #0c5b47; // Apply your styles here
            }
          }
          .Btn {
            position: relative;
            padding: 0.5rem 1rem 0.6rem;
            margin: 0;
            background-color: transparent;
            border-width: 0;
            color: #0c5b47;

            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              border: 1px solid transparent;
              border-radius: 100px;
              opacity: 0.5;
              &.active {
                border-color: #0c5b47 !important;
              }
            }
            &:hover::after {
              border-color: #0c5b47;
            }
          }
        }
      }
    }

    .gallery-row {
      position: relative;

      .item {
        position: relative;
        &:hover {
          &::before {
            opacity: 0.4; // Change opacity on hover
          }

          img,
          span {
            opacity: 1; // Full opacity on hover
          }

          .title {
            display: block; // Display title on hover
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          -webkit-transition: 0.2s opacity ease-in-out;
          transition: 0.2s opacity ease-in-out;
          background: linear-gradient(180deg, #0c5b47, #338873);
        }
        .icon-focus {
          position: absolute;
          font-size: 2rem !important;
          width: 50px;
          height: 50px;
          top: calc(50% - 25px);
          left: calc(50% - 25px);
          transition: 0.2s opacity ease-in-out;
          z-index: 5;
          color: #fff;
          opacity: 0;

          &::before {
            content: "+";
            border-radius: 100px;
            background: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
            padding-bottom: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .title {
          position: absolute;
          text-align: left;
          display: none;
          width: 100%;
          bottom: 0;
          right: 0;
          padding: 1rem;
          font-weight: bold;
          background: transparent;
          transition: all 0.5s ease;
        }
      }
    }
  }
}
</style>
