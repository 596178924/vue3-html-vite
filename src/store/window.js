import { defineStore } from "pinia"
export const useStoreWindowResize = defineStore('StoreWindowResize', {
    state: () => ({
        _window_width: 0,
        _window_height: 0,
    }),
    getters: {
        screenWidth: ({ _window_width }) => _window_width,
        screenHeight: ({ _window_height }) => _window_height,
        screenSize: ({ _window_width, _window_height }) => ({
            width: _window_width,
            height: _window_height
        }),
        screenIsCollapse:({ _window_width }) => _window_width <= 768,
    },
    actions: {
        resizeChange(w, h) {
            this._window_width = w || 0
            this._window_height = h || 0
        }
    },
})
