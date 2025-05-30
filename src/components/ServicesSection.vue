<template>
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">{{ $t("services.title") }}</h2>
        </div>
        <div class="py-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div v-for="service in services" :key="service.id" data-aos="fade-up" class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
            <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div>
                    <img :src="service.icon" alt="service icon"/>
                </div>
            </div>
            <div class="text-center">
                <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text=xl">
                    {{ t(service.name) }}
                </h3>
                <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    {{ t(service.description) }}
                </p>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue';
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const services = ref([
    {
        id:1,
        icon:'https://img.icons8.com/?size=100&id=H2EORRzDw6Km&format=png&color=FFFFFF',
        name:'saasCompanies',
        description:'saasDescription'
    },
    {
        id:2,
        icon:'https://img.icons8.com/?size=100&id=k1xXzD3NEvLF&format=png&color=FFFFFF',
        name:'documentationTitle',
        description:'documentationDescription'
    },
    {
        id:3,
        icon:'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name:'appsTitle',
        description:'appsDescription'
    },
    {
        id:4,
        icon:'/sharpcodelabs/image/ecommerce.png',
        name:'onlineEntrepreneurs',
        description:'bookingDescription'
    },
    {
        id:5,
        icon:'/sharpcodelabs/image/localbusiness.png',
        name:'localBusinesses',
        description:'portalsDescription'
    },
    {
        id:6,
        icon:'https://img.icons8.com/?size=100&id=999&format=png&color=FFFFFF',
        name:'startups',
        description:'mvpDescription'
    }
])
</script>

<style lang="css" scoped>
</style>