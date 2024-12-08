<template>
  <div class="message mb-5">
    <div class="container">
      <div class="row">
        <div class="right-side col-12 col-lg-6 text-center">
          <div class="card-wrapper">
            <div class="card-box text-center">
              <h5 class="art">Local Florist Just For You</h5>
              <p class="display4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                vel pariatur dolorem inventore. Officia temporibus magni modi
                sit atque et, dicta ex maiores ab mollitia dolore debitis eius
                necessitatibus possimus!
              </p>
              <p class="display7">
                <em>Mary Byrd, owner</em>
              </p>
              <div class="si">
                <img src="../assets/signature.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="left-side col-12 col-lg text-center mt-3">
          <img src="../assets/fl2.jpg" alt="" class="img-fluid first" />
          <img
            src="../assets/fl1.jpg"
            alt=""
            class="img-fluid secand d-none d-lg-block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.message {
  .left-side {
    position: relative;
    .frist {
      position: relative;
      display: inline-block;
    }
    .secand {
      position: absolute;
      top: 15%;
      right: 50%;
    }
  }
  .right-side {
    .card-wrapper {
      padding: 10%;
      .art {
        padding-bottom: 12px;
        text-align: left;
        color: var(--main-color);
        font-family: "Quicksand", sans-serif;
        font-size: 2.875rem;
        line-height: 1.1;
      }
      p {
        text-align: left;
        color: var(--main-color);
      }

      .si {
        text-align: left;
        img {
          width: 200px;
          padding-top: 10px;
          display: inline;
        }
      }
    }
  }
}
</style>
