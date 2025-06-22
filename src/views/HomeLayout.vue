<template>
  <Suspense>
    <template #default>
      <div>
        <NavBar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ExperienceAndSkills />
        <LatestProjSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <BackToTop />
      </div>
    </template>
    <template #fallback>
      <div class="flex justify-center items-center min-h-screen">
        <loadingSpinner />
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import loadingSpinner from "../components/loadingSpinner.vue";
//Import Components Asynchronously
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const HeroSection = defineAsyncComponent(
  () => import("@/components/HeroSection.vue"),
);
const ServicesSection = defineAsyncComponent(
  () => import("@/components/ServicesSection.vue"),
);
const AboutSection = defineAsyncComponent(
  () => import("@/components/AboutSection.vue"),
);
const TestimonialsSection = defineAsyncComponent(
  () => import("@/components/TestimonialsSection.vue"),
);
const ExperienceAndSkills = defineAsyncComponent(
  () => import("@/components/ExperienceAndSkills.vue"),
);
const LatestProjSection = defineAsyncComponent(
  () => import("@/components/LatestProjSection.vue"),
);
const ContactSection = defineAsyncComponent(
  () => import("@/components/ContactSection.vue"),
);
const Footer = defineAsyncComponent(
  () => import("@/components/BaseFooter.vue"),
);
const BackToTop = defineAsyncComponent(
  () => import("@/components/BackToTop.vue"),
);
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>
