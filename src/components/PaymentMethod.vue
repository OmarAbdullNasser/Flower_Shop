<template>
  <div class="PayMethod">
    <div class="container">
      <div class="UserName text-center" v-if="Props.Data.id == 2">
        <label for="UserName">{{ $t("ThridName") }} </label>
        <p id="UserName" class="my-3">{{ Props.Data.other_info.user_name }}</p>
      </div>
      <div class="PhoneNumber text-center">
        <label for="PhoneNumber">{{ $t("ThridPhone") }} </label>
        <p id="PhoneNumber" class="my-3">{{ Props.Data.other_info.number }}</p>
      </div>
      <div class="QR">
        <img :src="Props.Data.other_info.qr_image" class="img-fluid" alt="" />
      </div>
      <div>
        <form
          @submit.prevent="emitImage"
          class="d-flex flex-column justify-content-center"
        >
          <label for="img">{{ $t("ThridIMG") }}</label>
          <input
            type="file"
            class="mx-auto my-3"
            @change="handleFileChange"
            accept="image/*"
          />
          <button class="w-50 mx-auto" type="submit" :disabled="!btn">
            {{ $t("Thridupload") }}
          </button>
        </form>
        <div
          v-if="feedback"
          :class="{ error: !isFileValid, success: isFileValid }"
        >
          {{ feedback }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from "vue";

const emits = defineEmits(["imageValidated"]);
const Props = defineProps(["Data"]);
const file = ref(null);
const isFileValid = ref(false);
const feedback = ref("");
const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const btn = ref(false);
const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];

  if (!selectedFile) {
    feedback.value = "Please select a file.";
    isFileValid.value = false;
    btn.value = false;
    return;
  }

  // Validate file MIME type
  if (!validImageTypes.includes(selectedFile.type)) {
    feedback.value = "Invalid file type. Please select a valid image.";
    isFileValid.value = false;
    btn.value = false;
    return;
  }

  // Validate file content
  const reader = new FileReader();
  reader.onload = (e) => {
    const arrayBuffer = e.target.result;
    const uint8Array = new Uint8Array(arrayBuffer);

    // Check headers for valid image content
    if (
      (selectedFile.type === "image/jpeg" &&
        uint8Array[0] === 0xff &&
        uint8Array[1] === 0xd8) ||
      (selectedFile.type === "image/png" &&
        uint8Array[0] === 0x89 &&
        uint8Array[1] === 0x50) ||
      (selectedFile.type === "image/gif" &&
        uint8Array[0] === 0x47 &&
        uint8Array[1] === 0x49) ||
      (selectedFile.type === "image/webp" &&
        uint8Array[8] === 0x57 &&
        uint8Array[9] === 0x45)
    ) {
      feedback.value = "File is valid. Ready to upload.";
      isFileValid.value = true;
      btn.value = true;
      file.value = selectedFile;
    } else {
      feedback.value = "File content does not match its type.";
      isFileValid.value = false;
      btn.value = false;
    }
  };
  reader.onerror = () => {
    feedback.value = "Error reading file.";
    isFileValid.value = false;
    btn.value = false;
  };

  reader.readAsArrayBuffer(selectedFile);
};

const emitImage = () => {
  if (isFileValid.value && file.value) {
    emits("imageValidated", file.value); // Emit the file to the parent
    feedback.value = "Image submitted successfully.";
    file.value = null; // Reset file
    isFileValid.value = true; // Reset validation status
    btn.value = false;
  }
};
onMounted(() => {});
</script>

<style>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
