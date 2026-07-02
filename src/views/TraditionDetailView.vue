<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { tm, t } = useI18n()

const traditionId = route.params.id
const tradition = computed(() => {
  const traditionsList = tm('traditions')
  return Array.isArray(traditionsList) ? traditionsList.find(t => t.id === traditionId) : null
})

if (!tradition.value) {
  router.push('/traditions')
}
</script>

<template>
  <main v-if="tradition" class="bg-brand-cream min-h-screen pb-32">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
      <div class="absolute inset-0 z-0">
        <img :src="tradition.heroImage" :alt="tradition.title"
          class="w-full h-full object-cover grayscale-[30%] contrast-110" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#2C1A11]"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div
          class="inline-flex items-center gap-2 text-brand-gold font-bold tracking-[0.2em] text-xs mb-6 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-brand-gold/30 uppercase">
          SEJARAH TRADISI
        </div>
        <h1 class="text-white font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
          {{ tradition.title }}
        </h1>
        <div class="flex items-center justify-center gap-2 text-white/90 text-lg font-medium text-sm pb-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-gold" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ tradition.origin }}
        </div>
      </div>
    </section>

    <!-- Content & Sidebar Section -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-20">
      <div class="flex flex-col lg:flex-row gap-12">

        <!-- Main Article -->
        <article
          class="flex-1 bg-white p-8 md:p-16 mt-16 rounded-2xl shadow-2xl shadow-brand-brown/5 border border-brand-brown/5">
          <!-- Drop cap effect for the first letter of the first paragraph -->
          <div
            class=" prose prose-lg md:prose-xl max-w-none prose-p:font-serif prose-p:text-brand-brown/90 prose-p:leading-loose prose-p:mb-8">
            <template v-for="(paragraph, index) in tradition.paragraphs" :key="index">
              <img v-if="paragraph.startsWith('[IMAGE]')" 
                   :src="paragraph.replace('[IMAGE]', '').trim()" 
                   class="w-full h-auto rounded-xl shadow-lg mb-12 object-cover" 
                   alt="Ilustrasi Tradisi" />
              <h2 v-else-if="paragraph.startsWith('[SUBHEADING]')"
                  class="font-serif text-3xl md:text-4xl font-bold text-brand-brown-light mb-6 mt-12">
                {{ paragraph.replace('[SUBHEADING]', '').trim() }}
              </h2>
              <p v-else
                :class="{ 'first-letter:text-7xl first-letter:font-bold first-letter:text-brand-gold first-letter:mr-3 first-letter:float-left': index === 0 }"
                class="text-brand-brown/80 text-lg leading-relaxed mb-12 font-light text-justify">
                {{ paragraph }}
              </p>
            </template>
          </div>

          <div class="mt-16 pt-8 border-t border-brand-brown/10 flex justify-between items-center">
            <router-link to="/traditions"
              class="inline-flex items-center gap-2 text-brand-brown-light font-bold text-sm tracking-widest hover:text-brand-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              KEMBALI KE KATALOG TRADISI
            </router-link>

            <div class="flex gap-4">
              <button
                class="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown-light hover:bg-brand-gold hover:text-white transition-colors border border-brand-brown/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button
                class="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown-light hover:bg-brand-gold hover:text-white transition-colors border border-brand-brown/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
            </div>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="w-full lg:w-[320px] flex-shrink-0 space-y-8 mt-16 lg:mt-0">
          <!-- Values Card -->
          <div class="bg-brand-brown-light text-white p-8 rounded-2xl shadow-xl">
            <h3 class="font-serif text-2xl font-bold mb-6 text-brand-gold flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Nilai Filosofis
            </h3>
            <ul class="space-y-4">
              <li v-for="(value, idx) in tradition.values" :key="idx"
                class="flex items-center gap-3 font-medium text-lg">
                <div class="w-2 h-2 rounded-full bg-brand-gold"></div>
                {{ value }}
              </li>
            </ul>
          </div>

          <!-- Explore More Card -->
          <div class="bg-white p-8 rounded-2xl border border-brand-brown/10 shadow-sm">
            <h3 class="font-serif text-xl font-bold mb-4 text-brand-brown-light">Kunjungi Secara Langsung</h3>
            <p class="text-brand-brown/70 mb-6 text-sm leading-relaxed">
              Dapatkan pengalaman spiritual yang otentik. Lihat jadwal pelaksanaan tradisi ini di kalender event
              terdekat.
            </p>
            <router-link to="/"
              class="block w-full text-center bg-brand-brown text-brand-gold hover:bg-brand-gold hover:text-brand-brown py-3 rounded font-bold tracking-widest text-xs transition-colors">
              CARI JADWAL UPACARA
            </router-link>
          </div>
        </aside>

      </div>
    </section>
  </main>
</template>
