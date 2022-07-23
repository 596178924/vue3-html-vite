import { useLanguageStore } from "@/stores/language.js";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

export function UseLanguage() {
  const storeLanguage = useLanguageStore();
  const { setLanguageType } = storeLanguage;
  const { LanguageType } = storeToRefs(storeLanguage);
  const i18n = useI18n();
  const { locale, t } = i18n;
  return {
    $t: t,
    currentLocale: LanguageType,
    changeLanguage: function (
      type
    ) {
      if (!type) {
        const _type = locale.value == "zh-cn" ? "en" : "zh-cn"
        setLanguageType(_type);
        locale.value = _type;
      } else {
        setLanguageType(type)
        locale.value = type
      }
    },
  };
}
