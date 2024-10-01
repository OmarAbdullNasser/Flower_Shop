<template>
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 right">
          <div class="col-12 col-md-3 padd px-lg-5">
            <img href="https://mobiri.se/" src="../assets/signature.png" />
          </div>

          <div class="mbr-form px-lg-5 mx-auto" data-form-type="formoid">
            <form class="mbr-form d-flex mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                data-form-field="email"
                class="form-control"
                value=""
                id="email-footer5-15"
              />
              <div class="button">
                <button type="submit" class="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-2 small text-center my-4 my-lg-0">
          <h5 class="lin mbr-fonts-style display-5">
            <p class="bottom">About</p>
          </h5>

          <h5 class="small-bottom lin mbr-fonts-style display-7">
            <a href="index.html" class="text-success it">About Us </a>
          </h5>

          <h5 class="small-bottom lin mbr-fonts-style display-7">
            <a href="index.html" class="text-success it">Our Partners </a>
          </h5>

          <h5 class="lin mbr-fonts-style display-7">
            <a href="index.html" class="text-success it">Our Services </a>
          </h5>
        </div>
        <div
          class="col-12 col-md-6 col-lg-2 top small text-center my-4 my-lg-0"
        >
          <h5 class="lin mbr-fonts-style display-5">
            <p class="bottom">Contact</p>
          </h5>
          <h5 class="small-bottom lin mbr-fonts-style display-7">
            <a href="index.html" class="text-success it"
              >Contact Us
              <div class="line"></div
            ></a>
          </h5>
          <h5 class="small-bottom lin mbr-fonts-style display-7">
            <a href="index.html" class="text-success it"
              >FAQ Page
              <div class="line"></div
            ></a>
          </h5>
          <h5 class="lin mbr-fonts-style display-7">
            <a href="index.html" class="text-success it"
              >About Me
              <div class="line"></div
            ></a>
          </h5>
        </div>
        <div
          class="col-12 col-md-6 col-lg-2 top small text-center mt-4 mt-lg-0"
        >
          <h5 class="lin mbr-fonts-style display-5">
            <p class="bottom">Follow Us</p>
          </h5>
          <div
            class="social-block d-lg-flex flex-column justify-content-between"
          >
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>

            <a href="#" class="my-4">
              <font-awesome-icon icon="fa-brands fa-tiktok" />
            </a>

            <a href="#">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #400a3f;
  svg {
    font-size: 24px;
    color: #968896;
    &:hover {
      color: #fff;
    }
  }
  .right {
    padding-right: 70px;
    .padd {
      padding-bottom: 10px;
      img {
        width: 100px;
      }
    }
  }
  .lin {
    color: #fff;
  }
  .mbr-form {
    margin-right: 10px;
    form {
      border-bottom: 1px solid #0c5b47;
      input {
        background-color: #e0ecdc;
        border: none;
        box-shadow: none;
      }
      input:focus {
        background-color: #fff;
      }
      .button {
        button {
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
  }
  .small {
    font-size: 80%;
    font-weight: 800;
    .display-5 {
      font-size: 1.375rem;
      line-height: 1.5;
    }
    .small-bottom {
      margin-bottom: 20px;
    }
    .it {
      position: relative;
    }
    .it::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #fff;
      bottom: -4px;
      left: 0;

      transition: all 0.2s ease-out;
    }
    a:hover {
      color: #fff !important;
    }
    a {
      color: #968896 !important;
    }
    .it:hover::after {
      width: 100%; /* Line expands to full width on hover */
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .right {
      padding: 10px;
    }
  }
}
</style>
