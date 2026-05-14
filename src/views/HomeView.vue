<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

// Use tm() to extract objects/arrays from the messages
const hero = computed(() => tm('home.hero'))
const features = computed(() => tm('home.features'))
const events = computed(() => tm('events'))
const homeEvents = computed(() => {
  const all = tm('events')
  return Array.isArray(all) ? all.slice(0, 3) : []
})
const highlight = computed(() => tm('home.highlight'))
const calendar = computed(() => tm('home.calendar'))
const newsletter = computed(() => tm('home.newsletter'))

// Map feature IDs to their corresponding routes
const featureRoutes = {
  sejarah: '/traditions',
  kalender: '/calendar',
  panduan: '/help'
}
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img :src="hero.bgImage" alt="Balinese Temple" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-brand-cream"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto mt-20">
        <p class="text-brand-gold font-bold tracking-[0.2em] text-sm md:text-base mb-6 drop-shadow-md">
          {{ hero.smallText }}
        </p>
        <h1
          class="text-white font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-xl whitespace-pre-line">
          {{ hero.title }}
        </h1>
        <p class="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 drop-shadow-md">
          {{ hero.description }}
        </p>
        <router-link to="/calendar"
          class="inline-block bg-brand-brown/80 hover:bg-brand-brown text-brand-gold border border-brand-gold/50 backdrop-blur-sm px-8 py-4 rounded-md tracking-widest text-sm font-medium transition-all">
          {{ hero.buttonText }}
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 px-6 md:px-12 bg-brand-cream text-center relative z-20 -mt-10">
      <h2 class="font-serif text-4xl md:text-5xl font-semibold mb-4 text-brand-brown-light">{{ features.title }}</h2>
      <p class="text-brand-brown/70 max-w-2xl mx-auto mb-16 text-lg">
        {{ features.description }}
      </p>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Dynamic Features -->
        <router-link v-for="feature in features.items" :key="feature.id" :to="featureRoutes[feature.id] || '/'"
          class="bg-white rounded-xl shadow-lg shadow-brand-brown/5 overflow-hidden flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300 no-underline">
          <div class="h-56 relative overflow-hidden">
            <img :src="feature.image" :alt="feature.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div class="relative pt-12 pb-10 px-8 flex-1 flex flex-col items-center">
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-cream rounded-full border-4 border-white flex items-center justify-center text-brand-gold shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
              </svg>
            </div>
            <h3 class="font-serif text-2xl font-semibold mb-3 text-brand-brown-light">{{ feature.title }}</h3>
            <p class="text-brand-brown/70 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </router-link>
      </div>

      <!-- Separator -->
      <div class="flex justify-center items-center gap-2 mt-20">
        <div class="w-2 h-2 rounded-full bg-brand-gold"></div>
        <div class="w-2 h-2 rounded-full bg-brand-brown/20"></div>
        <div class="w-2 h-2 rounded-full bg-brand-brown/20"></div>
      </div>
    </section>

    <!-- Calendar Section -->
    <section class="py-24 px-6 md:px-12 bg-brand-cream-dark">
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="font-serif text-4xl md:text-5xl font-semibold mb-4 text-brand-brown-light">{{ calendar.title }}</h2>
        <p class="text-brand-brown/70 text-lg">
          {{ calendar.description }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-4">
        <!-- Dynamic Events -->
        <div v-for="event in homeEvents" :key="event.id"
          class="bg-white flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-brand-brown/20 hover:border-brand-gold transition-colors">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 w-full">
            <div class="text-center md:text-left min-w-[100px]">
              <span class="block text-4xl font-serif font-bold text-brand-brown-light">{{ event.dateObj.day }}</span>
              <span class="block text-sm font-semibold tracking-widest text-brand-brown/60 uppercase">{{
                event.dateObj.month }}<br />{{ event.dateObj.year }}</span>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="font-serif text-2xl font-semibold mb-2">{{ event.title }}</h3>
              <div
                class="flex items-center justify-center md:justify-start gap-2 text-brand-gold text-sm mb-2 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ event.location }}
              </div>
              <p class="text-brand-brown/60 text-sm">{{ event.shortDescription }}</p>
            </div>
            <div class="mt-6 md:mt-0 flex-shrink-0">
              <router-link :to="`/event/${event.id}`"
                class="inline-block border border-brand-brown-light text-brand-brown-light hover:bg-brand-brown-light hover:text-white px-6 py-2 rounded text-sm tracking-widest font-semibold transition-colors">
                {{ calendar.viewDetail }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link to="/calendar"
          class="inline-flex items-center gap-2 text-brand-brown-light font-bold text-sm tracking-widest hover:text-brand-gold transition-colors">
          {{ calendar.viewAll }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </router-link>
      </div>

      <!-- Separator -->
      <div class="flex justify-center items-center gap-2 mt-24">
        <div class="w-2 h-2 rounded-full bg-brand-gold"></div>
        <div class="w-2 h-2 rounded-full bg-brand-brown/20"></div>
        <div class="w-2 h-2 rounded-full bg-brand-brown/20"></div>
      </div>
    </section>

    <!-- Highlight Section -->
    <section class="bg-[#3A2318] text-white overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <!-- Image Left -->
        <div class="w-full md:w-1/2 p-6 md:p-16 flex items-center justify-center">
          <div class="relative w-full max-w-md aspect-[4/5] border border-white/20 p-2">
            <img :src="highlight.image" alt="Highlight"
              class="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>

        <!-- Text Right -->
        <div class="w-full md:w-1/2 p-10 md:p-16 md:pl-0 flex flex-col justify-center">
          <span class="text-brand-gold font-bold tracking-[0.2em] text-sm mb-4">{{ highlight.subtitle }}</span>
          <h2 class="font-serif text-5xl md:text-6xl font-bold mb-6">{{ highlight.title }}</h2>
          <p class="text-white/80 text-lg mb-6 leading-relaxed font-light">
            {{ highlight.text1 }}
          </p>
          <p class="text-white/80 text-lg mb-10 leading-relaxed font-light">
            {{ highlight.text2 }}
          </p>
          <div>
            <router-link to="/tradition/tari-kecak"
              class="inline-block border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-8 py-3 rounded text-sm tracking-widest font-semibold transition-colors">
              {{ highlight.button }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-24 px-6 md:px-12 bg-brand-cream text-center relative">
      <!-- Separator -->
      <div class="flex justify-center items-center gap-2 mb-16">
        <div class="w-2 h-2 rounded-full bg-brand-gold"></div>
        <div class="w-2 h-2 rounded-full bg-brand-brown/20"></div>
        <div class="w-2 h-2 rounded-full bg-brand-brown/20"></div>
      </div>

      <div class="max-w-2xl mx-auto">
        <h2 class="font-serif text-4xl font-semibold mb-4 text-brand-brown-light">{{ newsletter.title }}</h2>
        <p class="text-brand-brown/70 mb-10 text-lg">
          {{ newsletter.description }}
        </p>

        <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" @submit.prevent>
          <input type="email" :placeholder="newsletter.placeholder"
            class="flex-1 bg-white border border-brand-brown/20 px-6 py-4 rounded focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
            required />
          <button type="submit"
            class="bg-brand-brown-light hover:bg-brand-brown text-white px-8 py-4 rounded tracking-widest text-sm font-semibold transition-colors whitespace-nowrap">
            {{ newsletter.subscribe }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>
