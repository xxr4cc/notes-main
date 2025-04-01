import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/translations/en.json'

const languageResources = {
    en: { translation: en }
}

i18next.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: languageResources
})

export default i18next
