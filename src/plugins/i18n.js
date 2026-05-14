import { createI18n } from 'vue-i18n'

import idCommon from '../locales/id/common.json'
import idHome from '../locales/id/home.json'
import idEvents from '../locales/id/events.json'
import idTraditions from '../locales/id/traditions.json'
import idHelp from '../locales/id/help.json'

import enCommon from '../locales/en/common.json'
import enHome from '../locales/en/home.json'
import enEvents from '../locales/en/events.json'
import enTraditions from '../locales/en/traditions.json'
import enHelp from '../locales/en/help.json'

const messages = {
  id: {
    common: idCommon,
    home: idHome,
    events: idEvents,
    traditions: idTraditions,
    help: idHelp
  },
  en: {
    common: enCommon,
    home: enHome,
    events: enEvents,
    traditions: enTraditions,
    help: enHelp
  }
}


const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'id', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n
