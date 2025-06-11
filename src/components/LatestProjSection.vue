<template>
  <section class="text-[#5a422e] mt-20" id="projects">
    <div class="px-4 xl:pl-16">
      <!-- Titel + filters -->
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold text-[#5a422e]">{{ $t("latestProjects") }}</h2>
        <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
          <button
            class="hover:text-[#b98e4d] transition"
            v-for="category in ['all', 'webDevelopment', 'mobileApp']"
            :key="category"
            @click="() => selectedCategory = category"
          >
            {{ t(category) }}
          </button>
        </div>
      </div>

      <!-- Projectenlijst -->
      <ul
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        data-aos="fade-right"
      >
        <div v-for="project in filteredProjects" :key="project.id">
          <!-- Project afbeelding + overlay -->
          <div
            class="h-52 md:h-[24rem] rounded-t-xl relative group"
            :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
          >
            <div
              class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
              hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500"
            >
              <a
                class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#b98e4d] hover:border-white"
                :href="project.webURL"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 6.75L1.5 12l5.25 5.25" />
                </svg>
              </a>
              <a
                class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#b98e4d] hover:border-white"
                :href="project.gitURL"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.57 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Project details -->
          <div class="text-[#5a422e] rounded-b-xl mt-3 bg-[#fdf7ef] shadow-lg border border-[#ecdcc3] py-6 px-4">
            <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ t(project.title) }}</h3>
            <p class="text-[#806b5b]">{{ t(project.description) }}</p>
            <div class="flex flex-wrap p-2.5">
              <div
                v-for="technology in project.technologies"
                :key="technology"
                class="text-center ml-1 mt-1 rounded-3xl bg-[#f8f4ef] text-[#5a422e] border border-[#d4c5b0]"
              >
                <p class="px-3 py-1 text-sm">{{ t(technology) }}</p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

const Projects = ref([
  {
    id: 1,
    category: 'webDevelopment',
    image: '/sharpcodelabs/image/project.png',
    title: 'bookingTitle',
    description: 'bookingDescriptionLong',
    technologies: ['Vue.js', 'Node.js', 'MySQL', 'Keycloak', 'Docker']
  },
  {
    id: 2,
    category: 'webDevelopment',
    image: '/sharpcodelabs/image/project.png',
    title: 'Digital Asset Management System (DAMS)',
    description: 'mediaDescription',
    technologies: ['Vue.js', 'GraphQL', 'Tailwind CSS']
  },
  {
    id: 3,
    category: 'webDevelopment',
    image: '/sharpcodelabs/image/project.png',
    title: 'agencyTitle',
    description: 'agencyDescription',
    technologies: ['Ember.js', 'Node.js']
  },
  {
    id: 4,
    category: 'mobileApp',
    image: '/sharpcodelabs/image/project2.png',
    title: 'automationTitle',
    description: 'automationDescription',
    technologies: ['Cypress', 'JavaScript']
  },
  {
    id: 5,
    category: 'webDevelopment',
    image: '/sharpcodelabs/image/project.png',
    title: 'iiifTitle',
    description: 'iiifDescription',
    technologies: ['Vue.js', 'IIIF', 'JavaScript']
  },
  {
    id: 6,
    category: 'mobileApp',
    image: '/sharpcodelabs/image/project2.png',
    title: 'clientAppTitle',
    description: 'clientAppDescription',
    technologies: ['React Native', 'Express.js']
  }
]);

const selectedCategory = ref('all');
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return Projects.value;
  }
  return Projects.value.filter(project => project.category === selectedCategory.value);
});
</script>
