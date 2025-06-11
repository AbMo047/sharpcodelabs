<template>
  <div class="flex justify-center items-center h-full">
    <svg class="animate-spin h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dbb960" />
          <stop offset="100%" stop-color="#b98e4d" />
        </linearGradient>
      </defs>
      <!-- Cirkel voor de basis -->
      <circle
        class="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="url(#gold-gradient)"
        stroke-width="4"
        fill="none"
      ></circle>
      <!-- Spinner Path -->
      <path
        fill="#dbb960"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  </div>
</template>

<script setup></script>
