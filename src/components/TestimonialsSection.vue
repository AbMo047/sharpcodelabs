<template>
    <section class="text-white mt-20" id="testimonials" data-aos="zoom-in">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">{{$t("testimonials")}}</h2>
        <div class="px-4 xl:px-16">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="element in testimonials" :key="element.id">
                    <div class="carousel__item p-4">
                        <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-5 text-white font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img :src="element.image" alt="testimonial image" loading="lazy">
                                </div>
                                <h6 class="ml-4 font-bold text-sm uppercase text-white">{{ element.fullName }}</h6>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight">
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                    {{ t(element.comment) }}
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>

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
import { ref } from 'vue';
import {Carousel, Navigation,Slide} from 'vue3-carousel';
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
import 'vue3-carousel/dist/carousel.css';
//Carousel Settings
const settings = ref({
    itemsToShow:1,
    snapAlign:"center",
});

const breakpoints =ref({
    700:{
        itemsToShow:2.5,
        snapAlign:'center',
    },
    1024:{
        itemsToShow:3,
        snapAlign:'start'
    }
});

const testimonials = ref([
  {
    id: 1,
    fullName: 'Mohamed El M.',
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.1"
  },
  {
    id: 2,
    fullName: 'Jarno C.',
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.2"
  },
  {
    id: 3,
    fullName: 'Ricardo A.',
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.3"
  },
  {
    id: 4,
    fullName: 'Omar Y.',
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.4"
  },
  {
    id: 5,
    fullName: 'Yassine Y.',
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.5"
  },
  {
    id: 6,
    fullName: 'Oussama E.',
    image: "/sharpcodelabs/image/profilepic.jpg",
    comment: "testimonial.6"
  }
]);

</script>

<style scoped>
.carousel__prev, .carousel__next {
    color: white !important;
}
</style>