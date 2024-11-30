<template>
  <a
    @click.prevent="toggleDiv"
    target="_blank"
    class="whatsapp-icon"
    aria-label="Chat on WhatsApp"
  >
    <font-awesome-icon icon="fa-brands fa-whatsapp" />
  </a>
  <transition name="fade" mode="out-in">
    <div v-if="isDivVisible" class="whatsapp-info">
      <div class="card text-center">
        <div class="card-header">
          Our customer support team is here to answer your questions. Ask us
          anything!
        </div>
        <div class="card-body">
          <ul class="p-0">
            <li
              class="text-center"
              v-for="name in people"
              :key="name.id"
              @click="goToUrl(name.number)"
            >
              <a target="_blank" rel="noopener noreferrer">
                <h5 class="card-title">{{ name.title }}</h5>
                <small>Aavaiable</small>
              </a>
              <hr class="m-0" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

name: "WhatsAppIcon";
const isDivVisible = ref(false);
const route = useRoute();
const url = inject("url");
const people = ref([]);
const toggleDiv = () => {
  isDivVisible.value = !isDivVisible.value;
};

const FetchData = async (lang) => {
  const IconResponse = await fetch(`${url}/whatsapp-contacts/list`, {
    method: "GET", // Specify the method if needed
    headers: {
      "Accept-Language": `${lang}`,
    },
  });
  const respons = await IconResponse.json();
  const Content = respons.data;
  people.value = Content;
};
onMounted(async () => {
  await FetchData(route.params.lang);
});
function goToUrl(num) {
  window.location.href = `https://wa.me/${num}`;
}
</script>

<style lang="scss" scoped>
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  padding: 15px;
  font-size: 24px;
  z-index: 1000;
  cursor: pointer;
  text-align: center;
}
.whatsapp-info {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  transition: display 1s ease-in-out;

  .card {
    .card-header {
      background: #400a3f;
      color: #fff;
    }
    .card-body {
      ul {
        list-style: none;
        li {
          padding: 20px;
          margin: 5px 0;
          background-color: #f9f9f9;
          border-radius: 6px;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          a {
            color: #400a3f;
          }
          transition: all 0.3s;
          &:hover {
            transform: scale(1.05); /* Scale up */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Enhanced box shadow */
          }
        }
      }
    }
  }
}

.fade-enter-active {
  animation: smooth-bounce-in 0.8s ease-in-out; /* Increased duration for smoother effect */
}

.fade-leave-active {
  animation: smooth-bounce-out 0.5s ease-in-out; /* Smooth reverse effect */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Keyframes for Smooth Bounce-In */
@keyframes smooth-bounce-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  40% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.95);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Keyframes for Smooth Bounce-Out */
@keyframes smooth-bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    transform: scale(1.05);
    opacity: 0.8;
  }

  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}
</style>
