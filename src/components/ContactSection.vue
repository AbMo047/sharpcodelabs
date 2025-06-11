<template>
  <section class="text-[#5a422e] mt-20" id="contact">
    <h2 class="text-4xl font-bold text-[#5a422e] text-left mb-4 px-4 xl:pl-16">
      {{ $t("letsConnect") }}
    </h2>

    <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
      <!-- Contactgegevens -->
      <div>
        <p class="text-[#886f4a]">
          {{ $t("contactDescription") }}
        </p>

        <div class="mt-5 space-y-10">
          <!-- Email -->
          <div class="flex items-center">
            <div class="p-2 bg-[#fdf7ef] border border-[#ecdcc3] rounded-full flex justify-center items-center w-12 h-12">
              <img src="https://img.icons8.com/metro/50/5a422e/new-post.png" alt="email icon" class="w-5" />
            </div>
            <div class="ml-5">
              <h4 class="text-sm font-semibold">{{ $t("form.email") }}</h4>
              <p class="text-sm">xxxxxx@gmail.com</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-center">
            <div class="p-2 bg-[#fdf7ef] border border-[#ecdcc3] rounded-full flex justify-center items-center w-12 h-12">
              <img src="https://img.icons8.com/ios-filled/50/5a422e/phone.png" alt="phone icon" class="w-5" />
            </div>
            <div class="ml-5">
              <h4 class="text-sm font-semibold">{{ $t("form.phone") }}</h4>
              <p class="text-sm"><a href="tel:+32470845712">+324 70 84 57 12</a></p>
            </div>
          </div>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/youssefjhr/" target="_blank" class="flex items-center gap-4">
            <div class="p-2 bg-[#fdf7ef] border border-[#ecdcc3] rounded-full flex justify-center items-center w-12 h-12">
              <img src="https://img.icons8.com/ios-filled/50/5a422e/linkedin.png" alt="LinkedIn icon" class="w-5 h-5" />
            </div>
            <div>
              <h4 class="text-sm font-semibold">{{ $t("form.linkedin") }}</h4>
              <p class="text-xs">Youssef J</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Formulier -->
      <div class="bg-[#fdf7ef] border border-[#ecdcc3] rounded-2xl p-6 shadow-md">
        <div v-if="successMessage" class="mb-4 bg-green-100 text-[#5a422e] px-4 py-2 rounded text-sm">
          Message sent successfully
        </div>
        <form ref="form" @submit.prevent="sendEmail" class="flex flex-col gap-4">
          <div>
            <label for="email" class="block mb-1 text-sm font-medium">{{ $t("form.email") }}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@gmail.com"
              class="bg-white border border-[#ecdcc3] text-[#5a422e] text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-[#d4bfa3] focus:outline-none"
            />
          </div>

          <div>
            <label for="subject" class="block mb-1 text-sm font-medium">{{ $t("form.subject") }}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              :placeholder="t('form.subject')"
              class="bg-white border border-[#ecdcc3] text-[#5a422e] text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-[#d4bfa3] focus:outline-none"
            />
          </div>

          <div>
            <label for="message" class="block mb-1 text-sm font-medium">{{ $t("form.message") }}</label>
            <textarea
              id="message"
              name="message"
              :placeholder="t('form.topicPlaceholder')"
              class="bg-white border border-[#ecdcc3] text-[#5a422e] text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-[#d4bfa3] focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            aria-label="Send contact message"
            class="bg-[#ecdcc3] text-[#5a422e] border-2 border-transparent rounded-full py-3 px-6 w-full sm:w-max hover:bg-[#e3d2b9] hover:text-[#4b3621] transition-all hover:scale-105"
          >
            {{ $t("form.send") }}
          </button>
        </form>
      </div>
    </div>

    <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-[#ecdcc3] blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"></div>
  </section>
</template>

<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const form = ref(null);
const successMessage = ref(false);

const sendEmail = () => {
  if (!form.value) return;

  emailjs
    .sendForm('service_xeevn5d', 'template_t4d6j85', form.value, {
      publicKey: 'zsL63t-k_iURPo_VM',
    })
    .then(() => {
      successMessage.value = true;
      resetForm();
      setTimeout(() => {
        successMessage.value = false;
      }, 4000);
    })
    .catch((error) => {
      console.error('Failed to send message:', error.text);
    });
};

const resetForm = () => {
  form.value.reset();
};
</script>
