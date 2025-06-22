<template>
  <section class="text-[#5a422e] mt-20" id="testimonials" data-aos="zoom-in">
    <h2 class="text-4xl font-bold text-[#5a422e] text-left mb-4 px-4 xl:pl-16">
      {{ $t("testimonials") }}
    </h2>
    <div class="px-4 xl:px-16">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="element in testimonials" :key="element.id">
          <div class="carousel__item p-4">
            <div
              class="w-full mx-auto bg-[#fdf7ef] shadow-lg border border-[#ecdcc3] p-5 text-[#5a422e] font-light mb-6 rounded-xl"
            >
              <div class="w-full flex mb-4 items-center">
                <div
                  class="overflow-hidden rounded-full w-10 h-10 bg-gray-100 border border-[#d4c5b0]"
                >
                  <img
                    :src="element.image"
                    alt="testimonial image"
                    loading="lazy"
                  />
                </div>
                <h6 class="ml-4 font-bold text-sm uppercase text-[#5a422e]">
                  {{ element.fullName }}
                </h6>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span
                    class="text-lg leading-none italic font-bold text-[#b98e4d] mr-1"
                    >“</span
                  >
                  {{ t(element.comment) }}
                  <span
                    class="text-lg leading-none italic font-bold text-[#b98e4d] ml-1"
                    >”</span
                  >
                </p>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import "vue3-carousel/dist/carousel.css";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  700: {
    itemsToShow: 2.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});

const testimonials = ref([
  {
    id: 1,
    fullName: "Mohamed El M.",
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.1",
  },
  {
    id: 2,
    fullName: "Jarno C.",
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.2",
  },
  {
    id: 3,
    fullName: "Ricardo A.",
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.3",
  },
  {
    id: 4,
    fullName: "Omar Y.",
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.4",
  },
  {
    id: 5,
    fullName: "Yassine Y.",
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.5",
  },
  {
    id: 6,
    fullName: "Oussama E.",
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.6",
  },
]);
</script>

<style scoped>
.carousel__prev,
.carousel__next {
  color: #5a422e !important;
}
</style>
