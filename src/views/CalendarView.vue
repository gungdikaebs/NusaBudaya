<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()
const events = computed(() => tm('events'))
</script>

<template>
  <main class="bg-[#F5F2EA] min-h-screen">
    <!-- Premium Hero Section (matching Traditions page) -->
    <section class="relative min-h-[500px] flex items-center justify-center pt-20 overflow-hidden bg-[#6B1B1E]">
      <!-- Background Image Texture -->
      <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
        <img src="/images/calendar_hero_bg.png" alt="Hero Background" class="w-full h-full object-cover " />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20 z-0"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
          {{ t('common.calendarPage.title') }}
        </h1>
        <!-- Golden separator line -->
        <div class="w-24 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
        <p class="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          {{ t('common.calendarPage.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Main Content List -->
    <section class="max-w-6xl mx-auto px-6 md:px-12 py-24">
      <!-- Section Header -->
      <div class="mb-12 flex items-center gap-4">
        <div class="w-1.5 h-8 bg-[#6B1B1E] rounded-full"></div>
        <h2 class="font-serif text-3xl font-semibold text-[#3A2318]">
          {{ t('common.calendarPage.sectionTitle') }}
        </h2>
      </div>

      <!-- Event Cards -->
      <div class="grid md:grid-cols-2 gap-10">
        <router-link v-for="event in events" :key="event.id" :to="`/event/${event.id}`"
          class="block bg-white rounded shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group border border-[#EBE7D8] cursor-pointer">

          <!-- Image Section with Overlay Date & Title -->
          <div class="h-72 relative overflow-hidden">
            <img :src="event.image" :alt="event.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <!-- Gradient for text readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <!-- Date Badge -->
            <div class="absolute top-5 left-5">
              <div
                class="bg-[#6B1B1E]/90 backdrop-blur-sm text-white rounded px-4 py-3 text-center border border-white/10 shadow-lg">
                <span class="block text-3xl font-serif font-bold leading-none">{{ event.dateObj.day }}</span>
                <span class="block text-[10px] font-bold tracking-widest uppercase mt-1 text-[#D4AF37]">{{
                  event.dateObj.month }}</span>
              </div>
            </div>

            <!-- Title Overlay -->
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-white font-serif text-2xl font-bold tracking-wide mb-1">{{ event.title }}</h3>
              <div class="flex items-center gap-2 text-[#D4AF37] text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ event.location }}
              </div>
            </div>
          </div>

          <!-- Text Content Section -->
          <div class="p-8 flex flex-col flex-1 bg-white relative">
            <!-- Time & Info Row -->
            <div class="flex items-center gap-4 mb-5">
              <div class="flex items-center gap-2 text-[#6B1B1E] text-xs font-bold tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ event.time }}
              </div>
            </div>

            <p class="text-[#5C4D43] text-[15px] leading-relaxed mb-8 flex-1 font-light">
              {{ event.shortDescription }}
            </p>

            <!-- Separator Line -->
            <div class="h-px w-full bg-[#EBE7D8] mb-6"></div>

            <span
              class="inline-flex items-center gap-2 text-[#6B1B1E] group-hover:text-[#A0282C] font-bold tracking-widest text-[11px] transition-colors">
              {{ t('common.calendarPage.viewDetail') }}
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>

        </router-link>
      </div>
    </section>
  </main>
</template>
