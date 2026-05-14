<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-[#2C1A11] text-white/80 pt-20 pb-10 px-6 md:px-12">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div class="md:col-span-2">
        <div class="flex items-center gap-3 mb-6">
          <div
            class="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-serif font-bold text-xl">
            N
          </div>
          <span class="text-white font-serif text-2xl tracking-wide font-medium">{{ t('common.nav.title') }}</span>
        </div>
        <p class="text-white/60 font-light leading-relaxed max-w-md">
          {{ t('common.footer.description') }}
        </p>
        <div class="flex gap-4 mt-8">
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
            <span class="sr-only">Facebook</span>
            FB
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
            <span class="sr-only">Twitter</span>
            TW
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
            <span class="sr-only">Instagram</span>
            IG
          </a>
        </div>
      </div>

      <div>
        <h4 class="text-brand-gold font-bold tracking-widest text-sm mb-6">{{ t('common.footer.explore') }}</h4>
        <ul class="space-y-4 font-light">
          <li><router-link to="/" class="hover:text-brand-gold transition-colors">{{ t('common.footer.about') }}</router-link></li>
          <li><router-link to="/" class="hover:text-brand-gold transition-colors">{{ t('common.footer.education') }}</router-link></li>
          <li><router-link to="/" class="hover:text-brand-gold transition-colors">{{ t('common.footer.schedule') }}</router-link></li>
          <li><router-link to="/" class="hover:text-brand-gold transition-colors">{{ t('common.footer.guide') }}</router-link></li>
        </ul>
      </div>

      <div>
        <h4 class="text-brand-gold font-bold tracking-widest text-sm mb-6">{{ t('common.footer.contact') }}</h4>
        <ul class="space-y-4 font-light text-white/60">
          <li>{{ t('common.footer.location') }}</li>
          <li>info@nusabudaya.id</li>
          <li>+62 811 2345 6789</li>
        </ul>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-white/50">
      <p>{{ t('common.footer.copyright') }}</p>
      <div class="flex gap-6">
        <a href="#" class="hover:text-white transition-colors">{{ t('common.footer.privacy') }}</a>
        <a href="#" class="hover:text-white transition-colors">{{ t('common.footer.terms') }}</a>
      </div>
    </div>
  </footer>
</template>
