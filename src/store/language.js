import { defineStore } from "pinia"
// import { useI18n } from "vue-i18n"
import config from "@/config"

const languages = ['zh-cn','en']
function languageValidity(language) {
    return languages.includes(language)
}
export const useLanguageStore = defineStore('Language', {
    state: () => ({
        _locale : config.locale
    }),
    getters: {
        LanguageType:({_locale}) => _locale
    },
    actions: {
        setLanguageType(type) {
            if(languageValidity) {
                this._locale = type;
            } else {
                console.error('language change failed')
            }
        }
    },
})
