<template>
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
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
                    {{ service.name }}
                </h3>
                <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    {{ service.description }}
                </p>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue';
const services = ref([
    {
        id:1,
        icon:'https://img.icons8.com/?size=100&id=H2EORRzDw6Km&format=png&color=FFFFFF',
        name:'SaaS Companies',
        description:'I build scalable, component-based frontends and integrate powerful APIs to support your SaaS growth.'
    },
    {
        id:2,
        icon:'https://img.icons8.com/?size=100&id=k1xXzD3NEvLF&format=png&color=FFFFFF',
        name:'Documentation & Developer Guides',
        description:'Clear, structured documentation that makes your product easier to adopt - for users and developers alike.'
    },
    {
        id:3,
        icon:'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name:'Progressive Web & Mobile Apps',
        description:'Fast-loading, cross-platform apps that feel native and work seamlessly on all devices.'
    },
    {
        id:4,
        icon:'/sharpcodelabs/image/ecommerce.png',
        name:'Online Entrepeneurs',
        description:'Custom booking systems, payment flows, and funnels designed to help you sell, convert and automate.'
    },
    {
        id:5,
        icon:'/sharpcodelabs/image/localbusiness.png',
        name:'Local Businesses',
        description:'Smart client portals and internal tools that save you time and simplify your workflow.'
    },
    {
        id:6,
        icon:'https://img.icons8.com/?size=100&id=999&format=png&color=FFFFFF',
        name:'Startups',
        description:'I help you launch fast with reliable MVPs - built to validate, iterate and scale with confidence.'
    }
])
</script>

<style lang="css" scoped>
</style>