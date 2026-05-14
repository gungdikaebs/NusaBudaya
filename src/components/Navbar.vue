<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const changeLocale = (newLocale) => {
  locale.value = newLocale
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div>
    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        @click="closeMobileMenu"
      ></div>
    </Transition>

    <!-- Navbar -->
    <nav :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center',
      isScrolled ? 'bg-[#2C1A11]/95 backdrop-blur-md shadow-lg py-3' : 'bg-gradient-to-b from-black/60 to-transparent'
    ]">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3" @click="closeMobileMenu">
        <div class="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-serif font-bold text-xl">
          N
        </div>
        <span class="text-white font-serif text-2xl tracking-wide font-medium">{{ t('common.nav.title') }}</span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-white/90">
        <router-link to="/" class="hover:text-[#D4AF37] transition-colors">{{ t('common.nav.home') }}</router-link>
        <router-link to="/traditions" class="hover:text-[#D4AF37] transition-colors">{{ t('common.nav.tradition') }}</router-link>
        <router-link to="/calendar" class="hover:text-[#D4AF37] transition-colors">{{ t('common.nav.calendar') }}</router-link>
        <router-link to="/help" class="hover:text-[#D4AF37] transition-colors">{{ t('common.nav.help') }}</router-link>
      </div>

      <!-- Desktop Right: Language + (empty space where search was) -->
      <div class="hidden md:flex items-center gap-6">
        <div class="flex items-center gap-2 text-white/80 text-sm font-medium">
          <span @click="changeLocale('id')"
            :class="['cursor-pointer transition-colors', locale === 'id' ? 'text-[#D4AF37]' : 'hover:text-white']">ID</span>
          <span>|</span>
          <span @click="changeLocale('en')"
            :class="['cursor-pointer transition-colors', locale === 'en' ? 'text-[#D4AF37]' : 'hover:text-white']">EN</span>
        </div>
      </div>

      <!-- Mobile: Language Toggle + Hamburger -->
      <div class="flex md:hidden items-center gap-4">
        <div class="flex items-center gap-2 text-white/80 text-xs font-medium">
          <span @click="changeLocale('id')"
            :class="['cursor-pointer transition-colors', locale === 'id' ? 'text-[#D4AF37]' : 'hover:text-white']">ID</span>
          <span class="text-white/40">|</span>
          <span @click="changeLocale('en')"
            :class="['cursor-pointer transition-colors', locale === 'en' ? 'text-[#D4AF37]' : 'hover:text-white']">EN</span>
        </div>

        <!-- Hamburger Button -->
        <button
          @click="toggleMobileMenu"
          class="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span :class="['block w-5 h-0.5 bg-white rounded-full transition-all duration-300', mobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['block w-5 h-0.5 bg-white rounded-full transition-all duration-300', mobileMenuOpen ? 'opacity-0 scale-x-0' : '']"></span>
          <span :class="['block w-5 h-0.5 bg-white rounded-full transition-all duration-300', mobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#2C1A11]/98 backdrop-blur-xl pt-24 pb-8 px-6 shadow-2xl border-b border-white/10"
      >
        <nav class="flex flex-col gap-2">
          <router-link
            to="/"
            @click="closeMobileMenu"
            :class="['flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-bold tracking-widest transition-all', route.path === '/' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'text-white/80 hover:bg-white/5 hover:text-white']"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {{ t('common.nav.home') }}
          </router-link>

          <router-link
            to="/traditions"
            @click="closeMobileMenu"
            :class="['flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-bold tracking-widest transition-all', route.path === '/traditions' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'text-white/80 hover:bg-white/5 hover:text-white']"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {{ t('common.nav.tradition') }}
          </router-link>

          <router-link
            to="/calendar"
            @click="closeMobileMenu"
            :class="['flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-bold tracking-widest transition-all', route.path === '/calendar' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'text-white/80 hover:bg-white/5 hover:text-white']"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ t('common.nav.calendar') }}
          </router-link>

          <router-link
            to="/help"
            @click="closeMobileMenu"
            :class="['flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-bold tracking-widest transition-all', route.path === '/help' ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30' : 'text-white/80 hover:bg-white/5 hover:text-white']"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ t('common.nav.help') }}
          </router-link>
        </nav>

        <!-- Divider -->
        <div class="h-px bg-white/10 my-6"></div>

        <!-- Language in drawer -->
        <div class="flex items-center justify-center gap-6 text-sm font-medium">
          <button
            @click="changeLocale('id')"
            :class="['px-5 py-2 rounded-lg font-bold tracking-widest transition-all', locale === 'id' ? 'bg-[#D4AF37] text-[#2C1A11]' : 'text-white/60 border border-white/20 hover:border-white/40 hover:text-white']"
          >ID</button>
          <button
            @click="changeLocale('en')"
            :class="['px-5 py-2 rounded-lg font-bold tracking-widest transition-all', locale === 'en' ? 'bg-[#D4AF37] text-[#2C1A11]' : 'text-white/60 border border-white/20 hover:border-white/40 hover:text-white']"
          >EN</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

