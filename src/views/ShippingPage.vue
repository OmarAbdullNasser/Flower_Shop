<template>
  <div class="ShippingPage p-lg-5 p-3 my-3 mx-2 mx-lg-5">
    <div class="container">
      <div class="Data d-flex justify-content-lg-between">
        <h5>ORDER <span>#Y34XDHR</span></h5>
        <h5>Expected Arrival 01/12/19</h5>
      </div>

      <div
        ref="barElement"
        class="bar d-flex align-items-center justify-content-between my-lg-5"
      >
        <div
          class="progress-fill"
          :style="{ width: progressWidth + '%' }"
        ></div>

        <div class="checkPoint frist" id="Recived"></div>
        <div class="checkPoint second" id="Preparing"></div>
        <div class="checkPoint thrid" id="InWay"></div>
        <div class="checkPoint fourth" id="Arrived"></div>
      </div>

      <div
        class="status d-flex align-items-center justify-content-between mt-3 mx-lg-auto"
      >
        <div class="OrderProcessed">
          <font-awesome-icon icon="fa-solid fa-dolly" />

          <span> Recived <br />Processed </span>
        </div>
        <div class="OrderShipped">
          <font-awesome-icon icon="fa-solid fa-truck-fast" />
          <span class="ms-1"
            >Order<br />

            Preparing</span
          >
        </div>
        <div class="OrderInWay">
          <font-awesome-icon icon="fa-solid fa-motorcycle" />
          <span class="ms-1"
            >Order<br class="d-none d-lg-block" />
            in Way</span
          >
        </div>
        <div class="OrderArrived">
          <font-awesome-icon icon="fa-solid fa-house-flag" />
          <span> Order <br />Arrived </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "Shipping";
import { ref, onMounted, inject } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();
const barElement = ref(null); // Reference to the .bar element
const progressWidth = ref(0); // Variable to store the dynamic width of the progress fill

const url = inject("url");

const getStatus = async (lang, id) => {
  try {
    const StatusResponse = await fetch(
      `${url}/show-order-shipping-status/${id}	`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Language": `${lang}`,
          "Content-Type": "application/json",
        },
      }
    );
    const respon = await StatusResponse.json();
    const Data = respon.data;

    const shippingStatuses = Data.map((item) => item.shipping_status);
    activeState(shippingStatuses);
    ColorBar();
  } catch (error) {
    console.error("Error fetching shipping status:", error);
  }
};
const activeState = (statuses) => {
  // Map statuses to their corresponding DOM elements
  const statusMap = {
    Recived: document.getElementById("Recived"),
    Preparing: document.getElementById("Preparing"),
    delivering: document.getElementById("InWay"),
    delivered: document.getElementById("Arrived"),
  };

  // Reset all states first
  Object.values(statusMap).forEach((element) =>
    element.classList.remove("active")
  );

  // Add the "active" class to all statuses up to the current one
  statuses.forEach((status) => {
    const element = statusMap[status];
    if (element) {
      element.classList.add("active");
    }
  });
};
const ColorBar = () => {
  const checkpoints = barElement.value.querySelectorAll(".checkPoint");
  const activeCheckpoints = Array.from(checkpoints).filter((checkpoint) =>
    checkpoint.classList.contains("active")
  );

  if (activeCheckpoints.length > 0) {
    const activeIndex = Array.from(checkpoints).indexOf(
      activeCheckpoints[activeCheckpoints.length - 1]
    );

    for (let i = 0; i <= activeIndex; i++) {
      const checkpoint = checkpoints[i];

      // Create the Font Awesome icon element
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-check");

      // Append the icon to the checkpoint if not already added
      if (!checkpoint.querySelector(".fa-check")) {
        checkpoint.appendChild(icon);
      }
      checkpoint.style.backgroundColor = "#431934";
    }

    progressWidth.value = (activeIndex / (checkpoints.length - 1)) * 100;
  }
};
onMounted(() => {
  getStatus(route.params.lang, route.params.id);
});
</script>

<style lang="scss" scoped>
.ShippingPage {
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  .Data {
    h5 span {
      color: #843e78;
    }
  }

  .bar {
    position: relative;
    height: 10px;
    background: #bbb;
    width: 50%;
    margin: 0 auto;
    .progress-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: #431934;
      z-index: 0;
      transition: width 0.3s ease;
    }

    .checkPoint {
      position: relative;
      height: 40px;
      width: 40px;
      background: #bbb;
      border-radius: 50%;
      color: #fff;
      line-height: 30px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      &.fourth {
        left: 2px;
      }
    }
  }
  .status {
    width: 53%;
    svg {
      height: 1.5rem;
    }
  }
}

@media screen and (max-width: 991.91px) {
  .ShippingPage {
    .Data {
      gap: 1rem;
      margin-bottom: 2rem;
      h5 {
        font-size: 1rem;
      }
    }
    .bar {
      width: 100%;
      gap: 1rem;
      .checkPoint {
        height: 25px;
        width: 25px;
        line-height: 15px;
      }
    }
    .status {
      width: 100%;
      font-size: 0.7rem;
      gap: 1rem;
      text-align: center;
      margin-top: 3rem;
      svg {
        height: 0.8rem;
      }
    }
  }
}
</style>
