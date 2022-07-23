
import { defineStore } from "pinia"
import config from "@/config"
/*
const layoutTypeIds = ['horizontal', 'vertical', 'column', 'comprehensive', 'common', 'float']
const layoutTypes = [
    {
        id: 'horizontal',
        name: '横向布局',
    },
    {
        id: 'vertical',
        name: '纵向布局',
    },
    {
        id: 'column',
        name: '分栏布局',
    },
    {
        id: 'comprehensive',
        name: '综合布局',
    },
    {
        id: 'common',
        name: '常规布局',
    },
    {
        id: 'float',
        name: '浮动布局',
    },
]
*/
export const layoutTypeIds = ['horizontal', 'vertical', 'column', 'comprehensive', 'common']
export const useLayoutStore = defineStore('layout', {
    state: () => ({
        _layoutType: layoutTypeIds.includes(config.layoutType) ? config.layoutType : 'column', //菜单类型 column,common
        _collapse: false, //是否打开菜单栏
        _drawerCollapse: false, //是否打开移动端菜单栏
        // _activeMenuIsOnly: true, //是否只显示一列
    }),
    getters: {
        currentLayoutType: ({ _layoutType }) => _layoutType,
        isCollapse: ({ _collapse }) => _collapse,
        isDrawerCollapse: ({ _drawerCollapse }) => _drawerCollapse,
        // activeMenuIsOnly: ({ _activeMenuIsOnly }) => _activeMenuIsOnly,
    },
    actions: {
        updateLayoutType(type) {
            if (layoutTypeIds.includes(type)) {
                this._layoutType = type
            }
        },
        triggerCollapse(v) {
            this._collapse = v ? v : !this._collapse
            console.log('triggerCollapse', this._collapse);

        },
        triggerDrawerCollapse(v) {
            this._drawerCollapse = v ? v : !this._drawerCollapse
            console.log('triggerDrawerCollapse', this._drawerCollapse);

        }
    },
})
