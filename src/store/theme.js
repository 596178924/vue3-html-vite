import { defineStore } from "pinia"
import { isBlank, isString } from "@/utils/validate"
import ThemeVars from '@/themes'
import { ref } from "vue-demi"
import { useCssVar } from "@vueuse/core";
export const Modes = ['light', 'dark'];
export const MenuItemTypes = ['default', 'card', 'arrow', 'horizontal', 'vertical'];
// export const ThemeColors = ['primary', 'red', 'green', 'blue', 'yellow', 'pink', 'purple'];
export const ThemeColors = ['primary', 'red', 'green', 'yellow'];

export const useThemeStore = defineStore('theme', {
    state: () => ({
        _themeMode: "light", // 光照模式 light, 暗黑模式dark
        _themeColor: "primary", // 主题 颜色
        _themeMenuItemType: "card",//菜单 风格
    }),
    getters: {
        themeMode: ({ _themeMode }) => _themeMode,
        themeColor: ({ _themeColor }) => _themeColor,
        themeMenuItemType: ({ _themeMenuItemType }) => _themeMenuItemType,
    },
    actions: {
        // 切换主题 模式
        triggerThemeMode(_mode) {
            if (typeof _mode == 'string' && Modes.includes(_mode)) {
                this._themeMode = _mode
            } else if (typeof _mode == 'boolean' && _mode === true) {
                this._themeMode = 'dark'
            } else if (typeof _mode == 'boolean' && _mode === false) {
                this._themeMode = 'light'
            } else {
                this._themeMode = Modes.find(() => _mode !== this._themeMode)
            }
            this.setThemeVarToHtml()
        },
        // 切换主题 颜色
        updateThemeColor(_color = '') {
            const _isString = isString(_color);
            const _isBlank = isBlank(_color)
            const _isHad = ThemeColors.includes(_color)

            if (_isBlank) {
                this._themeColor = 'primary'
            } else if (_isString && _isHad) {
                this._themeColor = _color
            } else {
                console.error("updateThemeColor: --- error ---");
            }
            this.setThemeVarToHtml()
        },
        // 切换主题 菜单 类型
        updateThemeMenuItemType(_type = '') {
            const _isString = isString(_type);
            const _isBlank = isBlank(_type);
            const _isHad = MenuItemTypes.includes(_type)
            if (_isBlank) {
                this._themeMenuItemType = 'default'
            } else if (_isString && _isHad) {
                this._themeMenuItemType = _type
            } else {
                console.error("updateThemeMenuItemType: --- error ---");
            }
        },
        setThemeVarToHtml() {
            const currentThemeVars = ThemeVars[this._themeColor][this.themeMode]
            // console.log(currentThemeVars);
            if (currentThemeVars) {
                console.log(currentThemeVars);
                Object.keys(currentThemeVars).map(_var => {
                    useCssVar(_var, ref(null)).value = currentThemeVars[_var];
                })
            }
        }
    },
})
