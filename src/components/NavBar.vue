<template>
  <div>
    <!-- HEADER -->
    <header
      class="flex justify-between px-3 items-center bg-opacity-50 relative z-20"
    >
      <img
        src="../assets/image/logowhitetransparant.png"
        class="w-42"
        alt="SharpCodeLabs Logo"
      />

      <!-- Mobile toggle -->
      <div class="md:hidden z-30">
        <button
          type="button"
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen">
            <img
              src="https://img.icons8.com/ios-filled/100/dbb960/delete-sign.png"
              alt="Close"
              width="50"
              height="50"
            />
          </span>
          <span v-else>
            <img
              src="https://img.icons8.com/ios-filled/100/dbb960/menu--v6.png"
              alt="Menu"
              width="50"
              height="50"
            />
          </span>
        </button>
      </div>

      <!-- Navigation -->
      <nav
        :class="[
          'fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#fff8ed] md:relative md:bg-transparent md:flex md:justify-between md:flex-row pb-9',
          isMenuOpen ? 'block' : 'hidden',
        ]"
      >
        <ul
          class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
        >
          <li v-for="item in menu" :key="item.href">
            <a
              :href="item.href"
              class="block text-[#5a422e] transition hover:text-[#b98e4d] ease-linear text-2xl md:text-lg"
              @click="scrollToSection(item.href)"
            >
              {{ t(item.name, item.name) }}
            </a>
          </li>
        </ul>

        <!-- Language Dropdown -->
        <div class="relative mt-5 md:mt-0 md:ml-5 text-sm font-medium">
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="flex items-center gap-2 text-[#5a422e] border border-[#dbb960] bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <img :src="activeLang.flag" alt="flag" class="w-5 h-3 rounded-sm" />
            <svg class="w-3 h-3 ml-1" fill="#5a422e" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-40 bg-white border border-[#ecdcc3] rounded-xl shadow-xl z-50 transition-all duration-300"
          >
            <ul class="py-1">
              <li
                v-for="lang in languages"
                :key="lang.code"
                @click="selectLang(lang.code)"
                class="flex items-center gap-3 px-4 py-2 hover:bg-[#fff4e1] transition-all cursor-pointer"
              >
                <img :src="lang.flag" class="w-5 h-3 rounded-sm shadow-sm" />
                <span class="text-[#5a422e]">{{ lang.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- ✅ MAIN H1 (SEO-critical) -->
    <h1 class="text-3xl md:text-4xl font-bold text-center text-[#5a422e] mt-10 mb-6">
      {{ $t("welcomeHeadline")}}
    </h1>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const isMenuOpen = ref(false);
const dropdownOpen = ref(false);

const menu = [
  { name: "services", href: "#services" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "testimonials", href: "#testimonials" },
  { name: "contact", href: "#contact" },
];

const languages = [
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "nl", label: "Nederlands", flag: "https://flagcdn.com/w40/nl.png" },
  { code: "de", label: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
  { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
];

const selectLang = (code) => {
  locale.value = code;
  dropdownOpen.value = false;
  localStorage.setItem("lang", code);
};

const activeLang = computed(() => {
  return languages.find((l) => l.code === locale.value) || languages[0];
});

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  setTimeout(() => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 50);
};
</script>
