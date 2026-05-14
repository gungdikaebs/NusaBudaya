<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()

const help = computed(() => tm('help'))
const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <main class="bg-[#F5F2EA] min-h-screen">
    <!-- Premium Hero Section -->
    <section class="relative min-h-[500px] flex items-center justify-center pt-20 overflow-hidden bg-[#6B1B1E]">
      <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
        <img src="/images/help_hero_bg.png" alt="Hero Background" class="w-full h-full object-cover" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20 z-0"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
          {{ help.heroTitle }}
        </h1>
        <div class="w-24 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
        <p class="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          {{ help.heroSubtitle }}
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="max-w-4xl mx-auto px-6 md:px-12 py-24">
      <div class="mb-12 flex items-center gap-4">
        <div class="w-1.5 h-8 bg-[#6B1B1E] rounded-full"></div>
        <h2 class="font-serif text-3xl font-semibold text-[#3A2318]">
          {{ help.faqTitle }}
        </h2>
      </div>

      <div class="space-y-4">
        <div v-for="(item, index) in help.faq" :key="index"
          class="bg-white rounded border border-[#EBE7D8] shadow-sm overflow-hidden transition-all duration-300"
          :class="{ 'shadow-lg border-[#D4AF37]/40': openFaq === index }">
          <button @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 md:p-8 text-left group cursor-pointer">
            <h3 class="font-serif text-lg md:text-xl font-semibold text-[#3A2318] pr-4 group-hover:text-[#6B1B1E] transition-colors">
              {{ item.question }}
            </h3>
            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              :class="openFaq === index ? 'bg-[#6B1B1E] rotate-180' : 'bg-[#F5F2EA]'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-colors"
                :class="openFaq === index ? 'text-white' : 'text-[#6B1B1E]'" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div v-show="openFaq === index" class="px-6 md:px-8 pb-6 md:pb-8">
            <div class="h-px w-full bg-[#EBE7D8] mb-6"></div>
            <p class="text-[#5C4D43] leading-relaxed font-light">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Etiquette Section -->
    <section class="bg-[#3A2318] py-24 px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
            {{ help.etiquetteTitle }}
          </h2>
          <div class="w-24 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
          <p class="text-white/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {{ help.etiquetteSubtitle }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(rule, index) in help.etiquette" :key="index"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group">
            <div
              class="w-12 h-12 rounded-lg bg-[#6B1B1E] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D4AF37] group-hover:text-[#3A2318] transition-colors duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="rule.icon" />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-white mb-3">{{ rule.title }}</h3>
            <p class="text-white/60 text-sm leading-relaxed font-light">{{ rule.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="max-w-6xl mx-auto px-6 md:px-12 py-24">
      <div class="mb-12 flex items-center gap-4">
        <div class="w-1.5 h-8 bg-[#6B1B1E] rounded-full"></div>
        <h2 class="font-serif text-3xl font-semibold text-[#3A2318]">
          {{ help.contactTitle }}
        </h2>
      </div>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Contact Info -->
        <div class="flex-1 space-y-8">
          <p class="text-[#5C4D43] text-lg font-light leading-relaxed">
            {{ help.contactSubtitle }}
          </p>

          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-lg bg-[#6B1B1E]/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6B1B1E]" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs font-bold tracking-widest text-[#6B1B1E] uppercase mb-1">Email</span>
                <p class="text-[#3A2318] font-medium">{{ help.contactEmail }}</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-lg bg-[#6B1B1E]/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6B1B1E]" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs font-bold tracking-widest text-[#6B1B1E] uppercase mb-1">Telepon</span>
                <p class="text-[#3A2318] font-medium">{{ help.contactPhone }}</p>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-lg bg-[#6B1B1E]/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6B1B1E]" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs font-bold tracking-widest text-[#6B1B1E] uppercase mb-1">Alamat</span>
                <p class="text-[#3A2318] font-medium">{{ help.contactAddress }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="w-full lg:w-[480px] flex-shrink-0">
          <form @submit.prevent
            class="bg-white rounded-xl border border-[#EBE7D8] shadow-sm p-8 md:p-10 space-y-6">
            <div>
              <label class="block text-xs font-bold tracking-widest text-[#6B1B1E] uppercase mb-2">
                {{ help.contactFormName }}
              </label>
              <input type="text"
                class="w-full bg-[#F5F2EA] border border-[#EBE7D8] px-5 py-3.5 rounded focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-[#3A2318]" />
            </div>
            <div>
              <label class="block text-xs font-bold tracking-widest text-[#6B1B1E] uppercase mb-2">
                {{ help.contactFormEmail }}
              </label>
              <input type="email"
                class="w-full bg-[#F5F2EA] border border-[#EBE7D8] px-5 py-3.5 rounded focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-[#3A2318]" />
            </div>
            <div>
              <label class="block text-xs font-bold tracking-widest text-[#6B1B1E] uppercase mb-2">
                Pesan
              </label>
              <textarea rows="5" :placeholder="help.contactFormMessage"
                class="w-full bg-[#F5F2EA] border border-[#EBE7D8] px-5 py-3.5 rounded focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-[#3A2318] resize-none"></textarea>
            </div>
            <button type="submit"
              class="w-full bg-[#6B1B1E] hover:bg-[#D4AF37] text-white hover:text-[#3A2318] py-4 rounded font-bold tracking-widest text-sm transition-colors duration-300">
              {{ help.contactFormSend }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
