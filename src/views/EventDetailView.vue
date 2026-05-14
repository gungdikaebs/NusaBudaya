<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t, tm, locale } = useI18n()

const eventId = route.params.id
const event = computed(() => {
  const events = tm('events')
  return Array.isArray(events) ? events.find(e => e.id === eventId) : null
})

// Optional: go back if event not found
if (!event.value) {
  router.push('/')
}
</script>

<template>
  <main v-if="event" class="bg-brand-cream-dark min-h-screen pb-24">
    <!-- Hero Detail Section -->
    <section class="relative h-[60vh] min-h-[400px] flex items-end pb-16 px-6 md:px-12">
      <div class="absolute inset-0 z-0">
        <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-brand-brown via-black/40 to-black/10"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 text-brand-gold font-bold tracking-widest text-sm mb-4 bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-gold/30 text-lime-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ event.dateObj.day }} {{ event.dateObj.month }} {{ event.dateObj.year }}
          </div>
          <h1 class="text-white font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            {{ event.title }}
          </h1>
          <div class="flex items-center gap-2 text-white/90 text-lg font-medium drop-shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-gold" fill="none" viewBox="0 0 24 24"
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
    </section>

    <!-- Content Section -->
    <section class="max-w-6xl mx-auto px-6 md:px-12 -mt-8 relative z-20">
      <div class="flex flex-col lg:flex-row gap-12">

        <!-- Left Content: Description & Schedule -->
        <div class="flex-1 bg-white p-8 md:p-12 rounded-xl shadow-xl shadow-brand-brown/5 border-t-4 border-brand-gold">
          <h2 class="font-serif text-3xl font-semibold text-brand-brown-light mb-6">{{ t('common.eventDetail.about') }}
          </h2>
          <p class="text-brand-brown/80 text-lg leading-relaxed mb-12 font-light text-justify">
            {{ event.fullDescription }}
          </p>

          <h3 class="font-serif text-2xl font-semibold text-brand-brown-light mb-6 flex items-center gap-3">
            <div class="w-8 h-8 rounded bg-brand-cream flex items-center justify-center text-brand-gold">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {{ t('common.eventDetail.schedule') }}
          </h3>
          <div class="space-y-6">
            <div v-for="(item, index) in event.schedule" :key="index"
              class="flex gap-6 items-start relative pb-6 border-b border-brand-brown/10 last:border-0 last:pb-0">
              <div class="w-24 flex-shrink-0 text-brand-gold font-bold font-serif text-xl pt-0.5">
                {{ item.time }}
              </div>
              <div class="flex-1">
                <p class="text-brand-brown font-medium text-lg">{{ item.activity }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content: Info Card -->
        <div class="w-full lg:w-[380px] flex-shrink-0 space-y-6">
          <div class="bg-brand-brown-light text-white p-8 rounded-xl shadow-lg">
            <h3 class="font-serif text-xl font-semibold mb-6 text-brand-gold">{{ t('common.eventDetail.importantInfo')
              }}</h3>

            <div class="space-y-6">
              <div>
                <span class="block text-brand-gold/70 text-xs font-bold tracking-widest uppercase mb-1">{{
                  t('common.eventDetail.time') }}</span>
                <p class="font-medium">{{ event.time }}</p>
              </div>

              <div>
                <span class="block text-brand-gold/70 text-xs font-bold tracking-widest uppercase mb-1">{{
                  t('common.eventDetail.location') }}</span>
                <p class="font-medium mb-3">{{ event.location }}</p>
                <div class="w-full h-32 bg-brand-brown/40 rounded overflow-hidden relative group cursor-pointer">
                  <!-- Fake Map Image -->
                  <div class="absolute inset-0 bg-[#2C1A11] opacity-50 group-hover:opacity-30 transition-opacity"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-gold" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <span class="absolute bottom-2 left-2 text-xs font-medium bg-black/60 px-2 py-1 rounded">{{
                    t('common.eventDetail.viewMap') }}</span>
                </div>
              </div>

              <div class="pt-4 border-t border-white/10">
                <span class="block text-brand-gold/70 text-xs font-bold tracking-widest uppercase mb-2">{{
                  t('common.eventDetail.dressCode') }}</span>
                <div class="flex items-start gap-3 bg-white/5 p-4 rounded border border-brand-gold/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p class="text-sm text-white/90 leading-relaxed font-light">{{ event.dressCode }}</p>
                </div>
              </div>
            </div>

            <button
              class="w-full mt-8 bg-brand-gold hover:bg-brand-gold-dark text-brand-brown-light py-4 rounded font-bold tracking-widest text-sm transition-colors">
              {{ t('common.eventDetail.addToCalendar') }}
            </button>
          </div>

          <router-link to="/calendar"
            class="flex items-center justify-center gap-2 w-full py-4 text-brand-brown-light font-bold text-sm tracking-widest hover:text-brand-gold transition-colors bg-white rounded-xl shadow-sm border border-brand-brown/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ t('common.eventDetail.backToCalendar') }}
          </router-link>
        </div>

      </div>
    </section>
  </main>
</template>
