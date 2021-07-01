import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import langRu from './langRu.json'
import langEn from './langEn.json'
import langKg from './langKg.json'

const Languages = {
    kg:{
        translation: langKg
    },
    ru:{
        translation:langRu
    },
    en:{
        translation:langEn
    }
}

export const getCurrentLanguage = () => localStorage.getItem('lang')
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng:'en',
        debug:true,
        resources:Languages,
        interpolation:{
            escapeValue: false,
        }
    })
    localStorage.setItem('lang', getCurrentLanguage())
    export default i18n