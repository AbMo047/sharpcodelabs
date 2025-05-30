<template>
  <header class="flex justify-between p-3 items-center bg-opacity-50 relative z-20">
    <img src="../assets/image/logowhitetransparant.png" class="w-42" alt="Logo" />

    <!-- Mobile toggle -->
    <div class="md:hidden z-30">
      <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen" class="text-5xl">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50"/>
        </span>
        <span v-else class="text-5xl">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50"/>
        </span>
      </button>
    </div>

    <!-- Navbar -->
    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row pb-9',
        isMenuOpen ? 'block' : 'hidden'
      ]"
    >
      <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li v-for="item in menu" :key="item.href">
          <a
            :href="item.href"
            class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
            @click="scrollToSection(item.href)"
          >
            {{ t(item.name) }}
          </a>
        </li>
      </ul>

      <!-- Dropdown taalwissel -->
      <div class="relative mt-5 md:mt-0 md:ml-5 text-sm">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="flex items-center gap-2 text-white border px-3 py-1 rounded"
        >
          <img :src="activeLang.flag" alt="flag" class="w-5 h-3" />
          <span>{{ activeLang.label }}</span>
          <svg class="w-3 h-3 ml-1" fill="white" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>

        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 bg-white rounded shadow-lg z-50"
        >
          <ul>
            <li
              v-for="lang in languages"
              :key="lang.code"
              @click="selectLang(lang.code)"
              class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img :src="lang.flag" class="w-5 h-3" />
              <span class="text-gray-800">{{ lang.label }}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isMenuOpen = ref(false)
const dropdownOpen = ref(false)

const menu = [
  { name: 'services', href: '#services' },
  { name: 'about', href: '#about' },
  { name: 'skills', href: '#skills' },
  { name: 'projects', href: '#projects' },
  { name: 'testimonials', href: '#testimonials' },
  { name: 'contact', href: '#contact' },
]

const languages = [
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'nl', label: 'Nederlands', flag: 'https://flagcdn.com/w40/nl.png' },
  { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'fr', label: 'Francais', flag: 'https://flagcdn.com/w40/fr.png' },
];

const selectLang = (code) => {
  locale.value = code
  dropdownOpen.value = false
  localStorage.setItem('lang', code)
}

const activeLang = computed(() => {
  return languages.find(l => l.code === locale.value) || languages[0]
});

const scrollToSection = (href) => {
  isMenuOpen.value = false
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
