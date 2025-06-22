<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-5 right-5 bg-gradient-to-br from-[#dbb960] to-[#b98e4d] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ease-in-out rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
    aria-label="Scroll to top"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
