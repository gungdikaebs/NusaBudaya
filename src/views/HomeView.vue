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

const scrollToFeatures = () => {
  const featuresSection = document.getElementById('features-section');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
}
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[100svh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden group">
      <!-- Background Image with dynamic zoom -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img :src="hero.bgImage" alt="Balinese Temple" class="w-full h-full object-cover scale-105 transform transition-transform duration-[20s] ease-out group-hover:scale-110" />
        <!-- Richer gradient overlays -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-brand-cream/90"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 mix-blend-multiply"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto mt-16 sm:mt-20 flex flex-col items-center">
        <!-- Elegant Glassmorphic Badge -->
        <div class="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full border border-brand-gold/30 bg-brand-brown/40 backdrop-blur-md mb-6 sm:mb-8 shadow-[0_0_15px_rgba(192,154,83,0.1)] transition-transform hover:scale-105">
          <span class="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-brand-gold"></span>
          </span>
          <p class="text-brand-gold font-medium tracking-[0.2em] text-xs sm:text-sm uppercase">
            {{ hero.smallText }}
          </p>
        </div>
        
        <!-- Main Title -->
        <h1
          class="text-white font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold mb-6 sm:mb-8 leading-[1.05] drop-shadow-2xl whitespace-pre-line tracking-tight">
          {{ hero.title }}
        </h1>
        
        <!-- Description -->
        <p class="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-10 sm:mb-12 drop-shadow-md leading-relaxed px-4 sm:px-0">
          {{ hero.description }}
        </p>

        <!-- Dynamic Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center justify-center px-4 sm:px-0">
          <router-link to="/calendar"
            class="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark px-8 sm:px-10 py-4 sm:py-4 font-medium text-white shadow-[0_0_30px_-5px_rgba(192,154,83,0.6)] transition-all duration-300 hover:shadow-[0_0_40px_0_rgba(192,154,83,0.8)] hover:-translate-y-1 w-full sm:w-auto">
            <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span class="relative tracking-widest text-sm sm:text-base uppercase font-semibold">{{ hero.buttonText }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 relative transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </router-link>
          
          <button @click="scrollToFeatures"
            class="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 sm:px-10 py-4 sm:py-4 font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:-translate-y-1 w-full sm:w-auto cursor-pointer">
             <span class="tracking-widest text-sm sm:text-base uppercase">Eksplorasi</span>
          </button>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 sm:opacity-60 transition-opacity hover:opacity-100 hidden sm:flex cursor-pointer" @click="scrollToFeatures">
        <span class="text-brand-brown-light text-xs sm:text-sm tracking-[0.2em] uppercase font-bold drop-shadow-md">SCROLL</span>
        <div class="animate-bounce mt-1 bg-brand-cream/80 p-2 rounded-full backdrop-blur-sm shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features-section" class="py-24 px-6 md:px-12 bg-brand-cream text-center relative z-20 -mt-10">
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
