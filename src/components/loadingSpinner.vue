<template>
    <div class="flex justify-center items-center h-full">
        <svg class="animate-spin h-16 w-16 text-white" xlmns="http://www.w3.org/2000svg" viewBox="0 0 24 24">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f59e0b"/>
                    <stop offset="100%" stop-color="#f59e0b"/>
                </linearGradient>
            </defs>
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="url(#gradient)" stroke-width="4" fill="none"></circle>
            <path fill="#f59e0b" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
    </div>
</template>

<script setup></script>