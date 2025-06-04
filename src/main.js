import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/index.css';
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json';
import NL from './locale/nl.json';
import DE from './locale/de.json';
import FR from './locale/fr.json';

const app = createApp(App);
const savedLang = localStorage.getItem('lang') || 'en'

const i18n = createI18n({
  locale: savedLang,
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  fallbackWarn: false,
  missingWarn: false,
  messages: {
    en: EN,
    nl: NL,
    de: DE,
    fr: FR,
  }
})


app.use(i18n);
app.use(router);
app.mount('#app');