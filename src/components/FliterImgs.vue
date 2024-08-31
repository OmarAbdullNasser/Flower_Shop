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
              <li class="active">
                <a href="" class="Btn display7">
                  All
                  <!-- <br /> -->
                </a>
              </li>
            </ul>
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
              &:hover {
                animation: 1s btn-animation linear infinite;
              }
              & .active {
                border-color: #0c5b47;
                background: #000;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes btn-animation {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
</style>
