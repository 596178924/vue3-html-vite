import { defineStore } from "pinia"
import { isBlank, isString } from "@/utils/validate"
// import ThemeVars from '@/themes'
import { ref } from "vue-demi"
import { useCssVar } from "@vueuse/core";
import { mixColor } from "@/utils/colorFn";

export const Modes = ['light', 'dark'];
export const MenuItemTypes = ['default', 'card', 'arrow', 'horizontal', 'vertical'];
// export const ThemeColors = ['primary', 'red', 'green', 'blue', 'yellow', 'pink', 'purple'];
// export const ThemeColors = ['primary', 'red', 'green', 'yellow'];
export const ThemeColors = ['#409EFF', '#f56c6c', '#67c23a', '#e6a23c', '#AD3CE6', '#00CBC4','#FF128D'];
export const TabTypes = [
    {
        value: "",
        label: "default",
    },
    {
        value: "card",
        label: "card",
    },
    {
        value: "border-card",
        label: "border-card",
    },
];

const ThemeColorVars = {
    '--el-color-primary': 0,
    '--el-color-primary-light-3': 30,
    '--el-color-primary-light-5': 50,
    '--el-color-primary-light-7': 70,
    '--el-color-primary-light-8': 80,
    '--el-color-primary-light-9': 90,
}
const ThemeColorVarDark = {
    '--el-color-primary-dark-2': 20,
}

export const useThemeStore = defineStore('theme', {
    state: () => ({
        _themeMode: "light", // 光照模式 light, 暗黑模式dark
        _themeColor:ThemeColors[0], // 主题 颜色
        _themeMenuItemType: "card",//菜单 风格
        _themeTabType: 'card',// header 页签 风格
    }),
    getters: {
        themeMode: ({ _themeMode }) => _themeMode,
        themeColor: ({ _themeColor }) => _themeColor,
        themeMenuItemType: ({ _themeMenuItemType }) => _themeMenuItemType,
        themeTabType: ({ _themeTabType }) => _themeTabType,
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
            // const _isHad = ThemeColors.includes(_color)

            if (_isBlank) {
                this._themeColor = 'primary'
            } else if (_isString) {
                this._themeColor = _color
            } else {
                console.error("updateThemeColor: --- error ---");
            }
            console.log("color", _color);
            console.log("color theme", this._themeColor);

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
        // 切换 主题颜色
        setThemeVarToHtml() {
            const isDark = this.themeMode == 'dark';
            const darkColor = isDark ? '#000000' : '#ffffff'
            const notDarkColor = !isDark ? '#000000' : '#ffffff'
            console.log("darkColor", darkColor);
            console.log("notDarkColor", notDarkColor);

            const color = this._themeColor
            Object.keys(ThemeColorVars).map(_var => {
                useCssVar(_var, ref(null)).value = mixColor(color, darkColor, ThemeColorVars[_var]);
            })
            Object.keys(ThemeColorVarDark).map(_var => {
                useCssVar(_var, ref(null)).value = mixColor(color, notDarkColor, ThemeColorVarDark[_var]);
            })
        },
        updateThemeTabType(_type) {
            const _isString = isString(_type);
            const _isBlank = isBlank(_type);
            const _isHad = TabTypes.map(item => item.value == _type);//includes(_type)
            if (_isBlank) {
                this._themeTabType = ''
            } else if (_isString && _isHad) {
                this._themeTabType = _type
            } else {
                console.error("updateThemeTabType: --- error ---");
            }
        }
    },
})
