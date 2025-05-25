<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
                <h2 class="text-4xl font-bold text-white text-left mb-4">My
                    <span class="text-transparant bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>
                <div class="mt-8" v-for="skill in Skills" :key="skill.id">
                    <div class="flex-items-end justify-between" data-aos="fade-right">
                        <h4 class="font-semibold uppercase text-white">
                            {{ skill.name }}
                        </h4>
                        <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
                    </div>
                    <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                        <div class="h-1 rounded-full bg-primary" :style="`width :${skill.width}`"></div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experiences" :key="element.id"
                    class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border-[#1f1641]">
                    <div class="pr-3">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer picture">
                    </div>
                    <div class="w-3/4 p1-4">
                        <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {{ element.role }}
                        </h3>
                        <p class="text-white">{{ element.company }}</p>
                        <p class="text-white">{{ element.date }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const Skills = ref([
  {
    id: 1,
    name: 'Vue.js (with Tailwind & GraphQL)',
    width: '85%' // Gebaseerd op meerdere projecten (Booking System, DAMS, IIIF)
  },
  {
    id: 2,
    name: 'Node.js (incl. Keycloak, Docker)',
    width: '80%' // Full-stack werk in Booking System & Government Portaal
  },
  {
    id: 3,
    name: 'JavaScript / TypeScript',
    width: '75%' // Overkoepelend in vrijwel alle projecten
  },
  {
    id: 4,
    name: 'Cypress (E2E Testing)',
    width: '65%' // Park & Seat Automation Project
  }
]);


const Experiences = ref([
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Self-employed – SharpCode Labs',
    date: 'Nov 2024 – Present'
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Inuits, Antwerpen',
    date: 'Feb 2023 – Sep 2024'
  },
  {
    id: 3,
    role: 'Technical Support Engineer',
    company: 'Beego, Antwerpen',
    date: 'Mar 2021 – Mar 2022'
  }
]);

</script>