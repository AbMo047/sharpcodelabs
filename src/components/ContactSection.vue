<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">{{ $t("letsConnect") }}</h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">
                   {{ $t("contactDescription") }}
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                        style="background: #111a3e; width: 50px; height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid #111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                        >
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>{{ $t("form.email") }}</h4>
                            <p>xxxxxx@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                        style="background: #111a3e; width: 50px; height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid #111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                        >
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>{{ $t("form.phone") }}</h4>
                            <p><a href="tel:+32470845712">+324 70 84 57 12</a></p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                    <a 
                        href="https://www.linkedin.com/in/youssefjhr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit Youssef's LinkedIn profile"
                        title="LinkedIn – Youssef J"
                        class="flex items-center gap-4"
                    >
                    <div style="background: #111a3e; width: 50px; height: 46px; display: flex; justify-content: center; align-items: center; border-radius: 50%; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn icon" class="w-6 h-6" />
                    </div>
                        <div class="text-white">
                                    <h4 class="text-sm font-semibold">{{ $t("form.linkedin") }}</h4>
                                <p class="text-xs">Youssef J</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div
            style="background: #111a3e; width: 100%;height: 100%; border-radius: 20px;
            overflow: hidden; border: 1px solid #111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
            <div v-if="successMessage" class="mb-4 bg-green-600 text-white px-4 py-2 rounded text-sm">Message sent successfully</div>
            <form ref="form" @submit.prevent="sendEmail" class="flex flex-col p-2" data-aos="zoom-in-up">
                <div class="mb-6">
                    <label for="email" class="text-white block mb-2 text-sm font-medium">{{ $t("form.email") }}</label>
                    <input type="email" id="email" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="email@gmail.com" name="email">
                </div>
                <div class="mb-6">
                    <label for="subject" class="text-white block mb-2 text-sm font-medium">{{ $t("form.subject") }}</label>
                    <input type="subject" id="subject" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    :placeholder="t('form.subject')" name="subject">
                </div>
                <div class="mb-6">
                    <label for="message" class="text-white block mb-2 text-sm font-medium">{{ $t("form.message") }}</label>
                    <textarea id="Message" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    :placeholder="t('form.topicPlaceholder')" name="message"></textarea>
                </div>
                <button
                type="submit" 
                class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent">
                    {{ $t("form.send") }}
                </button>
            </form>
        </div>
        </div>
        <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3
        -translate-1/2
        "></div>
    </section>
</template>
<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n();

const form = ref(null);
const successMessage = ref(false);

const sendEmail = () => {
    if(!form.value) return;
        emailjs.sendForm('service_xeevn5d', 'template_t4d6j85', form.value, {
        publicKey: 'zsL63t-k_iURPo_VM'
    }).then(()=> {
        successMessage.value = true;
        console.log('SUCCESS')
        resetForm();

        setTimeout(() => {
            successMessage.value = false;
        }, 4000);
    }).catch(error => {
        console.log('Failed....', error.text)
    });
};
const resetForm = () => {
    form.value.reset();
}
</script>