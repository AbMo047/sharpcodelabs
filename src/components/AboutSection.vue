<template>
  <section class="text-[#5a422e] mt-18" id="about">
    <!-- Background Glow -->
    <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
      <div class="h-24 w-64 bg-gradient-to-br from-[#b98e4d] via-[#f8c87a] to-[#eed5ae] blur-2xl opacity-20"></div>
    </div>

    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
      <!-- Education Section -->
      <div data-aos="flip-right">
        <h2 class="text-4xl font-bold text-[#5a422e] text-left mb-8">{{ $t("education") }}</h2>

        <div class="space-y-8 py-8">
          <div
            v-for="element in education"
            :key="element.id"
            class="flex items-center md:w-[80%] w-full rounded-xl bg-[#fdf7ef] shadow-lg border border-[#ecdcc3]"
          >
            <div class="w-1/4 p-4">
              <img src="https://img.icons8.com/ios-glyphs/60/dbb960/graduation-cap--v1.png" alt="graduation" />
            </div>

            <div class="w-3/4 pl-2">
              <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#b98e4d] to-[#f8c87a] lg:text-xl">
                {{ $t(element.School, element.School) }}
              </h3>
              <p class="text-[#777777]">{{ $t(element.program, element.program) }}</p>
              <p class="text-[#777777]">{{ element.year }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
        <h2 class="text-4xl font-bold text-[#5a422e] md:text-center text-left mb-4">
          {{ $t("more") }}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#b98e4d] to-[#f8c87a]">{{ $t("more.about") }}</span>
          {{ $t("me") }}
        </h2>

        <p class="text-base lg:text-lg mt-8 py-8 text-[#777777]">
          {{ $t("aboutDescription") }}
        </p>

        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
          <div class="text-center rounded-xl bg-[#fdf7ef] shadow-lg border border-[#ecdcc3] p-3">
            <h3 class="text-[#5a422e] font-bold text-xl sm:text-2xl lg:text-3xl">+40</h3>
            <p class="text-sm sm:text-base text-[#949494]">{{ $t("happyClient") }}</p>
          </div>

          <div class="text-center rounded-xl bg-[#fdf7ef] shadow-lg border border-[#ecdcc3] p-3">
            <h3 class="text-[#5a422e] font-bold text-xl sm:text-2xl lg:text-3xl">+70</h3>
            <p class="text-sm sm:text-base text-[#949494]">{{ $t("project") }}</p>
          </div>

          <div class="text-center rounded-xl bg-[#fdf7ef] shadow-lg border border-[#ecdcc3] p-3">
            <h3 class="text-[#5a422e] font-bold text-xl sm:text-2xl lg:text-3xl">+4</h3>
            <p class="text-sm sm:text-base text-[#949494]">{{ $t("yearsExperience") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const education = ref([
  { id: 1, School: 'school', program: 'program.graduate', year: '2021 – 2023' },
  { id: 2, School: 'school', program: 'program.electronics', year: '2017-2021' }
]);
</script>
